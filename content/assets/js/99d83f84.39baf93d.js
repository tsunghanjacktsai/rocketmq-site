"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4554],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(96540),o=r(20053);const a={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,s),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(58168),o=r(96540),a=r(20053),s=r(23104),i=r(56347),l=r(57485),c=r(31682),u=r(89466);function m(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function p(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=p(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[l,c]=g({queryString:r,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,u.Dv)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),y=(()=>{const e=l??m;return d({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,a]),tabValues:a}}var y=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.a_)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==i&&(m(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return o.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},s,{className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return o.createElement("div",{className:(0,a.A)("tabs-container",f.tabList)},o.createElement(b,(0,n.A)({},e,t)),o.createElement(v,(0,n.A)({},e,t)))}function w(e){const t=(0,y.A)();return o.createElement(k,(0,n.A)({key:String(t)},e))}},14264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=r(58168),o=(r(96540),r(15680)),a=r(11470),s=r(19365);const i={},l="What is RocketMQ",c={unversionedId:"introduction/03whatis",id:"introduction/03whatis",title:"What is RocketMQ",description:"People subscribe to some of their favorites by applications.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-introduction/03whatis.md",sourceDirName:"01-introduction",slug:"/introduction/03whatis",permalink:"/docs/4.x/introduction/03whatis",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/01-introduction/03whatis.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Quickstart",permalink:"/docs/4.x/introduction/02quickstart"},next:{title:"Core Concept",permalink:"/docs/4.x/producer/01concept1"}},u={},m=[{value:"RocketMQ&#39;s message model, a simple Pub/Sub model",id:"rocketmqs-message-model-a-simple-pubsub-model",level:2},{value:"RocketMQ extended message model",id:"rocketmq-extended-message-model",level:2},{value:"RocketMQ Architecture",id:"rocketmq-architecture",level:2},{value:"<strong>Producer</strong>",id:"producer",level:3},{value:"<strong>Consumer</strong>",id:"consumer",level:3},{value:"<strong>NameServer</strong>",id:"nameserver",level:2},{value:"Broker",id:"broker",level:2},{value:"RocketMQ Workflow",id:"rocketmq-workflow",level:2},{value:"1. Start the RocketMQ NameServer",id:"1-start-the-rocketmq-nameserver",level:3},{value:"2. Start the RocketMQ Broker",id:"2-start-the-rocketmq-broker",level:3},{value:"3. Create a topic",id:"3-create-a-topic",level:3},{value:"4. Write messages to the topic",id:"4-write-messages-to-the-topic",level:3},{value:"5. Read messages from the topic",id:"5-read-messages-from-the-topic",level:3}],p={toc:m},d="wrapper";function g(e){let{components:t,...i}=e;return(0,o.yg)(d,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"what-is-rocketmq"},"What is RocketMQ"),(0,o.yg)("p",null,"People subscribe to some of their favorites by applications.\nWhen an author publishes an article to the relevant section, we can receive relevant news feeds."),(0,o.yg)("p",null,"Pub/Sub is a messaging paradigm where message senders(called publishers, producers) send messages directly to specific recipients (called subscribers, consumers). The basic message model of RocketMQ is a simple Pub/Sub model."),(0,o.yg)("admonition",{title:"Concepts",type:"tip"},(0,o.yg)(a.A,{mdxType:"Tabs"},(0,o.yg)(s.A,{value:"Producer",label:"Producer",default:!0,mdxType:"TabItem"},"The producer is responsible for producing messages, and the business system is generally responsible for producing messages. A producer sends messages generated in the business application system to the broker server.RocketMQ provides a variety of sending methods, synchronous sending, asynchronous sending, sequential sending, and one-way sending.",(0,o.yg)("p",{parentName:"admonition"},"learn more  \u27a1\ufe0f ",(0,o.yg)("a",{parentName:"p",href:"/docs/4.x/producer/01concept1"},"Producer")),"  "),(0,o.yg)(s.A,{value:"Consumer",label:"Consumer",mdxType:"TabItem"},"Aims to consume messages, which are generally responsible by the backend system (asynchronous consumption). A message consumer pulls messages from the Broker server and serves them to the application. From the perspective of user applications, two consumption methods are provided: pull consumption and push consumption.",(0,o.yg)("p",{parentName:"admonition"},"learn more  \u27a1\ufe0f ",(0,o.yg)("a",{parentName:"p",href:"/docs/4.x/consumer/01concept2"},"Consumer")),"  "),(0,o.yg)(s.A,{value:"Topic",label:"Topic",mdxType:"TabItem"},"RocketMQ's fundamental unit of event organization is called Topic. Each Topic contains several messages, and each message can only belong to one topic.",(0,o.yg)("p",{parentName:"admonition"},"learn more  \u27a1\ufe0f ",(0,o.yg)("a",{parentName:"p",href:"/docs/4.x/producer/01concept1"},"basic concept")),"  "))),(0,o.yg)("h2",{id:"rocketmqs-message-model-a-simple-pubsub-model"},"RocketMQ's message model, a simple Pub/Sub model"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"RocketMQ model",src:r(45945).A,width:"1487",height:"277"})),(0,o.yg)("admonition",{title:"Basic Messaging System Model",type:"note"},(0,o.yg)("p",{parentName:"admonition"}," The figure above exemplifies message model, including a ",(0,o.yg)("strong",{parentName:"p"},"Producer"),", a ",(0,o.yg)("strong",{parentName:"p"},"Topic"),", and a ",(0,o.yg)("strong",{parentName:"p"},"Consumer"),".")),(0,o.yg)("p",null,"In a ",(0,o.yg)("strong",{parentName:"p"},"topic-based")," system, messages are published on topics or channels. Consumers will receive all messages on the topics they subscribe to, and producers are responsible for defining the message categories that subscribers subscribe to. This is a basic conceptual model, and in practical applications, the structure will be more complex. For example, in order to support high concurrency and horizontal scaling, the topics need to be partitioned. The same topic will have multiple producers, the same information will have multiple consumers, and load balancing should be performed between consumers."),(0,o.yg)("h2",{id:"rocketmq-extended-message-model"},"RocketMQ extended message model"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"RocketMQ basic model",src:r(3980).A,width:"1387",height:"695"})),(0,o.yg)("admonition",{title:"Extended message model",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The above picture is an extended message model, including ",(0,o.yg)("strong",{parentName:"p"},"two producers"),", ",(0,o.yg)("strong",{parentName:"p"},"two topics"),", and ",(0,o.yg)("strong",{parentName:"p"},"two sets of consumers Comsumer"),"."),(0,o.yg)("p",{parentName:"admonition"},"The ",(0,o.yg)("strong",{parentName:"p"},"Broker")," that stores message topics is the proxy server for the actual deployment process.")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"for",(0,o.yg)("strong",{parentName:"p"},"Horizontal scaling"),", RocketMQ partitions Topic through ",(0,o.yg)("strong",{parentName:"p"},"MessageQueue"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"for",(0,o.yg)("strong",{parentName:"p"},"Concurrent consumption"),", the concept of Consumer Group came into being."))),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"Consumer mainly has two consumption modes, namely ",(0,o.yg)("strong",{parentName:"li"},"broadcast mode")," and ",(0,o.yg)("strong",{parentName:"li"},"cluster mode")," (the most commonly used cluster mode is shown in the figure)."),(0,o.yg)("li",{parentName:"ul"},"Consumer instances in the same Consumer Group are load balancing consumption. As shown in the figure, ConsumerGroupA subscribes to TopicA and TopicA corresponds to 3 queues. Then Consumer1 in GroupA consumes messages from MessageQueue 0 and MessageQueue 1, and Consumer2 consumes messages from MessageQueue2."))),(0,o.yg)("h2",{id:"rocketmq-architecture"},"RocketMQ Architecture"),(0,o.yg)("p",null,"How do Producer and Consumer find the addresses of Topic and Broker? How are messages sent and received?"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"RocketMQ Architecture",src:r(40178).A,width:"1342",height:"541"})),(0,o.yg)("p",null,"The main Apache RocketMQ components are Producers, Consumers, NameServers, and Brokers:"),(0,o.yg)("h3",{id:"producer"},(0,o.yg)("strong",{parentName:"h3"},"Producer")),(0,o.yg)("p",null,"A  producer serves as a data source that optimizes, writes, and publishes messages to one or more  topics. Producers load balance data among brokers through MessageQueue. It supports fail-fast and retries during sending messages."),(0,o.yg)("p",null,"Producers can send messages in either synchronous or asynchronous mode. In synchronous mode, the producer waits for an acknowledgment from the broker before proceeding, while in asynchronous mode, the producer sends the message and continues with its operation without waiting for an acknowledgment."),(0,o.yg)("p",null,"Producers can also specify a key for each message they send. The key is used by the broker to determine which partition within a topic the message should be stored in."),(0,o.yg)("p",null,"Producers can also specify a callback function that will be invoked once the broker acknowledges receipt of the message. This allows the producer to handle any errors that may occur during message transmission."),(0,o.yg)("h3",{id:"consumer"},(0,o.yg)("strong",{parentName:"h3"},"Consumer")),(0,o.yg)("p",null,"Consumers read data by reading messages from the topics to which they subscribe."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Supports message consumption in two modes: push and pull."),(0,o.yg)("li",{parentName:"ul"},"Supports ",(0,o.yg)("strong",{parentName:"li"},"cluster mode")," and broadcast mode consumption"),(0,o.yg)("li",{parentName:"ul"},"Provide real-time message subscription mechanism")),(0,o.yg)("h2",{id:"nameserver"},(0,o.yg)("strong",{parentName:"h2"},"NameServer")),(0,o.yg)("p",null,"NameServer is a simple Topic routing registry that supports dynamic registration and discovery of Topic and Broker."),(0,o.yg)("p",null,"Mainly includes two functions\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Broker management"),":The NameServer accepts the registration information of the Broker cluster and saves it as the basic data of the routing information. And it provides a heartbeat detection mechanism to check whether the Broker is still alive."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Routing Information Management"),":Each NameServer will hold the entire routing information about the Broker cluster and queue information for client queries. The Producer and Consumer can know the routing information of the entire Broker cluster through the NameServer, so as to produce and consume messages.")),(0,o.yg)("p",null,"NameServer usually has multiple instances deployed, and each instance does not communicate with each other. Broker registers its own routing information with each NameServer, so each NameServer instance saves a complete routing information. The client can still obtain routing information from other NameServers, When a NameServer goes offline for some reason."),(0,o.yg)("h2",{id:"broker"},"Broker"),(0,o.yg)("p",null,"Broker is mainly responsible for message storage, delivery and query, as well as service high availability guarantee."),(0,o.yg)("p",null,"NameServer is stateless, so it can be deployed in clusters without any information synchronization between nodes. Compared with nameserver, broker is more complicated."),(0,o.yg)("p",null,"In the Master-Slave architecture, the Broker is divided into Master and Slave.\nA Master can correspond to multiple Slaves, but a Slave can only correspond to one Master.\nThe correspondence between Master and Slave is defined by specifying the same BrokerName and different BrokerId. A BrokerId of 0 means Master, and non-0 means Slave. Master can also deploy multiple."),(0,o.yg)("admonition",{title:"RocketMQ Architecture Summary",type:"note"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"Each ",(0,o.yg)("strong",{parentName:"li"},"Broker")," establishes long-term connections with all nodes in the ",(0,o.yg)("strong",{parentName:"li"},"NameServer")," cluster, and regularly registers Topic information to all NameServers."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Producer")," establishes a persistent connection with one of the nodes in the ",(0,o.yg)("strong",{parentName:"li"},"NameServer")," cluster, regularly obtains topic routing information from NameServer, establishes a persistent connection to the Master that provides Topic services, and regularly sends a heartbeat to the Master. Producers are completely stateless."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Consumer")," establishes a persistent connection to one of the nodes in the ",(0,o.yg)("strong",{parentName:"li"},"NameServer")," cluster\n\uff0cregularly obtains Topic routing information from NameServer, establishes long connections to Master and Slave that provide Topic services, and send heartbeats to Master and Slave regularly. Consumer subscribes to topic from Master or Slave."))),(0,o.yg)("h2",{id:"rocketmq-workflow"},"RocketMQ Workflow"),(0,o.yg)("h3",{id:"1-start-the-rocketmq-nameserver"},"1. Start the RocketMQ NameServer"),(0,o.yg)("p",null,"The NameServer listens to the port and waits for the connection of the Broker, Producer, and Consumer after startup."),(0,o.yg)("h3",{id:"2-start-the-rocketmq-broker"},"2. Start the RocketMQ Broker"),(0,o.yg)("p",null,"The Broker maintains long connections with all NameServers, gets current Broker information, and stores all Topic information after startup. After successful registration, a mapping relationship will be built between Topic and Broker in the NameServer cluster."),(0,o.yg)("h3",{id:"3-create-a-topic"},"3. Create a topic"),(0,o.yg)("p",null,"The Broker should be specified before creating a Topic, or automatically create one while sending messages."),(0,o.yg)("h3",{id:"4-write-messages-to-the-topic"},"4. Write messages to the topic"),(0,o.yg)("p",null,"The Producer starts by establishing a long-term connection with one device of the NameServer clusters, obtains the Broker information where the current topic exists from the NameServer, polls to select a queue from the queue list, and establishes a long-term connection where the queue is located. This enables the Producer to send messages to the Broker."),(0,o.yg)("h3",{id:"5-read-messages-from-the-topic"},"5. Read messages from the topic"),(0,o.yg)("p",null,"The Consumer establishes a long-term connection with one of the NameServers, obtains which brokers the current subscription topic exists on, and then directly establishes a connection channel with the Broker, and then starts to consume messages."))}g.isMDXComponent=!0},3980:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/RocketMQ\u57fa\u672c\u6a21\u578b-ebcf3458d04b36f47f4c9633c1e36bf7.png"},45945:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/RocketMQ\u6982\u5ff5\u6a21\u578b-db2c246ff6aa79016f880e2ca7a447e7.png"},40178:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/RocketMQ\u90e8\u7f72\u67b6\u6784-ee0435f80da5faecf47bca69b1c831cb.png"}}]);