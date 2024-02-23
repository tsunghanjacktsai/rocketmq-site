"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8192],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const o={},s="RocketMQ Streams Overview",i={unversionedId:"streams/01RocketMQ Streams Overview",id:"version-5.0/streams/01RocketMQ Streams Overview",title:"RocketMQ Streams Overview",description:"RocketMQ Streams is a lightweight stream computing engine based on RocketMQ. It can be applied as an SDK dependency without the need for deploying complex stream computing servers, making it resource-efficient, easily extensible, and rich in stream computing operators.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/09-streams/01RocketMQ Streams Overview.md",sourceDirName:"09-streams",slug:"/streams/01RocketMQ Streams Overview",permalink:"/docs/streams/01RocketMQ Streams Overview",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/09-streams/01RocketMQ Streams Overview.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"RocketMQ Connect in Action 5",permalink:"/docs/connect/08RocketMQ  Connect In Action5-ES"},next:{title:"RocketMQ Streams Core Concept",permalink:"/docs/streams/02RocketMQ Streams Concept"}},c={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Consume model",id:"consume-model",level:2},{value:"State",id:"state",level:2},{value:"Expansion/shrinkage capacity",id:"expansionshrinkage-capacity",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.yg)(u,(0,a.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"rocketmq-streams-overview"},"RocketMQ Streams Overview"),(0,r.yg)("p",null,"RocketMQ Streams is a lightweight stream computing engine based on RocketMQ. It can be applied as an SDK dependency without the need for deploying complex stream computing servers, making it resource-efficient, easily extensible, and rich in stream computing operators."),(0,r.yg)("h2",{id:"architecture"},"Architecture"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u603b\u4f53\u67b6\u6784",src:n(96066).A,width:"940",height:"656"})),(0,r.yg)("p",null,"Data is consumed from RocketMQ by RocketMQ-streams, processed, and ultimately written back to RocketMQ."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u603b\u4f53\u67b6\u6784",src:n(79001).A,width:"1770",height:"787"})),(0,r.yg)("p",null,"Data is consumed by the RocketMQ Consumer, enters the processing topology to be processed by operators. If the stream processing task contains the keyBy operator, the data needs to be grouped by Key and written to a shuffle topic. Subsequent operators consume from the shuffle topic. If there are also stateful operators such as count, the calculation requires reading and writing to the state topic. After the calculation is finished, the result is written back to RocketMQ."),(0,r.yg)("h2",{id:"consume-model"},"Consume model"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"img_2.png",src:n(23375).A,width:"1781",height:"1008"})),(0,r.yg)("p",null,"The calculation instances actually depend on the client of the Rocket-streams SDK. Therefore, the calculation instances consume MQ, dependent on the RocketMQ rebalance allocation. The total number of calculation instances cannot be greater than the total number of consuming MQ, otherwise, some calculation instances will be in a waiting state, unable to consume data."),(0,r.yg)("p",null,"One calculation instance can consume multiple MQs, and within one instance, there is only one calculation topology graph."),(0,r.yg)("h2",{id:"state"},"State"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"img_3.png",src:n(86995).A,width:"977",height:"1068"})),(0,r.yg)("p",null,"For stateful operators, such as count, grouping must be done first before summing. The grouping operator keyBy will re-write the data to RocketMQ based on the grouping key, and ensures that data with the same key is written to the same partition (this process is called shuffle), to ensure that data with the same key is consumed by the same consumer. The state is locally accelerated by RocksDB, and remotely persisted by RocketMQ."),(0,r.yg)("h2",{id:"expansionshrinkage-capacity"},"Expansion/shrinkage capacity"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"img.png",src:n(89774).A,width:"1952",height:"1025"})),(0,r.yg)("p",null,"When the calculation instances are reduced from 3 to 2, with the help of the rebalance function under the RocketMQ cluster consumption mode, the consumed MQ will be re-allocated among the calculation instances. The MQ2 and MQ3 consumed by Instance1 are allocated to Instance2 and Instance3, and the state data of these two MQs also needs to be migrated to Instance2 and Instance3. This also implies that the state data is saved according to the original data partition MQ; expansion is just the opposite process."))}d.isMDXComponent=!0},89774:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/scale-1b24d0731e3288382ce42624afe932d3.png"},86995:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/state-cdeb5a31134120b49cd60a94d0415b7d.png"},96066:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/\u603b\u4f53-1-83fd1dda4e3d43b6852f1805845b9a22.png"},79001:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/\u603b\u4f53-2-2890a8f2fef9eebee54da9edff1fdc94.png"},23375:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/\u6d88\u8d39\u6a21\u578b-d98dfe7e30b9762714b160f2e473cd74.png"}}]);