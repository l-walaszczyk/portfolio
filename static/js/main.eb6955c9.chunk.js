(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(58),r=n.n(i),l=n(5),c=n(2),s=navigator.language.includes("pl")?"pl":"en",m=Object(a.createContext)(s),p=function(e){var t=e.children,n=Object(a.useState)(s);return o.a.createElement(m.Provider,{value:n},t)},u=n(12),d=n(4),h=n(59);function g(){var e=Object(h.a)(["\n* {\n margin: 0;\n padding: 0;\n}\n\n:root {\n font-size: 16px;\n}\n\nbody {\n font-family: Nunito, Sans-Serif;\n color: white;\n /* height: 100vh; */\n}\n\n@media (min-width: 360px) and (min-height: 360px) {\n :root {\n  font-size: 18px;\n }\n}\n\na {\n text-decoration: none;\n color: white;\n}\n\nul {\n list-style-type: none;\n}\n\nbutton {\n font-family: Nunito, Sans-Serif;\n background-color: transparent;\n color: white;\n border: none;\n cursor: pointer;\n}\n"]);return g=function(){return e},e}var f=Object(c.a)(g());function w(){var e=Object(d.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var b=n(6),y=c.b.div.withConfig({displayName:"Home__Container",componentId:"sc-1gmu7kl-0"})(["position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);font-style:italic;h1{width:15rem;font-size:2.5rem;line-height:2.5rem;margin-bottom:0.5rem;}h2{font-weight:300;font-size:1rem;}@media (min-width:1024px){top:45%;left:40%;h1{width:15rem;font-size:3rem;line-height:3rem;}h2{font-weight:300;font-size:1.1rem;}}@media (min-width:1920px){h1{width:25rem;font-size:4rem;line-height:4rem;}h2{font-weight:300;font-size:1.25rem;}}"]),E=function(){var e=Object(a.useContext)(m),t=Object(l.a)(e,1)[0];return o.a.createElement("section",{className:"home"},o.a.createElement(y,null,o.a.createElement("h1",null,"\u0141ukasz Walaszczyk"),o.a.createElement("h2",null,b.home.title1[t]),o.a.createElement("h2",null,b.home.title2[t])))},z=n(63),j=n.n(z),k=n(64),v=n.n(k),x=c.b.div.withConfig({displayName:"About__Container",componentId:"sc-1wo4hqh-0"})(["padding:0 4vw;"]),I=c.b.div.withConfig({displayName:"About__TextBlock",componentId:"sc-1wo4hqh-1"})(["margin:4vh 0;font-style:italic;h1{font-weight:300;font-size:1.1rem;margin-bottom:0.5rem;}p{font-weight:300;font-size:0.8rem;text-align:justify;}"]),_=c.b.div.withConfig({displayName:"About__ImageContainer",componentId:"sc-1wo4hqh-2"})(["float:right;margin-left:0.5rem;margin-bottom:-0.2rem;width:7rem;img{width:100%;overflow:hidden;}"]),N=function(){var e=Object(a.useContext)(m),t=Object(l.a)(e,1)[0];return o.a.createElement("section",{className:"about"},o.a.createElement(x,null,o.a.createElement(I,null,o.a.createElement("h1",null,b.about.present.title[t]),o.a.createElement(_,null,o.a.createElement("img",{src:j.a,alt:""})),o.a.createElement("p",null,b.about.present.text[t])),o.a.createElement(I,null,o.a.createElement("h1",null,b.about.past.title[t]),o.a.createElement(_,null,o.a.createElement("img",{src:v.a,alt:""})),o.a.createElement("p",null,b.about.past.text[t])),o.a.createElement(I,null,o.a.createElement("h1",null,b.about.interests.title[t]),o.a.createElement("p",null,b.about.interests.text[t]))))},C=function(){var e=Object(a.useContext)(m),t=Object(l.a)(e,1)[0];return o.a.createElement("main",null,o.a.createElement("section",{className:"skills"},o.a.createElement("h1",null,b.categories.skills[t])))},O=function(){var e=Object(a.useContext)(m),t=Object(l.a)(e,1)[0];return o.a.createElement("main",null,o.a.createElement("section",{className:"projects"},o.a.createElement("h1",null,b.categories.projects[t])))},H=function(){var e=Object(a.useContext)(m),t=Object(l.a)(e,1)[0];return o.a.createElement("main",null,o.a.createElement("section",{className:"contact"},o.a.createElement("h1",null,b.categories.contact[t])))},M=n(67),S=(n(77),n(78),c.b.li.withConfig({displayName:"MenuItems__Li",componentId:"sc-3cglih-0"})(["text-align:center;a{&:hover{text-decoration:underline;}&.active{text-decoration:underline;}}"])),B=["about","skills","projects","contact"],q=function(e){var t=e.handleClick,n=e.className,i=Object(a.useContext)(m),r=Object(l.a)(i,1)[0];return B.map((function(e,a){return o.a.createElement(S,{key:a,className:n},o.a.createElement(u.b,{to:"/".concat(e),exact:!0,onClick:t},b.categories[e][r]))}))},D=c.b.button.withConfig({displayName:"LangToggler__Button",componentId:"zvv85i-0"})(["letter-spacing:0.1rem;width:2rem;"]),J=function(e){var t=e.className,n=Object(a.useContext)(m),i=Object(l.a)(n,2),r=i[0],c=i[1];return o.a.createElement(D,{className:t,onClick:function(){c("en"===r?"pl":"en")}},"en"===r?"pl":"en")},T={headerHeight:75,footerHeight:50},A=c.b.header.withConfig({displayName:"HeaderMobile__Header",componentId:"iompqn-0"})(["position:fixed;width:100%;height:","px;"],T.headerHeight),L=c.b.h1.withConfig({displayName:"HeaderMobile__H1",componentId:"iompqn-1"})(["position:absolute;top:50%;left:1.2rem;width:50vw;line-height:1.1rem;transform:translate(0,-50%);color:white;font-size:1.35rem;font-style:italic;padding:0;"]),W=c.b.button.withConfig({displayName:"HeaderMobile__MenuButton",componentId:"iompqn-2"})(["position:absolute;top:50%;right:7rem;transform:translate(50%,-50%);cursor:pointer;color:white;border:none;font-size:1.4rem;&:hover{text-decoration:underline;}"]),R=c.b.nav.withConfig({displayName:"HeaderMobile__Nav",componentId:"iompqn-3"})(["position:fixed;top:","px;right:7rem;transform:translate(50%,0);"],T.headerHeight),F=Object(c.b)(q).withConfig({displayName:"HeaderMobile__StyledMenuItems",componentId:"iompqn-4"})(["height:3rem;font-size:1.2rem;"]),P=Object(c.b)(J).withConfig({displayName:"HeaderMobile__StyledLangToggler",componentId:"iompqn-5"})(["position:absolute;top:50%;right:1.2rem;transform:translateY(-50%);font-size:1.2rem;"]),Y=c.b.div.withConfig({displayName:"HeaderMobile__Div",componentId:"iompqn-6"})(["position:sticky;top:0;left:0;width:100vw;height:100vh;background-image:linear-gradient( rgba(0,0,0,0.75),rgba(0,0,0,0.75),transparent );z-index:0;"]),Z=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1];return o.a.createElement(A,{className:"mobile"},n&&o.a.createElement(Y,null),"/"!==Object(d.f)().pathname&&o.a.createElement(u.b,{className:"logo",to:"/",exact:!0,onClick:function(){i(!1)}},o.a.createElement(L,null,"\u0141ukasz Walaszczyk")),o.a.createElement(W,{onClick:function(){i(!n)}},"menu"),n&&o.a.createElement(R,null,o.a.createElement("ul",null,o.a.createElement(F,{handleClick:function(){i(!1)}}))),o.a.createElement(P,null))},G=c.b.header.withConfig({displayName:"HeaderDesktop__Header",componentId:"sc-1wa56nv-0"})(["position:fixed;width:100%;height:","px;"],T.headerHeight),K=c.b.h1.withConfig({displayName:"HeaderDesktop__H1",componentId:"sc-1wa56nv-1"})(["position:absolute;top:50%;left:2rem;transform:translate(0,-50%);color:white;font-size:1.5rem;font-style:italic;padding:0;"]),Q=c.b.nav.withConfig({displayName:"HeaderDesktop__Nav",componentId:"sc-1wa56nv-2"})(["position:absolute;top:50%;left:40%;width:50%;transform:translate(0,-50%);ul{width:100%;display:flex;flex-direction:row;}@media (min-width:1280px){left:45%;width:45%;}@media (min-width:1920px){left:50%;width:40%;}"]),U=Object(c.b)(q).withConfig({displayName:"HeaderDesktop__StyledMenuItems",componentId:"sc-1wa56nv-3"})(["width:25%;font-size:1.2rem;"]),V=Object(c.b)(J).withConfig({displayName:"HeaderDesktop__StyledLangToggler",componentId:"sc-1wa56nv-4"})(["position:absolute;top:50%;right:2rem;transform:translateY(-50%);font-size:1.2rem;"]),X=function(){return o.a.createElement(G,{className:"desktop"},"/"!==Object(d.f)().pathname&&o.a.createElement(u.b,{className:"logo",to:"/",exact:!0},o.a.createElement(K,null,"\u0141ukasz Walaszczyk")),o.a.createElement(Q,null,o.a.createElement("ul",null,o.a.createElement(U,null))),o.a.createElement(V,null))},$=n(22),ee=n(65),te=n(21),ne=c.b.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-1cj7rx7-0"})(["display:flex;justify-content:center;align-items:center;height:","px;text-align:center;& > *{margin:0 0.5rem;}p{font-size:0.8rem;}svg{font-size:1.2rem;}"],T.footerHeight),ae=function(){return o.a.createElement(ne,null,o.a.createElement("p",null,"\xa9 \u0141ukasz Walaszczyk 2020"),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:l.walaszczyk@interia.pl"},o.a.createElement($.a,{icon:ee.a})),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/l-walaszczyk"},o.a.createElement($.a,{icon:te.b})),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/l-walaszczyk"},o.a.createElement($.a,{icon:te.a})))},oe=c.b.main.withConfig({displayName:"App__Main",componentId:"sc-18clqhm-0"})(["min-height:","px;"],(function(e){return e.height-T.headerHeight-T.footerHeight}));var ie=function(){var e=Object(a.useState)(window.innerWidth),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(window.innerHeight),c=Object(l.a)(r,2),s=c[0],m=c[1],h=function(){i(window.innerWidth),m(window.innerHeight)};return Object(a.useEffect)((function(){window&&h()}),[]),Object(a.useEffect)((function(){return window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}}),[]),o.a.createElement(u.a,{basename:"/"},o.a.createElement(f,null),o.a.createElement(w,null),o.a.createElement(p,null,o.a.createElement(M.a,{style:{height:s-T.headerHeight,width:"100vw",position:"absolute",top:T.headerHeight}},o.a.createElement(oe,{height:s},o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(E,Object.assign({},e,{height:s}))}}),o.a.createElement(d.a,{path:"/about",exact:!0,render:function(e){return o.a.createElement(N,Object.assign({},e,{height:s}))}}),o.a.createElement(d.a,{path:"/skills",exact:!0,component:C}),o.a.createElement(d.a,{path:"/projects",exact:!0,component:O}),o.a.createElement(d.a,{path:"/contact",exact:!0,component:H}))),o.a.createElement(ae,null)),void 0===n?o.a.createElement("header",null):n<1024?o.a.createElement(Z,null):o.a.createElement(X,null)))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ie,null)),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('{"categories":{"about":{"pl":"o mnie","en":"about"},"skills":{"pl":"umiej\u0119tno\u015bci","en":"skills"},"projects":{"pl":"projekty","en":"projects"},"contact":{"pl":"kontakt","en":"contact"}},"home":{"title1":{"pl":"junior web developer","en":"junior web developer"},"title2":{"pl":"programista JavaScript","en":"JavaScript programmer"}},"about":{"present":{"title":{"pl":"obecnie","en":"present"},"text":{"pl":"Jestem pocz\u0105tkuj\u0105cym web developerem, samoukiem, kt\xf3ry zdobywa praktyczn\u0105 wiedz\u0119 poprzez przekrojowe, produkcyjne projekty. Dzi\u0119ki uniwersalno\u015bci JavaScript\u2019u i nowym rozwi\u0105zaniom JAMstack jestem w stanie realizowa\u0107 projekty w zakresie front i back-endu. Moim stosem technologicznym jest MERN (MongoDB, Express.js, React.js, Node.js), ale ucz\u0119 si\u0119 tak\u017ce framework\u2019a Angular.","en":"I\u2019m a self-taught web developer who gains experience and practical knowledge by creating small-scale commercial projects. Thanks to the versatility of JavaScript and new JAMstack solutions I\u2019m able tackle front-end as well as back-end of a project. My technology stack is MERN (MongoDB, Express.js, React.js, Node.js), but I\u2019m also learning Angular framework."}},"past":{"title":{"pl":"kiedy\u015b","en":"past"},"text":{"pl":"Z wykszta\u0142cenia jestem mgr. in\u017c. budownictwa. Zanim zaj\u0105\u0142em si\u0119 programowaniem, zajmowa\u0142em si\u0119 projektowaniem konstrukcji stalowych tworz\u0105c ich modele w technologii BIM (Building Information Modeling). Dostrzegaj\u0105c potencja\u0142 drzemi\u0105cy w wirtualnych modelach tworzy\u0142em parametryczne komponenty dla powtarzalnych element\xf3w konstrukcji i automatyzowa\u0142em czynno\u015bci dzi\u0119ki makrom. To w\u0142a\u015bnie praca w BIM skierowa\u0142a moje zainteresowania w stron\u0119 programowania.","en":"By education I am a MSc in Civil Engineering. Before I went into programming I had been designing steel structures by creating their models in BIM technology (Building Information Modeling). Recognizing the potential of the virtual models I created parametric components for repetitive elements and automated processes with macros. It was the work in BIM that directed my interest toward programming."}},"interests":{"title":{"pl":"moje pasje","en":"my interests"},"text":{"pl":"Lubi\u0119 zdobywa\u0107 nowe umiej\u0119tno\u015bci i korzysta\u0107 z nowych mo\u017cliwo\u015bci jakie stwarzaj\u0105 - dlatego zdecydowa\u0142em si\u0119 zwi\u0105za\u0107 swoj\u0105 przysz\u0142o\u015b\u0107 z IT. Opr\xf3cz programowania, podobnie jest z nauk\u0105 j\u0119zyk\xf3w i poznawaniem \u015bwiata - moimi hobby. Poni\u017cej zamieszczam kilka fotografii z moich ulubionych podr\xf3\u017cy.","en":"I like learining new skills and benefit from the opportunities that they create - that\u2019s why I decided to pursue a career in IT. Besides programming, it\u2019s similar with learning foreign languages and exploring the world - my hobbies. Below I publish a few photographs from my favourite journeys."}}}}')},63:function(e,t,n){e.exports=n.p+"static/media/present.eec53984.jpg"},64:function(e,t,n){e.exports=n.p+"static/media/past.50f57426.jpg"},68:function(e,t,n){e.exports=n(110)},78:function(e,t,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.eb6955c9.chunk.js.map