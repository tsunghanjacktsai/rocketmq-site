"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6541],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=l(t),u=r,y=g["".concat(p,".").concat(u)]||g[u]||c[u]||o;return t?n.createElement(y,i(i({ref:a},m),{},{components:t})):n.createElement(y,i({ref:a},m))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42268:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(58168),r=(t(96540),t(15680));const o={},i="FAQs",s={unversionedId:"bestPractice/06FAQ",id:"version-5.0/bestPractice/06FAQ",title:"FAQs",description:"Common questions about the RocketMQ project:",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/06-bestPractice/06FAQ.md",sourceDirName:"06-bestPractice",slug:"/bestPractice/06FAQ",permalink:"/docs/bestPractice/06FAQ",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/06-bestPractice/06FAQ.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Consistent Subscription Relationship",permalink:"/docs/bestPractice/05subscribe"},next:{title:"RocketMQ EventBridge Core Concept",permalink:"/docs/eventbridge/01RocketMQEventBridgeConcepts"}},p={},l=[{value:"1 Basic",id:"1-basic",level:2},{value:"2 Use",id:"2-use",level:2},{value:"3 Configuration dependent",id:"3-configuration-dependent",level:2},{value:"4 Error",id:"4-error",level:2},{value:"5 Others",id:"5-others",level:2}],m={toc:l},g="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"faqs"},"FAQs"),(0,r.yg)("p",null,"Common questions about the RocketMQ project:"),(0,r.yg)("h2",{id:"1-basic"},"1 Basic"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Why should we use RocketMQ instead of choosing other products?")),(0,r.yg)("p",{parentName:"li"},"Please refer to",(0,r.yg)("a",{parentName:"p",href:"http://rocketmq.apache.org/docs/motivation/"}," why choose RocketMQ"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Do I need to install any other software in order to use RocketMQ, such as ZooKeeper?")),(0,r.yg)("p",{parentName:"li"},"No\uff0cRocketMQ can run on independent\u3002"))),(0,r.yg)("h2",{id:"2-use"},"2 Use"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Where does the newly created ConsumerGroup start consuming messages?")),(0,r.yg)("p",{parentName:"li"},"1\uff09When the 5.x SDK is first online, it will consume from the latest message on the server, starting from the tail of the queue. After restarting again, it    will continue to consume from the last consumption position."),(0,r.yg)("p",{parentName:"li"},"2\uff09The 3.x/4.x SDK is more complicated. If the first start is within three days of the sent message, the consumer will start consuming from the first saved message on the server. If the sent message is more than three days, the consumer will start consuming from the latest message on the server, starting from the tail of the queue. After restarting again, it will continue to consume from the last consumption position.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"When consumption fails, how can the message be consumed again?")),(0,r.yg)("p",{parentName:"li"},"1\uff09In cluster mode, the consumption business logic code will return a consumption failure status, or throw an exception. If a message consumption fails, it will be retried according to the maximum retry count set, and then the message will be discarded."),(0,r.yg)("p",{parentName:"li"},"2\uff09In broadcast consumption mode, broadcast consumption still guarantees that the message is consumed at least once, but does not provide resend options.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"When consumption fails, how can the failed message be found?")),(0,r.yg)("p",{parentName:"li"},"1\uff09Using a time-based topic query can query messages within a period of time."),(0,r.yg)("p",{parentName:"li"},"2\uff09Use the topic and message ID to accurately query the message."),(0,r.yg)("p",{parentName:"li"},"3\uff09Use the topic and message Key to accurately query all messages with the same message Key.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Is the message only delivered once?")),(0,r.yg)("p",{parentName:"li"},"RocketMQ ensures that all messages are delivered at least once. In most cases, messages are not repeated.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"How can a new Broker be added?")),(0,r.yg)("p",{parentName:"li"},"1\uff09Start a new Broker and register it in the Broker list of the NameServer."),(0,r.yg)("p",{parentName:"li"},"2\uff09By default, only internal system Topics and Consumer Groups are automatically created. If you want to have your business topic and consumer group on the new node, copy them from the existing Broker. We provide management tools and command line to handle this."))),(0,r.yg)("h2",{id:"3-configuration-dependent"},"3 Configuration dependent"),(0,r.yg)("p",null,"The following answers are default values, which can be modified through configuration."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"How long can messages be saved on the server?")),(0,r.yg)("p",{parentName:"li"},"Messages will be stored for a maximum of 3 days. Messages that have not been used for more than 3 days will be deleted.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"What is the size limit for message bodies?")),(0,r.yg)("p",{parentName:"li"},"Typically, it is 256KB.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"How do you set the number of consumer threads?")),(0,r.yg)("p",{parentName:"li"},"When you start the consumer, you can set the property. The parameter name varies by version."))),(0,r.yg)("h2",{id:"4-error"},"4 Error"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"APPLY_TOPIC_URL")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"exception information")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"topic[xxx] not exist, apply first please!\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"reason")),(0,r.yg)("p",{parentName:"li"},"1\uff09When a Producer sends a message or a Consumer consumes a message, this exception will occur if the routing information for the Topic cannot be obtained.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"solution")),(0,r.yg)("p",{parentName:"li"},"1\uff09Make sure that the NameServer indeed contains the routing information for the Topic. You can use the management tool or the Web console to query the routing information from the NameServer through the TopicRoute;"),(0,r.yg)("p",{parentName:"li"},"2\uff09Make sure that the Broker and Consumer are connected to the same NameServer cluster;"),(0,r.yg)("p",{parentName:"li"},"3\uff09Make sure that the queue permissions for the topic are 6 (rw-) for the Producer or at least 2 (-w-) for the Consumer;"),(0,r.yg)("p",{parentName:"li"},"If the topic cannot be found, create it on the Broker through the management tool command updateTopic or the Web console.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"NAME_SERVER_ADDR_NOT_EXIST_URL")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"exception information")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"No name server address, please set it\n")),(0,r.yg)("p",{parentName:"li"}," or"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"connect to xxx failed, maybe the domain name xxx not bind in /etc/hosts\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"reason")),(0,r.yg)("p",{parentName:"li"},"1\uff09Producer or Consumer, there is an error in obtaining the NameServer address information.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"solution")),(0,r.yg)("p",{parentName:"li"},"1\uff09Please refer to\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/blob/develop/docs/cn/best_practice.md"},"5.1 Client addressing"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"GROUP_NAME_DUPLICATE_URL")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"exception information")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"The producer group[xxx] has been created before, specify another name please.\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"reason")),(0,r.yg)("p",{parentName:"li"},"1\uff09A Consumer Group with the same name has already been started and registration failed.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"solution")),(0,r.yg)("p",{parentName:"li"},"1\uff09Rename a new Consumer Group."),(0,r.yg)("p",{parentName:"li"},"2\uff09A Consumer Group with the same name was normally closed and then started again.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"CLIENT_PARAMETER_CHECK_URL")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"exception information")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"consumerGroup can not equal ...\n")),(0,r.yg)("p",{parentName:"li"},"or"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"allocateMessageQueueStrategy is null ...\n")),(0,r.yg)("p",{parentName:"li"},"or"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"Long polling mode, the consumer consumerTimeoutMillisWhenSuspend must greater than brokerSuspendMaxTimeMillis ...\n")),(0,r.yg)("p",{parentName:"li"},"In addition to the above exceptions, there may be other exceptions that are not listed here.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"reason")),(0,r.yg)("p",{parentName:"li"},"1\uff09Consumer parameter verification failed.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"solution")),(0,r.yg)("p",{parentName:"li"},"1\uff09Please refer to\uff1a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/blob/develop/docs/cn/best_practice.md"},"5.2  Client configuration"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"SUBSCRIPTION_GROUP_NOT_EXIST")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"exception information")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"subscription group not exist\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"reason")),(0,r.yg)("p",{parentName:"li"},"1\uff09If the Consumer Group or DleayQueue encounters an error while getting subscription information.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"solution")),(0,r.yg)("p",{parentName:"li"},"1\uff09Ensure the Consumer's subscription to the Topic information is consistent with the Topic information in the NameServer."),(0,r.yg)("p",{parentName:"li"},"2\uff09Make sure the Broker and Consumer are connected to the same NameServer cluster."),(0,r.yg)("p",{parentName:"li"},"3\uff09Ensure the queue permissions for the Topic are 6 (rw-) for the Producer, or at least 2 (-w-) for the Consumer")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"CLIENT_SERVICE_NOT_OK")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"exception information")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"The xxx service state not OK, maybe started once\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"reason")),(0,r.yg)("p",{parentName:"li"},"1\uff09Starting multiple Producer/Consumer instances in the same JVM using the same Producer/Consumer Group may cause the client to fail to start.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"solution")),(0,r.yg)("p",{parentName:"li"},"1\uff09Make sure only one Producer/Consumer instance is started for a given Producer/Consumer Group JVM.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"NO_TOPIC_ROUTE_INFO")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"exception information")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"No route info of this topic:\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"reason")),(0,r.yg)("p",{parentName:"li"},"1\uff09If a message is sent to a topic that is not available to the producer\uff0cthat's what happens.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"solution")),(0,r.yg)("p",{parentName:"li"},"1\uff09Ensure the producer is able to connect to the name server and retrieve routing metadata from it."),(0,r.yg)("p",{parentName:"li"},"2\uff09Ensure the name server contains routing metadata for the topic. You can use a management tool or the Web console to query the routing metadata from the name server using TopicRoute."),(0,r.yg)("p",{parentName:"li"},"3\uff09Make sure your Broker is sending heartbeats to the same NameServer list that your producer is connected to."),(0,r.yg)("p",{parentName:"li"},"4\uff09Ensure the topic has permission 6 (rw-), or at least 2 (-w-)."),(0,r.yg)("p",{parentName:"li"},"If the topic is not found, create it on the Broker via the management tool command updateTopic or the Web console.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"LOAD_JSON_EXCEPTION")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"exception information")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"readLocalOffset Exception\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"reason")),(0,r.yg)("p",{parentName:"li"},"1\uff09In broadcast mode, consumers have an error when loading the local offsets.json file."),(0,r.yg)("p",{parentName:"li"},"2\uff09A damaged fastjson file can also cause the same problem.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"solution")),(0,r.yg)("p",{parentName:"li"},"1\uff09Check if the fastjson version and RocketMQ version in use are consistent."),(0,r.yg)("p",{parentName:"li"},"2\uff09Upgrade fastjson version.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"SAME_GROUP_DIFFERENT_TOPIC")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"exception information")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"the consumer's group info/subscription not exist\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"reason"),"\n1\uff09Consumer subscription to Topic information does not exist.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"solution")),(0,r.yg)("p",{parentName:"li"},"1\uff09Check if the Consumer Group where the Consumer belongs exists."),(0,r.yg)("p",{parentName:"li"},"2\uff09Check if the Topic subscribed to by the Consumer exists.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"MQLIST_NOT_EXIST")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"exception information")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"Can not find Message Queue for this topic\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"reason"),"\n1\uff09For the Producer, the corresponding Queue information could not be obtained based on the Topic.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"solution")),(0,r.yg)("p",{parentName:"li"},"1\uff09Ensure that the Queue information has been correctly configured for the Topic."),(0,r.yg)("p",{parentName:"li"},"2\uff09Ensure that the Queue corresponding to the Topic has at least 2 (-w-) permissions.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"SEND_MSG_FAILED")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"exception information")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"Send [xxx] times, still failed, cost [xxx]ms, Topic: xxx, BrokersSent ...\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"reason"),"\n1\uff09The Producer message sending is abnormal. A total of 3 times are sent in SYNC mode, and 1 time is sent in ASYNC and ONEWAY.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"solution"),"\n1\uff09Whether the timeout parameter of the Producer sending message is too small."),(0,r.yg)("p",{parentName:"li"},"2\uff09Ensure that the Broker is normal."),(0,r.yg)("p",{parentName:"li"},"3\uff09Ensure that the connection between the Producer and Broker is normal.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"UNKNOWN_HOST_EXCEPTION")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"exception information")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"InetAddress java.net.InetAddress.getLocalHost() throws UnknownHostException\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"reason")),(0,r.yg)("p",{parentName:"li"},"1\uff09There may be many network interfaces on the host, and one interface may be bound to multiple IP addresses.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"solution")),(0,r.yg)("p",{parentName:"li"},"1\uff09Ensure that the IP corresponding to the host can be accessed normally, and use network commands such as Ping to check the network situation."))))),(0,r.yg)("h2",{id:"5-others"},"5 Others"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"What is the impact of the Broker crashing\uff1f"),(0,r.yg)("p",{parentName:"li"},"1\uff09Master node crashes"),(0,r.yg)("p",{parentName:"li"},"Messages can no longer be sent to the Broker cluster, but if you have another available Broker cluster, messages can still be sent as long as the topic exists. Messages can still be consumed from the Slave node."),(0,r.yg)("p",{parentName:"li"},"2\uff09Some Slave nodes crash"),(0,r.yg)("p",{parentName:"li"},"Sending messages will not be affected as long as there is another working Slave. Consuming messages will not be affected unless the consumer group is set to consume from the Slave first. By default, the consumer group consumes from the Master."),(0,r.yg)("p",{parentName:"li"},"3\uff09All Slave nodes crash"),(0,r.yg)("p",{parentName:"li"},"Sending messages to the Master will not be affected, but if the Master is SYNC_MASTER, the Producer will get a SLAVE_NOT_AVAILABLE indicating that the message was not sent to any Slave. Consuming messages will not be affected unless the consumer group is set to consume from the Slave first. By default, the consumer group consumes from the Master."))))}c.isMDXComponent=!0}}]);