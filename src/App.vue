
<template>
  <div id="app">
    <div class="app-container">
      <h2>Simulador de notes</h2>
      <p>Tria l'avaluació</p>
      <SelectButton
        v-model="selectedAva"
        :options="avaluacions"
        optionLabel="name"
        @change="onAvaChange($event)"
      />

      <Panel>
        <template #header>
          {{ wonline }}% Activitats avaluables en línia
        </template>

        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <InputNumber
          v-model="e_online"
          mode="decimal"
          :minFractionDigits="0"
          :maxFractionDigits="1"
          :step="0.1"
          :min="0"
          :max="10"
          :showButtons="false"
          @update:modelValue="onGradeChange($event)"
        />
        <Slider
          v-model="e_online"
          :step="0.1"
          :min="0"
          :max="10"
          @change="onGradeChange($event)"
          style="margin-left: 25px"
        />
      </Panel>
      <Panel>
        <template #header> {{ wexam }}% Exàmens </template>

        <Fieldset v-if="showEGener">
          <template #legend> {{ wGener }}% Nota examen gener </template>
          <InputNumber
            v-model="e_gener"
            mode="decimal"
            :minFractionDigits="0"
            :maxFractionDigits="1"
            :step="0.1"
            :min="0"
            :max="10"
            :showButtons="false"
            @update:modelValue="onGradeChange($event)"
          />
          <Slider
            v-model="e_gener"
            :step="0.1"
            :min="0"
            :max="10"
            @change="onGradeChange($event)"
          />
          <div v-if="e_gener < ne_min && selectedAva.value === 1">
          <br>
          <Message severity="error">Cal una nota mínima d'examen de {{ne_min}} per poder comptar les activitats en línia.</Message>
          </div>
        </Fieldset>
        <Fieldset v-if="showEMaig">
          <template #legend> {{ wMaig }}% Nota examen maig <sup  v-if="isParcials">*</sup></template>
          <InputNumber
            v-model="e_maig"
            mode="decimal"
            :minFractionDigits="0"
            :maxFractionDigits="1"
            :step="0.1"
            :min="0"
            :max="10"
            :showButtons="false"
            @update:modelValue="onGradeChange($event)"
          />
          <Slider
            v-model="e_maig"
            :step="0.1"
            :min="0"
            :max="10"
            @change="onGradeChange($event)"
          />
          <div v-if="e_maig < ne_min">
          <br>
          <Message severity="error">Cal una nota mínima d'examen de {{ne_min}} per poder comptar les activitats en línia.</Message>
          </div>
          <br>
          <small v-if="isParcials"><sup>*</sup>{{comentariExamenMaig}}</small>
        </Fieldset>
        <Fieldset v-if="showEJuny">
          <template #legend> {{ wJuny }}% Nota examen juny </template>
          <InputNumber
            v-model="e_juny"
            mode="decimal"
            :minFractionDigits="0"
            :maxFractionDigits="1"
            :step="0.1"
            :min="0"
            :max="10"
            :showButtons="false"
            @update:modelValue="onGradeChange($event)"
          />
          <Slider
            v-model="e_juny"
            :step="0.1"
            :min="0"
            :max="10"
            @change="onGradeChange($event)"
          />
          <div v-if="e_juny < ne_min">
          <br>
          <Message severity="error">Cal una nota mínima d'examen de {{ne_min}} per poder comptar les activitats en línia.</Message>
          </div>
        </Fieldset>
      </Panel>
      <Card>
        <template #content>
          <p>Nota {{ finalLabel }}</p>
          <p>{{ yourGrade }}</p>
        </template>
      </Card>
    </div>

    <Toast />
  </div>
</template>

<script>
import { GradeWeighter, MinExamGradeDecorator, RecoveryStrategyDecorator } from "./decorators";

/* eslint-disable */
export default {
  data() {
    return {
      isParcials: false,
      finalLabel: "avaluació",
      yourGrade: 0,
      wexam: 70,
      wonline: 30,
      ne_min: 0,
      e_online: 5,
      e_gener: 5,
      e_maig: 5,
      e_juny: 5,
      showEGener: true,
      showEMaig: false,
      showEJuny: false,
      wGener: 100,
      wMaig: 0,
      wJuny: 100,
      wGenerDefault: 20,
      comentariExamenMaig : '',
      rec: '',
      selectedAva: { name: "Gener", value: 1 },
      avaluacions: [
        { name: "Gener", value: 1 },
        { name: "Maig", value: 2 },
        { name: "Juny", value: 3 },
      ],
    };
  },
  created: function () {
    this.urlParams = new URLSearchParams(window.location.search);
  },
  mounted: function () {
    // Pes relatiu dels examens vs activitats online
    if (this.urlParams.get("we")) {
      try {
        let value = parseInt(this.urlParams.get("we"));
        if (value > 50 && value <= 100) {
          this.wexam = value;
          this.wonline = 100 - value;
        }
      } catch (ex) {
        console.error(ex);
      }
    }

    //Empra el model de parcials
    if (this.urlParams.get("m")) {
      this.isParcials =
        this.urlParams.get("m").toLowerCase().trim() == "parcials";
      if (this.isParcials) {
        this.wGenerDefault = 50;
      }
    }

    // Pes relatiu de l'examen de gener vs maig
    if (this.urlParams.get("wg")) {
      try {
        let value = parseInt(this.urlParams.get("wg"));
        if (value > 10 && value <= 100) {
          this.wGenerDefault = value;
        }
      } catch (ex) {
        console.error(ex);
      }
    }

    // Aplica algun model de recuperació?
    if (this.urlParams.get("rec")) {
      try {
        let value = this.urlParams.get("rec");
        if (value === "g5" || value === "mm") {
          this.rec = value;
        }
      } catch (ex) {
        console.error(ex);
      }
    }

    // Aplica una nota mínima d'exàmens?
    if (this.urlParams.get("emin")) {
      try {
        let value = this.urlParams.get("emin");
        this.ne_min = parseFloat(value);
      } catch (ex) {
        console.error(ex);
      }
    }

    this.greet();
    this.onGradeChange();
  },
  methods: {
    greet() {
      this.$toast.add({
        severity: "warn",
        summary:
          "Tingues en compte que estàs en un simulador i que es mostraran notes que no són reals.",
      });
    },
    onAvaChange($event) {
      let ava = this.selectedAva.value;

      this.showEGener = ava < 3;
      this.showEMaig = ava == 2;
      this.showEJuny = ava == 3;
      if (ava == 1) {
        this.finalLabel = "avaluació";
        this.wGener = 100;
      } else if (ava == 2) {
        this.wGener = this.wGenerDefault;
        this.wMaig = 100 - this.wGenerDefault;
        this.finalLabel = "curs";
      } else {
        this.finalLabel = "curs (recuperació)";
      }
      this.onGradeChange();
    },
    onGradeChange($event) {
      const weightExamWork = new GradeWeighter(this.wexam, this.wonline);
      const weightExamWorkDecorated = new MinExamGradeDecorator(this.ne_min, weightExamWork);
      const avaWeighter = new GradeWeighter(this.wGener, this.wMaig);
      const avaWeighterRecoveryStrategy = new RecoveryStrategyDecorator(this.rec, avaWeighter);

      let ava = this.selectedAva.value;
      const notaGener = weightExamWorkDecorated.eval(this.e_gener, this.e_online);
      if (ava == 1) {
        /** CAS EXAMEN GENER */
        this.yourGrade = notaGener.toFixed(1);
      } else if (ava == 2) {
        let nexams = null;
        /** CAS PER PARCIALS */
        if (this.isParcials) {
          // Obté la nota de gener
          let butlletiGener = Math.round(notaGener).toFixed(0);
          if (butlletiGener >= 5) {
            // Fa la proporció
            nexams = avaWeighter.eval(this.e_gener, this.e_maig);
            this.comentariExamenMaig = 'La 1a avaluació està aprovada amb un '+butlletiGener + ', l\'examen de maig és un parcial. Es fa la mitjana dels dos exàmens.';
          } else {
            // Només examen maig
            this.comentariExamenMaig = 'La 1a avaluació està supesa amb un '+butlletiGener + ', l\'examen de maig és un global. La nota de l\'examen de gener no compta.';
            nexams = this.e_maig;
          }
        } else {
          /** CAS PER PONDERACIÓ DE AVALUACIONS */
          nexams = avaWeighterRecoveryStrategy.eval(this.e_gener, this.e_maig);
        }

        this.yourGrade = weightExamWorkDecorated.eval(nexams, this.e_online).toFixed(1);
       
      } else if (ava == 3) {
        /*** CAS DE LA EXTRAORDINÀRIA */
        this.yourGrade = weightExamWorkDecorated.eval(this.e_juny, this.e_online).toFixed(1);
      }
    },
  },
};
</script>

<style>
body {
  background: aliceblue;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: white;
}

.p-slider {
  width: 200px;
  margin-top: 4px;
}

.p-fieldset-legend {
  font-size: 92% !important;
}

.p-panel-header {
  font-weight: bold !important;
  font-size: 105% !important;
}

.p-card .p-card-content {
  text-align: right !important;
  padding: 0 !important;
}
.p-card p {
  font-size: 108%;
  font-weight: bold;
}
.p-badge {
  width: 40px !important;
  font-size: 104% !important;
}
</style>