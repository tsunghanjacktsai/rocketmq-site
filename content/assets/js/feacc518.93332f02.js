"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7973],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,g=u["".concat(c,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},49432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Release Notes - Apache RocketMQ Spring - Version 2.2.1",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},s=void 0,i={permalink:"/release-notes/2021/08/31/release-notes-rocketmq-spring-2.2.1",source:"@site/release-notes/2021-08-31-release-notes-rocketmq-spring-2.2.1.md",title:"Release Notes - Apache RocketMQ Spring - Version 2.2.1",description:"* Source: rocketmq-spring-all-2.2.1-source-release.zip [PGP] [SHA512]",date:"2021-08-31T00:00:00.000Z",formattedDate:"August 31, 2021",tags:[{label:"RocketMQ_Spring",permalink:"/release-notes/tags/rocket-mq-spring"}],readingTime:.965,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Spring - Version 2.2.1",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 5.0.0-PREVIEW",permalink:"/release-notes/2021/09/06/release-notes-5.0.0-PREVIEW"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.9.1",permalink:"/release-notes/2021/08/22/4.9.1"}},c={authorsImageUrls:[]},l=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Download",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Source: ",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq-spring/2.2.1/rocketmq-spring-rocketmq-spring-all-2.2.1.zip"},"rocketmq-spring-all-2.2.1-source-release.zip")," [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.2.1/rocketmq-spring-all-2.2.1-source-release.zip.asc"},"PGP"),"] [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.2.1/rocketmq-spring-rocketmq-spring-all-2.2.1.zip.sha512"},"SHA512"),"]"))),(0,a.kt)("p",null,"Below is a summary of the issues addressed in the version 2.2.1 release of RocketMQ Spring. For full documentation of the release, a guide to get started, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-spring"},"Quick Start"),"."),(0,a.kt)("h2",{id:"improvement"},"Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/385"},"ISSUE #385"),"] -  Add message trace setting in ExtRocketMQConsumerConfiguration."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/381"},"ISSUE #381"),"] -  Upgrade rocketmq version to 4.9.1."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/377"},"ISSUE #377"),"] -  Add the replyTimeout configuration parameter."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/371"},"ISSUE #371"),"] -  Add some asynchronous API for batch messages in RocketMQTemplate."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/378"},"ISSUE #378"),"] -  Improve the comment of maxReconsumeTimes."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/366"},"ISSUE #366"),"] -  The retry number of failed consumptions can be set."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/368"},"ISSUE #368"),"] -  Upgrade starter version."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/346"},"ISSUE #346"),"] -  Enhance DefaultRocketMQListenerContainer doConvertMessage."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/340"},"ISSUE #340"),"] -  Set enableMsgTrace default value to false."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/343"},"ISSUE #343"),"] -  Sending batch messages orderly with RocketMQTemplate."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/335"},"ISSUE #335"),"] -  Update rocketmq spring samples version.")),(0,a.kt)("h2",{id:"bug"},"Bug"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/376"},"ISSUE #376"),"] -  Fix the selectorExpression not resolve placeholders."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/339"},"ISSUE #339"),"] -  Fix consumer do not consume message with the same instance name.")))}m.isMDXComponent=!0}}]);