"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5575],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),h=o,k=u["".concat(c,".").concat(h)]||u[h]||m[h]||a;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},92579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Release Notes - Apache RocketMQ Spring - Version 2.0.4",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},l=void 0,i={permalink:"/release-notes/2019/11/01/release-notes-rocketmq-spring-2.0.4",source:"@site/release-notes/2019-11-01-release-notes-rocketmq-spring-2.0.4.md",title:"Release Notes - Apache RocketMQ Spring - Version 2.0.4",description:"* Source: rocketmq-spring-all-2.0.4-source-release.zip [PGP] [SHA512]",date:"2019-11-01T00:00:00.000Z",formattedDate:"November 1, 2019",tags:[{label:"RocketMQ_Spring",permalink:"/release-notes/tags/rocket-mq-spring"}],readingTime:.83,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Spring - Version 2.0.4",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},prevItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.4",permalink:"/release-notes/2019/11/11/release-notes-rocketmq-client-cpp-1.2.4"},nextItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.3",permalink:"/release-notes/2019/08/20/release-notes-rocketmq-client-cpp-1.2.3"}},c={authorsImageUrls:[]},s=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Download",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.0.4/rocketmq-spring-all-2.0.4-source-release.zip"},"rocketmq-spring-all-2.0.4-source-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.0.4/rocketmq-spring-all-2.0.4-source-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.0.4/rocketmq-spring-all-2.0.4-source-release.zip.sha512"},"SHA512"),"]"))),(0,o.kt)("p",null,"Below is a summary of the issues addressed in the version 2.0.4 release of RocketMQ Spring. For full documentation of the release, a guide to get started, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-spring"},"Quick Start"),"."),(0,o.kt)("h2",{id:"improvement"},"Improvement"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/87"},"ISSUE #86"),"] -  Support to configure whether consumer listener is enabled through configuration file."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/97"},"ISSUE #96"),"] -  Support resolve  placeholder for listener.txProducerGroup."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/129"},"ISSUE #103"),"] -  Support resolve placeholder for selectorExpression."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/137"},"ISSUE #137"),"] -  Upgrade rocketmq dependency to 4.5.2."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/152"},"ISSUE #152"),"] -  An enhancement about the convert in RocketMQTemplate.")),(0,o.kt)("h2",{id:"bug"},"Bug"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/150"},"ISSUE #81"),"] -  Fix RocketMQTemplate.syncSend collection type method signature."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/84"},"ISSUE #83"),"] -  Fix addUserProperties will override headers from rocketmq."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/138"},"ISSUE #107"),"] -  Fix the message was consumed twice because of the same instanceName."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/119"},"ISSUE #117"),"] -  Fix timeout failed in syncSendOrderly."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/pull/164"},"ISSUE #163"),"] -  Fix transactionProducer has incorrect namespace.")))}m.isMDXComponent=!0}}]);