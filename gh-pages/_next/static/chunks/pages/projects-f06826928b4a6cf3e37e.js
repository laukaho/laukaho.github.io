(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4617:function(e,s,a){"use strict";a.d(s,{Z:function(){return r}});var t=a(5893),n=(a(1639),a(7013)),c=a.n(n);a(1824);function r(e){return(0,t.jsxs)("a",{className:"".concat(c().card," ").concat("empty"==e.className?c().empty:""),children:[(0,t.jsx)("div",{className:c().image,style:{backgroundImage:e.image}}),(0,t.jsxs)("div",{className:c().detail,children:[(0,t.jsx)("div",{className:"".concat(c().title," font-md"),children:e.title}),(0,t.jsx)("div",{className:c().description,children:e.description}),(0,t.jsx)("div",{className:c().category,children:e.category})]})]})}},1099:function(e,s,a){"use strict";a.d(s,{Z:function(){return r}});var t=a(5893),n=a(7625),c=a(1417);a(1664);function r(){return(0,t.jsx)("footer",{className:"footer",children:(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"social",children:[(0,t.jsx)("a",{href:"https://github.com/laukaho",target:"_blank",className:"btn_social",children:(0,t.jsx)(n.G,{className:"icon",icon:c.zhw})}),(0,t.jsx)("a",{href:"https://twitter.com/kaholau_dev",target:"_blank",className:"btn_social",children:(0,t.jsx)(n.G,{className:"icon",icon:c.mdU})}),(0,t.jsx)("a",{href:"https://itch.io/profile/laukaho",target:"_blank",className:"btn_social",children:(0,t.jsx)(n.G,{className:"icon",icon:c.ydb})}),(0,t.jsx)("a",{href:"https://www.patreon.com/kaholau",target:"_blank",className:"btn_social",children:(0,t.jsx)(n.G,{className:"icon",icon:c.MkT})})]}),(0,t.jsx)("div",{className:"copyright",children:"Copyright \xa9 2021 All rights reserved"})]})})}},6298:function(e,s,a){"use strict";var t=a(5893),n=a(4699),c=a(1436),r=a(7625),i=a(1664),l=a(1163),o=a(7294),d=a(682),u=a(1522);s.Z=function(){var e=(0,l.useRouter)(),s=(0,u.useAppContext)(),a=s.isDark,h=s.setIsDark,m=(0,d.Z)(["isDark"]),j=(0,n.Z)(m,3),f=j[0],p=j[1],x=(j[2],(0,o.useState)(!1)),v=x[0],N=x[1];function b(){window.scrollY>this.prev&&window.scrollY>60?!v&&N(!0):v&&N(!1),this.prev=window.scrollY}(0,o.useEffect)((function(){return window.addEventListener("scroll",b),p("isDark",a),function(){window.removeEventListener("scroll",b)}})),(0,o.useEffect)((function(){h("true"==f.isDark)}),[]);var g=(0,o.useState)(!1),_=g[0],y=g[1];return(0,t.jsx)("div",{className:"header ".concat(v&&!_?"":"is-active"),children:(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsx)("div",{className:"left",children:(0,t.jsx)(i.default,{href:"/",children:(0,t.jsxs)("a",{className:"logo",children:[(0,t.jsx)("img",{src:"./images/logo.png"}),(0,t.jsx)("span",{children:"KA HO"})]})})}),(0,t.jsxs)("div",{className:"right",children:[(0,t.jsx)("button",{className:"hamburger hamburger--spin d-lg-none ".concat(_?"is-active":""),type:"button",onClick:function(e){e.preventDefault(),y(!_)},children:(0,t.jsx)("span",{className:"hamburger-box",children:(0,t.jsx)("span",{className:"hamburger-inner"})})}),(0,t.jsx)("div",{onClick:function(e){e.preventDefault(),y(!_)},className:"overlay ".concat(_?"active":"")}),(0,t.jsx)("div",{className:"menu_container",children:(0,t.jsxs)("ul",{className:"menu ".concat(_?"active":""),children:[(0,t.jsx)("li",{className:"/projects"==e.pathname?"active":"",children:(0,t.jsx)(i.default,{href:"/projects",children:(0,t.jsxs)("a",{className:"btn_item ".concat("/projects"==e.pathname?"active":""),children:[(0,t.jsx)(r.G,{className:"icon",icon:c.dT$}),(0,t.jsx)("span",{className:"label",children:"Projects"})]})})}),(0,t.jsx)("li",{className:"/assets"==e.pathname?"active":"",children:(0,t.jsx)(i.default,{href:"/assets",children:(0,t.jsxs)("a",{className:"btn_item ".concat("/assets"==e.pathname?"active":""),children:[(0,t.jsx)(r.G,{className:"icon",icon:c.hVM}),(0,t.jsx)("span",{className:"label",children:"Assets"})]})})}),(0,t.jsx)("li",{className:"/tools"==e.pathname?"active":"",children:(0,t.jsx)(i.default,{href:"/tools",children:(0,t.jsxs)("a",{className:"btn_item ".concat("/tools"==e.pathname?"active":""),children:[(0,t.jsx)(r.G,{className:"icon",icon:c.b7W}),(0,t.jsx)("span",{className:"label",children:"Tools"})]})})}),(0,t.jsx)("li",{className:"/labs"==e.pathname?"active":"",children:(0,t.jsx)(i.default,{href:"/labs",children:(0,t.jsxs)("a",{className:"btn_item ".concat("/labs"==e.pathname?"active":""),children:[(0,t.jsx)(r.G,{className:"icon",icon:c.jfd}),(0,t.jsx)("span",{className:"label",children:"Labs"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{onClick:function(e){e.preventDefault(),h(!a)},className:"btn_dark ".concat(a?"active":""),type:"button",children:(0,t.jsx)(r.G,{className:"icon",icon:c.DBF})})})]})})]})]})})}},1824:function(e,s,a){"use strict";a.d(s,{W:function(){return t},$:function(){return n}});var t={body:"#FFF",text:"#000",toggleBorder:"#FFF",background:"#fff"},n={body:"#363537",text:"#FFF",toggleBorder:"#6B8096",background:"#18191a"}},1639:function(e,s,a){"use strict";a.d(s,{n:function(){return c}});var t=a(2465);function n(){var e=(0,t.Z)(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n    transition: all 0.1s ease-in-out;\n  }\n  "]);return n=function(){return e},e}var c=(0,a(8117).vJ)(n(),(function(e){return e.theme.body}),(function(e){return e.theme.text}))},1522:function(e,s,a){"use strict";a.r(s),a.d(s,{useAppContext:function(){return m}});var t=a(5893),n=a(6156),c=(a(7297),a(7294)),r=a(8117),i=a(1639),l=a(1824),o=a(4930);function d(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?d(Object(a),!0).forEach((function(s){(0,n.Z)(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}var h=(0,c.createContext)();function m(){return(0,c.useContext)(h)}s.default=function(e){var s=e.Component,a=e.pageProps,n=(0,c.useState)(!0),d=n[0],m=n[1];return(0,t.jsx)(o.ZP,{children:(0,t.jsx)(h.Provider,{value:{isDark:d,setIsDark:m},children:(0,t.jsxs)(r.f6,{theme:d?l.$:l.W,children:[(0,t.jsx)(i.n,{}),(0,t.jsx)(s,u({},a))]})})})}},8295:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSG:function(){return l},default:function(){return o}});var t=a(5893),n=(a(7294),a(9008)),c=(a(5675),a(6298)),r=a(1099),i=a(4617),l=!0;function o(e){for(var s=e.posts,a=[],l=0;l<4-s.length%4;l++)a.push((0,t.jsx)(i.Z,{className:"empty"},l));return(0,t.jsxs)("div",{children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:"Ka Ho Lau"}),(0,t.jsx)("meta",{name:"description",content:"KaHoLau, games, develoepr, engineer, computer graphic, app, web, 3d, 2d"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(c.Z,{}),(0,t.jsxs)("main",{className:"main",children:[(0,t.jsx)("div",{className:"placeholder"}),(0,t.jsx)("div",{className:"section",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsx)("h1",{className:"font-lg vert-margin-top",children:"Projects"}),(0,t.jsx)("h2",{className:"grey",children:"latest project highlights"}),(0,t.jsx)("div",{className:"push"}),(0,t.jsxs)("div",{className:"cards",children:[s.map((function(e){return(0,t.jsx)(i.Z,{title:"Test",image:"url(/images/test.png)",category:"App",description:"A point-and-click mystery set in the bible belt of Sweden"},e.filePath)})),a]})]})})}),(0,t.jsx)("div",{className:"push"})]}),(0,t.jsx)(r.Z,{})]})}},8947:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return a(8295)}])},7013:function(e){e.exports={card:"Card_card__2cXDm",title:"Card_title__1A-34",description:"Card_description__13FHK",category:"Card_category__499Eu",image:"Card_image__3Ba5_",empty:"Card_empty__1sNkK"}},7297:function(){}},function(e){e.O(0,[774,336,523,112,351,481,766],(function(){return s=8947,e(e.s=s);var s}));var s=e.O();_N_E=s}]);