"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={},s="Consumer",a={unversionedId:"domainModel/08consumer",id:"version-5.0/domainModel/08consumer",title:"Consumer",description:"This section describes the definition, model relationship, internal attributes, and behavior constraints for consumers in Apache RocketMQ. This topic also provides version compatibility information and usage notes for consumers.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/03-domainModel/08consumer.md",sourceDirName:"03-domainModel",slug:"/domainModel/08consumer",permalink:"/docs/domainModel/08consumer",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/03-domainModel/08consumer.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Consumer Group",permalink:"/docs/domainModel/07consumergroup"},next:{title:"Subscription",permalink:"/docs/domainModel/09subscription"}},l={},u=[{value:"Definition",id:"definition",level:2},{value:"Model relationship",id:"model-relationship",level:2},{value:"Internal attributes",id:"internal-attributes",level:2},{value:"Behavior constraints",id:"behavior-constraints",level:2},{value:"Version compatibility",id:"version-compatibility",level:2},{value:"Usage notes",id:"usage-notes",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"consumer"},"Consumer"),(0,r.kt)("p",null,"This section describes the definition, model relationship, internal attributes, and behavior constraints for consumers in Apache RocketMQ. This topic also provides version compatibility information and usage notes for consumers."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A consumer is an entity that receives and processes messages in Apache RocketMQ."),(0,r.kt)("p",null,"Consumers are usually integrated in business systems. They obtain messages from Apache RocketMQ brokers and convert the messages into information that can be perceived and processed by business logic."),(0,r.kt)("p",null,"The following items determine consumer behavior:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Consumer identity: A consumer must be associated with a consumer group to obtain behavior settings and consumption status.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Consumer type: Apache RocketMQ provides a variety of consumer types for different development scenarios, including push consumers, simple consumers and pull consumers. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/featureBehavior/06consumertype"},"Consumer types"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Local settings for consumers: These settings specify how consumer clients run based on the consumer type. For example, you can configure the number of threads and concurrency settings on consumers to achieve different transmission effects."))),(0,r.kt)("h2",{id:"model-relationship"},"Model relationship"),(0,r.kt)("p",null,"The following figure shows how consumers are positioned in the domain model of Apache RocketMQ.",(0,r.kt)("img",{alt:"Consumers",src:n(83660).Z,width:"1977",height:"877"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The message is initialized by the producer and sent to the Apache RocketMQ server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Messages are stored in the specified queue of the topic in the order in which they arrive at the Apache RocketMQ server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The consumer obtains and consumes messages from the Apache RocketMQ server based on the specified subscription relationship."))),(0,r.kt)("h2",{id:"internal-attributes"},"Internal attributes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Consumer group name")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Definition: the name of the consumer group associated with the current consumer. Consumers inherit their behavior from the consumer groups. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/domainModel/07consumergroup"},"Consumer groups"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Values: Consumer groups are the logical resources of Apache RocketMQ{#product-name}"),(0,r.kt)("p",{parentName:"li"},". You must create consumer groups by using the console or calling API operations in advance. For more information about the limits on this operation, see",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction/03limits"},"Parameter limits"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Client ID")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Definition: the identity of a consumer client. This attribute is used to distinguish between different consumers. The value must be unique within a cluster.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Values: The client ID is automatically generated by the Apache RocketMQ SDK. It is mainly used for O\\&M purposes such as log viewing and problem locating. The client ID cannot be modified."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Communication parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Endpoints ",(0,r.kt)("strong",{parentName:"p"},"(Required)")," : the endpoint used to connect to the server. This endpoint is used to identify the cluster."),(0,r.kt)("p",{parentName:"li"},"The access point must be configured in the format. We recommend that you use domain names to avoid using IP addresses to prevent node changes from failing to perform hotspot migration."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Credential ",(0,r.kt)("strong",{parentName:"p"},"(Optional)")," : the credential used by the client for authentication."),(0,r.kt)("p",{parentName:"li"},"Transmission is required only when identity recognition and authentication are enabled on the server."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request Timeout ",(0,r.kt)("strong",{parentName:"li"},"(Optional)")," : the timeout period of the network request. For more information about the value range and default value, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/introduction/03limits"},"Parameter limits"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-bound subscription list")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Definition: the subscription list of the specified consumer. The Apache RocketMQ broker can use the pre-bound subscription list to verify the permissions and validity of the subscribed topic during consumer initialization instead of after the application is started.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Values: We recommend that you specify the subscription or the list of subscribed topics during consumer initialization. If the subscription is not specified or the subscribed topics are changed, Apache RocketMQ dynamically verifies the topics."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Message listener")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Definition: the listener that a consumer uses to invoke the message consumption logic after Apache RocketMQ broker pushes a message to the consumer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Values: The value of a message listener is configured on the consumer client.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Constraints: When you consume messages as a push consumer, you must configure the message listener on the consumer client. For more information about consumer types, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/featureBehavior/06consumertype"},"Consumer types"),"."))),(0,r.kt)("h2",{id:"behavior-constraints"},"Behavior constraints"),(0,r.kt)("p",null,"In the Apache RocketMQ domain model, consumer management is implemented through consumer grouping, and consumers in the same group share messages for consumption. Therefore, to ensure the normal load and consumption of messages in a group, Apache RocketMQ require all consumers in the same group to keep the following consumption behaviors consistent:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Delivery Order"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Consumption retry policy")))),(0,r.kt)("h2",{id:"version-compatibility"},"Version compatibility"),(0,r.kt)("p",null,"As described in Behavior Constraints, the delivery order and consumption retry policy of all consumers in the same group need to be consistent."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apache RocketMQ server version 5.x: The consumption behavior of the preceding consumers is obtained from the associated consumer groups. Therefore, the consumption behavior of all consumers in the same group must be consistent, and the client does not need to pay attention to it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apache RocketMQ server version 3.x/ 4.x history: The preceding consumption logic is defined by the consumer client interface. Therefore, you must ensure that the consumption behavior of consumers in the same group is consistent when you set the consumer client."))),(0,r.kt)("p",null,"If you use the Apache RocketMQ server version 5.x and the client uses the previous version SDK, the consumer's consumption logic is subject to the settings of the consumer client interface."),(0,r.kt)("h2",{id:"usage-notes"},"Usage notes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We recommend that you limit the number of consumers on individual processes.")),(0,r.kt)("p",null,"The consumers of Apache RocketMQ support the non-blocking transmission mode at the communication protocol level. The non-blocking transmission mode has higher communication efficiency and supports concurrent access by multiple threads. Therefore, in most scenarios, only one consumer needs to be initialized for a consumer group in a single process. Avoid initializing multiple consumers with the same configurations during the development phase."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We recommend that you do not create and destroy consumers on a regular basis.")),(0,r.kt)("p",null,"The consumers of Apache RocketMQ are underlying resources that can be reused, like the connection pool of a database. You do not need to create consumers each time you receive messages or destroy the consumers after you consume messages. If you regularly create and destroy consumers, a large number of short connection requests are generated on the broker. This imposes a high level of load on your system."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Correct example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Consumer c = ConsumerBuilder.build();\nfor (int i =0;i<n;i++)\n{\n  Message m= c.receive();\n  //process message\n}\nc.shutdown();\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Incorrect example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"for (int i =0;i<n;i++)\n{\n  Consumer c = ConsumerBuilder.build();\n  Message m= c.receive();\n  //process message\n  c.shutdown();\n}\n")))))}p.isMDXComponent=!0},83660:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/archiforconsumer-24914573add839fdf2ba2cbc0fcab7c4.png"}}]);