import{S as Ie,i as Oe,s as Ce,C as Se,Q as se,k as y,a as L,N as x,l as g,m as k,h as s,c as B,O as ee,n as P,p as pe,a2 as he,K as me,b as E,E as _,a4 as We,F as Me,G as qe,H as Re,g as z,v as Pe,d as j,f as Le,T as Ze,W as ve,Y as ze,y as te,z as le,A as re,B as oe,L as Be,e as V,M as Ue,P as F,q as A,r as H,u as Y,I as ne}from"./index.e54ce4fa.js";import"./NavigationView.svelte_svelte_type_style_lang.e567273a.js";import{T as Ve}from"./TooltipWrapper.549a7553.js";import{I as Ye}from"./IconButton.1d87fe13.js";import{_ as je}from"./APIDocs.svelte_svelte_type_style_lang.921143a3.js";import{B as Ge}from"./Button.844915fc.js";import{I as Ke}from"./Example.svelte_svelte_type_style_lang.ef5c7854.js";const Qe='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.44 2.56a1.91 1.91 0 0 0-2.7 0l-7.4 7.4c-.18.18-.32.4-.4.64l-.91 2.74a.5.5 0 0 0 .63.63l2.74-.91c.24-.08.46-.22.65-.4l7.39-7.4c.75-.74.75-1.95 0-2.7Zm-2 .7a.91.91 0 1 1 1.3 1.3L12 5.3 10.7 4l.74-.73ZM10 4.72 11.3 6l-5.96 5.94a.65.65 0 0 1-.26.16l-1.79.6.6-1.8c.03-.09.08-.18.16-.25L10 4.71Z"/></svg>';function be(n){let e,l;return e=new Ve({props:{text:"Edit in Svelte REPL",offset:8,placement:"left",$$slots:{default:[Xe]},$$scope:{ctx:n}}}),{c(){te(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,r){re(e,t,r),l=!0},p(t,r){const o={};r&132&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function Je(n){let e,l;return{c(){e=new Be(!1),l=V(),this.h()},l(t){e=Ue(t,!1),l=V(),this.h()},h(){e.a=l},m(t,r){e.m(Qe,t,r),E(t,l,r)},p:F,d(t){t&&s(l),t&&e.d()}}}function Xe(n){let e,l;return e=new Ye({props:{href:"https://svelte.dev/repl/"+n[2],target:"blank",rel:"noreferrer noopener",$$slots:{default:[Je]},$$scope:{ctx:n}}}),{c(){te(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,r){re(e,t,r),l=!0},p(t,r){const o={};r&4&&(o.href="https://svelte.dev/repl/"+t[2]),r&128&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function xe(n){let e,l,t,r,o,f,u,p,$,m,v,c,h,b;const D=n[6].default,d=Se(D,n,n[7],null);let i=n[2]&&be(n),T=[{class:v="component-showcase "+n[3]},n[5]],C={};for(let w=0;w<T.length;w+=1)C=se(C,T[w]);return{c(){e=y("div"),l=y("div"),t=y("div"),d&&d.c(),r=L(),o=x("svg"),f=x("pattern"),u=x("circle"),p=x("rect"),$=L(),m=y("div"),i&&i.c(),this.h()},l(w){e=g(w,"DIV",{class:!0});var N=k(e);l=g(N,"DIV",{class:!0});var O=k(l);t=g(O,"DIV",{class:!0,style:!0});var M=k(t);d&&d.l(M),M.forEach(s),r=B(O),o=ee(O,"svg",{class:!0});var S=k(o);f=ee(S,"pattern",{id:!0,x:!0,y:!0,width:!0,height:!0,patternUnits:!0});var W=k(f);u=ee(W,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),k(u).forEach(s),W.forEach(s),p=ee(S,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),k(p).forEach(s),S.forEach(s),O.forEach(s),$=B(N),m=g(N,"DIV",{class:!0});var G=k(m);i&&i.l(G),G.forEach(s),N.forEach(s),this.h()},h(){P(t,"class","component-showcase-grid svelte-1qunn48"),pe(t,"grid-template-columns",`${n[1]} `.repeat(n[0])),P(u,"cx","0.2979354926245403"),P(u,"cy","0.2979354926245403"),P(u,"r","0.2979354926245403"),P(u,"fill","var(--fds-text-disabled)"),P(f,"id","pattern-14333"),P(f,"x","5.800038310074086"),P(f,"y","6.229276141719765"),P(f,"width","11.17258097342026"),P(f,"height","11.17258097342026"),P(f,"patternUnits","userSpaceOnUse"),P(p,"x","0"),P(p,"y","0"),P(p,"width","100%"),P(p,"height","100%"),P(p,"fill","url(#pattern-14333)"),P(o,"class","component-showcase-backdrop svelte-1qunn48"),P(l,"class","component-showcase-inner svelte-1qunn48"),P(m,"class","component-showcase-buttons svelte-1qunn48"),he(e,C),me(e,"svelte-1qunn48",!0)},m(w,N){E(w,e,N),_(e,l),_(l,t),d&&d.m(t,null),_(l,r),_(l,o),_(o,f),_(f,u),_(o,p),_(e,$),_(e,m),i&&i.m(m,null),c=!0,h||(b=We(n[4].call(null,l,{minZoom:.5,maxZoom:10,bounds:!0})),h=!0)},p(w,[N]){d&&d.p&&(!c||N&128)&&Me(d,D,w,w[7],c?Re(D,w[7],N,null):qe(w[7]),null),(!c||N&3)&&pe(t,"grid-template-columns",`${w[1]} `.repeat(w[0])),w[2]?i?(i.p(w,N),N&4&&z(i,1)):(i=be(w),i.c(),z(i,1),i.m(m,null)):i&&(Pe(),j(i,1,1,()=>{i=null}),Le()),he(e,C=Ze(T,[(!c||N&8&&v!==(v="component-showcase "+w[3]))&&{class:v},N&32&&w[5]])),me(e,"svelte-1qunn48",!0)},i(w){c||(z(d,w),z(i),c=!0)},o(w){j(d,w),j(i),c=!1},d(w){w&&s(e),d&&d.d(w),i&&i.d(),h=!1,b()}}}function et(n,e,l){const t=["columns","columnWidth","repl","class"];let r=ve(e,t),{$$slots:o={},$$scope:f}=e,{columns:u=1}=e,{columnWidth:p="1fr"}=e,{repl:$=""}=e,{class:m=""}=e;function v(c,h){je(c,h)}return n.$$set=c=>{e=se(se({},e),ze(c)),l(5,r=ve(e,t)),"columns"in c&&l(0,u=c.columns),"columnWidth"in c&&l(1,p=c.columnWidth),"repl"in c&&l(2,$=c.repl),"class"in c&&l(3,m=c.class),"$$scope"in c&&l(7,f=c.$$scope)},[u,p,$,m,v,r,o,f]}class St extends Ie{constructor(e){super(),Oe(this,e,et,xe,Ce,{columns:0,columnWidth:1,repl:2,class:3})}}function ke(n,e,l){const t=n.slice();return t[4]=e[l].name,t[5]=e[l].detail,t}function Ee(n,e,l){const t=n.slice();return t[4]=e[l].name,t}function ye(n,e,l){const t=n.slice();return t[4]=e[l].name,t[10]=e[l].slot_props,t[11]=e[l].fallback,t}function ge(n,e,l){const t=n.slice();return t[4]=e[l].name,t[14]=e[l].type,t[15]=e[l].value,t[16]=e[l].description,t}function tt(n){let e;return{c(){e=A("None")},l(l){e=H(l,"None")},m(l,t){E(l,e,t)},p:F,d(l){l&&s(e)}}}function lt(n){let e,l,t,r,o,f,u,p,$,m,v,c,h,b=n[0].props,D=[];for(let d=0;d<b.length;d+=1)D[d]=Te(ge(n,b,d));return{c(){e=y("table"),l=y("thead"),t=y("tr"),r=y("th"),o=A("Name"),f=y("th"),u=A("Type"),p=y("th"),$=A("Default"),m=y("th"),v=A("Description"),c=L(),h=y("tbody");for(let d=0;d<D.length;d+=1)D[d].c()},l(d){e=g(d,"TABLE",{});var i=k(e);l=g(i,"THEAD",{});var T=k(l);t=g(T,"TR",{});var C=k(t);r=g(C,"TH",{});var w=k(r);o=H(w,"Name"),w.forEach(s),f=g(C,"TH",{});var N=k(f);u=H(N,"Type"),N.forEach(s),p=g(C,"TH",{});var O=k(p);$=H(O,"Default"),O.forEach(s),m=g(C,"TH",{});var M=k(m);v=H(M,"Description"),M.forEach(s),C.forEach(s),T.forEach(s),c=B(i),h=g(i,"TBODY",{});var S=k(h);for(let W=0;W<D.length;W+=1)D[W].l(S);S.forEach(s),i.forEach(s)},m(d,i){E(d,e,i),_(e,l),_(l,t),_(t,r),_(r,o),_(t,f),_(f,u),_(t,p),_(p,$),_(t,m),_(m,v),_(e,c),_(e,h);for(let T=0;T<D.length;T+=1)D[T]&&D[T].m(h,null)},p(d,i){if(i&1){b=d[0].props;let T;for(T=0;T<b.length;T+=1){const C=ge(d,b,T);D[T]?D[T].p(C,i):(D[T]=Te(C),D[T].c(),D[T].m(h,null))}for(;T<D.length;T+=1)D[T].d(1);D.length=b.length}},d(d){d&&s(e),ne(D,d)}}}function De(n){let e,l,t,r,o,f,u,p=(n[15]??"undefined")+"",$,m,v,c=(n[16]??"None")+"",h,b;function D(N,O){return typeof N[4]<"u"?ot:rt}let d=D(n),i=d(n);function T(N,O){return typeof N[14]<"u"?st:nt}let C=T(n),w=C(n);return{c(){e=y("tr"),l=y("td"),i.c(),t=L(),r=y("td"),w.c(),o=L(),f=y("td"),u=y("code"),$=A(p),m=L(),v=y("td"),h=A(c),b=L()},l(N){e=g(N,"TR",{});var O=k(e);l=g(O,"TD",{});var M=k(l);i.l(M),M.forEach(s),t=B(O),r=g(O,"TD",{});var S=k(r);w.l(S),S.forEach(s),o=B(O),f=g(O,"TD",{});var W=k(f);u=g(W,"CODE",{});var G=k(u);$=H(G,p),G.forEach(s),W.forEach(s),m=B(O),v=g(O,"TD",{});var K=k(v);h=H(K,c),K.forEach(s),b=B(O),O.forEach(s)},m(N,O){E(N,e,O),_(e,l),i.m(l,null),_(e,t),_(e,r),w.m(r,null),_(e,o),_(e,f),_(f,u),_(u,$),_(e,m),_(e,v),_(v,h),_(e,b)},p(N,O){d===(d=D(N))&&i?i.p(N,O):(i.d(1),i=d(N),i&&(i.c(),i.m(l,null))),C===(C=T(N))&&w?w.p(N,O):(w.d(1),w=C(N),w&&(w.c(),w.m(r,null))),O&1&&p!==(p=(N[15]??"undefined")+"")&&Y($,p),O&1&&c!==(c=(N[16]??"None")+"")&&Y(h,c)},d(N){N&&s(e),i.d(),w.d()}}}function rt(n){let e;return{c(){e=A("Unknown")},l(l){e=H(l,"Unknown")},m(l,t){E(l,e,t)},p:F,d(l){l&&s(e)}}}function ot(n){let e,l=n[4]+"",t;return{c(){e=y("code"),t=A(l)},l(r){e=g(r,"CODE",{});var o=k(e);t=H(o,l),o.forEach(s)},m(r,o){E(r,e,o),_(e,t)},p(r,o){o&1&&l!==(l=r[4]+"")&&Y(t,l)},d(r){r&&s(e)}}}function nt(n){let e,l;return{c(){e=y("code"),l=A("any")},l(t){e=g(t,"CODE",{});var r=k(e);l=H(r,"any"),r.forEach(s)},m(t,r){E(t,e,r),_(e,l)},p:F,d(t){t&&s(e)}}}function st(n){let e,l=n[14]+"",t;return{c(){e=y("code"),t=A(l)},l(r){e=g(r,"CODE",{});var o=k(e);t=H(o,l),o.forEach(s)},m(r,o){E(r,e,o),_(e,t)},p(r,o){o&1&&l!==(l=r[14]+"")&&Y(t,l)},d(r){r&&s(e)}}}function Te(n){let e=!n[4].startsWith("__"),l,t=e&&De(n);return{c(){t&&t.c(),l=V()},l(r){t&&t.l(r),l=V()},m(r,o){t&&t.m(r,o),E(r,l,o)},p(r,o){o&1&&(e=!r[4].startsWith("__")),e?t?t.p(r,o):(t=De(r),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(r){t&&t.d(r),r&&s(l)}}}function we(n){let e,l;return e=new Ke({props:{severity:"information",title:"This component uses $$restProps.",$$slots:{action:[ct],default:[ft]},$$scope:{ctx:n}}}),{c(){te(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,r){re(e,t,r),l=!0},p(t,r){const o={};r&524289&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function ft(n){let e,l,t=(n[0].rest_props.name.includes(" | ")?new Intl.ListFormat({style:"short"}).format(n[0].rest_props.name.split(" | ").map(He)):`<code>${n[0].rest_props.name}</code>`)+"",r,o=n[0].rest_props.type.toLowerCase()+"",f,u=n[0].rest_props.name.includes(" | ")?"s":"",p,$;return{c(){e=A("All unused props will be passed through to the underlying "),l=new Be(!1),r=L(),f=A(o),p=A(u),$=A(` as regular\r
		attributes.`),this.h()},l(m){e=H(m,"All unused props will be passed through to the underlying "),l=Ue(m,!1),r=B(m),f=H(m,o),p=H(m,u),$=H(m,` as regular\r
		attributes.`),this.h()},h(){l.a=r},m(m,v){E(m,e,v),l.m(t,m,v),E(m,r,v),E(m,f,v),E(m,p,v),E(m,$,v)},p(m,v){v&1&&t!==(t=(m[0].rest_props.name.includes(" | ")?new Intl.ListFormat({style:"short"}).format(m[0].rest_props.name.split(" | ").map(He)):`<code>${m[0].rest_props.name}</code>`)+"")&&l.p(t),v&1&&o!==(o=m[0].rest_props.type.toLowerCase()+"")&&Y(f,o),v&1&&u!==(u=m[0].rest_props.name.includes(" | ")?"s":"")&&Y(p,u)},d(m){m&&s(e),m&&l.d(),m&&s(r),m&&s(f),m&&s(p),m&&s($)}}}function at(n){let e;return{c(){e=A("More Info")},l(l){e=H(l,"More Info")},m(l,t){E(l,e,t)},d(l){l&&s(e)}}}function ct(n){let e,l;return e=new Ge({props:{slot:"action",variant:"accent",href:"https://svelte.dev/docs#template-syntax-attributes-and-props",$$slots:{default:[at]},$$scope:{ctx:n}}}),{c(){te(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,r){re(e,t,r),l=!0},p(t,r){const o={};r&524288&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function it(n){let e;return{c(){e=A("None")},l(l){e=H(l,"None")},m(l,t){E(l,e,t)},p:F,d(l){l&&s(e)}}}function _t(n){let e,l,t,r,o,f,u,p,$,m,v,c=n[0].slots,h=[];for(let b=0;b<c.length;b+=1)h[b]=$e(ye(n,c,b));return{c(){e=y("table"),l=y("thead"),t=y("tr"),r=y("th"),o=A("Name"),f=y("th"),u=A("Slot Props"),p=y("th"),$=A("Fallback"),m=L(),v=y("tbody");for(let b=0;b<h.length;b+=1)h[b].c()},l(b){e=g(b,"TABLE",{});var D=k(e);l=g(D,"THEAD",{});var d=k(l);t=g(d,"TR",{});var i=k(t);r=g(i,"TH",{});var T=k(r);o=H(T,"Name"),T.forEach(s),f=g(i,"TH",{});var C=k(f);u=H(C,"Slot Props"),C.forEach(s),p=g(i,"TH",{});var w=k(p);$=H(w,"Fallback"),w.forEach(s),i.forEach(s),d.forEach(s),m=B(D),v=g(D,"TBODY",{});var N=k(v);for(let O=0;O<h.length;O+=1)h[O].l(N);N.forEach(s),D.forEach(s)},m(b,D){E(b,e,D),_(e,l),_(l,t),_(t,r),_(r,o),_(t,f),_(f,u),_(t,p),_(p,$),_(e,m),_(e,v);for(let d=0;d<h.length;d+=1)h[d]&&h[d].m(v,null)},p(b,D){if(D&1){c=b[0].slots;let d;for(d=0;d<c.length;d+=1){const i=ye(b,c,d);h[d]?h[d].p(i,D):(h[d]=$e(i),h[d].c(),h[d].m(v,null))}for(;d<h.length;d+=1)h[d].d(1);h.length=c.length}},d(b){b&&s(e),ne(h,b)}}}function ut(n){let e;return{c(){e=A("Unknown")},l(l){e=H(l,"Unknown")},m(l,t){E(l,e,t)},p:F,d(l){l&&s(e)}}}function dt(n){let e,l=(n[4]==="__default__"?"Unnamed (Default)":n[4])+"",t;return{c(){e=y("code"),t=A(l)},l(r){e=g(r,"CODE",{});var o=k(e);t=H(o,l),o.forEach(s)},m(r,o){E(r,e,o),_(e,t)},p(r,o){o&1&&l!==(l=(r[4]==="__default__"?"Unnamed (Default)":r[4])+"")&&Y(t,l)},d(r){r&&s(e)}}}function pt(n){let e;return{c(){e=A("None")},l(l){e=H(l,"None")},m(l,t){E(l,e,t)},p:F,d(l){l&&s(e)}}}function ht(n){let e,l=n[10]+"",t;return{c(){e=y("code"),t=A(l)},l(r){e=g(r,"CODE",{});var o=k(e);t=H(o,l),o.forEach(s)},m(r,o){E(r,e,o),_(e,t)},p(r,o){o&1&&l!==(l=r[10]+"")&&Y(t,l)},d(r){r&&s(e)}}}function mt(n){let e;return{c(){e=A("Empty")},l(l){e=H(l,"Empty")},m(l,t){E(l,e,t)},p:F,d(l){l&&s(e)}}}function vt(n){let e,l=n[11].substr(0,300)+"",t,r=n[11].length>300?"…":"",o;return{c(){e=y("code"),t=A(l),o=A(r)},l(f){e=g(f,"CODE",{});var u=k(e);t=H(u,l),u.forEach(s),o=H(f,r)},m(f,u){E(f,e,u),_(e,t),E(f,o,u)},p(f,u){u&1&&l!==(l=f[11].substr(0,300)+"")&&Y(t,l),u&1&&r!==(r=f[11].length>300?"…":"")&&Y(o,r)},d(f){f&&s(e),f&&s(o)}}}function $e(n){let e,l,t,r,o,f,u;function p(i,T){return typeof i[4]<"u"?dt:ut}let $=p(n),m=$(n);function v(i,T){return i[10]?ht:pt}let c=v(n),h=c(n);function b(i,T){return typeof i[11]<"u"?vt:mt}let D=b(n),d=D(n);return{c(){e=y("tr"),l=y("td"),m.c(),t=L(),r=y("td"),h.c(),o=L(),f=y("td"),d.c(),u=L()},l(i){e=g(i,"TR",{});var T=k(e);l=g(T,"TD",{});var C=k(l);m.l(C),C.forEach(s),t=B(T),r=g(T,"TD",{});var w=k(r);h.l(w),w.forEach(s),o=B(T),f=g(T,"TD",{});var N=k(f);d.l(N),N.forEach(s),u=B(T),T.forEach(s)},m(i,T){E(i,e,T),_(e,l),m.m(l,null),_(e,t),_(e,r),h.m(r,null),_(e,o),_(e,f),d.m(f,null),_(e,u)},p(i,T){$===($=p(i))&&m?m.p(i,T):(m.d(1),m=$(i),m&&(m.c(),m.m(l,null))),c===(c=v(i))&&h?h.p(i,T):(h.d(1),h=c(i),h&&(h.c(),h.m(r,null))),D===(D=b(i))&&d?d.p(i,T):(d.d(1),d=D(i),d&&(d.c(),d.m(f,null)))},d(i){i&&s(e),m.d(),h.d(),d.d()}}}function bt(n){let e,l,t,r;return{c(){e=y("p"),l=A("All DOM events are forwarded to this component's respective elements by default. "),t=y("a"),r=A("Learn More"),this.h()},l(o){e=g(o,"P",{});var f=k(e);l=H(f,"All DOM events are forwarded to this component's respective elements by default. "),t=g(f,"A",{href:!0});var u=k(t);r=H(u,"Learn More"),u.forEach(s),f.forEach(s),this.h()},h(){P(t,"href","https://todo")},m(o,f){E(o,e,f),_(e,l),_(e,t),_(t,r)},p:F,d(o){o&&s(e)}}}function kt(n){let e,l,t,r;function o(p,$){return p[2].length>0?yt:Et}let u=o(n)(n);return{c(){e=y("h4"),l=A("Forwarded Events"),t=L(),u.c(),r=V()},l(p){e=g(p,"H4",{});var $=k(e);l=H($,"Forwarded Events"),$.forEach(s),t=B(p),u.l(p),r=V()},m(p,$){E(p,e,$),_(e,l),E(p,t,$),u.m(p,$),E(p,r,$)},p(p,$){u.p(p,$)},d(p){p&&s(e),p&&s(t),u.d(p),p&&s(r)}}}function Et(n){let e;return{c(){e=A("None")},l(l){e=H(l,"None")},m(l,t){E(l,e,t)},p:F,d(l){l&&s(e)}}}function yt(n){let e,l=n[2],t=[];for(let r=0;r<l.length;r+=1)t[r]=Ne(Ee(n,l,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=V()},l(r){for(let o=0;o<t.length;o+=1)t[o].l(r);e=V()},m(r,o){for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(r,o);E(r,e,o)},p(r,o){if(o&4){l=r[2];let f;for(f=0;f<l.length;f+=1){const u=Ee(r,l,f);t[f]?t[f].p(u,o):(t[f]=Ne(u),t[f].c(),t[f].m(e.parentNode,e))}for(;f<t.length;f+=1)t[f].d(1);t.length=l.length}},d(r){ne(t,r),r&&s(e)}}}function Ne(n){let e,l,t=n[4].trim()+"",r,o;return{c(){e=y("code"),l=y("a"),r=A(t),o=L(),this.h()},l(f){e=g(f,"CODE",{class:!0});var u=k(e);l=g(u,"A",{href:!0,target:!0,rel:!0});var p=k(l);r=H(p,t),p.forEach(s),o=B(u),u.forEach(s),this.h()},h(){P(l,"href","https://developer.mozilla.org/en-US/docs/Web/API/Element/"+n[4]+"_event"),P(l,"target","_blank"),P(l,"rel","noreferrer noopener"),P(e,"class","forwarded svelte-1jnjko0")},m(f,u){E(f,e,u),_(e,l),_(l,r),_(e,o)},p:F,d(f){f&&s(e)}}}function gt(n){let e,l;return{c(){e=y("p"),l=A("None")},l(t){e=g(t,"P",{});var r=k(e);l=H(r,"None"),r.forEach(s)},m(t,r){E(t,e,r),_(e,l)},p:F,d(t){t&&s(e)}}}function Dt(n){let e,l,t,r,o,f,u,p,$,m=n[3],v=[];for(let c=0;c<m.length;c+=1)v[c]=Ae(ke(n,m,c));return{c(){e=y("table"),l=y("thead"),t=y("tr"),r=y("th"),o=A("Name"),f=y("th"),u=A("Detail"),p=L(),$=y("tbody");for(let c=0;c<v.length;c+=1)v[c].c()},l(c){e=g(c,"TABLE",{});var h=k(e);l=g(h,"THEAD",{});var b=k(l);t=g(b,"TR",{});var D=k(t);r=g(D,"TH",{});var d=k(r);o=H(d,"Name"),d.forEach(s),f=g(D,"TH",{});var i=k(f);u=H(i,"Detail"),i.forEach(s),D.forEach(s),b.forEach(s),p=B(h),$=g(h,"TBODY",{});var T=k($);for(let C=0;C<v.length;C+=1)v[C].l(T);T.forEach(s),h.forEach(s)},m(c,h){E(c,e,h),_(e,l),_(l,t),_(t,r),_(r,o),_(t,f),_(f,u),_(e,p),_(e,$);for(let b=0;b<v.length;b+=1)v[b]&&v[b].m($,null)},p(c,h){if(h&8){m=c[3];let b;for(b=0;b<m.length;b+=1){const D=ke(c,m,b);v[b]?v[b].p(D,h):(v[b]=Ae(D),v[b].c(),v[b].m($,null))}for(;b<v.length;b+=1)v[b].d(1);v.length=m.length}},d(c){c&&s(e),ne(v,c)}}}function Tt(n){let e;return{c(){e=A("Unknown")},l(l){e=H(l,"Unknown")},m(l,t){E(l,e,t)},p:F,d(l){l&&s(e)}}}function wt(n){let e,l=n[4]+"",t;return{c(){e=y("code"),t=A(l)},l(r){e=g(r,"CODE",{});var o=k(e);t=H(o,l),o.forEach(s)},m(r,o){E(r,e,o),_(e,t)},p:F,d(r){r&&s(e)}}}function $t(n){let e;return{c(){e=A("None")},l(l){e=H(l,"None")},m(l,t){E(l,e,t)},p:F,d(l){l&&s(e)}}}function Nt(n){let e,l=n[5]+"",t;return{c(){e=y("code"),t=A(l)},l(r){e=g(r,"CODE",{});var o=k(e);t=H(o,l),o.forEach(s)},m(r,o){E(r,e,o),_(e,t)},p:F,d(r){r&&s(e)}}}function Ae(n){let e,l,t,r,o;function f(c,h){return typeof c[4]<"u"?wt:Tt}let p=f(n)(n);function $(c,h){return typeof c[5]<"u"?Nt:$t}let v=$(n)(n);return{c(){e=y("tr"),l=y("td"),p.c(),t=L(),r=y("td"),v.c(),o=L()},l(c){e=g(c,"TR",{});var h=k(e);l=g(h,"TD",{});var b=k(l);p.l(b),b.forEach(s),t=B(h),r=g(h,"TD",{});var D=k(r);v.l(D),D.forEach(s),o=B(h),h.forEach(s)},m(c,h){E(c,e,h),_(e,l),p.m(l,null),_(e,t),_(e,r),v.m(r,null),_(e,o)},p(c,h){p.p(c,h),v.p(c,h)},d(c){c&&s(e),p.d(),v.d()}}}function At(n){let e,l,t,r,o,f,u,p,$,m,v,c,h,b,D,d,i,T,C,w,N,O,M,S,W;function G(a,I){return a[0].props.length>0?lt:tt}let K=G(n),q=K(n),U=n[0].rest_props&&we(n);function fe(a,I){return a[0].slots.length>0?_t:it}let J=fe(n),R=J(n);function ae(a,I){return a[1]?kt:bt}let X=ae(n),Z=X(n);function Fe(a,I){return a[3].length>0?Dt:gt}let Q=Fe(n)(n);return{c(){e=A("API docs automatically generated by "),l=y("a"),t=A("sveld"),r=A(`\r
and\r
`),o=y("a"),f=A("vite-plugin-sveld"),u=A(`.\r
\r
`),p=y("h3"),$=A("Props"),m=L(),q.c(),v=L(),U&&U.c(),c=L(),h=y("h3"),b=A("Slots"),D=L(),R.c(),d=L(),i=y("h3"),T=A("Events"),C=L(),Z.c(),w=L(),N=y("h4"),O=A("Dispatched Events"),M=L(),Q.c(),S=V(),this.h()},l(a){e=H(a,"API docs automatically generated by "),l=g(a,"A",{href:!0,target:!0,rel:!0});var I=k(l);t=H(I,"sveld"),I.forEach(s),r=H(a,`\r
and\r
`),o=g(a,"A",{href:!0,target:!0,rel:!0});var ce=k(o);f=H(ce,"vite-plugin-sveld"),ce.forEach(s),u=H(a,`.\r
\r
`),p=g(a,"H3",{id:!0});var ie=k(p);$=H(ie,"Props"),ie.forEach(s),m=B(a),q.l(a),v=B(a),U&&U.l(a),c=B(a),h=g(a,"H3",{id:!0});var _e=k(h);b=H(_e,"Slots"),_e.forEach(s),D=B(a),R.l(a),d=B(a),i=g(a,"H3",{id:!0});var ue=k(i);T=H(ue,"Events"),ue.forEach(s),C=B(a),Z.l(a),w=B(a),N=g(a,"H4",{});var de=k(N);O=H(de,"Dispatched Events"),de.forEach(s),M=B(a),Q.l(a),S=V(),this.h()},h(){P(l,"href","https://github.com/carbon-design-system/sveld/"),P(l,"target","_blank"),P(l,"rel","noreffer noopener"),P(o,"href","https://github.com/mattjennings/vite-plugin-sveld/"),P(o,"target","_blank"),P(o,"rel","noreffer noopener"),P(p,"id","props"),P(h,"id","slots"),P(i,"id","events")},m(a,I){E(a,e,I),E(a,l,I),_(l,t),E(a,r,I),E(a,o,I),_(o,f),E(a,u,I),E(a,p,I),_(p,$),E(a,m,I),q.m(a,I),E(a,v,I),U&&U.m(a,I),E(a,c,I),E(a,h,I),_(h,b),E(a,D,I),R.m(a,I),E(a,d,I),E(a,i,I),_(i,T),E(a,C,I),Z.m(a,I),E(a,w,I),E(a,N,I),_(N,O),E(a,M,I),Q.m(a,I),E(a,S,I),W=!0},p(a,[I]){K===(K=G(a))&&q?q.p(a,I):(q.d(1),q=K(a),q&&(q.c(),q.m(v.parentNode,v))),a[0].rest_props?U?(U.p(a,I),I&1&&z(U,1)):(U=we(a),U.c(),z(U,1),U.m(c.parentNode,c)):U&&(Pe(),j(U,1,1,()=>{U=null}),Le()),J===(J=fe(a))&&R?R.p(a,I):(R.d(1),R=J(a),R&&(R.c(),R.m(d.parentNode,d))),X===(X=ae(a))&&Z?Z.p(a,I):(Z.d(1),Z=X(a),Z&&(Z.c(),Z.m(w.parentNode,w))),Q.p(a,I)},i(a){W||(z(U),W=!0)},o(a){j(U),W=!1},d(a){a&&s(e),a&&s(l),a&&s(r),a&&s(o),a&&s(u),a&&s(p),a&&s(m),q.d(a),a&&s(v),U&&U.d(a),a&&s(c),a&&s(h),a&&s(D),R.d(a),a&&s(d),a&&s(i),a&&s(C),Z.d(a),a&&s(w),a&&s(N),a&&s(M),Q.d(a),a&&s(S)}}}const He=n=>`<code>${n}</code>`;function Ht(n,e,l){let{data:t}=e,{manualForward:r=!1}=e;const o=t.events.filter(u=>u.type==="forwarded"),f=t.events.filter(u=>u.type==="dispatched");return n.$$set=u=>{"data"in u&&l(0,t=u.data),"manualForward"in u&&l(1,r=u.manualForward)},[t,r,o,f]}class Wt extends Ie{constructor(e){super(),Oe(this,e,Ht,At,Ce,{data:0,manualForward:1})}}export{Wt as A,St as S};