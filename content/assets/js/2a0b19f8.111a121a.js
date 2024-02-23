"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2634],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={title:"Release Notes - Apache RocketMQ Spring - Version 2.1.0",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},s=void 0,i={permalink:"/release-notes/2020/02/10/release-notes-rocketmq-spring-2.1.0",source:"@site/release-notes/2020-02-10-release-notes-rocketmq-spring-2.1.0.md",title:"Release Notes - Apache RocketMQ Spring - Version 2.1.0",description:"* Source: rocketmq-spring-all-2.1.0-source-release.zip [PGP] [SHA512]",date:"2020-02-10T00:00:00.000Z",formattedDate:"February 10, 2020",tags:[{label:"RocketMQ_Spring",permalink:"/release-notes/tags/rocket-mq-spring"}],readingTime:1.005,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Spring - Version 2.1.0",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.6.1",permalink:"/release-notes/2020/2/14/4.6.1"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.6.0",permalink:"/release-notes/2019/11/25/4.6.0"}},l={authorsImageUrls:[]},c=[{value:"New Feature",id:"new-feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"Source: ",(0,a.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.1.0/rocketmq-spring-all-2.1.0-source-release.zip"},"rocketmq-spring-all-2.1.0-source-release.zip")," [",(0,a.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-spring/2.1.0/rocketmq-spring-all-2.1.0-source-release.zip.asc"},"PGP"),"] [",(0,a.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-spring/2.1.0/rocketmq-spring-all-2.1.0-source-release.zip.sha512"},"SHA512"),"]"))),(0,a.yg)("p",null,"Below is a summary of the issues addressed in the version 2.1.0 release of RocketMQ Spring. For full documentation of the release, a guide to get started, please refer to ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-spring"},"Quick Start"),"."),(0,a.yg)("h2",{id:"new-feature"},"New Feature"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-spring/issues/208"},"ISSUE #208"),"] -  Support request/reply model in rocketmq-spring.")),(0,a.yg)("h2",{id:"improvement"},"Improvement"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-spring/issues/178"},"ISSUE #178"),"] -  Refactor transaction message implementation."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-spring/issues/190"},"ISSUE #190"),"] -  Delete useless code and ambiguous deprecated annotation about JacksonFallbackConfiguration."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-spring/issues/192"},"ISSUE #192"),"] -  Upgrade rocketmq version to 4.6.0 and add unit tests."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-spring/issues/202"},"ISSUE #202"),"] -  Refactor transaction auto configuration and enable extRocketMQTemplate send transactional messages."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-spring/issues/213"},"ISSUE #213"),"] -  Polish readme file."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-spring/issues/215"},"ISSUE #215"),"] -  Polish the code and modify version."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-spring/issues/211"},"ISSUE #211"),"] -  Remove the limitation that ExtRocketMQTemplate can not keep the same nameserver as RocketMQTemplate."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-spring/issues/218"},"ISSUE #218"),"] -  Fix spring scopeTarget will repeat consumer instance.")),(0,a.yg)("h2",{id:"bug"},"Bug"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-spring/issues/151"},"ISSUE #151"),"] -  Fix the Infinite loop in DefaultRocketMQListenerContainer."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-spring/issues/186"},"ISSUE #186"),"] -  Fix selectorExpression cannot autoconfigure from configure file."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-spring/issues/197"},"ISSUE #197"),"] -  Solve the problem that RocketMQListener can not deserialize generic.")))}g.isMDXComponent=!0}}]);