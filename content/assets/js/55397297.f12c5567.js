"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1226],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),g=o,h=u["".concat(s,".").concat(g)]||u[g]||m[g]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},56529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(58168),o=(r(96540),r(15680));const a={title:"Release Notes - Apache RocketMQ Spring - Version 2.1.1",categories:["Release_Notes"],tags:["RocketMQ_Sprint"]},i=void 0,c={permalink:"/release-notes/2020/07/20/release-notes-rocketmq-spring-2.1.1",source:"@site/release-notes/2020-07-20-release-notes-rocketmq-spring-2.1.1.md",title:"Release Notes - Apache RocketMQ Spring - Version 2.1.1",description:"* Source: rocketmq-spring-all-2.1.1-source-release.zip [PGP] [SHA512]",date:"2020-07-20T00:00:00.000Z",formattedDate:"July 20, 2020",tags:[{label:"RocketMQ_Sprint",permalink:"/release-notes/tags/rocket-mq-sprint"}],readingTime:.685,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Spring - Version 2.1.1",categories:["Release_Notes"],tags:["RocketMQ_Sprint"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.8.0",permalink:"/release-notes/2020/12/21/4.8.0"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.7.1",permalink:"/release-notes/2020/06/29/4.7.1"}},s={authorsImageUrls:[]},l=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"Download",type:"tip"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"Source: ",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.1.1/rocketmq-spring-all-2.1.1-source-release.zip"},"rocketmq-spring-all-2.1.1-source-release.zip")," [",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.1.1/rocketmq-spring-all-2.1.1-source-release.zip.asc"},"PGP"),"] [",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.1.1/rocketmq-spring-all-2.1.1-source-release.zip.sha512"},"SHA512"),"]"))),(0,o.yg)("p",null,"Below is a summary of the issues addressed in the version 2.1.1 release of RocketMQ Spring. For full documentation of the release, a guide to get started, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-spring"},"Quick Start"),"."),(0,o.yg)("h2",{id:"improvement"},"Improvement"),(0,o.yg)("ul",null,(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq-spring/pull/283"},"ISSUE #282"),"] -  Upgrade RocketMQ client version to 4.7.1."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq-spring/pull/265"},"ISSUE #263"),"] -  Change the version of rocketmq client in the pom's file."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq-spring/pull/285"},"ISSUE #285"),"] -  Upgrade jackson and fastjson version."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq-spring/pull/266"},"ISSUE #262"),"] -  Support custom AsyncSenderExecutor when sending messages asynchronously.")),(0,o.yg)("h2",{id:"bug"},"Bug"),(0,o.yg)("ul",null,(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq-spring/pull/269"},"ISSUE #271"),"] -  AccessKey and secretKey are wrong when create producer."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq-spring/pull/247"},"ISSUE #241"),"] -  Make the unit of consumeTimeout in rocketmq-spring consistent with rocketmq client."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq-spring/pull/244"},"ISSUE #242"),"] -  SyncSend batchMessage method without timeout param.")))}m.isMDXComponent=!0}}]);