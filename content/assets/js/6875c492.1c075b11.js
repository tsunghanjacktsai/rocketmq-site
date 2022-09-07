"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8610],{39058:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(67294),r=a(86010),n=a(33369),s=a(87524),o=a(39960),i=a(95999);const m="sidebar_re4s",c="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",g="sidebarItem__DBe",d="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function h(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(m,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:g},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title)))))))}var b=a(13102);function E(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return l.createElement(b.Zo,{component:E,props:e})}function v(e){let{sidebar:t}=e;const a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(f,{sidebar:t}):l.createElement(h,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return l.createElement(n.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},99703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),r=a(95999),n=a(32244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},79667:(e,t,a)=>{a.d(t,{Z:()=>Z});var l=a(67294),r=a(86010),n=a(95999),s=a(39960),o=a(44996),i=a(88824),m=a(18780),c=a(40076),u=a(66114),g=a(71526);function d(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function p(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s,email:o}=t,i=n||o&&`mailto:${o}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(d,{href:i,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(d,{href:i,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const h="authorCol_sTYa",b="imageOnlyAuthorRow_vA2J",E="imageOnlyAuthorCol_kG3X";function f(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?b:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?E:h),key:t},l.createElement(p,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const v="blogPostTitle_Ikge",N="blogPostData_SAv4",_="blogPostDetailsFull_u0Nl";function Z(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.C)(),{children:d,frontMatter:p,assets:h,metadata:b,truncated:E,isBlogPostPage:Z=!1}=e,{date:k,formattedDate:P,permalink:w,tags:T,readingTime:I,title:y,editUrl:A,authors:L}=b,x=h.image??p.image,M=!Z&&E,F=T.length>0,R=Z?"h1":"h2";return l.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(R,{className:v,itemProp:"headline"},Z?y:l.createElement(s.Z,{itemProp:"url",to:w},y)),l.createElement("div",{className:(0,r.Z)(N,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",t(I))),l.createElement(f,{authors:L,assets:h})),x&&l.createElement("meta",{itemProp:"image",content:a(x,{absolute:!0})}),l.createElement("div",{id:Z?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,d)),(F||E)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",Z&&_)},F&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":M})},l.createElement(g.Z,{tags:T})),Z&&A&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.Z,{editUrl:A})),M&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":F})},l.createElement(s.Z,{to:b.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:y})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},41714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(67294),r=a(86010),n=a(95999),s=a(88824),o=a(10833),i=a(35281),m=a(39960),c=a(39058),u=a(79667),g=a(99703),d=a(90197);function p(e){let{tag:t,items:a,sidebar:p,listMetadata:h}=e;const b=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),E=(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(t.count),tagName:t.label});return l.createElement(o.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},l.createElement(o.d,{title:E}),l.createElement(d.Z,{tag:"blog_tags_posts"}),l.createElement(c.Z,{sidebar:p},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(m.Z,{href:t.allTagsPath},l.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(u.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(g.Z,{metadata:h})))}},88824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(67294),r=a(52263);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);