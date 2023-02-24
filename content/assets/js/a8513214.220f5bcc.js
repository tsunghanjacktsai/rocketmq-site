"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6565],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),k=a,f=m["".concat(p,".").concat(k)]||m[k]||u[k]||c;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},28574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const c={title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.3",categories:["Release_Notes"],tags:["RocketMQ_Client_CPP"]},o=void 0,i={permalink:"/release-notes/2019/08/20/release-notes-rocketmq-client-cpp-1.2.3",source:"@site/release-notes/2019-08-20-release-notes-rocketmq-client-cpp-1.2.3.md",title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.3",description:"* Source: rocketmq-client-cpp-1.2.3-source-release.tar.gz [PGP] [SHA512]",date:"2019-08-20T00:00:00.000Z",formattedDate:"August 20, 2019",tags:[{label:"RocketMQ_Client_CPP",permalink:"/release-notes/tags/rocket-mq-client-cpp"}],readingTime:1.225,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.3",categories:["Release_Notes"],tags:["RocketMQ_Client_CPP"]},prevItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.0.4",permalink:"/release-notes/2019/11/01/release-notes-rocketmq-spring-2.0.4"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.5.2",permalink:"/release-notes/2019/08/02/4.5.2"}},p={authorsImageUrls:[]},l=[],s={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Download",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Source: ",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/1.2.3/rocketmq-client-cpp-1.2.3-source-release.tar.gz"},"rocketmq-client-cpp-1.2.3-source-release.tar.gz")," [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/1.2.3/rocketmq-client-cpp-1.2.3-source-release.tar.gz.asc"},"PGP"),"] [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/1.2.3/rocketmq-client-cpp-1.2.3-source-release.tar.gz.sha512"},"SHA512"),"]"),(0,a.kt)("li",{parentName:"ul"},"Binary: ",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/1.2.3/rocketmq-client-cpp-1.2.3-bin-release.tar.gz"},"rocketmq-client-cpp-1.2.3-bin-release.tar.gz")," [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/1.2.3/rocketmq-client-cpp-1.2.3-bin-release.tar.gz.asc"},"PGP"),"] [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/1.2.3/rocketmq-client-cpp-1.2.3-bin-release.tar.gz.sha512"},"SHA512"),"]"))))}u.isMDXComponent=!0}}]);