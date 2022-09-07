"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},k=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(g,c(c({ref:t},k),{},{components:n})):r.createElement(g,c({ref:t},k))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18084:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},c="5.0\u901f\u89c8",l={type:"mdx",permalink:"/en/version",source:"@site/src/pages/version.md",title:"5.0\u901f\u89c8",description:"Why RocketMQ 5.0",frontMatter:{}},i=[{value:"Why RocketMQ 5.0",id:"why-rocketmq-50",level:2},{value:"What&#39;s New in RocketMQ 5.0",id:"whats-new-in-rocketmq-50",level:2},{value:"\u57fa\u7840\u67b6\u6784\u4e91\u539f\u751f\u5316\u5347\u7ea7",id:"\u57fa\u7840\u67b6\u6784\u4e91\u539f\u751f\u5316\u5347\u7ea7",level:3},{value:"\u8f7b\u91cfAPI\u548c\u591a\u8bed\u8a00SDK",id:"\u8f7b\u91cfapi\u548c\u591a\u8bed\u8a00sdk",level:3},{value:"\u4e8b\u4ef6\u3001\u6d41\u5904\u7406\u573a\u666f\u96c6\u6210",id:"\u4e8b\u4ef6\u6d41\u5904\u7406\u573a\u666f\u96c6\u6210",level:3},{value:"How to upgrade to 5.0",id:"how-to-upgrade-to-50",level:2}],p={toc:i};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"50\u901f\u89c8"},"5.0\u901f\u89c8"),(0,o.kt)("h2",{id:"why-rocketmq-50"},"Why RocketMQ 5.0"),(0,o.kt)("p",null,"Apache RocketMQ \u81ea\u8bde\u751f\u4ee5\u6765\uff0c\u56e0\u5176\u67b6\u6784\u7b80\u5355\u3001\u4e1a\u52a1\u529f\u80fd\u4e30\u5bcc\u3001\u5177\u5907\u6781\u5f3a\u53ef\u6269\u5c55\u6027\u7b49\u7279\u70b9\u88ab\u4f17\u591a\u4f01\u4e1a\u5f00\u53d1\u8005\u4ee5\u53ca\u4e91\u5382\u5546\u5e7f\u6cdb\u91c7\u7528\u3002\u5386\u7ecf\u5341\u4f59\u5e74\u7684\u5927\u89c4\u6a21\u573a\u666f\u6253\u78e8\uff0cRocketMQ \u5df2\u7ecf\u6210\u4e3a\u4e1a\u5185\u5171\u8bc6\u7684\u91d1\u878d\u7ea7\u53ef\u9760\u4e1a\u52a1\u6d88\u606f\u9996\u9009\u65b9\u6848\uff0c\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u4e92\u8054\u7f51\u3001\u5927\u6570\u636e\u3001\u79fb\u52a8\u4e92\u8054\u7f51\u3001\u7269\u8054\u7f51\u7b49\u9886\u57df\u7684\u4e1a\u52a1\u573a\u666f\u3002 \u5c3d\u7ba1 RocketMQ \u5728\u5f00\u6e90\u793e\u533a\u5df2\u7ecf\u8d70\u8fc7\u4e86\u5341\u591a\u4e2a\u5e74\u5934\uff0c\u4f46\u5728\u4f01\u4e1a\u67b6\u6784\u4e91\u539f\u751f\u6d6a\u6f6e\u4e0b\uff0c\u6211\u4eec\u4e00\u76f4\u5728\u601d\u8003 RocketMQ \u7684\u67b6\u6784\u6f14\u8fdb\u4ee5\u53ca\u5bf9\u4e0a\u5c42\u96c6\u6210\u7684\u4ef7\u503c\u63d0\u5347\u3002Apache RocketMQ 5.0 \u7684\u6f14\u8fdb\u76ee\u6807\u6709\u4e09\u4e2a\uff1a\n\u6d88\u606f\u57fa\u7840\u67b6\u6784\u7684\u4e91\u539f\u751f\u5316\u6f14\u8fdb\uff1a\u5145\u5206\u7ed3\u5408\u4e91\u539f\u751f\u5927\u6f6e\u4e0b\u7684\u57fa\u7840\u8bbe\u65bd\u548c\u751f\u6001\u6280\u672f\uff0c\u63d0\u9ad8\u8d44\u6e90\u5229\u7528\u548c\u5f39\u6027\u80fd\u529b\u3002\n\u96c6\u6210\u6548\u7387\u7684\u75db\u70b9\u5347\u7ea7\u4f18\u5316\uff1a\u4eceAPI\u3001SDK\u591a\u65b9\u9762\u91cd\u6784\u8bbe\u8ba1\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u66f4\u52a0\u7b80\u5355\u6613\u7528\u3001\u8f7b\u91cf\u6613\u96c6\u6210\u7684\u65b9\u6848\uff1b\n\u4e8b\u4ef6\u3001\u6d41\u96c6\u6210\u573a\u666f\u62d3\u5bbd\uff1a\u6211\u4eec\u5c06\u4ee5\u5f53\u524d\u4e1a\u52a1\u96c6\u6210\u7684\u80fd\u529b\u4e3a\u57fa\u7840\u8fdb\u4e00\u6b65\u805a\u7126\u6d88\u606f\u9886\u57df\u7684\u540e\u5904\u7406\u573a\u666f\uff0c\u652f\u6301\u6d88\u606f\u7684\u6d41\u5f0f\u5904\u7406\u548c\u8f7b\u8ba1\u7b97\uff0c\u5e2e\u52a9\u7528\u6237\u5b9e\u73b0\u6d88\u606f\u7684\u5c31\u8fd1\u8ba1\u7b97\u548c\u5206\u6790\uff0c\u5e76\u5c06\u5168\u9762\u62e5\u62b1 Serverless \u548c EDA\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4se3zawafj20kk097wez.jpg",alt:"img"})),(0,o.kt)("h2",{id:"whats-new-in-rocketmq-50"},"What's New in RocketMQ 5.0"),(0,o.kt)("h3",{id:"\u57fa\u7840\u67b6\u6784\u4e91\u539f\u751f\u5316\u5347\u7ea7"},"\u57fa\u7840\u67b6\u6784\u4e91\u539f\u751f\u5316\u5347\u7ea7"),(0,o.kt)("p",null,"RocketMQ \u81ea\u8bde\u751f\u4ee5\u6765\u5c31\u4e00\u76f4\u575a\u6301\u7b80\u6d01\u67b6\u6784\uff0c\u6bd4\u5982\u5143\u6570\u636e\u91c7\u7528\u6700\u7ec8\u4e00\u81f4\u6027\u8bbe\u8ba1\uff0c\u53ea\u5f15\u5165\u4e86\u51e0\u767e\u884c\u4ee3\u7801\u7684\u65e0\u72b6\u6001 NameSrv \u7ec4\u4ef6\u3002\u76f8\u6bd4\u5176\u4ed6\u4ea7\u54c1\u4f9d\u8d56 ZK \u8fdb\u884c\u5143\u6570\u636e\u7684\u7ba1\u7406\u7ef4\u62a4\uff0cRocketMQ \u7684\u4f18\u52bf\u662f\u663e\u800c\u6613\u89c1\u7684\u3002\n\u968f\u7740\u4f01\u4e1a\u4e0a\u4e91\u7684\u8fdb\u4e00\u6b65\u666e\u53ca\u4ee5\u53ca\u4e91\u539f\u751f\u6280\u672f\u8d8b\u52bf\u7684\u6f14\u8fdb\uff0c\u96c6\u6210\u7684\u7f51\u7edc\u73af\u5883\u66f4\u52a0\u590d\u6742\uff0c\u4f01\u4e1a\u5f00\u53d1\u8005\u5bf9\u6548\u7387\u4e5f\u6709\u4e86\u66f4\u9ad8\u7684\u8981\u6c42\uff0c\u6211\u4eec\u770b\u5230\u5f53\u524d\u7684\u67b6\u6784\u8fd8\u5b58\u5728\u4e00\u5b9a\u7684\u4e0d\u8db3\u3002\u5f53\u524d\u7684\u67b6\u6784\u4e0b\u5b58\u50a8\u548c\u8ba1\u7b97\u8d44\u6e90\u7684\u7075\u6d3b\u5339\u914d\u76f8\u5bf9\u56f0\u96be\uff0c\u7279\u522b\u662f\u5728\u5982\u4eca\u4f01\u4e1a\u4e0a\u4e91\u9010\u6b65\u666e\u53ca\u7684\u60c5\u51b5\u4e0b\uff0c\u4e91\u5382\u5546\u7684\u8ba1\u7b97\u8d44\u6e90\u548c\u5b58\u50a8\u8d44\u6e90\u4e4b\u95f4\u89e3\u8026\u7075\u6d3b\u7684\u5f39\u6027\u7b56\u7565\u53ef\u4ee5\u66f4\u597d\u7684\u5b9e\u73b0\u964d\u672c\u63d0\u6548\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4se6aydsfj20qm0c940d.jpg",alt:"img"})),(0,o.kt)("p",null,"RocketMQ 5.0 \u5f15\u5165\u4e86\u5168\u65b0\u7684\u5f39\u6027\u65e0\u72b6\u6001\u4ee3\u7406\u6a21\u5f0f\uff0c\u5c06\u5f53\u524d\u7684Broker\u804c\u8d23\u8fdb\u884c\u62c6\u5206\uff0c\u5bf9\u4e8e\u5ba2\u6237\u7aef\u534f\u8bae\u9002\u914d\u3001\u6743\u9650\u7ba1\u7406\u3001\u6d88\u8d39\u7ba1\u7406\u7b49\u8ba1\u7b97\u903b\u8f91\u8fdb\u884c\u62bd\u79bb\uff0c\u72ec\u7acb\u65e0\u72b6\u6001\u7684\u4ee3\u7406\u89d2\u8272\u63d0\u4f9b\u670d\u52a1\uff0cBroker\u5219\u7ee7\u7eed\u4e13\u6ce8\u4e8e\u5b58\u50a8\u80fd\u529b\u7684\u6301\u7eed\u4f18\u5316\u3002\u8fd9\u5957\u6a21\u5f0f\u53ef\u4ee5\u66f4\u597d\u5730\u5b9e\u73b0\u5728\u4e91\u73af\u5883\u7684\u8d44\u6e90\u5f39\u6027\u8c03\u5ea6\u3002\n\u503c\u5f97\u6ce8\u610f\u7684\u662fRocketMQ 5.0\u7684\u5168\u65b0\u6a21\u5f0f\u662f\u548c4.0\u7684\u6781\u7b80\u67b6\u6784\u6a21\u5f0f\u76f8\u5bb9\u76f8\u901a\u7684\uff0c5.0\u7684\u4ee3\u7406\u67b6\u6784\u5b8c\u5168\u53ef\u4ee5\u4ee5Local\u6a21\u5f0f\u8fd0\u884c\uff0c\u5b9e\u73b0\u4e0e4.0\u67b6\u6784\u5b8c\u5168\u4e00\u81f4\u7684\u6548\u679c\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u7684\u4e1a\u52a1\u573a\u666f\u81ea\u7531\u9009\u62e9\u67b6\u6784\u90e8\u7f72\u3002"),(0,o.kt)("h3",{id:"\u8f7b\u91cfapi\u548c\u591a\u8bed\u8a00sdk"},"\u8f7b\u91cfAPI\u548c\u591a\u8bed\u8a00SDK"),(0,o.kt)("p",null,"\u9664\u4e86\u67b6\u6784\u6539\u53d8\uff0cRocketMQ 5.0 \u91cd\u65b0\u601d\u8003\u4e86\u9762\u5411\u5f00\u53d1\u8005\u7684\u96c6\u6210\u754c\u9762\uff0c\u5373API\u548cSDK\u7684\u8bbe\u8ba1\u3002RocketMQ 4.x SDK \u662f\u6bd4\u8f83\u91cd\u91cf\u7ea7\u7684\u5bcc\u5ba2\u6237\u7aef\u6a21\u5f0f\uff0c\u63d0\u4f9b\u4e86\u8bf8\u5982\u987a\u5e8f\u6d88\u8d39\u3001\u5e7f\u64ad\u6d88\u8d39\u3001\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861\u3001\u6d88\u606f\u7f13\u5b58\u3001\u6d88\u606f\u91cd\u8bd5\u3001\u4f4d\u70b9\u7ba1\u7406\u3001\u63a8\u62c9\u7ed3\u5408\u3001\u6d41\u63a7\u3001\u8bca\u65ad\u3001\u6545\u969c\u8f6c\u79fb\u3001\u5f02\u5e38\u8282\u70b9\u9694\u79bb\u7b49\u4e00\u7cfb\u5217\u80fd\u529b\u3002\u8fd9\u4e9b\u590d\u6742\u80fd\u529b\u867d\u7136\u53ef\u4ee5\u5e2e\u52a9\u4e1a\u52a1\u96c6\u6210\u89e3\u51b3\u5b9e\u9645\u95ee\u9898\uff0c\u4f46\u5176\u81ea\u8eab\u7684\u6f14\u8fdb\u548c\u8fed\u4ee3\u5374\u5b58\u5728\u6bd4\u8f83\u5927\u7684\u8d1f\u62c5\uff0c\u5ba2\u6237\u7aef\u7684\u5347\u7ea7\u548c\u591a\u8bed\u8a00\u666e\u53ca\u96be\u5ea6\u8f83\u5927\u3002\u4eceAPI\u7684\u7b80\u6d01\u6027\u548c\u53cb\u597d\u6027\u65b9\u9762\uff0cRocketMQ 5.0\u6b63\u5728\u505a\u8f7b\u91cf\u5316\u8bbe\u8ba1\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008cV9t2gy1h5r32l4rctj30di0auq4p.jpg",alt:"img"})),(0,o.kt)("p",null,"RocketMQ 5.0 \u63a8\u51fa\u4e86\u57fa\u4e8e gRPC \u5168\u65b0\u7684\u591a\u8bed\u8a00 SDK\uff0c\u8fd9\u5957 SDK \u6709\u51e0\u4e2a\u91cd\u8981\u7279\u70b9\uff1a\n\u91c7\u7528\u5168\u65b0\u6781\u7b80\u7684 API\uff0c\u62e5\u6709\u4e0d\u53ef\u53d8 API \u7684\u8bbe\u8ba1\uff0c\u5b8c\u5584\u7684\u9519\u8bef\u5904\u7406\uff0c\u5404\u8bed\u8a00 SDK API \u5728\u672c\u5730\u8bed\u8a00\u5c42\u9762\u5bf9\u9f50\uff0c\u65b0\u7684API \u5316\u7e41\u4e3a\u7b80\uff0c\u66f4\u6613\u88ab\u4f7f\u7528\u548c\u96c6\u6210\u3002\n\u91c7\u7528\u4e91\u539f\u751f\u7684 RPC \u6807\u51c6\u6846\u67b6 gRPC\uff0c\u6807\u51c6\u7684\u4f20\u8f93\u5c42\u6846\u67b6\uff0c\u66f4\u6613\u88ab\u62e6\u622a\uff0c\u7279\u522b\u9002\u5408\u88ab Service Mesh \u96c6\u6210\u4ece\u800c\u8d4b\u4e88\u5176\u66f4\u591a\u7684\u4f20\u8f93\u5c42\u57fa\u7840\u80fd\u529b\u3002\n\u5ba2\u6237\u7aef\u8f7b\u91cf\u5316\uff0c\u4ee5\u5178\u578b\u7684\u300cSimpleConsumer\u300d\u4e3a\u4ee3\u8868\uff0c\u91c7\u7528\u5168\u65b0\u7684\u9762\u5411\u6d88\u606f\u7684\u65e0\u72b6\u6001\u6d88\u8d39\u6a21\u578b\uff0c\u6574\u4e2a SDK \u4ece\u4ee3\u7801\u5230\u8fd0\u884c\u65f6\u90fd\u6781\u4e3a\u8f7b\u91cf\u3002\u8f7b\u91cf\u5316\u662f\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u80fd\u529b\uff0c\u5982\u679c\u5404\u4e2a\u4e2d\u95f4\u4ef6\u90fd\u91c7\u53d6\u5bcc\u5ba2\u6237\u7aef\u7684\u5f62\u5f0f\uff0c\u8fd9\u4e9b\u4e2d\u95f4\u4ef6\u5f53\u88ab\u4e00\u8d77\u690d\u5165\u5230 Sidecar \u4e2d\u65f6\uff0c\u4e5f\u4f1a\u662f\u4e00\u4e2a\u975e\u5e38\u5e9e\u5927\u7684 Sidecar\uff0c\u5e94\u7528\u6846\u67b6\u96c6\u6210\u7684\u590d\u6742\u5ea6\u975e\u5e38\u9ad8\u3002"),(0,o.kt)("p",null,"\u9664\u4e86API/SDK\u7684\u8bbe\u8ba1\u4f18\u5316\uff0cRocketMQ 5.0 \u8fd8\u5f15\u5165\u4e86\u4e00\u79cd\u65e0\u72b6\u6001\u6d88\u8d39\u6a21\u578b\uff0c\u5373 Pop \u673a\u5236\uff0c\u521b\u65b0\u6027\u5730\u5728\u961f\u5217\u6a21\u578b\u4e4b\u4e0a\u652f\u6301\u4e86\u65e0\u72b6\u6001\u7684\u6d88\u606f\u6a21\u578b\uff0c\u5728\u4e00\u4e2a\u4e3b\u4f53\u4e0a\u540c\u65f6\u652f\u6301\u4e24\u79cd\u6d88\u8d39\u6a21\u578b\uff0c\u4f53\u73b0\u4e86\u6d88\u606f\u548c\u6d41\u7684\u300c\u4e8c\u8c61\u6027\u300d\u3002\u9762\u5411\u6d41\u573a\u666f\u91c7\u7528\u9ad8\u6027\u80fd\u7684\u961f\u5217\u6a21\u578b\u8fdb\u884c\u6d88\u8d39\uff1b\u9762\u5411\u6d88\u606f\u7684\u573a\u666f\uff0c\u91c7\u7528\u65e0\u72b6\u6001\u7684\u6d88\u606f\u6a21\u578b\u8fdb\u884c\u6d88\u8d39\u3002\u4e1a\u52a1\u53ef\u4ee5\u53ea\u5173\u5fc3\u6d88\u606f\u672c\u8eab\uff0c\u901a\u8fc7\u300cSimpleConsumer\u300d\u63d0\u4f9b\u5355\u6761\u6d88\u606f\u7ea7\u522b\u7684\u6d88\u8d39\u3001\u91cd\u8bd5\u3001\u4fee\u6539\u4e0d\u53ef\u89c1\u65f6\u95f4\u3001\u4ee5\u53ca\u5220\u9664\u7b49 API \u80fd\u529b\u3002"),(0,o.kt)("h3",{id:"\u4e8b\u4ef6\u6d41\u5904\u7406\u573a\u666f\u96c6\u6210"},"\u4e8b\u4ef6\u3001\u6d41\u5904\u7406\u573a\u666f\u96c6\u6210"),(0,o.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u57fa\u7840\u67b6\u6784\u4ee5\u53caAPI\u96c6\u6210\u7684\u53d8\u5316\uff0cRocketMQ 5.0\u57fa\u4e8e\u4e1a\u52a1\u6d88\u606f\u7684\u57fa\u7840\u4f18\u52bf\uff0cRocketMQ 5.0\u8fdb\u4e00\u6b65\u62d3\u5bbd\u5728\u6d88\u606f\u540e\u5904\u7406\u8ba1\u7b97\u7684\u573a\u666f\u6316\u6398\u3002\u652f\u6301\u6d88\u606f\u7684\u6d41\u5f0f\u5904\u7406\u548c\u8f7b\u8ba1\u7b97\uff0c\u5e2e\u52a9\u7528\u6237\u5b9e\u73b0\u6d88\u606f\u7684\u5c31\u8fd1\u8ba1\u7b97\u548c\u5206\u6790\uff0c\u5e76\u5c06\u5168\u9762\u62e5\u62b1 Serverless \u548c EDA\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4se8byszdj20ne0c5glz.jpg",alt:"img"})),(0,o.kt)("p",null,"\u4f34\u968f\u4f01\u4e1a\u4e91\u539f\u751f\u5316\u8fdb\u7a0b\u7684\u52a0\u901f\uff0c\u8ba1\u7b97\u529b\u7684\u6784\u6210\u8d8a\u6765\u8d8a\u591a\u6837\u5316\uff0c\u901a\u8fc7\u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784\u6765\u5f00\u53d1\u4e91\u539f\u751f\u5e94\u7528\u662f\u4e00\u4ef6\u975e\u5e38\u987a\u7406\u6210\u7ae0\u7684\u4e8b\u60c5\u3002RocketMQ 5.0 \u6b63\u662f\u57fa\u4e8e\u6b64\u6280\u672f\u8d8b\u52bf\u5927\u6f6e\u5f00\u653e\u4e86\u517c\u5bb9\u6807\u51c6CloudEvents\u534f\u8bae\u7684RocketMQ-EventBridge\u7ec4\u4ef6\u3002EventBridge\u63d0\u4f9b\u4e30\u5bcc\u7684\u8de8\u4ea7\u54c1\u3001\u8de8\u5e73\u53f0\u8fde\u63a5\u80fd\u529b\uff0c\u80fd\u591f\u4fc3\u8fdb\u4e91\u5382\u5546\u3001\u4f01\u4e1a\u5e94\u7528\u3001SaaS \u670d\u52a1\u4e09\u8005\u76f8\u4e92\u96c6\u6210\u3002EventBridge\u7684\u76ee\u6807\u662f\u4ee5\u7edf\u4e00\u5f00\u653e\u7684\u6807\u51c6\u94fe\u63a5\u793e\u533a\u6d3b\u8dc3\u7684\u751f\u6001\uff0c\u540c\u65f6\u80fd\u4e0e\u5404\u4e2a\u4e91\u5382\u5546\u7684\u300cHub\u300d\u7c7b\u4ea7\u54c1\u8fdb\u884c\u96c6\u6210\uff0c\u6765\u8fbe\u5230\u5f00\u6e90\u548c\u4e91\u7684\u6570\u636e\u4e92\u901a\uff0c\u52a9\u529b\u4f01\u4e1a\u5ba2\u6237\u8f7b\u677e\u4e0a\u4e91\u548c\u4e0b\u4e91\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4se90h1hij20pi0ebdhj.jpg",alt:"img"})),(0,o.kt)("p",null,"\u5728\u6d88\u606f\u6d41\u5f0f\u5904\u7406\u573a\u666f\uff0cRocketMQ 5.0\u5c06\u5f53\u524d\u7684\u961f\u5217\u4e0b\u6c89\u4e3a\u7269\u7406\u961f\u5217\uff0c\u4e0a\u5c42\u91cd\u65b0\u62bd\u8c61\u4e86\u903b\u8f91\u961f\u5217\u3002\u4e00\u4e2a\u903b\u8f91\u961f\u5217\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u7269\u7406\u961f\u5217\uff0c\u5404\u4e2a\u7269\u7406\u961f\u5217\u90fd\u4f5c\u4e3a\u903b\u8f91\u961f\u5217\u7684\u4e00\u4e2a\u7247\u6bb5\uff0c\u4ee5\u6b64\u62fc\u63a5\u51fa\u771f\u6b63\u7684\u6d41\u5f0f\u961f\u5217\u3002\u4e5f\u56e0\u6b64\u53ef\u4ee5\u505a\u5230\u66f4\u8f7b\u91cf\uff0c\u79d2\u7ea7\u6269\u7f29\uff0c\u5728\u7269\u7406\u8282\u70b9\u53d1\u751f\u53d8\u5316\u65f6\u4e0d\u6d89\u53ca\u5230\u5b58\u91cf\u6570\u636e\u590d\u5236\u8fc1\u79fb\uff1b\u5b9e\u73b0\u6570\u636e\u5b58\u50a8\u7684\u7075\u6d3b\u8c03\u5ea6\uff0c\u914d\u5408 TTL \u5b9e\u73b0\u65e0\u9650\u5b58\u50a8\u80fd\u529b\u3002\u540c\u65f6\uff0c\u5e94\u5bf9\u6d41\u7684\u9ad8\u541e\u5410\u573a\u666f\uff0cRocketMQ 5.0\u4f18\u5316\u91cc\u5b58\u50a8\u6279\u91cf\u5904\u7406\u7684\u8bfb\u5199\u6027\u80fd\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4se9tby18j20u008n0tq.jpg",alt:"img"})),(0,o.kt)("p",null,"\u5728\u8ba1\u7b97\u6846\u67b6\u65b9\u9762\uff0cRocketMQ 5.0 \u5f15\u5165\u4e86\u4e00\u5957\u8f7b\u91cf\u7ea7\u6d41\u5f0f\u5904\u7406\u6846\u67b6RSteams\u3002RStreams \u4f9d\u8d56\u5c11\u3001\u90e8\u7f72\u7b80\u5355\uff0c\u53ef\u4efb\u610f\u6a2a\u5411\u6269\u5c55\uff0c\u5229\u7528 RocketMQ \u8d44\u6e90\u5373\u53ef\u5b8c\u6210\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u5904\u7406\u548c\u8ba1\u7b97\u3002\u9664\u6b64\u4ee5\u5916\uff0c\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005\u8ba9\u57fa\u4e8e RocketMQ \u7684\u6d41\u5f0f\u8ba1\u7b97\u66f4\u5bb9\u6613\uff0cRocketMQ 5.0 \u8fd8\u652f\u6301\u4e86\u4e00\u5957\u8f7b\u91cfSQL\u67e5\u8be2\u5f15\u64ce RSQLDB\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u57fa\u4e8e SQL \u7684\u5f00\u53d1\u4f53\u9a8c\u3002RSQLDB \u9996\u521b\u6027\u5730\u517c\u5bb9\u4e86 Flink/Blink SQL \u6807\u51c6\u4ee5\u53ca UDF/UDAF/UDTF\uff0c\u4f7f\u5f97\u4e24\u4e2a\u5f00\u6e90\u4ea7\u54c1\u7684\u751f\u6001\u53ef\u4ee5\u66f4\u597d\u5730\u878d\u5408\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5c06 Flink/Blink \u5df2\u6709 SQL \u8ba1\u7b97\u4efb\u52a1\u8fc1\u79fb\u5230 RocketMQ \uff0c\u5728 RocketMQ \u5185\u90e8\u5b8c\u6210\u8f7b\u91cf\u7ea7\u7684\u8ba1\u7b97\u5904\u7406\uff0c\u5728\u7b97\u529b\u53d7\u9650\u6216\u8005\u66f4\u5927\u89c4\u6a21\u7684\u573a\u666f\u4e0b\uff0c\u540c\u6837\u53ef\u4ee5\u5c06 RocketMQ \u7684\u5b9e\u65f6\u8ba1\u7b97\u4efb\u52a1\u8fc1\u79fb\u5230 Flink\uff0c\u5229\u7528 Flink \u7684\u5927\u6570\u636e\u8ba1\u7b97\u80fd\u529b\u6ee1\u8db3\u4e1a\u52a1\u8bc9\u6c42\u3002"),(0,o.kt)("h2",{id:"how-to-upgrade-to-50"},"How to upgrade to 5.0"),(0,o.kt)("p",null,"RocketMQ 5.0\u5728\u5b8c\u6210\u4e0a\u8ff0\u67b6\u6784\u5347\u7ea7\u3001API\u91cd\u6784\u548c\u65b0\u529f\u80fd\u573a\u666f\u65f6\uff0c\u7edf\u4e00\u9075\u5faa\u4e86\u5411\u4e0b\u517c\u5bb9\u7684\u539f\u5219\u3002RocketMQ 4.x\u7248\u672c\u53ef\u4ee5\u65e0\u7f1d\u5347\u7ea7\u52305.0\u7248\u672c\u540c\u65f6\u4fdd\u6301\u5bf9\u5386\u53f2\u7248\u672cSDK\u7684\u517c\u5bb9\u3002\u9009\u62e95.0\u7248\u672c\u65e0\u9700\u62c5\u5fc3\u4e0d\u517c\u5bb9\u5386\u53f2\u7248\u672c\u7684\u5e94\u7528\u3002\u6211\u4eec\u5efa\u8bae\u5347\u7ea7\u670d\u52a1\u7aef\u7248\u672c\u540e\uff0c\u5c3d\u5feb\u66ff\u6362\u4f7f\u7528\u65b0\u7248\u672c\u7684SDK\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u63a5\u5165\u4f53\u9a8c\u548c\u65b0\u529f\u80fd\u3002\n",(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4sea61o1cj218e0n6add.jpg",alt:"img"})))}k.isMDXComponent=!0}}]);