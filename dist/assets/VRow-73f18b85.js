import{S as u,T as c,g as b,m,e as C,U as N}from"./index-1fdd0dd0.js";const j=(()=>u.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),k=(()=>u.reduce((e,a)=>{const t="offset"+c(a);return e[t]={type:[String,Number],default:null},e},{}))(),v=(()=>u.reduce((e,a)=>{const t="order"+c(a);return e[t]={type:[String,Number],default:null},e},{}))(),y={col:Object.keys(j),offset:Object.keys(k),order:Object.keys(v)};function P(e,a,t){let l=e;if(!(t==null||t===!1)){if(a){const n=a.replace(e,"");l+=`-${n}`}return e==="col"&&(l="v-"+l),e==="col"&&(t===""||t===!0)||(l+=`-${t}`),l.toLowerCase()}}const G=["auto","start","end","center","baseline","stretch"],M=b()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...j,offset:{type:[String,Number],default:null},...k,order:{type:[String,Number],default:null},...v,alignSelf:{type:String,default:null,validator:e=>G.includes(e)},...m()},setup(e,a){let{slots:t}=a;const l=C(()=>{const n=[];let s;for(s in y)y[s].forEach(o=>{const i=e[o],g=P(s,o,i);g&&n.push(g)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return N(e.tag,{class:l.value},(n=t.default)==null?void 0:n.call(t))}}}),f=["start","end","center"],L=["space-between","space-around","space-evenly"];function d(e,a){return u.reduce((t,l)=>{const n=e+c(l);return t[n]=a(),t},{})}const O=[...f,"baseline","stretch"],V=e=>O.includes(e),$=d("align",()=>({type:String,default:null,validator:V})),T=[...f,...L],h=e=>T.includes(e),w=d("justify",()=>({type:String,default:null,validator:h})),U=[...f,...L,"stretch"],E=e=>U.includes(e),A=d("alignContent",()=>({type:String,default:null,validator:E})),S={align:Object.keys($),justify:Object.keys(w),alignContent:Object.keys(A)},_={align:"align",justify:"justify",alignContent:"align-content"};function I(e,a,t){let l=_[e];if(t!=null){if(a){const n=a.replace(e,"");l+=`-${n}`}return l+=`-${t}`,l.toLowerCase()}}const K=b()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:V},...$,justify:{type:String,default:null,validator:h},...w,alignContent:{type:String,default:null,validator:E},...A,...m()},setup(e,a){let{slots:t}=a;const l=C(()=>{const n=[];let s;for(s in S)S[s].forEach(r=>{const o=e[r],i=I(s,r,o);i&&n.push(i)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return N(e.tag,{class:["v-row",l.value]},(n=t.default)==null?void 0:n.call(t))}}});export{K as V,M as a};
