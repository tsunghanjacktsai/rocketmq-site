"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},l="Access Control",o={unversionedId:"bestPractice/04access",id:"bestPractice/04access",title:"Access Control",description:"1. Introduction to access control features",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05-bestPractice/04access.md",sourceDirName:"05-bestPractice",slug:"/bestPractice/04access",permalink:"/docs/4.x/bestPractice/04access",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/05-bestPractice/04access.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Message Trace",permalink:"/docs/4.x/bestPractice/03messagetra"},next:{title:"JVM/OS Configuration",permalink:"/docs/4.x/bestPractice/05JVMOS"}},s={},c=[{value:"1. Introduction to access control features",id:"1-introduction-to-access-control-features",level:2},{value:"2. Definition and attribute values of access control",id:"2-definition-and-attribute-values-of-access-control",level:2},{value:"2.1 Permission definition",id:"21-permission-definition",level:3},{value:"2.2 Key attributes of permission definitions",id:"22-key-attributes-of-permission-definitions",level:3},{value:"3. Deployment of clusters supporting access control",id:"3-deployment-of-clusters-supporting-access-control",level:2},{value:"4. Main process of access control",id:"4-main-process-of-access-control",level:2},{value:"4.1 Permission parsing",id:"41-permission-parsing",level:3},{value:"4.2 Permission verification",id:"42-permission-verification",level:3},{value:"5. Hot reload modified access control definitions",id:"5-hot-reload-modified-access-control-definitions",level:2},{value:"6. Usage limits for access control",id:"6-usage-limits-for-access-control",level:2},{value:"7. ACL mqadmin configuration management commands",id:"7-acl-mqadmin-configuration-management-commands",level:2},{value:"7.1 Update the value of the &quot;account&quot; attribute in the ACL configuration file",id:"71-update-the-value-of-the-account-attribute-in-the-acl-configuration-file",level:3},{value:"7.2 Delete the corresponding &quot;account&quot; in the ACL configuration file",id:"72-delete-the-corresponding-account-in-the-acl-configuration-file",level:3},{value:"7.3 Update the global whitelist in the ACL configuration file",id:"73-update-the-global-whitelist-in-the-acl-configuration-file",level:3},{value:"7.4 Query the ACL configuration file version information of the cluster Broker",id:"74-query-the-acl-configuration-file-version-information-of-the-cluster-broker",level:3},{value:"7.5 Query the entire contents of the ACL configuration file of the cluster Broker",id:"75-query-the-entire-contents-of-the-acl-configuration-file-of-the-cluster-broker",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"access-control"},"Access Control"),(0,r.kt)("h2",{id:"1-introduction-to-access-control-features"},"1. Introduction to access control features"),(0,r.kt)("p",null,"access control (ACL) mainly provides advanced access control functions at the Topic resource level for RocketMQ. When using RocketMQ access control, users can inject user name and password parameters into the  client to achieve signature, and the server can implement permission management and verification of various resources through access control parameters."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"ACL control will increase the complexity of deployment process and operation and maintenance management while enhancing cluster access control security. It is generally only recommended for use in scenarios where the network environment is not secure, business data is sensitive, and multiple departments and tenants are mixed. If the production cluster itself is a private cluster and is not accessed by external departments and tenants, it can be turned off.")),(0,r.kt)("h2",{id:"2-definition-and-attribute-values-of-access-control"},"2. Definition and attribute values of access control"),(0,r.kt)("h3",{id:"21-permission-definition"},"2.1 Permission definition"),(0,r.kt)("p",null,"The definition of access access control for RocketMQ Topic resources is mainly as shown in the following table, divided into the following four categories:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DENY"),(0,r.kt)("td",{parentName:"tr",align:null},"reject")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ANY"),(0,r.kt)("td",{parentName:"tr",align:null},"PUB or SUB permission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUB"),(0,r.kt)("td",{parentName:"tr",align:null},"send permission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"subscribe permission")))),(0,r.kt)("h3",{id:"22-key-attributes-of-permission-definitions"},"2.2 Key attributes of permission definitions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"globalWhiteRemoteAddresses"),(0,r.kt)("td",{parentName:"tr",align:null},"*",";192.168.","*",".","*",";192.168.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Global IP whitelist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accessKey"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Access Key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secretKey"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Secret Key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"whiteRemoteAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"*",";192.168.","*",".","*",";192.168.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"User IP whitelist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},"true;false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether it is an administrator account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultTopicPerm"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY;PUB;SUB;PUB","|","SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"default Topic permission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultGroupPerm"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY;PUB;SUB;PUB","|","SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"defalutl ConsumerGroup permission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicPerms"),(0,r.kt)("td",{parentName:"tr",align:null},"topic=permission"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions for each Topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groupPerms"),(0,r.kt)("td",{parentName:"tr",align:null},"group=permission"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions for each Consumer Group")))),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("strong",{parentName:"p"},"distribution/conf/plain_acl.yml")," configuration file for specific information."),(0,r.kt)("h2",{id:"3-deployment-of-clusters-supporting-access-control"},"3. Deployment of clusters supporting access control"),(0,r.kt)("p",null,"After defining the permission attributes in the ",(0,r.kt)("strong",{parentName:"p"},"distribution/conf/plain_acl.yml")," configuration file as described above, you can turn on the ACL feature of the RocketMQ cluster by turning on the ",(0,r.kt)("strong",{parentName:"p"},"aclEnable")," switch variable. Here is the properties configuration file content for enabling the ACL feature on the Broker\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brokerClusterName=DefaultCluster\nbrokerName=broker-a\nbrokerId=0\ndeleteWhen=04\nfileReservedTime=48\nbrokerRole=ASYNC_MASTER\nflushDiskType=ASYNC_FLUSH\nstorePathRootDir=/data/rocketmq/rootdir-a-m\nstorePathCommitLog=/data/rocketmq/commitlog-a-m\nautoCreateSubscriptionGroup=true\n## if acl is open,the flag will be true\naclEnable=true\nlistenPort=10911\nbrokerIP1=XX.XX.XX.XX1\nnamesrvAddr=XX.XX.XX.XX:9876\n")),(0,r.kt)("h2",{id:"4-main-process-of-access-control"},"4. Main process of access control"),(0,r.kt)("p",null,"The main process of ACL is divided into two parts, mainly including permission parsing and permission verification."),(0,r.kt)("h3",{id:"41-permission-parsing"},"4.1 Permission parsing"),(0,r.kt)("p",null,"The Broker parses the client's RequestCommand request and gets the attributes fields that need to be authenticated, mainly including:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"AccessKey: Similar to a username, it refers to the user subject and corresponds to the permission data."),(0,r.kt)("li",{parentName:"ol"},"Signature: A string obtained by the client signing with the SecretKey, which the server then verifies with the SecretKey.")),(0,r.kt)("h3",{id:"42-permission-verification"},"4.2 Permission verification"),(0,r.kt)("p",null,"The permission verification logic on the Broker side is mainly divided into the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check if it hits the global IP whitelist; if it is, it is considered to have passed the verification; otherwise, go to 2."),(0,r.kt)("li",{parentName:"ol"},"Check if it hits the user IP whitelist; if it is, it is considered to have passed the verification; otherwise, go to 3."),(0,r.kt)("li",{parentName:"ol"},"Verify the signature, if the verification fails, throw an exception; if it passes, go to 4."),(0,r.kt)("li",{parentName:"ol"},"Verify the permissions required by the user request against the permissions owned by the user; if it fails, throw an exception.")),(0,r.kt)("p",null,"The verification of the required permissions for the user needs to pay attention to the following content:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Special requests such as UPDATE_AND_CREATE_TOPIC can only be operated by the admin account."),(0,r.kt)("li",{parentName:"ol"},"For a certain resource, if there is an explicit configuration permission, the configured permission is used; if there is no explicit configuration    permission, the default permission is used.")),(0,r.kt)("h2",{id:"5-hot-reload-modified-access-control-definitions"},"5. Hot reload modified access control definitions"),(0,r.kt)("p",null,"The default implementation of RocketMQ's access control storage is based on the yml configuration file. Users can dynamically modify the properties of the access control definition without restarting the Broker service node."),(0,r.kt)("h2",{id:"6-usage-limits-for-access-control"},"6. Usage limits for access control"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If ACL is enabled together with high availability deployment (Master/Slave architecture), you need to set the global whitelist information in the distribution/conf/plain_acl.yml configuration file on the Broker Master node, that is, set the IP address of the Slave node to the global whitelist in the plain_acl.yml configuration file on the Master node."),(0,r.kt)("li",{parentName:"ol"},"If ACL is enabled together with high availability deployment (multi-replica Dledger architecture), because the primary node will be automatically selected in the Dledger Group when a node goes down, you need to set the whitelist in the plain_acl.yml configuration file of all Broker nodes in the Dledger Group to the IP address of all Broker nodes.")),(0,r.kt)("h2",{id:"7-acl-mqadmin-configuration-management-commands"},"7. ACL mqadmin configuration management commands"),(0,r.kt)("h3",{id:"71-update-the-value-of-the-account-attribute-in-the-acl-configuration-file"},'7.1 Update the value of the "account" attribute in the ACL configuration file'),(0,r.kt)("p",null,"An example of this command is as follows\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh mqadmin updateAclConfig -n 192.168.1.2:9876 -b 192.168.12.134:10911 -a RocketMQ -s 1234567809123 -t topicA=DENY,topicD=SUB -g groupD=DENY,groupB=SUB\n")),(0,r.kt)("p",null,'Explain:  If it does not exist, it will be created in the ACL Config YAML configuration file; if it exists, it will update the corresponding "accounts" attribute; if the specified cluster name is specified, the command will be executed on each broker node in the cluster; otherwise, the command will be executed on a single broker node.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.1.2:9876"),(0,r.kt)("td",{parentName:"tr",align:null},"Namesrv address (required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DefaultCluster"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify cluster name(Choose one with the broker address)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.12.134:10911"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify broker address(Choose one with the cluster name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:RocketMQ"),(0,r.kt)("td",{parentName:"tr",align:null},"Access Key value(required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:1234567809123"),(0,r.kt)("td",{parentName:"tr",align:null},"Secret Key value(optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"m"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether it is an administrator account (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"w"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.0.*"),(0,r.kt)("td",{parentName:"tr",align:null},"whiteRemoteAddress,user IP whitelist (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DENY;PUB;SUB;PUB","|","SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"defaultTopicPerm,default Topic permissions (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"u"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DENY;PUB;SUB;PUB","|","SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"defaultGroupPerm,default Consumer Group permissions (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:topicA=DENY,topicD=SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"topicPerms,permissions for each Topic (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:groupD=DENY,groupB=SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"groupPerms,permissions for each Consumer Group (optional)")))),(0,r.kt)("h3",{id:"72-delete-the-corresponding-account-in-the-acl-configuration-file"},'7.2 Delete the corresponding "account" in the ACL configuration file'),(0,r.kt)("p",null,"An example of this command is as follows\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh mqadmin deleteAccessConfig -n 192.168.1.2:9876 -c DefaultCluster -a RocketMQ\n")),(0,r.kt)("p",null,'Explain: If the specified cluster name is specified, the command will be executed on each broker node in the cluster; otherwise, the command will be executed on a single broker node. The parameter "a" is the value of the Access Key, which is used to identify the unique account ID, so the account ID can be specified in the command parameter.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.1.2:9876"),(0,r.kt)("td",{parentName:"tr",align:null},"namesrv address(required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DefaultCluster"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify cluster name(Choose one with the broker address)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.12.134:10911"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify broker address(Choose one with the cluster name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:RocketMQ"),(0,r.kt)("td",{parentName:"tr",align:null},"Access Key value(required)")))),(0,r.kt)("h3",{id:"73-update-the-global-whitelist-in-the-acl-configuration-file"},"7.3 Update the global whitelist in the ACL configuration file"),(0,r.kt)("p",null,"An example of this command is as follows\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh mqadmin updateGlobalWhiteAddr -n 192.168.1.2:9876 -b 192.168.12.134:10911 -g 10.10.154.1,10.10.154.2\n")),(0,r.kt)("p",null,'Explain: If the specified cluster name is specified, the command will be executed on each broker node in the cluster; otherwise, the command will be executed on a single broker node. The parameter "g" is the value of the global IP whitelist, which is used to update the "globalWhiteRemoteAddresses" field attribute value in the ACL configuration file.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.1.2:9876"),(0,r.kt)("td",{parentName:"tr",align:null},"namesrv address(required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DefaultCluster"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify cluster name(Choose one with the broker address)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.12.134:10911"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify broker address(Choose one with the cluster name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:10.10.154.1,10.10.154.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Global IP whitelist(required)")))),(0,r.kt)("h3",{id:"74-query-the-acl-configuration-file-version-information-of-the-cluster-broker"},"7.4 Query the ACL configuration file version information of the cluster Broker"),(0,r.kt)("p",null,"An example of this command is as follows\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh mqadmin clusterAclConfigVersion -n 192.168.1.2:9876 -c DefaultCluster\n")),(0,r.kt)("p",null,"Explain: If the specified cluster name is specified, the command will be executed on each broker node in the cluster; otherwise, the command will be executed on a single broker node."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.1.2:9876"),(0,r.kt)("td",{parentName:"tr",align:null},"namesrv address(required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DefaultCluster"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify cluster name(Choose one with the broker address)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.12.134:10911"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify broker address(Choose one with the cluster name)")))),(0,r.kt)("h3",{id:"75-query-the-entire-contents-of-the-acl-configuration-file-of-the-cluster-broker"},"7.5 Query the entire contents of the ACL configuration file of the cluster Broker"),(0,r.kt)("p",null,"An example of this command is as follows\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh mqadmin getAccessConfigSubCommand -n 192.168.1.2:9876 -c DefaultCluster\n")),(0,r.kt)("p",null,"Explain: If the specified cluster name is specified, the command will be executed on each broker node in the cluster; Otherwise, the command is executed on a single broker node."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.1.2:9876"),(0,r.kt)("td",{parentName:"tr",align:null},"namesrv address(required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DefaultCluster"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify cluster name(Choose one with the broker address)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.12.134:10911"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify broker address(Choose one with the cluster name)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Special attention"),": The problem of abnormal data synchronization of Broker under Master/Slave and Dledger modes after Acl authentication is enabled has been fixed in the ","[4.5.1]"," version of the community. The specific PR link is: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/pull/1149"},"https://github.com/apache/rocketmq/pull/1149")))}p.isMDXComponent=!0}}]);