"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3742],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>s});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=u(n),m=a,s=g["".concat(i,".").concat(m)]||g[m]||y[m]||l;return n?t.createElement(s,p(p({ref:r},c),{},{components:n})):t.createElement(s,p({ref:r},c))}));function s(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[g]="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21925:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=n(58168),a=(n(96540),n(15680));const l={},p="\u6d88\u8d39\u8005\u5206\u7ec4\uff08ConsumerGroup\uff09",o={unversionedId:"domainModel/07consumergroup",id:"version-5.0/domainModel/07consumergroup",title:"\u6d88\u8d39\u8005\u5206\u7ec4\uff08ConsumerGroup\uff09",description:"\u672c\u6587\u4ecb\u7ecd Apache RocketMQ \u4e2d\u6d88\u8d39\u8005\u5206\u7ec4\uff08ConsumerGroup\uff09\u7684\u5b9a\u4e49\u3001\u6a21\u578b\u5173\u7cfb\u3001\u5185\u90e8\u5c5e\u6027\u3001\u884c\u4e3a\u7ea6\u675f\u3001\u7248\u672c\u517c\u5bb9\u6027\u53ca\u4f7f\u7528\u5efa\u8bae\u3002",source:"@site/versioned_docs/version-5.0/03-domainModel/07consumergroup.md",sourceDirName:"03-domainModel",slug:"/domainModel/07consumergroup",permalink:"/zh/docs/domainModel/07consumergroup",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/03-domainModel/07consumergroup.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u751f\u4ea7\u8005\uff08Producer\uff09",permalink:"/zh/docs/domainModel/04producer"},next:{title:"\u6d88\u8d39\u8005\uff08Consumer\uff09",permalink:"/zh/docs/domainModel/08consumer"}},i={},u=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u6a21\u578b\u5173\u7cfb",id:"\u6a21\u578b\u5173\u7cfb",level:2},{value:"\u5185\u90e8\u5c5e\u6027",id:"\u5185\u90e8\u5c5e\u6027",level:2},{value:"\u884c\u4e3a\u7ea6\u675f",id:"\u884c\u4e3a\u7ea6\u675f",level:2},{value:"\u7248\u672c\u517c\u5bb9\u6027",id:"\u7248\u672c\u517c\u5bb9\u6027",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2}],c={toc:u},g="wrapper";function y(e){let{components:r,...l}=e;return(0,a.yg)(g,(0,t.A)({},c,l,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u6d88\u8d39\u8005\u5206\u7ec4consumergroup"},"\u6d88\u8d39\u8005\u5206\u7ec4\uff08ConsumerGroup\uff09"),(0,a.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd Apache RocketMQ \u4e2d\u6d88\u8d39\u8005\u5206\u7ec4\uff08ConsumerGroup\uff09\u7684\u5b9a\u4e49\u3001\u6a21\u578b\u5173\u7cfb\u3001\u5185\u90e8\u5c5e\u6027\u3001\u884c\u4e3a\u7ea6\u675f\u3001\u7248\u672c\u517c\u5bb9\u6027\u53ca\u4f7f\u7528\u5efa\u8bae\u3002"),(0,a.yg)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.yg)("p",null,"\u6d88\u8d39\u8005\u5206\u7ec4\u662f Apache RocketMQ \u7cfb\u7edf\u4e2d\u627f\u8f7d\u591a\u4e2a\u6d88\u8d39\u884c\u4e3a\u4e00\u81f4\u7684\u6d88\u8d39\u8005\u7684\u8d1f\u8f7d\u5747\u8861\u5206\u7ec4\u3002"),(0,a.yg)("p",null,"\u548c\u6d88\u8d39\u8005\u4e0d\u540c\uff0c\u6d88\u8d39\u8005\u5206\u7ec4\u5e76\u4e0d\u662f\u8fd0\u884c\u5b9e\u4f53\uff0c\u800c\u662f\u4e00\u4e2a\u903b\u8f91\u8d44\u6e90\u3002\u5728 Apache RocketMQ \u4e2d\uff0c\u901a\u8fc7\u6d88\u8d39\u8005\u5206\u7ec4\u5185\u521d\u59cb\u5316\u591a\u4e2a\u6d88\u8d39\u8005\u5b9e\u73b0\u6d88\u8d39\u6027\u80fd\u7684\u6c34\u5e73\u6269\u5c55\u4ee5\u53ca\u9ad8\u53ef\u7528\u5bb9\u707e\u3002"),(0,a.yg)("p",null,"\u5728\u6d88\u8d39\u8005\u5206\u7ec4\u4e2d\uff0c\u7edf\u4e00\u5b9a\u4e49\u4ee5\u4e0b\u6d88\u8d39\u884c\u4e3a\uff0c\u540c\u4e00\u5206\u7ec4\u4e0b\u7684\u591a\u4e2a\u6d88\u8d39\u8005\u5c06\u6309\u7167\u5206\u7ec4\u5185\u7edf\u4e00\u7684\u6d88\u8d39\u884c\u4e3a\u548c\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u6d88\u8d39\u6d88\u606f\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u8ba2\u9605\u5173\u7cfb\uff1aApache RocketMQ \u4ee5\u6d88\u8d39\u8005\u5206\u7ec4\u7684\u7c92\u5ea6\u7ba1\u7406\u8ba2\u9605\u5173\u7cfb\uff0c\u5b9e\u73b0\u8ba2\u9605\u5173\u7cfb\u7684\u7ba1\u7406\u548c\u8ffd\u6eaf\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/domainModel/09subscription"},"\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6295\u9012\u987a\u5e8f\u6027\uff1aApache RocketMQ \u7684\u670d\u52a1\u7aef\u5c06\u6d88\u606f\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u6d88\u8d39\u65f6\uff0c\u652f\u6301\u987a\u5e8f\u6295\u9012\u548c\u5e76\u53d1\u6295\u9012\uff0c\u6295\u9012\u65b9\u5f0f\u5728\u6d88\u8d39\u8005\u5206\u7ec4\u4e2d\u7edf\u4e00\u914d\u7f6e\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/03fifomessage"},"\u987a\u5e8f\u6d88\u606f"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\uff1a \u6d88\u8d39\u8005\u6d88\u8d39\u6d88\u606f\u5931\u8d25\u65f6\u7684\u91cd\u8bd5\u7b56\u7565\uff0c\u5305\u62ec\u91cd\u8bd5\u6b21\u6570\u3001\u6b7b\u4fe1\u961f\u5217\u8bbe\u7f6e\u7b49\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/10consumerretrypolicy"},"\u6d88\u8d39\u91cd\u8bd5"),"\u3002"))),(0,a.yg)("h2",{id:"\u6a21\u578b\u5173\u7cfb"},"\u6a21\u578b\u5173\u7cfb"),(0,a.yg)("p",null,"\u5728 Apache RocketMQ \u7684\u9886\u57df\u6a21\u578b\u4e2d\uff0c\u6d88\u8d39\u8005\u5206\u7ec4\u7684\u4f4d\u7f6e\u548c\u6d41\u7a0b\u5982\u4e0b\uff1a",(0,a.yg)("img",{alt:"\u6d88\u8d39\u7ec4",src:n(58304).A,width:"1977",height:"877"})),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6d88\u606f\u7531\u751f\u4ea7\u8005\u521d\u59cb\u5316\u5e76\u53d1\u9001\u5230Apache RocketMQ \u670d\u52a1\u7aef\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6d88\u606f\u6309\u7167\u5230\u8fbeApache RocketMQ \u670d\u52a1\u7aef\u7684\u987a\u5e8f\u5b58\u50a8\u5230\u4e3b\u9898\u7684\u6307\u5b9a\u961f\u5217\u4e2d\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6d88\u8d39\u8005\u6309\u7167\u6307\u5b9a\u7684\u8ba2\u9605\u5173\u7cfb\u4eceApache RocketMQ \u670d\u52a1\u7aef\u4e2d\u83b7\u53d6\u6d88\u606f\u5e76\u6d88\u8d39\u3002"))),(0,a.yg)("h2",{id:"\u5185\u90e8\u5c5e\u6027"},"\u5185\u90e8\u5c5e\u6027"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6d88\u8d39\u8005\u5206\u7ec4\u540d\u79f0")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5b9a\u4e49\uff1a\u6d88\u8d39\u8005\u5206\u7ec4\u7684\u540d\u79f0\uff0c\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7684\u6d88\u8d39\u8005\u5206\u7ec4\u3002\u96c6\u7fa4\u5185\u5168\u5c40\u552f\u4e00\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u53d6\u503c\uff1a\u6d88\u8d39\u8005\u5206\u7ec4\u7531\u7528\u6237\u8bbe\u7f6e\u5e76\u521b\u5efa\u3002\u5177\u4f53\u547d\u540d\u89c4\u8303\uff0c\u8bf7\u53c2\u89c1",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/introduction/03limits"},"\u53c2\u6570\u9650\u5236"),"\u3002"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6295\u9012\u987a\u5e8f\u6027")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5b9a\u4e49\uff1a\u6d88\u8d39\u8005\u6d88\u8d39\u6d88\u606f\u65f6\uff0cApache RocketMQ \u5411\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u6295\u9012\u6d88\u606f\u7684\u987a\u5e8f\u3002"),(0,a.yg)("p",{parentName:"li"},"\u6839\u636e\u4e0d\u540c\u7684\u6d88\u8d39\u573a\u666f\uff0cApache RocketMQ \u63d0\u4f9b\u987a\u5e8f\u6295\u9012\u548c\u5e76\u53d1\u6295\u9012\u4e24\u79cd\u65b9\u5f0f\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/03fifomessage"},"\u987a\u5e8f\u6d88\u606f"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u53d6\u503c\uff1a\u9ed8\u8ba4\u6295\u9012\u65b9\u5f0f\u4e3a\u5e76\u53d1\u6295\u9012\u3002"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5b9a\u4e49\uff1a\u6d88\u8d39\u8005\u6d88\u8d39\u6d88\u606f\u5931\u8d25\u65f6\uff0c\u7cfb\u7edf\u7684\u91cd\u8bd5\u7b56\u7565\u3002\u6d88\u8d39\u8005\u6d88\u8d39\u6d88\u606f\u5931\u8d25\u65f6\uff0c\u7cfb\u7edf\u4f1a\u6309\u7167\u91cd\u8bd5\u7b56\u7565\uff0c\u5c06\u6307\u5b9a\u6d88\u606f\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u91cd\u65b0\u6d88\u8d39\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/10consumerretrypolicy"},"\u6d88\u8d39\u91cd\u8bd5"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u53d6\u503c\uff1a\u91cd\u8bd5\u7b56\u7565\u5305\u62ec\uff1a"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff1a\u8868\u793a\u6d88\u606f\u53ef\u4ee5\u91cd\u65b0\u88ab\u6295\u9012\u7684\u6700\u5927\u6b21\u6570\uff0c\u8d85\u8fc7\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u8fd8\u6ca1\u88ab\u6210\u529f\u6d88\u8d39\uff0c\u6d88\u606f\u5c06\u88ab\u6295\u9012\u81f3\u6b7b\u4fe1\u961f\u5217\u6216\u4e22\u5f03\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u91cd\u8bd5\u95f4\u9694\uff1aApache RocketMQ \u670d\u52a1\u7aef\u91cd\u65b0\u6295\u9012\u6d88\u606f\u7684\u95f4\u9694\u65f6\u95f4\u3002 \u6700\u5927\u91cd\u8bd5\u6b21\u6570\u548c\u91cd\u8bd5\u95f4\u9694\u7684\u53d6\u503c\u8303\u56f4\u53ca\u9ed8\u8ba4\u503c\uff0c\u8bf7\u53c2\u89c1",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/introduction/03limits"},"\u53c2\u6570\u9650\u5236"),"\u3002")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u7ea6\u675f\uff1a\u91cd\u8bd5\u95f4\u9694\u4ec5\u5728PushConsumer\u6d88\u8d39\u7c7b\u578b\u4e0b\u6709\u6548\u3002"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u8ba2\u9605\u5173\u7cfb")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5b9a\u4e49\uff1a\u5f53\u524d\u6d88\u8d39\u8005\u5206\u7ec4\u5173\u8054\u7684\u8ba2\u9605\u5173\u7cfb\u96c6\u5408\u3002\u5305\u62ec\u6d88\u8d39\u8005\u8ba2\u9605\u7684\u4e3b\u9898\uff0c\u4ee5\u53ca\u6d88\u606f\u7684\u8fc7\u6ee4\u89c4\u5219\u7b49\u3002\u8ba2\u9605\u5173\u7cfb\u7531\u6d88\u8d39\u8005\u52a8\u6001\u6ce8\u518c\u5230\u6d88\u8d39\u8005\u5206\u7ec4\u4e2d\uff0cApache RocketMQ \u670d\u52a1\u7aef\u4f1a\u6301\u4e45\u5316\u8ba2\u9605\u5173\u7cfb\u5e76\u5339\u914d\u6d88\u606f\u7684\u6d88\u8d39\u8fdb\u5ea6\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,a.yg)("a",{parentName:"li",href:"/zh/docs/domainModel/09subscription"},"\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09"),"\u3002")),(0,a.yg)("h2",{id:"\u884c\u4e3a\u7ea6\u675f"},"\u884c\u4e3a\u7ea6\u675f"),(0,a.yg)("p",null,"\u5728 Apache RocketMQ \u9886\u57df\u6a21\u578b\u4e2d\uff0c\u6d88\u8d39\u8005\u7684\u7ba1\u7406\u901a\u8fc7\u6d88\u8d39\u8005\u5206\u7ec4\u5b9e\u73b0\uff0c\u540c\u4e00\u5206\u7ec4\u5185\u7684\u6d88\u8d39\u8005\u5171\u540c\u5206\u644a\u6d88\u606f\u8fdb\u884c\u6d88\u8d39\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u5206\u7ec4\u5185\u6d88\u606f\u7684\u6b63\u5e38\u8d1f\u8f7d\u548c\u6d88\u8d39\uff0c"),(0,a.yg)("p",null,"Apache RocketMQ \u8981\u6c42\u540c\u4e00\u5206\u7ec4\u4e0b\u7684\u6240\u6709\u6d88\u8d39\u8005\u4ee5\u4e0b\u6d88\u8d39\u884c\u4e3a\u4fdd\u6301\u4e00\u81f4\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6295\u9012\u987a\u5e8f")," ")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565")," "))),(0,a.yg)("h2",{id:"\u7248\u672c\u517c\u5bb9\u6027"},"\u7248\u672c\u517c\u5bb9\u6027"),(0,a.yg)("p",null,"\u5982\u884c\u4e3a\u7ea6\u675f\u4e2d\u6240\u8ff0\uff0c\u540c\u4e00\u5206\u7ec4\u5185\u6240\u6709\u6d88\u8d39\u8005\u7684\u6295\u9012\u987a\u5e8f\u548c\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\u9700\u8981\u4fdd\u6301\u4e00\u81f4\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Apache RocketMQ \u670d\u52a1\u7aef5.x\u7248\u672c\uff1a\u4e0a\u8ff0\u6d88\u8d39\u8005\u7684\u6d88\u8d39\u884c\u4e3a\u4ece\u5173\u8054\u7684\u6d88\u8d39\u8005\u5206\u7ec4\u4e2d\u7edf\u4e00\u83b7\u53d6\uff0c\u56e0\u6b64\uff0c\u540c\u4e00\u5206\u7ec4\u5185\u6240\u6709\u6d88\u8d39\u8005\u7684\u6d88\u8d39\u884c\u4e3a\u5fc5\u7136\u662f\u4e00\u81f4\u7684\uff0c\u5ba2\u6237\u7aef\u65e0\u9700\u5173\u6ce8\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Apache RocketMQ \u670d\u52a1\u7aef3.x/4.x\u5386\u53f2\u7248\u672c\uff1a\u4e0a\u8ff0\u6d88\u8d39\u903b\u8f91\u7531\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u63a5\u53e3\u5b9a\u4e49\uff0c\u56e0\u6b64\uff0c\u60a8\u9700\u8981\u81ea\u5df1\u5728\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u8bbe\u7f6e\u65f6\u4fdd\u8bc1\u540c\u4e00\u5206\u7ec4\u4e0b\u7684\u6d88\u8d39\u8005\u7684\u6d88\u8d39\u884c\u4e3a\u4e00\u81f4\u3002"))),(0,a.yg)("p",null,"\u82e5\u60a8\u4f7f\u7528 Apache RocketMQ \u670d\u52a1\u7aef5.x\u7248\u672c\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528\u5386\u53f2\u7248\u672cSDK\uff0c\u5219\u6d88\u8d39\u8005\u7684\u6d88\u8d39\u903b\u8f91\u4ee5\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u63a5\u53e3\u7684\u8bbe\u7f6e\u4e3a\u51c6\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6309\u7167\u4e1a\u52a1\u5408\u7406\u62c6\u5206\u5206\u7ec4")),(0,a.yg)("p",null,"Apache RocketMQ \u7684\u6d88\u8d39\u8005\u548c\u4e3b\u9898\u662f\u591a\u5bf9\u591a\u7684\u5173\u7cfb\uff0c\u5bf9\u4e8e\u6d88\u8d39\u8005\u5206\u7ec4\u7684\u62c6\u5206\u8bbe\u8ba1\uff0c\u5efa\u8bae\u9075\u5faa\u4ee5\u4e0b\u539f\u5219\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6d88\u8d39\u8005\u7684\u6295\u9012\u987a\u5e8f\u4e00\u81f4\uff1a\u540c\u4e00\u6d88\u8d39\u8005\u5206\u7ec4\u4e0b\u6240\u6709\u6d88\u8d39\u8005\u7684\u6d88\u8d39\u6295\u9012\u987a\u5e8f\u662f\u76f8\u540c\u7684\uff0c\u7edf\u4e00\u90fd\u662f\u987a\u5e8f\u6295\u9012\u6216\u5e76\u53d1\u6295\u9012\uff0c\u4e0d\u540c\u4e1a\u52a1\u573a\u666f\u4e0d\u80fd\u6df7\u7528\u6d88\u8d39\u8005\u5206\u7ec4\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6d88\u8d39\u8005\u4e1a\u52a1\u7c7b\u578b\u4e00\u81f4\uff1a\u4e00\u822c\u6d88\u8d39\u8005\u5206\u7ec4\u548c\u4e3b\u9898\u5bf9\u5e94\uff0c\u4e0d\u540c\u4e1a\u52a1\u57df\u5bf9\u6d88\u606f\u6d88\u8d39\u7684\u8981\u6c42\u4e0d\u540c\uff0c\u4f8b\u5982\u6d88\u606f\u8fc7\u6ee4\u5c5e\u6027\u3001\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\u4e0d\u540c\u3002\u56e0\u6b64\uff0c\u4e0d\u540c\u4e1a\u52a1\u57df\u4e3b\u9898\u7684\u6d88\u8d39\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684\u6d88\u8d39\u8005\u5206\u7ec4\uff0c\u907f\u514d\u4e00\u4e2a\u6d88\u8d39\u8005\u5206\u7ec4\u6d88\u8d39\u8d85\u8fc710\u4e2a\u4e3b\u9898\u3002"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6d88\u8d39\u8005\u5206\u7ec4\u7ba1\u7406\u5c3d\u91cf\u907f\u514d\u81ea\u52a8\u5316\u673a\u5236")),(0,a.yg)("p",null,"\u5728 Apache RocketMQ \u67b6\u6784\u4e2d\uff0c\u6d88\u8d39\u5206\u7ec4\u5c5e\u4e8e\u72b6\u6001\u7ba1\u7406\u7c7b\u7684\u903b\u8f91\u8d44\u6e90\uff0c\u6bcf\u4e2a\u6d88\u8d39\u5206\u7ec4\u90fd\u4f1a\u6d89\u53ca\u5173\u8054\u7684\u6d88\u8d39\u72b6\u6001\u3001\u5806\u79ef\u4fe1\u606f\u3001\u53ef\u89c2\u6d4b\u6307\u6807\u548c\u76d1\u63a7\u91c7\u96c6\u6570\u636e\u3002\u56e0\u6b64\uff0c\u751f\u4ea7\u73af\u5883\u9700\u8981\u4e25\u683c\u7ba1\u7406\u6d88\u8d39\u8005\u5206\u7ec4\u8d44\u6e90\uff0c\u8bf7\u52ff\u968f\u610f\u8fdb\u884c\u589e\u3001\u5220\u3001\u6539\u3001\u67e5\u64cd\u4f5c\u3002"),(0,a.yg)("p",null,"Apache RocketMQ \u867d\u7136\u63d0\u4f9b\u4e86\u81ea\u52a8\u521b\u5efa\u6d88\u8d39\u8005\u5206\u7ec4\u7684\u529f\u80fd\uff0c\u4f46\u662f\u5efa\u8bae\u4ec5\u5728\u6d4b\u8bd5\u73af\u5883\u4f7f\u7528\uff0c\u751f\u4ea7\u73af\u5883\u8bf7\u52ff\u6253\u5f00\uff0c\u907f\u514d\u4ea7\u751f\u5927\u91cf\u6d88\u8d39\u8005\u5206\u7ec4\uff0c\u65e0\u6cd5\u7ba1\u7406\u548c\u56de\u6536\uff0c\u4e14\u6d6a\u8d39\u7cfb\u7edf\u8d44\u6e90\u3002"))}y.isMDXComponent=!0},58304:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/archiforconsumergroup-9d98f4f7fc0302aa2363454a552477d9.png"}}]);