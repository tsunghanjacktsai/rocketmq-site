"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8157],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var s=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return t?s.createElement(h,o(o({ref:n},d),{},{components:t})):s.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=t[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:(e,n,t)=>{t.d(n,{Z:()=>a});var s=t(7294);const a=function(e){let{children:n,hidden:t,className:a}=e;return s.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5064:(e,n,t)=>{t.d(n,{Z:()=>l});var s=t(7294),a=t(9443);const r=function(){const e=(0,s.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var o=t(6010);const i="tabItem_vU9c",c="tabItemActive_cw6a";const l=function(e){var n;const{lazy:t,block:a,defaultValue:l,values:d,groupId:u,className:p}=e,m=s.Children.toArray(e.children),h=d??m.map((e=>({value:e.props.value,label:e.props.label}))),g=l??(null==(n=m.find((e=>e.props.default)))?void 0:n.props.value),{tabGroupChoices:f,setTabGroupChoices:y}=r(),[v,b]=(0,s.useState)(g),k=[];if(null!=u){const e=f[u];null!=e&&e!==v&&h.some((n=>n.value===e))&&b(e)}const w=e=>{const n=e.currentTarget,t=k.indexOf(n),s=h[t].value;b(s),null!=u&&(y(u,s),setTimeout((()=>{(function(e){const{top:n,left:t,bottom:s,right:a}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return n>=0&&a<=o&&s<=r&&t>=0})(n)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((()=>n.classList.remove(c)),2e3))}),150))},T=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=k.indexOf(e.target)+1;t=k[n]||k[0];break}case"ArrowLeft":{const n=k.indexOf(e.target)-1;t=k[n]||k[k.length-1];break}}null==(n=t)||n.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},p)},h.map((e=>{let{value:n,label:t}=e;return s.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":v===n}),key:n,ref:e=>k.push(e),onKeyDown:T,onFocus:w,onClick:w},t??n)}))),t?(0,s.cloneElement)(m.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},m.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}},9443:(e,n,t)=>{t.d(n,{Z:()=>s});const s=(0,t(7294).createContext)(void 0)},355:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(7462),a=(t(7294),t(3905)),r=t(5064),o=t(8215);const i={},c="Simple Message Sending",l={unversionedId:"\u751f\u4ea7\u8005/05message1",id:"\u751f\u4ea7\u8005/05message1",isDocsHomePage:!1,title:"Simple Message Sending",description:"1.Creating Topic in Cluster",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02-\u751f\u4ea7\u8005/05message1.md",sourceDirName:"02-\u751f\u4ea7\u8005",slug:"/\u751f\u4ea7\u8005/05message1",permalink:"/en/docs/\u751f\u4ea7\u8005/05message1",editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/02-\u751f\u4ea7\u8005/05message1.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Core Concept",permalink:"/en/docs/\u751f\u4ea7\u8005/04concept1"},next:{title:"Ordered Message Sending",permalink:"/en/docs/\u751f\u4ea7\u8005/06message2"}},d=[{value:"1.Creating Topic in Cluster",id:"1creating-topic-in-cluster",children:[]},{value:"2.Adding Client-Side Dependency",id:"2adding-client-side-dependency",children:[]},{value:"3.Message Sending",id:"3message-sending",children:[{value:"3.1 Synchronous Sending",id:"31-synchronous-sending",children:[]},{value:"3.2 Asynchronous Sending",id:"32-asynchronous-sending",children:[]},{value:"3.3 One-Way Sending",id:"33-one-way-sending",children:[]}]}],u={toc:d};function p(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simple-message-sending"},"Simple Message Sending"),(0,a.kt)("h2",{id:"1creating-topic-in-cluster"},"1.Creating Topic in Cluster"),(0,a.kt)("p",null,"RocketMQ cluster is enabled by default with ",(0,a.kt)("strong",{parentName:"p"},"autoCreateTopicEnable")," configuration, which will automatically create Topics for the sent messages. If autoCreateTopicEnable is not enabled, you can also use the RocketMQ Admin tool to create the target Topic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> sh bin/mqadmin updateTopic -c DefaultCluster -t TopicTest -n 127.0.0.1:9876\ncreate topic to 127.0.0.1:10911 success.\nTopicConfig [topicName=TopicTest, readQueueNums=8, writeQueueNums=8, perm=RW-, topicFilterType=SINGLE_TAG, topicSysFlag=0, order=false, attributes=null]\n")),(0,a.kt)("p",null,"After executing the command above, 8 queues are created on the Broker machine with the Topic named TopicTest."),(0,a.kt)("h2",{id:"2adding-client-side-dependency"},"2.Adding Client-Side Dependency"),(0,a.kt)("p",null,"Firstly, add RocketMQ client-side dependency to JAVA application."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Maven",label:"Maven",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"<dependency>\n  <groupId>org.apache.rocketmq</groupId>\n  <artifactId>rocketmq-client</artifactId>\n  <version>4.9.4</version>\n</dependency>\n"))),(0,a.kt)(o.Z,{value:"Gradle",label:"Gradle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"compile 'org.apache.rocketmq:rocketmq-client:4.9.4'\n")))),(0,a.kt)("h2",{id:"3message-sending"},"3.Message Sending"),(0,a.kt)("p",null,"Apache RocketMQ sends messages in three ways: ",(0,a.kt)("strong",{parentName:"p"},"synchronous, asynchronous, and one-way"),". The first two message types are reliable since the response will be returned from the server regardless of whether their messages are successfully sent or not."),(0,a.kt)("h3",{id:"31-synchronous-sending"},"3.1 Synchronous Sending"),(0,a.kt)("p",null,"Synchronous Sending is a communication method in which the message sender sends a message and will send the next message only after receiving a synchronous response from the server. Reliable synchronous transmission is widely used in various scenarios, such as important notification messages, short message notifications, etc."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u540c\u6b65\u53d1\u9001",src:t(1731).Z})),(0,a.kt)("p",null,"The entire code for synchronous sending is as follows: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Create a Producer"),". Create a DefaultMQProducer in advance. The Producer should contain the name of the Producer group, which is a collection of Producer, they would send the same type of messages with identical logic."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Set the address of NameServer"),'. Apache RocketMQ is able to set the address of the NameServer (described in the client configuration) in many ways. The following example is set by calling the producer\'s setNamesrvAddr() method in the code, separated by a semicolon if there is more than one NameServer, such as "127.0.0.2:9876;127.0.0.3:9876".'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Build the message"),". Set the topic, tag, body, and so on. The tag can be understood as a label to categorize the message, and RocketMQ can filter the tag on the Consumer side."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Call the send() method to send the message"),". Ultimately, the send() method will return a SendResult. The SendResut contains the actual send status including SEND_OK (send success), FLUSH_DISK_TIMEOUT (disk flush timeout), FLUSH_SLAVE_TIMEOUT (sync to slave timeout), SLAVE_NOT_AVAILABLE (slave can not be used), and an exception is thrown if it fails.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{16,15}","{16,15}":!0},'public class SyncProducer {\n  public static void main(String[] args) throws Exception {\n    // Initialize a producer and set the Producer group name\n    DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name"); //\uff081\uff09\n    // Set the address of NameServer\n    producer.setNamesrvAddr("localhost:9876");  //\uff082\uff09\n    // Start Producer\n    producer.start();\n    for (int i = 0; i < 100; i++) {\n      // Create a message and set the topic, tag, body and so on. The tag can be understood as a label to categorize the message, and RocketMQ can filter the tag on the consumer side.\n      Message msg = new Message("TopicTest" /* Topic */,\n        "TagA" /* Tag */,\n        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */\n        );   //\uff083\uff09\n      // Use the producer to send and wait for the result of sending synchronously\n      SendResult sendResult = producer.send(msg);   //\uff084\uff09\n      System.out.printf("%s%n", sendResult);\n    }\n    // Close the producer once it is no longer in use\n    producer.shutdown();\n  }\n}\n')),(0,a.kt)("h3",{id:"32-asynchronous-sending"},"3.2 Asynchronous Sending"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5f02\u6b65\u53d1\u9001",src:t(4380).Z})),(0,a.kt)("p",null,"Asynchronous sending is a sending method in which the sender sends messages continuously without waiting for the server to return a response.\nAsynchronous sending requires the implementation of the ",(0,a.kt)("strong",{parentName:"p"},"Asynchronous Send Callback Interface")," (SendCallback)."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Asynchronous sending requires the implementation of the ",(0,a.kt)("strong",{parentName:"p"},"Asynchronous SendCallback Interface"),"."))),(0,a.kt)("p",null,"After sending a message, the sender does not need to wait for a response from the server to send the next message. The sender receives the response from the server through the callback interface and handles the result. Asynchronous sending is generally used in time-consuming and response time sensitive business scenarios. For example, the video upload notifies the start of transcoding service, and notifies the push of transcoding result after transcoding is completed."),(0,a.kt)("p",null,"The following is the sample code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{16,17}","{16,17}":!0},'public class AsyncProducer {\n  public static void main(String[] args) throws Exception {\n    // Initialize a producer and set the Producer group name\n    DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n    // Set the address of NameServer\n    producer.setNamesrvAddr("localhost:9876");\n    // Start Producer\n    producer.start();\n    producer.setRetryTimesWhenSendAsyncFailed(0);\n    for (int i = 0; i < 100; i++) {\n      final int index = i;\n      // Create a message and set the topic, tag, body and so on. The tag can be understood as a label to categorize the message, and RocketMQ can filter the tag on the consumer side.\n      Message msg = new Message("TopicTest",\n        "TagA",\n        "Hello world".getBytes(RemotingHelper.DEFAULT_CHARSET));\n      // Send a message asynchronously, the result is returned to the client by callback\n      producer.send(msg, new SendCallback() {\n        @Override\n        public void onSuccess(SendResult sendResult) {\n          System.out.printf("%-10d OK %s %n", index,\n            sendResult.getMsgId());\n        }\n        @Override\n        public void onException(Throwable e) {\n          System.out.printf("%-10d Exception %s %n", index, e);\n          e.printStackTrace();\n        }\n      });\n    }\n    // Close the producer once it is no longer in use\n    producer.shutdown();\n  }\n}\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The only difference between asynchronous and synchronous sending methods is the parameters for calling the sending interface. Asynchronous sending does not wait for the return of send() method, instead, it will carry the SendCallback implementation. The SendCallback interface has two methods (onSuccess and onException), indicating that the message is sent successfully or failed."))),(0,a.kt)("h3",{id:"33-one-way-sending"},"3.3 One-Way Sending"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5355\u9879\u6a21\u5f0f\u53d1\u9001",src:t(9333).Z})),(0,a.kt)("p",null,"The sender is only responsible for sending the message and does not wait for the server to return a response and no callback function is triggered, in other words, it only sends the request and does not wait for the answer. The process of sending messages in this way is very short, usually in the microsecond level. It is suitable for some scenarios where the time consumption is very short, but the reliability requirement is not high, such as log collection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{16}","{16}":!0},'public class OnewayProducer {\n  public static void main(String[] args) throws Exception{\n    // Initialize a producer and set the Producer group name\n    DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n    // Set the address of NameServer\n    producer.setNamesrvAddr("localhost:9876");\n    // Start Producer\n    producer.start();\n    for (int i = 0; i < 100; i++) {\n      // Create a message and set the topic, tag, body and so on. The tag can be understood as a label to categorize the message, and RocketMQ can filter the tag on the consumer side.\n      Message msg = new Message("TopicTest" /* Topic */,\n        "TagA" /* Tag */,\n        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */\n      );\n      // Since there is no request-answer processing when sending messages in the oneway method, if there is a message sending failure, data will be lost because there is no retry. If data cannot be lost, it is recommended to use the reliable synchronous or reliable asynchronous sending method.\n      producer.sendOneway(msg);\n    }\n     // Close the producer once it is no longer in use\n     producer.shutdown();\n  }\n}\n')),(0,a.kt)("p",null,"One-way mode will call the sendOneway() method, which does not wait or process the returned result."))}p.isMDXComponent=!0},6010:(e,n,t)=>{function s(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=s(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:()=>a});const a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=s(e))&&(a&&(a+=" "),a+=n);return a}},9333:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/Oneway\u53d1\u9001-bc1379bd3b8f382c23ff7abac1e0ed95.png"},1731:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/\u540c\u6b65\u53d1\u9001-6a8c78dae434afe4fbd970a2836f740c.png"},4380:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/\u5f02\u6b65\u53d1\u9001-c05e8e1111d99d8b8b4626e419e9f8e5.png"}}]);