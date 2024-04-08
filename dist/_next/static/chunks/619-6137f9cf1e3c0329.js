"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{7171:function(t,e,n){n.d(e,{P:function(){return m}});var r=n(2265),o=n(7238),i=n(2544),a=n(7745),c=n(9608),l=n(7354),u=n(8953),s=n(2411);let p=(0,r.forwardRef)((t,e)=>{let{size:n="var(--cb-icon-size, 70%)",style:o,...i}=t;return r.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...o,width:n,height:n},ref:e,...i},r.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))});p.displayName="@mantine/core/CloseIcon";var d={root:"m_86a44da5","root--subtle":"m_220c80f2"};let f={variant:"subtle"},y=(0,a.Z)((t,e)=>{let{size:n,radius:r,iconSize:a}=e;return{root:{"--cb-size":(0,i.ap)(n,"cb-size"),"--cb-radius":void 0===r?void 0:(0,i.H5)(r),"--cb-icon-size":(0,o.h)(a)}}}),m=(0,u.b)((t,e)=>{let n=(0,c.w)("CloseButton",f,t),{iconSize:o,children:i,vars:a,radius:u,className:m,classNames:v,style:g,styles:h,unstyled:b,"data-disabled":w,disabled:E,variant:L,icon:N,mod:x,...z}=n,_=(0,l.y)({name:"CloseButton",props:n,className:m,style:g,classes:d,classNames:v,styles:h,unstyled:b,vars:a,varsResolver:y});return r.createElement(s.k,{ref:e,...z,unstyled:b,variant:L,disabled:E,mod:[{disabled:E||w},x],..._("root",{variant:L,active:!0})},N||r.createElement(p,null),i)});m.classes=d,m.displayName="@mantine/core/CloseButton"},7309:function(t,e,n){n.d(e,{a:function(){return h}});var r=n(2265),o=n(2544),i=n(7745),a=n(8291),c=n(9608),l=n(7354),u=n(8579),s=n(4565),p=n(3167),d={root:"m_5ae2e3c",barsLoader:"m_7a2bd4cd",bar:"m_870bb79","bars-loader-animation":"m_5d2b3b9d",dotsLoader:"m_4e3f22d7",dot:"m_870c4af","loader-dots-animation":"m_aac34a1",ovalLoader:"m_b34414df","oval-loader-animation":"m_f8e89c4b"};let f=(0,r.forwardRef)((t,e)=>{let{className:n,...o}=t;return r.createElement(u.x,{component:"span",className:(0,p.Z)(d.barsLoader,n),...o,ref:e},r.createElement("span",{className:d.bar}),r.createElement("span",{className:d.bar}),r.createElement("span",{className:d.bar}))}),y=(0,r.forwardRef)((t,e)=>{let{className:n,...o}=t;return r.createElement(u.x,{component:"span",className:(0,p.Z)(d.dotsLoader,n),...o,ref:e},r.createElement("span",{className:d.dot}),r.createElement("span",{className:d.dot}),r.createElement("span",{className:d.dot}))}),m={bars:f,oval:(0,r.forwardRef)((t,e)=>{let{className:n,...o}=t;return r.createElement(u.x,{component:"span",className:(0,p.Z)(d.ovalLoader,n),...o,ref:e})}),dots:y},v={loaders:m,type:"oval"},g=(0,i.Z)((t,e)=>{let{size:n,color:r}=e;return{root:{"--loader-size":(0,o.ap)(n,"loader-size"),"--loader-color":r?(0,a.p)(r,t):void 0}}}),h=(0,s.d)((t,e)=>{let n=(0,c.w)("Loader",v,t),{size:o,color:i,type:a,vars:s,className:p,style:f,classNames:y,styles:m,unstyled:h,loaders:b,variant:w,children:E,...L}=n,N=(0,l.y)({name:"Loader",props:n,classes:d,className:p,style:f,classNames:y,styles:m,unstyled:h,vars:s,varsResolver:g});return E?r.createElement(u.x,{...N("root"),ref:e,...L},E):r.createElement(u.x,{...N("root"),ref:e,component:b[a],variant:w,size:o,...L})});h.defaultLoaders=m,h.classes=d,h.displayName="@mantine/core/Loader"},2411:function(t,e,n){n.d(e,{k:function(){return s}});var r=n(2265),o=n(9608),i=n(7354),a=n(8579),c=n(8953),l={root:"m_87cf2631"};let u={__staticSelector:"UnstyledButton"},s=(0,c.b)((t,e)=>{let n=(0,o.w)("UnstyledButton",u,t),{className:c,component:s="button",__staticSelector:p,unstyled:d,classNames:f,styles:y,style:m,...v}=n,g=(0,i.y)({name:p,props:n,classes:l,className:c,style:m,classNames:f,styles:y,unstyled:d});return r.createElement(a.x,{...g("root",{focusable:!0}),component:s,ref:e,type:"button"===s?"button":void 0,...v})});s.classes=l,s.displayName="@mantine/core/UnstyledButton"},8579:function(t,e,n){n.d(e,{x:function(){return N}});var r=n(2265),o=n(3167),i=n(5088),a=n(784),c=n(4099);function l(t){return t.startsWith("data-")?t:"data-".concat(t)}function u(t,e){return Array.isArray(t)?[...t].reduce((t,n)=>({...t,...u(n,e)}),{}):"function"==typeof t?t(e):null==t?{}:t}var s=n(8730);let p={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}};var d=n(6361),f=n(793);function y(t,e){let n=(0,f.E)({color:t,theme:e});return"dimmed"===n.color?"var(--mantine-color-dimmed)":"bright"===n.color?"var(--mantine-color-bright)":n.variable?"var(".concat(n.variable,")"):n.color}let m={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"};var v=n(7238);let g=["h1","h2","h3","h4","h5","h6"],h=["h1","h2","h3","h4","h5","h6"],b={color:y,textColor:function(t,e){let n=(0,f.E)({color:t,theme:e});return n.isThemeColor&&void 0===n.shade?"var(--mantine-color-".concat(n.color,"-text)"):y(t,e)},fontSize:function(t,e){return"string"==typeof t&&t in e.fontSizes?"var(--mantine-font-size-".concat(t,")"):"string"==typeof t&&g.includes(t)?"var(--mantine-".concat(t,"-font-size)"):"number"==typeof t||"string"==typeof t?(0,v.h)(t):t},spacing:function(t,e){if("number"==typeof t)return(0,v.h)(t);if("string"==typeof t){let n=t.replace("-","");if(!(n in e.spacing))return(0,v.h)(t);let r="--mantine-spacing-".concat(n);return t.startsWith("-")?"calc(var(".concat(r,") * -1)"):"var(".concat(r,")")}return t},identity:function(t){return t},size:function(t){return"number"==typeof t?(0,v.h)(t):t},lineHeight:function(t,e){return"string"==typeof t&&t in e.lineHeights?"var(--mantine-line-height-".concat(t,")"):"string"==typeof t&&h.includes(t)?"var(--mantine-".concat(t,"-line-height)"):t},fontFamily:function(t){return"string"==typeof t&&t in m?m[t]:t}};function w(t){return t.replace("(min-width: ","").replace("em)","")}var E=n(1730);let L=(0,r.forwardRef)((t,e)=>{let{component:n,style:f,__vars:y,className:m,variant:v,mod:g,size:h,hiddenFrom:L,visibleFrom:N,lightHidden:x,darkHidden:z,renderRoot:_,...C}=t,S=(0,c.rZ)(),{styleProps:k,rest:A}=(0,s.c)(C),R=(0,E.m)(),Z=function(t){let{styleProps:e,data:n,theme:r}=t;return function(t){let{media:e,...n}=t,r=Object.keys(e).sort((t,e)=>Number(w(t))-Number(w(e))).map(t=>({query:t,styles:e[t]}));return{...n,media:r}}((0,d.X)(e).reduce((t,o)=>{var i,a;if("hiddenFrom"===o||"visibleFrom"===o)return t;let c=n[o],l=Array.isArray(c.property)?c.property:[c.property],u="object"==typeof(a=e[o])&&null!==a?"base"in a?a.base:void 0:a;if(!function(t){if("object"!=typeof t||null===t)return!1;let e=Object.keys(t);return 1!==e.length||"base"!==e[0]}(e[o]))return l.forEach(e=>{t.inlineStyles[e]=b[c.type](u,r)}),t;t.hasResponsiveStyles=!0;let s="object"==typeof(i=e[o])&&null!==i?(0,d.X)(i).filter(t=>"base"!==t):[];return l.forEach(n=>{u&&(t.styles[n]=b[c.type](u,r)),s.forEach(i=>{var a;let l="(min-width: ".concat(r.breakpoints[i],")");t.media[l]={...t.media[l],[n]:b[c.type]("object"==typeof(a=e[o])&&null!==a&&i in a?a[i]:a,r)}})}),t},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}({styleProps:k,theme:S,data:p}),j={ref:e,style:function(t){let{theme:e,style:n,vars:r,styleProps:o}=t,i=u(n,e),a=u(r,e);return{...i,...a,...o}}({theme:S,style:f,vars:y,styleProps:Z.inlineStyles}),className:(0,o.Z)(m,{[R]:Z.hasResponsiveStyles,"mantine-light-hidden":x,"mantine-dark-hidden":z,["mantine-hidden-from-".concat(L)]:L,["mantine-visible-from-".concat(N)]:N}),"data-variant":v,"data-size":(0,a.s)(h)?void 0:h||void 0,...function t(e){return e?"string"==typeof e?{[l(e)]:!0}:Array.isArray(e)?[...e].reduce((e,n)=>({...e,...t(n)}),{}):Object.keys(e).reduce((t,n)=>{let r=e[n];return void 0===r||""===r||!1===r||null===r||(t[l(n)]=e[n]),t},{}):null}(g),...A};return r.createElement(r.Fragment,null,Z.hasResponsiveStyles&&r.createElement(i.f,{selector:".".concat(R),styles:Z.styles,media:Z.media}),"function"==typeof _?_(j):r.createElement(n||"div",{...j}))});L.displayName="@mantine/core/Box";let N=L},8730:function(t,e,n){n.d(e,{c:function(){return o}});var r=n(7474);function o(t){let{m:e,mx:n,my:o,mt:i,mb:a,ml:c,mr:l,me:u,ms:s,p,px:d,py:f,pt:y,pb:m,pl:v,pr:g,pe:h,ps:b,bg:w,c:E,opacity:L,ff:N,fz:x,fw:z,lts:_,ta:C,lh:S,fs:k,tt:A,td:R,w:Z,miw:j,maw:B,h:I,mih:H,mah:M,bgsz:W,bgp:F,bgr:O,bga:P,pos:T,top:X,left:D,bottom:U,right:q,inset:G,display:J,flex:K,hiddenFrom:V,visibleFrom:Q,lightHidden:Y,darkHidden:$,...tt}=t;return{styleProps:(0,r.L)({m:e,mx:n,my:o,mt:i,mb:a,ml:c,mr:l,me:u,ms:s,p,px:d,py:f,pt:y,pb:m,pl:v,pr:g,pe:h,ps:b,bg:w,c:E,opacity:L,ff:N,fz:x,fw:z,lts:_,ta:C,lh:S,fs:k,tt:A,td:R,w:Z,miw:j,maw:B,h:I,mih:H,mah:M,bgsz:W,bgp:F,bgr:O,bga:P,pos:T,top:X,left:D,bottom:U,right:q,inset:G,display:J,flex:K,hiddenFrom:V,visibleFrom:Q,lightHidden:Y,darkHidden:$}),rest:tt}}n(2265)},1730:function(t,e,n){n.d(e,{m:function(){return o}});var r=n(2265);function o(){let t=(0,r.useId)().replace(/:/g,"");return"__m__-".concat(t)}},5088:function(t,e,n){n.d(e,{f:function(){return c}});var r=n(2265),o=n(592),i=n(6361);function a(t){return(0,i.X)(t).reduce((e,n)=>void 0!==t[n]?"".concat(e).concat(n.replace(/[A-Z]/g,t=>"-".concat(t.toLowerCase())),":").concat(t[n],";"):e,"").trim()}function c(t){let{selector:e,styles:n,media:i}=t,c=(0,o.R7)();return r.createElement("style",{"data-mantine-styles":"inline",nonce:null==c?void 0:c(),dangerouslySetInnerHTML:{__html:function(t){let{selector:e,styles:n,media:r}=t,o=n?a(n):"",i=Array.isArray(r)?r.map(t=>"@media".concat(t.query,"{").concat(e,"{").concat(a(t.styles),"}}")):[];return"".concat(o?"".concat(e,"{").concat(o,"}"):"").concat(i.join("")).trim()}({selector:e,styles:n,media:i})}})}},9608:function(t,e,n){n.d(e,{w:function(){return i}});var r=n(7474);n(2265);var o=n(4099);function i(t,e,n){var i;let a=(0,o.rZ)(),c=null===(i=a.components[t])||void 0===i?void 0:i.defaultProps,l="function"==typeof c?c(a):c;return{...e,...l,...(0,r.L)(n)}}},4565:function(t,e,n){n.d(e,{d:function(){return i},y:function(){return o}});var r=n(2265);function o(t){return t}function i(t){let e=(0,r.forwardRef)(t);return e.extend=o,e}},8953:function(t,e,n){n.d(e,{b:function(){return i}});var r=n(2265),o=n(4565);function i(t){let e=(0,r.forwardRef)(t);return e.extend=o.y,e}},7745:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t){return t}},571:function(t,e,n){n.d(e,{m:function(){return i}});var r=n(3167);let o={};function i(t){let{theme:e,classNames:n,props:i,stylesCtx:a}=t;return function(t){let e={};return t.forEach(t=>{Object.entries(t).forEach(t=>{let[n,o]=t;e[n]?e[n]=(0,r.Z)(e[n],o):e[n]=o})}),e}((Array.isArray(n)?n:[n]).map(t=>"function"==typeof t?t(e,i,a):t||o))}},1267:function(t,e,n){n.d(e,{i:function(){return r}});function r(t){let{theme:e,styles:n,props:r,stylesCtx:o}=t;return(Array.isArray(n)?n:[n]).reduce((t,n)=>"function"==typeof n?{...t,...n(e,r,o)}:{...t,...n},{})}},7354:function(t,e,n){n.d(e,{y:function(){return p}}),n(2265);var r=n(592),o=n(4099),i=n(3167);let a={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};var c=n(571),l=n(1267);function u(t){let{style:e,theme:n}=t;return Array.isArray(e)?[...e].reduce((t,e)=>({...t,...u({style:e,theme:n})}),{}):"function"==typeof e?e(n):null==e?{}:e}var s=n(7474);function p(t){let{name:e,classes:n,props:p,stylesCtx:d,className:f,style:y,rootSelector:m="root",unstyled:v,classNames:g,styles:h,vars:b,varsResolver:w}=t,E=(0,o.rZ)(),L=(0,r.uK)(),N=(0,r.Nu)(),x=(0,r.DE)(),z=(Array.isArray(e)?e:[e]).filter(t=>t);return(t,e)=>({className:function(t){let{theme:e,options:n,themeName:r,selector:o,classNamesPrefix:l,classNames:u,classes:s,unstyled:p,className:d,rootSelector:f,props:y,stylesCtx:m,withStaticClasses:v,headless:g}=t;return(0,i.Z)(function(t){let{theme:e,options:n,unstyled:r}=t;return(0,i.Z)((null==n?void 0:n.focusable)&&!r&&(e.focusClassName||a[e.focusRing]),(null==n?void 0:n.active)&&!r&&e.activeClassName)}({theme:e,options:n,unstyled:p||g}),function(t){let{themeName:e,theme:n,selector:r,props:o,stylesCtx:i}=t;return e.map(t=>{var e,a;return null===(e=(0,c.m)({theme:n,classNames:null===(a=n.components[t])||void 0===a?void 0:a.classNames,props:o,stylesCtx:i}))||void 0===e?void 0:e[r]})}({theme:e,themeName:r,selector:o,props:y,stylesCtx:m}),function(t){let{options:e,classes:n,selector:r,unstyled:o}=t;return(null==e?void 0:e.variant)&&!o?n["".concat(r,"--").concat(e.variant)]:void 0}({options:n,classes:s,selector:o,unstyled:p}),function(t){let{selector:e,stylesCtx:n,theme:r,classNames:o,props:i}=t;return(0,c.m)({theme:r,classNames:o,props:i,stylesCtx:n})[e]}({selector:o,stylesCtx:m,theme:e,classNames:u,props:y}),function(t){let{selector:e,stylesCtx:n,options:r,props:o,theme:i}=t;return(0,c.m)({theme:i,classNames:null==r?void 0:r.classNames,props:(null==r?void 0:r.props)||o,stylesCtx:n})[e]}({selector:o,stylesCtx:m,options:n,props:y,theme:e}),function(t){let{rootSelector:e,selector:n,className:r}=t;return e===n?r:void 0}({rootSelector:f,selector:o,className:d}),function(t){let{selector:e,classes:n,unstyled:r}=t;return r?void 0:n[e]}({selector:o,classes:s,unstyled:p||g}),v&&!g&&function(t){let{themeName:e,classNamesPrefix:n,selector:r,withStaticClass:o}=t;return!1===o?[]:e.map(t=>"".concat(n,"-").concat(t,"-").concat(r))}({themeName:r,classNamesPrefix:l,selector:o,withStaticClass:null==n?void 0:n.withStaticClass}),null==n?void 0:n.className)}({theme:E,options:e,themeName:z,selector:t,classNamesPrefix:L,classNames:g,classes:n,unstyled:v,className:f,rootSelector:m,props:p,stylesCtx:d,withStaticClasses:N,headless:x}),style:function(t){let{theme:e,themeName:n,selector:r,options:o,props:i,stylesCtx:a,rootSelector:c,styles:p,style:d,vars:f,varsResolver:y,headless:m}=t;return{...function(t){let{theme:e,themeName:n,props:r,stylesCtx:o,selector:i}=t;return n.map(t=>{var n;return(0,l.i)({theme:e,styles:null===(n=e.components[t])||void 0===n?void 0:n.styles,props:r,stylesCtx:o})[i]}).reduce((t,e)=>({...t,...e}),{})}({theme:e,themeName:n,props:i,stylesCtx:a,selector:r}),...(0,l.i)({theme:e,styles:p,props:i,stylesCtx:a})[r],...(0,l.i)({theme:e,styles:null==o?void 0:o.styles,props:(null==o?void 0:o.props)||i,stylesCtx:a})[r],...function(t){var e;let{vars:n,varsResolver:r,theme:o,props:i,stylesCtx:a,selector:c,themeName:l,headless:u}=t;return null===(e=[u?{}:null==r?void 0:r(o,i,a),...l.map(t=>{var e,n,r;return null===(r=o.components)||void 0===r?void 0:null===(n=r[t])||void 0===n?void 0:null===(e=n.vars)||void 0===e?void 0:e.call(n,o,i,a)}),null==n?void 0:n(o,i,a)].reduce((t,e)=>(e&&Object.keys(e).forEach(n=>{t[n]={...t[n],...(0,s.L)(e[n])}}),t),{}))||void 0===e?void 0:e[c]}({theme:e,props:i,stylesCtx:a,vars:f,varsResolver:y,selector:r,themeName:n,headless:m}),...c===r?u({style:d,theme:e}):null,...u({style:null==o?void 0:o.style,theme:e})}}({theme:E,themeName:z,selector:t,options:e,props:p,stylesCtx:d,rootSelector:m,styles:h,style:y,vars:b,varsResolver:w,headless:x})})}},7474:function(t,e,n){n.d(e,{L:function(){return r}});function r(t){return Object.keys(t).reduce((e,n)=>(void 0!==t[n]&&(e[n]=t[n]),e),{})}},2544:function(t,e,n){n.d(e,{Dp:function(){return u},H5:function(){return c},Xj:function(){return s},ap:function(){return i},bG:function(){return a},yv:function(){return l}});var r=n(784),o=n(7238);function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"size",n=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(void 0!==t)return(0,r.s)(t)?n?(0,o.h)(t):t:"var(--".concat(e,"-").concat(t,")")}function a(t){return i(t,"mantine-spacing")}function c(t){return void 0===t?"var(--mantine-radius-default)":i(t,"mantine-radius")}function l(t){return i(t,"mantine-font-size")}function u(t){return i(t,"mantine-line-height",!1)}function s(t){if(t)return i(t,"mantine-shadow",!1)}},784:function(t,e,n){n.d(e,{s:function(){return r}});function r(t){return"number"==typeof t||"string"==typeof t&&(!!(t.startsWith("calc(")||t.startsWith("var(")||t.includes(" ")&&""!==t.trim())||/[0-9]/.test(t.trim().replace("-","")[0]))}},6695:function(t,e,n){n.d(e,{l:function(){return o}});var r=n(2265);function o(t,e){let n=(0,r.useRef)(!1);(0,r.useEffect)(()=>()=>{n.current=!1},[]),(0,r.useEffect)(()=>{if(n.current)return t();n.current=!0},e)}},1554:function(t,e,n){n.d(e,{a:function(){return o}});var r=n(2265);function o(t,e){var n;let{getInitialValueInEffect:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{getInitialValueInEffect:!0},[i,a]=(0,r.useState)(o?e:"boolean"==typeof n?n:!!("undefined"!=typeof window&&"matchMedia"in window)&&window.matchMedia(t).matches),c=(0,r.useRef)();return(0,r.useEffect)(()=>{if("matchMedia"in window)return c.current=window.matchMedia(t),a(c.current.matches),function(t,e){try{return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}catch(n){return t.addListener(e),()=>t.removeListener(e)}}(c.current,t=>a(t.matches))},[t]),i}},1661:function(t,e,n){n.d(e,{J:function(){return o}});var r=n(1554);function o(t,e){return(0,r.a)("(prefers-reduced-motion: reduce)",t,e)}},491:function(t,e,n){n.d(e,{k:function(){return r}});function r(){return"mantine-".concat(Math.random().toString(36).slice(2,11))}},3167:function(t,e,n){e.Z=function(){for(var t,e,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=function t(e){var n,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=t(e[n]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r)}return o}(t))&&(r&&(r+=" "),r+=e);return r}}}]);