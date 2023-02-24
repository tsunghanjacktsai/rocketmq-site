"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||l;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97843:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const l={},a="DLedger",i={unversionedId:"bestPractice/02dledger",id:"version-5.0/bestPractice/02dledger",title:"DLedger",description:"DLedger Quick Deployment",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/06-bestPractice/02dledger.md",sourceDirName:"06-bestPractice",slug:"/bestPractice/02dledger",permalink:"/docs/bestPractice/02dledger",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/06-bestPractice/02dledger.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Basic Best Practices",permalink:"/docs/bestPractice/01bestpractice"},next:{title:"Access Control",permalink:"/docs/bestPractice/03access"}},d={},s=[{value:"DLedger Quick Deployment",id:"dledger-quick-deployment",level:2},{value:"Preface",id:"preface",level:3},{value:"1. Build from source code",id:"1-build-from-source-code",level:3},{value:"1.1 Build DLedger",id:"11-build-dledger",level:4},{value:"1.2 Build RocketMQ",id:"12-build-rocketmq",level:4},{value:"2. Quick Deployment",id:"2-quick-deployment",level:3},{value:"3. Failover",id:"3-failover",level:3},{value:"Dledger cluster deployment",id:"dledger-cluster-deployment",level:2},{value:"1. New cluster deployment",id:"1-new-cluster-deployment",level:3},{value:"1.1 Write the configuration",id:"11-write-the-configuration",level:4},{value:"1.2 Start Broker",id:"12-start-broker",level:3},{value:"2. Upgrade old cluster",id:"2-upgrade-old-cluster",level:2},{value:"2.1 Kill old Broker",id:"21-kill-old-broker",level:3},{value:"2.2 Check old Commitlog",id:"22-check-old-commitlog",level:3},{value:"2.3 Modify configuration",id:"23-modify-configuration",level:3},{value:"2.4 Restart Broker",id:"24-restart-broker",level:3}],c={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dledger"},"DLedger"),(0,o.kt)("h2",{id:"dledger-quick-deployment"},"DLedger Quick Deployment"),(0,o.kt)("h3",{id:"preface"},"Preface"),(0,o.kt)("p",null,"DLedger is a set of distributed log storage components based on Raft protocol. When deploying RocketMQ, you can choose to use DLedger to replace the native replica storage mechanism. This document is mainly introduced for how to build and deploy auto failover RocketMQ cluster based on DLedger."),(0,o.kt)("h3",{id:"1-build-from-source-code"},"1. Build from source code"),(0,o.kt)("p",null,"The build phase is divided into two parts, DLedger should be built first, and then build RocketMQ."),(0,o.kt)("h4",{id:"11-build-dledger"},"1.1 Build DLedger"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/openmessaging/dledger.git\n$ cd dledger\n$ mvn clean install -DskipTests\n")),(0,o.kt)("h4",{id:"12-build-rocketmq"},"1.2 Build RocketMQ"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/apache/rocketmq.git\n$ cd rocketmq\n$ git checkout -b store_with_dledger origin/store_with_dledger\n$ mvn -Prelease-all -DskipTests clean install -U\n")),(0,o.kt)("h3",{id:"2-quick-deployment"},"2. Quick Deployment"),(0,o.kt)("p",null,"After building successfully"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#{rocketmq-version} replace with rocketmq actual version. example: 5.0.0-SNAPSHOT\n$ cd distribution/target/rocketmq-{rocketmq-version}/rocketmq-{rocketmq-version}\n$ sh bin/dledger/fast-try.sh start\n")),(0,o.kt)("p",null,"If the above commands executed successfully, then check cluster status by using mqadmin operation commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh bin/mqadmin clusterList -n 127.0.0.1:9876\n")),(0,o.kt)("p",null,"If everything goes well, the following content will appear:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/5476e8b07b923/TB11Z.ZyCzqK1RjSZFLXXcn2XXa",alt:"ClusterList"})),(0,o.kt)("p",null,"\uff08BID is 0 indicate Master, the others are Follower\uff09"),(0,o.kt)("p",null,"After the startup is successful, producer can produce message, and then test failover scenario."),(0,o.kt)("p",null,"Execute the following command to stop the cluster quickly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh bin/dledger/fast-try.sh stop\n")),(0,o.kt)("p",null,"Quick deployment, default configuration is in directory conf/dledger, default storage path is /tmp/rmqstore."),(0,o.kt)("h3",{id:"3-failover"},"3. Failover"),(0,o.kt)("p",null,"After the successful deployment, kill the Leader process(as the above example, kill process that binds port 30931), then wait for 10 seconds, use clusterList command to check cluster status, and you could find that the Leader has been switched to another node."),(0,o.kt)("h2",{id:"dledger-cluster-deployment"},"Dledger cluster deployment"),(0,o.kt)("p",null,"This document introduces how to deploy auto failover RocketMQ-on-DLedger Group."),(0,o.kt)("p",null,"RocketMQ-on-DLedger Group is a broker group with ",(0,o.kt)("strong",{parentName:"p"},"same name"),", needs at least 3 nodes, elect a Leader by Raft algorithm automatically, the others as Follower, replicating data between Leader and Follower for system high available.\nRocketMQ-on-DLedger Group can failover automatically, and maintains consistent.\nRocketMQ-on-DLedger Group can scale up horizontal, that is, can deploy any RocketMQ-on-DLedger Groups providing services external.  "),(0,o.kt)("h3",{id:"1-new-cluster-deployment"},"1. New cluster deployment"),(0,o.kt)("h4",{id:"11-write-the-configuration"},"1.1 Write the configuration"),(0,o.kt)("p",null,"Each RocketMQ-on-DLedger Group needs at least 3 machines.(assuming 3 in this document)\nwrite 3 configuration files, advising refer to the directory of conf/dledger 's example configuration file.\nkey configuration items:  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"meaning"),(0,o.kt)("th",{parentName:"tr",align:null},"example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"enableDLegerCommitLog"),(0,o.kt)("td",{parentName:"tr",align:null},"whether enable DLedger"),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dLegerGroup"),(0,o.kt)("td",{parentName:"tr",align:null},"DLedger Raft Group's name, advising maintain consistent to brokerName"),(0,o.kt)("td",{parentName:"tr",align:null},"RaftNode00")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dLegerPeers"),(0,o.kt)("td",{parentName:"tr",align:null},"DLedger Group's nodes port infos, each node's configuration stay consistent in the same group."),(0,o.kt)("td",{parentName:"tr",align:null},"n0-127.0.0.1:40911;n1-127.0.0.1:40912;n2-127.0.0.1:40913")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dLegerSelfId"),(0,o.kt)("td",{parentName:"tr",align:null},"node id, must belongs to dLegerPeers; each node is unique in the same group."),(0,o.kt)("td",{parentName:"tr",align:null},"n0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sendMessageThreadPoolNums"),(0,o.kt)("td",{parentName:"tr",align:null},"the count of sending thread, advising set equal to the cpu cores."),(0,o.kt)("td",{parentName:"tr",align:null},"16")))),(0,o.kt)("p",null,"The following presents an example configuration conf/dledger/broker-n0.conf.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brokerClusterName = RaftCluster\nbrokerName=RaftNode00\nlistenPort=30911\nnamesrvAddr=127.0.0.1:9876\nstorePathRootDir=/tmp/rmqstore/node00\nstorePathCommitLog=/tmp/rmqstore/node00/commitlog\nenableDLegerCommitLog=true\ndLegerGroup=RaftNode00\ndLegerPeers=n0-127.0.0.1:40911;n1-127.0.0.1:40912;n2-127.0.0.1:40913\n## must be unique\ndLegerSelfId=n0\nsendMessageThreadPoolNums=16\n")),(0,o.kt)("h3",{id:"12-start-broker"},"1.2 Start Broker"),(0,o.kt)("p",null,"Startup stays consistent with the old version."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nohup sh bin/mqbroker -c conf/dledger/xxx-n0.conf & "),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"nohup sh bin/mqbroker -c conf/dledger/xxx-n1.conf & "),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"nohup sh bin/mqbroker -c conf/dledger/xxx-n2.conf & "),"  "),(0,o.kt)("h2",{id:"2-upgrade-old-cluster"},"2. Upgrade old cluster"),(0,o.kt)("p",null,"If old cluster deployed in Master mode, then each Master needs to be transformed into a RocketMQ-on-DLedger Group.",(0,o.kt)("br",{parentName:"p"}),"\n","If old cluster deployed in Master-Slave mode, then each Master-Slave group needs to be transformed into a RocketMQ-on-DLedger Group."),(0,o.kt)("h3",{id:"21-kill-old-broker"},"2.1 Kill old Broker"),(0,o.kt)("p",null,"Execute kill command, or call ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/mqshutdown broker"),"."),(0,o.kt)("h3",{id:"22-check-old-commitlog"},"2.2 Check old Commitlog"),(0,o.kt)("p",null,"Each node in RocketMQ-on-DLedger group is compatible with old Commitlog, but Raft replicating process works on the adding message only. So, to avoid occurring exceptions, old Commitlog must be consistent.\nIf old cluster deployed in Master-Slave mode, it maybe inconsistent after shutdown. Advising use md5sum to check at least 2 recently Commitlog file, if occur inconsistent, maintain consistent by copy."),(0,o.kt)("p",null,"Although RocketMQ-on-DLedger Group can deployed with 2 nodes, it lacks failover ability(at least 3 nodes can tolerate one node fail).\nMake sure that both Master and Slave's Commitlog is consistent, then prepare 3 machines, copy old Commitlog from Master to this 3 machines(BTW, copy the config directory)."),(0,o.kt)("p",null,"Then, go ahead to set configurations."),(0,o.kt)("h3",{id:"23-modify-configuration"},"2.3 Modify configuration"),(0,o.kt)("p",null,"Refer to New cluster deployment."),(0,o.kt)("h3",{id:"24-restart-broker"},"2.4 Restart Broker"),(0,o.kt)("p",null,"Refer to New cluster deployment."))}p.isMDXComponent=!0}}]);