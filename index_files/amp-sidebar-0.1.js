(self.AMP=self.AMP||[]).push({n:"amp-sidebar",v:"1507685388117",f:(function(AMP){var k;function l(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};function m(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var n=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){if(!a)return[];for(var b=Array(a.length),c=0;c<a.length;c++)b[c]=a[c];return b};Date.now();self.log=self.log||{user:null,dev:null,userForEmbed:null};var q=self.log;function r(a,b){a=a.__AMP_TOP||a;return t(a,b)}function u(a){a=v(a);a=v(a);a=a.isSingleDoc()?a.win:a;return t(a,"history")}function v(a){return a.nodeType?r((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function t(a,b){var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function w(a,b){for(var c,d=a;d&&d!==c;d=d.parentElement)if(b(d))return d;return null}function x(a){var b="A";if(a.closest)return a.closest(b);b=b.toUpperCase();return w(a,function(a){return a.tagName==b})}function y(a){var b=a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr";return"rtl"==b};var z,A;function B(a){var b=a.indexOf("#");return-1==b?a:a.substring(0,b)};Promise.resolve();function C(a){a:{var b;try{b=a.document.cookie}catch(h){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("="),e;if(e=-1!=d)e=c.substring(0,d).trim(),e="AMP_EXP"==m(e,void 0);if(e){a=c.substring(d+1).trim();a=m(a,a);break a}}a=null}var g=a,f=g?g.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};var D,E="Webkit webkit Moz moz ms O o".split(" ");function F(a,b){var c=void 0;if(2>b.length?0:0==b.lastIndexOf("--",0))return b;D||(D=Object.create(null));var d=D[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var g=0;g<E.length;g++){var f=E[g]+e;if(void 0!==a[f]){e=f;break a}}e=""}var h=e;void 0!==a[h]&&(d=h)}c||(D[b]=d)}return d}function G(a,b,c){var d;(b=F(a.style,b))&&(a.style[b]=d?c+d:c)}
function H(a,b){if(void 0===b){var c;c=(c=F(a.style,"display"))?a.style[c]:void 0;b="none"==c}G(a,"display",b?"":"none")};function I(a,b){function c(){d=0;var f=350-(a.Date.now()-e);if(0<f)d=a.setTimeout(c,f);else{var h=g;g=null;b.apply(null,h)}}var d=0,e=0,g=null;return function(b){for(var h=[],f=0;f<arguments.length;++f)h[f-0]=arguments[f];e=a.Date.now();g=h;d||(d=a.setTimeout(c,350))}};function J(a,b,c){this.a=a;this.L=void 0;this.g=b;this.A=c;this.K=this.a.getAttribute("toolbar");this.s=null;this.c=void 0;this.u=!1;this.a.classList.add("amp-sidebar-toolbar-target-hidden");K(this)}J.prototype.onLayoutChange=function(a){var b=this.A.win.matchMedia(this.K).matches;if(b){var c=L(this);c&&c.then(a)}else M(this)};
function K(a){a.s=a.a.cloneNode(!0);if(!q.user)throw Error("failed to call initLogConstructor");var b=q.user.assert(a.a.getAttribute("toolbar-target"),'"toolbar-target" is required',a.a);a.A.whenReady().then(function(){var c=a.A.getElementById(b);if(c)a.c=c,a.s.classList.add("i-amphtml-toolbar"),H(a.c,!1);else throw Error("Could not find the toolbar-target element with an id: "+b);})}
function L(a){if(!a.u)return a.g.mutatePromise(function(){a.c&&(H(a.c,!0),a.c.contains(a.s)||a.c.appendChild(a.s),a.a.classList.add("amp-sidebar-toolbar-target-shown"),a.a.classList.remove("amp-sidebar-toolbar-target-hidden"));a.u=!0})}function M(a){a.u&&a.g.mutate(function(){a.c&&(H(a.c,!1),a.a.classList.add("amp-sidebar-toolbar-target-hidden"),a.a.classList.remove("amp-sidebar-toolbar-target-shown"));a.u=!1})};function N(a){a=AMP.BaseElement.call(this,a)||this;a.w=null;a.g=r(a.win,"vsync");a.i=null;a.h=a.win.document;a.G=a.h.documentElement;a.j=null;a.F=[];var b;var c=a.win;if(c.__AMP__EXPERIMENT_TOGGLES)b=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=Object.create(null);b=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var d in c.AMP_CONFIG){var e=c.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(b[d]=Math.random()<e)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&
(d=c.AMP_CONFIG["allow-doc-opt-in"],e=c.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(var e=e.getAttribute("content").split(","),g=0;g<e.length;g++)-1!=d.indexOf(e[g])&&(b[e[g]]=!0);Object.assign(b,C(c));if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length){d=c.AMP_CONFIG["allow-url-opt-in"];e=c.location.originalHash||c.location.hash;c=Object.create(null);if(e)for(var f;f=n.exec(e);)g=m(f[1],f[1]).trim(),f=f[2]?m(f[2],
f[2]).trim():"",c[g]=f;for(e=0;e<d.length;e++)g=c["e-"+d[e]],"1"==g&&(b[d[e]]=!0),"0"==g&&(b[d[e]]=!1)}}a.D=!!b["amp-sidebar toolbar"];var h=r(a.win,"platform");a.C=h.isIos();a.H=h.isSafari();a.m=-1;a.B=!1;a.M=null;a.l=I(a.win,a.I.bind(a));return a}l(N,AMP.BaseElement);k=N.prototype;k.isLayoutSupported=function(a){return"nodisplay"==a};
k.buildCallback=function(){var a=this;this.element.classList.add("i-amphtml-overlay");this.j=this.element.getAttribute("side");this.w=this.getViewport();this.w.addToFixedLayer(this.element,!0);"left"!=this.j&&"right"!=this.j&&(this.j=y(this.h)?"right":"left",this.element.setAttribute("side",this.j));if(this.D){var b=this.getAmpDoc(),c=p(this.element.querySelectorAll("nav[toolbar]"));c.forEach(function(c){try{a.F.push(new J(c,a.g,b))}catch(f){a.user().error("amp-sidebar toolbar","Failed to instantiate toolbar",
f)}})}this.C&&O(this);P(this)?this.o():this.element.setAttribute("aria-hidden","true");this.element.hasAttribute("role")||this.element.setAttribute("role","menu");this.element.tabIndex=-1;this.G.addEventListener("keydown",function(b){27==b.keyCode&&a.b()});var d=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",e=this.h.createElement("button");e.textContent=d;e.classList.add("i-amphtml-screen-reader");e.tabIndex=-1;e.addEventListener("click",function(){a.b()});this.element.appendChild(e);
this.registerAction("toggle",this.J.bind(this));this.registerAction("open",this.o.bind(this));this.registerAction("close",this.b.bind(this));this.element.addEventListener("click",function(b){if((b=x(b.target))&&b.href){var c;c=b.href;z||(z=self.document.createElement("a"),A=self.UrlCache||(self.UrlCache=Object.create(null)));var d=A[c];if(d)c=d;else{d=z;d.href=c;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,
search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c=A[c]=e}var g=c,Q=a.getAmpDoc().win.location.href;B(b.href)==B(Q)&&g.hash&&a.b()}},!0);this.element.addEventListener("transitionend",this.l);this.element.addEventListener("animationend",this.l)};k.activate=function(){this.o()};
k.onLayoutMeasure=function(){var a=this;this.D&&this.F.forEach(function(b){b.onLayoutChange(function(){a.b()})})};function P(a){return a.element.hasAttribute("open")}k.J=function(){P(this)?this.b():this.o()};
k.o=function(){var a=this;P(this)||(this.w.enterOverlayMode(),this.g.mutate(function(){H(a.element,!0);a.C&&a.H&&R(a);a.element.scrollTop=1;a.g.mutate(function(){S(a);a.element.setAttribute("open","");a.l();a.element.setAttribute("aria-hidden","false")})}),u(this.getAmpDoc()).push(this.b.bind(this)).then(function(b){a.m=b}))};
k.b=function(){var a=this;P(this)&&(this.w.leaveOverlayMode(),this.g.mutate(function(){a.i&&H(a.i,!1);a.element.removeAttribute("open");a.l();a.element.setAttribute("aria-hidden","true")}),-1!=this.m&&(u(this.getAmpDoc()).pop(this.m),this.m=-1))};
function S(a){if(!a.i){var b=a.h.createElement("div");b.classList.add("i-amphtml-sidebar-mask");b.addEventListener("click",function(){a.b()});a.element.ownerDocument.body.appendChild(b);b.addEventListener("touchmove",function(a){a.preventDefault()});a.i=b}H(a.i,!0)}
function O(a){a.element.addEventListener("scroll",function(b){P(a)&&(1>a.element.scrollTop?(a.element.scrollTop=1,b.preventDefault()):a.element.scrollHeight==a.element.scrollTop+a.element.offsetHeight&&(--a.element.scrollTop,b.preventDefault()))})}function R(a){if(!a.B){var b=a.h.createElement("div"),c={height:"10vh",width:"100%","background-color":"transparent"},d;for(d in c)G(b,d,c[d]);a.element.appendChild(b);a.B=!0}}
k.I=function(){var a=this;if(P(this)){var b=this.getRealChildren();this.scheduleLayout(b);this.scheduleResume(b);try{this.element.focus()}catch(c){}}else this.g.mutate(function(){H(a.element,!1);a.schedulePause(a.getRealChildren())})};(function(a){a.registerElement("amp-sidebar",N,"amp-sidebar{position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw!important;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;-webkit-transform:translateX(-100%)!important;transform:translateX(-100%)!important}amp-sidebar[side=right]{right:0!important;-webkit-transform:translateX(100%)!important;transform:translateX(100%)!important}amp-sidebar[side][open]{-webkit-transform:translateX(0)!important;transform:translateX(0)!important}amp-sidebar[side]{-webkit-transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1);transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1);transition:transform 233ms cubic-bezier(0,0,.21,1);transition:transform 233ms cubic-bezier(0,0,.21,1),-webkit-transform 233ms cubic-bezier(0,0,.21,1)}.i-amphtml-toolbar>ul{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;opacity:0.2;background-image:none!important;background-color:#000;z-index:2147483646}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-sidebar-0.1.js.map
