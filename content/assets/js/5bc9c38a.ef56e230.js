"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5404],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var n=a.createContext({}),c=function(e){var t=a.useContext(n),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(n.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,n=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=s,k=u["".concat(n,".").concat(h)]||u[h]||m[h]||o;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var n in t)hasOwnProperty.call(t,n)&&(i[n]=t[n]);i.originalType=e,i[u]="string"==typeof e?e:s,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},50266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>n,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),s=(r(67294),r(3905));const o={title:"Release Notes - Apache RocketMQ - Version 4.9.5",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},l=void 0,i={permalink:"/release-notes/2023/03/26/4.9.5",source:"@site/release-notes/2023-03-26-4.9.5.md",title:"Release Notes - Apache RocketMQ - Version 4.9.5",description:"- Source: rocketmq-all-4.9.5-source-release.zip [PGP] [SHA512]",date:"2023-03-26T00:00:00.000Z",formattedDate:"March 26, 2023",tags:[{label:"Release_Notes",permalink:"/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/release-notes/tags/version"}],readingTime:1.37,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.9.5",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 5.1.1",permalink:"/release-notes/2023/05/15/5.1.1"},nextItem:{title:"Release Notes - Apache RocketMQ Streams - Version 1.1.1",permalink:"/release-notes/2023/02/22/release-notes-rocketmq-streams-all-1.1.1"}},n={authorsImageUrls:[]},c=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Download the 4.9.5 release",type:"tip"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Source: ",(0,s.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/4.9.5/rocketmq-all-4.9.5-source-release.zip"},"rocketmq-all-4.9.5-source-release.zip")," [",(0,s.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/4.9.5/rocketmq-all-4.9.5-source-release.zip.asc"},"PGP"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/4.9.5/rocketmq-all-4.9.5-source-release.zip.sha512"},"SHA512"),"]"),(0,s.kt)("li",{parentName:"ul"},"Binary: ",(0,s.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/4.9.5/rocketmq-all-4.9.5-bin-release.zip"},"rocketmq-all-4.9.5-bin-release.zip")," [",(0,s.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/4.9.5/rocketmq-all-4.9.5-bin-release.zip.asc"},"PGP"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/4.9.5/rocketmq-all-4.9.5-bin-release.zip.sha512"},"SHA512"),"]"))),(0,s.kt)("p",null,"Below is a summary of the issues addressed in the 4.9.5 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,s.kt)("a",{href:"/docs/quickStart/01quickstart/"},"Quick Start"),"."),(0,s.kt)("h2",{id:"improvement"},"Improvement"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3905"},"ISSUE-3905"),"]  - Support bname in protocol for 4.9.x client"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/5333"},"ISSUE-5333"),"]  - Remove unused header fields"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4468"},"ISSUE-4468"),"]  - Optimize broker buffer length initialization"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4511"},"ISSUE-4511"),"]  - Fix notAvailableDuration description in doc file"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4503"},"ISSUE-4503"),"]  - Re-push RocketMQ's commit logs from May 2013 to December 2016"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4489"},"ISSUE-4489"),"]  - Some trace messages not being sent to the broker in time before producer shutdown"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4513"},"ISSUE-4513"),"]  - Elegant equals using apache-commons"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4528"},"ISSUE-4528"),"]  - Fix test failed sometimes"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4520"},"ISSUE-4520"),"]  - Implement adjusting maxMessageSize dynamically"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4544"},"ISSUE-4544"),"]  - Print aclConf to log"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4461"},"ISSUE-4461"),"]  - Support to change the logger level dynamically"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4531"},"ISSUE-4531"),"]  - Fix unreachable statement, redundant code and code style"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4515"},"ISSUE-4515"),"]  - Remove useless implement in some processors "),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4445"},"ISSUE-4445"),"]  - Polish the design doc"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4572"},"ISSUE-4572"),"]  - Modify Dependency Exclusions for DLedger 0.2.7"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4574"},"ISSUE-4574"),"]  - Fix misspelling"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/5541"},"ISSUE-5541"),"]  - Make getClazzFields obtain super class field"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/5983"},"ISSUE-5983"),"]  - Make consumer support flow control code better"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/6419"},"ISSUE-6419"),"]  - Upgrade dledger version to 0.3.1.2")),(0,s.kt)("h2",{id:"bug"},"Bug"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/5965"},"ISSUE-5965"),"]  - Fix lmqTopicQueueTable initialization"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/5465"},"ISSUE-5465"),"]  - Fix order consumer's lock issue when first start "),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4612"},"ISSUE-4612"),"]  - Fix trace not complete "),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4507"},"ISSUE-4507"),"]  - Fix message trace throws exception"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/6411"},"ISSUE-6411"),"]  - Cherry pick some bug fixes from develop to 4.9.x branch")))}m.isMDXComponent=!0}}]);