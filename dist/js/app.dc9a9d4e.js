(function(e){function t(t){for(var n,r,o=t[0],s=t[1],c=t[2],m=0,d=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(d.length)d.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==i[s]&&(n=!1)}n&&(l.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},l=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=s;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("7a23");const i={id:"app"},l={class:"app-container"},r=Object(n["i"])("h2",null,"Simulador de notes",-1),o=Object(n["i"])("p",null,"Tria l'avaluació",-1),s=Object(n["i"])("span",null,"      ",-1),c={key:0},u=Object(n["i"])("br",null,null,-1),m={key:0},d={key:0},h=Object(n["i"])("br",null,null,-1),b=Object(n["i"])("br",null,null,-1),j={key:1},p=Object(n["i"])("sup",null,"*",-1),g={key:0},O=Object(n["i"])("br",null,null,-1);function w(e,t,a,w,f,v){const _=Object(n["t"])("SelectButton"),y=Object(n["t"])("InputNumber"),x=Object(n["t"])("Slider"),G=Object(n["t"])("Panel"),k=Object(n["t"])("Message"),P=Object(n["t"])("Fieldset"),V=Object(n["t"])("Card"),C=Object(n["t"])("Toast");return Object(n["p"])(),Object(n["h"])("div",i,[Object(n["i"])("div",l,[r,o,Object(n["k"])(_,{modelValue:f.selectedAva,"onUpdate:modelValue":t[0]||(t[0]=e=>f.selectedAva=e),options:f.avaluacions,optionLabel:"name",onChange:t[1]||(t[1]=e=>v.onAvaChange(e))},null,8,["modelValue","options"]),Object(n["k"])(G,null,{header:Object(n["z"])(()=>[Object(n["j"])(Object(n["w"])(f.wonline)+"% Activitats avaluables en línia ",1)]),default:Object(n["z"])(()=>[s,Object(n["k"])(y,{modelValue:f.e_online,"onUpdate:modelValue":[t[2]||(t[2]=e=>f.e_online=e),t[3]||(t[3]=e=>v.onGradeChange(e))],mode:"decimal",minFractionDigits:0,maxFractionDigits:1,step:.1,min:0,max:10,showButtons:!1},null,8,["modelValue","step"]),Object(n["k"])(x,{modelValue:f.e_online,"onUpdate:modelValue":t[4]||(t[4]=e=>f.e_online=e),step:.1,min:0,max:10,onChange:t[5]||(t[5]=e=>v.onGradeChange(e)),style:{"margin-left":"25px"}},null,8,["modelValue","step"])]),_:1}),Object(n["k"])(G,null,{header:Object(n["z"])(()=>[Object(n["j"])(Object(n["w"])(f.wexam)+"% Exàmens ",1)]),default:Object(n["z"])(()=>[f.showEGener?(Object(n["p"])(),Object(n["f"])(P,{key:0},{legend:Object(n["z"])(()=>[Object(n["j"])(Object(n["w"])(f.wGener)+"% Nota examen gener ",1)]),default:Object(n["z"])(()=>[Object(n["k"])(y,{modelValue:f.e_gener,"onUpdate:modelValue":[t[6]||(t[6]=e=>f.e_gener=e),t[7]||(t[7]=e=>v.onGradeChange(e))],mode:"decimal",minFractionDigits:0,maxFractionDigits:1,step:.1,min:0,max:10,showButtons:!1},null,8,["modelValue","step"]),Object(n["k"])(x,{modelValue:f.e_gener,"onUpdate:modelValue":t[8]||(t[8]=e=>f.e_gener=e),step:.1,min:0,max:10,onChange:t[9]||(t[9]=e=>v.onGradeChange(e))},null,8,["modelValue","step"]),f.e_gener<f.ne_min&&1===f.selectedAva.value?(Object(n["p"])(),Object(n["h"])("div",c,[u,Object(n["k"])(k,{severity:"error"},{default:Object(n["z"])(()=>[Object(n["j"])("Cal una nota mínima d'examen de "+Object(n["w"])(f.ne_min)+" per poder comptar les activitats en línia.",1)]),_:1})])):Object(n["g"])("",!0)]),_:1})):Object(n["g"])("",!0),f.showEMaig?(Object(n["p"])(),Object(n["f"])(P,{key:1},{legend:Object(n["z"])(()=>[Object(n["j"])(Object(n["w"])(f.wMaig)+"% Nota examen maig ",1),f.isParcials?(Object(n["p"])(),Object(n["h"])("sup",m,"*")):Object(n["g"])("",!0)]),default:Object(n["z"])(()=>[Object(n["k"])(y,{modelValue:f.e_maig,"onUpdate:modelValue":[t[10]||(t[10]=e=>f.e_maig=e),t[11]||(t[11]=e=>v.onGradeChange(e))],mode:"decimal",minFractionDigits:0,maxFractionDigits:1,step:.1,min:0,max:10,showButtons:!1},null,8,["modelValue","step"]),Object(n["k"])(x,{modelValue:f.e_maig,"onUpdate:modelValue":t[12]||(t[12]=e=>f.e_maig=e),step:.1,min:0,max:10,onChange:t[13]||(t[13]=e=>v.onGradeChange(e))},null,8,["modelValue","step"]),f.e_maig<f.ne_min?(Object(n["p"])(),Object(n["h"])("div",d,[h,Object(n["k"])(k,{severity:"error"},{default:Object(n["z"])(()=>[Object(n["j"])("Cal una nota mínima d'examen de "+Object(n["w"])(f.ne_min)+" per poder comptar les activitats en línia.",1)]),_:1})])):Object(n["g"])("",!0),b,f.isParcials?(Object(n["p"])(),Object(n["h"])("small",j,[p,Object(n["j"])(Object(n["w"])(f.comentariExamenMaig),1)])):Object(n["g"])("",!0)]),_:1})):Object(n["g"])("",!0),f.showEJuny?(Object(n["p"])(),Object(n["f"])(P,{key:2},{legend:Object(n["z"])(()=>[Object(n["j"])(Object(n["w"])(f.wJuny)+"% Nota examen juny ",1)]),default:Object(n["z"])(()=>[Object(n["k"])(y,{modelValue:f.e_juny,"onUpdate:modelValue":[t[14]||(t[14]=e=>f.e_juny=e),t[15]||(t[15]=e=>v.onGradeChange(e))],mode:"decimal",minFractionDigits:0,maxFractionDigits:1,step:.1,min:0,max:10,showButtons:!1},null,8,["modelValue","step"]),Object(n["k"])(x,{modelValue:f.e_juny,"onUpdate:modelValue":t[16]||(t[16]=e=>f.e_juny=e),step:.1,min:0,max:10,onChange:t[17]||(t[17]=e=>v.onGradeChange(e))},null,8,["modelValue","step"]),f.e_juny<f.ne_min?(Object(n["p"])(),Object(n["h"])("div",g,[O,Object(n["k"])(k,{severity:"error"},{default:Object(n["z"])(()=>[Object(n["j"])("Cal una nota mínima d'examen de "+Object(n["w"])(f.ne_min)+" per poder comptar les activitats en línia.",1)]),_:1})])):Object(n["g"])("",!0)]),_:1})):Object(n["g"])("",!0)]),_:1}),Object(n["k"])(V,null,{content:Object(n["z"])(()=>[Object(n["i"])("p",null,"Nota "+Object(n["w"])(f.finalLabel),1),Object(n["i"])("p",null,Object(n["w"])(f.yourGrade),1)]),_:1})]),Object(n["k"])(C)])}class f{constructor(e,t){this.w1=e,this.w2=t}eval(e,t){return.01*(this.w1*e+this.w2*t)}}class v{constructor(e,t){this.minGrade=e,this.weighter=t}eval(e,t){return e<this.minGrade?e:this.weighter.eval(e,t)}}class _{constructor(e,t){this.strategy=e,this.weighter=t}eval(e,t){return"g5"===this.strategy&&this.e_maig>=5?this.weighter.eval(5,t):"mm"===this.strategy&&t>e?t:this.weighter.eval(e,t)}}var y={data(){return{isParcials:!1,finalLabel:"avaluació",yourGrade:0,wexam:70,wonline:30,ne_min:0,e_online:5,e_gener:5,e_maig:5,e_juny:5,showEGener:!0,showEMaig:!1,showEJuny:!1,wGener:100,wMaig:0,wJuny:100,wGenerDefault:20,comentariExamenMaig:"",rec:"",selectedAva:{name:"Gener",value:1},avaluacions:[{name:"Gener",value:1},{name:"Maig",value:2},{name:"Juny",value:3}]}},created:function(){this.urlParams=new URLSearchParams(window.location.search)},mounted:function(){if(this.urlParams.get("we"))try{let e=parseInt(this.urlParams.get("we"));e>50&&e<=100&&(this.wexam=e,this.wonline=100-e)}catch(e){console.error(e)}if(this.urlParams.get("m")&&(this.isParcials="parcials"==this.urlParams.get("m").toLowerCase().trim(),this.isParcials&&(this.wGenerDefault=50)),this.urlParams.get("wg"))try{let e=parseInt(this.urlParams.get("wg"));e>10&&e<=100&&(this.wGenerDefault=e)}catch(e){console.error(e)}if(this.urlParams.get("rec"))try{let e=this.urlParams.get("rec");"g5"!==e&&"mm"!==e||(this.rec=e)}catch(e){console.error(e)}if(this.urlParams.get("emin"))try{let e=this.urlParams.get("emin");this.ne_min=parseFloat(e)}catch(e){console.error(e)}this.greet(),this.onGradeChange()},methods:{greet(){this.$toast.add({severity:"warn",summary:"Tingues en compte que estàs en un simulador i que es mostraran notes que no són reals."})},onAvaChange(e){let t=this.selectedAva.value;this.showEGener=t<3,this.showEMaig=2==t,this.showEJuny=3==t,1==t?(this.finalLabel="avaluació",this.wGener=100):2==t?(this.wGener=this.wGenerDefault,this.wMaig=100-this.wGenerDefault,this.finalLabel="curs"):this.finalLabel="curs (recuperació)",this.onGradeChange()},onGradeChange(e){const t=new f(this.wexam,this.wonline),a=new v(this.ne_min,t),n=new f(this.wGener,this.wMaig),i=new _(this.rec,n);let l=this.selectedAva.value;const r=a.eval(this.e_gener,this.e_online);if(1==l)this.yourGrade=r.toFixed(1);else if(2==l){let e=null;if(this.isParcials){let t=Math.round(r).toFixed(0);t>=5?(e=n.eval(this.e_gener,this.e_maig),this.comentariExamenMaig="La 1a avaluació està aprovada amb un "+t+", l'examen de maig és un parcial. Es fa la mitjana dels dos exàmens."):(this.comentariExamenMaig="La 1a avaluació està supesa amb un "+t+", l'examen de maig és un global. La nota de l'examen de gener no compta.",e=this.e_maig)}else e=i.eval(this.e_gener,this.e_maig);this.yourGrade=a.eval(e,this.e_online).toFixed(1)}else 3==l&&(this.yourGrade=a.eval(this.e_juny,this.e_online).toFixed(1))}}},x=(a("8db3"),a("6b0d")),G=a.n(x);const k=G()(y,[["render",w]]);var P=k,V=a("9319"),C=a("8398"),M=a("a5af"),E=a("743f"),F=a("14f2"),z=a("9899"),D=a("4b7b"),L=a("1e2d"),S=a("3822"),U=a("b3b6"),A=a("485c"),J=a("8b6b");a("098b"),a("e1ae"),a("4121");const B=Object(n["e"])(P);B.use(V["a"]),B.use(A["a"]),B.component("InputText",C["a"]),B.component("SelectButton",M["a"]),B.component("Panel",L["a"]),B.component("Fieldset",E["a"]),B.component("Slider",F["a"]),B.component("Toast",U["a"]),B.component("Card",z["a"]),B.component("InputNumber",S["a"]),B.component("Badge",D["a"]),B.component("Message",J["a"]),B.mount("#app")},"8db3":function(e,t,a){"use strict";a("d9f9")},d9f9:function(e,t,a){}});
//# sourceMappingURL=app.dc9a9d4e.js.map