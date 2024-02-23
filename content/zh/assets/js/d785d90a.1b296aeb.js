"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1258],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(r),f=o,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||n;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<n;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var a=r(58168),o=(r(96540),r(15680));const n={title:"Release Notes - Apache RocketMQ - Version 4.9.2",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},s=void 0,l={permalink:"/zh/release-notes/2021/10/26/4.9.2",source:"@site/release-notes/2021-10-26-4.9.2.md",title:"Release Notes - Apache RocketMQ - Version 4.9.2",description:"* Source: rocketmq-all-4.9.2-source-release.zip [PGP] [SHA512]",date:"2021-10-26T00:00:00.000Z",formattedDate:"2021\u5e7410\u670826\u65e5",tags:[{label:"Release_Notes",permalink:"/zh/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/zh/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/zh/release-notes/tags/version"}],readingTime:1.815,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.9.2",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ Streams - Version 1.0.0-preview",permalink:"/zh/release-notes/2022/01/18/release-notes-rocketmq-streams-1.0.0-preview"},nextItem:{title:"Release Notes - Apache RocketMQ Dashboard - Version 1.0.0",permalink:"/zh/release-notes/2021/09/23/release-notes-rocketmq-dashboard-1.0.0"}},c={authorsImageUrls:[]},i=[],p={toc:i},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(m,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"Download the 4.9.2 release    ",type:"tip"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"Source: ",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.2/rocketmq-all-4.9.2-source-release.zip"},"rocketmq-all-4.9.2-source-release.zip")," [",(0,o.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.2/rocketmq-all-4.9.2-source-release.zip.asc"},"PGP"),"] [",(0,o.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.2/rocketmq-all-4.9.2-source-release.zip.sha512"},"SHA512"),"]"),(0,o.yg)("li",{parentName:"ul"},"Binary: ",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.2/rocketmq-all-4.9.2-bin-release.zip"},"rocketmq-all-4.9.2-bin-release.zip")," [",(0,o.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.2/rocketmq-all-4.9.2-bin-release.zip.asc"},"PGP"),"] [",(0,o.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.2/rocketmq-all-4.9.2-bin-release.zip.sha512"},"SHA512"),"]"))))}u.isMDXComponent=!0}}]);