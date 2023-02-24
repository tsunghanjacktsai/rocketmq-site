"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var l=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,s=function(e,t){if(null==e)return{};var n,l,s={},u=Object.keys(e);for(l=0;l<u.length;l++)n=u[l],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)n=u[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=l.createContext({}),a=function(e){var t=l.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=a(e.components);return l.createElement(r.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,s=e.mdxType,u=e.originalType,r=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=a(n),d=s,h=c["".concat(r,".").concat(d)]||c[d]||p[d]||u;return n?l.createElement(h,o(o({ref:t},m),{},{components:n})):l.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var u=n.length,o=new Array(u);o[0]=d;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var a=2;a<u;a++)o[a]=n[a];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>a});var l=n(87462),s=(n(67294),n(3905));const u={},o="Pull Consumer",i={unversionedId:"consumer/03pull",id:"consumer/03pull",title:"Pull Consumer",description:"There are two kinds of Pull methods in RocketMQ. Pull Consumer is the more primitive one, which does not provide related subscription methods, The queue should be specified to pull while calling the pull method, and it needs to update the offset itself. The other one is the Lite Pull Consumer, which provides Subscribe and Assign mode, making it more convenient to use.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03-consumer/03pull.md",sourceDirName:"03-consumer",slug:"/consumer/03pull",permalink:"/docs/4.x/consumer/03pull",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/03-consumer/03pull.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Push Consumer",permalink:"/docs/4.x/consumer/02push"},next:{title:"Deployment Method",permalink:"/docs/4.x/deployment/01deploy"}},r={},a=[{value:"Pull Consumer",id:"pull-consumer-1",level:2},{value:"Lite Pull Consumer",id:"lite-pull-consumer",level:2}],m={toc:a},c="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pull-consumer"},"Pull Consumer"),(0,s.kt)("p",null,"There are two kinds of Pull methods in RocketMQ. ",(0,s.kt)("inlineCode",{parentName:"p"},"Pull Consumer")," is the more primitive one, which does not provide related subscription methods, The queue should be specified to pull while calling the pull method, and it needs to update the offset itself. The other one is the ",(0,s.kt)("inlineCode",{parentName:"p"},"Lite Pull Consumer"),", which provides Subscribe and Assign mode, making it more convenient to use."),(0,s.kt)("h2",{id:"pull-consumer-1"},"Pull Consumer"),(0,s.kt)("p",null,"The Pull Consumer example is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class PullConsumerTest {\n  public static void main(String[] args) throws MQClientException {\n    DefaultMQPullConsumer consumer = new DefaultMQPullConsumer("please_rename_unique_group_name_5");\n    consumer.setNamesrvAddr("127.0.0.1:9876");\n    consumer.start();\n    try {\n      MessageQueue mq = new MessageQueue();\n      mq.setQueueId(0);\n      mq.setTopic("TopicTest");\n      mq.setBrokerName("jinrongtong-MacBook-Pro.local");\n      long offset = 26;\n      PullResult pullResult = consumer.pull(mq, "*", offset, 32);\n      if (pullResult.getPullStatus().equals(PullStatus.FOUND)) {\n        System.out.printf("%s%n", pullResult.getMsgFoundList());\n        consumer.updateConsumeOffset(mq, pullResult.getNextBeginOffset());\n      }\n    } catch (Exception e) {\n      e.printStackTrace();\n    }\n    consumer.shutdown();\n  }\n}\n')),(0,s.kt)("p",null,"First, the ",(0,s.kt)("inlineCode",{parentName:"p"},"DefaultMQPullConsumer")," should be initialized and started, then constructs the queue ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageQueue")," to be pulled. Besides constructing it, ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchSubscribeMessageQueues")," method can also be called as shown below to get all the queues of a certain Topic and pull from the selected queue."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'Set<MessageQueue> queueSet =  consumer.fetchSubscribeMessageQueues("TopicTest");\n')),(0,s.kt)("p",null,"After finding or constructing the queue, call the pull method to start pulling. The parameters such as the queue to be pulled, the filter expression, the offset to be pulled, and the maximum number of messages to be pulled should be passed in it. The ",(0,s.kt)("inlineCode",{parentName:"p"},"PullResult")," will be returned after the operation is completed, and the PullStatus in the PullResult indicates the result status, as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public enum PullStatus {\n    /**\n     * Founded\n     */\n    FOUND,\n    /**\n     * No new message can be pull\n     */\n    NO_NEW_MSG,\n    /**\n     * Filtering results can not match\n     */\n    NO_MATCHED_MSG,\n    /**\n     * Illegal offset,may be too big or too small\n     */\n    OFFSET_ILLEGAL\n}\n")),(0,s.kt)("p",null,"FOUND means the message was pulled, NO_NEW_MSG means no new message was found, NO_MATCHED_MSG means no matching message, OFFSET_ILLEGAL means the incoming pull offset are illegal and may be large or small. If the pull status is FOUND, we can get the list of pulled messages via the ",(0,s.kt)("inlineCode",{parentName:"p"},"getMsgFoundList")," method of ",(0,s.kt)("inlineCode",{parentName:"p"},"PullResult"),". Finally, if the consumption is complete, the consumption offset are updated via the ",(0,s.kt)("inlineCode",{parentName:"p"},"updateConsumeOffset")," method."),(0,s.kt)("h2",{id:"lite-pull-consumer"},"Lite Pull Consumer"),(0,s.kt)("p",null,"Lite Pull Consumer is a Pull Consumer introduced in RocketMQ 4.6.0, which is simpler to use than the original Pull Consumer and provides two modes, Subscribe and Assign. The Subscribe mode example is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class LitePullConsumerSubscribe {\n    public static volatile boolean running = true;\n    public static void main(String[] args) throws Exception {\n        DefaultLitePullConsumer litePullConsumer = new DefaultLitePullConsumer("lite_pull_consumer_test");\n        litePullConsumer.subscribe("TopicTest", "*");\n        litePullConsumer.setPullBatchSize(20);\n        litePullConsumer.start();\n        try {\n            while (running) {\n                List<MessageExt> messageExts = litePullConsumer.poll();\n                System.out.printf("%s%n", messageExts);\n            }\n        } finally {\n            litePullConsumer.shutdown();\n        }\n    }\n}\n')),(0,s.kt)("p",null,"First of all, initialize ",(0,s.kt)("inlineCode",{parentName:"p"},"DefaultLitePullConsumer")," and set ",(0,s.kt)("inlineCode",{parentName:"p"},"ConsumerGroupName"),". Call the subscribe method afterward to subscribe to a topic and start it. Unlike the Push Consumer, ",(0,s.kt)("inlineCode",{parentName:"p"},"LitePullConsumer")," pulls messages by the poll interface and returns the corresponding message list if it can pull the message, otherwise, it returns null. The maximum number of messages per pull can be set with ",(0,s.kt)("inlineCode",{parentName:"p"},"setPullBatchSize"),", and the ",(0,s.kt)("inlineCode",{parentName:"p"},"LitePullConsumer")," will automatically commits the offset by default. In the Subscribe mode, multiple ",(0,s.kt)("inlineCode",{parentName:"p"},"LitePullConsumer")," under the same consumer group are load-balanced for consumption, consistent with the PushConsumer."),(0,s.kt)("p",null,"The following is an example of the Assign mode:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class LitePullConsumerAssign {\n    public static volatile boolean running = true;\n    public static void main(String[] args) throws Exception {\n        DefaultLitePullConsumer litePullConsumer = new DefaultLitePullConsumer("please_rename_unique_group_name");\n        litePullConsumer.setAutoCommit(false);\n        litePullConsumer.start();\n        Collection<MessageQueue> mqSet = litePullConsumer.fetchMessageQueues("TopicTest");\n        List<MessageQueue> list = new ArrayList<>(mqSet);\n        List<MessageQueue> assignList = new ArrayList<>();\n        for (int i = 0; i < list.size() / 2; i++) {\n            assignList.add(list.get(i));\n        }\n        litePullConsumer.assign(assignList);\n        litePullConsumer.seek(assignList.get(0), 10);\n        try {\n            while (running) {\n                List<MessageExt> messageExts = litePullConsumer.poll();\n                System.out.printf("%s %n", messageExts);\n                litePullConsumer.commitSync();\n            }\n        } finally {\n            litePullConsumer.shutdown();\n        }\n    }\n}\n')),(0,s.kt)("p",null,"Assign mode still initializes ",(0,s.kt)("inlineCode",{parentName:"p"},"DefaultLitePullConsumer")," at the beginning, here we use manual submission of offset, so set AutoCommit to false and then start the consumer. Unlike Subscribe mode, Assign mode does not have an automatic load balancing mechanism and requires the user to specify the queue to be pulled. Therefore, in the example, the queue under Topic is first fetched with fetchMessageQueues, and then half of the previous queue is fetched. The example also calls the seek method, which sets the offset in the first queue to be fetched from 10. Immediately after entering the loop keep calling the poll method to pull messages, and after pulling the messages call the commitSync method to manually submit the offset."))}p.isMDXComponent=!0}}]);