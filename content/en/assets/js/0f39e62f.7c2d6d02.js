"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3018],{6742:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7294),r=a(3727),i=a(2263),l=a(3919),o=a(412);const c=(0,n.createContext)({collectLink:()=>{}});var s=a(4996),m=a(8780);const g=function(e){let{isNavLink:t,to:a,href:g,activeClassName:u,isActive:d,"data-noBrokenLinkCheck":h,autoAddBaseUrl:v=!0,...p}=e;var E;const{siteConfig:{trailingSlash:y,baseUrl:b}}=(0,i.Z)(),{withBaseUrl:f}=(0,s.C)(),w=(0,n.useContext)(c),k=a||g,N=(0,l.Z)(k),A=null==k?void 0:k.replace("pathname://","");let Z=void 0!==A?(_=A,v&&(e=>e.startsWith("/"))(_)?f(_):_):void 0;var _;Z&&N&&(Z=(0,m.applyTrailingSlash)(Z,{trailingSlash:y,baseUrl:b}));const j=(0,n.useRef)(!1),C=t?r.OL:r.rU,U=o.Z.canUseIntersectionObserver;let q;(0,n.useEffect)((()=>(!U&&N&&null!=Z&&window.docusaurus.prefetch(Z),()=>{U&&q&&q.disconnect()})),[Z,U,N]);const I=null!==(E=null==Z?void 0:Z.startsWith("#"))&&void 0!==E&&E,O=!Z||!N||I;return Z&&N&&!I&&!h&&w.collectLink(Z),O?n.createElement("a",{href:Z,...k&&!N&&{target:"_blank",rel:"noopener noreferrer"},...p}):n.createElement(C,{...p,onMouseEnter:()=>{j.current||null==Z||(window.docusaurus.preload(Z),j.current=!0)},innerRef:e=>{var t,a;U&&e&&N&&(t=e,a=()=>{null!=Z&&window.docusaurus.prefetch(Z)},q=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(q.unobserve(t),q.disconnect(),a())}))})),q.observe(t))},to:Z||"",...t&&{isActive:d,activeClassName:u}})}},4973:(e,t,a)=>{a.d(t,{Z:()=>g,I:()=>m});var n=a(7294);const r=/{\w+}/g,i="{}";function l(e,t){const a=[],l=e.replace(r,(e=>{const r=e.substr(1,e.length-2),l=null==t?void 0:t[r];if(void 0!==l){const e=n.isValidElement(l)?l:String(l);return a.push(e),i}return e}));return 0===a.length?e:a.every((e=>"string"==typeof e))?l.split(i).reduce(((e,t,n)=>{var r;return e.concat(t).concat(null!==(r=a[n])&&void 0!==r?r:"")}),""):l.split(i).reduce(((e,t,r)=>[...e,n.createElement(n.Fragment,{key:r},t,a[r])]),[])}function o(e){let{children:t,values:a}=e;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return l(t,a)}var c=a(7529);function s(e){let{id:t,message:a}=e;var n;return null!==(n=c[null!=t?t:a])&&void 0!==n?n:a}function m(e,t){let{message:a,id:n}=e;var r;return l(null!==(r=s({message:a,id:n}))&&void 0!==r?r:a,t)}function g(e){let{children:t,id:a,values:r}=e;var i;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");const l=null!==(i=s({message:t,id:a}))&&void 0!==i?i:t;return n.createElement(o,{values:r},l)}},3919:(e,t,a)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{Z:()=>r,b:()=>n})},4996:(e,t,a)=>{a.d(t,{C:()=>i,Z:()=>l});var n=a(2263),r=a(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(e,t,a,n){let{forcePrependBaseUrl:i=!1,absolute:l=!1}=void 0===n?{}:n;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(i)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+o:o}(t,e,a,n)}}function l(e,t){void 0===t&&(t={});const{withBaseUrl:a}=i();return a(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:a,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===a)return e;const[r]=e.split(/[#?]/),i="/"===r||r===n?r:(l=r,a?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(r,i)}},8780:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=a(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var i=a(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1892:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(7294),r=a(6010);const i={companyUsage:"companyUsage_FljK",logos:"logos_fNsm",logoNavigation:"logoNavigation_VQCJ",button:"button_rBqN",buttonActive:"buttonActive_du0a",logocontainer:"logocontainer_t3PW",title:"title_4lD6",subtitle:"subtitle_fM3+",buttondiv:"buttondiv_3KV+",buttonlogo:"buttonlogo_9n3R"};var l=a(6742),o=a(4973);class c extends n.Component{render(){return n.createElement("div",{className:"logoall"},n.createElement("h1",{className:i.title},n.createElement(o.Z,{id:"\u7528\u6237\u6848\u4f8b"},"\u7528\u6237\u6848\u4f8b")),n.createElement("h2",{className:i.subtitle},n.createElement(o.Z,{id:"\u7528\u6237\u6848\u4f8binstruction"},"RocketMQ\u5df2\u5e2e\u52a9\u8d85\u8fc7100\u5bb6\u4e92\u8054\u7f51\uff0c\u91d1\u878d\uff0c\u5236\u9020\u4e1a\u516c\u53f8")),n.createElement("div",{className:"logoutsider"},n.createElement("div",{className:"logocontainer"},n.createElement("div",{className:"avatar"},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/2dfire-logo.jpg",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/2dfire-logo.jpg",width:"100",height:"100"})),n.createElement("div",{className:"avatar"},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/alibaba-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/alibaba-logo.png",width:"100",height:"100"})),n.createElement("div",{className:"avatar"},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/ant-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/ant-logo.png",width:"100",height:"100"})),n.createElement("div",{className:"avatar"},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/beibei-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/beibei-logo.png",width:"100",height:"100"})),n.createElement("div",{className:"avatar"},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/china-telecom-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/china-telecom-logo.png",width:"100",height:"100"})),n.createElement("div",{className:"avatar"},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/decent-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/decent-logo.png",width:"100",height:"100"})),n.createElement("div",{className:"avatar"},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/didi-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/didi-logo.png",width:"100",height:"100"}))," ",n.createElement("div",{className:"avatar"},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/egov-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/egov-logo.png",width:"100",height:"100"}))," ",n.createElement("div",{className:"avatar"},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/fenqile-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/fenqile-logo.png",width:"100",height:"100"}))," ",n.createElement("div",{className:(0,r.Z)("avatar",i.logo15)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/gome-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/gome-logo.png",width:"100",height:"100"}))," ",n.createElement("div",{className:(0,r.Z)("avatar",i.logo14)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/huawei-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/huawei-logo.png",width:"100",height:"100"}))," ",n.createElement("div",{className:(0,r.Z)("avatar",i.logo13)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/iqiyi-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/iqiyi-logo.png",width:"100",height:"100"}))," ",n.createElement("div",{className:(0,r.Z)("avatar",i.logo12)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/kedaxunfei-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/kedaxunfei-logo.png",width:"100",height:"100"}))," ",n.createElement("div",{className:(0,r.Z)("avatar",i.logo11)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/media-logo.jpg",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/media-logo.jpg",width:"100",height:"100"}))," ",n.createElement("div",{className:(0,r.Z)("avatar",i.logo10)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/meizu-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/meizu-logo.png",width:"100",height:"100"}))," ",n.createElement("div",{className:(0,r.Z)("avatar",i.logo9)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/mingsheng-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/mingsheng-logo.png",width:"100",height:"100"})),n.createElement("div",{className:(0,r.Z)("avatar",i.logo8)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/mobike-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/mobike-logo.png",width:"100",height:"100"})),n.createElement("div",{className:(0,r.Z)("avatar",i.logo7)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/mogujie-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/mogujie-logo.png",width:"100",height:"100"})),n.createElement("div",{className:(0,r.Z)("avatar",i.logo6)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/shihai-logo.jpg",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/shihai-logo.jpg",width:"100",height:"100"})),n.createElement("div",{className:(0,r.Z)("avatar",i.logo5)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/shouqi-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/shouqi-logo.png",width:"100",height:"100"})),n.createElement("div",{className:(0,r.Z)("avatar",i.logo4)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/shunfeng-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/shunfeng-logo.png",width:"100",height:"100"})),n.createElement("div",{className:(0,r.Z)("avatar",i.logo3)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/tree-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/tree-logo.png",width:"100",height:"100"})),n.createElement("div",{className:(0,r.Z)("avatar",i.logo2)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/webank-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/webank-logo.png",width:"100",height:"100"})),n.createElement("div",{className:(0,r.Z)("avatar",i.logo1)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/wensihaihui-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/wensihaihui-logo.png",width:"100",height:"100"})),n.createElement("div",{className:(0,r.Z)("avatar",i.logo1)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/yeahmobi-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/yeahmobi-logo.png",width:"100",height:"100"})),n.createElement("div",{className:(0,r.Z)("avatar",i.logo1)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/yhsoft-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/yhsoft-logo.png",width:"100",height:"100"})),n.createElement("div",{className:(0,r.Z)("avatar",i.logo1)},n.createElement("img",{alt:"","aria-hidden":!0,src:"/community/yunpan-logo.png",class:"background"}),n.createElement("img",{alt:"Avatar",src:"/community/yunpan-logo.png",width:"100",height:"100"})))),n.createElement("div",{className:i.buttondiv},n.createElement(l.Z,{className:(0,r.Z)("button button--outline button--secondary button--lg ",i.buttonlogo),to:"/blog"},n.createElement(o.Z,{id:"\u66f4\u591a\u6848\u4f8b"},"\u66f4\u591a\u6848\u4f8b"))))}}},6010:(e,t,a)=>{function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:()=>r});const r=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}}}]);