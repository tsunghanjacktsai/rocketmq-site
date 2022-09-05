"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6546],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,h=d["".concat(i,".").concat(p)]||d[p]||u[p]||l;return r?n.createElement(h,c(c({ref:t},m),{},{components:r})):n.createElement(h,c({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6165:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(7294),a=r(6010),l=r(3516),c=r(6742);const o="sidebar_q+wC",i="sidebarItemTitle_9G5K",s="sidebarItemList_6T4b",m="sidebarItem_cjdF",u="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs";var p=r(4973);function h(e){let{sidebar:t}=e;return 0===t.items.length?null:n.createElement("nav",{className:(0,a.Z)(o,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,a.Z)(i,"margin-bottom--md")},t.title),n.createElement("ul",{className:s},t.items.map((e=>n.createElement("li",{key:e.permalink,className:m},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))))))}var g=r(571);const f=function(e){const{sidebar:t,toc:r,children:c,...o}=e,i=t&&t.items.length>0;return n.createElement(l.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},i&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,a.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},c),r&&n.createElement("div",{className:"col col--2"},n.createElement(g.Z,{toc:r})))))}},4884:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),a=r(6010),l=r(3905),c=r(4973),o=r(6742),i=r(4996),s=r(941),m=r(2238),u=r(6146);const d="blogPostTitle_d4p0",p="blogPostData_-Im+",h="blogPostDetailsFull_xD8n";var g=r(7682);const f="image_9q7L";const E=function(e){let{author:t}=e;const{name:r,title:a,url:l,imageURL:c}=t;return n.createElement("div",{className:"avatar margin-bottom--sm"},c&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:f,src:c,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),a&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},v="authorCol_8c0z";function b(e){let{authors:t,assets:r}=e;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>n.createElement("div",{className:(0,a.Z)("col col--6",v),key:t},n.createElement(E,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})))))}const y=function(e){const t=function(){const{selectMessage:e}=(0,s.c2)();return t=>{const r=Math.ceil(t);return e(r,(0,c.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}}(),{withBaseUrl:r}=(0,i.C)(),{children:f,frontMatter:E,assets:v,metadata:y,truncated:N,isBlogPostPage:Z=!1}=e,{date:_,formattedDate:k,permalink:O,tags:T,readingTime:P,title:w,editUrl:C,authors:L}=y,x=v.image??E.image;return n.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=Z?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:d,itemProp:"headline"},Z?w:n.createElement(o.Z,{itemProp:"url",to:O},w)),n.createElement("div",{className:(0,a.Z)(p,"margin-vert--md")},n.createElement("time",{dateTime:_,itemProp:"datePublished"},k),void 0!==P&&n.createElement(n.Fragment,null," \xb7 ",t(P))),n.createElement(b,{authors:L,assets:v}))})(),x&&n.createElement("meta",{itemProp:"image",content:r(x,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},f)),(T.length>0||N)&&n.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",{[h]:Z})},T.length>0&&n.createElement("div",{className:(0,a.Z)("col",{"col--9":!Z})},n.createElement(g.Z,{tags:T})),Z&&C&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:C})),!Z&&N&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(o.Z,{to:y.permalink,"aria-label":`Read more about ${w}`},n.createElement("b",null,n.createElement(c.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6146:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7294),a=r(4973),l=r(7462),c=r(6010);const o="iconEdit_mS5F",i=e=>{let{className:t,...r}=e;return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(o,t),"aria-hidden":"true"},r),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var s=r(941);function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.kM.common.editThisPage},n.createElement(i,null),n.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:(e,t,r)=>{r.d(t,{N:()=>m,Z:()=>u});var n=r(7462),a=r(7294),l=r(6010),c=r(4973),o=r(941);const i="anchorWithStickyNavbar_y2LR",s="anchorWithHideOnScrollNavbar_3ly5",m=function(e){let{...t}=e;return a.createElement("header",null,a.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},u=e=>{return"h1"===e?m:(t=e,function(e){let{id:r,...n}=e;const{navbar:{hideOnScroll:m}}=(0,o.LU)();return r?a.createElement(t,n,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",`anchor__${t}`,{[s]:m,[i]:!m}),id:r}),n.children,a.createElement("a",{className:"hash-link",href:`#${r}`,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(t,n)});var t}},2238:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7462),a=r(7294),l=r(9105),c=r(6742),o=r(6213),i=r(6159),s=r(6010),m=r(941);const u="details_h+cY";function d(e){let{...t}=e;return a.createElement(m.PO,(0,n.Z)({},t,{className:(0,s.Z)("alert alert--info",u,t.className)}))}const p={head:e=>{const t=a.Children.map(e.children,(e=>function(e){var t,r;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(r=e.props)&&r.originalType){const{mdxType:t,originalType:r,...n}=e.props;return a.createElement(e.props.originalType,n)}return e}(e)));return a.createElement(l.Z,e,t)},code:e=>{const{children:t}=e;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(o.Z,e):a.createElement("code",e)},a:e=>a.createElement(c.Z,e),pre:e=>{var t;const{children:r}=e;return(0,a.isValidElement)(r)&&(0,a.isValidElement)(null==r||null==(t=r.props)?void 0:t.children)?r.props.children:a.createElement(o.Z,(0,a.isValidElement)(r)?null==r?void 0:r.props:{...e})},details:e=>{const t=a.Children.toArray(e.children),r=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==r)));return a.createElement(d,(0,n.Z)({},e,{summary:r}),l)},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6")}},571:(e,t,r)=>{r.d(t,{r:()=>p,Z:()=>h});var n=r(7294),a=r(6010),l=r(941);function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function o(e){let{anchorTopOffset:t}=e;const r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=r.find((e=>c(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(n))?n:r[r.indexOf(n)-1]??null}return r[r.length-1]}function i(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.LU)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const s=function(e){const t=(0,n.useRef)(void 0),r=i();(0,n.useEffect)((()=>{const{linkClassName:n,linkActiveClassName:a}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=o({anchorTopOffset:r.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,r){if(r){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,r])},m="tableOfContents_vrFS",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function p(e){let{toc:t,isChild:r}=e;return t.length?n.createElement("ul",{className:r?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(p,{isChild:!0,toc:e.children}))))):null}const h=function(e){let{toc:t}=e;return s(d),n.createElement("div",{className:(0,a.Z)(m,"thin-scrollbar")},n.createElement(p,{toc:t}))}},7211:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010),l=r(6742);const c="tag_WK-t",o="tagRegular_LXbV",i="tagWithCount_S5Zl";const s=function(e){const{permalink:t,name:r,count:s}=e;return n.createElement(l.Z,{href:t,className:(0,a.Z)(c,{[o]:!s,[i]:s})},r,s&&n.createElement("span",null,s))}},7682:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010),l=r(4973),c=r(7211);const o="tags_NBRY",i="tag_F03v";function s(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,a.Z)(o,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:r}=e;return n.createElement("li",{key:r,className:i},n.createElement(c.Z,{name:t,permalink:r}))}))))}}}]);