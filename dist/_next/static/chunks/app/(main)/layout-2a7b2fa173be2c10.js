(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{3543:function(e,i,t){Promise.resolve().then(t.bind(t,5016))},5016:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return u}});var r=t(7437);t(7757);var o=t(2265),n=t(4129),a=t(9790),s=t(9537),c=t(4870);function u(e){let{children:i}=e;return(0,o.useEffect)(()=>{"Ja, der typ ist Verifiziert \uD83C\uDF44"==(0,c.getCookie)("verified")?console.log("verified"):(console.log("not verified"),window.location.href="/authentificate")},[]),(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[(0,r.jsx)(n.ColorSchemeScript,{}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.svg"}),(0,r.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"})]}),(0,r.jsx)("body",{children:(0,r.jsx)(a.MantineProvider,{theme:s.theme,children:i})})]})}},3175:function(e,i){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */i.parse=function(e,i){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var t={},r=(i||{}).decode||o,n=0;n<e.length;){var a=e.indexOf("=",n);if(-1===a)break;var s=e.indexOf(";",n);if(-1===s)s=e.length;else if(s<a){n=e.lastIndexOf(";",a-1)+1;continue}var c=e.slice(n,a).trim();if(void 0===t[c]){var u=e.slice(a+1,s).trim();34===u.charCodeAt(0)&&(u=u.slice(1,-1)),t[c]=function(e,i){try{return i(e)}catch(i){return e}}(u,r)}n=s+1}return t},i.serialize=function(e,i,o){var a=o||{},s=a.encode||n;if("function"!=typeof s)throw TypeError("option encode is invalid");if(!r.test(e))throw TypeError("argument name is invalid");var c=s(i);if(c&&!r.test(c))throw TypeError("argument val is invalid");var u=e+"="+c;if(null!=a.maxAge){var f=a.maxAge-0;if(isNaN(f)||!isFinite(f))throw TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(f)}if(a.domain){if(!r.test(a.domain))throw TypeError("option domain is invalid");u+="; Domain="+a.domain}if(a.path){if(!r.test(a.path))throw TypeError("option path is invalid");u+="; Path="+a.path}if(a.expires){var l=a.expires;if("[object Date]"!==t.call(l)&&!(l instanceof Date)||isNaN(l.valueOf()))throw TypeError("option expires is invalid");u+="; Expires="+l.toUTCString()}if(a.httpOnly&&(u+="; HttpOnly"),a.secure&&(u+="; Secure"),a.partitioned&&(u+="; Partitioned"),a.priority)switch("string"==typeof a.priority?a.priority.toLowerCase():a.priority){case"low":u+="; Priority=Low";break;case"medium":u+="; Priority=Medium";break;case"high":u+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"none":u+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return u};var t=Object.prototype.toString,r=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function o(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function n(e){return encodeURIComponent(e)}},4870:function(e,i,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var i,t=1,r=arguments.length;t<r;t++)for(var o in i=arguments[t])Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,i){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>i.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>i.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};Object.defineProperty(i,"__esModule",{value:!0}),i.hasCookie=i.deleteCookie=i.setCookie=i.getCookie=i.getCookies=void 0;var n=t(3175),a=function(){return"undefined"!=typeof window},s=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},c=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&s(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&s(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&s(e.cookies())},u=function(e){var i={};return e.getAll().forEach(function(e){var t=e.name,r=e.value;i[t]=r}),i},f=function(e){void 0===e&&(e="");try{var i=JSON.stringify(e);return/^[\{\[]/.test(i)?i:e}catch(i){return e}};i.getCookies=function(e){if(c(e)){if(null==e?void 0:e.req)return u(e.req.cookies);if(null==e?void 0:e.cookies)return u(e.cookies())}if(e&&(i=e.req),!a())return i&&i.cookies?i.cookies:i&&i.headers.cookie?(0,n.parse)(i.headers.cookie):{};for(var i,t={},r=document.cookie?document.cookie.split("; "):[],o=0,s=r.length;o<s;o++){var f=r[o].split("="),l=f.slice(1).join("=");t[f[0]]=l}return t},i.getCookie=function(e,t){var r=(0,i.getCookies)(t)[e];if(void 0!==r)return r?r.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):r},i.setCookie=function(e,i,t){if(c(t)){var s,u,l,d=t.req,p=t.res,h=t.cookies,v=o(t,["req","res","cookies"]),k=r({name:e,value:i},v);d&&d.cookies.set(k),p&&p.cookies.set(k),h&&h().set(k);return}if(t){var d=t.req,p=t.res,m=o(t,["req","res"]);u=d,l=p,s=m}var y=(0,n.serialize)(e,f(i),r({path:"/"},s));if(a())document.cookie=y;else if(l&&u){var g=l.getHeader("Set-Cookie");if(Array.isArray(g)||(g=g?[String(g)]:[]),l.setHeader("Set-Cookie",g.concat(y)),u&&u.cookies){var w=u.cookies;""===i?delete w[e]:w[e]=f(i)}if(u&&u.headers&&u.headers.cookie){var w=(0,n.parse)(u.headers.cookie);""===i?delete w[e]:w[e]=f(i),u.headers.cookie=Object.entries(w).reduce(function(e,i){return e.concat("".concat(i[0],"=").concat(i[1],";"))},"")}}},i.deleteCookie=function(e,t){return(0,i.setCookie)(e,"",r(r({},t),{maxAge:-1}))},i.hasCookie=function(e,t){return!!e&&(0,i.getCookies)(t).hasOwnProperty(e)}},9537:function(e,i,t){"use strict";t.r(i),t.d(i,{theme:function(){return r}});let r=(0,t(9905).j)({})}},function(e){e.O(0,[139,880,97,971,69,744],function(){return e(e.s=3543)}),_N_E=e.O()}]);