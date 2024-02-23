"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3707],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(t),u=a,y=g["".concat(l,".").concat(u)]||g[u]||m[u]||s;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const s={},o="\u666e\u901a\u6d88\u606f",i={unversionedId:"featureBehavior/01normalmessage",id:"version-5.0/featureBehavior/01normalmessage",title:"\u666e\u901a\u6d88\u606f",description:"\u666e\u901a\u6d88\u606f\u4e3a Apache RocketMQ \u4e2d\u6700\u57fa\u7840\u7684\u6d88\u606f\uff0c\u533a\u522b\u4e8e\u6709\u7279\u6027\u7684\u987a\u5e8f\u6d88\u606f\u3001\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f\u548c\u4e8b\u52a1\u6d88\u606f\u3002\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd\u666e\u901a\u6d88\u606f\u7684\u5e94\u7528\u573a\u666f\u3001\u529f\u80fd\u539f\u7406\u3001\u4f7f\u7528\u65b9\u6cd5\u548c\u4f7f\u7528\u5efa\u8bae\u3002",source:"@site/versioned_docs/version-5.0/04-featureBehavior/01normalmessage.md",sourceDirName:"04-featureBehavior",slug:"/featureBehavior/01normalmessage",permalink:"/zh/docs/featureBehavior/01normalmessage",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-featureBehavior/01normalmessage.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09",permalink:"/zh/docs/domainModel/09subscription"},next:{title:"\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f",permalink:"/zh/docs/featureBehavior/02delaymessage"}},l={},p=[{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u529f\u80fd\u539f\u7406",id:"\u529f\u80fd\u539f\u7406",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2}],c={toc:p},g="wrapper";function m(e){let{components:n,...s}=e;return(0,a.yg)(g,(0,r.A)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u666e\u901a\u6d88\u606f"},"\u666e\u901a\u6d88\u606f"),(0,a.yg)("p",null,"\u666e\u901a\u6d88\u606f\u4e3a Apache RocketMQ \u4e2d\u6700\u57fa\u7840\u7684\u6d88\u606f\uff0c\u533a\u522b\u4e8e\u6709\u7279\u6027\u7684\u987a\u5e8f\u6d88\u606f\u3001\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f\u548c\u4e8b\u52a1\u6d88\u606f\u3002\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd\u666e\u901a\u6d88\u606f\u7684\u5e94\u7528\u573a\u666f\u3001\u529f\u80fd\u539f\u7406\u3001\u4f7f\u7528\u65b9\u6cd5\u548c\u4f7f\u7528\u5efa\u8bae\u3002"),(0,a.yg)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,a.yg)("p",null,"\u666e\u901a\u6d88\u606f\u4e00\u822c\u5e94\u7528\u4e8e\u5fae\u670d\u52a1\u89e3\u8026\u3001\u4e8b\u4ef6\u9a71\u52a8\u3001\u6570\u636e\u96c6\u6210\u7b49\u573a\u666f\uff0c\u8fd9\u4e9b\u573a\u666f\u5927\u591a\u6570\u8981\u6c42\u6570\u636e\u4f20\u8f93\u901a\u9053\u5177\u6709\u53ef\u9760\u4f20\u8f93\u7684\u80fd\u529b\uff0c\u4e14\u5bf9\u6d88\u606f\u7684\u5904\u7406\u65f6\u673a\u3001\u5904\u7406\u987a\u5e8f\u6ca1\u6709\u7279\u522b\u8981\u6c42\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u5178\u578b\u573a\u666f\u4e00\uff1a\u5fae\u670d\u52a1\u5f02\u6b65\u89e3\u8026"),"\n",(0,a.yg)("img",{alt:"\u5728\u7ebf\u6d88\u606f\u5904\u7406",src:t(61035).A,width:"1649",height:"675"})),(0,a.yg)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u4ee5\u5728\u7ebf\u7684\u7535\u5546\u4ea4\u6613\u573a\u666f\u4e3a\u4f8b\uff0c\u4e0a\u6e38\u8ba2\u5355\u7cfb\u7edf\u5c06\u7528\u6237\u4e0b\u5355\u652f\u4ed8\u8fd9\u4e00\u4e1a\u52a1\u4e8b\u4ef6\u5c01\u88c5\u6210\u72ec\u7acb\u7684\u666e\u901a\u6d88\u606f\u5e76\u53d1\u9001\u81f3Apache RocketMQ\u670d\u52a1\u7aef\uff0c\u4e0b\u6e38\u6309\u9700\u4ece\u670d\u52a1\u7aef\u8ba2\u9605\u6d88\u606f\u5e76\u6309\u7167\u672c\u5730\u6d88\u8d39\u903b\u8f91\u5904\u7406\u4e0b\u6e38\u4efb\u52a1\u3002\u6bcf\u4e2a\u6d88\u606f\u4e4b\u95f4\u90fd\u662f\u76f8\u4e92\u72ec\u7acb\u7684\uff0c\u4e14\u4e0d\u9700\u8981\u4ea7\u751f\u5173\u8054\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u5178\u578b\u573a\u666f\u4e8c\uff1a\u6570\u636e\u96c6\u6210\u4f20\u8f93"),"\n",(0,a.yg)("img",{alt:"\u6570\u636e\u4f20\u8f93",src:t(40743).A,width:"1647",height:"675"})),(0,a.yg)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u4ee5\u79bb\u7ebf\u7684\u65e5\u5fd7\u6536\u96c6\u573a\u666f\u4e3a\u4f8b\uff0c\u901a\u8fc7\u57cb\u70b9\u7ec4\u4ef6\u6536\u96c6\u524d\u7aef\u5e94\u7528\u7684\u76f8\u5173\u64cd\u4f5c\u65e5\u5fd7\uff0c\u5e76\u8f6c\u53d1\u5230 Apache RocketMQ \u3002\u6bcf\u6761\u6d88\u606f\u90fd\u662f\u4e00\u6bb5\u65e5\u5fd7\u6570\u636e\uff0cApache RocketMQ \u4e0d\u505a\u4efb\u4f55\u5904\u7406\uff0c\u53ea\u9700\u8981\u5c06\u65e5\u5fd7\u6570\u636e\u53ef\u9760\u6295\u9012\u5230\u4e0b\u6e38\u7684\u5b58\u50a8\u7cfb\u7edf\u548c\u5206\u6790\u7cfb\u7edf\u5373\u53ef\uff0c\u540e\u7eed\u529f\u80fd\u7531\u540e\u7aef\u5e94\u7528\u5b8c\u6210\u3002"),(0,a.yg)("h2",{id:"\u529f\u80fd\u539f\u7406"},"\u529f\u80fd\u539f\u7406"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u4ec0\u4e48\u662f\u666e\u901a\u6d88\u606f")),(0,a.yg)("p",null,"\u5b9a\u4e49\uff1a\u666e\u901a\u6d88\u606f\u662fApache RocketMQ\u57fa\u672c\u6d88\u606f\u529f\u80fd\uff0c\u652f\u6301\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u7684\u5f02\u6b65\u89e3\u8026\u901a\u4fe1\u3002\n",(0,a.yg)("img",{alt:"\u751f\u547d\u5468\u671f",src:t(38615).A,width:"870",height:"106"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u666e\u901a\u6d88\u606f\u751f\u547d\u5468\u671f")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u521d\u59cb\u5316\uff1a\u6d88\u606f\u88ab\u751f\u4ea7\u8005\u6784\u5efa\u5e76\u5b8c\u6210\u521d\u59cb\u5316\uff0c\u5f85\u53d1\u9001\u5230\u670d\u52a1\u7aef\u7684\u72b6\u6001\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5f85\u6d88\u8d39\uff1a\u6d88\u606f\u88ab\u53d1\u9001\u5230\u670d\u52a1\u7aef\uff0c\u5bf9\u6d88\u8d39\u8005\u53ef\u89c1\uff0c\u7b49\u5f85\u6d88\u8d39\u8005\u6d88\u8d39\u7684\u72b6\u6001\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6d88\u8d39\u4e2d\uff1a\u6d88\u606f\u88ab\u6d88\u8d39\u8005\u83b7\u53d6\uff0c\u5e76\u6309\u7167\u6d88\u8d39\u8005\u672c\u5730\u7684\u4e1a\u52a1\u903b\u8f91\u8fdb\u884c\u5904\u7406\u7684\u8fc7\u7a0b\u3002 \u6b64\u65f6\u670d\u52a1\u7aef\u4f1a\u7b49\u5f85\u6d88\u8d39\u8005\u5b8c\u6210\u6d88\u8d39\u5e76\u63d0\u4ea4\u6d88\u8d39\u7ed3\u679c\uff0c\u5982\u679c\u4e00\u5b9a\u65f6\u95f4\u540e\u6ca1\u6709\u6536\u5230\u6d88\u8d39\u8005\u7684\u54cd\u5e94\uff0cApache RocketMQ\u4f1a\u5bf9\u6d88\u606f\u8fdb\u884c\u91cd\u8bd5\u5904\u7406\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/10consumerretrypolicy"},"\u6d88\u8d39\u91cd\u8bd5"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6d88\u8d39\u63d0\u4ea4\uff1a\u6d88\u8d39\u8005\u5b8c\u6210\u6d88\u8d39\u5904\u7406\uff0c\u5e76\u5411\u670d\u52a1\u7aef\u63d0\u4ea4\u6d88\u8d39\u7ed3\u679c\uff0c\u670d\u52a1\u7aef\u6807\u8bb0\u5f53\u524d\u6d88\u606f\u5df2\u7ecf\u88ab\u5904\u7406\uff08\u5305\u62ec\u6d88\u8d39\u6210\u529f\u548c\u5931\u8d25\uff09\u3002 Apache RocketMQ\u9ed8\u8ba4\u652f\u6301\u4fdd\u7559\u6240\u6709\u6d88\u606f\uff0c\u6b64\u65f6\u6d88\u606f\u6570\u636e\u5e76\u4e0d\u4f1a\u7acb\u5373\u88ab\u5220\u9664\uff0c\u53ea\u662f\u903b\u8f91\u6807\u8bb0\u5df2\u6d88\u8d39\u3002\u6d88\u606f\u5728\u4fdd\u5b58\u65f6\u95f4\u5230\u671f\u6216\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u88ab\u5220\u9664\u524d\uff0c\u6d88\u8d39\u8005\u4ecd\u7136\u53ef\u4ee5\u56de\u6eaf\u6d88\u606f\u91cd\u65b0\u6d88\u8d39\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6d88\u606f\u5220\u9664\uff1aApache RocketMQ\u6309\u7167\u6d88\u606f\u4fdd\u5b58\u673a\u5236\u6eda\u52a8\u6e05\u7406\u6700\u65e9\u7684\u6d88\u606f\u6570\u636e\uff0c\u5c06\u6d88\u606f\u4ece\u7269\u7406\u6587\u4ef6\u4e2d\u5220\u9664\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/featureBehavior/11messagestorepolicy"},"\u6d88\u606f\u5b58\u50a8\u548c\u6e05\u7406\u673a\u5236"),"\u3002"))),(0,a.yg)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,a.yg)("p",null,"\u666e\u901a\u6d88\u606f\u4ec5\u652f\u6301\u4f7f\u7528MessageType\u4e3aNormal\u4e3b\u9898\uff0c\u5373\u666e\u901a\u6d88\u606f\u53ea\u80fd\u53d1\u9001\u81f3\u7c7b\u578b\u4e3a\u666e\u901a\u6d88\u606f\u7684\u4e3b\u9898\u4e2d\uff0c\u53d1\u9001\u7684\u6d88\u606f\u7684\u7c7b\u578b\u5fc5\u987b\u548c\u4e3b\u9898\u7684\u7c7b\u578b\u4e00\u81f4\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u521b\u5efa\u4e3b\u9898")),(0,a.yg)("p",null,"Apache RocketMQ 5.0\u7248\u672c\u4e0b\u521b\u5efa\u4e3b\u9898\u64cd\u4f5c\uff0c\u63a8\u8350\u4f7f\u7528mqadmin\u5de5\u5177\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5bf9\u4e8e\u6d88\u606f\u7c7b\u578b\u9700\u8981\u901a\u8fc7\u5c5e\u6027\u53c2\u6570\u6dfb\u52a0\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sh mqadmin updateTopic -n <nameserver_address> -t <topic_name> -c <cluster_name> -a +message.type=NORMAL\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u53d1\u9001\u6d88\u606f"),"\n\u666e\u901a\u6d88\u606f\u652f\u6301\u8bbe\u7f6e\u6d88\u606f\u7d22\u5f15\u952e\u3001\u6d88\u606f\u8fc7\u6ee4\u6807\u7b7e\u7b49\u4fe1\u606f\uff0c\u7528\u4e8e\u6d88\u606f\u8fc7\u6ee4\u548c\u641c\u7d22\u67e5\u627e\u3002\u4ee5Java\u8bed\u8a00\u4e3a\u4f8b\uff0c\u6536\u53d1\u666e\u901a\u6d88\u606f\u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'//\u666e\u901a\u6d88\u606f\u53d1\u9001\u3002\nMessageBuilder messageBuilder = new MessageBuilderImpl();\nMessage message = messageBuilder.setTopic("topic")\n    //\u8bbe\u7f6e\u6d88\u606f\u7d22\u5f15\u952e\uff0c\u53ef\u6839\u636e\u5173\u952e\u5b57\u7cbe\u786e\u67e5\u627e\u67d0\u6761\u6d88\u606f\u3002\n    .setKeys("messageKey")\n    //\u8bbe\u7f6e\u6d88\u606fTag\uff0c\u7528\u4e8e\u6d88\u8d39\u7aef\u6839\u636e\u6307\u5b9aTag\u8fc7\u6ee4\u6d88\u606f\u3002\n    .setTag("messageTag")\n    //\u6d88\u606f\u4f53\u3002\n    .setBody("messageBody".getBytes())\n    .build();\ntry {\n    //\u53d1\u9001\u6d88\u606f\uff0c\u9700\u8981\u5173\u6ce8\u53d1\u9001\u7ed3\u679c\uff0c\u5e76\u6355\u83b7\u5931\u8d25\u7b49\u5f02\u5e38\u3002\n    SendReceipt sendReceipt = producer.send(message);\n    System.out.println(sendReceipt.getMessageId());\n} catch (ClientException e) {\n    e.printStackTrace();\n}\n//\u6d88\u8d39\u793a\u4f8b\u4e00\uff1a\u4f7f\u7528PushConsumer\u6d88\u8d39\u666e\u901a\u6d88\u606f\uff0c\u53ea\u9700\u8981\u5728\u6d88\u8d39\u76d1\u542c\u5668\u4e2d\u5904\u7406\u5373\u53ef\u3002\nMessageListener messageListener = new MessageListener() {\n    @Override\n    public ConsumeResult consume(MessageView messageView) {\n        System.out.println(messageView);\n        //\u6839\u636e\u6d88\u8d39\u7ed3\u679c\u8fd4\u56de\u72b6\u6001\u3002\n        return ConsumeResult.SUCCESS;\n    }\n};\n//\u6d88\u8d39\u793a\u4f8b\u4e8c\uff1a\u4f7f\u7528SimpleConsumer\u6d88\u8d39\u666e\u901a\u6d88\u606f\uff0c\u4e3b\u52a8\u83b7\u53d6\u6d88\u606f\u8fdb\u884c\u6d88\u8d39\u5904\u7406\u5e76\u63d0\u4ea4\u6d88\u8d39\u7ed3\u679c\u3002\nList<MessageView> messageViewList = null;\ntry {\n    messageViewList = simpleConsumer.receive(10, Duration.ofSeconds(30));\n    messageViewList.forEach(messageView -> {\n        System.out.println(messageView);\n        //\u6d88\u8d39\u5904\u7406\u5b8c\u6210\u540e\uff0c\u9700\u8981\u4e3b\u52a8\u8c03\u7528ACK\u63d0\u4ea4\u6d88\u8d39\u7ed3\u679c\u3002\n        try {\n            simpleConsumer.ack(messageView);\n        } catch (ClientException e) {\n            e.printStackTrace();\n        }\n    });\n} catch (ClientException e) {\n    //\u5982\u679c\u9047\u5230\u7cfb\u7edf\u6d41\u63a7\u7b49\u539f\u56e0\u9020\u6210\u62c9\u53d6\u5931\u8d25\uff0c\u9700\u8981\u91cd\u65b0\u53d1\u8d77\u83b7\u53d6\u6d88\u606f\u8bf7\u6c42\u3002\n    e.printStackTrace();\n}\n')),(0,a.yg)("h2",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u8bbe\u7f6e\u5168\u5c40\u552f\u4e00\u4e1a\u52a1\u7d22\u5f15\u952e\uff0c\u65b9\u4fbf\u95ee\u9898\u8ffd\u8e2a")," "),(0,a.yg)("p",null,"Apache RocketMQ\u652f\u6301\u81ea\u5b9a\u4e49\u7d22\u5f15\u952e\uff08\u6d88\u606f\u7684Key\uff09\uff0c\u5728\u6d88\u606f\u67e5\u8be2\u548c\u8f68\u8ff9\u67e5\u8be2\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u7d22\u5f15\u952e\u9ad8\u6548\u7cbe\u786e\u5730\u67e5\u8be2\u5230\u6d88\u606f\u3002"),(0,a.yg)("p",null,"\u56e0\u6b64\uff0c\u53d1\u9001\u6d88\u606f\u65f6\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e1a\u52a1\u4e0a\u552f\u4e00\u7684\u4fe1\u606f\u4f5c\u4e3a\u7d22\u5f15\uff0c\u65b9\u4fbf\u540e\u7eed\u5feb\u901f\u5b9a\u4f4d\u6d88\u606f\u3002\u4f8b\u5982\uff0c\u8ba2\u5355ID\uff0c\u7528\u6237ID\u7b49\u3002"))}m.isMDXComponent=!0},38615:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/lifecyclefornormal-e8a2a7e42a0722f681eb129b51e1bd66.png"},40743:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/offlineprocess-027f6f1642db3d78ff29890abbe38bf8.png"},61035:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/onlineprocess-cfd38e3de3a5fc1ee76f17331cc5b828.png"}}]);