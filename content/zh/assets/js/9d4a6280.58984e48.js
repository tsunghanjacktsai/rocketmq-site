"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3633],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u5fae\u670d\u52a1\u751f\u6001\u5168\u666f\u56fe",description:"\u5fae\u670d\u52a1\u751f\u6001\u5168\u666f\u56fe",hide_table_of_contents:!1},c=void 0,i={permalink:"/zh/blog/mse",source:"@site/blog/mse.mdx",title:"\u5fae\u670d\u52a1\u751f\u6001\u5168\u666f\u56fe",description:"\u5fae\u670d\u52a1\u751f\u6001\u5168\u666f\u56fe",date:"2023-02-27T14:55:25.000Z",formattedDate:"2023\u5e742\u670827\u65e5",tags:[],readingTime:.62,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u5fae\u670d\u52a1\u751f\u6001\u5168\u666f\u56fe",description:"\u5fae\u670d\u52a1\u751f\u6001\u5168\u666f\u56fe",hide_table_of_contents:!1}},l={authorsImageUrls:[]},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"msemap-container"},(0,o.kt)("p",null,"Apache RocketMQ \u4e0e\u5176\u4ed6\u4f18\u79c0\u7684\u5f00\u6e90\u793e\u533a\u7d27\u5bc6\u5408\u4f5c\uff0c\u6784\u5efa\u4e30\u5bcc\u7684\u6280\u672f\u751f\u6001\uff0c \u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u5168\u9762\u7684\u5fae\u670d\u52a1\u652f\u6301\u3002"),(0,o.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u9009\u62e9 Apache RocketMQ \u4f5c\u4e3a\u6d88\u606f\u4e2d\u95f4\u4ef6\u540e\uff0c \u5f00\u53d1\u8005\u65e0\u9700\u62c5\u5fc3\u540e\u7eed\u7684\u670d\u52a1\u6cbb\u7406\u9700\u6c42\uff0c\u56e0\u4e3a Apache RocketMQ \u53ef\u4ee5\u878d\u5408\u5176\u4ed6\u5f00\u6e90\u9879\u76ee\uff0c \u4e3a\u751f\u4ea7\u4e2d\u5404\u79cd\u5e38\u89c1\u7684\u6280\u672f\u95ee\u9898\u63d0\u4f9b\u5b8c\u5584\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,o.kt)("div",{id:"mse-arc-container"})))}f.isMDXComponent=!0}}]);