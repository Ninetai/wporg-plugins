(()=>{"use strict";const e=window.wp.element;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}const r=window.wp.i18n,n=function(t){let{onClick:r,text:n,disabled:s}=t;return(0,e.createElement)("button",{tabIndex:"-1",disabled:s,className:"horizontal-slider-handle",onClick:r},(0,e.createElement)("span",{className:"screen-reader-text"},n))},s=window.lodash,a=function(t){let{alt:n="",queryString:s,src:a,isReady:o=!1}=t;const l=`https://s0.wp.com/mshots/v1/${encodeURIComponent(a)}${s}`,[i,c]=(0,e.useState)(0),[d,u]=(0,e.useState)(!1),[h,w]=(0,e.useState)(!1),[f,m]=(0,e.useState)(""),p=i>10,g=o&&!d&&!p&&!h;return function(t,r){const n=(0,e.useRef)();(0,e.useEffect)((()=>{n.current=t}),[t]),(0,e.useEffect)((()=>{if(null!==r){const e=setInterval((function(){n.current()}),r);return()=>clearInterval(e)}}),[r])}((async()=>{try{const e=await fetch(l);200!==e.status||e.redirected?c(i+1):(await(async e=>{const t=await e.blob(),r=new FileReader;r.onload=e=>{m(e.target.result)},r.readAsDataURL(t)})(e),u(!0))}catch(e){w(!0)}}),g?1e3:null),o?g?(0,e.createElement)("div",{className:"wporg-screenshot wporg-screenshot-loader"}):h||p?(0,e.createElement)("div",{className:"wporg-screenshot wporg-screenshot__has-error"},(0,r.__)("error","wporg")):(0,e.createElement)("img",{src:f,alt:n}):null},o=function(r){let{link:n,previewLink:o,caption:l,height:i="1px",width:c="100%",aspectRatio:d=2/3,queryString:u="?vpw=1200&vph=800",anchorTagProps:h={}}=r;const w=(0,e.useRef)(),[f,m]=(0,e.useState)(i),p=(t=>{let{element:r}=t;const[n,a]=(0,e.useState)(null);(0,e.useEffect)((()=>{if(!r.current)return;const e=(0,s.debounce)(o,100);return o(),window.addEventListener("scroll",e),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.addEventListener("resize",e)}}),[r]);const o=()=>{if(!r.current)return;const e=window.innerHeight;if(null===r.current.offsetParent)return void a(!1);const{top:t}=r.current.getBoundingClientRect();a(t>=0&&t<=e)};return n})({element:w}),[g,v]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{const e=()=>{try{m(function(e,t){return e*t}(w.current.clientWidth,d))}catch(e){}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[g]),(0,e.useEffect)((()=>{p&&v(!0)}),[p]),(0,e.createElement)("a",t({className:"wporg-screenshot-card",ref:w,style:{height:f,width:c},href:n},h),(0,e.createElement)(a,{queryString:u,src:o,isReady:g,alt:l}))},l=function(s){let{items:a,title:l}=s;const i=(0,e.useRef)(),[c,d]=(0,e.useState)(!1),[u,h]=(0,e.useState)(!0),w=112*a.length-12,f=e=>{i.current.scrollTo({left:e,behavior:"smooth"})};(0,e.useEffect)((()=>{if(!i.current)return;const{paddingLeft:e,paddingRight:t}=window.getComputedStyle(i.current),r=i.current.clientWidth-parseFloat(e)-parseFloat(t),n=()=>{d(i.current.scrollLeft>0),h(w-i.current.scrollLeft>r)};return n(),i.current.addEventListener("scroll",n),()=>{i.current.removeEventListener("scroll",n)}}),[i]);return(0,e.createElement)("div",null,(0,e.createElement)("div",{className:"horizontal-slider-header"},(0,e.createElement)("h3",{className:"horizontal-slider-title"},l),(u||c)&&(0,e.createElement)("span",{className:"horizontal-slider-controls"},(0,e.createElement)(n,{text:(0,r.__)("Previous style variations","wporg"),disabled:!c,onClick:()=>{c&&f(i.current.scrollLeft-300)}}),(0,e.createElement)(n,{text:(0,r.__)("Next style variations","wporg"),disabled:!u,onClick:()=>{u&&f(i.current.scrollLeft+300)}}))),(0,e.createElement)("ul",{className:"horizontal-slider-wrapper",ref:i,role:"tablist"},a.map((r=>(0,e.createElement)("li",{key:r.title,role:"presentation"},(0,e.createElement)(o,t({},r,{width:"100px",height:"62.71186440677966px",aspectRatio:.6271186440677966,queryString:"?vpw=1180&vph=740",isReady:!0,anchorTagProps:{"aria-controls":r.title,"aria-selected":!1,role:"tab"}})))))))},i=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wporg-horizontal-slider-js";const r=document.getElementsByClassName(t);if(r.length)for(let t=0;t<r.length;t++){const n=r[t],s=JSON.parse(n.dataset.items),a=n.dataset.title;s.length&&(0,e.render)((0,e.createElement)(l,{items:s,title:a}),n)}};document.addEventListener("DOMContentLoaded",i),window.__wporg_horizontal_slider_render=i})();