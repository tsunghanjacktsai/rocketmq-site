"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6702],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),k=o,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},67640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i="\u5feb\u901f\u5f00\u59cb",c={unversionedId:"introduction/02quickstart",id:"introduction/02quickstart",title:"\u5feb\u901f\u5f00\u59cb",description:"\u8fd9\u4e00\u8282\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5355 Master RocketMQ \u96c6\u7fa4\uff0c\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002",source:"@site/docs/01-introduction/02quickstart.md",sourceDirName:"01-introduction",slug:"/introduction/02quickstart",permalink:"/zh/docs/4.x/introduction/02quickstart",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/01-introduction/02quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u4e3a\u4ec0\u4e48\u9009\u62e9RocketMQ",permalink:"/zh/docs/4.x/"},next:{title:"\u521d\u8bc6RocketMQ",permalink:"/zh/docs/4.x/introduction/03whatis"}},l={},s=[{value:"1.\u4e0b\u8f7d\u5b89\u88c5Apache RocketMQ",id:"1\u4e0b\u8f7d\u5b89\u88c5apache-rocketmq",level:2},{value:"2. \u542f\u52a8NameServer",id:"2-\u542f\u52a8nameserver",level:2},{value:"3. \u542f\u52a8Broker",id:"3-\u542f\u52a8broker",level:2},{value:"4. \u6d88\u606f\u6536\u53d1",id:"4-\u6d88\u606f\u6536\u53d1",level:2},{value:"5. \u5173\u95ed\u670d\u52a1\u5668",id:"5-\u5173\u95ed\u670d\u52a1\u5668",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,o.kt)("p",null,"\u8fd9\u4e00\u8282\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5355 Master RocketMQ \u96c6\u7fa4\uff0c\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002"),(0,o.kt)("admonition",{title:"\u7cfb\u7edf\u8981\u6c42",type:"tip"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"64\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u63a8\u8350 Linux/Unix/macOS"),(0,o.kt)("li",{parentName:"ol"},"64\u4f4d JDK 1.8+"))),(0,o.kt)("h2",{id:"1\u4e0b\u8f7d\u5b89\u88c5apache-rocketmq"},"1.\u4e0b\u8f7d\u5b89\u88c5Apache RocketMQ"),(0,o.kt)("admonition",{title:"RocketMQ\u4e0b\u8f7d",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"RocketMQ \u7684\u5b89\u88c5\u5305\u5206\u4e3a\u4e24\u79cd\uff0c\u4e8c\u8fdb\u5236\u5305\u548c\u6e90\u7801\u5305\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u70b9\u51fb",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/5.0.0/rocketmq-all-5.0.0-source-release.zip"},"\u8fd9\u91cc")," \u4e0b\u8f7d Apache RocketMQ 5.0.0\u7684\u6e90\u7801\u5305\u3002\u4f60\u4e5f\u53ef\u4ee5\u4ece",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/5.0.0/rocketmq-all-5.0.0-bin-release.zip"},"\u8fd9\u91cc")," \u4e0b\u8f7d\u5230\u4e8c\u8fdb\u5236\u5305\u3002\u4e8c\u8fdb\u5236\u5305\u662f\u5df2\u7ecf\u7f16\u8bd1\u5b8c\u6210\u540e\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u7684\uff0c\u6e90\u7801\u5305\u662f\u9700\u8981\u7f16\u8bd1\u540e\u8fd0\u884c\u7684\uff0c")),(0,o.kt)("p",null,"\u8fd9\u91cc\u4ee5\u5728Linux\u73af\u5883\u4e3a\u4f8b\uff0c\u4ecb\u7ecdRocketMQ\u5b89\u88c5\u8fc7\u7a0b\u3002"),(0,o.kt)("p",null,"\u89e3\u538b\u4e0b\u8f7d\u7684\u6e90\u7801\u5305\u5e76\u7f16\u8bd1\u6784\u5efa\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ mvn -Prelease-all -DskipTests -Dspotbugs.skip=true clean install -U\n$ cd distribution/target/rocketmq-5.0.0/rocketmq-5.0.0\n")),(0,o.kt)("h2",{id:"2-\u542f\u52a8nameserver"},"2. \u542f\u52a8NameServer"),(0,o.kt)("p",null,"\u5b89\u88c5\u5b8cRocketMQ\u5305\u540e\uff0c\u6211\u4eec\u542f\u52a8NameServer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"### \u542f\u52a8namesrv\n$ nohup sh bin/mqnamesrv &\n \n### \u9a8c\u8bc1namesrv\u662f\u5426\u542f\u52a8\u6210\u529f\n$ tail -f ~/logs/rocketmqlogs/namesrv.log\nThe Name Server boot success...\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u53ef\u4ee5\u5728namesrv.log \u4e2d\u770b\u5230 ",(0,o.kt)("strong",{parentName:"p"},"'The Name Server boot success..'\uff0c")," \u8868\u793aNameServer \u5df2\u6210\u529f\u542f\u52a8\u3002")),(0,o.kt)("h2",{id:"3-\u542f\u52a8broker"},"3. \u542f\u52a8Broker"),(0,o.kt)("p",null,"NameServer\u6210\u529f\u542f\u52a8\u540e\uff0c\u6211\u4eec\u542f\u52a8Broker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"### \u5148\u542f\u52a8broker\n$ nohup sh bin/mqbroker -n localhost:9876 &\n\n### \u9a8c\u8bc1broker\u662f\u5426\u542f\u52a8\u6210\u529f, \u6bd4\u5982, broker\u7684ip\u662f192.168.1.2 \u7136\u540e\u540d\u5b57\u662fbroker-a\n$ tail -f ~/logs/rocketmqlogs/Broker.log \nThe broker[broker-a,192.169.1.2:10911] boot success...\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u53ef\u4ee5\u5728 Broker.log \u4e2d\u770b\u5230\u201cThe broker","[brokerName,ip:port]"," boot success..\u201d\uff0c\u8fd9\u8868\u660e broker \u5df2\u6210\u529f\u542f\u52a8\u3002")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u81f3\u6b64\uff0c\u4e00\u4e2a\u5355Master\u7684RocketMQ\u96c6\u7fa4\u5df2\u7ecf\u90e8\u7f72\u8d77\u6765\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u811a\u672c\u8fdb\u884c\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002")),(0,o.kt)("h2",{id:"4-\u6d88\u606f\u6536\u53d1"},"4. \u6d88\u606f\u6536\u53d1"),(0,o.kt)("p",null,"\u5728\u8fdb\u884c\u6d88\u606f\u6536\u53d1\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u544a\u8bc9\u5ba2\u6237\u7aefNameServer\u7684\u5730\u5740\uff0cRocketMQ\u6709\u591a\u79cd\u65b9\u5f0f\u5728\u5ba2\u6237\u7aef\u4e2d\u8bbe\u7f6eNameServer\u5730\u5740\uff0c\u8fd9\u91cc\u6211\u4eec\u5229\u7528\u73af\u5883\u53d8\u91cf",(0,o.kt)("inlineCode",{parentName:"p"},"NAMESRV_ADDR")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ export NAMESRV_ADDR=localhost:9876\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n SendResult [sendStatus=SEND_OK, msgId= ...\n\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n ConsumeMessageThread_%d Receive New Messages: [MessageExt...\n")),(0,o.kt)("h2",{id:"5-\u5173\u95ed\u670d\u52a1\u5668"},"5. \u5173\u95ed\u670d\u52a1\u5668"),(0,o.kt)("p",null,"\u5b8c\u6210\u5b9e\u9a8c\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5173\u95ed\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh bin/mqshutdown broker\nThe mqbroker(36695) is running...\nSend shutdown request to mqbroker(36695) OK\n\n$ sh bin/mqshutdown namesrv\nThe mqnamesrv(36664) is running...\nSend shutdown request to mqnamesrv(36664) OK\n")))}u.isMDXComponent=!0}}]);