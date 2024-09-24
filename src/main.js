/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue';

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import Fieldset from 'primevue/fieldset';
import Slider from 'primevue/slider';
import Card from 'primevue/card';
import Badge from 'primevue/badge';
import Panel from 'primevue/panel';
import InputNumber from 'primevue/inputnumber';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Message from 'primevue/message';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'; 

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);

app.component('InputText', InputText);
app.component('SelectButton', SelectButton);
app.component('Panel', Panel);
app.component('Fieldset', Fieldset);
app.component('Slider', Slider);
app.component('Toast', Toast);
app.component('Card', Card);
app.component('InputNumber', InputNumber);
app.component('Badge', Badge);
app.component('Message', Message);

app.mount('#app')
