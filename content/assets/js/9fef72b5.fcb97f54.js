"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6639],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>c});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),l=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=l(e.components);return r.createElement(i.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=l(t),y=n,c=g["".concat(i,".").concat(y)]||g[y]||u[y]||o;return t?r.createElement(c,s(s({ref:a},m),{},{components:t})):r.createElement(c,s({ref:a},m))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=y;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[g]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},26072:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(58168),n=(t(96540),t(15680));const o={},s="FAQs",p={unversionedId:"bestPractice/08FAQ",id:"bestPractice/08FAQ",title:"FAQs",description:"The following are frequently asked questions about the RocketMQ project",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05-bestPractice/08FAQ.md",sourceDirName:"05-bestPractice",slug:"/bestPractice/08FAQ",permalink:"/docs/4.x/bestPractice/08FAQ",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/05-bestPractice/08FAQ.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Consistent Subscription Relationship",permalink:"/docs/4.x/bestPractice/07subscribe"},next:{title:"Client Configuration",permalink:"/docs/4.x/parameterConfiguration/01local"}},i={},l=[{value:"1 Basics",id:"1-basics",level:2},{value:"2 Use",id:"2-use",level:2},{value:"3 Configuration",id:"3-configuration",level:2},{value:"4 Error",id:"4-error",level:2},{value:"5 Others",id:"5-others",level:2}],m={toc:l},g="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,r.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"faqs"},"FAQs"),(0,n.yg)("p",null,"The following are frequently asked questions about the RocketMQ project"),(0,n.yg)("h2",{id:"1-basics"},"1 Basics"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Why should we use RocketMQ instead of another product\uff1f")),(0,n.yg)("p",{parentName:"li"},"Please refer to the",(0,n.yg)("a",{parentName:"p",href:"http://rocketmq.apache.org/docs/motivation/"},"Why RocketMQ"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Do I need to install any other software to use RocketMQ, e.g. ZooKeeper \uff1f")),(0,n.yg)("p",{parentName:"li"},"No, RocketMQ can run independently."))),(0,n.yg)("h2",{id:"2-use"},"2 Use"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Where does the newly created Consumer ID start consuming messages\uff1f")),(0,n.yg)("p",{parentName:"li"},"1\uff09If the message sent is within three days, the consumer starts consuming the first message saved in the server."),(0,n.yg)("p",{parentName:"li"},"2\uff09If the message sent is more than three days old, the consumer starts consuming the latest message in the server, which is at the end of the queue."),(0,n.yg)("p",{parentName:"li"},"3\uff09If the consumer restarts, it starts consuming messages from the last consumption location.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"How do you re-consume messages when consumption fails?")),(0,n.yg)("p",{parentName:"li"},"1\uff09In cluster mode, the consumed business logic code is returning Action.ReconsumeLater\uff0cNULL\uff0cor throw an exception\uff0cIf a message fails to be consumed, it is retried up to 16 times, after which the message is discarded."),(0,n.yg)("p",{parentName:"li"},"2\uff09In broadcast consumption mode, broadcast consumption still guarantees that the message will be consumed at least once, but does not provide the option to resend it.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"How to find the failure message when consume fails?")),(0,n.yg)("p",{parentName:"li"},"1\uff09Using subject queries by time, you can query messages over a period of time\u3002"),(0,n.yg)("p",{parentName:"li"},"2\uff09Use the subject and message ID to accurately query the message."),(0,n.yg)("p",{parentName:"li"},"3\uff09Use the subject and message key to query exactly for messages with the same key across all messages.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Will the message be delivered only once?")),(0,n.yg)("p",{parentName:"li"},"RocketMQ ensures that all messages are delivered at least once. In most cases, the message will not be repeated.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"How do I add a new Broker?")),(0,n.yg)("p",{parentName:"li"},"1\uff09Start a new Broker and register it with the list of brokers in NameServer."),(0,n.yg)("p",{parentName:"li"},"2\uff09By default, only internal system Topic and Consumer Group are automatically created. If you want to have your business topics and consumer groups on the new node, copy them from an existing Broker. We provide administrative tools and the command line to handle this."))),(0,n.yg)("h2",{id:"3-configuration"},"3 Configuration"),(0,n.yg)("p",null,"The following answers are the default values and can be modified through configuration."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"How long messages can be kept on the server\uff1f")),(0,n.yg)("p",{parentName:"li"},"Stored messages will be kept for a maximum of 3 days, and unused messages will be deleted after that.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"What is the size limit for the message body?")),(0,n.yg)("p",{parentName:"li"},"It is usually 256 KB")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"How to set the number of consumer threads?")),(0,n.yg)("p",{parentName:"li"},"You can set the value of the ConsumeThreadNums property when you start the consumer\uff0ce.g."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"consumer.setConsumeThreadMin(20);\nconsumer.setConsumeThreadMax(20);\n")))),(0,n.yg)("h2",{id:"4-error"},"4 Error"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"APPLY_TOPIC_URL")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Error message")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"topic[xxx] not exist, apply first please!\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cause")),(0,n.yg)("p",{parentName:"li"},"1\uff09This exception occurs when the Producer fails to obtain routing information according to the Topic when sending or consuming messages.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Solution")),(0,n.yg)("p",{parentName:"li"},"1\uff09Make sure that NameServer does contain routing information for the Topic. You can use the management tool or the Web console to query routing information from NameServer through TopicRoute;"),(0,n.yg)("p",{parentName:"li"},"2\uff09Ensure that the Broker and Consumer are connected to the same NameServer cluster;"),(0,n.yg)("p",{parentName:"li"},"3\uff09Ensure that the queue permissions of the topic are 6(rw-) for the Producer, or at least 2(-w-) for the Consumer;"),(0,n.yg)("p",{parentName:"li"},"If this topic cannot be found, create it on the Broker with the administrative tool command updateTopic or the Web console.")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"NAME_SERVER_ADDR_NOT_EXIST_URL")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Error message")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"No name server address, please set it\n")),(0,n.yg)("p",{parentName:"li"},"or"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"connect to xxx failed, maybe the domain name xxx not bind in /etc/hosts\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cause")),(0,n.yg)("p",{parentName:"li"},"1\uff09The Producer or Consumer fails to obtain NameServer address information.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Solution")),(0,n.yg)("p",{parentName:"li"},"1\uff09Please refer to the\uff1a",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/blob/develop/docs/cn/best_practice.md"},"5.1 Client addressing mode"))))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"GROUP_NAME_DUPLICATE_URL")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Error message")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"The producer group[xxx] has been created before, specify another name please.\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cause")),(0,n.yg)("p",{parentName:"li"},"1\uff09The Consumer Group with the same name has been started, but the registration fails.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Solution")),(0,n.yg)("p",{parentName:"li"},"1\uff09New Consumer Group renamed;"),(0,n.yg)("p",{parentName:"li"},"2\uff09After a Consumer Group with the same name is closed, it can be started again.")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"CLIENT_PARAMETER_CHECK_URL")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Error message")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"consumerGroup can not equal ...\n")),(0,n.yg)("p",{parentName:"li"},"or"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"allocateMessageQueueStrategy is null ...\n")),(0,n.yg)("p",{parentName:"li"},"or"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"Long polling mode, the consumer consumerTimeoutMillisWhenSuspend must greater than brokerSuspendMaxTimeMillis ...\n")),(0,n.yg)("p",{parentName:"li"},"In addition, there are other exceptions, will not list them all.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cause")),(0,n.yg)("p",{parentName:"li"},"1\uff09The Consumer parameter verification fails. ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Solution")),(0,n.yg)("p",{parentName:"li"},"1\uff09Please refer to the\uff1a ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/blob/develop/docs/cn/best_practice.md"},"5.2 Client Configuration"))))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"SUBSCRIPTION_GROUP_NOT_EXIST")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Error message")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"subscription group not exist\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cause")),(0,n.yg)("p",{parentName:"li"},"1\uff09The Consumer Group or DelayQueue can't obtain subscription information.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Solution")),(0,n.yg)("p",{parentName:"li"},"1\uff09Ensure that the Consumer subscription Topic information is consistent with the existing Topic information in NameServer."),(0,n.yg)("p",{parentName:"li"},"2\uff09Ensure that the Broker and Consumer are connected to the same NameServer cluster;"),(0,n.yg)("p",{parentName:"li"},"3\uff09Ensure that the queue permissions of the Topic are 6(rw-) for the Producer, or at least 2(-w-) for the Consumer;")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"CLIENT_SERVICE_NOT_OK")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Error message")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"The xxx service state not OK, maybe started once\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cause")),(0,n.yg)("p",{parentName:"li"},"1\uff09Starting multiple Producer/Consumer instances in the same JVM using the same Producer/Consumer Group may cause the client to fail to start.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Solution")),(0,n.yg)("p",{parentName:"li"},"1\uff09Ensure that the JVM corresponding to a Producer/Consumer Group starts only one Producer/Consumer instance.")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"NO_TOPIC_ROUTE_INFO")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Error message")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"No route info of this topic:\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cause")),(0,n.yg)("p",{parentName:"li"},"1\uff09This occurs when a message is sent to a topic whose routing information is not available to the producer.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Solution")),(0,n.yg)("p",{parentName:"li"},"1\uff09Ensure that producers can connect to NameServer and get routing meta-information from it;"),(0,n.yg)("p",{parentName:"li"},"2\uff09Make sure that NameServer does contain the routing meta-information for the topic. You can use the TopicRoute management tool or the Web console to query routing meta information from NameServer."),(0,n.yg)("p",{parentName:"li"},"3\uff09Make sure that your Broker sends heartbeats to the same NameServer list that your producers are connecting to;"),(0,n.yg)("p",{parentName:"li"},"4\uff09Ensure that the subject has permissions of 6(rw-), or at least 2(-w-);"),(0,n.yg)("p",{parentName:"li"},"If this topic cannot be found, create it on the Broker with the administrative tool command updateTopic or the Web console.")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"LOAD_JSON_EXCEPTION")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Error message")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"readLocalOffset Exception\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cause")),(0,n.yg)("p",{parentName:"li"},"1\uff09The consumer failed to load the local offset.json file in broadcast mode."),(0,n.yg)("p",{parentName:"li"},"2\uff09Corrupted fastjson files can cause the same problem;")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Solution")),(0,n.yg)("p",{parentName:"li"},"1\uff09Check that the fastjson version is the same as the RocketMQ version."),(0,n.yg)("p",{parentName:"li"},"2\uff09Update fastjson version;")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"SAME_GROUP_DIFFERENT_TOPIC")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Error message")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"the consumer's group info/subscription not exist\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cause")),(0,n.yg)("p",{parentName:"li"},"1\uff09Consumer subscription Topic information does not exist.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Solution")),(0,n.yg)("p",{parentName:"li"},"1\uff09Check whether the Consumer Group to which the Consumer belongs exists."),(0,n.yg)("p",{parentName:"li"},"2\uff09Check whether the Consumer subscription Topic exists;")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"MQLIST_NOT_EXIST")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Error message")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"Can not find Message Queue for this topic\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cause")),(0,n.yg)("p",{parentName:"li"},"1\uff09For the Producer, the corresponding Queue information cannot be obtained according to the Topic.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Solution")),(0,n.yg)("p",{parentName:"li"},"1\uff09Ensure that Queue information is correctly configured for the Topic."),(0,n.yg)("p",{parentName:"li"},"2\uff09Ensure that the Queue corresponding to the Topic has at least 2(-w-) permissions;")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"SEND_MSG_FAILED")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Error message")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"Send [xxx] times, still failed, cost [xxx]ms, Topic: xxx, BrokersSent ...\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cause")),(0,n.yg)("p",{parentName:"li"},"1\uff09The Producer message is incorrectly sent. A total of three times are sent in SYNC mode and one time is sent in ASYNC and ONEWAY mode.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Solution")),(0,n.yg)("p",{parentName:"li"},"1\uff09The Producer sends messages and whether the timeout parameter is too small."),(0,n.yg)("p",{parentName:"li"},"2\uff09Ensure that the Broker is working properly;"),(0,n.yg)("p",{parentName:"li"},"3\uff09Ensure that the Producer and Broker are properly connected")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"UNKNOWN_HOST_EXCEPTION")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Error message")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"InetAddress java.net.InetAddress.getLocalHost() throws UnknownHostException\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cause")),(0,n.yg)("p",{parentName:"li"},"1\uff09A host may have many network interfaces, and an interface may be bound to multiple IP addresses.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Solution")),(0,n.yg)("p",{parentName:"li"},"1\uff09Ensure that the IP address corresponding to host can be accessed properly. Run the Ping command to check the network status."))))),(0,n.yg)("h2",{id:"5-others"},"5 Others"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"What are the effects of Broker crashes\uff1f"),(0,n.yg)("p",{parentName:"li"},"1\uff09The Master node crashes"),(0,n.yg)("p",{parentName:"li"},"Messages can no longer be sent to this cluster of brokers, but if you have another cluster of brokers available, messages can still be sent in the presence of a topic. Messages can still be consumed from the Slave node."),(0,n.yg)("p",{parentName:"li"},"2\uff09Some Slave nodes crashed"),(0,n.yg)("p",{parentName:"li"},"As long as there is another working Slave, sending messages is not affected. Consumption messages are also not affected unless the consumer group is set to consume from this Slave preferentially. By default, the consumer group consumes from the Master."),(0,n.yg)("p",{parentName:"li"},"3\uff09All Slave nodes crash"),(0,n.yg)("p",{parentName:"li"},"Sending messages to the Master has no effect; however, if the Master is SYNC_MASTER, the Producer gets a SLAVE_NOT_AVAILABLE, indicating that the message is not being sent to any slaves. Consumption messages are also unaffected unless the consumer group is set to consume from the Slave preferentially. By default, the consumer group consumes from the Master."))))}u.isMDXComponent=!0}}]);