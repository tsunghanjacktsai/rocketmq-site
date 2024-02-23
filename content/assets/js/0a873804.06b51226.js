"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1212],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||a;return n?o.createElement(d,c(c({ref:t},u),{},{components:n})):o.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=n(58168),r=(n(96540),n(15680));const a={},c="RocketMQ Connect  Quick Start",l={unversionedId:"connect/03RocketMQ Connect Quick Start",id:"connect/03RocketMQ Connect Quick Start",title:"RocketMQ Connect  Quick Start",description:'This tutorial will start a RocketMQ Connector example project "rocketmq-connect-sample" in standalone mode to help you understand the working principle of connectors.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/10-connect/03RocketMQ Connect Quick Start.md",sourceDirName:"10-connect",slug:"/connect/03RocketMQ Connect Quick Start",permalink:"/docs/4.x/connect/03RocketMQ Connect Quick Start",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/10-connect/03RocketMQ Connect Quick Start.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Connect Concept",permalink:"/docs/4.x/connect/02RocketMQ Connect Concept"},next:{title:"RocketMQ Connect in Action 1",permalink:"/docs/4.x/connect/04RocketMQ Connect In Action1"}},s={},i=[{value:"1. Preparation: Start RocketMQ",id:"1-preparation-start-rocketmq",level:2},{value:"2. Build Connector Runtime",id:"2-build-connector-runtime",level:2},{value:"3. Run Connector Worker in Standalone Mode",id:"3-run-connector-worker-in-standalone-mode",level:2},{value:"Modify Configuration",id:"modify-configuration",level:3},{value:"Start Connector Worker in Standalone Mode",id:"start-connector-worker-in-standalone-mode",level:3},{value:"4. Start Source Connector",id:"4-start-source-connector",level:2},{value:"Create Source File and Write Test Data",id:"create-source-file-and-write-test-data",level:3},{value:"Start Source Connector",id:"start-source-connector",level:3},{value:"Source Connector Configuration Instructions",id:"source-connector-configuration-instructions",level:4},{value:"5. Start sink connector",id:"5-start-sink-connector",level:2},{value:"sink connector configuration instructions",id:"sink-connector-configuration-instructions",level:4},{value:"6. Stop connector",id:"6-stop-connector",level:2},{value:"7. Stop the Worker process",id:"7-stop-the-worker-process",level:2},{value:"8. Log directory",id:"8-log-directory",level:2},{value:"9. Configuration File Instructions",id:"9-configuration-file-instructions",level:2}],u={toc:i},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"rocketmq-connect--quick-start"},"RocketMQ Connect  Quick Start"),(0,r.yg)("h1",{id:"quick-start"},"Quick Start"),(0,r.yg)("p",null,'This tutorial will start a RocketMQ Connector example project "rocketmq-connect-sample" in standalone mode to help you understand the working principle of connectors.\nThe example project provides a source connector that reads data from source files and sends it to the RocketMQ cluster.\nIt also provides a sink connector that reads messages from the RocketMQ cluster and writes them to destination files.'),(0,r.yg)("h2",{id:"1-preparation-start-rocketmq"},"1. Preparation: Start RocketMQ"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,r.yg)("li",{parentName:"ol"},"64bit JDK 1.8+;"),(0,r.yg)("li",{parentName:"ol"},"Maven 3.2.x+;"),(0,r.yg)("li",{parentName:"ol"},"Start RocketMQ. Either ",(0,r.yg)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/4.x/"},"RocketMQ 4.x")," or\n",(0,r.yg)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quickStart/01quickstart/"},"RocketMQ 5.x")," 5.x version can be used; "),(0,r.yg)("li",{parentName:"ol"},"Test RocketMQ message sending and receiving using the tool. ")),(0,r.yg)("p",null,"Here, use the environment variable NAMESRV_ADDR to inform the tool client of the NameServer address of RocketMQ as localhost:9876."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#$ cd distribution/target/rocketmq-4.9.7/rocketmq-4.9.7\n$ cd distribution/target/rocketmq-5.1.4/rocketmq-5.1.4\n\n$ export NAMESRV_ADDR=localhost:9876\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n SendResult [sendStatus=SEND_OK, msgId= ...\n\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n ConsumeMessageThread_%d Receive New Messages: [MessageExt...\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note"),": RocketMQ has the feature of automatically creating Topic and Group. When sending or subscribing to messages,\nif the corresponding Topic or Group does not exist, RocketMQ will automatically create them. Therefore,\nthere is no need to create Topic and Group in advance."),(0,r.yg)("h2",{id:"2-build-connector-runtime"},"2. Build Connector Runtime"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/rocketmq-connect.git\n\ncd  rocketmq-connect\n\nexport RMQ_CONNECT_HOME=`pwd`\n\nmvn -Prelease-connect -Dmaven.test.skip=true clean install -U\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note"),": The project already includes the code for rocketmq-connect-sample by default,\nso there is no need to build the rocketmq-connect-sample plugin separately."),(0,r.yg)("h2",{id:"3-run-connector-worker-in-standalone-mode"},"3. Run Connector Worker in Standalone Mode"),(0,r.yg)("h3",{id:"modify-configuration"},"Modify Configuration"),(0,r.yg)("p",null,"Modify the ",(0,r.yg)("inlineCode",{parentName:"p"},"connect-standalone.conf")," file to configure the RocketMQ connection\naddress and other information. Please refer to ",(0,r.yg)("a",{parentName:"p",href:"#9-configuration-file-instructions"},"9. Configuration File Instructions")," for details."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd $RMQ_CONNECT_HOME/distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n\nvim conf/connect-standalone.conf\n")),(0,r.yg)("p",null,"In standalone mode, RocketMQ Connect persists the synchronization checkpoint information\nto the local file directory storePathRootDir."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"storePathRootDir=/Users/YourUsername/rocketmqconnect/storeRoot")),(0,r.yg)("p",null,"If you want to reset the synchronization checkpoint, you need to delete the persisted\ncheckpoint file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"rm -rf /Users/YourUsername/rocketmqconnect/storeRoot/*\n")),(0,r.yg)("h3",{id:"start-connector-worker-in-standalone-mode"},"Start Connector Worker in Standalone Mode"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/connect-standalone.sh -c conf/connect-standalone.conf &\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"tips"),": You can modify ",(0,r.yg)("inlineCode",{parentName:"p"},"docker/connect/bin/runconnect.sh")," to adjust JVM startup\nparameters as needed."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},'JAVA_OPT="${JAVA_OPT} -server -Xms256m -Xmx256m"')),(0,r.yg)("p",null,"To view the startup log file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"tail -100f ~/logs/rocketmqconnect/connect_runtime.log\n")),(0,r.yg)("p",null,"If the runtime starts successfully, you will see the following print in the log file:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The standalone worker boot success.")),(0,r.yg)("p",null,"To exit the log tracking mode of ",(0,r.yg)("inlineCode",{parentName:"p"},"tail -f")," command, you can press the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ctrl + C")," key combination."),(0,r.yg)("h2",{id:"4-start-source-connector"},"4. Start Source Connector"),(0,r.yg)("h3",{id:"create-source-file-and-write-test-data"},"Create Source File and Write Test Data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'mkdir -p /Users/YourUsername/rocketmqconnect/\ncd /Users/YourUsername/rocketmqconnect/\ntouch test-source-file.txt\n\necho "Hello \\r\\nRocketMQ\\r\\n Connect" >> test-source-file.txt\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note"),": There should be no empty lines (the demo program will throw an error if it\nencounters empty lines). The source connector will continuously read the source file\nand convert each line of data into a message body to be sent to RocketMQ for consumption\nby the sink connector."),(0,r.yg)("h3",{id:"start-source-connector"},"Start Source Connector"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/fileSourceConnector -d \'{\n    "connector.class": "org.apache.rocketmq.connect.file.FileSourceConnector",\n    "filename": "/Users/YourUsername/rocketmqconnect/test-source-file.txt",\n    "connect.topicname": "fileTopic"\n}\'\n')),(0,r.yg)("p",null,"If the curl request returns status 200, it indicates successful creation. Example response:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},'{"status":200,"body":{"connector.class":"org.apache.rocketmq.connect.file.FileSourceConnector","filename":"/Users/YourUsername/rocketmqconnect/test-source-file.txt","connect.topicname":"fileTopic"}}')),(0,r.yg)("p",null,"View the log file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"tail -100f ~/logs/rocketmqconnect/connect_runtime.log\n")),(0,r.yg)("p",null,"If you see the following log, it means the file source connector has started successfully:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Start connector fileSourceConnector and set target state STARTED successed!!")),(0,r.yg)("h4",{id:"source-connector-configuration-instructions"},"Source Connector Configuration Instructions"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"key"),(0,r.yg)("th",{parentName:"tr",align:null},"nullable"),(0,r.yg)("th",{parentName:"tr",align:null},"default"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector.class"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"The class name (including the package name) that implements the Connector interface")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filename"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the source file (recommended to use absolute path)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connect.topicname"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Topic required for synchronizing file data")))),(0,r.yg)("h2",{id:"5-start-sink-connector"},"5. Start sink connector"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/fileSinkConnector -d \'{\n    "connector.class": "org.apache.rocketmq.connect.file.FileSinkConnector",\n    "filename": "/Users/YourUsername/rocketmqconnect/test-sink-file.txt",\n    "connect.topicnames": "fileTopic"\n}\'\n')),(0,r.yg)("p",null,"If the curl request returns status 200, it indicates successful creation. Example response:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},'{"status":200,"body":{"connector.class":"org.apache.rocketmq.connect.file.FileSinkConnector","filename":"/Users/YourUsername/rocketmqconnect/test-sink-file.txt","connect.topicnames":"fileTopic"}}')),(0,r.yg)("p",null,"View the log file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"tail -100f ~/logs/rocketmqconnect/connect_runtime.log\n")),(0,r.yg)("p",null,"If you see the following log, it means the file sink connector has started successfully:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Start connector fileSinkConnector and set target state STARTED successed!!")),(0,r.yg)("p",null,"Check if the sink connector has written data to the destination file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cat /Users/YourUsername/rocketmqconnect/test-sink-file.txt\n")),(0,r.yg)("p",null,"If the test-sink-file.txt file is generated and its content is the same as the\ntest-source-file.txt, it means the entire process is running correctly."),(0,r.yg)("p",null,"Continue writing test data to the source file test-source-file.txt:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'cd /Users/YourUsername/rocketmqconnect/\n\necho "Say Hi to\\r\\nRMQ Connector\\r\\nAgain" >> test-source-file.txt\n\n# Wait a few seconds, check if rocketmq-connect replicate data to sink file succeed \nsleep 10\ncat /Users/YourUsername/rocketmqconnect/test-sink-file.txt\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note"),": The order of file contents may vary because the ",(0,r.yg)("inlineCode",{parentName:"p"},"rocketmq-connect-sample")," uses ",(0,r.yg)("inlineCode",{parentName:"p"},"normal message")," when\nsending and receiving messages to/from a RocketMQ topic. This is different from ",(0,r.yg)("inlineCode",{parentName:"p"},"ordered message"),", and consuming\n",(0,r.yg)("inlineCode",{parentName:"p"},"normal messages")," does not guarantee the order."),(0,r.yg)("h4",{id:"sink-connector-configuration-instructions"},"sink connector configuration instructions"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"key"),(0,r.yg)("th",{parentName:"tr",align:null},"nullable"),(0,r.yg)("th",{parentName:"tr",align:null},"default"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector.class"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"The class name (including the package name) that implements the Connector interface")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filename"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"The sink pulls data and saves it to a file(recommended to use absolute path)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connect.topicnames"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"The topics of the data messages that the sink needs to process")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Tips"),"\uff1aThe configuration file instructions for the sample rocketmq-connect-sample are for reference only, different source/sink connectors have different configurations, please refer to the specific source/sink connector."),(0,r.yg)("h2",{id:"6-stop-connector"},"6. Stop connector"),(0,r.yg)("p",null,"The RESTful command format for stopping connectors is\n",(0,r.yg)("inlineCode",{parentName:"p"},"http://(your worker ip):(port)/connectors/(connector name)/stop")),(0,r.yg)("p",null,"To stop the two connectors in the demo, you can use the following commands:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:8082/connectors/fileSinkConnector/stop\ncurl http://127.0.0.1:8082/connectors/fileSourceConnector/stop\n")),(0,r.yg)("p",null,"If the curl request returns a status of 200, it indicates successful stopping of the connectors.\nExample response:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},'{"status":200,"body":"Connector ',"[fileSinkConnector]",' deleted successfully"}')),(0,r.yg)("p",null,"If you see the following log message, it means the file sink connector has been\nsuccessfully shut down:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"tail -100f ~/logs/rocketmqconnect/connect_default.log\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Completed shutdown for connectorName:fileSinkConnector")),(0,r.yg)("h2",{id:"7-stop-the-worker-process"},"7. Stop the Worker process"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd $RMQ_CONNECT_HOME/distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\nsh bin/connectshutdown.sh\n")),(0,r.yg)("h2",{id:"8-log-directory"},"8. Log directory"),(0,r.yg)("p",null,"You can use the following commands to view the log directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"ls $HOME/logs/rocketmqconnect\nls ~/logs/rocketmqconnect\n")),(0,r.yg)("h2",{id:"9-configuration-file-instructions"},"9. Configuration File Instructions"),(0,r.yg)("p",null,"Modify the RESTful port, storeRoot path, Nameserver address, and other information based on your usage."),(0,r.yg)("p",null,"Here is an example of a configuration file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#current cluster node uniquely identifies\nworkerId=DEFAULT_WORKER_1\n\n# Http prot for user to access REST API\nhttpPort=8082\n\n# Local file dir for config store\nstorePathRootDir=/Users/YourUsername/rocketmqconnect/storeRoot\n\n#You need to modify it to your own rocketmq nameserver endpoint.\n# RocketMQ namesrvAddr\nnamesrvAddr=127.0.0.1:9876  \n\n# Plugin path for loading Source/Sink Connectors\n# The rocketmq-connect project already includes the rocketmq-connect-sample module by default, so no configuration is needed here.\npluginPaths=\n")),(0,r.yg)("p",null,"Explanation of storePathRootDir configuration:"),(0,r.yg)("p",null,"In standalone mode, RocketMQ Connect persists the synchronization checkpoint information\nto the local file directory specified by storePathRootDir. The persistent files include:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"key"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connectorConfig.json"),(0,r.yg)("td",{parentName:"tr",align:null},"Connector configuration persistence files")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"position.json"),(0,r.yg)("td",{parentName:"tr",align:null},"Source connect data processing progress persistence files")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"taskConfig.json"),(0,r.yg)("td",{parentName:"tr",align:null},"Task configuration persistence files")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"offset.json"),(0,r.yg)("td",{parentName:"tr",align:null},"Sink connect data consumption progress persistence files")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connectorStatus.json"),(0,r.yg)("td",{parentName:"tr",align:null},"Connector status persistence files")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"taskStatus.json"),(0,r.yg)("td",{parentName:"tr",align:null},"Task status persistence files")))))}g.isMDXComponent=!0}}]);