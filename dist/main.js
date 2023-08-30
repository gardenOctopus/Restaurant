(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>w});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),f=new URL(t(806),t.b),d=new URL(t(87),t.b),l=new URL(t(699),t.b),p=new URL(t(938),t.b),u=new URL(t(960),t.b),m=c()(o()),h=s()(f),y=s()(d),v=s()(l),g=s()(p),b=s()(u);m.push([n.id,`@font-face {\n    font-family: 'DancingScript';\n    font-style: normal;\n    font-weight: 500;\n    src: url(${h}) format('opentype');\n}\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 900;\n    src: url(${y}) format('truetype');\n}\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 700;\n    src: url(${v}) format('truetype');\n}\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 500;\n    src: url(${g}) format('truetype');\n}\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 100;\n    src: url(${b}) format('truetype');\n  }\n  \nbody {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nheader {\n    background-color: #307a45ff;\n    color: #fff;\n    \n    padding-top: 15px;\n    padding-bottom: 15px;\n    padding-left: 25px;\n    padding-right: 25px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.headerLink {\n    font-family: 'Raleway';\n    font-weight: 100;\n    font-size: 25px;\n    padding-left: 25px;\n}\n\n.headerLink:hover {\n    color: #fdc73aff;\n}\n\nh1 {\n    font-family: 'DancingScript';\n    font-size: 50px;\n    margin: 0;\n    padding: 0;\n}`,""]);const w=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var f=0;f<n.length;f++){var d=[].concat(n[f]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],f=r.base?s[0]+r.base:s[0],d=a[f]||0,l="".concat(f," ").concat(d);a[f]=d+1;var p=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=o(u,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),f=0;f<a.length;f++){var d=t(a[f]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},806:(n,e,t)=>{n.exports=t.p+"a2b257d25c329ccd8845.otf"},87:(n,e,t)=>{n.exports=t.p+"cefd37fb7d1d62c51b20.ttf"},960:(n,e,t)=>{n.exports=t.p+"b1f782b7717d75963d4a.ttf"},938:(n,e,t)=>{n.exports=t.p+"67dbd97b51333b7ddc93.ttf"},699:(n,e,t)=>{n.exports=t.p+"92cc605b66b78b8530f2.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),f=t(216),d=t.n(f),l=t(589),p=t.n(l),u=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;const h=t.p+"fed52031db81073f7b37.jpg";!function(){document.querySelector("body").classList.add("body");const n=document.querySelector("#content");n.appendChild(function(){const n=document.createElement("header");n.classList.add("header");const e=document.createElement("h1");e.textContent="Mango Nirvana",n.appendChild(e);const t=document.createElement("div");return n.appendChild(t),["About","Menu","Contact"].forEach((function(n){let e=document.createElement("a");e.classList.add("headerLink"),e.textContent=n,t.appendChild(e)})),n}()),n.appendChild(function(){const n=new Image;return n.src=h,n.alt="Mango Sticky Rice",n}())}()})()})();