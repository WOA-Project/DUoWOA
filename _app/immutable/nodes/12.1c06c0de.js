import{S as Y5,i as j5,s as J5,y as T,a as h,z as B,c as v,A as D,b as g,g as E,d as k,B as I,h as s,q as w,r as y,k as u,l as d,m as C,n as yt,E as r,e as Ft,v as A5,f as F5,I as Z5,C as K5,F as Q5,G as W5,H as X5,P as u5,L as te,M as ee}from"../chunks/index.e54ce4fa.js";import{E as ne}from"../chunks/Example.de9e9b18.js";import"../chunks/NavigationView.svelte_svelte_type_style_lang.e567273a.js";import{a as S}from"../chunks/Example.svelte_svelte_type_style_lang.ef5c7854.js";import"../chunks/APIDocs.svelte_svelte_type_style_lang.921143a3.js";import"../chunks/paths.1ce57d21.js";import{S as ae,A as se}from"../chunks/APIDocs.82e97039.js";function oe(c){let e;return{c(){e=w("99")},l(l){e=y(l,"99")},m(l,a){g(l,e,a)},d(l){l&&s(e)}}}function le(c){let e;return{c(){e=w("bazinga")},l(l){e=y(l,"bazinga")},m(l,a){g(l,e,a)},d(l){l&&s(e)}}}function re(c){let e,l,a,o;return e=new S({props:{$$slots:{default:[oe]},$$scope:{ctx:c}}}),a=new S({props:{severity:"critical",$$slots:{default:[le]},$$scope:{ctx:c}}}),{c(){T(e.$$.fragment),l=h(),T(a.$$.fragment)},l(n){B(e.$$.fragment,n),l=v(n),B(a.$$.fragment,n)},m(n,$){D(e,n,$),g(n,l,$),D(a,n,$),o=!0},p(n,[$]){const b={};$&1&&(b.$$scope={dirty:$,ctx:n}),e.$set(b);const _={};$&1&&(_.$$scope={dirty:$,ctx:n}),a.$set(_)},i(n){o||(E(e.$$.fragment,n),E(a.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),k(a.$$.fragment,n),o=!1},d(n){I(e,n),n&&s(l),I(a,n)}}}class ie extends Y5{constructor(e){super(),j5(this,e,null,re,J5,{})}}const fe={props:[{name:"severity",kind:"let",description:"Indicates the severity color of the badge.",type:"string",value:'"attention"',isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!1},{name:"class",kind:"let",type:"string",value:'""',isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!1},{name:"element",kind:"let",description:"Obtains a bound DOM reference to the badge's element.",type:"null | HTMLSpanElement",value:"null",isFunction:!1,isFunctionDeclaration:!1,isRequired:!1,constant:!1,reactive:!0}],moduleExports:[],slots:[{name:"__default__",default:!0,fallback:`{#if severity === "attention"}
			<svg {...svgProps} viewBox="162 118 701 789">
				<path
					fill="currentColor"
					d="M862.5,680C862.5,687.333 861.083,694.25 858.25,700.75C855.417,707.25 851.583,712.917 846.75,717.75C841.917,722.583 836.25,726.417 829.75,729.25C823.25,732.083 816.333,733.5 809,733.5C800,733.5 791.333,731.167 783,726.5L565.5,603.5L565.5,853.5C565.5,860.833 564.083,867.75 561.25,874.25C558.417,880.75 554.583,886.333 549.75,891C544.917,895.667 539.25,899.417 532.75,902.25C526.25,905.083 519.333,906.5 512,906.5C504.667,906.5 497.75,905.083 491.25,902.25C484.75,899.417 479.083,895.667 474.25,891C469.417,886.333 465.583,880.75 462.75,874.25C459.917,867.75 458.5,860.833 458.5,853.5L458.5,603.5L241,726.5C232.667,731.167 224,733.5 215,733.5C207.667,733.5 200.75,732.083 194.25,729.25C187.75,726.417 182.083,722.583 177.25,717.75C172.417,712.917 168.583,707.25 165.75,700.75C162.917,694.25 161.5,687.333 161.5,680C161.5,670.667 164,661.75 169,653.25C174,644.75 180.5,638.167 188.5,633.5L403.5,512L188.5,390.5C180.5,385.833 174,379.25 169,370.75C164,362.25 161.5,353.333 161.5,344C161.5,336.667 162.917,329.75 165.75,323.25C168.583,316.75 172.417,311.083 177.25,306.25C182.083,301.417 187.75,297.583 194.25,294.75C200.75,291.917 207.667,290.5 215,290.5C224.667,290.5 233.333,292.833 241,297.5L458.5,420.5L458.5,170.5C458.5,163.167 459.917,156.25 462.75,149.75C465.583,143.25 469.417,137.667 474.25,133C479.083,128.333 484.75,124.583 491.25,121.75C497.75,118.917 504.667,117.5 512,117.5C519.333,117.5 526.25,118.917 532.75,121.75C539.25,124.583 544.917,128.333 549.75,133C554.583,137.667 558.417,143.25 561.25,149.75C564.083,156.25 565.5,163.167 565.5,170.5L565.5,420.5L783,297.5C791.333,292.833 800,290.5 809,290.5C816.333,290.5 823.25,291.917 829.75,294.75C836.25,297.583 841.917,301.417 846.75,306.25C851.583,311.083 855.417,316.75 858.25,323.25C861.083,329.75 862.5,336.667 862.5,344C862.5,353.333 860,362.25 855,370.75C850,379.25 843.5,385.833 835.5,390.5L620.5,512L835.5,633.5C843.5,638.167 850,644.75 855,653.25C860,661.75 862.5,670.667 862.5,680Z"
				/>
			</svg>
		{:else if severity === "success"}
			<svg {...svgProps} viewBox="118 245 790 577">
				<path
					fill="currentColor"
					d="M117.5,554.5C117.5,547.167 118.917,540.25 121.75,533.75C124.583,527.25 128.417,521.583 133.25,516.75C138.083,511.917 143.75,508.083 150.25,505.25C156.75,502.417 163.667,501 171,501C185.333,501 197.833,506.333 208.5,517L384,692.5L815.5,261C826.167,250.333 838.833,245 853.5,245C860.833,245 867.75,246.417 874.25,249.25C880.75,252.083 886.417,256 891.25,261C896.083,266 899.917,271.75 902.75,278.25C905.583,284.75 907,291.5 907,298.5C907,313.167 901.667,325.833 891,336.5L421.5,805.5C416.5,810.5 410.75,814.417 404.25,817.25C397.75,820.083 391,821.5 384,821.5C369.667,821.5 357.167,816.167 346.5,805.5L133,592.5C122.667,582.167 117.5,569.5 117.5,554.5Z"
				/>
			</svg>
		{:else if severity === "caution"}
			<svg {...svgProps} viewBox="406 86 213 875">
				<path
					fill="currentColor"
					d="M426.5,512L426.5,170.5C426.5,158.833 428.75,147.833 433.25,137.5C437.75,127.167 443.917,118.167 451.75,110.5C459.583,102.833 468.667,96.75 479,92.25C489.333,87.75 500.333,85.5 512,85.5C523.667,85.5 534.667,87.75 545,92.25C555.333,96.75 564.417,102.833 572.25,110.5C580.083,118.167 586.25,127.167 590.75,137.5C595.25,147.833 597.5,158.833 597.5,170.5L597.5,512C597.5,523.667 595.25,534.667 590.75,545C586.25,555.333 580.083,564.417 572.25,572.25C564.417,580.083 555.333,586.25 545,590.75C534.667,595.25 523.667,597.5 512,597.5C500.333,597.5 489.333,595.25 479,590.75C468.667,586.25 459.583,580.083 451.75,572.25C443.917,564.417 437.75,555.333 433.25,545C428.75,534.667 426.5,523.667 426.5,512ZM405.5,853.5C405.5,838.833 408.333,825 414,812C419.667,799 427.333,787.667 437,778C446.667,768.333 457.917,760.667 470.75,755C483.583,749.333 497.333,746.5 512,746.5C526.667,746.5 540.417,749.333 553.25,755C566.083,760.667 577.333,768.333 587,778C596.667,787.667 604.333,799 610,812C615.667,825 618.5,838.833 618.5,853.5C618.5,868.167 615.667,881.917 610,894.75C604.333,907.583 596.667,918.833 587,928.5C577.333,938.167 566,945.833 553,951.5C540,957.167 526.333,960 512,960C497.333,960 483.583,957.167 470.75,951.5C457.917,945.833 446.667,938.167 437,928.5C427.333,918.833 419.667,907.583 414,894.75C408.333,881.917 405.5,868.167 405.5,853.5Z"
				/>
			</svg>
		{:else if severity === "critical"}
			<svg {...svgProps} viewBox="172 171 683 683">
				<path
					fill="currentColor"
					d="M512.5,587.5L262.5,838C252.167,848.333 239.5,853.5 224.5,853.5C209.5,853.5 196.917,848.417 186.75,838.25C176.583,828.083 171.5,815.5 171.5,800.5C171.5,785.5 176.667,772.833 187,762.5L437,512L187,262C176.667,251.667 171.5,239.167 171.5,224.5C171.5,217.167 172.833,210.167 175.5,203.5C178.167,196.833 181.917,191.167 186.75,186.5C191.583,181.833 197.167,178.083 203.5,175.25C209.833,172.417 216.833,171 224.5,171C239.167,171 251.667,176.167 262,186.5L512.5,437L762.5,186.5C773.167,175.833 785.833,170.5 800.5,170.5C807.833,170.5 814.75,171.917 821.25,174.75C827.75,177.583 833.417,181.417 838.25,186.25C843.083,191.083 846.833,196.75 849.5,203.25C852.167,209.75 853.5,216.667 853.5,224C853.5,238.667 848.333,251.167 838,261.5L587.5,512L838,762.5C848.667,773.167 854,785.833 854,800.5C854,807.833 852.583,814.667 849.75,821C846.917,827.333 843.083,832.917 838.25,837.75C833.417,842.583 827.75,846.417 821.25,849.25C814.75,852.083 807.833,853.5 800.5,853.5C785.5,853.5 772.833,848.333 762.5,838Z"
				/>
			</svg>
		{:else if severity === "information"}
			<svg {...svgProps} viewBox="406 64 213 875">
				<path
					fill="currentColor"
					d="M405.5,170.5C405.5,156.167 408.333,142.5 414,129.5C419.667,116.5 427.333,105.167 437,95.5C446.667,85.8334 457.917,78.1667 470.75,72.5C483.583,66.8334 497.333,64.0001 512,64C526.333,64.0001 540,66.8334 553,72.5C566,78.1667 577.333,85.8334 587,95.5C596.667,105.167 604.333,116.5 610,129.5C615.667,142.5 618.5,156.167 618.5,170.5C618.5,185.167 615.667,199 610,212C604.333,225 596.667,236.333 587,246C577.333,255.667 566.083,263.333 553.25,269C540.417,274.667 526.667,277.5 512,277.5C497.333,277.5 483.583,274.667 470.75,269C457.917,263.333 446.667,255.667 437,246C427.333,236.333 419.667,225 414,212C408.333,199 405.5,185.167 405.5,170.5ZM426.5,853.5L426.5,512C426.5,500.333 428.75,489.333 433.25,479C437.75,468.667 443.917,459.583 451.75,451.75C459.583,443.917 468.667,437.75 479,433.25C489.333,428.75 500.333,426.5 512,426.5C523.667,426.5 534.667,428.75 545,433.25C555.333,437.75 564.417,443.917 572.25,451.75C580.083,459.583 586.25,468.667 590.75,479C595.25,489.333 597.5,500.333 597.5,512L597.5,853.5C597.5,865.167 595.25,876.167 590.75,886.5C586.25,896.833 580.083,905.833 572.25,913.5C564.417,921.167 555.333,927.25 545,931.75C534.667,936.25 523.667,938.5 512,938.5C500.333,938.5 489.333,936.25 479,931.75C468.667,927.25 459.583,921.167 451.75,913.5C443.917,905.833 437.75,896.833 433.25,886.5C428.75,876.167 426.5,865.167 426.5,853.5Z"
				/>
			</svg>
		{/if}`,slot_props:"{}"}],events:[],typedefs:[],rest_props:{type:"Element",name:"span"},componentComment:`
InfoBadges are a non-intrusive and intuitive way to display notifications or bring focus to an area within an app - whether that be for notifications, indicating new content, or showing an alert. [Docs](https://fluent-svelte.vercel.app/docs/components/infobadge)
- Usage:
    \`\`\`tsx
    <InfoBadge />
    <InfoBadge severity="success" />
    <InfoBadge>0</InfoBadge>
    \`\`\``},ce=c=>({}),q5=c=>({slot:"example"}),pe=c=>({}),z5=c=>({slot:"code"});function U5(c,e,l){const a=c.slice();return a[3]=e[l],a}function N5(c,e,l){const a=c.slice();return a[3]=e[l],a}function G5(c){let e,l;return e=new S({props:{severity:c[3]}}),{c(){T(e.$$.fragment)},l(a){B(e.$$.fragment,a)},m(a,o){D(e,a,o),l=!0},p:u5,i(a){l||(E(e.$$.fragment,a),l=!0)},o(a){k(e.$$.fragment,a),l=!1},d(a){I(e,a)}}}function ue(c){let e=Math.floor(Math.random()*10)+"",l;return{c(){l=w(e)},l(a){l=y(a,e)},m(a,o){g(a,l,o)},p:u5,d(a){a&&s(l)}}}function V5(c){let e,l;return e=new S({props:{severity:c[3],$$slots:{default:[ue]},$$scope:{ctx:c}}}),{c(){T(e.$$.fragment)},l(a){B(e.$$.fragment,a)},m(a,o){D(e,a,o),l=!0},p(a,o){const n={};o&4&&(n.$$scope={dirty:o,ctx:a}),e.$set(n)},i(a){l||(E(e.$$.fragment,a),l=!0)},o(a){k(e.$$.fragment,a),l=!1},d(a){I(e,a)}}}function de(c){let e,l,a,o=c[0],n=[];for(let f=0;f<o.length;f+=1)n[f]=G5(N5(c,o,f));const $=f=>k(n[f],1,1,()=>{n[f]=null});let b=c[0],_=[];for(let f=0;f<b.length;f+=1)_[f]=V5(U5(c,b,f));const M=f=>k(_[f],1,1,()=>{_[f]=null});return{c(){for(let f=0;f<n.length;f+=1)n[f].c();e=h();for(let f=0;f<_.length;f+=1)_[f].c();l=Ft()},l(f){for(let p=0;p<n.length;p+=1)n[p].l(f);e=v(f);for(let p=0;p<_.length;p+=1)_[p].l(f);l=Ft()},m(f,p){for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(f,p);g(f,e,p);for(let i=0;i<_.length;i+=1)_[i]&&_[i].m(f,p);g(f,l,p),a=!0},p(f,p){if(p&1){o=f[0];let i;for(i=0;i<o.length;i+=1){const H=N5(f,o,i);n[i]?(n[i].p(H,p),E(n[i],1)):(n[i]=G5(H),n[i].c(),E(n[i],1),n[i].m(e.parentNode,e))}for(A5(),i=o.length;i<n.length;i+=1)$(i);F5()}if(p&1){b=f[0];let i;for(i=0;i<b.length;i+=1){const H=U5(f,b,i);_[i]?(_[i].p(H,p),E(_[i],1)):(_[i]=V5(H),_[i].c(),E(_[i],1),_[i].m(l.parentNode,l))}for(A5(),i=b.length;i<_.length;i+=1)M(i);F5()}},i(f){if(!a){for(let p=0;p<o.length;p+=1)E(n[p]);for(let p=0;p<b.length;p+=1)E(_[p]);a=!0}},o(f){n=n.filter(Boolean);for(let p=0;p<n.length;p+=1)k(n[p]);_=_.filter(Boolean);for(let p=0;p<_.length;p+=1)k(_[p]);a=!1},d(f){Z5(n,f),f&&s(e),Z5(_,f),f&&s(l)}}}function Ce(c){let e,l;return e=new ie({}),{c(){T(e.$$.fragment)},l(a){B(e.$$.fragment,a)},m(a,o){D(e,a,o),l=!0},i(a){l||(E(e.$$.fragment,a),l=!0)},o(a){k(e.$$.fragment,a),l=!1},d(a){I(e,a)}}}function _e(c){let e;const l=c[1].default,a=K5(l,c,c[2],q5),o=a||Ce();return{c(){o&&o.c()},l(n){o&&o.l(n)},m(n,$){o&&o.m(n,$),e=!0},p(n,$){a&&a.p&&(!e||$&4)&&Q5(a,l,n,n[2],e?X5(l,n[2],$,ce):W5(n[2]),q5)},i(n){e||(E(o,n),e=!0)},o(n){k(o,n),e=!1},d(n){o&&o.d(n)}}}function me(c){let e,l=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InfoBadge</span><span class="token punctuation">></span></span>99<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InfoBadge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InfoBadge</span> <span class="token attr-name">severity</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>critical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>bazinga<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InfoBadge</span><span class="token punctuation">></span></span>`,a;return{c(){e=new te(!1),a=Ft(),this.h()},l(o){e=ee(o,!1),a=Ft(),this.h()},h(){e.a=a},m(o,n){e.m(l,o,n),g(o,a,n)},p:u5,d(o){o&&s(a),o&&e.d()}}}function $e(c){let e;const l=c[1].default,a=K5(l,c,c[2],z5),o=a||me();return{c(){o&&o.c()},l(n){o&&o.l(n)},m(n,$){o&&o.m(n,$),e=!0},p(n,$){a&&a.p&&(!e||$&4)&&Q5(a,l,n,n[2],e?X5(l,n[2],$,pe):W5(n[2]),z5)},i(n){e||(E(o,n),e=!0)},o(n){k(o,n),e=!1},d(n){o&&o.d(n)}}}function ge(c){let e,l,a,o,n='<code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> InfoBadge <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"fluent-svelte"</span><span class="token punctuation">;</span></code>',$,b,_,M,f,p,i,H,Et,P,Zt,et,qt,zt,nt,Ut,Nt,bt,O,at,A,st,Gt,Vt,ot,Yt,jt,L,F,lt,rt,Jt,Kt,it,Z,Qt,q,ft,ct,Wt,Xt,pt,z,t5,U,ut,dt,e5,n5,Ct,N,a5,G,_t,mt,s5,o5,$t,V,l5,Y,gt,ht,r5,i5,vt,j,kt,J,f5,Lt,W,c5,Tt,X,R,Bt,K,p5,Dt,Q,It;return b=new ae({props:{repl:"ce7c58c352e24e84ad6838663e6dcd4e",columns:5,$$slots:{default:[de]},$$scope:{ctx:c}}}),Z=new S({props:{severity:"attention"}}),z=new S({props:{severity:"information"}}),N=new S({props:{severity:"success"}}),V=new S({props:{severity:"caution"}}),j=new S({props:{severity:"critical"}}),R=new ne({props:{src:String.raw`<InfoBadge>99</InfoBadge>
<InfoBadge severity="critical">bazinga</InfoBadge>`,meta:{example:!0,hideScript:!0},$$slots:{code:[$e],example:[_e]},$$scope:{ctx:c}}}),Q=new se({props:{data:fe}}),{c(){e=u("p"),l=w("InfoBadges are a non-intrusive and intuitive way to display notifications or bring focus to an area within an app - whether that be for notifications, indicating new content, or showing an alert."),a=h(),o=u("pre"),$=h(),T(b.$$.fragment),_=h(),M=u("h2"),f=w("Usage"),p=h(),i=u("h3"),H=w("Severity"),Et=h(),P=u("p"),Zt=w("InfoBadges can take in a "),et=u("code"),qt=w("severity"),zt=w(" prop, which represent the type of information you wish to convey to the user. The default severity is "),nt=u("code"),Ut=w("attention"),Nt=w("."),bt=h(),O=u("table"),at=u("thead"),A=u("tr"),st=u("th"),Gt=w("Severity"),Vt=h(),ot=u("th"),Yt=w("Preview"),jt=h(),L=u("tbody"),F=u("tr"),lt=u("td"),rt=u("code"),Jt=w("attention"),Kt=h(),it=u("td"),T(Z.$$.fragment),Qt=h(),q=u("tr"),ft=u("td"),ct=u("code"),Wt=w("information"),Xt=h(),pt=u("td"),T(z.$$.fragment),t5=h(),U=u("tr"),ut=u("td"),dt=u("code"),e5=w("success"),n5=h(),Ct=u("td"),T(N.$$.fragment),a5=h(),G=u("tr"),_t=u("td"),mt=u("code"),s5=w("caution"),o5=h(),$t=u("td"),T(V.$$.fragment),l5=h(),Y=u("tr"),gt=u("td"),ht=u("code"),r5=w("critical"),i5=h(),vt=u("td"),T(j.$$.fragment),kt=h(),J=u("h3"),f5=w("Custom Content"),Lt=h(),W=u("p"),c5=w("The default badge glyph can be overrided with your own content. This can be useful if you wish display text, or an alert count. Passing HTML content into the default slot will override the glyph with said content."),Tt=h(),X=u("div"),T(R.$$.fragment),Bt=h(),K=u("h2"),p5=w("Component API"),Dt=h(),T(Q.$$.fragment),this.h()},l(t){e=d(t,"P",{});var m=C(e);l=y(m,"InfoBadges are a non-intrusive and intuitive way to display notifications or bring focus to an area within an app - whether that be for notifications, indicating new content, or showing an alert."),m.forEach(s),a=v(t),o=d(t,"PRE",{class:!0});var Pt=C(o);Pt.forEach(s),$=v(t),B(b.$$.fragment,t),_=v(t),M=d(t,"H2",{id:!0});var wt=C(M);f=y(wt,"Usage"),wt.forEach(s),p=v(t),i=d(t,"H3",{id:!0});var d5=C(i);H=y(d5,"Severity"),d5.forEach(s),Et=v(t),P=d(t,"P",{});var tt=C(P);Zt=y(tt,"InfoBadges can take in a "),et=d(tt,"CODE",{});var C5=C(et);qt=y(C5,"severity"),C5.forEach(s),zt=y(tt," prop, which represent the type of information you wish to convey to the user. The default severity is "),nt=d(tt,"CODE",{});var _5=C(nt);Ut=y(_5,"attention"),_5.forEach(s),Nt=y(tt,"."),tt.forEach(s),bt=v(t),O=d(t,"TABLE",{});var xt=C(O);at=d(xt,"THEAD",{});var m5=C(at);A=d(m5,"TR",{});var Mt=C(A);st=d(Mt,"TH",{});var $5=C(st);Gt=y($5,"Severity"),$5.forEach(s),Vt=v(Mt),ot=d(Mt,"TH",{});var g5=C(ot);Yt=y(g5,"Preview"),g5.forEach(s),Mt.forEach(s),m5.forEach(s),jt=v(xt),L=d(xt,"TBODY",{});var x=C(L);F=d(x,"TR",{});var Ht=C(F);lt=d(Ht,"TD",{});var h5=C(lt);rt=d(h5,"CODE",{});var v5=C(rt);Jt=y(v5,"attention"),v5.forEach(s),h5.forEach(s),Kt=v(Ht),it=d(Ht,"TD",{});var w5=C(it);B(Z.$$.fragment,w5),w5.forEach(s),Ht.forEach(s),Qt=v(x),q=d(x,"TR",{});var St=C(q);ft=d(St,"TD",{});var y5=C(ft);ct=d(y5,"CODE",{});var E5=C(ct);Wt=y(E5,"information"),E5.forEach(s),y5.forEach(s),Xt=v(St),pt=d(St,"TD",{});var b5=C(pt);B(z.$$.fragment,b5),b5.forEach(s),St.forEach(s),t5=v(x),U=d(x,"TR",{});var Ot=C(U);ut=d(Ot,"TD",{});var k5=C(ut);dt=d(k5,"CODE",{});var L5=C(dt);e5=y(L5,"success"),L5.forEach(s),k5.forEach(s),n5=v(Ot),Ct=d(Ot,"TD",{});var T5=C(Ct);B(N.$$.fragment,T5),T5.forEach(s),Ot.forEach(s),a5=v(x),G=d(x,"TR",{});var Rt=C(G);_t=d(Rt,"TD",{});var B5=C(_t);mt=d(B5,"CODE",{});var D5=C(mt);s5=y(D5,"caution"),D5.forEach(s),B5.forEach(s),o5=v(Rt),$t=d(Rt,"TD",{});var I5=C($t);B(V.$$.fragment,I5),I5.forEach(s),Rt.forEach(s),l5=v(x),Y=d(x,"TR",{});var At=C(Y);gt=d(At,"TD",{});var P5=C(gt);ht=d(P5,"CODE",{});var x5=C(ht);r5=y(x5,"critical"),x5.forEach(s),P5.forEach(s),i5=v(At),vt=d(At,"TD",{});var M5=C(vt);B(j.$$.fragment,M5),M5.forEach(s),At.forEach(s),x.forEach(s),xt.forEach(s),kt=v(t),J=d(t,"H3",{id:!0});var H5=C(J);f5=y(H5,"Custom Content"),H5.forEach(s),Lt=v(t),W=d(t,"P",{});var S5=C(W);c5=y(S5,"The default badge glyph can be overrided with your own content. This can be useful if you wish display text, or an alert count. Passing HTML content into the default slot will override the glyph with said content."),S5.forEach(s),Tt=v(t),X=d(t,"DIV",{});var O5=C(X);B(R.$$.fragment,O5),O5.forEach(s),Bt=v(t),K=d(t,"H2",{id:!0});var R5=C(K);p5=y(R5,"Component API"),R5.forEach(s),Dt=v(t),B(Q.$$.fragment,t),this.h()},h(){yt(o,"class","language-ts"),yt(M,"id","usage"),yt(i,"id","severity"),yt(J,"id","custom-content"),yt(K,"id","component-api")},m(t,m){g(t,e,m),r(e,l),g(t,a,m),g(t,o,m),o.innerHTML=n,g(t,$,m),D(b,t,m),g(t,_,m),g(t,M,m),r(M,f),g(t,p,m),g(t,i,m),r(i,H),g(t,Et,m),g(t,P,m),r(P,Zt),r(P,et),r(et,qt),r(P,zt),r(P,nt),r(nt,Ut),r(P,Nt),g(t,bt,m),g(t,O,m),r(O,at),r(at,A),r(A,st),r(st,Gt),r(A,Vt),r(A,ot),r(ot,Yt),r(O,jt),r(O,L),r(L,F),r(F,lt),r(lt,rt),r(rt,Jt),r(F,Kt),r(F,it),D(Z,it,null),r(L,Qt),r(L,q),r(q,ft),r(ft,ct),r(ct,Wt),r(q,Xt),r(q,pt),D(z,pt,null),r(L,t5),r(L,U),r(U,ut),r(ut,dt),r(dt,e5),r(U,n5),r(U,Ct),D(N,Ct,null),r(L,a5),r(L,G),r(G,_t),r(_t,mt),r(mt,s5),r(G,o5),r(G,$t),D(V,$t,null),r(L,l5),r(L,Y),r(Y,gt),r(gt,ht),r(ht,r5),r(Y,i5),r(Y,vt),D(j,vt,null),g(t,kt,m),g(t,J,m),r(J,f5),g(t,Lt,m),g(t,W,m),r(W,c5),g(t,Tt,m),g(t,X,m),D(R,X,null),g(t,Bt,m),g(t,K,m),r(K,p5),g(t,Dt,m),D(Q,t,m),It=!0},p(t,[m]){const Pt={};m&4&&(Pt.$$scope={dirty:m,ctx:t}),b.$set(Pt);const wt={};m&4&&(wt.$$scope={dirty:m,ctx:t}),R.$set(wt)},i(t){It||(E(b.$$.fragment,t),E(Z.$$.fragment,t),E(z.$$.fragment,t),E(N.$$.fragment,t),E(V.$$.fragment,t),E(j.$$.fragment,t),E(R.$$.fragment,t),E(Q.$$.fragment,t),It=!0)},o(t){k(b.$$.fragment,t),k(Z.$$.fragment,t),k(z.$$.fragment,t),k(N.$$.fragment,t),k(V.$$.fragment,t),k(j.$$.fragment,t),k(R.$$.fragment,t),k(Q.$$.fragment,t),It=!1},d(t){t&&s(e),t&&s(a),t&&s(o),t&&s($),I(b,t),t&&s(_),t&&s(M),t&&s(p),t&&s(i),t&&s(Et),t&&s(P),t&&s(bt),t&&s(O),I(Z),I(z),I(N),I(V),I(j),t&&s(kt),t&&s(J),t&&s(Lt),t&&s(W),t&&s(Tt),t&&s(X),I(R),t&&s(Bt),t&&s(K),t&&s(Dt),I(Q,t)}}}function he(c,e,l){let{$$slots:a={},$$scope:o}=e;const n=["information","attention","success","caution","critical"];return c.$$set=$=>{"$$scope"in $&&l(2,o=$.$$scope)},[n,a,o]}class Te extends Y5{constructor(e){super(),j5(this,e,he,ge,J5,{})}}export{Te as component};