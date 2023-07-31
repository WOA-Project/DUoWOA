import{S as nr,i as fr,s as dr,k as r,q as u,a as f,y as mr,l as s,m as a,r as n,h as t,c as d,z as pr,n as p,b as l,P as o,A as hr,g as Er,d as wr,B as vr,a4 as cr}from"../chunks/index.34b7596d.js";/* empty css                                                      *//* empty css                                                             */import{I as yr}from"../chunks/InfoBar.82ada07f.js";function br(wo){let v,B,O,h,W,N,c,Y,U,y,C,b,T,H,_,A,I,M,L,R;return{c(){v=r("li"),B=u("Don't create partitions from Mass Storage Mode on Windows (because ABL will break with blank/spaces in names), your phone may be irrecoverable otherwise"),O=f(),h=r("li"),W=u("If you see a warning and/or error during the process, it is not normal. Contact us on telegram if you see anything odd, but do not continue or proceed on your own, you will break things further."),N=f(),c=r("li"),Y=u("Don't rerun the commands if you interrupt the process. You may break your partition table."),U=f(),y=r("li"),C=u("Do not run all commands at once."),b=f(),T=r("li"),H=u("Do not commit *any* typo with *any* commands."),_=f(),A=r("li"),I=u("Be familiar with command line interfaces."),M=f(),L=r("li"),R=u("When using TWRP, it is normal and expected for the phone to be detected as a Xiaomi phone and for touch to not work.")},l(m){v=s(m,"LI",{});var E=a(v);B=n(E,"Don't create partitions from Mass Storage Mode on Windows (because ABL will break with blank/spaces in names), your phone may be irrecoverable otherwise"),E.forEach(t),O=d(m),h=s(m,"LI",{});var pe=a(h);W=n(pe,"If you see a warning and/or error during the process, it is not normal. Contact us on telegram if you see anything odd, but do not continue or proceed on your own, you will break things further."),pe.forEach(t),N=d(m),c=s(m,"LI",{});var S=a(c);Y=n(S,"Don't rerun the commands if you interrupt the process. You may break your partition table."),S.forEach(t),U=d(m),y=s(m,"LI",{});var he=a(y);C=n(he,"Do not run all commands at once."),he.forEach(t),b=d(m),T=s(m,"LI",{});var P=a(T);H=n(P,"Do not commit *any* typo with *any* commands."),P.forEach(t),_=d(m),A=s(m,"LI",{});var Ee=a(A);I=n(Ee,"Be familiar with command line interfaces."),Ee.forEach(t),M=d(m),L=s(m,"LI",{});var we=a(L);R=n(we,"When using TWRP, it is normal and expected for the phone to be detected as a Xiaomi phone and for touch to not work."),we.forEach(t)},m(m,E){l(m,v,E),o(v,B),l(m,O,E),l(m,h,E),o(h,W),l(m,N,E),l(m,c,E),o(c,Y),l(m,U,E),l(m,y,E),o(y,C),l(m,b,E),l(m,T,E),o(T,H),l(m,_,E),l(m,A,E),o(A,I),l(m,M,E),l(m,L,E),o(L,R)},p:cr,d(m){m&&t(v),m&&t(O),m&&t(h),m&&t(N),m&&t(c),m&&t(U),m&&t(y),m&&t(b),m&&t(T),m&&t(_),m&&t(A),m&&t(M),m&&t(L)}}}function _r(wo){let v,B,O,h,W,N,c,Y,U,y,C,b,T,H,_,A,I,M,L,R,m,E,pe,S,he,P,Ee,we,G,vo,co,ve,yo,q,bo,_o,ce,Io,$,So,Wo,Ve,To,wt,k,vt,ye,Ke,Ao,ct,F,Lo,Qe,Po,Do,yt,be,Je,Oo,bt,j,Ro,_t,X,No,It,_e,Ze,Uo,St,z,zi='<code class="language-undefined">adb reboot bootloader</code>',Wt,Ie,ge,Mo,Tt,V,Vi='<code class="language-undefined">fastboot boot surfaceduo1-twrp.img</code>',At,Se,ko,Lt,We,et,Fo,Pt,K,Ki=`<code class="language-undefined">adb push &lt;path to downloaded surfaceduo1-msc.tar&gt; /sdcard/
adb shell &quot;tar -xf /sdcard/surfaceduo1-msc.tar -C /sdcard --no-same-owner&quot;
adb shell &quot;chmod +x /sdcard/msc.sh&quot;
adb shell &quot;/sdcard/msc.sh&quot;</code>`,Dt,Te,xo,Ot,Q,Bo,Rt,Ae,tt,Yo,Nt,J,Qi=`<code class="language-undefined">⚠️ THESE ARE NOT ALL COMMANDS. DISKPART COMMANDS VARY A LOT, SO THESE ARE SOME ROUGH INSTRUCTIONS.
ACTUAL COMMANDS START WITH AN HASHTAG (which you will need to remove)
YOU DO NOT HAVE TO USE Y or X, THEY ONLY NEED TO BE FREE LETTERS. IF LETTERS DON&#39;T ASSIGN FINE, USE ANOTHER ONE.
IF ONE PARTITION IS ALREADY ASSIGNED, YOU ALSO DO NOT NEED TO ASSIGN IT AGAIN IF YOU DONT WANT TO.

# list disk
Find the Surface Duo Disk, and take note of the number.
# select disk &lt;number&gt;
# list partition
You will be able to recognize the partitions you made the first time you installed Windows by their size. 
Take note of the ESP and WIN partition numbers.
# select partition &lt;esp-partition-number&gt;
# assign letter=Y:
# select partition &lt;win-partition-number&gt;
# assign letter=X:</code>`,Ut,Le,ot,Co,Mt,Pe,lt,it,Ho,kt,D,rt,Go,qo,st,$o,jo,at,Xo,Ft,De,zo,xt,Z,Vo,Bt,Oe,g,Ko,ee,Qo,Jo,Yt,te,Ji='<code class="language-undefined">dism /apply-image /ImageFile:&quot;&lt;path to install.wim&gt;&quot; /index:1 /ApplyDir:X:</code>',Ct,Re,Zo,Ht,Ne,ut,go,Gt,oe,Zi=`<code class="language-undefined">rmdir /Q /S Y:EFI
bcdboot X:Windows /s Y: /f UEFI</code>`,qt,Ue,el,$t,le,tl,jt,Me,nt,ol,Xt,ie,gi='<code class="language-undefined">DriverUpdater.exe -d &quot;&lt;path to extracted drivers&gt;definitionsDesktopARM64Internalepsilon.txt&quot; -r &quot;&lt;path to extracted drivers&gt;&quot; -p X:</code>',zt,re,ll,Vt,ke,il,Kt,Fe,rl,Qt,x,xe,sl,se,ft,al,ul,Be,nl,ae,fl,dl,Ye,ml,ue,dt,pl,hl,mt,El,Jt,ne,wl,fe,vl,Zt,gt,eo,Ce,cl,to,He,yl,oo,Ge,bl,lo,de,er='<code class="language-undefined">fastboot boot surfaceduo1-uefi.img</code>',io,qe,_l,ro,$e,Il,so,je,pt,Sl,ao,Xe,Wl,uo,me,ht,Tl,Al,no;return k=new yr({props:{title:"Warnings",severity:"caution",closable:"false",$$slots:{default:[br]},$$scope:{ctx:wo}}}),{c(){v=r("h3"),B=u("Files/Tools Needed 📃"),O=f(),h=r("ul"),W=r("li"),N=u("TWRP image: "),c=r("a"),Y=u("surfaceduo1-twrp.img"),U=f(),y=r("li"),C=u("Mass Storage Shell Script: "),b=r("a"),T=u("surfaceduo1-msc.tar"),H=f(),_=r("li"),A=u("Windows UEFI: "),I=r("a"),M=u("SM8150.UEFI.Surface.Duo.1.zip/uefi.img"),L=f(),R=r("li"),m=r("a"),E=u("Platform Tools from Google (ADB and Fastboot)"),pe=f(),S=r("li"),he=u("An ARM64 Windows build of your choice that meets the minimum system requirements (specifically the install.wim file). You can use "),P=r("a"),Ee=u("UUPMediaCreator"),we=u(" for this. "),G=r("a"),vo=u("Here’s a guide on how to use it."),co=f(),ve=r("li"),yo=u("The driver set: "),q=r("a"),bo=u("SurfaceDuo-Drivers-Full.zip"),_o=f(),ce=r("li"),Io=u("DriverUpdater, to install the driver set: "),$=r("a"),So=u("DriverUpdater"),Wo=f(),Ve=r("li"),To=u("A Windows PC to build the Windows ISO, apply it onto the phone from mass storage, add drivers to the installation, configure ESP"),wt=f(),mr(k.$$.fragment),vt=f(),ye=r("p"),Ke=r("strong"),Ao=u("THIS WILL WIPE ALL YOUR WINDOWS DATA"),ct=f(),F=r("p"),Lo=u(`We don’t take any responsibility for any damage done to your phone. By following this guide, you agree to take full responsibility of your actions. We have done some testing,
but this is `),Qe=r("strong"),Po=u("STILL IN PREVIEW"),Do=u(" and things can go wrong."),yt=f(),be=r("p"),Je=r("strong"),Oo=u("PLEASE READ AND BE SURE TO UNDERSTAND THE ENTIRE GUIDE BEFORE STARTING"),bt=f(),j=r("h2"),Ro=u("Steps 🛠️"),_t=f(),X=r("h3"),No=u("Getting to Mass Storage Mode"),It=f(),_e=r("ul"),Ze=r("li"),Uo=u("Reboot into the bootloader menu by running this command while inside Android™:"),St=f(),z=r("pre"),Wt=f(),Ie=r("ul"),ge=r("li"),Mo=u("Now let’s boot TWRP:"),Tt=f(),V=r("pre"),At=f(),Se=r("p"),ko=u("Once inside TWRP, touch will not be working and the device will say it is locked. This is completely normal."),Lt=f(),We=r("ul"),et=r("li"),Fo=u("Let’s load the mass storage shell script in order to boot into Mass Storage from TWRP"),Pt=f(),K=r("pre"),Dt=f(),Te=r("p"),xo=u("Surface Duo should now be in USB 3 SuperSpeed (or what the USB-IF currently calls it) Mass Storage Mode."),Ot=f(),Q=r("h3"),Bo=u("Formatting the existing Windows partition"),Rt=f(),Ae=r("ul"),tt=r("li"),Yo=u("Mount the partitions you made when you first installed Windows and assign them some letters:"),Nt=f(),J=r("pre"),Ut=f(),Le=r("ul"),ot=r("li"),Co=u("You will have two partitions loaded, one is the ESP partition, and the other is the Win partition. Take note of the letters you’ve used."),Mt=f(),Pe=r("p"),lt=r("strong"),it=r("em"),Ho=u("⚠️ WARNING: From now on we will assume X: is the Win partition and that Y: is the ESP partition for all the commands. Replace them correctly with what you previously picked or you will lose data on your PC."),kt=f(),D=r("ul"),rt=r("li"),Go=u("Now open the file explorer, find the just-mounted Windows drive. BE CAREFUL! If you choose the wrong device, you WILL LOSE IMPORTANT DATA ON YOUR PC! Check that the letter is the same one you’ve assigned before. In our case, it’s X:."),qo=f(),st=r("li"),$o=u("Once you have made sure you have found the right partition, right click on it and select “Format”."),jo=f(),at=r("li"),Xo=u("Make sure the selected file system is NTFS, that “Quick Format” is checked, and leave the rest as it is, and press “Start”."),Ft=f(),De=r("p"),zo=u("Now the Windows Partition on your Surface Duo should be empty. Let’s go ahead and reinstall everything."),xt=f(),Z=r("h3"),Vo=u("Installing Windows"),Bt=f(),Oe=r("ul"),g=r("li"),Ko=u("We will need our install.wim file now. If you haven’t it already, you can "),ee=r("a"),Qo=u("use this guide"),Jo=u(". When you are ready, run these commands:"),Yt=f(),te=r("pre"),Ct=f(),Re=r("p"),Zo=u("This will take a bit of time. Go make some coffee ☕ or some tea 🍵."),Ht=f(),Ne=r("ul"),ut=r("li"),go=u("Once that is done:"),Gt=f(),oe=r("pre"),qt=f(),Ue=r("p"),el=u("Windows is now installed but has no drivers."),$t=f(),le=r("h3"),tl=u("Installing the drivers"),jt=f(),Me=r("ul"),nt=r("li"),ol=u("Extract the drivers, Extract driver updater, and from the command prompt in the DriverUpdater.exe directory:"),Xt=f(),ie=r("pre"),zt=f(),re=r("h3"),ll=u("Boot Windows 🚀"),Vt=f(),ke=r("p"),il=u("We are ready to boot!"),Kt=f(),Fe=r("p"),rl=u("You’ll have two methods of booting Windows."),Qt=f(),x=r("ul"),xe=r("li"),sl=u("Enabling Dual Boot"),se=r("ul"),ft=r("li"),al=u("Pros: You’ll be able to boot Windows directly from the device"),ul=f(),Be=r("li"),nl=u("Cons: Every time you update Android™, you’ll have to follow "),ae=r("a"),fl=u("this guide"),dl=f(),Ye=r("li"),ml=u("Manual booting with a PC"),ue=r("ul"),dt=r("li"),pl=u("Pros: You can freely update Android™"),hl=f(),mt=r("li"),El=u("Cons: You will need a PC to boot to Windows"),Jt=f(),ne=r("p"),wl=u("In case you want the first option, then follow "),fe=r("a"),vl=u("this guide"),Zt=f(),gt=r("hr"),eo=f(),Ce=r("summary"),cl=u("In case you want to manually boot each time: (Click to expand)"),to=f(),He=r("p"),yl=u("Reboot your device to fastboot, using adb or from the recovery."),oo=f(),Ge=r("p"),bl=u("Let’s boot the custom UEFI, from a command prompt:"),lo=f(),de=r("pre"),io=f(),qe=r("p"),_l=u("This step above will be needed every time you will want to boot Windows and needs to be done from the Bootloader mode."),ro=f(),$e=r("p"),Il=u("You should be thrown in the Boot Manager."),so=f(),je=r("ul"),pt=r("li"),Sl=u("Navigate with the volume up/down buttons to Mass Storage Mode or Windows, and press the Power Button to confirm."),ao=f(),Xe=r("p"),Wl=u("If you did everything right, Windows will now boot! Enjoy!"),uo=f(),me=r("p"),ht=r("strong"),Tl=u("Note:"),Al=u(" If the Touch keyboard won’t show up in OOBE, touch somewhere else (to let the text box loose focus) and then touch into the text box again. As an alternative, you can use the On-Screen Keyboard."),this.h()},l(e){v=s(e,"H3",{id:!0});var i=a(v);B=n(i,"Files/Tools Needed 📃"),i.forEach(t),O=d(e),h=s(e,"UL",{});var w=a(h);W=s(w,"LI",{});var Ll=a(W);N=n(Ll,"TWRP image: "),c=s(Ll,"A",{href:!0,rel:!0});var xl=a(c);Y=n(xl,"surfaceduo1-twrp.img"),xl.forEach(t),Ll.forEach(t),U=d(w),y=s(w,"LI",{});var Pl=a(y);C=n(Pl,"Mass Storage Shell Script: "),b=s(Pl,"A",{href:!0,rel:!0});var Bl=a(b);T=n(Bl,"surfaceduo1-msc.tar"),Bl.forEach(t),Pl.forEach(t),H=d(w),_=s(w,"LI",{});var Dl=a(_);A=n(Dl,"Windows UEFI: "),I=s(Dl,"A",{href:!0,rel:!0});var Yl=a(I);M=n(Yl,"SM8150.UEFI.Surface.Duo.1.zip/uefi.img"),Yl.forEach(t),Dl.forEach(t),L=d(w),R=s(w,"LI",{});var Cl=a(R);m=s(Cl,"A",{href:!0,rel:!0});var Hl=a(m);E=n(Hl,"Platform Tools from Google (ADB and Fastboot)"),Hl.forEach(t),Cl.forEach(t),pe=d(w),S=s(w,"LI",{});var Et=a(S);he=n(Et,"An ARM64 Windows build of your choice that meets the minimum system requirements (specifically the install.wim file). You can use "),P=s(Et,"A",{href:!0,rel:!0});var Gl=a(P);Ee=n(Gl,"UUPMediaCreator"),Gl.forEach(t),we=n(Et," for this. "),G=s(Et,"A",{href:!0,rel:!0});var ql=a(G);vo=n(ql,"Here’s a guide on how to use it."),ql.forEach(t),Et.forEach(t),co=d(w),ve=s(w,"LI",{});var Ol=a(ve);yo=n(Ol,"The driver set: "),q=s(Ol,"A",{href:!0,rel:!0});var $l=a(q);bo=n($l,"SurfaceDuo-Drivers-Full.zip"),$l.forEach(t),Ol.forEach(t),_o=d(w),ce=s(w,"LI",{});var Rl=a(ce);Io=n(Rl,"DriverUpdater, to install the driver set: "),$=s(Rl,"A",{href:!0,rel:!0});var jl=a($);So=n(jl,"DriverUpdater"),jl.forEach(t),Rl.forEach(t),Wo=d(w),Ve=s(w,"LI",{});var Xl=a(Ve);To=n(Xl,"A Windows PC to build the Windows ISO, apply it onto the phone from mass storage, add drivers to the installation, configure ESP"),Xl.forEach(t),w.forEach(t),wt=d(e),pr(k.$$.fragment,e),vt=d(e),ye=s(e,"P",{});var zl=a(ye);Ke=s(zl,"STRONG",{});var Vl=a(Ke);Ao=n(Vl,"THIS WILL WIPE ALL YOUR WINDOWS DATA"),Vl.forEach(t),zl.forEach(t),ct=d(e),F=s(e,"P",{});var fo=a(F);Lo=n(fo,`We don’t take any responsibility for any damage done to your phone. By following this guide, you agree to take full responsibility of your actions. We have done some testing,
but this is `),Qe=s(fo,"STRONG",{});var Kl=a(Qe);Po=n(Kl,"STILL IN PREVIEW"),Kl.forEach(t),Do=n(fo," and things can go wrong."),fo.forEach(t),yt=d(e),be=s(e,"P",{});var Ql=a(be);Je=s(Ql,"STRONG",{});var Jl=a(Je);Oo=n(Jl,"PLEASE READ AND BE SURE TO UNDERSTAND THE ENTIRE GUIDE BEFORE STARTING"),Jl.forEach(t),Ql.forEach(t),bt=d(e),j=s(e,"H2",{id:!0});var Zl=a(j);Ro=n(Zl,"Steps 🛠️"),Zl.forEach(t),_t=d(e),X=s(e,"H3",{id:!0});var gl=a(X);No=n(gl,"Getting to Mass Storage Mode"),gl.forEach(t),It=d(e),_e=s(e,"UL",{});var ei=a(_e);Ze=s(ei,"LI",{});var ti=a(Ze);Uo=n(ti,"Reboot into the bootloader menu by running this command while inside Android™:"),ti.forEach(t),ei.forEach(t),St=d(e),z=s(e,"PRE",{class:!0});var tr=a(z);tr.forEach(t),Wt=d(e),Ie=s(e,"UL",{});var oi=a(Ie);ge=s(oi,"LI",{});var li=a(ge);Mo=n(li,"Now let’s boot TWRP:"),li.forEach(t),oi.forEach(t),Tt=d(e),V=s(e,"PRE",{class:!0});var or=a(V);or.forEach(t),At=d(e),Se=s(e,"P",{});var ii=a(Se);ko=n(ii,"Once inside TWRP, touch will not be working and the device will say it is locked. This is completely normal."),ii.forEach(t),Lt=d(e),We=s(e,"UL",{});var ri=a(We);et=s(ri,"LI",{});var si=a(et);Fo=n(si,"Let’s load the mass storage shell script in order to boot into Mass Storage from TWRP"),si.forEach(t),ri.forEach(t),Pt=d(e),K=s(e,"PRE",{class:!0});var lr=a(K);lr.forEach(t),Dt=d(e),Te=s(e,"P",{});var ai=a(Te);xo=n(ai,"Surface Duo should now be in USB 3 SuperSpeed (or what the USB-IF currently calls it) Mass Storage Mode."),ai.forEach(t),Ot=d(e),Q=s(e,"H3",{id:!0});var ui=a(Q);Bo=n(ui,"Formatting the existing Windows partition"),ui.forEach(t),Rt=d(e),Ae=s(e,"UL",{});var ni=a(Ae);tt=s(ni,"LI",{});var fi=a(tt);Yo=n(fi,"Mount the partitions you made when you first installed Windows and assign them some letters:"),fi.forEach(t),ni.forEach(t),Nt=d(e),J=s(e,"PRE",{class:!0});var ir=a(J);ir.forEach(t),Ut=d(e),Le=s(e,"UL",{});var di=a(Le);ot=s(di,"LI",{});var mi=a(ot);Co=n(mi,"You will have two partitions loaded, one is the ESP partition, and the other is the Win partition. Take note of the letters you’ve used."),mi.forEach(t),di.forEach(t),Mt=d(e),Pe=s(e,"P",{});var pi=a(Pe);lt=s(pi,"STRONG",{});var hi=a(lt);it=s(hi,"EM",{});var Ei=a(it);Ho=n(Ei,"⚠️ WARNING: From now on we will assume X: is the Win partition and that Y: is the ESP partition for all the commands. Replace them correctly with what you previously picked or you will lose data on your PC."),Ei.forEach(t),hi.forEach(t),pi.forEach(t),kt=d(e),D=s(e,"UL",{});var ze=a(D);rt=s(ze,"LI",{});var wi=a(rt);Go=n(wi,"Now open the file explorer, find the just-mounted Windows drive. BE CAREFUL! If you choose the wrong device, you WILL LOSE IMPORTANT DATA ON YOUR PC! Check that the letter is the same one you’ve assigned before. In our case, it’s X:."),wi.forEach(t),qo=d(ze),st=s(ze,"LI",{});var vi=a(st);$o=n(vi,"Once you have made sure you have found the right partition, right click on it and select “Format”."),vi.forEach(t),jo=d(ze),at=s(ze,"LI",{});var ci=a(at);Xo=n(ci,"Make sure the selected file system is NTFS, that “Quick Format” is checked, and leave the rest as it is, and press “Start”."),ci.forEach(t),ze.forEach(t),Ft=d(e),De=s(e,"P",{});var yi=a(De);zo=n(yi,"Now the Windows Partition on your Surface Duo should be empty. Let’s go ahead and reinstall everything."),yi.forEach(t),xt=d(e),Z=s(e,"H3",{id:!0});var bi=a(Z);Vo=n(bi,"Installing Windows"),bi.forEach(t),Bt=d(e),Oe=s(e,"UL",{});var _i=a(Oe);g=s(_i,"LI",{});var mo=a(g);Ko=n(mo,"We will need our install.wim file now. If you haven’t it already, you can "),ee=s(mo,"A",{href:!0,rel:!0});var Ii=a(ee);Qo=n(Ii,"use this guide"),Ii.forEach(t),Jo=n(mo,". When you are ready, run these commands:"),mo.forEach(t),_i.forEach(t),Yt=d(e),te=s(e,"PRE",{class:!0});var rr=a(te);rr.forEach(t),Ct=d(e),Re=s(e,"P",{});var Si=a(Re);Zo=n(Si,"This will take a bit of time. Go make some coffee ☕ or some tea 🍵."),Si.forEach(t),Ht=d(e),Ne=s(e,"UL",{});var Wi=a(Ne);ut=s(Wi,"LI",{});var Ti=a(ut);go=n(Ti,"Once that is done:"),Ti.forEach(t),Wi.forEach(t),Gt=d(e),oe=s(e,"PRE",{class:!0});var sr=a(oe);sr.forEach(t),qt=d(e),Ue=s(e,"P",{});var Ai=a(Ue);el=n(Ai,"Windows is now installed but has no drivers."),Ai.forEach(t),$t=d(e),le=s(e,"H3",{id:!0});var Li=a(le);tl=n(Li,"Installing the drivers"),Li.forEach(t),jt=d(e),Me=s(e,"UL",{});var Pi=a(Me);nt=s(Pi,"LI",{});var Di=a(nt);ol=n(Di,"Extract the drivers, Extract driver updater, and from the command prompt in the DriverUpdater.exe directory:"),Di.forEach(t),Pi.forEach(t),Xt=d(e),ie=s(e,"PRE",{class:!0});var ar=a(ie);ar.forEach(t),zt=d(e),re=s(e,"H3",{id:!0});var Oi=a(re);ll=n(Oi,"Boot Windows 🚀"),Oi.forEach(t),Vt=d(e),ke=s(e,"P",{});var Ri=a(ke);il=n(Ri,"We are ready to boot!"),Ri.forEach(t),Kt=d(e),Fe=s(e,"P",{});var Ni=a(Fe);rl=n(Ni,"You’ll have two methods of booting Windows."),Ni.forEach(t),Qt=d(e),x=s(e,"UL",{});var po=a(x);xe=s(po,"LI",{});var Nl=a(xe);sl=n(Nl,"Enabling Dual Boot"),se=s(Nl,"UL",{});var ho=a(se);ft=s(ho,"LI",{});var Ui=a(ft);al=n(Ui,"Pros: You’ll be able to boot Windows directly from the device"),Ui.forEach(t),ul=d(ho),Be=s(ho,"LI",{});var Ul=a(Be);nl=n(Ul,"Cons: Every time you update Android™, you’ll have to follow "),ae=s(Ul,"A",{href:!0,rel:!0});var Mi=a(ae);fl=n(Mi,"this guide"),Mi.forEach(t),Ul.forEach(t),ho.forEach(t),Nl.forEach(t),dl=d(po),Ye=s(po,"LI",{});var Ml=a(Ye);ml=n(Ml,"Manual booting with a PC"),ue=s(Ml,"UL",{});var Eo=a(ue);dt=s(Eo,"LI",{});var ki=a(dt);pl=n(ki,"Pros: You can freely update Android™"),ki.forEach(t),hl=d(Eo),mt=s(Eo,"LI",{});var Fi=a(mt);El=n(Fi,"Cons: You will need a PC to boot to Windows"),Fi.forEach(t),Eo.forEach(t),Ml.forEach(t),po.forEach(t),Jt=d(e),ne=s(e,"P",{});var kl=a(ne);wl=n(kl,"In case you want the first option, then follow "),fe=s(kl,"A",{href:!0,rel:!0});var xi=a(fe);vl=n(xi,"this guide"),xi.forEach(t),kl.forEach(t),Zt=d(e),gt=s(e,"HR",{}),eo=d(e),Ce=s(e,"SUMMARY",{});var Bi=a(Ce);cl=n(Bi,"In case you want to manually boot each time: (Click to expand)"),Bi.forEach(t),to=d(e),He=s(e,"P",{});var Yi=a(He);yl=n(Yi,"Reboot your device to fastboot, using adb or from the recovery."),Yi.forEach(t),oo=d(e),Ge=s(e,"P",{});var Ci=a(Ge);bl=n(Ci,"Let’s boot the custom UEFI, from a command prompt:"),Ci.forEach(t),lo=d(e),de=s(e,"PRE",{class:!0});var ur=a(de);ur.forEach(t),io=d(e),qe=s(e,"P",{});var Hi=a(qe);_l=n(Hi,"This step above will be needed every time you will want to boot Windows and needs to be done from the Bootloader mode."),Hi.forEach(t),ro=d(e),$e=s(e,"P",{});var Gi=a($e);Il=n(Gi,"You should be thrown in the Boot Manager."),Gi.forEach(t),so=d(e),je=s(e,"UL",{});var qi=a(je);pt=s(qi,"LI",{});var $i=a(pt);Sl=n($i,"Navigate with the volume up/down buttons to Mass Storage Mode or Windows, and press the Power Button to confirm."),$i.forEach(t),qi.forEach(t),ao=d(e),Xe=s(e,"P",{});var ji=a(Xe);Wl=n(ji,"If you did everything right, Windows will now boot! Enjoy!"),ji.forEach(t),uo=d(e),me=s(e,"P",{});var Fl=a(me);ht=s(Fl,"STRONG",{});var Xi=a(ht);Tl=n(Xi,"Note:"),Xi.forEach(t),Al=n(Fl," If the Touch keyboard won’t show up in OOBE, touch somewhere else (to let the text box loose focus) and then touch into the text box again. As an alternative, you can use the On-Screen Keyboard."),Fl.forEach(t),this.h()},h(){p(v,"id","filestools-needed-"),p(c,"href","https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/InstallWindows/Files/surfaceduo1-twrp.img"),p(c,"rel","nofollow"),p(b,"href","https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/InstallWindows/Files/surfaceduo1-msc.tar"),p(b,"rel","nofollow"),p(I,"href","https://github.com/WOA-Project/SurfaceDuoPkg/releases/"),p(I,"rel","nofollow"),p(m,"href","https://developer.android.com/studio/releases/platform-tools"),p(m,"rel","nofollow"),p(P,"href","https://github.com/gus33000/UUPMediaCreator"),p(P,"rel","nofollow"),p(G,"href","https://github.com/WOA-Project/SurfaceDuo-Guides/blob/main/CreateWindowsISO.md"),p(G,"rel","nofollow"),p(q,"href","https://github.com/WOA-Project/SurfaceDuo-Drivers/releases/"),p(q,"rel","nofollow"),p($,"href","https://github.com/WOA-Project/DriverUpdater/releases/"),p($,"rel","nofollow"),p(j,"id","steps-️"),p(X,"id","getting-to-mass-storage-mode"),p(z,"class","language-undefined"),p(V,"class","language-undefined"),p(K,"class","language-undefined"),p(Q,"id","formatting-the-existing-windows-partition"),p(J,"class","language-undefined"),p(Z,"id","installing-windows"),p(ee,"href","https://github.com/WOA-Project/SurfaceDuo-Guides/blob/main/CreateWindowsISO.md"),p(ee,"rel","nofollow"),p(te,"class","language-undefined"),p(oe,"class","language-undefined"),p(le,"id","installing-the-drivers"),p(ie,"class","language-undefined"),p(re,"id","boot-windows-"),p(ae,"href","https://github.com/WOA-Project/SurfaceDuo-Guides/blob/main/InstallWindows/DualBoot-SurfaceDuo1.md"),p(ae,"rel","nofollow"),p(fe,"href","https://github.com/WOA-Project/SurfaceDuo-Guides/blob/main/InstallWindows/DualBoot-SurfaceDuo1.md"),p(fe,"rel","nofollow"),p(de,"class","language-undefined")},m(e,i){l(e,v,i),o(v,B),l(e,O,i),l(e,h,i),o(h,W),o(W,N),o(W,c),o(c,Y),o(h,U),o(h,y),o(y,C),o(y,b),o(b,T),o(h,H),o(h,_),o(_,A),o(_,I),o(I,M),o(h,L),o(h,R),o(R,m),o(m,E),o(h,pe),o(h,S),o(S,he),o(S,P),o(P,Ee),o(S,we),o(S,G),o(G,vo),o(h,co),o(h,ve),o(ve,yo),o(ve,q),o(q,bo),o(h,_o),o(h,ce),o(ce,Io),o(ce,$),o($,So),o(h,Wo),o(h,Ve),o(Ve,To),l(e,wt,i),hr(k,e,i),l(e,vt,i),l(e,ye,i),o(ye,Ke),o(Ke,Ao),l(e,ct,i),l(e,F,i),o(F,Lo),o(F,Qe),o(Qe,Po),o(F,Do),l(e,yt,i),l(e,be,i),o(be,Je),o(Je,Oo),l(e,bt,i),l(e,j,i),o(j,Ro),l(e,_t,i),l(e,X,i),o(X,No),l(e,It,i),l(e,_e,i),o(_e,Ze),o(Ze,Uo),l(e,St,i),l(e,z,i),z.innerHTML=zi,l(e,Wt,i),l(e,Ie,i),o(Ie,ge),o(ge,Mo),l(e,Tt,i),l(e,V,i),V.innerHTML=Vi,l(e,At,i),l(e,Se,i),o(Se,ko),l(e,Lt,i),l(e,We,i),o(We,et),o(et,Fo),l(e,Pt,i),l(e,K,i),K.innerHTML=Ki,l(e,Dt,i),l(e,Te,i),o(Te,xo),l(e,Ot,i),l(e,Q,i),o(Q,Bo),l(e,Rt,i),l(e,Ae,i),o(Ae,tt),o(tt,Yo),l(e,Nt,i),l(e,J,i),J.innerHTML=Qi,l(e,Ut,i),l(e,Le,i),o(Le,ot),o(ot,Co),l(e,Mt,i),l(e,Pe,i),o(Pe,lt),o(lt,it),o(it,Ho),l(e,kt,i),l(e,D,i),o(D,rt),o(rt,Go),o(D,qo),o(D,st),o(st,$o),o(D,jo),o(D,at),o(at,Xo),l(e,Ft,i),l(e,De,i),o(De,zo),l(e,xt,i),l(e,Z,i),o(Z,Vo),l(e,Bt,i),l(e,Oe,i),o(Oe,g),o(g,Ko),o(g,ee),o(ee,Qo),o(g,Jo),l(e,Yt,i),l(e,te,i),te.innerHTML=Ji,l(e,Ct,i),l(e,Re,i),o(Re,Zo),l(e,Ht,i),l(e,Ne,i),o(Ne,ut),o(ut,go),l(e,Gt,i),l(e,oe,i),oe.innerHTML=Zi,l(e,qt,i),l(e,Ue,i),o(Ue,el),l(e,$t,i),l(e,le,i),o(le,tl),l(e,jt,i),l(e,Me,i),o(Me,nt),o(nt,ol),l(e,Xt,i),l(e,ie,i),ie.innerHTML=gi,l(e,zt,i),l(e,re,i),o(re,ll),l(e,Vt,i),l(e,ke,i),o(ke,il),l(e,Kt,i),l(e,Fe,i),o(Fe,rl),l(e,Qt,i),l(e,x,i),o(x,xe),o(xe,sl),o(xe,se),o(se,ft),o(ft,al),o(se,ul),o(se,Be),o(Be,nl),o(Be,ae),o(ae,fl),o(x,dl),o(x,Ye),o(Ye,ml),o(Ye,ue),o(ue,dt),o(dt,pl),o(ue,hl),o(ue,mt),o(mt,El),l(e,Jt,i),l(e,ne,i),o(ne,wl),o(ne,fe),o(fe,vl),l(e,Zt,i),l(e,gt,i),l(e,eo,i),l(e,Ce,i),o(Ce,cl),l(e,to,i),l(e,He,i),o(He,yl),l(e,oo,i),l(e,Ge,i),o(Ge,bl),l(e,lo,i),l(e,de,i),de.innerHTML=er,l(e,io,i),l(e,qe,i),o(qe,_l),l(e,ro,i),l(e,$e,i),o($e,Il),l(e,so,i),l(e,je,i),o(je,pt),o(pt,Sl),l(e,ao,i),l(e,Xe,i),o(Xe,Wl),l(e,uo,i),l(e,me,i),o(me,ht),o(ht,Tl),o(me,Al),no=!0},p(e,[i]){const w={};i&1&&(w.$$scope={dirty:i,ctx:e}),k.$set(w)},i(e){no||(Er(k.$$.fragment,e),no=!0)},o(e){wr(k.$$.fragment,e),no=!1},d(e){e&&t(v),e&&t(O),e&&t(h),e&&t(wt),vr(k,e),e&&t(vt),e&&t(ye),e&&t(ct),e&&t(F),e&&t(yt),e&&t(be),e&&t(bt),e&&t(j),e&&t(_t),e&&t(X),e&&t(It),e&&t(_e),e&&t(St),e&&t(z),e&&t(Wt),e&&t(Ie),e&&t(Tt),e&&t(V),e&&t(At),e&&t(Se),e&&t(Lt),e&&t(We),e&&t(Pt),e&&t(K),e&&t(Dt),e&&t(Te),e&&t(Ot),e&&t(Q),e&&t(Rt),e&&t(Ae),e&&t(Nt),e&&t(J),e&&t(Ut),e&&t(Le),e&&t(Mt),e&&t(Pe),e&&t(kt),e&&t(D),e&&t(Ft),e&&t(De),e&&t(xt),e&&t(Z),e&&t(Bt),e&&t(Oe),e&&t(Yt),e&&t(te),e&&t(Ct),e&&t(Re),e&&t(Ht),e&&t(Ne),e&&t(Gt),e&&t(oe),e&&t(qt),e&&t(Ue),e&&t($t),e&&t(le),e&&t(jt),e&&t(Me),e&&t(Xt),e&&t(ie),e&&t(zt),e&&t(re),e&&t(Vt),e&&t(ke),e&&t(Kt),e&&t(Fe),e&&t(Qt),e&&t(x),e&&t(Jt),e&&t(ne),e&&t(Zt),e&&t(gt),e&&t(eo),e&&t(Ce),e&&t(to),e&&t(He),e&&t(oo),e&&t(Ge),e&&t(lo),e&&t(de),e&&t(io),e&&t(qe),e&&t(ro),e&&t($e),e&&t(so),e&&t(je),e&&t(ao),e&&t(Xe),e&&t(uo),e&&t(me)}}}class Ar extends nr{constructor(v){super(),fr(this,v,null,_r,dr,{})}}export{Ar as component};