var ks=Object.freeze,Rs=Object.defineProperty;var hs=(l,t)=>ks(Rs(l,"raw",{value:ks(t||l.slice())}));import{S as Ot,i as Ct,s as Tt,C as j,Q as Dt,k as _,l as k,m as h,h as c,a2 as De,K as we,b as m,a4 as Cs,F as G,G as Q,H as X,T as Ts,g as F,d as D,W as Oe,a5 as Ms,Y as Bs,w as Et,a as w,c as O,n as B,E as u,a0 as Ft,v as As,f as Us,a1 as Ps,X as Ls,a9 as Vs,R as Is,y as P,z as I,A as H,V as Hs,B as q,q as r,r as p,p as qn,P as Ce,L as Rn,e as wt,M as Mn}from"../chunks/index.e54ce4fa.js";import{E as Sn}from"../chunks/Example.de9e9b18.js";import{B as ae}from"../chunks/Button.844915fc.js";import{c as zs,u as Ws,f as Ys,g as Ks}from"../chunks/NavigationView.svelte_svelte_type_style_lang.e567273a.js";import{c as Ns,a as js}from"../chunks/TooltipWrapper.549a7553.js";import"../chunks/APIDocs.svelte_svelte_type_style_lang.921143a3.js";import"../chunks/paths.177fb227.js";import{S as Gs,A as Qs}from"../chunks/APIDocs.82e97039.js";function Xs(l){let t,n,e,s,a;const i=l[5].default,g=j(i,l,l[4],null);let v=[{class:n="flyout "+l[1]},l[3]],$={};for(let d=0;d<v.length;d+=1)$=Dt($,v[d]);return{c(){t=_("div"),g&&g.c(),this.h()},l(d){t=k(d,"DIV",{class:!0});var b=h(t);g&&g.l(b),b.forEach(c),this.h()},h(){De(t,$),we(t,"svelte-6b9kdf",!0)},m(d,b){m(d,t,b),g&&g.m(t,null),l[6](t),e=!0,s||(a=Cs(l[2].call(null,t)),s=!0)},p(d,[b]){g&&g.p&&(!e||b&16)&&G(g,i,d,d[4],e?X(i,d[4],b,null):Q(d[4]),null),De(t,$=Ts(v,[(!e||b&2&&n!==(n="flyout "+d[1]))&&{class:n},b&8&&d[3]])),we(t,"svelte-6b9kdf",!0)},i(d){e||(F(g,d),e=!0)},o(d){D(g,d),e=!1},d(d){d&&c(t),g&&g.d(d),l[6](null),s=!1,a()}}}function Js(l,t,n){const e=["class","element"];let s=Oe(t,e),{$$slots:a={},$$scope:i}=t,{class:g=""}=t,{element:v=null}=t;const $=zs(Ms());function d(b){Et[b?"unshift":"push"](()=>{v=b,n(0,v)})}return l.$$set=b=>{t=Dt(Dt({},t),Bs(b)),n(3,s=Oe(t,e)),"class"in b&&n(1,g=b.class),"element"in b&&n(0,v=b.element),"$$scope"in b&&n(4,i=b.$$scope)},[v,g,$,s,i,a,d]}class Zs extends Ot{constructor(t){super(),Ct(this,t,Js,Xs,Tt,{class:1,element:0})}}const xs=l=>({}),gs=l=>({}),ta=l=>({}),ys=l=>({});function vs(l){let t,n,e,s,a,i,g,v,$;const d=l[17].override,b=j(d,l,l[23],ys),T=b||na(l);let S=[{id:l[10]},{class:n="flyout-anchor placement-"+l[5]+" alignment-"+l[6]},{style:e="--fds-flyout-offset: "+l[7]+"px;"},l[14]],U={};for(let E=0;E<S.length;E+=1)U=Dt(U,S[E]);return{c(){t=_("div"),T&&T.c(),a=w(),i=_("div"),this.h()},l(E){t=k(E,"DIV",{id:!0,class:!0,style:!0});var C=h(t);T&&T.l(C),C.forEach(c),a=O(E),i=k(E,"DIV",{class:!0}),h(i).forEach(c),this.h()},h(){De(t,U),we(t,"svelte-cvs8n5",!0),B(i,"class","flyout-backdrop svelte-cvs8n5")},m(E,C){m(E,t,C),T&&T.m(t,null),l[19](t),m(E,a,C),m(E,i,C),l[20](i),g=!0,v||($=[Cs(l[9].call(null,t)),Ft(t,"click",aa),Ft(i,"click",la),Ft(i,"mousedown",l[12])],v=!0)},p(E,C){l=E,b?b.p&&(!g||C&8388608)&&G(b,d,l,l[23],g?X(d,l[23],C,ta):Q(l[23]),ys):T&&T.p&&(!g||C&8388616)&&T.p(l,g?C:-1),De(t,U=Ts(S,[{id:l[10]},(!g||C&96&&n!==(n="flyout-anchor placement-"+l[5]+" alignment-"+l[6]))&&{class:n},(!g||C&128&&e!==(e="--fds-flyout-offset: "+l[7]+"px;"))&&{style:e},C&16384&&l[14]])),we(t,"svelte-cvs8n5",!0)},i(E){g||(F(T,E),s&&s.end(1),g=!0)},o(E){D(T,E),E&&(s=Vs(t,js,{duration:Ks("--fds-control-faster-duration"),easing:Ns})),g=!1},d(E){E&&c(t),T&&T.d(E),l[19](null),E&&s&&s.end(),E&&c(a),E&&c(i),l[20](null),v=!1,Ps($)}}}function ea(l){let t;const n=l[17].flyout,e=j(n,l,l[23],gs);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,a){e&&e.m(s,a),t=!0},p(s,a){e&&e.p&&(!t||a&8388608)&&G(e,n,s,s[23],t?X(n,s[23],a,xs):Q(s[23]),gs)},i(s){t||(F(e,s),t=!0)},o(s){D(e,s),t=!1},d(s){e&&e.d(s)}}}function na(l){let t,n,e;function s(i){l[18](i)}let a={$$slots:{default:[ea]},$$scope:{ctx:l}};return l[3]!==void 0&&(a.element=l[3]),t=new Zs({props:a}),Et.push(()=>Is(t,"element",s)),{c(){P(t.$$.fragment)},l(i){I(t.$$.fragment,i)},m(i,g){H(t,i,g),e=!0},p(i,g){const v={};g&8388608&&(v.$$scope={dirty:g,ctx:i}),!n&&g&8&&(n=!0,v.element=i[3],Hs(()=>n=!1)),t.$set(v)},i(i){e||(F(t.$$.fragment,i),e=!0)},o(i){D(t.$$.fragment,i),e=!1},d(i){q(t,i)}}}function sa(l){let t,n,e,s,a,i;const g=l[17].default,v=j(g,l,l[23],null);let $=l[0]&&vs(l);return{c(){t=_("div"),v&&v.c(),n=w(),$&&$.c(),this.h()},l(d){t=k(d,"DIV",{class:!0,"aria-expanded":!0,"aria-haspopup":!0,"aria-controls":!0});var b=h(t);v&&v.l(b),n=O(b),$&&$.l(b),b.forEach(c),this.h()},h(){B(t,"class",e="flyout-wrapper "+l[8]+" svelte-cvs8n5"),B(t,"aria-expanded",l[0]),B(t,"aria-haspopup",l[0]),B(t,"aria-controls",l[10])},m(d,b){m(d,t,b),v&&v.m(t,null),u(t,n),$&&$.m(t,null),l[22](t),s=!0,a||(i=[Ft(window,"keydown",l[11]),Ft(t,"click",l[21]),Ft(t,"keydown",l[13])],a=!0)},p(d,[b]){v&&v.p&&(!s||b&8388608)&&G(v,g,d,d[23],s?X(g,d[23],b,null):Q(d[23]),null),d[0]?$?($.p(d,b),b&1&&F($,1)):($=vs(d),$.c(),F($,1),$.m(t,null)):$&&(As(),D($,1,1,()=>{$=null}),Us()),(!s||b&256&&e!==(e="flyout-wrapper "+d[8]+" svelte-cvs8n5"))&&B(t,"class",e),(!s||b&1)&&B(t,"aria-expanded",d[0]),(!s||b&1)&&B(t,"aria-haspopup",d[0])},i(d){s||(F(v,d),F($),s=!0)},o(d){D(v,d),D($),s=!1},d(d){d&&c(t),v&&v.d(d),$&&$.d(),l[22](null),a=!1,Ps(i)}}}const aa=l=>l.stopPropagation(),la=l=>l.stopPropagation();function oa(l,t,n){let e;const s=["open","closable","placement","alignment","offset","trapFocus","class","wrapperElement","anchorElement","menuElement","backdropElement"];let a=Oe(t,s),{$$slots:i={},$$scope:g}=t,{open:v=!1}=t,{closable:$=!0}=t,{placement:d="top"}=t,{alignment:b="center"}=t,{offset:T=4}=t,{trapFocus:S=!0}=t,{class:U=""}=t,{wrapperElement:E=null}=t,{anchorElement:C=null}=t,{menuElement:J=null}=t,{backdropElement:M=null}=t;const x=Ls(),Bt=Ws("fds-flyout-anchor-");function Pt({key:y}){y==="Escape"&&$&&n(0,v=!1)}function ot(){$&&n(0,v=!1)}function It(y){(y.key===" "||y.key==="Enter")&&(y.preventDefault(),n(0,v=!v))}function Ht(y){J=y,n(3,J)}function dt(y){Et[y?"unshift":"push"](()=>{C=y,n(2,C)})}function tt(y){Et[y?"unshift":"push"](()=>{M=y,n(4,M)})}const z=()=>n(0,v=!v);function mt(y){Et[y?"unshift":"push"](()=>{E=y,n(1,E)})}return l.$$set=y=>{t=Dt(Dt({},t),Bs(y)),n(14,a=Oe(t,s)),"open"in y&&n(0,v=y.open),"closable"in y&&n(15,$=y.closable),"placement"in y&&n(5,d=y.placement),"alignment"in y&&n(6,b=y.alignment),"offset"in y&&n(7,T=y.offset),"trapFocus"in y&&n(16,S=y.trapFocus),"class"in y&&n(8,U=y.class),"wrapperElement"in y&&n(1,E=y.wrapperElement),"anchorElement"in y&&n(2,C=y.anchorElement),"menuElement"in y&&n(3,J=y.menuElement),"backdropElement"in y&&n(4,M=y.backdropElement),"$$scope"in y&&n(23,g=y.$$scope)},l.$$.update=()=>{l.$$.dirty&65536&&n(9,e=S?Ys:()=>{}),l.$$.dirty&1&&x(v?"open":"close")},[v,E,C,J,M,d,b,T,U,e,Bt,Pt,ot,It,a,$,S,i,Ht,dt,tt,z,mt,g]}class Te extends Ot{constructor(t){super(),Ct(this,t,oa,sa,Tt,{open:0,closable:15,placement:5,alignment:6,offset:7,trapFocus:16,class:8,wrapperElement:1,anchorElement:2,menuElement:3,backdropElement:4})}}function ca(l){let t;return{c(){t=r("Trigger Button")},l(n){t=p(n,"Trigger Button")},m(n,e){m(n,t,e)},d(n){n&&c(t)}}}function ua(l){let t,n;return t=new ae({props:{$$slots:{default:[ca]},$$scope:{ctx:l}}}),{c(){P(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},p(e,s){const a={};s&1&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function ia(l){let t;return{c(){t=r("Flyout Contents")},l(n){t=p(n,"Flyout Contents")},m(n,e){m(n,t,e)},d(n){n&&c(t)}}}function ra(l){let t,n;return t=new Te({props:{$$slots:{flyout:[ia],default:[ua]},$$scope:{ctx:l}}}),{c(){P(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},p(e,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}class pa extends Ot{constructor(t){super(),Ct(this,t,null,ra,Tt,{})}}function fa(l){let t;return{c(){t=r("Open")},l(n){t=p(n,"Open")},m(n,e){m(n,t,e)},d(n){n&&c(t)}}}function da(l){let t,n;return t=new ae({props:{$$slots:{default:[fa]},$$scope:{ctx:l}}}),{c(){P(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},p(e,s){const a={};s&8&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function ma(l){let t;return{c(){t=r("Close")},l(n){t=p(n,"Close")},m(n,e){m(n,t,e)},d(n){n&&c(t)}}}function _a(l){let t,n;return t=new ae({props:{slot:"flyout",$$slots:{default:[ma]},$$scope:{ctx:l}}}),t.$on("click",l[1]),{c(){P(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},p(e,s){const a={};s&8&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function ka(l){let t,n,e;function s(i){l[2](i)}let a={$$slots:{flyout:[_a],default:[da]},$$scope:{ctx:l}};return l[0]!==void 0&&(a.open=l[0]),t=new Te({props:a}),Et.push(()=>Is(t,"open",s)),{c(){P(t.$$.fragment)},l(i){I(t.$$.fragment,i)},m(i,g){H(t,i,g),e=!0},p(i,[g]){const v={};g&9&&(v.$$scope={dirty:g,ctx:i}),!n&&g&1&&(n=!0,v.open=i[0],Hs(()=>n=!1)),t.$set(v)},i(i){e||(F(t.$$.fragment,i),e=!0)},o(i){D(t.$$.fragment,i),e=!1},d(i){q(t,i)}}}function ha(l,t,n){let e=!1;const s=()=>n(0,e=!1);function a(i){e=i,n(0,e)}return[e,s,a]}class ga extends Ot{constructor(t){super(),Ct(this,t,ha,ka,Tt,{})}}function ya(l){let t;return{c(){t=r("Open")},l(n){t=p(n,"Open")},m(n,e){m(n,t,e)},d(n){n&&c(t)}}}function va(l){let t,n;return t=new ae({props:{$$slots:{default:[ya]},$$scope:{ctx:l}}}),{c(){P(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},p(e,s){const a={};s&1&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function ba(l){let t,n,e,s;return{c(){t=_("div"),n=r("Custom flyout containers! "),e=_("button"),s=r("Hello World!"),this.h()},l(a){t=k(a,"DIV",{slot:!0,style:!0});var i=h(t);n=p(i,"Custom flyout containers! "),e=k(i,"BUTTON",{});var g=h(e);s=p(g,"Hello World!"),g.forEach(c),i.forEach(c),this.h()},h(){B(t,"slot","override"),qn(t,"background-color","red"),qn(t,"padding","24px"),qn(t,"min-inline-size","240px")},m(a,i){m(a,t,i),u(t,n),u(t,e),u(e,s)},p:Ce,d(a){a&&c(t)}}}function $a(l){let t,n;return t=new Te({props:{$$slots:{override:[ba],default:[va]},$$scope:{ctx:l}}}),{c(){P(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},p(e,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}class Ea extends Ot{constructor(t){super(),Ct(this,t,null,$a,Tt,{})}}const Fa={props:[{name:"open",kind:"let",description:"Determines the flyout's visibility.",type:"boolean",value:"false",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!0},{name:"closable",kind:"let",description:"Determines if the flyout can be closed using conventional user interaction.",type:"boolean",value:"true",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!1},{name:"placement",kind:"let",description:"Direction that the flyout will be opened from.",type:"string",value:'"top"',isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!1},{name:"alignment",kind:"let",description:"Alignment of the menu along the clickable target's given axis.",type:"string",value:'"center"',isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!1},{name:"offset",kind:"let",description:"Distance of the flyout from the control button in pixels.",type:"number",value:"4",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!1},{name:"trapFocus",kind:"let",description:"Determines if keyboard focus should be locked to the flyout's contents.",type:"boolean",value:"true",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!1},{name:"class",kind:"let",type:"string",value:'""',isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!1},{name:"wrapperElement",kind:"let",description:"Obtains a bound DOM reference to the content wrapper element.",type:"null | HTMLDivElement",value:"null",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!0},{name:"anchorElement",kind:"let",description:"Obtains a bound DOM reference to the menu's positioning anchor element.",type:"null | HTMLDivElement",value:"null",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!0},{name:"menuElement",kind:"let",description:"Obtains a bound DOM reference to the inner menu element.",value:"null",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!0},{name:"backdropElement",kind:"let",description:"Obtains a bound DOM reference to the menu backdrop, which is present while the menu is `open`.",type:"null | HTMLDivElement",value:"null",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!0}],moduleExports:[],slots:[{name:"__default__",default:!0,slot_props:"{}"},{name:"flyout",default:!1,slot_props:"{}"},{name:"override",default:!1,fallback:`<FlyoutSurface bind:element={menuElement}>
					<slot name="flyout" />
				</FlyoutSurface>`,slot_props:"{}"}],events:[{type:"dispatched",name:"open",detail:"null"},{type:"dispatched",name:"close",detail:"null"}],typedefs:[],rest_props:{type:"Element",name:"div"},componentComment:`
Flyouts represent a control that displays lightweight UI that is either information, or requires user interaction. Unlike a dialog, a Flyout can be dismissed by clicking or tapping outside of it, or pressing the Esc key. [Docs](https://fluent-svelte.vercel.app/docs/components/flyout)
- Usage:
    \`\`\`tsx
    <Flyout>
        <Button>Trigger Button</Button>
        <svelte:fragment slot="flyout">
            Flyout Contents
        </svelte:fragment>
    </Flyout>
    \`\`\``},Da=l=>({}),bs=l=>({slot:"example"}),wa=l=>({}),$s=l=>({slot:"code"}),Oa=l=>({}),Es=l=>({slot:"example"}),Ca=l=>({}),Fs=l=>({slot:"code"}),Ta=l=>({}),Ds=l=>({slot:"example"}),Ba=l=>({}),ws=l=>({slot:"code"});function Pa(l){let t;return{c(){t=r("Open")},l(n){t=p(n,"Open")},m(n,e){m(n,t,e)},d(n){n&&c(t)}}}function Ia(l){let t,n;return t=new ae({props:{$$slots:{default:[Pa]},$$scope:{ctx:l}}}),{c(){P(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},p(e,s){const a={};s&2&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function Ha(l){let t;return{c(){t=r("Flyout")},l(n){t=p(n,"Flyout")},m(n,e){m(n,t,e)},d(n){n&&c(t)}}}function qa(l){let t,n;return t=new Te({props:{open:!0,trapFocus:!1,$$slots:{flyout:[Ha],default:[Ia]},$$scope:{ctx:l}}}),{c(){P(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},p(e,s){const a={};s&2&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function Sa(l){let t,n;return t=new pa({}),{c(){P(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function Ra(l){let t;const n=l[0].default,e=j(n,l,l[1],Ds),s=e||Sa();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,i){s&&s.m(a,i),t=!0},p(a,i){e&&e.p&&(!t||i&2)&&G(e,n,a,a[1],t?X(n,a[1],i,Ta):Q(a[1]),Ds)},i(a){t||(F(s,a),t=!0)},o(a){D(s,a),t=!1},d(a){s&&s.d(a)}}}function Ma(l){let t,n=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flyout</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Trigger Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>fragment</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flyout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Flyout Contents<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>fragment</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flyout</span><span class="token punctuation">></span></span>`,e;return{c(){t=new Rn(!1),e=wt(),this.h()},l(s){t=Mn(s,!1),e=wt(),this.h()},h(){t.a=e},m(s,a){t.m(n,s,a),m(s,e,a)},p:Ce,d(s){s&&c(e),s&&t.d()}}}function Aa(l){let t;const n=l[0].default,e=j(n,l,l[1],ws),s=e||Ma();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,i){s&&s.m(a,i),t=!0},p(a,i){e&&e.p&&(!t||i&2)&&G(e,n,a,a[1],t?X(n,a[1],i,Ba):Q(a[1]),ws)},i(a){t||(F(s,a),t=!0)},o(a){D(s,a),t=!1},d(a){s&&s.d(a)}}}function Ua(l){let t,n;return t=new ga({}),{c(){P(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function La(l){let t;const n=l[0].default,e=j(n,l,l[1],Es),s=e||Ua();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,i){s&&s.m(a,i),t=!0},p(a,i){e&&e.p&&(!t||i&2)&&G(e,n,a,a[1],t?X(n,a[1],i,Oa):Q(a[1]),Es)},i(a){t||(F(s,a),t=!0)},o(a){D(s,a),t=!1},d(a){s&&s.d(a)}}}function Va(l){let t,n=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span> Flyout<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"fluent-svelte"</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> open <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flyout</span> <span class="token attr-name"><span class="token namespace">bind:</span>open</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Open<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>open <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flyout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flyout</span><span class="token punctuation">></span></span>`,e;return{c(){t=new Rn(!1),e=wt(),this.h()},l(s){t=Mn(s,!1),e=wt(),this.h()},h(){t.a=e},m(s,a){t.m(n,s,a),m(s,e,a)},p:Ce,d(s){s&&c(e),s&&t.d()}}}function za(l){let t;const n=l[0].default,e=j(n,l,l[1],Fs),s=e||Va();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,i){s&&s.m(a,i),t=!0},p(a,i){e&&e.p&&(!t||i&2)&&G(e,n,a,a[1],t?X(n,a[1],i,Ca):Q(a[1]),Fs)},i(a){t||(F(s,a),t=!0)},o(a){D(s,a),t=!1},d(a){s&&s.d(a)}}}function Wa(l){let t,n;return t=new Ea({}),{c(){P(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function Ya(l){let t;const n=l[0].default,e=j(n,l,l[1],bs),s=e||Wa();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,i){s&&s.m(a,i),t=!0},p(a,i){e&&e.p&&(!t||i&2)&&G(e,n,a,a[1],t?X(n,a[1],i,Da):Q(a[1]),bs)},i(a){t||(F(s,a),t=!0)},o(a){D(s,a),t=!1},d(a){s&&s.d(a)}}}function Ka(l){let t,n=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flyout</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Open<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>override<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>background-color: red; padding: 24px; min-inline-size: 240px;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		Custom flyout containers! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>Hello World!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flyout</span><span class="token punctuation">></span></span>`,e;return{c(){t=new Rn(!1),e=wt(),this.h()},l(s){t=Mn(s,!1),e=wt(),this.h()},h(){t.a=e},m(s,a){t.m(n,s,a),m(s,e,a)},p:Ce,d(s){s&&c(e),s&&t.d()}}}function Na(l){let t;const n=l[0].default,e=j(n,l,l[1],$s),s=e||Ka();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,i){s&&s.m(a,i),t=!0},p(a,i){e&&e.p&&(!t||i&2)&&G(e,n,a,a[1],t?X(n,a[1],i,wa):Q(a[1]),$s)},i(a){t||(F(s,a),t=!0)},o(a){D(s,a),t=!1},d(a){s&&s.d(a)}}}var Os;function ja(l){let t,n,e,s,a,i,g,v,$,d,b='<code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Flyout <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"fluent-svelte"</span><span class="token punctuation">;</span></code>',T,S,U,E,C,J,M,x,Bt,Pt,ot,It,Ht,dt,tt,z,mt,y,Be,le,_t,Pe,oe,et,Ie,qt,He,qe,ce,ct,qs=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flyout</span> <span class="token attr-name">open</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>fragment</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flyout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>This flyout is open by default.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>fragment</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flyout</span><span class="token punctuation">></span></span></code>`,ue,kt,Se,ie,ht,nt,re,W,Re,St,Me,Ae,Rt,Ue,Le,pe,ut,Ve,fe,L,ze,Mt,We,Ye,At,Ke,Ne,Ut,je,Ge,de,Y,Z,Qe,Lt,Xe,Je,Vt,Ze,xe,tn,R,en,zt,nn,sn,Wt,an,ln,Yt,on,cn,Kt,un,rn,Nt,pn,fn,dn,A,mn,jt,_n,kn,Gt,hn,gn,Qt,yn,vn,Xt,bn,$n,me,it,En,_e,K,Fn,Jt,Dn,wn,Zt,On,Cn,ke,rt,Tn,he,st,Bn,xt,Pn,In,ge,gt,at,ye,pt,Hn,ve,ft,be;return S=new Gs({props:{repl:"f884a63a8b3349e38c783e86aa4f4d17",$$slots:{default:[qa]},$$scope:{ctx:l}}}),z=new Sn({props:{src:String.raw`<Flyout>
<Button>Trigger Button</Button>
<svelte:fragment slot="flyout">Flyout Contents</svelte:fragment>
</Flyout>`,meta:{example:!0,hideScript:!0},$$slots:{code:[Aa],example:[Ra]},$$scope:{ctx:l}}}),nt=new Sn({props:{src:String.raw(Os||(Os=hs([`<script>
import { Flyout, Button } from "fluent-svelte";
let open = false;
<\/script>
<Flyout bind:open>
<Button>Open</Button>
<Button on:click={() => (open = false)} slot="flyout">Close</Button>
</Flyout>`]))),meta:{example:!0},$$slots:{code:[za],example:[La]},$$scope:{ctx:l}}}),at=new Sn({props:{src:String.raw`<Flyout>
<Button>Open</Button>
<div slot="override" style="background-color: red; padding: 24px; min-inline-size: 240px;">
Custom flyout containers! <button>Hello World!</button>
</div>
</Flyout>`,meta:{example:!0,hideScript:!0},$$slots:{code:[Na],example:[Ya]},$$scope:{ctx:l}}}),ft=new Qs({props:{data:Fa}}),{c(){t=_("p"),n=r("Flyouts represent a control that displays lightweight UI that is either information, or requires user interaction. Unlike a "),e=_("a"),s=r("ContentDialog"),a=r(", a Flyout can be dismissed by clicking or tapping outside of it, or pressing the "),i=_("kbd"),g=r("Esc"),v=r(" key."),$=w(),d=_("pre"),T=w(),P(S.$$.fragment),U=w(),E=_("h2"),C=r("Usage"),J=w(),M=_("p"),x=_("code"),Bt=r("Flyout"),Pt=r(" is a wrapper component. Items placed into the default slot will open the flyout when clicked. To insert contents into the flyout itself, you use the "),ot=_("code"),It=r("flyout"),Ht=r(" slot."),dt=w(),tt=_("div"),P(z.$$.fragment),mt=w(),y=_("h3"),Be=r("Opening and Closing"),le=w(),_t=_("p"),Pe=r("Flyouts will not be rendered into the DOM until they are opened. A flyout can be opened by the user either with keyboard navigation or by clicking items in the flyout’s wrapper element."),oe=w(),et=_("p"),Ie=r("You can control if the flyout is open using the "),qt=_("code"),He=r("open"),qe=r(" property."),ce=w(),ct=_("pre"),ue=w(),kt=_("p"),Se=r("You can also use Svelte’s two-way binding syntax to programatically open/close a flyout."),ie=w(),ht=_("div"),P(nt.$$.fragment),re=w(),W=_("p"),Re=r("Additionally, flyouts can be closed by pressing the escape key or clicking on contents behind the flyout. If you wish to disable this behavior, you can set the "),St=_("code"),Me=r("closable"),Ae=r(" property to "),Rt=_("code"),Ue=r("false"),Le=r("."),pe=w(),ut=_("h3"),Ve=r("Positioning"),fe=w(),L=_("p"),ze=r("There are three aspects to the positioning system of flyouts - "),Mt=_("code"),We=r("placement"),Ye=r(", "),At=_("code"),Ke=r("alignment"),Ne=r(", and "),Ut=_("code"),je=r("offset"),Ge=r("."),de=w(),Y=_("ul"),Z=_("li"),Qe=r("The "),Lt=_("code"),Xe=r("offset"),Je=r(" property controls the distance between the flyout and the flyout wrapper in pixels. The default offset is "),Vt=_("code"),Ze=r("8"),xe=r("."),tn=w(),R=_("li"),en=r("The "),zt=_("code"),nn=r("placement"),sn=r(" property is the direction that the flyout will be opened from. This can be either "),Wt=_("code"),an=r("top"),ln=r(", "),Yt=_("code"),on=r("bottom"),cn=r(", "),Kt=_("code"),un=r("left"),rn=r(", or "),Nt=_("code"),pn=r("right"),fn=r("."),dn=w(),A=_("li"),mn=r("The "),jt=_("code"),_n=r("alignment"),kn=r(" property controls either the vertical or horizontal alignment of the flyout along a given placement axis. This can be either "),Gt=_("code"),hn=r("start"),gn=r(", "),Qt=_("code"),yn=r("center"),vn=r(", or "),Xt=_("code"),bn=r("end"),$n=r("."),me=w(),it=_("h3"),En=r("Focus Behavior"),_e=w(),K=_("p"),Fn=r("Flyouts utilize a focus trap, which restricts keyboard navigation focus to only the flyout’s content. If you wish to disable this behavior, you can set the "),Jt=_("code"),Dn=r("trapFocus"),wn=r(" property to "),Zt=_("code"),On=r("false"),Cn=r("."),ke=w(),rt=_("h3"),Tn=r("Overriding Flyouts"),he=w(),st=_("p"),Bn=r("For more niche use cases, you can completely override the flyout element with your own container using the "),xt=_("code"),Pn=r("override"),In=r(" slot."),ge=w(),gt=_("div"),P(at.$$.fragment),ye=w(),pt=_("h2"),Hn=r("Component API"),ve=w(),P(ft.$$.fragment),this.h()},l(o){t=k(o,"P",{});var f=h(t);n=p(f,"Flyouts represent a control that displays lightweight UI that is either information, or requires user interaction. Unlike a "),e=k(f,"A",{href:!0});var te=h(e);s=p(te,"ContentDialog"),te.forEach(c),a=p(f,", a Flyout can be dismissed by clicking or tapping outside of it, or pressing the "),i=k(f,"KBD",{});var ee=h(i);g=p(ee,"Esc"),ee.forEach(c),v=p(f," key."),f.forEach(c),$=O(o),d=k(o,"PRE",{class:!0});var $e=h(d);$e.forEach(c),T=O(o),I(S.$$.fragment,o),U=O(o),E=k(o,"H2",{id:!0});var ne=h(E);C=p(ne,"Usage"),ne.forEach(c),J=O(o),M=k(o,"P",{});var se=h(M);x=k(se,"CODE",{});var An=h(x);Bt=p(An,"Flyout"),An.forEach(c),Pt=p(se," is a wrapper component. Items placed into the default slot will open the flyout when clicked. To insert contents into the flyout itself, you use the "),ot=k(se,"CODE",{});var Un=h(ot);It=p(Un,"flyout"),Un.forEach(c),Ht=p(se," slot."),se.forEach(c),dt=O(o),tt=k(o,"DIV",{});var Ln=h(tt);I(z.$$.fragment,Ln),Ln.forEach(c),mt=O(o),y=k(o,"H3",{id:!0});var Vn=h(y);Be=p(Vn,"Opening and Closing"),Vn.forEach(c),le=O(o),_t=k(o,"P",{});var zn=h(_t);Pe=p(zn,"Flyouts will not be rendered into the DOM until they are opened. A flyout can be opened by the user either with keyboard navigation or by clicking items in the flyout’s wrapper element."),zn.forEach(c),oe=O(o),et=k(o,"P",{});var Ee=h(et);Ie=p(Ee,"You can control if the flyout is open using the "),qt=k(Ee,"CODE",{});var Wn=h(qt);He=p(Wn,"open"),Wn.forEach(c),qe=p(Ee," property."),Ee.forEach(c),ce=O(o),ct=k(o,"PRE",{class:!0});var Ss=h(ct);Ss.forEach(c),ue=O(o),kt=k(o,"P",{});var Yn=h(kt);Se=p(Yn,"You can also use Svelte’s two-way binding syntax to programatically open/close a flyout."),Yn.forEach(c),ie=O(o),ht=k(o,"DIV",{});var Kn=h(ht);I(nt.$$.fragment,Kn),Kn.forEach(c),re=O(o),W=k(o,"P",{});var yt=h(W);Re=p(yt,"Additionally, flyouts can be closed by pressing the escape key or clicking on contents behind the flyout. If you wish to disable this behavior, you can set the "),St=k(yt,"CODE",{});var Nn=h(St);Me=p(Nn,"closable"),Nn.forEach(c),Ae=p(yt," property to "),Rt=k(yt,"CODE",{});var jn=h(Rt);Ue=p(jn,"false"),jn.forEach(c),Le=p(yt,"."),yt.forEach(c),pe=O(o),ut=k(o,"H3",{id:!0});var Gn=h(ut);Ve=p(Gn,"Positioning"),Gn.forEach(c),fe=O(o),L=k(o,"P",{});var lt=h(L);ze=p(lt,"There are three aspects to the positioning system of flyouts - "),Mt=k(lt,"CODE",{});var Qn=h(Mt);We=p(Qn,"placement"),Qn.forEach(c),Ye=p(lt,", "),At=k(lt,"CODE",{});var Xn=h(At);Ke=p(Xn,"alignment"),Xn.forEach(c),Ne=p(lt,", and "),Ut=k(lt,"CODE",{});var Jn=h(Ut);je=p(Jn,"offset"),Jn.forEach(c),Ge=p(lt,"."),lt.forEach(c),de=O(o),Y=k(o,"UL",{});var vt=h(Y);Z=k(vt,"LI",{});var bt=h(Z);Qe=p(bt,"The "),Lt=k(bt,"CODE",{});var Zn=h(Lt);Xe=p(Zn,"offset"),Zn.forEach(c),Je=p(bt," property controls the distance between the flyout and the flyout wrapper in pixels. The default offset is "),Vt=k(bt,"CODE",{});var xn=h(Vt);Ze=p(xn,"8"),xn.forEach(c),xe=p(bt,"."),bt.forEach(c),tn=O(vt),R=k(vt,"LI",{});var V=h(R);en=p(V,"The "),zt=k(V,"CODE",{});var ts=h(zt);nn=p(ts,"placement"),ts.forEach(c),sn=p(V," property is the direction that the flyout will be opened from. This can be either "),Wt=k(V,"CODE",{});var es=h(Wt);an=p(es,"top"),es.forEach(c),ln=p(V,", "),Yt=k(V,"CODE",{});var ns=h(Yt);on=p(ns,"bottom"),ns.forEach(c),cn=p(V,", "),Kt=k(V,"CODE",{});var ss=h(Kt);un=p(ss,"left"),ss.forEach(c),rn=p(V,", or "),Nt=k(V,"CODE",{});var as=h(Nt);pn=p(as,"right"),as.forEach(c),fn=p(V,"."),V.forEach(c),dn=O(vt),A=k(vt,"LI",{});var N=h(A);mn=p(N,"The "),jt=k(N,"CODE",{});var ls=h(jt);_n=p(ls,"alignment"),ls.forEach(c),kn=p(N," property controls either the vertical or horizontal alignment of the flyout along a given placement axis. This can be either "),Gt=k(N,"CODE",{});var os=h(Gt);hn=p(os,"start"),os.forEach(c),gn=p(N,", "),Qt=k(N,"CODE",{});var cs=h(Qt);yn=p(cs,"center"),cs.forEach(c),vn=p(N,", or "),Xt=k(N,"CODE",{});var us=h(Xt);bn=p(us,"end"),us.forEach(c),$n=p(N,"."),N.forEach(c),vt.forEach(c),me=O(o),it=k(o,"H3",{id:!0});var is=h(it);En=p(is,"Focus Behavior"),is.forEach(c),_e=O(o),K=k(o,"P",{});var $t=h(K);Fn=p($t,"Flyouts utilize a focus trap, which restricts keyboard navigation focus to only the flyout’s content. If you wish to disable this behavior, you can set the "),Jt=k($t,"CODE",{});var rs=h(Jt);Dn=p(rs,"trapFocus"),rs.forEach(c),wn=p($t," property to "),Zt=k($t,"CODE",{});var ps=h(Zt);On=p(ps,"false"),ps.forEach(c),Cn=p($t,"."),$t.forEach(c),ke=O(o),rt=k(o,"H3",{id:!0});var fs=h(rt);Tn=p(fs,"Overriding Flyouts"),fs.forEach(c),he=O(o),st=k(o,"P",{});var Fe=h(st);Bn=p(Fe,"For more niche use cases, you can completely override the flyout element with your own container using the "),xt=k(Fe,"CODE",{});var ds=h(xt);Pn=p(ds,"override"),ds.forEach(c),In=p(Fe," slot."),Fe.forEach(c),ge=O(o),gt=k(o,"DIV",{});var ms=h(gt);I(at.$$.fragment,ms),ms.forEach(c),ye=O(o),pt=k(o,"H2",{id:!0});var _s=h(pt);Hn=p(_s,"Component API"),_s.forEach(c),ve=O(o),I(ft.$$.fragment,o),this.h()},h(){B(e,"href","contentdialog"),B(d,"class","language-ts"),B(E,"id","usage"),B(y,"id","opening-and-closing"),B(ct,"class","language-svelte"),B(ut,"id","positioning"),B(it,"id","focus-behavior"),B(rt,"id","overriding-flyouts"),B(pt,"id","component-api")},m(o,f){m(o,t,f),u(t,n),u(t,e),u(e,s),u(t,a),u(t,i),u(i,g),u(t,v),m(o,$,f),m(o,d,f),d.innerHTML=b,m(o,T,f),H(S,o,f),m(o,U,f),m(o,E,f),u(E,C),m(o,J,f),m(o,M,f),u(M,x),u(x,Bt),u(M,Pt),u(M,ot),u(ot,It),u(M,Ht),m(o,dt,f),m(o,tt,f),H(z,tt,null),m(o,mt,f),m(o,y,f),u(y,Be),m(o,le,f),m(o,_t,f),u(_t,Pe),m(o,oe,f),m(o,et,f),u(et,Ie),u(et,qt),u(qt,He),u(et,qe),m(o,ce,f),m(o,ct,f),ct.innerHTML=qs,m(o,ue,f),m(o,kt,f),u(kt,Se),m(o,ie,f),m(o,ht,f),H(nt,ht,null),m(o,re,f),m(o,W,f),u(W,Re),u(W,St),u(St,Me),u(W,Ae),u(W,Rt),u(Rt,Ue),u(W,Le),m(o,pe,f),m(o,ut,f),u(ut,Ve),m(o,fe,f),m(o,L,f),u(L,ze),u(L,Mt),u(Mt,We),u(L,Ye),u(L,At),u(At,Ke),u(L,Ne),u(L,Ut),u(Ut,je),u(L,Ge),m(o,de,f),m(o,Y,f),u(Y,Z),u(Z,Qe),u(Z,Lt),u(Lt,Xe),u(Z,Je),u(Z,Vt),u(Vt,Ze),u(Z,xe),u(Y,tn),u(Y,R),u(R,en),u(R,zt),u(zt,nn),u(R,sn),u(R,Wt),u(Wt,an),u(R,ln),u(R,Yt),u(Yt,on),u(R,cn),u(R,Kt),u(Kt,un),u(R,rn),u(R,Nt),u(Nt,pn),u(R,fn),u(Y,dn),u(Y,A),u(A,mn),u(A,jt),u(jt,_n),u(A,kn),u(A,Gt),u(Gt,hn),u(A,gn),u(A,Qt),u(Qt,yn),u(A,vn),u(A,Xt),u(Xt,bn),u(A,$n),m(o,me,f),m(o,it,f),u(it,En),m(o,_e,f),m(o,K,f),u(K,Fn),u(K,Jt),u(Jt,Dn),u(K,wn),u(K,Zt),u(Zt,On),u(K,Cn),m(o,ke,f),m(o,rt,f),u(rt,Tn),m(o,he,f),m(o,st,f),u(st,Bn),u(st,xt),u(xt,Pn),u(st,In),m(o,ge,f),m(o,gt,f),H(at,gt,null),m(o,ye,f),m(o,pt,f),u(pt,Hn),m(o,ve,f),H(ft,o,f),be=!0},p(o,[f]){const te={};f&2&&(te.$$scope={dirty:f,ctx:o}),S.$set(te);const ee={};f&2&&(ee.$$scope={dirty:f,ctx:o}),z.$set(ee);const $e={};f&2&&($e.$$scope={dirty:f,ctx:o}),nt.$set($e);const ne={};f&2&&(ne.$$scope={dirty:f,ctx:o}),at.$set(ne)},i(o){be||(F(S.$$.fragment,o),F(z.$$.fragment,o),F(nt.$$.fragment,o),F(at.$$.fragment,o),F(ft.$$.fragment,o),be=!0)},o(o){D(S.$$.fragment,o),D(z.$$.fragment,o),D(nt.$$.fragment,o),D(at.$$.fragment,o),D(ft.$$.fragment,o),be=!1},d(o){o&&c(t),o&&c($),o&&c(d),o&&c(T),q(S,o),o&&c(U),o&&c(E),o&&c(J),o&&c(M),o&&c(dt),o&&c(tt),q(z),o&&c(mt),o&&c(y),o&&c(le),o&&c(_t),o&&c(oe),o&&c(et),o&&c(ce),o&&c(ct),o&&c(ue),o&&c(kt),o&&c(ie),o&&c(ht),q(nt),o&&c(re),o&&c(W),o&&c(pe),o&&c(ut),o&&c(fe),o&&c(L),o&&c(de),o&&c(Y),o&&c(me),o&&c(it),o&&c(_e),o&&c(K),o&&c(ke),o&&c(rt),o&&c(he),o&&c(st),o&&c(ge),o&&c(gt),q(at),o&&c(ye),o&&c(pt),o&&c(ve),q(ft,o)}}}function Ga(l,t,n){let{$$slots:e={},$$scope:s}=t;return l.$$set=a=>{"$$scope"in a&&n(1,s=a.$$scope)},[e,s]}class al extends Ot{constructor(t){super(),Ct(this,t,Ga,ja,Tt,{})}}export{al as component};
