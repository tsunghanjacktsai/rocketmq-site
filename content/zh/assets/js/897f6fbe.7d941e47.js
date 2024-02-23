"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9790],{15680:(e,t,a)=>{a.d(t,{xA:()=>h,yg:()=>g});var r=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var n=r.createContext({}),c=function(e){var t=r.useContext(n),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(n.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,n=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=c(a),s=i,g=m["".concat(n,".").concat(s)]||m[s]||u[s]||o;return a?r.createElement(g,p(p({ref:t},h),{},{components:a})):r.createElement(g,p({ref:t},h))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,p=new Array(o);p[0]=s;var l={};for(var n in t)hasOwnProperty.call(t,n)&&(l[n]=t[n]);l.originalType=e,l[m]="string"==typeof e?e:i,p[1]=l;for(var c=2;c<o;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},27767:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>n,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(58168),i=(a(96540),a(15680));const o={title:"Release Notes - Apache RocketMQ - Version 5.1.4",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},p=void 0,l={permalink:"/zh/release-notes/2023/09/22/5.1.4",source:"@site/release-notes/2023-09-22-5.1.4.md",title:"Release Notes - Apache RocketMQ - Version 5.1.4",description:"- Source: rocketmq-all-5.1.4-source-release.zip [PGP] [SHA512]",date:"2023-09-22T00:00:00.000Z",formattedDate:"2023\u5e749\u670822\u65e5",tags:[{label:"Release_Notes",permalink:"/zh/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/zh/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/zh/release-notes/tags/version"}],readingTime:2.24,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 5.1.4",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.9.8",permalink:"/zh/release-notes/2024/01/29/4.9.8"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 5.1.3",permalink:"/zh/release-notes/2023/06/24/5.1.3"}},n={authorsImageUrls:[]},c=[],h={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.yg)(m,(0,r.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{title:"Download the 5.1.4 release",type:"tip"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"Source: ",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/5.1.4/rocketmq-all-5.1.4-source-release.zip"},"rocketmq-all-5.1.4-source-release.zip")," [",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/5.1.4/rocketmq-all-5.1.4-source-release.zip.asc"},"PGP"),"] [",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/5.1.4/rocketmq-all-5.1.4-source-release.zip.sha512"},"SHA512"),"]"),(0,i.yg)("li",{parentName:"ul"},"Binary: ",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/5.1.4/rocketmq-all-5.1.4-bin-release.zip"},"rocketmq-all-5.1.4-bin-release.zip")," [",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/5.1.4/rocketmq-all-5.1.4-bin-release.zip.asc"},"PGP"),"] [",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/5.1.4/rocketmq-all-5.1.4-bin-release.zip.sha512"},"SHA512"),"]\n:::")),(0,i.yg)("p",{parentName:"admonition"},"Below is a summary of the issues addressed in the 5.1.4 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,i.yg)("a",{href:"/docs/quickStart/01quickstart/"},"Quick Start"),"."),(0,i.yg)("h2",{parentName:"admonition",id:"feature"},"Feature"),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"[ISSUE #3717][RIP-27]"," Auto batching in producer by @guyinyou in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/3718"},"https://github.com/apache/rocketmq/pull/3718")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7064][RIP-66-1]"," Support KV(RocksDB) Storage for Metadata by @fujian-zfj in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7092"},"https://github.com/apache/rocketmq/pull/7092")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #6567][RIP-63]"," Queue Selection Strategy Optimization by @GenerousMan in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/6568"},"https://github.com/apache/rocketmq/pull/6568"))),(0,i.yg)("h2",{parentName:"admonition",id:"bug"},"Bug"),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"[ISSUE #4612]"," Fix trace not complete by @panzhi33 in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/6941"},"https://github.com/apache/rocketmq/pull/6941")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #6810]"," Fix the bug of mistakenly deleting data in clientChannelTable when the channel expires by @zd46319 in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7073"},"https://github.com/apache/rocketmq/pull/7073")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7035]"," Fix correct min offset behavior in tiered storage by @lizhimins in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7038"},"https://github.com/apache/rocketmq/pull/7038")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7018]"," fix append in tiered storage when message offset incorrect by @lizhimins in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7019"},"https://github.com/apache/rocketmq/pull/7019")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7039]"," fix: fix retry message filter when subtype is TAG by @HScarb in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7040"},"https://github.com/apache/rocketmq/pull/7040")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7261]"," slave high CPU usage when enableScheduleAsyncDeliver=true by @yuz10 in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7262"},"https://github.com/apache/rocketmq/pull/7262")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7283]"," Incorrect dledger commitlog min offset after mappedFile re delete failed by @yuz10 in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7284"},"https://github.com/apache/rocketmq/pull/7284"))),(0,i.yg)("h2",{parentName:"admonition",id:"improvement"},"Improvement"),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"[ISSUE #6933]"," Support delete expired or damaged file in tiered storage and optimize fetch code by @lizhimins in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/6952"},"https://github.com/apache/rocketmq/pull/6952")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #6754]"," Support reentrant orderly consumption for proxy by @xdkxlk in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/6755"},"https://github.com/apache/rocketmq/pull/6755")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #6957]"," Support Proxy Protocol for gRPC and Remoting server by @dingshuangxi888 in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/6958"},"https://github.com/apache/rocketmq/pull/6958")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7052]"," Ensuring consistency between broker and nameserver data when deleting a topic by @RongtongJin in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7066"},"https://github.com/apache/rocketmq/pull/7066")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7074]"," Allow a BoundaryType to be specified when retrieving offset based on the timestamp by @Koado in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7082"},"https://github.com/apache/rocketmq/pull/7082")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7144]"," Accelerate the recovery speed of the tiered storage module by @lizhimins in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7145"},"https://github.com/apache/rocketmq/pull/7145")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7205]"," support batch ack for pop orderly by @xdkxlk in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7206"},"https://github.com/apache/rocketmq/pull/7206")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7289]"," Fixed asynchronous send backpressure capability by @guyinyou in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7290"},"https://github.com/apache/rocketmq/pull/7290")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7326]"," Split the request to register to the nameserver by @Ziy1-Tan in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7325"},"https://github.com/apache/rocketmq/pull/7325")),(0,i.yg)("li",{parentName:"ul"},"[ISSUE #7374]"," Prepare to release Apache RocketMQ 5.1.4 by @xdkxlk in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7375"},"https://github.com/apache/rocketmq/pull/7375"))),(0,i.yg)("h2",{parentName:"admonition",id:"new-contributors"},"New Contributors"),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"@yao-wenbin made their first contribution in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/6942"},"https://github.com/apache/rocketmq/pull/6942")),(0,i.yg)("li",{parentName:"ul"},"@leeyiyu made their first contribution in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/6883"},"https://github.com/apache/rocketmq/pull/6883")),(0,i.yg)("li",{parentName:"ul"},"@wuyoudexiao made their first contribution in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7078"},"https://github.com/apache/rocketmq/pull/7078")),(0,i.yg)("li",{parentName:"ul"},"@zd46319 made their first contribution in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7073"},"https://github.com/apache/rocketmq/pull/7073")),(0,i.yg)("li",{parentName:"ul"},"@AayushSaini101 made their first contribution in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7096"},"https://github.com/apache/rocketmq/pull/7096")),(0,i.yg)("li",{parentName:"ul"},"@weihubeats made their first contribution in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7084"},"https://github.com/apache/rocketmq/pull/7084")),(0,i.yg)("li",{parentName:"ul"},"@Koado made their first contribution in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7082"},"https://github.com/apache/rocketmq/pull/7082")),(0,i.yg)("li",{parentName:"ul"},"@haolinkong made their first contribution in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7106"},"https://github.com/apache/rocketmq/pull/7106")),(0,i.yg)("li",{parentName:"ul"},"@shirenchuang made their first contribution in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7157"},"https://github.com/apache/rocketmq/pull/7157")),(0,i.yg)("li",{parentName:"ul"},"@Ziy1-Tan made their first contribution in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7197"},"https://github.com/apache/rocketmq/pull/7197")),(0,i.yg)("li",{parentName:"ul"},"@iamgd67 made their first contribution in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/7150"},"https://github.com/apache/rocketmq/pull/7150"))),(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Full Changelog"),": ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/compare/rocketmq-all-5.1.3...rocketmq-all-5.1.4"},"https://github.com/apache/rocketmq/compare/rocketmq-all-5.1.3...rocketmq-all-5.1.4"))))}u.isMDXComponent=!0}}]);