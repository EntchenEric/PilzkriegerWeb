(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{33543:function(e,r,t){Promise.resolve().then(t.bind(t,45016))},45016:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var i=t(57437);t(97757);var o=t(2265),n=t(74129),a=t(12337),s=t(39537),c=t(34870);function u(e){let{children:r}=e;return(0,o.useEffect)(()=>{"Ja, der typ ist Verifiziert \uD83C\uDF44"==(0,c.getCookie)("verified")?console.log("verified"):(console.log("not verified"),window.location.href="/authentificate")},[]),(0,i.jsxs)("html",{lang:"en",children:[(0,i.jsxs)("head",{children:[(0,i.jsx)(n.ColorSchemeScript,{}),(0,i.jsx)("link",{rel:"shortcut icon",href:"/favicon.svg"}),(0,i.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"})]}),(0,i.jsx)("body",{children:(0,i.jsx)(a.MantineProvider,{theme:s.theme,children:r})})]})}},43175:function(e,r){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */r.parse=function(e,r){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var t={},i=(r||{}).decode||o,n=0;n<e.length;){var a=e.indexOf("=",n);if(-1===a)break;var s=e.indexOf(";",n);if(-1===s)s=e.length;else if(s<a){n=e.lastIndexOf(";",a-1)+1;continue}var c=e.slice(n,a).trim();if(void 0===t[c]){var u=e.slice(a+1,s).trim();34===u.charCodeAt(0)&&(u=u.slice(1,-1)),t[c]=function(e,r){try{return r(e)}catch(r){return e}}(u,i)}n=s+1}return t},r.serialize=function(e,r,o){var a=o||{},s=a.encode||n;if("function"!=typeof s)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var c=s(r);if(c&&!i.test(c))throw TypeError("argument val is invalid");var u=e+"="+c;if(null!=a.maxAge){var l=a.maxAge-0;if(isNaN(l)||!isFinite(l))throw TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(l)}if(a.domain){if(!i.test(a.domain))throw TypeError("option domain is invalid");u+="; Domain="+a.domain}if(a.path){if(!i.test(a.path))throw TypeError("option path is invalid");u+="; Path="+a.path}if(a.expires){var f=a.expires;if("[object Date]"!==t.call(f)&&!(f instanceof Date)||isNaN(f.valueOf()))throw TypeError("option expires is invalid");u+="; Expires="+f.toUTCString()}if(a.httpOnly&&(u+="; HttpOnly"),a.secure&&(u+="; Secure"),a.partitioned&&(u+="; Partitioned"),a.priority)switch("string"==typeof a.priority?a.priority.toLowerCase():a.priority){case"low":u+="; Priority=Low";break;case"medium":u+="; Priority=Medium";break;case"high":u+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"none":u+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return u};var t=Object.prototype.toString,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function o(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function n(e){return encodeURIComponent(e)}},34870:function(e,r,t){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var r,t=1,i=arguments.length;t<i;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,r){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>r.indexOf(i)&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>r.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(t[i[o]]=e[i[o]]);return t};Object.defineProperty(r,"__esModule",{value:!0}),r.hasCookie=r.deleteCookie=r.setCookie=r.getCookie=r.getCookies=void 0;var n=t(43175),a=function(){return"undefined"!=typeof window},s=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},c=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&s(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&s(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&s(e.cookies())},u=function(e){var r={};return e.getAll().forEach(function(e){var t=e.name,i=e.value;r[t]=i}),r},l=function(e){void 0===e&&(e="");try{var r=JSON.stringify(e);return/^[\{\[]/.test(r)?r:e}catch(r){return e}};r.getCookies=function(e){if(c(e)){if(null==e?void 0:e.req)return u(e.req.cookies);if(null==e?void 0:e.cookies)return u(e.cookies())}if(e&&(r=e.req),!a())return r&&r.cookies?r.cookies:r&&r.headers.cookie?(0,n.parse)(r.headers.cookie):{};for(var r,t={},i=document.cookie?document.cookie.split("; "):[],o=0,s=i.length;o<s;o++){var l=i[o].split("="),f=l.slice(1).join("=");t[l[0]]=f}return t},r.getCookie=function(e,t){var i=(0,r.getCookies)(t)[e];if(void 0!==i)return i?i.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):i},r.setCookie=function(e,r,t){if(c(t)){var s,u,f,d=t.req,p=t.res,h=t.cookies,v=o(t,["req","res","cookies"]),m=i({name:e,value:r},v);d&&d.cookies.set(m),p&&p.cookies.set(m),h&&h().set(m);return}if(t){var d=t.req,p=t.res,y=o(t,["req","res"]);u=d,f=p,s=y}var k=(0,n.serialize)(e,l(r),i({path:"/"},s));if(a())document.cookie=k;else if(f&&u){var g=f.getHeader("Set-Cookie");if(Array.isArray(g)||(g=g?[String(g)]:[]),f.setHeader("Set-Cookie",g.concat(k)),u&&u.cookies){var C=u.cookies;""===r?delete C[e]:C[e]=l(r)}if(u&&u.headers&&u.headers.cookie){var C=(0,n.parse)(u.headers.cookie);""===r?delete C[e]:C[e]=l(r),u.headers.cookie=Object.entries(C).reduce(function(e,r){return e.concat("".concat(r[0],"=").concat(r[1],";"))},"")}}},r.deleteCookie=function(e,t){return(0,r.setCookie)(e,"",i(i({},t),{maxAge:-1}))},r.hasCookie=function(e,t){return!!e&&(0,r.getCookies)(t).hasOwnProperty(e)}},39537:function(e,r,t){"use strict";t.r(r),t.d(r,{theme:function(){return i}});let i=(0,t(19905).j)({})},28886:function(e,r,t){"use strict";t.r(r),t.d(r,{getContrastColor:function(){return n},getPrimaryContrastColor:function(){return a}});var i=t(15203),o=t(5007);function n(e){let{color:r,theme:t,autoContrast:i}=e;return("boolean"==typeof i?i:t.autoContrast)&&(0,o.parseThemeColor)({color:r||t.primaryColor,theme:t}).isLight?"var(--mantine-color-black)":"var(--mantine-color-white)"}function a(e,r){return n({color:e.colors[e.primaryColor][(0,i.getPrimaryShade)(e,r)],theme:e,autoContrast:null})}},44949:function(e,r,t){"use strict";function i(e){let r="string"==typeof e&&e.includes("var(--mantine-scale)")?e.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim():e;return"number"==typeof r?r:"string"==typeof r?r.includes("calc")||r.includes("var")?r:r.includes("px")?Number(r.replace("px","")):r.includes("rem")?16*Number(r.replace("rem","")):r.includes("em")?16*Number(r.replace("em","")):Number(r):NaN}t.d(r,{px:function(){return i}})}},function(e){e.O(0,[139,880,631,971,69,744],function(){return e(e.s=33543)}),_N_E=e.O()}]);