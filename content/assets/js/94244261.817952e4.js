"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9191],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>u});var a=r(96540);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,p=function(e,t){if(null==e)return{};var r,a,p={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},g=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=c(r),h=p,u=m["".concat(l,".").concat(h)]||m[h]||s[h]||i;return r?a.createElement(u,n(n({ref:t},g),{},{components:r})):a.createElement(u,n({ref:t},g))}));function u(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,n=new Array(i);n[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:p,n[1]=o;for(var c=2;c<i;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},44957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(58168),p=(r(96540),r(15680));const i={title:"Release Notes - Apache RocketMQ Spring - Version 2.3.0",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},n=void 0,o={permalink:"/release-notes/2024/02/19/release-notes-rocketmq-spring-2.3.0",source:"@site/release-notes/2024-02-19-release-notes-rocketmq-spring-2.3.0.md",title:"Release Notes - Apache RocketMQ Spring - Version 2.3.0",description:"* Source: rocketmq-spring-all-2.3.0-source-release.zip [PGP] [SHA512]",date:"2024-02-19T00:00:00.000Z",formattedDate:"February 19, 2024",tags:[{label:"RocketMQ_Spring",permalink:"/release-notes/tags/rocket-mq-spring"}],readingTime:2.41,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Spring - Version 2.3.0",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},nextItem:{title:"Release Notes - Apache RocketMQ - Version 5.2.0",permalink:"/release-notes/2024/01/30/5.2.0"}},l={authorsImageUrls:[]},c=[{value:"Feature",id:"feature",level:2},{value:"Bug",id:"bug",level:2},{value:"Improvement",id:"improvement",level:2},{value:"New Contributors",id:"new-contributors",level:2}],g={toc:c},m="wrapper";function s(e){let{components:t,...r}=e;return(0,p.yg)(m,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,p.yg)("admonition",{title:"Download",type:"tip"},(0,p.yg)("ul",{parentName:"admonition"},(0,p.yg)("li",{parentName:"ul"},"Source: ",(0,p.yg)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-spring/2.3.0/rocketmq-spring-rocketmq-spring-all-2.3.0.zip"},"rocketmq-spring-all-2.3.0-source-release.zip")," [",(0,p.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.3.0/rocketmq-spring-all-2.3.0-source-release.zip.asc"},"PGP"),"] [",(0,p.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.3.0/rocketmq-spring-rocketmq-spring-all-2.3.0.zip.sha512"},"SHA512"),"]"))),(0,p.yg)("p",null,"Below is a summary of the issues addressed in the version 2.3.0 release of RocketMQ Spring. For full documentation of the release, a guide to get started, please refer to ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-spring"},"Quick Start"),"."),(0,p.yg)("h2",{id:"feature"},"Feature"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},"[ISSUE #553]"," Integrate RocketMQ 5.0 gRPC client with Spring by @1294566108 in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/554"},"https://github.com/apache/rocketmq-spring/pull/554"))),(0,p.yg)("h2",{id:"bug"},"Bug"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},"[ISSUE #591]"," Fix bug when create rocketmq producer by @percyzhang in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/591"},"https://github.com/apache/rocketmq-spring/pull/591")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #610]"," Fix setRequestTimeout use Duration.ofDays by @panzhi33 in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/621"},"https://github.com/apache/rocketmq-spring/pull/621")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #625]"," Fix compile failed by @panzhi33 in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/624"},"https://github.com/apache/rocketmq-spring/pull/624")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #629]"," Exclude annotations-api to make spring-boot start normally by @RongtongJin in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/628"},"https://github.com/apache/rocketmq-spring/pull/628")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #619]",' Fix the issue of sending message "No route information of this topic: xxx" when the producer does not configure the namespace by @aoshiguchen in ',(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/619"},"https://github.com/apache/rocketmq-spring/pull/619"))),(0,p.yg)("h2",{id:"improvement"},"Improvement"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},"[ISSUE #530]"," Upgrade rocketmq client version to 5.1.0 by @mxsm in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/531"},"https://github.com/apache/rocketmq-spring/pull/531")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #562]"," Bump spring-boot-autoconfigure from 2.5.9 to 2.5.15 in /rocketmq-spring-boot-parent by @dependabot in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/562"},"https://github.com/apache/rocketmq-spring/pull/562")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #539]"," Support SpringBoot 3.x by @imp2002 in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/541"},"https://github.com/apache/rocketmq-spring/pull/541")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #546]",' Fix ConsumeMessageService#updateCorePoolSize" not support increase coreSize by @crzbird in ',(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/547"},"https://github.com/apache/rocketmq-spring/pull/547")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #551]"," Bump spring-core from 5.3.20 to 5.3.27 in /rocketmq-spring-boot-parent by @dependabot in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/551"},"https://github.com/apache/rocketmq-spring/pull/551")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #564]"," Modify the rules for license checker by @RongtongJin in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/563"},"https://github.com/apache/rocketmq-spring/pull/563")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #544]"," Prepare for next development iteration and fix some syntax errors by @rupertw in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/544"},"https://github.com/apache/rocketmq-spring/pull/544")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #572]"," Upgrade rocketmq SDK version to 5.1.3 by @RongtongJin in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/573"},"https://github.com/apache/rocketmq-spring/pull/573")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #575]"," Update application.properties by @Junior233 in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/575"},"https://github.com/apache/rocketmq-spring/pull/575")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #579]"," Bump org.springframework.boot:spring-boot-autoconfigure from 2.5.9 to 2.5.15 in /rocketmq-v5-client-spring-boot-parent by @dependabot in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/579"},"https://github.com/apache/rocketmq-spring/pull/579")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #600]"," Bump org.springframework.boot:spring-boot from 2.5.9 to 2.7.18 in /rocketmq-spring-boot-parent by @dependabot in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/600"},"https://github.com/apache/rocketmq-spring/pull/600")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #601]"," Bump org.springframework.boot:spring-boot from 2.5.15 to 2.7.18 in /rocketmq-v5-client-spring-boot-parent by @dependabot in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/601"},"https://github.com/apache/rocketmq-spring/pull/601")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #577]"," Bump org.springframework:spring-core from 5.3.20 to 5.3.27 in /rocketmq-v5-client-spring-boot-parent by @dependabot in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/577"},"https://github.com/apache/rocketmq-spring/pull/577")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #607]"," Bump jackson to 2.16.1 by @RongtongJin in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/606"},"https://github.com/apache/rocketmq-spring/pull/606")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #612]"," Support Springboot 3.X by @accjiyun in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/611"},"https://github.com/apache/rocketmq-spring/pull/611")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #617]"," Change handleMessage to public by @leizhiyuan in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/617"},"https://github.com/apache/rocketmq-spring/pull/617")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #536]"," ListenerContainerConfiguration should be an automatic assembler by @lanpf in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/537"},"https://github.com/apache/rocketmq-spring/pull/537")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #622]"," Add config enableSsl by @panzhi33 in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/623"},"https://github.com/apache/rocketmq-spring/pull/623")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #627]"," Make v5 sample logs to output normally by @RongtongJin in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/626"},"https://github.com/apache/rocketmq-spring/pull/626")),(0,p.yg)("li",{parentName:"ul"},"[ISSUE #631]"," Bump rocketmq version to 5.2.0 by @RongtongJin in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/630"},"https://github.com/apache/rocketmq-spring/pull/630"))),(0,p.yg)("h2",{id:"new-contributors"},"New Contributors"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},"@imp2002 made their first contribution in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/541"},"https://github.com/apache/rocketmq-spring/pull/541")),(0,p.yg)("li",{parentName:"ul"},"@crzbird made their first contribution in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/547"},"https://github.com/apache/rocketmq-spring/pull/547")),(0,p.yg)("li",{parentName:"ul"},"@rupertw made their first contribution in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/544"},"https://github.com/apache/rocketmq-spring/pull/544")),(0,p.yg)("li",{parentName:"ul"},"@Junior233 made their first contribution in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/575"},"https://github.com/apache/rocketmq-spring/pull/575")),(0,p.yg)("li",{parentName:"ul"},"@1294566108 made their first contribution in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/554"},"https://github.com/apache/rocketmq-spring/pull/554")),(0,p.yg)("li",{parentName:"ul"},"@accjiyun made their first contribution in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/611"},"https://github.com/apache/rocketmq-spring/pull/611")),(0,p.yg)("li",{parentName:"ul"},"@leizhiyuan made their first contribution in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/617"},"https://github.com/apache/rocketmq-spring/pull/617")),(0,p.yg)("li",{parentName:"ul"},"@percyzhang made their first contribution in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/591"},"https://github.com/apache/rocketmq-spring/pull/591")),(0,p.yg)("li",{parentName:"ul"},"@lanpf made their first contribution in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/537"},"https://github.com/apache/rocketmq-spring/pull/537")),(0,p.yg)("li",{parentName:"ul"},"@aoshiguchen made their first contribution in ",(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-spring/pull/619"},"https://github.com/apache/rocketmq-spring/pull/619"))),(0,p.yg)("p",null,(0,p.yg)("strong",{parentName:"p"},"Full Changelog"),": ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-spring/compare/rocketmq-spring-all-2.2.3...rocketmq-spring-all-2.3.0"},"https://github.com/apache/rocketmq-spring/compare/rocketmq-spring-all-2.2.3...rocketmq-spring-all-2.3.0")))}s.isMDXComponent=!0}}]);