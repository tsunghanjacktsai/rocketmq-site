"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1834],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>d});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},i="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),i=c(r),u=n,d=i["".concat(p,".").concat(u)]||i[u]||g[u]||o;return r?a.createElement(d,l(l({ref:t},m),{},{components:r})):a.createElement(d,l({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[i]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62282:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={},l="C# \u5ba2\u6237\u7aef",s={unversionedId:"sdk/04csharp",id:"version-5.0/sdk/04csharp",title:"C# \u5ba2\u6237\u7aef",description:"\u5ba2\u6237\u7aef",source:"@site/versioned_docs/version-5.0/13-sdk/04csharp.md",sourceDirName:"13-sdk",slug:"/sdk/04csharp",permalink:"/zh/docs/sdk/04csharp",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/13-sdk/04csharp.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"C++ \u5ba2\u6237\u7aef",permalink:"/zh/docs/sdk/03cplusplus"},next:{title:"Go \u5ba2\u6237\u7aef",permalink:"/zh/docs/sdk/05go"}},p={},c=[{value:"\u7248\u672c\u8bf4\u660e",id:"\u7248\u672c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],m={toc:c},i="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(i,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"c-\u5ba2\u6237\u7aef"},"C# \u5ba2\u6237\u7aef"),(0,n.yg)("h2",{id:"\u7248\u672c\u8bf4\u660e"},"\u7248\u672c\u8bf4\u660e"),(0,n.yg)("p",null,"\u672c\u7ae0\u8282\u4ecb\u7ecd\u4f7f\u7528 Apache RocketMQ 5.0 gRPC \u534f\u8bae C# SDK \u6536\u53d1\u6d88\u606f\u3002"),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"\u672c\u793a\u4f8b\u4ee3\u7801\u57fa\u4e8egRPC \u534f\u8bae SDK \u6784\u5efa\uff0c\u56e0\u6b64\u9700\u8981\u670d\u52a1\u7aef\u81f3\u5c11\u5347\u7ea7\u52305.0\u7248\u672c\uff0c\u5e76\u542f\u7528 gRPC Proxy \u624d\u53ef\u517c\u5bb9\u3002\u5173\u4e8eProxy\u7684\u90e8\u7f72\u53c2\u8003",(0,n.yg)("a",{parentName:"li",href:"/zh/docs/quickStart/01quickstart"},"\u5feb\u901f\u6307\u5357"),"\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Remoting \u534f\u8bae SDK\uff0c\u5efa\u8bae\u53c2\u8003\u4e4b\u524d4.x \u7248\u672c\u7684\u793a\u4f8b\u4ee3\u7801\u5373\u53ef\u8fd0\u884c.\u5982\u4f55\u8bc6\u522b\u60a8\u4f7f\u7528\u7684 SDK \u7c7b\u578b\uff0c\u53c2\u8003",(0,n.yg)("a",{parentName:"li",href:"/zh/docs/sdk/01overview"},"\u6982\u89c8"),"\u3002"))),(0,n.yg)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,n.yg)("p",null,"\u4e0b\u9762\u7ed9\u51fa Apache RocketMQ gRPC \u534f\u8bae C# SDK\u7684\u6d88\u606f\u6536\u53d1\u793a\u4f8b\u4ee3\u7801\u94fe\u63a5\uff0c\u5b8c\u6574\u4ee3\u7801\u5de5\u7a0b\u548c\u8fd0\u884c\u73af\u5883\uff0c\u53c2\u7167",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-clients"},"rocketmq-clients")," \u914d\u7f6e\u8fd0\u884c\u3002"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"th"},"\u6d88\u606f\u7c7b\u578b")),(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"th"},"\u53d1\u9001\u6d88\u606f\u793a\u4f8b")),(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"th"},"SimpleConsumer\u6d88\u8d39\u6d88\u606f\u793a\u4f8b")))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/zh/docs/featureBehavior/01normalmessage"},"\u666e\u901a\u6d88\u606f")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/csharp/examples/ProducerNormalMessageExample.cs"},"ProducerNormalMessageExample.cs")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/csharp/examples/SimpleConsumerExample.cs"},"SimpleConsumerExample.cs"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/zh/docs/featureBehavior/03fifomessage"},"\u987a\u5e8f\u6d88\u606f")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/csharp/examples/ProducerFifoMessageExample.cs"},"ProducerFifoMessageExample.cs")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/csharp/examples/SimpleConsumerExample.cs"},"SimpleConsumerExample.cs"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/zh/docs/featureBehavior/02delaymessage"},"\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/csharp/examples/ProducerDelayMessageExample.cs"},"ProducerDelayMessageExample.cs")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/csharp/examples/SimpleConsumerExample.cs"},"SimpleConsumerExample.cs"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/zh/docs/featureBehavior/04transactionmessage"},"\u4e8b\u52a1\u6d88\u606f")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/csharp/examples/ProducerTransactionMessageExample.cs"},"ProducerTransactionMessageExample.cs")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/csharp/examples/SimpleConsumerExample.cs"},"SimpleConsumerExample.cs"))))))}g.isMDXComponent=!0}}]);