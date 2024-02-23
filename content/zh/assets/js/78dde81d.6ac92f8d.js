"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4350],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),f=o,g=u["".concat(s,".").concat(f)]||u[f]||m[f]||n;return r?a.createElement(g,c(c({ref:t},p),{},{components:r})):a.createElement(g,c({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,c=new Array(n);c[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<n;i++)c[i]=r[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var a=r(58168),o=(r(96540),r(15680));const n={title:"Release Notes - Apache RocketMQ - Version 5.0.0-PREVIEW",categories:["Release_Notes"],tags:["RocketMQ"]},c=void 0,l={permalink:"/zh/release-notes/2021/09/06/release-notes-5.0.0-PREVIEW",source:"@site/release-notes/2021-09-06-release-notes-5.0.0-PREVIEW.md",title:"Release Notes - Apache RocketMQ - Version 5.0.0-PREVIEW",description:"* Source: rocketmq-all-5.0.0-PREVIEW-source-release.zip [PGP] [SHA512]",date:"2021-09-06T00:00:00.000Z",formattedDate:"2021\u5e749\u67086\u65e5",tags:[{label:"RocketMQ",permalink:"/zh/release-notes/tags/rocket-mq"}],readingTime:.175,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 5.0.0-PREVIEW",categories:["Release_Notes"],tags:["RocketMQ"]},prevItem:{title:"Release Notes - Apache RocketMQ Dashboard - Version 1.0.0",permalink:"/zh/release-notes/2021/09/23/release-notes-rocketmq-dashboard-1.0.0"},nextItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.2.1",permalink:"/zh/release-notes/2021/08/31/release-notes-rocketmq-spring-2.2.1"}},s={authorsImageUrls:[]},i=[{value:"RIP",id:"rip",level:2}],p={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"Download",type:"tip"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"Source: ",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/5.0.0-PREVIEW/rocketmq-all-5.0.0-PREVIEW-source-release.zip"},"rocketmq-all-5.0.0-PREVIEW-source-release.zip")," [",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/5.0.0-PREVIEW/rocketmq-all-5.0.0-PREVIEW-source-release.zip.asc"},"PGP"),"] [",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/5.0.0-PREVIEW/rocketmq-all-5.0.0-PREVIEW-source-release.zip.sha512"},"SHA512"),"]"))),(0,o.yg)("h2",{id:"rip"},"RIP"),(0,o.yg)("ul",null,(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/wiki/%5BRIP-19%5D-Server-side-rebalance,--lightweight-consumer-client-support"},"RIP-19"),"] -  Server side rebalance, lightweight consumer client support."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/wiki/RIP-21-logical-queue-abstraction-for-fast-scale-out"},"RIP-21"),"] -  Logical queue abstraction for fast scale out.")))}m.isMDXComponent=!0}}]);