(function(e){function t(t){for(var n,o,s=t[0],r=t[1],c=t[2],m=0,d=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(d.length)d.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,s=1;s<a.length;s++){var r=a[s];0!==i[r]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=r;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1e9b":function(e,t,a){"use strict";a("988a")},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("7a23");const i={id:"app"},l={class:"app-container"},o=Object(n["i"])("h2",null,"Simulador de notes",-1),s=Object(n["i"])("p",null,"Tria l'avaluació",-1),r=Object(n["i"])("span",null,"      ",-1),c={key:0},u=Object(n["i"])("br",null,null,-1),m={key:0},d=Object(n["i"])("sup",null,"*",-1);function h(e,t,a,h,b,p){const g=Object(n["t"])("SelectButton"),j=Object(n["t"])("InputNumber"),O=Object(n["t"])("Slider"),w=Object(n["t"])("Panel"),f=Object(n["t"])("Fieldset"),_=Object(n["t"])("Card"),y=Object(n["t"])("Toast");return Object(n["p"])(),Object(n["h"])("div",i,[Object(n["i"])("div",l,[o,s,Object(n["k"])(g,{modelValue:b.selectedAva,"onUpdate:modelValue":t[0]||(t[0]=e=>b.selectedAva=e),options:b.avaluacions,optionLabel:"name",onChange:t[1]||(t[1]=e=>p.onAvaChange(e))},null,8,["modelValue","options"]),Object(n["k"])(w,null,{header:Object(n["z"])(()=>[Object(n["j"])(Object(n["w"])(b.wonline)+"% Activitats avaluables en línia ",1)]),default:Object(n["z"])(()=>[r,Object(n["k"])(j,{modelValue:b.e_online,"onUpdate:modelValue":[t[2]||(t[2]=e=>b.e_online=e),t[3]||(t[3]=e=>p.onGradeChange(e))],mode:"decimal",minFractionDigits:0,maxFractionDigits:1,step:.1,min:0,max:10,showButtons:!1},null,8,["modelValue","step"]),Object(n["k"])(O,{modelValue:b.e_online,"onUpdate:modelValue":t[4]||(t[4]=e=>b.e_online=e),step:.1,min:0,max:10,onChange:t[5]||(t[5]=e=>p.onGradeChange(e)),style:{"margin-left":"25px"}},null,8,["modelValue","step"])]),_:1}),Object(n["k"])(w,null,{header:Object(n["z"])(()=>[Object(n["j"])(Object(n["w"])(b.wexam)+"% Exàmens ",1)]),default:Object(n["z"])(()=>[b.showEGener?(Object(n["p"])(),Object(n["f"])(f,{key:0},{legend:Object(n["z"])(()=>[Object(n["j"])(Object(n["w"])(b.wGener)+"% Nota examen gener ",1)]),default:Object(n["z"])(()=>[Object(n["k"])(j,{modelValue:b.e_gener,"onUpdate:modelValue":[t[6]||(t[6]=e=>b.e_gener=e),t[7]||(t[7]=e=>p.onGradeChange(e))],mode:"decimal",minFractionDigits:0,maxFractionDigits:1,step:.1,min:0,max:10,showButtons:!1},null,8,["modelValue","step"]),Object(n["k"])(O,{modelValue:b.e_gener,"onUpdate:modelValue":t[8]||(t[8]=e=>b.e_gener=e),step:.1,min:0,max:10,onChange:t[9]||(t[9]=e=>p.onGradeChange(e))},null,8,["modelValue","step"])]),_:1})):Object(n["g"])("",!0),b.showEMaig?(Object(n["p"])(),Object(n["f"])(f,{key:1},{legend:Object(n["z"])(()=>[Object(n["j"])(Object(n["w"])(b.wMaig)+"% Nota examen maig ",1),b.isParcials?(Object(n["p"])(),Object(n["h"])("sup",c,"*")):Object(n["g"])("",!0)]),default:Object(n["z"])(()=>[Object(n["k"])(j,{modelValue:b.e_maig,"onUpdate:modelValue":[t[10]||(t[10]=e=>b.e_maig=e),t[11]||(t[11]=e=>p.onGradeChange(e))],mode:"decimal",minFractionDigits:0,maxFractionDigits:1,step:.1,min:0,max:10,showButtons:!1},null,8,["modelValue","step"]),Object(n["k"])(O,{modelValue:b.e_maig,"onUpdate:modelValue":t[12]||(t[12]=e=>b.e_maig=e),step:.1,min:0,max:10,onChange:t[13]||(t[13]=e=>p.onGradeChange(e))},null,8,["modelValue","step"]),u,b.isParcials?(Object(n["p"])(),Object(n["h"])("small",m,[d,Object(n["j"])(Object(n["w"])(b.comentariExamenMaig),1)])):Object(n["g"])("",!0)]),_:1})):Object(n["g"])("",!0),b.showEJuny?(Object(n["p"])(),Object(n["f"])(f,{key:2},{legend:Object(n["z"])(()=>[Object(n["j"])(Object(n["w"])(b.wJuny)+"% Nota examen juny ",1)]),default:Object(n["z"])(()=>[Object(n["k"])(j,{modelValue:b.e_juny,"onUpdate:modelValue":[t[14]||(t[14]=e=>b.e_juny=e),t[15]||(t[15]=e=>p.onGradeChange(e))],mode:"decimal",minFractionDigits:0,maxFractionDigits:1,step:.1,min:0,max:10,showButtons:!1},null,8,["modelValue","step"]),Object(n["k"])(O,{modelValue:b.e_juny,"onUpdate:modelValue":t[16]||(t[16]=e=>b.e_juny=e),step:.1,min:0,max:10,onChange:t[17]||(t[17]=e=>p.onGradeChange(e))},null,8,["modelValue","step"])]),_:1})):Object(n["g"])("",!0)]),_:1}),Object(n["k"])(_,null,{content:Object(n["z"])(()=>[Object(n["i"])("p",null,"Nota "+Object(n["w"])(b.finalLabel),1),Object(n["i"])("p",null,Object(n["w"])(b.yourGrade),1)]),_:1})]),Object(n["k"])(y)])}var b={data(){return{isParcials:!1,finalLabel:"avaluació",yourGrade:0,wexam:70,wonline:30,e_online:5,e_gener:5,e_maig:5,e_juny:5,showEGener:!0,showEMaig:!1,showEJuny:!1,wGener:100,wMaig:0,wJuny:100,wGenerDefault:20,comentariExamenMaig:"",rec:"",selectedAva:{name:"Gener",value:1},avaluacions:[{name:"Gener",value:1},{name:"Maig",value:2},{name:"Juny",value:3}]}},created:function(){this.urlParams=new URLSearchParams(window.location.search)},mounted:function(){if(this.urlParams.get("we"))try{let e=parseInt(this.urlParams.get("we"));e>50&&e<=100&&(this.wexam=e,this.wonline=100-e)}catch(e){console.error(e)}if(this.urlParams.get("m")&&(this.isParcials="parcials"==this.urlParams.get("m").toLowerCase().trim(),this.isParcials&&(this.wGenerDefault=50)),this.urlParams.get("wg"))try{let e=parseInt(this.urlParams.get("wg"));e>10&&e<=100&&(this.wGenerDefault=e)}catch(e){console.error(e)}if(this.urlParams.get("rec"))try{let e=this.urlParams.get("rec");"g5"!==e&&"mm"!==e||(this.rec=e)}catch(e){console.error(e)}this.greet(),this.onGradeChange()},methods:{greet(){this.$toast.add({severity:"warn",summary:"Tingues en compte que estàs en un simulador i que es mostraran notes que no són reals."})},onAvaChange(e){let t=this.selectedAva.value;this.showEGener=t<3,this.showEMaig=2==t,this.showEJuny=3==t,1==t?(this.finalLabel="avaluació",this.wGener=100):2==t?(this.wGener=this.wGenerDefault,this.wMaig=100-this.wGenerDefault,this.finalLabel="curs"):this.finalLabel="curs (recuperació)",this.onGradeChange()},onGradeChange(e){let t=this.selectedAva.value;if(1==t)this.yourGrade=(.01*(this.wexam*this.e_gener+this.wonline*this.e_online)).toFixed(1);else if(2==t){let e=null;if(this.isParcials){let t=Math.round(.01*(this.wexam*this.e_gener+this.wonline*this.e_online)).toFixed(0);t>=5?(e=.01*(this.wGener*this.e_gener+this.wMaig*this.e_maig),this.comentariExamenMaig="La 1a avaluació està aprovada amb un "+t+", l'examen de maig és un parcial. Es fa la mitjana dels dos exàmens."):(this.comentariExamenMaig="La 1a avaluació està supesa amb un "+t+", l'examen de maig és un global. La nota de l'examen de gener no compta.",e=this.e_maig)}else e="g5"===this.rec&&this.e_maig>=5?.01*(5*this.wGener+this.wMaig*this.e_maig):"mm"===this.rec&&this.e_maig>this.e_gener?this.e_maig:.01*(this.wGener*this.e_gener+this.wMaig*this.e_maig);this.yourGrade=(.01*(this.wexam*e+this.wonline*this.e_online)).toFixed(1)}else 3==t&&(this.yourGrade=(.01*(this.wexam*this.e_juny+this.wonline*this.e_online)).toFixed(1))}}},p=(a("1e9b"),a("6b0d")),g=a.n(p);const j=g()(b,[["render",h]]);var O=j,w=a("9319"),f=a("8398"),_=a("a5af"),y=a("743f"),v=a("14f2"),x=a("9899"),G=a("4b7b"),V=a("1e2d"),P=a("3822"),k=a("b3b6"),C=a("485c");a("098b"),a("e1ae"),a("4121");const M=Object(n["e"])(O);M.use(w["a"]),M.use(C["a"]),M.component("InputText",f["a"]),M.component("SelectButton",_["a"]),M.component("Panel",V["a"]),M.component("Fieldset",y["a"]),M.component("Slider",v["a"]),M.component("Toast",k["a"]),M.component("Card",x["a"]),M.component("InputNumber",P["a"]),M.component("Badge",G["a"]),M.mount("#app")},"988a":function(e,t,a){}});
//# sourceMappingURL=app.677942f1.js.map