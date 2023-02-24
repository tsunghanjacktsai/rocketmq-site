"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),k=a,f=m["".concat(l,".").concat(k)]||m[k]||u[k]||c;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},44493:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const c={title:"Release Notes - Apache RocketMQ Client CPP- Version 2.1.0",categories:["Release_Notes"],tags:["RocketMQ_Client_CPP"]},o=void 0,i={permalink:"/release-notes/2020/03/23/release-notes-rocketmq-client-cpp-2.1.0",source:"@site/release-notes/2020-03-23-release-notes-rocketmq-client-cpp-2.1.0.md",title:"Release Notes - Apache RocketMQ Client CPP- Version 2.1.0",description:"* Source: rocketmq-client-cpp-2.1.0-source-release.tar.gz [PGP] [SHA512]",date:"2020-03-23T00:00:00.000Z",formattedDate:"March 23, 2020",tags:[{label:"RocketMQ_Client_CPP",permalink:"/release-notes/tags/rocket-mq-client-cpp"}],readingTime:1.39,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client CPP- Version 2.1.0",categories:["Release_Notes"],tags:["RocketMQ_Client_CPP"]},prevItem:{title:"Release Notes - Apache RocketMQ Client Go- Version 2.0.0",permalink:"/release-notes/2020/03/31/release-notes-rocketmq-client-go-2.0.0"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.7.0",permalink:"/release-notes/2020/03/16/4.7.0"}},l={authorsImageUrls:[]},p=[],s={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Download",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Source: ",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.1.0/rocketmq-client-cpp-2.1.0-source-release.tar.gz"},"rocketmq-client-cpp-2.1.0-source-release.tar.gz")," [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.1.0/rocketmq-client-cpp-2.1.0-source-release.tar.gz.asc"},"PGP"),"] [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.1.0/rocketmq-client-cpp-2.1.0-source-release.tar.gz.sha512"},"SHA512"),"]"),(0,a.kt)("li",{parentName:"ul"},"Binary: ",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.1.0/rocketmq-client-cpp-2.1.0-bin-release.tar.gz"},"rocketmq-client-cpp-2.1.0-bin-release.tar.gz")," [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.1.0/rocketmq-client-cpp-2.1.0-bin-release.tar.gz.asc"},"PGP"),"] [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.1.0/rocketmq-client-cpp-2.1.0-bin-release.tar.gz.sha512"},"SHA512"),"]"))))}u.isMDXComponent=!0}}]);