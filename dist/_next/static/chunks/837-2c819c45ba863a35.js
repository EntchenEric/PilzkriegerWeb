"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[837],{3892:function(t,e,o){o.d(e,{z:function(){return x}});var n=o(2265),r=o(7238),a=o(2544),i=o(7745),s=o(9608),l=o(7354),c=o(8579),p=o(8953),u=o(7309),d=o(1062),m=o(2411),f=o(4565),y={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844"};let v={orientation:"horizontal"},g=(0,i.Z)((t,e)=>{let{borderWidth:o}=e;return{group:{"--button-border-width":(0,r.h)(o)}}}),h=(0,f.d)((t,e)=>{let o=(0,s.w)("ButtonGroup",v,t),{className:r,style:a,classNames:i,styles:p,unstyled:u,orientation:d,vars:m,borderWidth:f,variant:h,mod:b,...w}=(0,s.w)("ButtonGroup",v,t),E=(0,l.y)({name:"ButtonGroup",props:o,classes:y,className:r,style:a,classNames:i,styles:p,unstyled:u,vars:m,varsResolver:g,rootSelector:"group"});return n.createElement(c.x,{...E("group"),ref:e,variant:h,mod:[{"data-orientation":d},b],role:"group",...w})});h.classes=y,h.displayName="@mantine/core/ButtonGroup";let b={in:{opacity:1,transform:"translate(-50%, calc(-50% + ".concat((0,r.h)(1),"))")},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},w={},E=(0,i.Z)((t,e)=>{let{radius:o,color:n,gradient:r,variant:i,size:s,justify:l,autoContrast:c}=e,p=t.variantColorResolver({color:n||t.primaryColor,theme:t,gradient:r,variant:i||"filled",autoContrast:c});return{root:{"--button-justify":l,"--button-height":(0,a.ap)(s,"button-height"),"--button-padding-x":(0,a.ap)(s,"button-padding-x"),"--button-fz":(null==s?void 0:s.includes("compact"))?(0,a.yv)(s.replace("compact-","")):(0,a.yv)(s),"--button-radius":void 0===o?void 0:(0,a.H5)(o),"--button-bg":n||i?p.background:void 0,"--button-hover":n||i?p.hover:void 0,"--button-color":p.color,"--button-bd":n||i?p.border:void 0,"--button-hover-color":n||i?p.hoverColor:void 0}}}),x=(0,p.b)((t,e)=>{let o=(0,s.w)("Button",w,t),{style:r,vars:a,className:i,color:p,disabled:f,children:v,leftSection:g,rightSection:h,fullWidth:x,variant:P,radius:I,loading:S,loaderProps:z,gradient:_,classNames:k,styles:Y,unstyled:N,"data-disabled":O,autoContrast:B,mod:T,...D}=o,W=(0,l.y)({name:"Button",props:o,classes:y,className:i,style:r,classNames:k,styles:Y,unstyled:N,vars:a,varsResolver:E}),X=!!g,C=!!h;return n.createElement(m.k,{ref:e,...W("root",{active:!f&&!S&&!O}),unstyled:N,variant:P,disabled:f||S,mod:[{disabled:f||O,loading:S,block:x,"with-left-section":X,"with-right-section":C},T],...D},n.createElement(d.u,{mounted:!!S,transition:b,duration:150},t=>n.createElement(c.x,{component:"span",...W("loader",{style:t}),"aria-hidden":!0},n.createElement(u.a,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...z}))),n.createElement("span",{...W("inner")},g&&n.createElement(c.x,{component:"span",...W("section"),mod:{position:"left"}},g),n.createElement(c.x,{component:"span",mod:{loading:S},...W("label")},v),h&&n.createElement(c.x,{component:"span",...W("section"),mod:{position:"right"}},h)))});x.classes=y,x.displayName="@mantine/core/Button",x.Group=h},6031:function(t,e,o){o.d(e,{W:function(){return m}});var n=o(2265),r=o(2544),a=o(7745),i=o(9608),s=o(7354),l=o(8579),c=o(4565),p={root:"m_7485cace"};let u={},d=(0,a.Z)((t,e)=>{let{size:o,fluid:n}=e;return{root:{"--container-size":n?void 0:(0,r.ap)(o,"container-size")}}}),m=(0,c.d)((t,e)=>{let o=(0,i.w)("Container",u,t),{classNames:r,className:a,style:c,styles:m,unstyled:f,vars:y,fluid:v,mod:g,...h}=o,b=(0,s.y)({name:"Container",classes:p,props:o,className:a,style:c,classNames:r,styles:m,unstyled:f,vars:y,varsResolver:d});return n.createElement(l.x,{ref:e,mod:[{fluid:v},g],...b("root"),...h})});m.classes=p,m.displayName="@mantine/core/Container"},18:function(t,e,o){o.d(e,{I:function(){return B}});var n=o(2265),r=o(7238),a=o(2544),i=o(7745),s=o(9608),l=o(7354),c=o(8730),p=o(8579),u=o(8953),d=o(4565),m=o(3226),f={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};let y={},v=(0,i.Z)((t,e)=>{let{size:o}=e;return{description:{"--input-description-size":void 0===o?void 0:"calc(".concat((0,a.yv)(o)," - ").concat((0,r.h)(2),")")}}}),g=(0,d.d)((t,e)=>{let o=(0,s.w)("InputDescription",y,t),{classNames:r,className:a,style:i,styles:c,unstyled:u,vars:d,size:g,__staticSelector:h,__inheritStyles:b=!0,variant:w,...E}=(0,s.w)("InputDescription",y,o),x=(0,m.D)(),P=(0,l.y)({name:["InputWrapper",h],props:o,classes:f,className:a,style:i,classNames:r,styles:c,unstyled:u,rootSelector:"description",vars:d,varsResolver:v}),I=b&&(null==x?void 0:x.getStyles)||P;return n.createElement(p.x,{component:"p",ref:e,variant:w,size:g,...I("description",(null==x?void 0:x.getStyles)?{className:a,style:i}:void 0),...E})});g.classes=f,g.displayName="@mantine/core/InputDescription";let h={},b=(0,i.Z)((t,e)=>{let{size:o}=e;return{error:{"--input-error-size":void 0===o?void 0:"calc(".concat((0,a.yv)(o)," - ").concat((0,r.h)(2),")")}}}),w=(0,d.d)((t,e)=>{let o=(0,s.w)("InputError",h,t),{classNames:r,className:a,style:i,styles:c,unstyled:u,vars:d,size:y,__staticSelector:v,__inheritStyles:g=!0,variant:w,...E}=o,x=(0,l.y)({name:["InputWrapper",v],props:o,classes:f,className:a,style:i,classNames:r,styles:c,unstyled:u,rootSelector:"error",vars:d,varsResolver:b}),P=(0,m.D)(),I=g&&(null==P?void 0:P.getStyles)||x;return n.createElement(p.x,{component:"p",ref:e,variant:w,size:y,...I("error",(null==P?void 0:P.getStyles)?{className:a,style:i}:void 0),...E})});w.classes=f,w.displayName="@mantine/core/InputError";let E={labelElement:"label"},x=(0,i.Z)((t,e)=>{let{size:o}=e;return{label:{"--input-label-size":(0,a.yv)(o),"--input-asterisk-color":void 0}}}),P=(0,d.d)((t,e)=>{let o=(0,s.w)("InputLabel",E,t),{classNames:r,className:a,style:i,styles:c,unstyled:u,vars:d,labelElement:y,size:v,required:g,htmlFor:h,onMouseDown:b,children:w,__staticSelector:P,variant:I,mod:S,...z}=(0,s.w)("InputLabel",E,o),_=(0,l.y)({name:["InputWrapper",P],props:o,classes:f,className:a,style:i,classNames:r,styles:c,unstyled:u,rootSelector:"label",vars:d,varsResolver:x}),k=(0,m.D)(),Y=(null==k?void 0:k.getStyles)||_;return n.createElement(p.x,{...Y("label",(null==k?void 0:k.getStyles)?{className:a,style:i}:void 0),component:y,variant:I,size:v,ref:e,htmlFor:"label"===y?h:void 0,mod:[{required:g},S],onMouseDown:t=>{null==b||b(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()},...z},w,g&&n.createElement("span",{...Y("required"),"aria-hidden":!0}," *"))});P.classes=f,P.displayName="@mantine/core/InputLabel";let I={},S=(0,d.d)((t,e)=>{let o=(0,s.w)("InputPlaceholder",I,t),{classNames:r,className:a,style:i,styles:c,unstyled:u,vars:d,__staticSelector:m,variant:y,error:v,mod:g,...h}=(0,s.w)("InputPlaceholder",I,o),b=(0,l.y)({name:["InputPlaceholder",m],props:o,classes:f,className:a,style:i,classNames:r,styles:c,unstyled:u,rootSelector:"placeholder"});return n.createElement(p.x,{...b("placeholder"),mod:[{error:!!v},g],component:"span",variant:y,ref:e,...h})});S.classes=f,S.displayName="@mantine/core/InputPlaceholder";var z=o(679);let _={labelElement:"label",inputContainer:t=>t,inputWrapperOrder:["label","description","input","error"]},k=(0,i.Z)((t,e)=>{let{size:o}=e;return{label:{"--input-label-size":(0,a.yv)(o),"--input-asterisk-color":void 0},error:{"--input-error-size":void 0===o?void 0:"calc(".concat((0,a.yv)(o)," - ").concat((0,r.h)(2),")")},description:{"--input-description-size":void 0===o?void 0:"calc(".concat((0,a.yv)(o)," - ").concat((0,r.h)(2),")")}}}),Y=(0,d.d)((t,e)=>{let o=(0,s.w)("InputWrapper",_,t),{classNames:r,className:a,style:i,styles:c,unstyled:u,vars:d,size:y,variant:v,__staticSelector:h,inputContainer:b,inputWrapperOrder:E,label:x,error:I,description:S,labelProps:Y,descriptionProps:N,errorProps:O,labelElement:B,children:T,withAsterisk:D,id:W,required:X,__stylesApiProps:C,mod:F,...Z}=o,R=(0,l.y)({name:["InputWrapper",h],props:C||o,classes:f,className:a,style:i,classNames:r,styles:c,unstyled:u,vars:d,varsResolver:k}),q={size:y,variant:v,__staticSelector:h},G=(0,z.M)(W),A=(null==O?void 0:O.id)||"".concat(G,"-error"),L=(null==N?void 0:N.id)||"".concat(G,"-description"),M=!!I&&"boolean"!=typeof I,H=!!S,j="".concat(M?A:""," ").concat(H?L:""),V=j.trim().length>0?j.trim():void 0,J=(null==Y?void 0:Y.id)||"".concat(G,"-label"),K=x&&n.createElement(P,{key:"label",labelElement:B,id:J,htmlFor:G,required:"boolean"==typeof D?D:X,...q,...Y},x),Q=H&&n.createElement(g,{key:"description",...N,...q,size:(null==N?void 0:N.size)||q.size,id:(null==N?void 0:N.id)||L},S),U=n.createElement(n.Fragment,{key:"input"},b(T)),$=M&&n.createElement(w,{...O,...q,size:(null==O?void 0:O.size)||q.size,key:"error",id:(null==O?void 0:O.id)||A},I),tt=E.map(t=>{switch(t){case"label":return K;case"input":return U;case"description":return Q;case"error":return $;default:return null}});return n.createElement(m.I,{value:{getStyles:R,describedBy:V,inputId:G,labelId:J,...function(t,e){let{hasDescription:o,hasError:n}=e,r=t.findIndex(t=>"input"===t),a=t[r-1],i=t[r+1];return{offsetBottom:o&&"description"===i||n&&"error"===i,offsetTop:o&&"description"===a||n&&"error"===a}}(E,{hasDescription:H,hasError:M})}},n.createElement(p.x,{ref:e,variant:v,size:y,mod:[{error:!!I},F],...R("root"),...Z},tt))});Y.classes=f,Y.displayName="@mantine/core/InputWrapper";let N={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},O=(0,i.Z)((t,e,o)=>({wrapper:{"--input-margin-top":o.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":o.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":(0,a.ap)(e.size,"input-height"),"--input-fz":(0,a.yv)(e.size),"--input-radius":void 0===e.radius?void 0:(0,a.H5)(e.radius),"--input-left-section-width":void 0!==e.leftSectionWidth?(0,r.h)(e.leftSectionWidth):void 0,"--input-right-section-width":void 0!==e.rightSectionWidth?(0,r.h)(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?(0,a.ap)(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),B=(0,u.b)((t,e)=>{let o=(0,s.w)("Input",N,t),{classNames:r,className:a,style:i,styles:u,unstyled:d,required:y,__staticSelector:v,__stylesApiProps:g,size:h,wrapperProps:b,error:w,disabled:E,leftSection:x,leftSectionProps:P,leftSectionWidth:I,rightSection:S,rightSectionProps:z,rightSectionWidth:_,rightSectionPointerEvents:k,leftSectionPointerEvents:Y,variant:B,vars:T,pointer:D,multiline:W,radius:X,id:C,withAria:F,withErrorStyles:Z,mod:R,...q}=o,{styleProps:G,rest:A}=(0,c.c)(q),L=(0,m.D)(),M={offsetBottom:null==L?void 0:L.offsetBottom,offsetTop:null==L?void 0:L.offsetTop},H=(0,l.y)({name:["Input",v],props:g||o,classes:f,className:a,style:i,classNames:r,styles:u,unstyled:d,stylesCtx:M,rootSelector:"wrapper",vars:T,varsResolver:O}),j=F?{required:y,disabled:E,"aria-invalid":!!w,"aria-describedby":null==L?void 0:L.describedBy,id:(null==L?void 0:L.inputId)||C}:{};return n.createElement(p.x,{...H("wrapper"),...G,...b,mod:[{error:!!w&&Z,pointer:D,disabled:E,multiline:W,"data-with-right-section":!!S,"data-with-left-section":!!x},R],variant:B,size:h},x&&n.createElement("div",{...P,"data-position":"left",...H("section",{className:null==P?void 0:P.className,style:null==P?void 0:P.style})},x),n.createElement(p.x,{component:"input",...A,...j,ref:e,required:y,mod:{disabled:E,error:!!w&&Z},variant:B,...H("input")}),S&&n.createElement("div",{...z,"data-position":"right",...H("section",{className:null==z?void 0:z.className,style:null==z?void 0:z.style})},S))});B.classes=f,B.Wrapper=Y,B.Label=P,B.Error=w,B.Description=g,B.Placeholder=S,B.displayName="@mantine/core/Input"},3226:function(t,e,o){o.d(e,{D:function(){return r},I:function(){return n}}),o(2265);let[n,r]=(0,o(8550).V)({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0})},6338:function(t,e,o){o.d(e,{X:function(){return m}});var n=o(2265),r=o(2544),a=o(7745),i=o(9608),s=o(7354),l=o(8579),c=o(8953),p={root:"m_1b7284a3"};let u={},d=(0,a.Z)((t,e)=>{let{radius:o,shadow:n}=e;return{root:{"--paper-radius":void 0===o?void 0:(0,r.H5)(o),"--paper-shadow":(0,r.Xj)(n)}}}),m=(0,c.b)((t,e)=>{let o=(0,i.w)("Paper",u,t),{classNames:r,className:a,style:c,styles:m,unstyled:f,withBorder:y,vars:v,radius:g,shadow:h,variant:b,mod:w,...E}=o,x=(0,s.y)({name:"Paper",props:o,classes:p,className:a,style:c,classNames:r,styles:m,unstyled:f,vars:v,varsResolver:d});return n.createElement(l.x,{ref:e,mod:[{"data-with-border":y},w],...x("root"),variant:b,...E})});m.classes=p,m.displayName="@mantine/core/Paper"},5562:function(t,e,o){o.d(e,{x:function(){return y}});var n=o(2265),r=o(2544),a=o(7745),i=o(8291),s=o(5479),l=o(9608),c=o(7354),p=o(8579),u=o(8953),d={root:"m_b6d8b162"};let m={inherit:!1},f=(0,a.Z)((t,e)=>{let{variant:o,lineClamp:n,gradient:a,size:l,color:c}=e;return{root:{"--text-fz":(0,r.yv)(l),"--text-lh":(0,r.Dp)(l),"--text-gradient":"gradient"===o?(0,s.u)(a,t):void 0,"--text-line-clamp":"number"==typeof n?n.toString():void 0,"--text-color":c?(0,i.p)(c,t):void 0}}}),y=(0,u.b)((t,e)=>{let o=(0,l.w)("Text",m,t),{lineClamp:r,truncate:a,inline:i,inherit:s,gradient:u,span:y,__staticSelector:v,vars:g,className:h,style:b,classNames:w,styles:E,unstyled:x,variant:P,mod:I,size:S,...z}=o,_=(0,c.y)({name:["Text",v],props:o,classes:d,className:h,style:b,classNames:w,styles:E,unstyled:x,vars:g,varsResolver:f});return n.createElement(p.x,{..._("root",{focusable:!0}),ref:e,component:y?"span":"p",variant:P,mod:[{"data-truncate":"start"===a?"start":"end"===a||a?"end":void 0,"data-line-clamp":"number"==typeof r,"data-inline":i,"data-inherit":s},I],size:S,...z})});y.classes=d,y.displayName="@mantine/core/Text"},1062:function(t,e,o){o.d(e,{u:function(){return d}});var n=o(2265),r=o(7238);let a=t=>({in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(.9) translateY(".concat((0,r.h)("bottom"===t?10:-10),")")},transitionProperty:"transform, opacity"}),i={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},"fade-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(".concat((0,r.h)(30))},transitionProperty:"opacity, transform"},"fade-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(".concat((0,r.h)(-30))},transitionProperty:"opacity, transform"},"fade-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(".concat((0,r.h)(30))},transitionProperty:"opacity, transform"},"fade-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(".concat((0,r.h)(-30))},transitionProperty:"opacity, transform"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(".concat((0,r.h)(-20),") skew(-10deg, -5deg)")},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(".concat((0,r.h)(20),") skew(-10deg, -5deg)")},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(".concat((0,r.h)(20),") rotate(-5deg)")},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(".concat((0,r.h)(20),") rotate(5deg)")},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:{...a("bottom"),common:{transformOrigin:"center center"}},"pop-bottom-left":{...a("bottom"),common:{transformOrigin:"bottom left"}},"pop-bottom-right":{...a("bottom"),common:{transformOrigin:"bottom right"}},"pop-top-left":{...a("top"),common:{transformOrigin:"top left"}},"pop-top-right":{...a("top"),common:{transformOrigin:"top right"}}},s={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};var l=o(4887),c=o(1661),p=o(6695),u=o(4099);function d(t){let{keepMounted:e,transition:o="fade",duration:r=250,exitDuration:a=r,mounted:d,children:m,timingFunction:f="ease",onExit:y,onEntered:v,onEnter:g,onExited:h}=t,{transitionDuration:b,transitionStatus:w,transitionTimingFunction:E}=function(t){let{duration:e,exitDuration:o,timingFunction:r,mounted:a,onEnter:i,onExit:s,onEntered:d,onExited:m}=t,f=(0,u.rZ)(),y=(0,c.J)(),v=!!f.respectReducedMotion&&y,[g,h]=(0,n.useState)(v?0:e),[b,w]=(0,n.useState)(a?"entered":"exited"),E=(0,n.useRef)(-1),x=(0,n.useRef)(-1),P=t=>{let n=t?i:s,r=t?d:m;window.clearTimeout(E.current);let a=v?0:t?e:o;h(a),0===a?("function"==typeof n&&n(),"function"==typeof r&&r(),w(t?"entered":"exited")):x.current=requestAnimationFrame(()=>{l.flushSync(()=>{w(t?"pre-entering":"pre-exiting")}),x.current=requestAnimationFrame(()=>{"function"==typeof n&&n(),w(t?"entering":"exiting"),E.current=window.setTimeout(()=>{"function"==typeof r&&r(),w(t?"entered":"exited")},a)})})};return(0,p.l)(()=>{P(a)},[a]),(0,n.useEffect)(()=>()=>{window.clearTimeout(E.current),cancelAnimationFrame(x.current)},[]),{transitionDuration:g,transitionStatus:b,transitionTimingFunction:r||"ease"}}({mounted:d,exitDuration:a,duration:r,timingFunction:f,onExit:y,onEntered:v,onEnter:g,onExited:h});return 0===b?d?n.createElement(n.Fragment,null,m({})):e?m({display:"none"}):null:"exited"===w?e?m({display:"none"}):null:n.createElement(n.Fragment,null,m(function(t){let{transition:e,state:o,duration:n,timingFunction:r}=t,a={transitionDuration:"".concat(n,"ms"),transitionTimingFunction:r};return"string"==typeof e?e in i?{transitionProperty:i[e].transitionProperty,...a,...i[e].common,...i[e][s[o]]}:{}:{transitionProperty:e.transitionProperty,...a,...e.common,...e[s[o]]}}({transition:o,duration:b,state:w,timingFunction:E})))}d.displayName="@mantine/core/Transition"},8550:function(t,e,o){o.d(e,{V:function(){return r}});var n=o(2265);function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=(0,n.createContext)(t);return[t=>{let{children:o,value:r}=t;return n.createElement(e.Provider,{value:r},o)},()=>(0,n.useContext)(e)]}},679:function(t,e,o){o.d(e,{M:function(){return s}});var n=o(2265),r=o(6948),a=o(491);let i=n["useId".toString()]||(()=>void 0);function s(t){let e=function(){let t=i();return t?"mantine-".concat(t.replace(/:/g,"")):""}(),[o,s]=(0,n.useState)(e);return((0,r.Y)(()=>{s((0,a.k)())},[]),"string"==typeof t)?t:"undefined"==typeof window?e:o}}}]);