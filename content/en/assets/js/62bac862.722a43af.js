"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6179],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,k=m["".concat(l,".").concat(u)]||m[u]||h[u]||s;return a?r.createElement(k,n(n({ref:t},c),{},{components:a})):r.createElement(k,n({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,n=new Array(s);n[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var p=2;p<s;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const s={title:"Release Notes - Apache RocketMQ - Version 4.1.0-incubating",categories:["Release_Notes"]},n=void 0,o={permalink:"/en/third-blog/2017/06/02/4.1.0",source:"@site/third-blog/2017-06-02-4.1.0.md",title:"Release Notes - Apache RocketMQ - Version 4.1.0-incubating",description:"* Source: rocketmq-all-4.1.0-incubating-source-release.zip [PGP] [MD5] [SHA1]",date:"2017-06-02T00:00:00.000Z",formattedDate:"June 2, 2017",tags:[],readingTime:2.61,truncated:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.1.0-incubating",categories:["Release_Notes"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.2.0",permalink:"/en/third-blog/2017/12/13/4.2.0"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.0.0-incubating",permalink:"/en/third-blog/2017/01/24/4.0.0"}},l={authorsImageUrls:[]},p=[{value:"New Feature",id:"new-feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Download the 4.1.0-incubating release")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Source: ",(0,i.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-source-release.zip"},"rocketmq-all-4.1.0-incubating-source-release.zip")," [",(0,i.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-source-release.zip.asc"},"PGP"),"] [",(0,i.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-source-release.zip.md5"},"MD5"),"] [",(0,i.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-source-release.zip.sha1"},"SHA1"),"]"),(0,i.kt)("li",{parentName:"ul"},"Binary: ",(0,i.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-bin-release.zip"},"rocketmq-all-4.1.0-incubating-bin-release.zip")," [",(0,i.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-bin-release.zip.asc"},"PGP"),"] [",(0,i.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-bin-release.zip.md5"},"MD5"),"] [",(0,i.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-bin-release.zip.sha1"},"SHA1"),"]")))),(0,i.kt)("h2",{id:"new-feature"},"New Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-80"},"ROCKETMQ-80"),"] - Add batch feature"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-121"},"ROCKETMQ-121"),"] - Support message filtering based on SQL92"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-194"},"ROCKETMQ-194"),"] - log appender using rocketmq"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-186"},"ROCKETMQ-186"),"] - Implement the OpenMessaging specification 0.1.0-alpha version")),(0,i.kt)("h2",{id:"improvement"},"Improvement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-67"},"ROCKETMQ-67"),"] - Consistent Hash allocate strategy support"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-99"},"ROCKETMQ-99"),"] - Add scripts for Windows platform"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-36"},"ROCKETMQ-36"),"] - Improve broker's GC logs storing"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-39"},"ROCKETMQ-39"),"] - Duplicated codes in both filtersrv and namesrv modules"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-86"},"ROCKETMQ-86"),"] - Polish the release file format"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-88"},"ROCKETMQ-88"),"] - Polish the developer list in pom.xml"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-90"},"ROCKETMQ-90"),"] - Include client IP per message queue of consumer progress command output"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-114"},"ROCKETMQ-114"),"] - Add javadoc to codebase"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-138"},"ROCKETMQ-138"),"] - Add AuthenticationException class to remove hard coded Aliyun authentication class"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-139"},"ROCKETMQ-139"),"] - Degrade the client related modules' JDK version to 1.6"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-144"},"ROCKETMQ-144"),"] - Aggregate distribution specific files to a new module"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-154"},"ROCKETMQ-154"),"] - Add a newline after help info"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-160"},"ROCKETMQ-160"),"] - SendHeartBeart log may not be triggered in the same expected period"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-161"},"ROCKETMQ-161"),"] - Update runbroker.sh and runserver.sh to support user defined jvm memory flag"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-168"},"ROCKETMQ-168"),"] - Duplicated calls of life cycle in Maven."),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-172"},"ROCKETMQ-172"),"] - log improvement for rocketmq client"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-176"},"ROCKETMQ-176"),"] - Improvement the Maven Central Badge in readme"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-187"},"ROCKETMQ-187"),"] - Measure the code coverage for Integration Tests"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-148"},"ROCKETMQ-148"),"] - Migrate all relevant docs from the old Github project's wiki to the ASF site"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-218"},"ROCKETMQ-218"),"] - Add IT test for Filter By SQL 92"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-219"},"ROCKETMQ-219"),"] - Add Batch Example"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-220"},"ROCKETMQ-220"),"] - README.md update, remove some github links")),(0,i.kt)("h2",{id:"bug"},"Bug"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-77"},"ROCKETMQ-77"),"] - ","[TEST]"," org.apache.rocketmq.tools.* have NPEs"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-89"},"ROCKETMQ-89"),"] - WS_DOMAIN_NAME, SUBGROUP default values overrides custom values passed by java options"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-95"},"ROCKETMQ-95"),"] - The config files of client log have been damaged"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-98"},"ROCKETMQ-98"),"] - Risk of unable to release putMessage Lock forever"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-101"},"ROCKETMQ-101"),"] - Possible NullPointerException when retry in send Async way"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-107"},"ROCKETMQ-107"),"] - Access ServiceState is not thread safe when start() or shutdown()"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-119"},"ROCKETMQ-119"),"] - Shutdown PullMessageService properly"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-140"},"ROCKETMQ-140"),"] - Register higher version broker against old name servers"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-143"},"ROCKETMQ-143"),"] - Update fastjson from 1.2.12 to 1.2.29"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-145"},"ROCKETMQ-145"),"] - Hit ConcurrentModificationException in doWaitTransfer which happens very offen"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-153"},"ROCKETMQ-153"),"] - Fetch name server address dynamically"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-155"},"ROCKETMQ-155"),"] - Fix typo in ClientConfig"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-165"},"ROCKETMQ-165"),"] - Maximum pull batch size hard-coded restricted"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-175"},"ROCKETMQ-175"),"] - Consumer may miss messages because of inconsistent subscription"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-178"},"ROCKETMQ-178"),"] - Broker -m -p options are broken"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-179"},"ROCKETMQ-179"),"] - Fix errors of test cases"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-188"},"ROCKETMQ-188"),"] - RemotingExecption is not consistent between invoke async and invoke oneway"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-189"},"ROCKETMQ-189"),"] - Misleading tip on consumeTimestamp and wrong consumeTimestamp exception message"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-191"},"ROCKETMQ-191"),"] - Fix incorret socket option"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-199"},"ROCKETMQ-199"),"] - consumers can not receive stock information."),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-200"},"ROCKETMQ-200"),"] - Cluster name is always missing when fetch ClusterInfo from name server"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-206"},"ROCKETMQ-206"),"] - Load JSON config file error if non-1byte character exists"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-208"},"ROCKETMQ-208"),"] - incompatibility problem found in enviroment of JDK 1.7 when running client")))}h.isMDXComponent=!0}}]);