"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4234],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,h=p["".concat(i,".").concat(d)]||p[d]||g[d]||a;return r?o.createElement(h,c(c({ref:t},u),{},{components:r})):o.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(58168),n=(r(96540),r(15680));const a={},c="\u57fa\u672c\u6982\u5ff5",s={unversionedId:"introduction/02concepts",id:"version-5.0/introduction/02concepts",title:"\u57fa\u672c\u6982\u5ff5",description:"\u672c\u6587\u4ecb\u7ecd Apache RocketMQ \u7684\u57fa\u672c\u6982\u5ff5\uff0c\u4ee5\u4fbf\u60a8\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f7f\u7528 Apache RocketMQ \u3002",source:"@site/versioned_docs/version-5.0/01-introduction/02concepts.md",sourceDirName:"01-introduction",slug:"/introduction/02concepts",permalink:"/zh/docs/introduction/02concepts",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/01-introduction/02concepts.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u4e3a\u4ec0\u4e48\u9009\u62e9RocketMQ",permalink:"/zh/docs/"},next:{title:"\u53c2\u6570\u7ea6\u675f\u548c\u5efa\u8bae",permalink:"/zh/docs/introduction/03limits"}},i={},l=[{value:"\u4e3b\u9898\uff08Topic\uff09",id:"\u4e3b\u9898topic",level:2},{value:"\u6d88\u606f\u7c7b\u578b\uff08MessageType\uff09",id:"\u6d88\u606f\u7c7b\u578bmessagetype",level:2},{value:"\u6d88\u606f\u961f\u5217\uff08MessageQueue\uff09",id:"\u6d88\u606f\u961f\u5217messagequeue",level:2},{value:"\u6d88\u606f\uff08Message\uff09",id:"\u6d88\u606fmessage",level:2},{value:"\u6d88\u606f\u89c6\u56fe\uff08MessageView\uff09",id:"\u6d88\u606f\u89c6\u56femessageview",level:2},{value:"\u6d88\u606f\u6807\u7b7e\uff08MessageTag\uff09",id:"\u6d88\u606f\u6807\u7b7emessagetag",level:2},{value:"\u6d88\u606f\u4f4d\u70b9\uff08MessageQueueOffset\uff09",id:"\u6d88\u606f\u4f4d\u70b9messagequeueoffset",level:2},{value:"\u6d88\u8d39\u4f4d\u70b9\uff08ConsumerOffset\uff09",id:"\u6d88\u8d39\u4f4d\u70b9consumeroffset",level:2},{value:"\u6d88\u606f\u7d22\u5f15\uff08MessageKey\uff09",id:"\u6d88\u606f\u7d22\u5f15messagekey",level:2},{value:"\u751f\u4ea7\u8005\uff08Producer\uff09",id:"\u751f\u4ea7\u8005producer",level:2},{value:"\u4e8b\u52a1\u68c0\u67e5\u5668\uff08TransactionChecker\uff09",id:"\u4e8b\u52a1\u68c0\u67e5\u5668transactionchecker",level:2},{value:"\u4e8b\u52a1\u72b6\u6001\uff08TransactionResolution\uff09",id:"\u4e8b\u52a1\u72b6\u6001transactionresolution",level:2},{value:"\u6d88\u8d39\u8005\u5206\u7ec4\uff08ConsumerGroup\uff09",id:"\u6d88\u8d39\u8005\u5206\u7ec4consumergroup",level:2},{value:"\u6d88\u8d39\u8005\uff08Consumer\uff09",id:"\u6d88\u8d39\u8005consumer",level:2},{value:"\u6d88\u8d39\u7ed3\u679c\uff08ConsumeResult\uff09",id:"\u6d88\u8d39\u7ed3\u679cconsumeresult",level:2},{value:"\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09",id:"\u8ba2\u9605\u5173\u7cfbsubscription",level:2},{value:"\u6d88\u606f\u8fc7\u6ee4",id:"\u6d88\u606f\u8fc7\u6ee4",level:2},{value:"\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9",id:"\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9",level:2},{value:"\u6d88\u606f\u8f68\u8ff9",id:"\u6d88\u606f\u8f68\u8ff9",level:2},{value:"\u6d88\u606f\u5806\u79ef",id:"\u6d88\u606f\u5806\u79ef",level:2},{value:"\u4e8b\u52a1\u6d88\u606f",id:"\u4e8b\u52a1\u6d88\u606f",level:2},{value:"\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f",id:"\u5b9a\u65f6\u5ef6\u65f6\u6d88\u606f",level:2},{value:"\u987a\u5e8f\u6d88\u606f",id:"\u987a\u5e8f\u6d88\u606f",level:2}],u={toc:l},p="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,o.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,n.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd Apache RocketMQ \u7684\u57fa\u672c\u6982\u5ff5\uff0c\u4ee5\u4fbf\u60a8\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f7f\u7528 Apache RocketMQ \u3002"),(0,n.yg)("h2",{id:"\u4e3b\u9898topic"},"\u4e3b\u9898\uff08Topic\uff09"),(0,n.yg)("p",null,"Apache RocketMQ \u4e2d\u6d88\u606f\u4f20\u8f93\u548c\u5b58\u50a8\u7684\u9876\u5c42\u5bb9\u5668\uff0c\u7528\u4e8e\u6807\u8bc6\u540c\u4e00\u7c7b\u4e1a\u52a1\u903b\u8f91\u7684\u6d88\u606f\u3002\u4e3b\u9898\u901a\u8fc7TopicName\u6765\u505a\u552f\u4e00\u6807\u8bc6\u548c\u533a\u5206\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/domainModel/02topic"},"\u4e3b\u9898\uff08Topic\uff09"),"\u3002"),(0,n.yg)("h2",{id:"\u6d88\u606f\u7c7b\u578bmessagetype"},"\u6d88\u606f\u7c7b\u578b\uff08MessageType\uff09"),(0,n.yg)("p",null,"Apache RocketMQ \u4e2d\u6309\u7167\u6d88\u606f\u4f20\u8f93\u7279\u6027\u7684\u4e0d\u540c\u800c\u5b9a\u4e49\u7684\u5206\u7c7b\uff0c\u7528\u4e8e\u7c7b\u578b\u7ba1\u7406\u548c\u5b89\u5168\u6821\u9a8c\u3002 Apache RocketMQ \u652f\u6301\u7684\u6d88\u606f\u7c7b\u578b\u6709\u666e\u901a\u6d88\u606f\u3001\u987a\u5e8f\u6d88\u606f\u3001\u4e8b\u52a1\u6d88\u606f\u548c\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f\u3002"),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Apache RocketMQ \u4ece5.0\u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5f3a\u5236\u6821\u9a8c\u6d88\u606f\u7c7b\u578b\uff0c\u5373\u6bcf\u4e2a\u4e3b\u9898Topic\u53ea\u5141\u8bb8\u53d1\u9001\u4e00\u79cd\u6d88\u606f\u7c7b\u578b\u7684\u6d88\u606f\uff0c\u8fd9\u6837\u53ef\u4ee5\u66f4\u597d\u7684\u8fd0\u7ef4\u548c\u7ba1\u7406\u751f\u4ea7\u7cfb\u7edf\uff0c\u907f\u514d\u6df7\u4e71\u3002\u4f46\u540c\u65f6\u4fdd\u8bc1\u5411\u4e0b\u517c\u5bb94.x\u7248\u672c\u884c\u4e3a\uff0c\u5f3a\u5236\u6821\u9a8c\u529f\u80fd\u9ed8\u8ba4\u5f00\u542f\u3002")),(0,n.yg)("h2",{id:"\u6d88\u606f\u961f\u5217messagequeue"},"\u6d88\u606f\u961f\u5217\uff08MessageQueue\uff09"),(0,n.yg)("p",null,"\u961f\u5217\u662f Apache RocketMQ \u4e2d\u6d88\u606f\u5b58\u50a8\u548c\u4f20\u8f93\u7684\u5b9e\u9645\u5bb9\u5668\uff0c\u4e5f\u662f\u6d88\u606f\u7684\u6700\u5c0f\u5b58\u50a8\u5355\u5143\u3002 Apache RocketMQ \u7684\u6240\u6709\u4e3b\u9898\u90fd\u662f\u7531\u591a\u4e2a\u961f\u5217\u7ec4\u6210\uff0c\u4ee5\u6b64\u5b9e\u73b0\u961f\u5217\u6570\u91cf\u7684\u6c34\u5e73\u62c6\u5206\u548c\u961f\u5217\u5185\u90e8\u7684\u6d41\u5f0f\u5b58\u50a8\u3002\u961f\u5217\u901a\u8fc7QueueId\u6765\u505a\u552f\u4e00\u6807\u8bc6\u548c\u533a\u5206\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/domainModel/03messagequeue"},"\u961f\u5217\uff08MessageQueue\uff09"),"\u3002"),(0,n.yg)("h2",{id:"\u6d88\u606fmessage"},"\u6d88\u606f\uff08Message\uff09"),(0,n.yg)("p",null,"\u6d88\u606f\u662f Apache RocketMQ \u4e2d\u7684\u6700\u5c0f\u6570\u636e\u4f20\u8f93\u5355\u5143\u3002\u751f\u4ea7\u8005\u5c06\u4e1a\u52a1\u6570\u636e\u7684\u8d1f\u8f7d\u548c\u62d3\u5c55\u5c5e\u6027\u5305\u88c5\u6210\u6d88\u606f\u53d1\u9001\u5230\u670d\u52a1\u7aef\uff0c\u670d\u52a1\u7aef\u6309\u7167\u76f8\u5173\u8bed\u4e49\u5c06\u6d88\u606f\u6295\u9012\u5230\u6d88\u8d39\u7aef\u8fdb\u884c\u6d88\u8d39\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/domainModel/04message"},"\u6d88\u606f\uff08Message\uff09"),"\u3002"),(0,n.yg)("h2",{id:"\u6d88\u606f\u89c6\u56femessageview"},"\u6d88\u606f\u89c6\u56fe\uff08MessageView\uff09"),(0,n.yg)("p",null,"\u6d88\u606f\u89c6\u56fe\u662f Apache RocketMQ \u9762\u5411\u5f00\u53d1\u89c6\u89d2\u63d0\u4f9b\u7684\u4e00\u79cd\u6d88\u606f\u53ea\u8bfb\u63a5\u53e3\u3002\u901a\u8fc7\u6d88\u606f\u89c6\u56fe\u53ef\u4ee5\u8bfb\u53d6\u6d88\u606f\u5185\u90e8\u7684\u591a\u4e2a\u5c5e\u6027\u548c\u8d1f\u8f7d\u4fe1\u606f\uff0c\u4f46\u662f\u4e0d\u80fd\u5bf9\u6d88\u606f\u672c\u8eab\u505a\u4efb\u4f55\u4fee\u6539\u3002"),(0,n.yg)("h2",{id:"\u6d88\u606f\u6807\u7b7emessagetag"},"\u6d88\u606f\u6807\u7b7e\uff08MessageTag\uff09"),(0,n.yg)("p",null,"\u6d88\u606f\u6807\u7b7e\u662fApache RocketMQ \u63d0\u4f9b\u7684\u7ec6\u7c92\u5ea6\u6d88\u606f\u5206\u7c7b\u5c5e\u6027\uff0c\u53ef\u4ee5\u5728\u4e3b\u9898\u5c42\u7ea7\u4e4b\u4e0b\u505a\u6d88\u606f\u7c7b\u578b\u7684\u7ec6\u5206\u3002\u6d88\u8d39\u8005\u901a\u8fc7\u8ba2\u9605\u7279\u5b9a\u7684\u6807\u7b7e\u6765\u5b9e\u73b0\u7ec6\u7c92\u5ea6\u8fc7\u6ee4\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/07messagefilter"},"\u6d88\u606f\u8fc7\u6ee4"),"\u3002"),(0,n.yg)("h2",{id:"\u6d88\u606f\u4f4d\u70b9messagequeueoffset"},"\u6d88\u606f\u4f4d\u70b9\uff08MessageQueueOffset\uff09"),(0,n.yg)("p",null,"\u6d88\u606f\u662f\u6309\u5230\u8fbeApache RocketMQ \u670d\u52a1\u7aef\u7684\u5148\u540e\u987a\u5e8f\u5b58\u50a8\u5728\u6307\u5b9a\u4e3b\u9898\u7684\u591a\u4e2a\u961f\u5217\u4e2d\uff0c\u6bcf\u6761\u6d88\u606f\u5728\u961f\u5217\u4e2d\u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u7684Long\u7c7b\u578b\u5750\u6807\uff0c\u8fd9\u4e2a\u5750\u6807\u88ab\u5b9a\u4e49\u4e3a\u6d88\u606f\u4f4d\u70b9\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/09consumerprogress"},"\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406"),"\u3002"),(0,n.yg)("h2",{id:"\u6d88\u8d39\u4f4d\u70b9consumeroffset"},"\u6d88\u8d39\u4f4d\u70b9\uff08ConsumerOffset\uff09"),(0,n.yg)("p",null,"\u4e00\u6761\u6d88\u606f\u88ab\u67d0\u4e2a\u6d88\u8d39\u8005\u6d88\u8d39\u5b8c\u6210\u540e\u4e0d\u4f1a\u7acb\u5373\u4ece\u961f\u5217\u4e2d\u5220\u9664\uff0cApache RocketMQ \u4f1a\u57fa\u4e8e\u6bcf\u4e2a\u6d88\u8d39\u8005\u5206\u7ec4\u8bb0\u5f55\u6d88\u8d39\u8fc7\u7684\u6700\u65b0\u4e00\u6761\u6d88\u606f\u7684\u4f4d\u70b9\uff0c\u5373\u6d88\u8d39\u4f4d\u70b9\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/09consumerprogress"},"\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406"),"\u3002"),(0,n.yg)("h2",{id:"\u6d88\u606f\u7d22\u5f15messagekey"},"\u6d88\u606f\u7d22\u5f15\uff08MessageKey\uff09"),(0,n.yg)("p",null,"\u6d88\u606f\u7d22\u5f15\u662fApache RocketMQ \u63d0\u4f9b\u7684\u9762\u5411\u6d88\u606f\u7684\u7d22\u5f15\u5c5e\u6027\u3002\u901a\u8fc7\u8bbe\u7f6e\u7684\u6d88\u606f\u7d22\u5f15\u53ef\u4ee5\u5feb\u901f\u67e5\u627e\u5230\u5bf9\u5e94\u7684\u6d88\u606f\u5185\u5bb9\u3002"),(0,n.yg)("h2",{id:"\u751f\u4ea7\u8005producer"},"\u751f\u4ea7\u8005\uff08Producer\uff09"),(0,n.yg)("p",null,"\u751f\u4ea7\u8005\u662fApache RocketMQ \u7cfb\u7edf\u4e2d\u7528\u6765\u6784\u5efa\u5e76\u4f20\u8f93\u6d88\u606f\u5230\u670d\u52a1\u7aef\u7684\u8fd0\u884c\u5b9e\u4f53\u3002\u751f\u4ea7\u8005\u901a\u5e38\u88ab\u96c6\u6210\u5728\u4e1a\u52a1\u7cfb\u7edf\u4e2d\uff0c\u5c06\u4e1a\u52a1\u6d88\u606f\u6309\u7167\u8981\u6c42\u5c01\u88c5\u6210\u6d88\u606f\u5e76\u53d1\u9001\u81f3\u670d\u52a1\u7aef\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/domainModel/04producer"},"\u751f\u4ea7\u8005\uff08Producer\uff09"),"\u3002"),(0,n.yg)("h2",{id:"\u4e8b\u52a1\u68c0\u67e5\u5668transactionchecker"},"\u4e8b\u52a1\u68c0\u67e5\u5668\uff08TransactionChecker\uff09"),(0,n.yg)("p",null,"Apache RocketMQ \u4e2d\u751f\u4ea7\u8005\u7528\u6765\u6267\u884c\u672c\u5730\u4e8b\u52a1\u68c0\u67e5\u548c\u5f02\u5e38\u4e8b\u52a1\u6062\u590d\u7684\u76d1\u542c\u5668\u3002\u4e8b\u52a1\u68c0\u67e5\u5668\u5e94\u8be5\u901a\u8fc7\u4e1a\u52a1\u4fa7\u6570\u636e\u7684\u72b6\u6001\u6765\u68c0\u67e5\u548c\u5224\u65ad\u4e8b\u52a1\u6d88\u606f\u7684\u72b6\u6001\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/04transactionmessage"},"\u4e8b\u52a1\u6d88\u606f"),"\u3002"),(0,n.yg)("h2",{id:"\u4e8b\u52a1\u72b6\u6001transactionresolution"},"\u4e8b\u52a1\u72b6\u6001\uff08TransactionResolution\uff09"),(0,n.yg)("p",null,"Apache RocketMQ \u4e2d\u4e8b\u52a1\u6d88\u606f\u53d1\u9001\u8fc7\u7a0b\u4e2d\uff0c\u4e8b\u52a1\u63d0\u4ea4\u7684\u72b6\u6001\u6807\u8bc6\uff0c\u670d\u52a1\u7aef\u901a\u8fc7\u4e8b\u52a1\u72b6\u6001\u63a7\u5236\u4e8b\u52a1\u6d88\u606f\u662f\u5426\u5e94\u8be5\u63d0\u4ea4\u548c\u6295\u9012\u3002\u4e8b\u52a1\u72b6\u6001\u5305\u62ec\u4e8b\u52a1\u63d0\u4ea4\u3001\u4e8b\u52a1\u56de\u6eda\u548c\u4e8b\u52a1\u672a\u51b3\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/04transactionmessage"},"\u4e8b\u52a1\u6d88\u606f"),"\u3002"),(0,n.yg)("h2",{id:"\u6d88\u8d39\u8005\u5206\u7ec4consumergroup"},"\u6d88\u8d39\u8005\u5206\u7ec4\uff08ConsumerGroup\uff09"),(0,n.yg)("p",null,"\u6d88\u8d39\u8005\u5206\u7ec4\u662fApache RocketMQ \u7cfb\u7edf\u4e2d\u627f\u8f7d\u591a\u4e2a\u6d88\u8d39\u884c\u4e3a\u4e00\u81f4\u7684\u6d88\u8d39\u8005\u7684\u8d1f\u8f7d\u5747\u8861\u5206\u7ec4\u3002\u548c\u6d88\u8d39\u8005\u4e0d\u540c\uff0c\u6d88\u8d39\u8005\u5206\u7ec4\u5e76\u4e0d\u662f\u8fd0\u884c\u5b9e\u4f53\uff0c\u800c\u662f\u4e00\u4e2a\u903b\u8f91\u8d44\u6e90\u3002\u5728 Apache RocketMQ \u4e2d\uff0c\u901a\u8fc7\u6d88\u8d39\u8005\u5206\u7ec4\u5185\u521d\u59cb\u5316\u591a\u4e2a\u6d88\u8d39\u8005\u5b9e\u73b0\u6d88\u8d39\u6027\u80fd\u7684\u6c34\u5e73\u6269\u5c55\u4ee5\u53ca\u9ad8\u53ef\u7528\u5bb9\u707e\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/domainModel/07consumergroup"},"\u6d88\u8d39\u8005\u5206\u7ec4\uff08ConsumerGroup\uff09"),"\u3002"),(0,n.yg)("h2",{id:"\u6d88\u8d39\u8005consumer"},"\u6d88\u8d39\u8005\uff08Consumer\uff09"),(0,n.yg)("p",null,"\u6d88\u8d39\u8005\u662fApache RocketMQ \u4e2d\u7528\u6765\u63a5\u6536\u5e76\u5904\u7406\u6d88\u606f\u7684\u8fd0\u884c\u5b9e\u4f53\u3002\u6d88\u8d39\u8005\u901a\u5e38\u88ab\u96c6\u6210\u5728\u4e1a\u52a1\u7cfb\u7edf\u4e2d\uff0c\u4ece\u670d\u52a1\u7aef\u83b7\u53d6\u6d88\u606f\uff0c\u5e76\u5c06\u6d88\u606f\u8f6c\u5316\u6210\u4e1a\u52a1\u53ef\u7406\u89e3\u7684\u4fe1\u606f\uff0c\u4f9b\u4e1a\u52a1\u903b\u8f91\u5904\u7406\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/domainModel/08consumer"},"\u6d88\u8d39\u8005\uff08Consumer\uff09"),"\u3002"),(0,n.yg)("h2",{id:"\u6d88\u8d39\u7ed3\u679cconsumeresult"},"\u6d88\u8d39\u7ed3\u679c\uff08ConsumeResult\uff09"),(0,n.yg)("p",null,"Apache RocketMQ \u4e2dPushConsumer\u6d88\u8d39\u76d1\u542c\u5668\u5904\u7406\u6d88\u606f\u5b8c\u6210\u540e\u8fd4\u56de\u7684\u5904\u7406\u7ed3\u679c\uff0c\u7528\u6765\u6807\u8bc6\u672c\u6b21\u6d88\u606f\u662f\u5426\u6b63\u786e\u5904\u7406\u3002\u6d88\u8d39\u7ed3\u679c\u5305\u542b\u6d88\u8d39\u6210\u529f\u548c\u6d88\u8d39\u5931\u8d25\u3002"),(0,n.yg)("h2",{id:"\u8ba2\u9605\u5173\u7cfbsubscription"},"\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09"),(0,n.yg)("p",null,"\u8ba2\u9605\u5173\u7cfb\u662fApache RocketMQ \u7cfb\u7edf\u4e2d\u6d88\u8d39\u8005\u83b7\u53d6\u6d88\u606f\u3001\u5904\u7406\u6d88\u606f\u7684\u89c4\u5219\u548c\u72b6\u6001\u914d\u7f6e\u3002\u8ba2\u9605\u5173\u7cfb\u7531\u6d88\u8d39\u8005\u5206\u7ec4\u52a8\u6001\u6ce8\u518c\u5230\u670d\u52a1\u7aef\u7cfb\u7edf\uff0c\u5e76\u5728\u540e\u7eed\u7684\u6d88\u606f\u4f20\u8f93\u4e2d\u6309\u7167\u8ba2\u9605\u5173\u7cfb\u5b9a\u4e49\u7684\u8fc7\u6ee4\u89c4\u5219\u8fdb\u884c\u6d88\u606f\u5339\u914d\u548c\u6d88\u8d39\u8fdb\u5ea6\u7ef4\u62a4\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/domainModel/09subscription"},"\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09"),"\u3002"),(0,n.yg)("h2",{id:"\u6d88\u606f\u8fc7\u6ee4"},"\u6d88\u606f\u8fc7\u6ee4"),(0,n.yg)("p",null,"\u6d88\u8d39\u8005\u53ef\u4ee5\u901a\u8fc7\u8ba2\u9605\u6307\u5b9a\u6d88\u606f\u6807\u7b7e\uff08Tag\uff09\u5bf9\u6d88\u606f\u8fdb\u884c\u8fc7\u6ee4\uff0c\u786e\u4fdd\u6700\u7ec8\u53ea\u63a5\u6536\u88ab\u8fc7\u6ee4\u540e\u7684\u6d88\u606f\u5408\u96c6\u3002\u8fc7\u6ee4\u89c4\u5219\u7684\u8ba1\u7b97\u548c\u5339\u914d\u5728Apache RocketMQ\n\u7684\u670d\u52a1\u7aef\u5b8c\u6210\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/07messagefilter"},"\u6d88\u606f\u8fc7\u6ee4"),"\u3002"),(0,n.yg)("h2",{id:"\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9"},"\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9"),(0,n.yg)("p",null,"\u4ee5\u65f6\u95f4\u8f74\u4e3a\u5750\u6807\uff0c\u5728\u6d88\u606f\u6301\u4e45\u5316\u5b58\u50a8\u7684\u65f6\u95f4\u8303\u56f4\u5185\uff0c\u91cd\u65b0\u8bbe\u7f6e\u6d88\u8d39\u8005\u5206\u7ec4\u5bf9\u5df2\u8ba2\u9605\u4e3b\u9898\u7684\u6d88\u8d39\u8fdb\u5ea6\uff0c\u8bbe\u7f6e\u5b8c\u6210\u540e\u6d88\u8d39\u8005\u5c06\u63a5\u6536\u8bbe\u5b9a\u65f6\u95f4\u70b9\u4e4b\u540e\uff0c\u7531\u751f\u4ea7\u8005\u53d1\u9001\u5230Apache RocketMQ \u670d\u52a1\u7aef\u7684\u6d88\u606f\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/09consumerprogress"},"\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9"),"\u3002"),(0,n.yg)("h2",{id:"\u6d88\u606f\u8f68\u8ff9"},"\u6d88\u606f\u8f68\u8ff9"),(0,n.yg)("p",null,"\u5728\u4e00\u6761\u6d88\u606f\u4ece\u751f\u4ea7\u8005\u53d1\u51fa\u5230\u6d88\u8d39\u8005\u63a5\u6536\u5e76\u5904\u7406\u8fc7\u7a0b\u4e2d\uff0c\u7531\u5404\u4e2a\u76f8\u5173\u8282\u70b9\u7684\u65f6\u95f4\u3001\u5730\u70b9\u7b49\u6570\u636e\u6c47\u805a\u800c\u6210\u7684\u5b8c\u6574\u94fe\u8def\u4fe1\u606f\u3002\u901a\u8fc7\u6d88\u606f\u8f68\u8ff9\uff0c\u60a8\u80fd\u6e05\u6670\u5b9a\u4f4d\u6d88\u606f\u4ece\u751f\u4ea7\u8005\u53d1\u51fa\uff0c\u7ecf\u7531Apache RocketMQ \u670d\u52a1\u7aef\uff0c\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u7684\u5b8c\u6574\u94fe\u8def\uff0c\u65b9\u4fbf\u5b9a\u4f4d\u6392\u67e5\u95ee\u9898\u3002"),(0,n.yg)("h2",{id:"\u6d88\u606f\u5806\u79ef"},"\u6d88\u606f\u5806\u79ef"),(0,n.yg)("p",null,"\u751f\u4ea7\u8005\u5df2\u7ecf\u5c06\u6d88\u606f\u53d1\u9001\u5230Apache RocketMQ \u7684\u670d\u52a1\u7aef\uff0c\u4f46\u7531\u4e8e\u6d88\u8d39\u8005\u7684\u6d88\u8d39\u80fd\u529b\u6709\u9650\uff0c\u672a\u80fd\u5728\u77ed\u65f6\u95f4\u5185\u5c06\u6240\u6709\u6d88\u606f\u6b63\u786e\u6d88\u8d39\u6389\uff0c\u6b64\u65f6\u5728\u670d\u52a1\u7aef\u4fdd\u5b58\u7740\u672a\u88ab\u6d88\u8d39\u7684\u6d88\u606f\uff0c\u8be5\u72b6\u6001\u5373\u6d88\u606f\u5806\u79ef\u3002"),(0,n.yg)("h2",{id:"\u4e8b\u52a1\u6d88\u606f"},"\u4e8b\u52a1\u6d88\u606f"),(0,n.yg)("p",null,"\u4e8b\u52a1\u6d88\u606f\u662fApache RocketMQ \u63d0\u4f9b\u7684\u4e00\u79cd\u9ad8\u7ea7\u6d88\u606f\u7c7b\u578b\uff0c\u652f\u6301\u5728\u5206\u5e03\u5f0f\u573a\u666f\u4e0b\u4fdd\u969c\u6d88\u606f\u751f\u4ea7\u548c\u672c\u5730\u4e8b\u52a1\u7684\u6700\u7ec8\u4e00\u81f4\u6027\u3002"),(0,n.yg)("h2",{id:"\u5b9a\u65f6\u5ef6\u65f6\u6d88\u606f"},"\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f"),(0,n.yg)("p",null,"\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f\u662fApache RocketMQ \u63d0\u4f9b\u7684\u4e00\u79cd\u9ad8\u7ea7\u6d88\u606f\u7c7b\u578b\uff0c\u6d88\u606f\u88ab\u53d1\u9001\u81f3\u670d\u52a1\u7aef\u540e\uff0c\u5728\u6307\u5b9a\u65f6\u95f4\u540e\u624d\u80fd\u88ab\u6d88\u8d39\u8005\u6d88\u8d39\u3002\u901a\u8fc7\u8bbe\u7f6e\u4e00\u5b9a\u7684\u5b9a\u65f6\u65f6\u95f4\u53ef\u4ee5\u5b9e\u73b0\u5206\u5e03\u5f0f\u573a\u666f\u7684\u5ef6\u65f6\u8c03\u5ea6\u89e6\u53d1\u6548\u679c\u3002"),(0,n.yg)("h2",{id:"\u987a\u5e8f\u6d88\u606f"},"\u987a\u5e8f\u6d88\u606f"),(0,n.yg)("p",null,"\u987a\u5e8f\u6d88\u606f\u662fApache RocketMQ \u63d0\u4f9b\u7684\u4e00\u79cd\u9ad8\u7ea7\u6d88\u606f\u7c7b\u578b\uff0c\u652f\u6301\u6d88\u8d39\u8005\u6309\u7167\u53d1\u9001\u6d88\u606f\u7684\u5148\u540e\u987a\u5e8f\u83b7\u53d6\u6d88\u606f\uff0c\u4ece\u800c\u5b9e\u73b0\u4e1a\u52a1\u573a\u666f\u4e2d\u7684\u987a\u5e8f\u5904\u7406\u3002"))}g.isMDXComponent=!0}}]);