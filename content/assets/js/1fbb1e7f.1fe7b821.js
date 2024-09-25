"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2679],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>g});var a=r(96540);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,c=function(e,t){if(null==e)return{};var r,a,c={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,c=e.mdxType,n=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(r),u=c,g=h["".concat(l,".").concat(u)]||h[u]||m[u]||n;return r?a.createElement(g,o(o({ref:t},s),{},{components:r})):a.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var n=r.length,o=new Array(n);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:c,o[1]=i;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14221:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(58168),c=(r(96540),r(15680));const n={title:"Release Notes - Apache RocketMQ Client C#- Version 5.2.0",categories:["Release_Notes"],tags:["RocketMQ_Client_Csharp"]},o=void 0,i={permalink:"/release-notes/2024/09/25/release-notes-rocketmq-csharp-client-5.2.0",source:"@site/release-notes/2024-09-25-release-notes-rocketmq-csharp-client-5.2.0.md",title:"Release Notes - Apache RocketMQ Client C#- Version 5.2.0",description:"* Source: rocketmq-client-csharp-5.2.0-rc1-source-release.zip [PGP] [SHA512]",date:"2024-09-25T00:00:00.000Z",formattedDate:"September 25, 2024",tags:[{label:"RocketMQ_Client_Csharp",permalink:"/release-notes/tags/rocket-mq-client-csharp"}],readingTime:1.03,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client C#- Version 5.2.0",categories:["Release_Notes"],tags:["RocketMQ_Client_Csharp"]},nextItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.3.1",permalink:"/release-notes/2024/07/19/release-notes-rocketmq-spring-2.3.1"}},l={authorsImageUrls:[]},p=[{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}],s={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,c.yg)(h,(0,a.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.yg)("admonition",{title:"Download",type:"tip"},(0,c.yg)("ul",{parentName:"admonition"},(0,c.yg)("li",{parentName:"ul"},"Source: ",(0,c.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/rocketmq-clients/rocketmq-client-csharp/5.2.0-rc1/rocketmq-client-csharp-5.2.0-rc1-source-release.zip"},"rocketmq-client-csharp-5.2.0-rc1-source-release.zip")," [",(0,c.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/rocketmq-clients/rocketmq-client-csharp/5.2.0-rc1/rocketmq-client-csharp-5.2.0-rc1-source-release.zip.asc"},"PGP"),"] [",(0,c.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/rocketmq-clients/rocketmq-client-csharp/5.2.0-rc1/rocketmq-client-csharp-5.2.0-rc1-source-release.zip.sha512"},"SHA512"),"]"))),(0,c.yg)("p",null,"Below is a summary of the issues addressed in the version 5.2.0 release of Apache RocketMQ Client C#. For full documentation of the release, a guide to get started, please refer to ",(0,c.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-clients/tree/master/csharp"},"Quick Start"),"."),(0,c.yg)("h2",{id:"whats-changed"},"What's Changed"),(0,c.yg)("ul",null,(0,c.yg)("li",{parentName:"ul"},"Fix the outdated badge by @aaron-ai in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/520"},"https://github.com/apache/rocketmq-clients/pull/520")),(0,c.yg)("li",{parentName:"ul"},"csharp: Add using to wrap HMACSHA1 instance by @catcherwong in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/582"},"https://github.com/apache/rocketmq-clients/pull/582")),(0,c.yg)("li",{parentName:"ul"},"replace nlog with Microsoft.Extensions.Logging by @eventhorizon-cli in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/596"},"https://github.com/apache/rocketmq-clients/pull/596")),(0,c.yg)("li",{parentName:"ul"},"Resolve the issue of obtaining the physical address of the network card by @sduo in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/704"},"https://github.com/apache/rocketmq-clients/pull/704")),(0,c.yg)("li",{parentName:"ul"},"csharp: Optimize the performance of the Hash algorithm and reduce allocations. by @InCerryGit in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/690"},"https://github.com/apache/rocketmq-clients/pull/690")),(0,c.yg)("li",{parentName:"ul"},"Optimize performance by leveraging new allocation reduction methods in .NET 5 by @colprog in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/747"},"https://github.com/apache/rocketmq-clients/pull/747")),(0,c.yg)("li",{parentName:"ul"},"[csharp]"," update TFM to net6 and net8 by @catcherwong in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/799"},"https://github.com/apache/rocketmq-clients/pull/799")),(0,c.yg)("li",{parentName:"ul"},"[ISSUE #776]"," Add push consumer for normal/fifo message, namespace support, reentrant message receiving support in C# SDK by @tsunghanjacktsai in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/777"},"https://github.com/apache/rocketmq-clients/pull/777")),(0,c.yg)("li",{parentName:"ul"},"Release C# client 5.2.0 by @tsunghanjacktsai in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/839"},"https://github.com/apache/rocketmq-clients/pull/839"))),(0,c.yg)("h2",{id:"new-contributors"},"New Contributors"),(0,c.yg)("ul",null,(0,c.yg)("li",{parentName:"ul"},"@catcherwong made their first contribution in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/582"},"https://github.com/apache/rocketmq-clients/pull/582")),(0,c.yg)("li",{parentName:"ul"},"@eventhorizon-cli made their first contribution in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/596"},"https://github.com/apache/rocketmq-clients/pull/596")),(0,c.yg)("li",{parentName:"ul"},"@sduo made their first contribution in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/704"},"https://github.com/apache/rocketmq-clients/pull/704")),(0,c.yg)("li",{parentName:"ul"},"@InCerryGit made their first contribution in ",(0,c.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-clients/pull/690"},"https://github.com/apache/rocketmq-clients/pull/690"))),(0,c.yg)("p",null,(0,c.yg)("strong",{parentName:"p"},"Full Changelog"),": ",(0,c.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-clients/compare/csharp-5.1.1-rc1...csharp-5.2.0-rc1"},"https://github.com/apache/rocketmq-clients/compare/csharp-5.1.1-rc1...csharp-5.2.0-rc1")))}m.isMDXComponent=!0}}]);