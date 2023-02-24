"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,k=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return n?o.createElement(k,c(c({ref:t},d),{},{components:n})):o.createElement(k,c({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},c="RocketMQ Connect Concept",i={unversionedId:"connect/02RocketMQ Connect Concept",id:"connect/02RocketMQ Connect Concept",title:"RocketMQ Connect Concept",description:"Connector",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/10-connect/02RocketMQ Connect Concept.md",sourceDirName:"10-connect",slug:"/connect/02RocketMQ Connect Concept",permalink:"/docs/4.x/connect/02RocketMQ Connect Concept",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/10-connect/02RocketMQ Connect Concept.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Connect Overview",permalink:"/docs/4.x/connect/01RocketMQ Connect Overview"},next:{title:"RocketMQ Connect  Quick Start",permalink:"/docs/4.x/connect/03RocketMQ Connect Quick Start"}},s={},l=[{value:"Connector",id:"connector",level:2},{value:"Task",id:"task",level:2},{value:"Worker",id:"worker",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rocketmq-connect-concept"},"RocketMQ Connect Concept"),(0,r.kt)("h2",{id:"connector"},"Connector"),(0,r.kt)("p",null,"The connector defines where the data is copied from and where it is copied to. It reads data from the source system and writes it to RocketMQ, which is the SourceConnector, or reads data from RocketMQ and writes it to the target system, which is the SinkConnector. The Connector decides the number of tasks to be created, and receives configuration from the Worker and passes it to the task."),(0,r.kt)("h2",{id:"task"},"Task"),(0,r.kt)("p",null,"Task is the minimum allocation unit of Connector task sharding, which is responsible for actually copying the source data to RocketMQ (SourceTask), or reading data from RocketMQ and writing it to the target system (SinkTask). Tasks are stateless, and can be started and stopped dynamically. Multiple tasks can be executed in parallel, and the parallelism of data copying by the Connector is mainly reflected in the number of tasks."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RocketMQ Basic Model",src:n(59680).Z,width:"1091",height:"321"})),(0,r.kt)("p",null,"Through Connect's API, you can also see the responsibilities of Connector and Task, Connector has determined the data copy flow when it is implemented, Connector receives data source related configuration, taskClass obtains the type of task to be created, and taskConfigs specifies the maximum number of tasks, and allocates configuration for tasks. After task gets the configuration, it reads data from the data source and writes it to the target storage."),(0,r.kt)("p",null,"From the following two diagrams, it is clear to see the basic flow of processing for Connector and Task."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RocketMQ Basic Model",src:n(30424).Z,width:"926",height:"388"})),(0,r.kt)("h2",{id:"worker"},"Worker"),(0,r.kt)("p",null,"The worker process is the running environment for Connector and Task, it provides RESTful capabilities, accepts HTTP requests, and passes the obtained configuration to Connector and Task. In addition, it is responsible for starting Connector and Task, saving Connector configuration information, saving the position information of Task's synchronized data, and load balancing capability. High availability, scaling and fault handling of Connect clusters mainly rely on the load balancing capability of Worker."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RocketMQ Basic Model",src:n(81206).Z,width:"551",height:"471"})),(0,r.kt)("p",null,"From the above diagram, it can be seen that the Worker receives http requests through the provided REST API, and passes the received configuration information to the configuration management service. The configuration management service saves the configuration locally and synchronizes it with other worker nodes, while also triggering load balancing."))}u.isMDXComponent=!0},59680:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Connector-Task-Concept-2b559eafc66fb942242d970224426270.png"},30424:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Connector-Task-process-deec60b757a7689d932d86e7cfcadfaa.png"},81206:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/worker-d578aa53e7f0d91e6448ddc0fa1478e3.png"}}]);