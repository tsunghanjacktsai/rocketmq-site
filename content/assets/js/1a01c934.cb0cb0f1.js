"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},i="\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001",o={unversionedId:"\u751f\u4ea7\u8005/07message3",id:"version-5.0/\u751f\u4ea7\u8005/07message3",title:"\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001",description:"\u5ef6\u65f6\u6d88\u606f\u662f\u6307\u6d88\u606f\u53d1\u9001\u5230Apache RocketMQ\u540e\uff0c\u5e76\u4e0d\u671f\u671b\u7acb\u9a6c\u6295\u9012\u8fd9\u6761\u6d88\u606f\uff0c\u800c\u662f\u5ef6\u8fdf\u4e00\u5b9a\u65f6\u95f4\u540e\u624d\u6295\u9012\u5230Consumer\u8fdb\u884c\u6d88\u8d39\u3002",source:"@site/versioned_docs/version-5.0/02-\u751f\u4ea7\u8005/07message3.md",sourceDirName:"02-\u751f\u4ea7\u8005",slug:"/\u751f\u4ea7\u8005/07message3",permalink:"/docs/5.0/\u751f\u4ea7\u8005/07message3",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/02-\u751f\u4ea7\u8005/07message3.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u987a\u5e8f\u6d88\u606f\u53d1\u9001",permalink:"/docs/5.0/\u751f\u4ea7\u8005/06message2"},next:{title:"\u6279\u91cf\u6d88\u606f\u53d1\u9001",permalink:"/docs/5.0/\u751f\u4ea7\u8005/08message4"}},s={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001"},"\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001"),(0,r.kt)("p",null,"\u5ef6\u65f6\u6d88\u606f\u662f\u6307\u6d88\u606f\u53d1\u9001\u5230Apache RocketMQ\u540e\uff0c\u5e76\u4e0d\u671f\u671b\u7acb\u9a6c\u6295\u9012\u8fd9\u6761\u6d88\u606f\uff0c\u800c\u662f\u5ef6\u8fdf\u4e00\u5b9a\u65f6\u95f4\u540e\u624d\u6295\u9012\u5230Consumer\u8fdb\u884c\u6d88\u8d39\u3002"),(0,r.kt)("p",null,"Apache RocketMQ \u4e00\u5171\u652f\u630118\u4e2a\u7b49\u7ea7\u7684\u5ef6\u8fdf\u6295\u9012\uff0c\u5177\u4f53\u65f6\u95f4\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6295\u9012\u7b49\u7ea7\uff08delay level\uff09"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5ef6\u8fdf\u65f6\u95f4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6295\u9012\u7b49\u7ea7\uff08delay level\uff09"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5ef6\u8fdf\u65f6\u95f4"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1s"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"6min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"5s"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"7min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"10s"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"8min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"30s"),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"9min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"1min"),(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"10min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"2min"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"20min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"3min"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"30min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"4min"),(0,r.kt)("td",{parentName:"tr",align:null},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"1h")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"5min"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"2h")))),(0,r.kt)("p",null,"\u5ef6\u8fdf\u6d88\u606f\u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{10,11}","{10,11}":!0},'public class ScheduledMessageProducer {\n    public static void main(String[] args) throws Exception {\n        // Instantiate a producer to send scheduled messages\n        DefaultMQProducer producer = new DefaultMQProducer("ExampleProducerGroup");\n        // Launch producer\n        producer.start();\n        int totalMessagesToSend = 100;\n        for (int i = 0; i < totalMessagesToSend; i++) {\n            Message message = new Message("TestTopic", ("Hello scheduled message " + i).getBytes());\n            // This message will be delivered to consumer 10 seconds later.\n            message.setDelayTimeLevel(3);\n            // Send the message\n            producer.send(message);\n        }\n        \n        // Shutdown producer after use.\n        producer.shutdown();\n    }\n    \n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u6700\u91cd\u8981\u7684\u662fmessage\u4e2d\u8bbe\u7f6e\u5ef6\u8fdf\u7b49\u7ea7\uff0c\u4f8b\u5b50\u4e2d\u8bbe\u7f6e\u7684\u7b49\u7ea7\u662f3\uff0c\u4e5f\u5c31\u662f\u53d1\u9001\u8005\u53d1\u9001\u540e\uff0c10s\u540e\u6d88\u8d39\u8005\u624d\u80fd\u6536\u5230\u6d88\u606f\u3002"))))}d.isMDXComponent=!0}}]);