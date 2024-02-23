"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1609],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,g=u["".concat(i,".").concat(h)]||u[h]||m[h]||n;return r?a.createElement(g,l(l({ref:t},p),{},{components:r})):a.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},41362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(58168),o=(r(96540),r(15680));const n={title:"Release Notes - Apache RocketMQ - Version 4.5.1",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},l=void 0,s={permalink:"/zh/release-notes/2019/05/13/4.5.1",source:"@site/release-notes/2019-05-13-4.5.1.md",title:"Release Notes - Apache RocketMQ - Version 4.5.1",description:"* Source: rocketmq-all-4.5.1-source-release.zip [PGP] [SHA512]",date:"2019-05-13T00:00:00.000Z",formattedDate:"2019\u5e745\u670813\u65e5",tags:[{label:"Release_Notes",permalink:"/zh/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/zh/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/zh/release-notes/tags/version"}],readingTime:1.015,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.5.1",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.5.2",permalink:"/zh/release-notes/2019/08/02/4.5.2"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.5.0",permalink:"/zh/release-notes/2019/03/29/4.5.0"}},i={authorsImageUrls:[]},c=[{value:"New Feature",id:"new-feature",level:2},{value:"Improvement",id:"improvement",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"Download the 4.5.1 release",type:"tip"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"Source: ",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.1/rocketmq-all-4.5.1-source-release.zip"},"rocketmq-all-4.5.1-source-release.zip")," [",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.1/rocketmq-all-4.5.1-source-release.zip.asc"},"PGP"),"] [",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.1/rocketmq-all-4.5.1-source-release.zip.sha512"},"SHA512"),"]"),(0,o.yg)("li",{parentName:"ul"},"Binary: ",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.1/rocketmq-all-4.5.1-bin-release.zip"},"rocketmq-all-4.5.1-bin-release.zip")," [",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.1/rocketmq-all-4.5.1-bin-release.zip.asc"},"PGP"),"] [",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.1/rocketmq-all-4.5.1-bin-release.zip.sha512"},"SHA512"),"]"))),(0,o.yg)("p",null,"Below is a summary of the issues addressed in the 4.5.1 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,o.yg)("a",{href:"/docs/quickStart/01quickstart/"},"Quick Start"),"."),(0,o.yg)("h2",{id:"new-feature"},"New Feature"),(0,o.yg)("ul",null,(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/pull/1175"},"ISSUE-1174"),"] -  Support domain host for name server.")),(0,o.yg)("h2",{id:"improvement"},"Improvement"),(0,o.yg)("ul",null,(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclosed+milestone%3A4.5.1+RIP-9"},"RIP-9"),"] -  Provide RocketMQ Developer's Guide in English and Chinese."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclosed+milestone%3A4.5.1+RIP-10"},"RIP-10"),"] -  Add unit test cases."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/pull/1129"},"ISSUE-1129"),"] -  Change the release package style to rocketmq-version."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1138"},"ISSUE-1138"),"] -  Deprecate admin interface exposed in producer/consumer."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/pull/1201"},"ISSUE-1200"),"] -  Polish the default message trace topic config.")),"## Bug",(0,o.yg)("ul",null,(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1078"},"ISSUE-1078"),"] -  Fixed the issue that User can't use mqadmin command normally if they don't copy the tool.yml file to related fold and AclEnable flag is closed."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1147"},"ISSUE-1147"),"] -  Fixed the issue that broker will report exception if open the aclEnable and enableDLegerCommitLog flag at the same time."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1164"},"ISSUE-1164"),"] -  Fixed the issue that Consumer Instance can't consume message from slave when cluster is in the high level tps when master has been killed.")))}m.isMDXComponent=!0}}]);