"use strict";(self.webpackChunksource=self.webpackChunksource||[]).push([[209],{9158:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});s(6540);var a=s(4164),r=s(1312);const l=()=>(0,r.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=s(1213),c=s(7559),i=s(8027),o=s(6133),g=s(1107);const u={tag:"tag_Nnez"};var h=s(4848);function p(e){let{letterEntry:t}=e;return(0,h.jsxs)("article",{children:[(0,h.jsx)(g.A,{as:"h2",id:t.letter,children:t.letter}),(0,h.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,h.jsx)("li",{className:u.tag,children:(0,h.jsx)(o.A,{...e})},e.permalink)))}),(0,h.jsx)("hr",{})]})}function d(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,h.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,h.jsx)(p,{letterEntry:e},e.letter)))})}var j=s(1463);function x(e){let{tags:t,sidebar:s}=e;const r=l();return(0,h.jsxs)(n.e3,{className:(0,a.A)(c.G.wrapper.blogPages,c.G.page.blogTagsListPage),children:[(0,h.jsx)(n.be,{title:r}),(0,h.jsx)(j.A,{tag:"blog_tags_list"}),(0,h.jsxs)(i.A,{sidebar:s,children:[(0,h.jsx)(g.A,{as:"h1",children:r}),(0,h.jsx)(d,{tags:t})]})]})}}}]);