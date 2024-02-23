"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6794],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),g=n,h=u["".concat(s,".").concat(g)]||u[g]||m[g]||a;return r?o.createElement(h,l(l({ref:t},p),{},{components:r})):o.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},16552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=r(58168),n=(r(96540),r(15680));const a={title:"Release Notes - Apache RocketMQ Client Go- Version 1.2.4",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},l=void 0,c={permalink:"/zh/release-notes/2019/11/20/release-notes-rocketmq-client-go-1.2.4",source:"@site/release-notes/2019-11-20-release-notes-rocketmq-client-go-1.2.4.md",title:"Release Notes - Apache RocketMQ Client Go- Version 1.2.4",description:"* Source: rocketmq-client-go-1.2.4-source-release.tar.gz [PGP] [SHA512]",date:"2019-11-20T00:00:00.000Z",formattedDate:"2019\u5e7411\u670820\u65e5",tags:[{label:"Release_Notes",permalink:"/zh/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/zh/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/zh/release-notes/tags/version"}],readingTime:.59,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client Go- Version 1.2.4",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.6.0",permalink:"/zh/release-notes/2019/11/25/4.6.0"},nextItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.4",permalink:"/zh/release-notes/2019/11/11/release-notes-rocketmq-client-cpp-1.2.4"}},s={authorsImageUrls:[]},i=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,o.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{title:"Download",type:"tip"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"Source: ",(0,n.yg)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-client-go/1.2.4/rocketmq-client-go-1.2.4-source-release.tar.gz"},"rocketmq-client-go-1.2.4-source-release.tar.gz")," [",(0,n.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/1.2.4/rocketmq-client-go-1.2.4-source-release.tar.gz.asc"},"PGP"),"] [",(0,n.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/1.2.4/rocketmq-client-go-1.2.4-source-release.tar.gz.sha512"},"SHA512"),"]"))),(0,n.yg)("p",null,"Below is a summary of the issues addressed in the version 1.2.4 release of RocketMQ Client Go. For full documentation of the release, a guide to get started, please refer to ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-client-go"},"Quick Start"),"."),(0,n.yg)("h2",{id:"improvement"},"Improvement"),(0,n.yg)("ul",null,(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/222"},"ISSUE-222"),"] -  feat(producer): support lite producer to send message by sharding key."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/225"},"ISSUE-225"),"] -  feat(consumer): add set max cachesize api to support simple flow-control."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/261"},"ISSUE-261"),"] -  feat(transaction): add transaction producer message."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/251"},"ISSUE-251"),"] -  delete useless GroupName and make subscribe method correct.")),(0,n.yg)("h2",{id:"bug"},"Bug"),(0,n.yg)("ul",null,(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/246"},"ISSUE-246"),"] -  fix(travis):remove unnecessary script in travis.yml."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/248"},"ISSUE-248"),"] -  fix(golint): fix warnings for golint check.")))}m.isMDXComponent=!0}}]);