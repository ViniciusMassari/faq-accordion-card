(()=>{"use strict";var e={727:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),o=n(645),i=n.n(o)()(r());i.push([e.id,"*{margin:0;padding:0;box-sizing:border-box}body{background:linear-gradient(0deg, #6e64e7 0%, #ab68eb 100%);min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif}img{max-width:100%}.js .wrapper{display:grid;grid-template-columns:repeat(2, 1fr);border-radius:20px;width:60rem;height:35rem;background-color:#fff;position:relative}@media (max-width: 960px){.js .wrapper{grid-template-columns:1fr;margin-top:5rem;max-width:30rem}}.box-desktop{position:absolute;height:180px;z-index:2;left:-96px;top:250px}@media (max-width: 960px){.box-desktop{display:none}}.mobile-shadow{display:none;position:absolute;top:45px;height:100px;width:300px}@media (max-width: 960px){.mobile-shadow{display:block}}.shadow{position:absolute;left:-150px;height:600px}@media (max-width: 960px){.shadow{display:none}}.image{display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden}@media (max-width: 960px){.image{overflow:visible;margin-bottom:50px}}.image .mobile-image{display:none;position:absolute;z-index:2;height:250px;width:400px}@media (max-width: 960px){.image .mobile-image{display:block}}.image .desktop{position:absolute;left:-80px;height:380px;width:450px}@media (max-width: 960px){.image .desktop{display:none}}.js .faq-container{padding:2.5rem}.js .faq-container h1{font-size:2rem;margin-top:10px;text-transform:uppercase;font-weight:bold}.js .faq-container .faq{margin-top:1rem}.js .faq-container .faq dt{display:flex;color:gray;transition:0.3s;margin:1.2rem 0;text-align:center;align-items:center;justify-content:space-between;animation:close 0.3s forwards}@media (max-width: 960px){.js .faq-container .faq dt{margin:0.675rem 0}}.js .faq-container .faq dt img{padding:10px;cursor:pointer;transition:0.3s}.js .faq-container .faq dt.selected{color:#000;font-weight:bold}.js .faq-container .faq dt.selected img{rotate:180deg}.js .faq-container .faq dd{display:none;font-size:0.875rem;color:gray;margin-bottom:0.875rem;transition:0.3s}.js .faq-container .faq dd.selected{display:block;animation:open 0.3s forwards ease-in-out}span{font-weight:bold}@keyframes open{0%{transform:translate3d(0, -1rem, 0);opacity:0}1%{transform:translate3d(0, -1rem, 0);opacity:0}100%{transform:translate3d(0, 0, 0);opacity:1}}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var m=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(f);else{var u=r(f,a);a.byIndex=s,t.splice(s,0,{identifier:p,updater:u,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=a(e,r),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),r=n.n(a),o=n(569),i=n.n(o),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),m=n.n(p),f=n(727),u={};u.styleTagTransform=m(),u.setAttributes=c(),u.insert=i().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=l(),t()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals,document.documentElement.classList.add("js");const h=document.querySelectorAll("dt img"),g=document.querySelectorAll("dt"),x=document.querySelectorAll("dd"),v=["click","touchstart"];if(document.documentElement.classList.contains("js")&&h&&g){function y(e){e.preventDefault(),g.forEach((e=>{e.classList.remove("selected")})),x.forEach((e=>{e.classList.remove("selected")})),e.target.parentElement.classList.toggle("selected"),e.target.parentElement.nextElementSibling.classList.toggle("selected")}v.forEach((e=>{h.forEach((t=>{t.addEventListener(e,y)}))}))}})()})();