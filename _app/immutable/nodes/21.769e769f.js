var Tt=Object.freeze,qt=Object.defineProperty;var yt=(o,e)=>Tt(qt(o,"raw",{value:Tt(e||o.slice())}));import{S as de,i as ge,s as ke,Q as at,k,a as T,l as $,m as w,c as y,h as c,a2 as Pt,K as Dt,n as L,b as f,E as _,a4 as Rt,a0 as Vt,T as Nt,g as v,v as Yt,d as S,f as jt,a1 as zt,W as Ct,ab as Bt,a5 as Wt,Y as Gt,C as X,F as Z,G as ee,H as te,w as ot,y as D,z as C,A as I,P as Me,B as F,R as Kt,q as h,r as d,V as Qt,u as xt,L as ct,e as ce,M as it}from"../chunks/index.e54ce4fa.js";import{E as nt}from"../chunks/Example.de9e9b18.js";import{c as Jt}from"../chunks/NavigationView.svelte_svelte_type_style_lang.e567273a.js";import"../chunks/APIDocs.svelte_svelte_type_style_lang.921143a3.js";import"../chunks/paths.177fb227.js";import{S as Xt,A as Zt}from"../chunks/APIDocs.82e97039.js";function It(o){let e,n;const l=o[10].default,s=X(l,o,o[9],null);return{c(){e=k("span"),s&&s.c(),this.h()},l(t){e=$(t,"SPAN",{class:!0});var r=w(e);s&&s.l(r),r.forEach(c),this.h()},h(){L(e,"class","svelte-wpiyrh")},m(t,r){f(t,e,r),s&&s.m(e,null),n=!0},p(t,r){s&&s.p&&(!n||r&512)&&Z(s,l,t,t[9],n?te(l,t[9],r,null):ee(t[9]),null)},i(t){n||(v(s,t),n=!0)},o(t){S(s,t),n=!1},d(t){t&&c(e),s&&s.d(t)}}}function es(o){let e,n,l,s,t,r,E,P=[{class:l="toggle-switch "+o[5]},{type:"checkbox"},{__value:o[3]},{disabled:o[4]},o[7]],i={};for(let m=0;m<P.length;m+=1)i=at(i,P[m]);let u=o[8].default&&It(o);return{c(){e=k("label"),n=k("input"),s=T(),u&&u.c(),this.h()},l(m){e=$(m,"LABEL",{class:!0});var g=w(e);n=$(g,"INPUT",{class:!0,type:!0}),s=y(g),u&&u.l(g),g.forEach(c),this.h()},h(){Pt(n,i),Dt(n,"svelte-wpiyrh",!0),L(e,"class","toggle-switch-container svelte-wpiyrh")},m(m,g){f(m,e,g),_(e,n),n.autofocus&&n.focus(),n.checked=o[0],o[12](n),_(e,s),u&&u.m(e,null),o[13](e),t=!0,r||(E=[Rt(o[6].call(null,n)),Vt(n,"change",o[11])],r=!0)},p(m,[g]){Pt(n,i=Nt(P,[(!t||g&32&&l!==(l="toggle-switch "+m[5]))&&{class:l},{type:"checkbox"},(!t||g&8)&&{__value:m[3]},(!t||g&16)&&{disabled:m[4]},g&128&&m[7]])),g&1&&(n.checked=m[0]),Dt(n,"svelte-wpiyrh",!0),m[8].default?u?(u.p(m,g),g&256&&v(u,1)):(u=It(m),u.c(),v(u,1),u.m(e,null)):u&&(Yt(),S(u,1,1,()=>{u=null}),jt())},i(m){t||(v(u),t=!0)},o(m){S(u),t=!1},d(m){m&&c(e),o[12](null),u&&u.d(),o[13](null),r=!1,zt(E)}}}function ts(o,e,n){const l=["checked","value","disabled","class","inputElement","containerElement"];let s=Ct(e,l),{$$slots:t={},$$scope:r}=e;const E=Bt(t);let{checked:P=!1}=e,{value:i=void 0}=e,{disabled:u=!1}=e,{class:m=""}=e,{inputElement:g=null}=e,{containerElement:H=null}=e;const O=Jt(Wt());function ie(){P=this.checked,n(0,P)}function j(b){ot[b?"unshift":"push"](()=>{g=b,n(1,g)})}function re(b){ot[b?"unshift":"push"](()=>{H=b,n(2,H)})}return o.$$set=b=>{e=at(at({},e),Gt(b)),n(7,s=Ct(e,l)),"checked"in b&&n(0,P=b.checked),"value"in b&&n(3,i=b.value),"disabled"in b&&n(4,u=b.disabled),"class"in b&&n(5,m=b.class),"inputElement"in b&&n(1,g=b.inputElement),"containerElement"in b&&n(2,H=b.containerElement),"$$scope"in b&&n(9,r=b.$$scope)},[P,g,H,i,u,m,O,s,E,r,t,ie,j,re]}class J extends de{constructor(e){super(),ge(this,e,ts,es,ke,{checked:0,value:3,disabled:4,class:5,inputElement:1,containerElement:2})}}function ss(o){let e,n;return e=new J({props:{checked:!0}}),{c(){D(e.$$.fragment)},l(l){C(e.$$.fragment,l)},m(l,s){I(e,l,s),n=!0},p:Me,i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}class ls extends de{constructor(e){super(),ge(this,e,null,ss,ke,{})}}function ns(o){let e,n,l,s=o[0]?"checked":"unchecked",t,r;function E(i){o[1](i)}let P={};return o[0]!==void 0&&(P.checked=o[0]),e=new J({props:P}),ot.push(()=>Kt(e,"checked",E)),{c(){D(e.$$.fragment),l=h(`
Current state: `),t=h(s)},l(i){C(e.$$.fragment,i),l=d(i,`
Current state: `),t=d(i,s)},m(i,u){I(e,i,u),f(i,l,u),f(i,t,u),r=!0},p(i,[u]){const m={};!n&&u&1&&(n=!0,m.checked=i[0],Qt(()=>n=!1)),e.$set(m),(!r||u&1)&&s!==(s=i[0]?"checked":"unchecked")&&xt(t,s)},i(i){r||(v(e.$$.fragment,i),r=!0)},o(i){S(e.$$.fragment,i),r=!1},d(i){F(e,i),i&&c(l),i&&c(t)}}}function as(o,e,n){let l=!1;function s(t){l=t,n(0,l)}return[l,s]}class os extends de{constructor(e){super(),ge(this,e,as,ns,ke,{})}}function cs(o){let e;return{c(){e=h("I have a label!")},l(n){e=d(n,"I have a label!")},m(n,l){f(n,e,l)},d(n){n&&c(e)}}}function is(o){let e,n;return e=new J({props:{$$slots:{default:[cs]},$$scope:{ctx:o}}}),{c(){D(e.$$.fragment)},l(l){C(e.$$.fragment,l)},m(l,s){I(e,l,s),n=!0},p(l,[s]){const t={};s&1&&(t.$$scope={dirty:s,ctx:l}),e.$set(t)},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}class rs extends de{constructor(e){super(),ge(this,e,null,is,ke,{})}}const us={props:[{name:"checked",kind:"let",description:"Controls whether the switch is toggled or not.",type:"boolean",value:"false",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!0},{name:"value",kind:"let",description:"Sets the input element's native `value` attribute for usage in forms.",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!1},{name:"disabled",kind:"let",description:"Controls whether the switch is intended for user interaction, and styles it accordingly.",type:"boolean",value:"false",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!1},{name:"class",kind:"let",type:"string",value:'""',isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!1},{name:"inputElement",kind:"let",description:"Obtains a bound DOM reference to the switch's <input /> element.",type:"null | HTMLInputElement",value:"null",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!0},{name:"containerElement",kind:"let",description:"Obtains a bound DOM reference to the switch's outer container element.",type:"null | HTMLLabelElement",value:"null",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!0}],moduleExports:[],slots:[{name:"__default__",default:!0,slot_props:"{}"}],events:[],typedefs:[],rest_props:{type:"Element",name:"input"},componentComment:"\nThe toggle switch represents a physical switch that allows users to turn things on or off, like a light switch. Use toggle switch controls to present users with two mutually exclusive options (such as on/off), where choosing an option provides immediate results. [Docs](https://fluent-svelte.vercel.app/docs/components/radiobutton)\n- Usage:\n    ```tsx\n    <ToggleSwitch bind:checked />\n    ```"},fs=o=>({}),Ft=o=>({slot:"example"}),ps=o=>({}),Ht=o=>({slot:"code"}),_s=o=>({}),At=o=>({slot:"example"}),ms=o=>({}),Lt=o=>({slot:"code"}),hs=o=>({}),Ot=o=>({slot:"example"}),ds=o=>({}),Ut=o=>({slot:"code"});function gs(o){let e;return{c(){e=h("ToggleSwitch")},l(n){e=d(n,"ToggleSwitch")},m(n,l){f(n,e,l)},d(n){n&&c(e)}}}function ks(o){let e;return{c(){e=h("ToggleSwitch")},l(n){e=d(n,"ToggleSwitch")},m(n,l){f(n,e,l)},d(n){n&&c(e)}}}function $s(o){let e;return{c(){e=h("ToggleSwitch")},l(n){e=d(n,"ToggleSwitch")},m(n,l){f(n,e,l)},d(n){n&&c(e)}}}function ws(o){let e;return{c(){e=h("ToggleSwitch")},l(n){e=d(n,"ToggleSwitch")},m(n,l){f(n,e,l)},d(n){n&&c(e)}}}function bs(o){let e,n,l,s,t,r,E,P;return e=new J({props:{$$slots:{default:[gs]},$$scope:{ctx:o}}}),l=new J({props:{checked:!0,$$slots:{default:[ks]},$$scope:{ctx:o}}}),t=new J({props:{disabled:!0,$$slots:{default:[$s]},$$scope:{ctx:o}}}),E=new J({props:{checked:!0,disabled:!0,$$slots:{default:[ws]},$$scope:{ctx:o}}}),{c(){D(e.$$.fragment),n=T(),D(l.$$.fragment),s=T(),D(t.$$.fragment),r=T(),D(E.$$.fragment)},l(i){C(e.$$.fragment,i),n=y(i),C(l.$$.fragment,i),s=y(i),C(t.$$.fragment,i),r=y(i),C(E.$$.fragment,i)},m(i,u){I(e,i,u),f(i,n,u),I(l,i,u),f(i,s,u),I(t,i,u),f(i,r,u),I(E,i,u),P=!0},p(i,u){const m={};u&2&&(m.$$scope={dirty:u,ctx:i}),e.$set(m);const g={};u&2&&(g.$$scope={dirty:u,ctx:i}),l.$set(g);const H={};u&2&&(H.$$scope={dirty:u,ctx:i}),t.$set(H);const O={};u&2&&(O.$$scope={dirty:u,ctx:i}),E.$set(O)},i(i){P||(v(e.$$.fragment,i),v(l.$$.fragment,i),v(t.$$.fragment,i),v(E.$$.fragment,i),P=!0)},o(i){S(e.$$.fragment,i),S(l.$$.fragment,i),S(t.$$.fragment,i),S(E.$$.fragment,i),P=!1},d(i){F(e,i),i&&c(n),F(l,i),i&&c(s),F(t,i),i&&c(r),F(E,i)}}}function vs(o){let e,n;return e=new ls({}),{c(){D(e.$$.fragment)},l(l){C(e.$$.fragment,l)},m(l,s){I(e,l,s),n=!0},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function Es(o){let e;const n=o[0].default,l=X(n,o,o[1],Ot),s=l||vs();return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,r){s&&s.m(t,r),e=!0},p(t,r){l&&l.p&&(!e||r&2)&&Z(l,n,t,t[1],e?te(n,t[1],r,hs):ee(t[1]),Ot)},i(t){e||(v(s,t),e=!0)},o(t){S(s,t),e=!1},d(t){s&&s.d(t)}}}function Ss(o){let e,n='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToggleSwitch</span> <span class="token attr-name">checked</span> <span class="token punctuation">/></span></span>',l;return{c(){e=new ct(!1),l=ce(),this.h()},l(s){e=it(s,!1),l=ce(),this.h()},h(){e.a=l},m(s,t){e.m(n,s,t),f(s,l,t)},p:Me,d(s){s&&c(l),s&&e.d()}}}function Ts(o){let e;const n=o[0].default,l=X(n,o,o[1],Ut),s=l||Ss();return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,r){s&&s.m(t,r),e=!0},p(t,r){l&&l.p&&(!e||r&2)&&Z(l,n,t,t[1],e?te(n,t[1],r,ds):ee(t[1]),Ut)},i(t){e||(v(s,t),e=!0)},o(t){S(s,t),e=!1},d(t){s&&s.d(t)}}}function ys(o){let e,n;return e=new os({}),{c(){D(e.$$.fragment)},l(l){C(e.$$.fragment,l)},m(l,s){I(e,l,s),n=!0},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function Ps(o){let e;const n=o[0].default,l=X(n,o,o[1],At),s=l||ys();return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,r){s&&s.m(t,r),e=!0},p(t,r){l&&l.p&&(!e||r&2)&&Z(l,n,t,t[1],e?te(n,t[1],r,_s):ee(t[1]),At)},i(t){e||(v(s,t),e=!0)},o(t){S(s,t),e=!1},d(t){s&&s.d(t)}}}function Ds(o){let e,n=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span> ToggleSwitch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"fluent-svelte"</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> checked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToggleSwitch</span> <span class="token attr-name"><span class="token namespace">bind:</span>checked</span> <span class="token punctuation">/></span></span>

Current state: <span class="token language-javascript"><span class="token punctuation">{</span>checked <span class="token operator">?</span> <span class="token string">"checked"</span> <span class="token operator">:</span> <span class="token string">"unchecked"</span><span class="token punctuation">}</span></span>`,l;return{c(){e=new ct(!1),l=ce(),this.h()},l(s){e=it(s,!1),l=ce(),this.h()},h(){e.a=l},m(s,t){e.m(n,s,t),f(s,l,t)},p:Me,d(s){s&&c(l),s&&e.d()}}}function Cs(o){let e;const n=o[0].default,l=X(n,o,o[1],Lt),s=l||Ds();return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,r){s&&s.m(t,r),e=!0},p(t,r){l&&l.p&&(!e||r&2)&&Z(l,n,t,t[1],e?te(n,t[1],r,ms):ee(t[1]),Lt)},i(t){e||(v(s,t),e=!0)},o(t){S(s,t),e=!1},d(t){s&&s.d(t)}}}function Is(o){let e,n;return e=new rs({}),{c(){D(e.$$.fragment)},l(l){C(e.$$.fragment,l)},m(l,s){I(e,l,s),n=!0},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function Fs(o){let e;const n=o[0].default,l=X(n,o,o[1],Ft),s=l||Is();return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,r){s&&s.m(t,r),e=!0},p(t,r){l&&l.p&&(!e||r&2)&&Z(l,n,t,t[1],e?te(n,t[1],r,fs):ee(t[1]),Ft)},i(t){e||(v(s,t),e=!0)},o(t){S(s,t),e=!1},d(t){s&&s.d(t)}}}function Hs(o){let e,n='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToggleSwitch</span><span class="token punctuation">></span></span>I have a label!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ToggleSwitch</span><span class="token punctuation">></span></span>',l;return{c(){e=new ct(!1),l=ce(),this.h()},l(s){e=it(s,!1),l=ce(),this.h()},h(){e.a=l},m(s,t){e.m(n,s,t),f(s,l,t)},p:Me,d(s){s&&c(l),s&&e.d()}}}function As(o){let e;const n=o[0].default,l=X(n,o,o[1],Ht),s=l||Hs();return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,r){s&&s.m(t,r),e=!0},p(t,r){l&&l.p&&(!e||r&2)&&Z(l,n,t,t[1],e?te(n,t[1],r,ps):ee(t[1]),Ht)},i(t){e||(v(s,t),e=!0)},o(t){S(s,t),e=!1},d(t){s&&s.d(t)}}}var Mt;function Ls(o){let e,n,l,s,t='<code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ToggleSwitch <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"fluent-svelte"</span><span class="token punctuation">;</span></code>',r,E,P,i,u,m,g,H,O,ie,j,re,b,$e,z,qe,we,U,Re,ue,Ve,Ne,be,se,M,ve,le,Ye,Ee,ne,q,Se,B,je,Te,ae,ze,ye,oe,R,Pe,W,Be,De,A,We,fe,Ge,Ke,G,Qe,xe,pe,Je,Xe,Ce,K,Ze,Ie,V,et,_e,tt,st,Fe,Q,lt,He,x,Ae;return E=new Xt({props:{columns:2,repl:"4b7217ee24294302937ec6c69db1bbc0",$$slots:{default:[bs]},$$scope:{ctx:o}}}),M=new nt({props:{src:String.raw`<ToggleSwitch checked />`,meta:{example:!0,hideScript:!0},$$slots:{code:[Ts],example:[Es]},$$scope:{ctx:o}}}),q=new nt({props:{src:String.raw(Mt||(Mt=yt([`<script>
import { ToggleSwitch } from "fluent-svelte";
let checked = false;
<\/script>
<ToggleSwitch bind:checked />
Current state: {checked ? "checked" : "unchecked"}`]))),meta:{example:!0},$$slots:{code:[Cs],example:[Ps]},$$scope:{ctx:o}}}),R=new nt({props:{src:String.raw`<ToggleSwitch>I have a label!</ToggleSwitch>`,meta:{example:!0,hideScript:!0},$$slots:{code:[As],example:[Fs]},$$scope:{ctx:o}}}),x=new Zt({props:{data:us}}),{c(){e=k("p"),n=h("The toggle switch represents a physical switch that allows users to turn things on or off, like a light switch. Use toggle switch controls to present users with two mutually exclusive options (such as on/off), where choosing an option provides immediate results."),l=T(),s=k("pre"),r=T(),D(E.$$.fragment),P=T(),i=k("h2"),u=h("Usage"),m=T(),g=k("p"),H=k("code"),O=h("<ToggleSwitch />"),ie=h(" is a wrapper around HTML’s "),j=k("code"),re=h("<input />"),b=h(" checkbox type. As such, the APIs share some similarities."),$e=T(),z=k("h3"),qe=h("Checking and Unchecking"),we=T(),U=k("p"),Re=h("You can programmatically control if the ToggleSwitch is in it’s checked state by setting the "),ue=k("code"),Ve=h("checked"),Ne=h(" property."),be=T(),se=k("div"),D(M.$$.fragment),ve=T(),le=k("p"),Ye=h("Additionally, you can use svelte’s two-way binding syntax to bind the checked state to a variable."),Ee=T(),ne=k("div"),D(q.$$.fragment),Se=T(),B=k("h3"),je=h("Labels"),Te=T(),ae=k("p"),ze=h("Passing in content to the ToggleSwitch’s slot will cause that content to be rendered into a label for the control."),ye=T(),oe=k("div"),D(R.$$.fragment),Pe=T(),W=k("h3"),Be=h("Value"),De=T(),A=k("p"),We=h("For usage in forms, you can set a "),fe=k("code"),Ge=h("value"),Ke=h(" property which will set the "),G=k("a"),Qe=h("value"),xe=h(" of the ToggleSwitch’s "),pe=k("code"),Je=h("<input>"),Xe=h(" element."),Ce=T(),K=k("h3"),Ze=h("Disabled ToggleSwitches"),Ie=T(),V=k("p"),et=h("If the ToggleSwitch is not meant to be clicked, you can use the "),_e=k("code"),tt=h("disabled"),st=h(" property to visually indicate this. If a ToggleSwitch is disabled, it will be unclickable."),Fe=T(),Q=k("h2"),lt=h("Component API"),He=T(),D(x.$$.fragment),this.h()},l(a){e=$(a,"P",{});var p=w(e);n=d(p,"The toggle switch represents a physical switch that allows users to turn things on or off, like a light switch. Use toggle switch controls to present users with two mutually exclusive options (such as on/off), where choosing an option provides immediate results."),p.forEach(c),l=y(a),s=$(a,"PRE",{class:!0});var Le=w(s);Le.forEach(c),r=y(a),C(E.$$.fragment,a),P=y(a),i=$(a,"H2",{id:!0});var me=w(i);u=d(me,"Usage"),me.forEach(c),m=y(a),g=$(a,"P",{});var N=w(g);H=$(N,"CODE",{});var he=w(H);O=d(he,"<ToggleSwitch />"),he.forEach(c),ie=d(N," is a wrapper around HTML’s "),j=$(N,"CODE",{});var rt=w(j);re=d(rt,"<input />"),rt.forEach(c),b=d(N," checkbox type. As such, the APIs share some similarities."),N.forEach(c),$e=y(a),z=$(a,"H3",{id:!0});var ut=w(z);qe=d(ut,"Checking and Unchecking"),ut.forEach(c),we=y(a),U=$(a,"P",{});var Oe=w(U);Re=d(Oe,"You can programmatically control if the ToggleSwitch is in it’s checked state by setting the "),ue=$(Oe,"CODE",{});var ft=w(ue);Ve=d(ft,"checked"),ft.forEach(c),Ne=d(Oe," property."),Oe.forEach(c),be=y(a),se=$(a,"DIV",{});var pt=w(se);C(M.$$.fragment,pt),pt.forEach(c),ve=y(a),le=$(a,"P",{});var _t=w(le);Ye=d(_t,"Additionally, you can use svelte’s two-way binding syntax to bind the checked state to a variable."),_t.forEach(c),Ee=y(a),ne=$(a,"DIV",{});var mt=w(ne);C(q.$$.fragment,mt),mt.forEach(c),Se=y(a),B=$(a,"H3",{id:!0});var ht=w(B);je=d(ht,"Labels"),ht.forEach(c),Te=y(a),ae=$(a,"P",{});var dt=w(ae);ze=d(dt,"Passing in content to the ToggleSwitch’s slot will cause that content to be rendered into a label for the control."),dt.forEach(c),ye=y(a),oe=$(a,"DIV",{});var gt=w(oe);C(R.$$.fragment,gt),gt.forEach(c),Pe=y(a),W=$(a,"H3",{id:!0});var kt=w(W);Be=d(kt,"Value"),kt.forEach(c),De=y(a),A=$(a,"P",{});var Y=w(A);We=d(Y,"For usage in forms, you can set a "),fe=$(Y,"CODE",{});var $t=w(fe);Ge=d($t,"value"),$t.forEach(c),Ke=d(Y," property which will set the "),G=$(Y,"A",{href:!0,rel:!0});var wt=w(G);Qe=d(wt,"value"),wt.forEach(c),xe=d(Y," of the ToggleSwitch’s "),pe=$(Y,"CODE",{});var bt=w(pe);Je=d(bt,"<input>"),bt.forEach(c),Xe=d(Y," element."),Y.forEach(c),Ce=y(a),K=$(a,"H3",{id:!0});var vt=w(K);Ze=d(vt,"Disabled ToggleSwitches"),vt.forEach(c),Ie=y(a),V=$(a,"P",{});var Ue=w(V);et=d(Ue,"If the ToggleSwitch is not meant to be clicked, you can use the "),_e=$(Ue,"CODE",{});var Et=w(_e);tt=d(Et,"disabled"),Et.forEach(c),st=d(Ue," property to visually indicate this. If a ToggleSwitch is disabled, it will be unclickable."),Ue.forEach(c),Fe=y(a),Q=$(a,"H2",{id:!0});var St=w(Q);lt=d(St,"Component API"),St.forEach(c),He=y(a),C(x.$$.fragment,a),this.h()},h(){L(s,"class","language-ts"),L(i,"id","usage"),L(z,"id","checking-and-unchecking"),L(B,"id","labels"),L(W,"id","value"),L(G,"href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value"),L(G,"rel","nofollow"),L(K,"id","disabled-toggleswitches"),L(Q,"id","component-api")},m(a,p){f(a,e,p),_(e,n),f(a,l,p),f(a,s,p),s.innerHTML=t,f(a,r,p),I(E,a,p),f(a,P,p),f(a,i,p),_(i,u),f(a,m,p),f(a,g,p),_(g,H),_(H,O),_(g,ie),_(g,j),_(j,re),_(g,b),f(a,$e,p),f(a,z,p),_(z,qe),f(a,we,p),f(a,U,p),_(U,Re),_(U,ue),_(ue,Ve),_(U,Ne),f(a,be,p),f(a,se,p),I(M,se,null),f(a,ve,p),f(a,le,p),_(le,Ye),f(a,Ee,p),f(a,ne,p),I(q,ne,null),f(a,Se,p),f(a,B,p),_(B,je),f(a,Te,p),f(a,ae,p),_(ae,ze),f(a,ye,p),f(a,oe,p),I(R,oe,null),f(a,Pe,p),f(a,W,p),_(W,Be),f(a,De,p),f(a,A,p),_(A,We),_(A,fe),_(fe,Ge),_(A,Ke),_(A,G),_(G,Qe),_(A,xe),_(A,pe),_(pe,Je),_(A,Xe),f(a,Ce,p),f(a,K,p),_(K,Ze),f(a,Ie,p),f(a,V,p),_(V,et),_(V,_e),_(_e,tt),_(V,st),f(a,Fe,p),f(a,Q,p),_(Q,lt),f(a,He,p),I(x,a,p),Ae=!0},p(a,[p]){const Le={};p&2&&(Le.$$scope={dirty:p,ctx:a}),E.$set(Le);const me={};p&2&&(me.$$scope={dirty:p,ctx:a}),M.$set(me);const N={};p&2&&(N.$$scope={dirty:p,ctx:a}),q.$set(N);const he={};p&2&&(he.$$scope={dirty:p,ctx:a}),R.$set(he)},i(a){Ae||(v(E.$$.fragment,a),v(M.$$.fragment,a),v(q.$$.fragment,a),v(R.$$.fragment,a),v(x.$$.fragment,a),Ae=!0)},o(a){S(E.$$.fragment,a),S(M.$$.fragment,a),S(q.$$.fragment,a),S(R.$$.fragment,a),S(x.$$.fragment,a),Ae=!1},d(a){a&&c(e),a&&c(l),a&&c(s),a&&c(r),F(E,a),a&&c(P),a&&c(i),a&&c(m),a&&c(g),a&&c($e),a&&c(z),a&&c(we),a&&c(U),a&&c(be),a&&c(se),F(M),a&&c(ve),a&&c(le),a&&c(Ee),a&&c(ne),F(q),a&&c(Se),a&&c(B),a&&c(Te),a&&c(ae),a&&c(ye),a&&c(oe),F(R),a&&c(Pe),a&&c(W),a&&c(De),a&&c(A),a&&c(Ce),a&&c(K),a&&c(Ie),a&&c(V),a&&c(Fe),a&&c(Q),a&&c(He),F(x,a)}}}function Os(o,e,n){let{$$slots:l={},$$scope:s}=e;return o.$$set=t=>{"$$scope"in t&&n(1,s=t.$$scope)},[l,s]}class js extends de{constructor(e){super(),ge(this,e,Os,Ls,ke,{})}}export{js as component};
