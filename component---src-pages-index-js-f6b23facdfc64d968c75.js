(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("Bl7J"),i=a("vrFN"),c=a("p3AD");t.default=function(e){var t=e.data,a=e.location,s=t.allMarkdownRemark.edges,d=t.site.siteMetadata.title,u=Object(r.useState)({query:"",filteredData:s}),m=u[0],p=u[1],f=m.filteredData;return n.a.createElement(o.a,{location:a,title:d},n.a.createElement(i.a,{title:"All posts"}),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement("input",{type:"text",id:"search",name:"Search Blogs",placeholder:"Search Blogs",autoFocus:!0,onChange:function(e){var t=e.target.value,a=s.filter((function(e){var a=e.node.frontmatter,r=a.title,n=a.tags;return r.toLowerCase().includes(t.toLowerCase())||n&&n.join("").toLowerCase().includes(t.toLowerCase())}));p({query:t,filteredData:a})},style:{width:"100%",padding:"8px 20px",borderRadius:"4px",boxSizing:"border-box",border:"1px solid #ccc"}})),f.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.a.createElement("article",{key:t.fields.slug},n.a.createElement("header",null,n.a.createElement("h3",{style:{marginBottom:Object(c.a)(1/4)}},n.a.createElement(l.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),n.a.createElement("small",null,t.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})))};var s="3785851088"}}]);
//# sourceMappingURL=component---src-pages-index-js-f6b23facdfc64d968c75.js.map