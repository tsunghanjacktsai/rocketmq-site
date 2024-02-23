"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5383],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var n=a.createContext({}),c=function(e){var t=a.useContext(n),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(n.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,n=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,g=p["".concat(n,".").concat(h)]||p[h]||m[h]||s;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=h;var l={};for(var n in t)hasOwnProperty.call(t,n)&&(l[n]=t[n]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},78970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(58168),o=(r(96540),r(15680));const s={title:"Release Notes - Apache RocketMQ - Version 4.9.2",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},i=void 0,l={permalink:"/release-notes/2021/10/26/4.9.2",source:"@site/release-notes/2021-10-26-4.9.2.md",title:"Release Notes - Apache RocketMQ - Version 4.9.2",description:"* Source: rocketmq-all-4.9.2-source-release.zip [PGP] [SHA512]",date:"2021-10-26T00:00:00.000Z",formattedDate:"October 26, 2021",tags:[{label:"Release_Notes",permalink:"/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/release-notes/tags/version"}],readingTime:1.815,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.9.2",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ Streams - Version 1.0.0-preview",permalink:"/release-notes/2022/01/18/release-notes-rocketmq-streams-1.0.0-preview"},nextItem:{title:"Release Notes - Apache RocketMQ Dashboard - Version 1.0.0",permalink:"/release-notes/2021/09/23/release-notes-rocketmq-dashboard-1.0.0"}},n={authorsImageUrls:[]},c=[{value:"Feature",id:"feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"Download the 4.9.2 release    ",type:"tip"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"Source: ",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.2/rocketmq-all-4.9.2-source-release.zip"},"rocketmq-all-4.9.2-source-release.zip")," [",(0,o.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.2/rocketmq-all-4.9.2-source-release.zip.asc"},"PGP"),"] [",(0,o.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.2/rocketmq-all-4.9.2-source-release.zip.sha512"},"SHA512"),"]"),(0,o.yg)("li",{parentName:"ul"},"Binary: ",(0,o.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.2/rocketmq-all-4.9.2-bin-release.zip"},"rocketmq-all-4.9.2-bin-release.zip")," [",(0,o.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.2/rocketmq-all-4.9.2-bin-release.zip.asc"},"PGP"),"] [",(0,o.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.2/rocketmq-all-4.9.2-bin-release.zip.sha512"},"SHA512"),"]"))),(0,o.yg)("p",null,"Below is a summary of the issues addressed in the 4.9.2 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,o.yg)("a",{href:"/docs/quickStart/01quickstart/"},"Quick Start"),"."),(0,o.yg)("h2",{id:"feature"},"Feature"),(0,o.yg)("ul",null,(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/wiki/RIP-7-Multiple-Directories-Storage-Support"},"RIP-7"),"] - Multiple Directories Storage Support")),(0,o.yg)("h2",{id:"improvement"},"Improvement"),(0,o.yg)("ul",null,(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2964"},"ISSUE-2964"),"] - Add a query consumer config command in mqadmin."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3148"},"ISSUE-3148"),"] - Support metadata export"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3194"},"ISSUE-3194"),"] - [PART A] Use LongAdder instead of AtomicLong in BrokerStatsService to improve performance."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3194"},"ISSUE-3194"),"] - [PART C] Replace AtomicLong with LongAdder in StatsItem.java to improve performance"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3347"},"ISSUE-3347"),"] - Improve performance of expandIP, and readable"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3346"},"ISSUE-3346"),"] - Avoid double parse remoteAddr in rpcHook call"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3136"},"ISSUE-3136"),"] - TraceDataEncoder add SubAfter trace bean timestamp"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3245"},"ISSUE-3245"),"] - Use df algorithm to calculate the disk used ratio"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3384"},"ISSUE-3384"),"] - Add SendBack message to SCHEDULE_TOPIC_XXXX stats"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3375"},"ISSUE-3375"),"] - Lazy init GetMessageResult only when find message."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3361"},"ISSUE-3361"),"] - DefaultMQProducer's constructor can call the overloaded constructor."),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2724"},"ISSUE-2724"),"] - Resend message to DLQ directly when max reconsume times reach"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3314"},"ISSUE-3314"),"] - Make mqClientApi request timeout settable"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3296"},"ISSUE-3296"),"] - Add get stats and single queue stats for schedule topic"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3308"},"ISSUE-3308"),"] - Production level pull api demo"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3284"},"ISSUE-3284"),"] - Optimizing benchmark code"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3215"},"ISSUE-3215"),"] - Polish litePullConsumer seek logic #3216"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3225"},"ISSUE-3225"),"] - Change Random to ThreadLocalRandom in broker"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2962"},"ISSUE-2962"),"] - Implement DefaultMQAdminExt::examineTopicConfig function"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2726"},"ISSUE-2726"),"] - Retrying by customizing response code"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2436"},"ISSUE-2436"),"] - DLQ topic default perm change"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1848"},"ISSUE-1848"),"] - Add write perm admin command "),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3333"},"ISSUE-3333"),"] - Remove commons-codes dependency"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/pull/3335"},"ISSUE-NONE"),"] - Update rocketmq client maven version ")),(0,o.yg)("h2",{id:"bug"},"Bug"),(0,o.yg)("ul",null,(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/503"},"ISSUE-503"),"] - NOT_CONSUME_YET not right in RocketMQ Console"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2667"},"ISSUE-2667"),"] - Repair file doesn't exist on this path'"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3281"},"ISSUE-3281"),"] - Fix fail to delete topic perm list and global white address(#3128)"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3326"},"ISSUE-3326"),"] - Fix send trace fail if broker set tls.server.mode=enforcing"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3288"},"ISSUE-3288"),"] - Fix producer always timeouts while sending first message"),(0,o.yg)("li",null,"[",(0,o.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1869"},"ISSUE-1869"),"] - Delay message can't be consumed when delay offset in delayOffset.json is wrong")))}m.isMDXComponent=!0}}]);