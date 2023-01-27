(()=>{"use strict";var e={727:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),a=n(645),o=n.n(a)()(i());o.push([e.id,"*{margin:0;padding:0;box-sizing:border-box}body{background:linear-gradient(0deg, #6e64e7 0%, #ab68eb 100%);min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif}img{max-width:100%}.js .wrapper{display:grid;grid-template-columns:repeat(2, 1fr);border-radius:20px;width:60rem;height:35rem;background-color:#fff;position:relative}@media (max-width: 960px){.js .wrapper{grid-template-columns:1fr;margin-top:5rem;max-width:30rem;height:40rem}}.box-desktop{position:absolute;height:180px;z-index:2;left:-96px;top:250px}@media (max-width: 960px){.box-desktop{display:none}}.mobile-shadow{display:none;position:absolute;top:45px;height:100px;width:300px}@media (max-width: 960px){.mobile-shadow{display:block}}.shadow{position:absolute;left:-150px;height:600px}@media (max-width: 960px){.shadow{display:none}}.image{display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden}@media (max-width: 960px){.image{overflow:visible;margin-bottom:50px}}.image .mobile-image{display:none;position:absolute;z-index:2;height:250px;width:400px}@media (max-width: 960px){.image .mobile-image{display:block}}.image .desktop{position:absolute;left:-80px;height:380px;width:450px}@media (max-width: 960px){.image .desktop{display:none}}.js .faq-container{padding:1rem}.js .faq-container h2{font-size:2rem;margin-top:10px;text-transform:uppercase;font-weight:bold;margin-top:5rem}@media (max-width: 960px){.js .faq-container h2{text-align:center;margin-top:6rem}}.faq{margin-top:1rem}@media (max-width: 960px){.faq{display:flex;flex-direction:column;margin-left:1rem;width:100%}}.faq button{background-color:inherit;border:0;display:flex;text-align:start;padding:10px 0;width:90%;font-size:0.875rem;color:gray}@media (max-width: 960px){.faq button{width:100%}}.faq .accordion-title{display:flex;width:90%;font-size:0.975rem;justify-content:space-between}.faq .accordion-title.selected{color:#000;font-weight:bold}.accordion-painel{font-size:0.875rem;color:gray;margin-bottom:10px}.accordion-painel p{max-width:350px}.accordion-painel p.selected{animation:open ease-in 0.2s}@media (max-width: 960px){.accordion-painel p{max-width:300px}}hr{width:90%;margin-top:1rem}@media (max-width: 960px){hr{width:90%}}.accordion-icon{padding:2.5px;text-align:center}.accordion-icon:hover{cursor:pointer}.accordion-icon.selected{transform:rotate(180deg)}span{font-weight:bold}@keyframes open{0%{transform:translate3d(0, -1rem, 0);opacity:0}1%{transform:translate3d(0, -1rem, 0);opacity:0}100%{transform:translate3d(0, 0, 0);opacity:1}}\n",""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var m=n(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var f=i(u,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=n(a[o]);t[s].references--}for(var d=r(e,i),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),a=n(569),o=n.n(a),s=n(565),d=n.n(s),c=n(216),l=n.n(c),p=n(589),m=n.n(p),u=n(727),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,document.documentElement.classList.add("js");const h=document.querySelectorAll("button");function x({currentTarget:e}){"false"==e.getAttribute("aria-expanded")?(e.children[0].classList.add("selected"),e.parentElement.nextElementSibling.removeAttribute("hidden"),e.parentElement.nextElementSibling.children[0].classList.add("selected"),e.setAttribute("aria-expanded","true")):(e.parentElement.nextElementSibling.setAttribute("hidden",!0),e.setAttribute("aria-expanded","false"),e.children[0].classList.remove("selected"),e.parentElement.nextElementSibling.children[0].classList.remove("selected"))}["click","touchstart"].forEach((e=>{h.forEach((t=>{t.addEventListener(e,x)}))}))})()})();