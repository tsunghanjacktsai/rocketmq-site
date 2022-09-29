"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3170],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},k=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,k=c(t,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(d,l(l({ref:e},k),{},{components:n})):r.createElement(d,l({ref:e},k))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46666:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},l="\u5feb\u901f\u5f00\u59cb",c={unversionedId:"\u6570\u636e\u96c6\u6210/27RocketMQ Connect Quick Start",id:"version-5.0/\u6570\u636e\u96c6\u6210/27RocketMQ Connect Quick Start",title:"\u5feb\u901f\u5f00\u59cb",description:"License",source:"@site/versioned_docs/version-5.0/07-\u6570\u636e\u96c6\u6210/27RocketMQ Connect Quick Start.md",sourceDirName:"07-\u6570\u636e\u96c6\u6210",slug:"/\u6570\u636e\u96c6\u6210/27RocketMQ Connect Quick Start",permalink:"/zh/docs/\u6570\u636e\u96c6\u6210/27RocketMQ Connect Quick Start",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/07-\u6570\u636e\u96c6\u6210/27RocketMQ Connect Quick Start.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u6982\u5ff5",permalink:"/zh/docs/\u6570\u636e\u96c6\u6210/26RocketMQ Connect Concept"},next:{title:"RocketMQ Connect\u5b9e\u62181",permalink:"/zh/docs/\u6570\u636e\u96c6\u6210/28RocketMQ Connect In Action1"}},i={},p=[{value:"1.\u51c6\u5907",id:"1\u51c6\u5907",level:2},{value:"2.\u6784\u5efaConnect",id:"2\u6784\u5efaconnect",level:2},{value:"3.\u8fd0\u884cWorker",id:"3\u8fd0\u884cworker",level:2},{value:"4.\u542f\u52a8source connector",id:"4\u542f\u52a8source-connector",level:2},{value:"source connector\u914d\u7f6e\u8bf4\u660e",id:"source-connector\u914d\u7f6e\u8bf4\u660e",level:4},{value:"5.\u542f\u52a8sink connector",id:"5\u542f\u52a8sink-connector",level:2},{value:"sink connector\u914d\u7f6e\u8bf4\u660e",id:"sink-connector\u914d\u7f6e\u8bf4\u660e",level:4},{value:"6.\u505c\u6b62connector",id:"6\u505c\u6b62connector",level:2},{value:"7.\u505c\u6b62Worker\u8fdb\u7a0b",id:"7\u505c\u6b62worker\u8fdb\u7a0b",level:2},{value:"8.\u65e5\u5fd7\u76ee\u5f55",id:"8\u65e5\u5fd7\u76ee\u5f55",level:2},{value:"9.\u914d\u7f6e\u6587\u4ef6",id:"9\u914d\u7f6e\u6587\u4ef6",level:2},{value:"10.\u914d\u7f6e\u8bf4\u660e",id:"10\u914d\u7f6e\u8bf4\u660e",level:2}],k={toc:p};function s(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0.html"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/license-Apache%202-4EB1BA.svg",alt:"License"}))),(0,o.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb-1"},"\u5feb\u901f\u5f00\u59cb"),(0,o.kt)("p",null,"\u5355\u673a\u6a21\u5f0f\u4e0b","[rocketmq-connect-sample]","\u4f5c\u4e3a demo"),(0,o.kt)("p",null,"rocketmq-connect-sample\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u4ece\u6e90\u6587\u4ef6\u4e2d\u8bfb\u53d6\u6570\u636e\u53d1\u9001\u5230RocketMQ\u96c6\u7fa4 \u7136\u540e\u4eceTopic\u4e2d\u8bfb\u53d6\u6d88\u606f\uff0c\u5199\u5165\u5230\u76ee\u6807\u6587\u4ef6"),(0,o.kt)("h2",{id:"1\u51c6\u5907"},"1.\u51c6\u5907"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,o.kt)("li",{parentName:"ol"},"64bit JDK 1.8+;"),(0,o.kt)("li",{parentName:"ol"},"Maven 3.2.x\u6216\u4ee5\u4e0a\u7248\u672c;"),(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8 ",(0,o.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ"),";"),(0,o.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6d4b\u8bd5Topic",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"sh ${ROCKETMQ_HOME}/bin/mqadmin updateTopic -t fileTopic -n localhost:9876 -c DefaultCluster -r 8 -w 8")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"tips")," : ${ROCKETMQ_HOME} \u4f4d\u7f6e\u8bf4\u660e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"bin-release.zip \u7248\u672c\uff1a/rocketmq-all-4.9.4-bin-release"),(0,o.kt)("p",{parentName:"blockquote"},"source-release.zip \u7248\u672c\uff1a/rocketmq-all-4.9.4-source-release/distribution")),(0,o.kt)("h2",{id:"2\u6784\u5efaconnect"},"2.\u6784\u5efaConnect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/apache/rocketmq-connect.git\n\ncd  rocketmq-connect\n\nmvn -Prelease-connect -DskipTests clean install -U\n\n")),(0,o.kt)("h2",{id:"3\u8fd0\u884cworker"},"3.\u8fd0\u884cWorker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n\nsh bin/connect-standalone.sh -c conf/connect-standalone.conf &\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"tips"),": \u53ef\u4fee\u6539 /bin/runconnect.sh \u9002\u5f53\u8c03\u6574 JVM Parameters Configuration"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'JAVA_OPT="${JAVA_OPT} -server -Xms256m -Xmx256m"')),(0,o.kt)("p",null,"runtime\u542f\u52a8\u6210\u529f\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The standalone worker boot success.")),(0,o.kt)("p",null,"\u67e5\u770b\u542f\u52a8\u65e5\u5fd7\u6587\u4ef6\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"tail -100f ~/logs/rocketmqconnect/connect_runtime.log")),(0,o.kt)("p",null,"ctrl + c \u9000\u51fa\u65e5\u5fd7"),(0,o.kt)("h2",{id:"4\u542f\u52a8source-connector"},"4.\u542f\u52a8source connector"),(0,o.kt)("p",null,"\u5f53\u524d\u76ee\u5f55\u521b\u5efa\u6d4b\u8bd5\u6587\u4ef6 test-source-file.txt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'touch test-source-file.txt\n\necho "Hello \\r\\nRocketMQ\\r\\n Connect" >> test-source-file.txt\n\ncurl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/fileSourceConnector -d \'{"connector.class":"org.apache.rocketmq.connect.file.FileSourceConnector","filename":"test-source-file.txt","connect.topicname":"fileTopic"}\'\n')),(0,o.kt)("p",null,"\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u8bf4\u660e file source connector \u542f\u52a8\u6210\u529f\u4e86"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"tail -100f ~/logs/rocketmqconnect/connect_runtime.log"),(0,o.kt)("p",{parentName:"blockquote"},"2019-07-16 11:18:39 INFO pool-7-thread-1 - ",(0,o.kt)("strong",{parentName:"p"},"Source task start"),', config:{"properties":{"source-record-...')),(0,o.kt)("h4",{id:"source-connector\u914d\u7f6e\u8bf4\u660e"},"source connector\u914d\u7f6e\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"key"),(0,o.kt)("th",{parentName:"tr",align:null},"nullable"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connector.class"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u5b9e\u73b0 Connector\u63a5\u53e3\u7684\u7c7b\u540d\u79f0\uff08\u5305\u542b\u5305\u540d\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"filename"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6e90\u6587\u4ef6\u540d\u79f0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connect.topicname"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u540c\u6b65\u6587\u4ef6\u6570\u636e\u6240\u9700topic")))),(0,o.kt)("h2",{id:"5\u542f\u52a8sink-connector"},"5.\u542f\u52a8sink connector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/fileSinkConnector -d \'{"connector.class":"org.apache.rocketmq.connect.file.FileSinkConnector","filename":"test-sink-file.txt","connect.topicnames":"fileTopic"}\'\n\ncat test-sink-file.txt\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"tail -100f ~/logs/rocketmqconnect/connect_runtime.log")),(0,o.kt)("p",null,"\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u8bf4\u660efile sink connector \u542f\u52a8\u6210\u529f\u4e86"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"2019-07-16 11:24:58 INFO pool-7-thread-2 - ",(0,o.kt)("strong",{parentName:"p"},"Sink task start"),', config:{"properties":{"source-record-...')),(0,o.kt)("p",null,"\u5982\u679c test-sink-file.txt \u751f\u6210\u5e76\u4e14\u4e0e source-file.txt \u5185\u5bb9\u4e00\u6837\uff0c\u8bf4\u660e\u6574\u4e2a\u6d41\u7a0b\u6b63\u5e38\u8fd0\u884c\u3002\n\u6587\u4ef6\u5185\u5bb9\u53ef\u80fd\u987a\u5e8f\u4e0d\u4e00\u6837\uff0c\u8fd9\u4e3b\u8981\u662f\u56e0\u4e3aRocketMQ\u53d1\u5230\u4e0d\u540cqueue\u65f6\uff0c\u63a5\u6536\u4e0d\u540cqueue\u6d88\u606f\u987a\u5e8f\u53ef\u80fd\u4e5f\u4e0d\u4e00\u81f4\u5bfc\u81f4\u7684\uff0c\u662f\u6b63\u5e38\u7684\u3002"),(0,o.kt)("h4",{id:"sink-connector\u914d\u7f6e\u8bf4\u660e"},"sink connector\u914d\u7f6e\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"key"),(0,o.kt)("th",{parentName:"tr",align:null},"nullable"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connector.class"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u5b9e\u73b0Connector\u63a5\u53e3\u7684\u7c7b\u540d\u79f0\uff08\u5305\u542b\u5305\u540d\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"filename"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"sink\u62c9\u53bb\u7684\u6570\u636e\u4fdd\u5b58\u5230\u6587\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connect.topicnames"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"sink\u9700\u8981\u5904\u7406\u6570\u636e\u6d88\u606ftopics")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u6ce8\uff1asource/sink\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e\u662f\u4ee5rocketmq-connect-sample\u4e3ademo\uff0c\u4e0d\u540csource/sink connector\u914d\u7f6e\u6709\u5dee\u5f02\uff0c\u8bf7\u4ee5\u5177\u4f53sourc/sink connector \u4e3a\u51c6\n")),(0,o.kt)("h2",{id:"6\u505c\u6b62connector"},"6.\u505c\u6b62connector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"GET\u8bf7\u6c42  \nhttp://(your worker ip):(port)/connectors/(connector name)/stop\n\n\u505c\u6b62demo\u4e2d\u7684\u4e24\u4e2aconnector\ncurl     http://127.0.0.1:8082/connectors/fileSinkConnector/stop\ncurl     http://127.0.0.1:8082/connectors/fileSourceConnector/stop\n    \n")),(0,o.kt)("p",null,"\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u8bf4\u660econnector\u505c\u6b62\u6210\u529f\u4e86"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Source task stop"),', config:{"properties":{"source-record-converter":"org.apache.rocketmq.connect.runtime.converter.JsonConverter","filename":"/home/zhoubo/IdeaProjects/my-new3-rocketmq-externals/rocketmq-connect/rocketmq-connect-runtime/source-file.txt","task-class":"org.apache.rocketmq.connect.file.FileSourceTask","topic":"fileTopic","connector-class":"org.apache.rocketmq.connect.file.FileSourceConnector","update-timestamp":"1564765189322"}}')),(0,o.kt)("h2",{id:"7\u505c\u6b62worker\u8fdb\u7a0b"},"7.\u505c\u6b62Worker\u8fdb\u7a0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh bin/connectshutdown.sh\n")),(0,o.kt)("h2",{id:"8\u65e5\u5fd7\u76ee\u5f55"},"8.\u65e5\u5fd7\u76ee\u5f55"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"${user.home}/logs/rocketmqconnect")),(0,o.kt)("h2",{id:"9\u914d\u7f6e\u6587\u4ef6"},"9.\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("p",null,"\u6301\u4e45\u5316\u914d\u7f6e\u6587\u4ef6\u9ed8\u8ba4\u76ee\u5f55 /tmp/storeRoot"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"key"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connectorConfig.json"),(0,o.kt)("td",{parentName:"tr",align:null},"connector\u914d\u7f6e\u6301\u4e45\u5316\u6587\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"position.json"),(0,o.kt)("td",{parentName:"tr",align:null},"source connect\u6570\u636e\u5904\u7406\u8fdb\u5ea6\u6301\u4e45\u5316\u6587\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"taskConfig.json"),(0,o.kt)("td",{parentName:"tr",align:null},"task\u914d\u7f6e\u6301\u4e45\u5316\u6587\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"offset.json"),(0,o.kt)("td",{parentName:"tr",align:null},"sink connect\u6570\u636e\u6d88\u8d39\u8fdb\u5ea6\u6301\u4e45\u5316\u6587\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connectorStatus.json"),(0,o.kt)("td",{parentName:"tr",align:null},"connector \u72b6\u6001\u6301\u4e45\u5316\u6587\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"taskStatus.json"),(0,o.kt)("td",{parentName:"tr",align:null},"task \u72b6\u6001\u6301\u4e45\u5316\u6587\u4ef6")))),(0,o.kt)("h2",{id:"10\u914d\u7f6e\u8bf4\u660e"},"10.\u914d\u7f6e\u8bf4\u660e"),(0,o.kt)("p",null,"\u53ef\u6839\u636e\u4f7f\u7528\u60c5\u51b5\u4fee\u6539 ",(0,o.kt)("a",{parentName:"p",href:"https://restfulapi.cn/"},"RESTful")," \u7aef\u53e3\uff0cstoreRoot \u8def\u5f84\uff0cNameserver \u5730\u5740\u7b49\u4fe1\u606f"),(0,o.kt)("p",null,"\u6587\u4ef6\u4f4d\u7f6e\uff1awork \u542f\u52a8\u76ee\u5f55\u4e0b conf/connect-standalone.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#current cluster node uniquely identifies\nworkerId=DEFAULT_WORKER_1\n\n# Http prot for user to access REST API\nhttpPort=8082\n\n# Local file dir for config store\nstorePathRootDir=/home/connect/storeRoot\n\n#\u9700\u8981\u4fee\u6539\u4e3a\u81ea\u5df1\u7684rocketmq nameserver \u63a5\u5165\u70b9\n# RocketMQ namesrvAddr\nnamesrvAddr=127.0.0.1:9876  \n\n#\u7528\u4e8e\u52a0\u8f7dConnector\u63d2\u4ef6\uff0c\u7c7b\u4f3c\u4e8ejvm\u542f\u52a8\u52a0\u8f7djar\u5305\u6216\u8005class\u7c7b\uff0c\u8fd9\u91cc\u76ee\u5f55\u76ee\u5f55\u7528\u4e8e\u653eConnector\u76f8\u5173\u7684\u5b9e\u73b0\u63d2\u4ef6\uff0c\n\u652f\u6301\u6587\u4ef6\u548c\u76ee\u5f55\n# Source or sink connector jar file dir\npluginPaths=rocketmq-connect-sample/target/rocketmq-connect-sample-0.0.1-SNAPSHOT.jar\n\n# \u8865\u5145\uff1a\u5c06 Connector \u76f8\u5173\u5b9e\u73b0\u63d2\u4ef6\u4fdd\u5b58\u5230\u6307\u5b9a\u6587\u4ef6\u5939 \n# pluginPaths=/usr/local/connector-plugins/*\n")))}s.isMDXComponent=!0}}]);