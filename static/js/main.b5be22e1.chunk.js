(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(58),l=n.n(i),r=n(5),c=navigator.language.includes("pl")?"pl":"en",s=Object(a.createContext)(c),m=function(e){var t=e.children,n=Object(a.useState)(c);return o.a.createElement(s.Provider,{value:n},t)},u=n(12),p=n(4),d=n(59),h=n(2);function b(){var e=Object(d.a)(["\n* {\n margin: 0;\n padding: 0;\n}\n\nbody {\n /* background: #2F3F52; */\n font-family: Nunito, Sans-Serif;\n color: white;\n font-size: 10px;\n height: 100vh;\n}\n\na {\n text-decoration: none;\n color: white;\n}\n\nul {\n list-style-type: none;\n}\n\nbutton {\n font-family: Nunito, Sans-Serif;\n background-color: transparent;\n color: white;\n border: none;\n cursor: pointer;\n}\n"]);return b=function(){return e},e}var g=Object(h.a)(b());function f(){var e=Object(p.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var w=n(6),y=h.b.div.withConfig({displayName:"Home__Container",componentId:"sc-1gmu7kl-0"})(["position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);"]),k=h.b.div.withConfig({displayName:"Home__Filler",componentId:"sc-1gmu7kl-1"})(["height:calc(100vh - 50px - 30px);"]),E=h.b.h1.withConfig({displayName:"Home__H1",componentId:"sc-1gmu7kl-2"})(["font-style:italic;font-size:2.5rem;"]),j=h.b.h2.withConfig({displayName:"Home__H2",componentId:"sc-1gmu7kl-3"})(["font-style:italic;font-size:1rem;"]),z=function(){var e=Object(a.useContext)(s),t=Object(r.a)(e,1)[0];return o.a.createElement("section",{className:"home"},o.a.createElement(y,null,o.a.createElement(E,null,"\u0141ukasz Walaszczyk"),o.a.createElement(j,null,w.home.title1[t]),o.a.createElement(j,null,w.home.title2[t])),o.a.createElement(k,null))},v=h.b.div.withConfig({displayName:"About__Container",componentId:"sc-1wo4hqh-0"})(["margin:3vw;"]),x=h.b.div.withConfig({displayName:"About__TextBlock",componentId:"sc-1wo4hqh-1"})(["margin:4vh 0;"]),I=h.b.h1.withConfig({displayName:"About__H1",componentId:"sc-1wo4hqh-2"})(["font-style:italic;font-size:1.2rem;"]),N=h.b.p.withConfig({displayName:"About__P",componentId:"sc-1wo4hqh-3"})(["font-style:italic;font-size:0.8rem;"]),C=function(){var e=Object(a.useContext)(s),t=Object(r.a)(e,1)[0];return o.a.createElement("section",{className:"about"},o.a.createElement(v,null,o.a.createElement(x,null,o.a.createElement(I,null,w.about.present.title[t]),o.a.createElement(N,null,w.about.present.text[t])),o.a.createElement(x,null,o.a.createElement(I,null,w.about.past.title[t]),o.a.createElement(N,null,w.about.past.text[t])),o.a.createElement(x,null,o.a.createElement(I,null,w.about.interests.title[t]),o.a.createElement(N,null,w.about.interests.text[t]))))},_=function(){var e=Object(a.useContext)(s),t=Object(r.a)(e,1)[0];return o.a.createElement("main",null,o.a.createElement("section",{className:"skills"},o.a.createElement("h1",null,w.categories.skills[t])))},O=function(){var e=Object(a.useContext)(s),t=Object(r.a)(e,1)[0];return o.a.createElement("main",null,o.a.createElement("section",{className:"projects"},o.a.createElement("h1",null,w.categories.projects[t])))},M=function(){var e=Object(a.useContext)(s),t=Object(r.a)(e,1)[0];return o.a.createElement("main",null,o.a.createElement("section",{className:"contact"},o.a.createElement("h1",null,w.categories.contact[t])))},S=n(65),B=(n(75),n(76),h.b.li.withConfig({displayName:"MenuItems__Li",componentId:"sc-3cglih-0"})(["text-align:center;"])),H=["about","skills","projects","contact"],q=function(e){var t=e.handleClick,n=e.className,i=Object(a.useContext)(s),l=Object(r.a)(i,1)[0],c=H.map((function(e,a){return o.a.createElement(B,{key:a,className:n},o.a.createElement(u.b,{to:"/".concat(e),exact:!0,onClick:t},w.categories[e][l]))}));return o.a.createElement("ul",null,c)},J=h.b.button.withConfig({displayName:"LangToggler__Button",componentId:"zvv85i-0"})(["letter-spacing:0.1rem;width:2rem;"]),A=function(e){var t=e.className,n=Object(a.useContext)(s),i=Object(r.a)(n,2),l=i[0],c=i[1];return o.a.createElement(J,{className:t,onClick:function(){c("en"===l?"pl":"en")}},"en"===l?"pl":"en")},T=h.b.header.withConfig({displayName:"HeaderMobile__Header",componentId:"iompqn-0"})(["position:fixed;width:100%;height:50px;"]),L=h.b.nav.withConfig({displayName:"HeaderMobile__Nav",componentId:"iompqn-1"})(["position:fixed;top:50px;right:25vw;transform:translate(50%,0);"]),D=h.b.h1.withConfig({displayName:"HeaderMobile__H1",componentId:"iompqn-2"})(["position:absolute;top:50%;transform:translate(0,-50%);color:white;font-size:1.3rem;font-style:italic;margin-left:2vw;padding:0;"]),F=h.b.button.withConfig({displayName:"HeaderMobile__MenuButton",componentId:"iompqn-3"})(["position:absolute;top:50%;right:25vw;transform:translate(50%,-50%);cursor:pointer;color:white;border:none;font-size:1.2rem;&:hover{text-decoration:underline;}"]),R=Object(h.b)(q).withConfig({displayName:"HeaderMobile__StyledMenuItems",componentId:"iompqn-4"})(["line-height:2.5rem;font-size:1rem;"]),W=Object(h.b)(A).withConfig({displayName:"HeaderMobile__StyledLangToggler",componentId:"iompqn-5"})(["position:absolute;top:50%;right:0.6rem;transform:translateY(-50%);font-size:1rem;"]),P=h.b.div.withConfig({displayName:"HeaderMobile__Div",componentId:"iompqn-6"})(["position:sticky;top:0;left:0;width:100vw;height:100vh;background-image:linear-gradient( rgba(0,0,0,0.75),rgba(0,0,0,0.75),transparent );z-index:0;"]),Z=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1];return o.a.createElement(T,{className:"mobile"},n&&o.a.createElement(P,{onClick:function(){i(!1)}}),"/"!==Object(p.f)().pathname&&o.a.createElement(u.b,{className:"logo",to:"/",exact:!0,onClick:function(){i(!1)}},o.a.createElement(D,null,"\u0141ukasz Walaszczyk")),o.a.createElement(F,{onClick:function(){i(!n)}},"menu"),n&&o.a.createElement(L,null,o.a.createElement(R,{handleClick:function(){i(!1)}})),o.a.createElement(W,null))},Y=function(){return o.a.createElement("header",{className:"desktop"},o.a.createElement(u.b,{className:"logo",to:"/",exact:!0},o.a.createElement("h1",null,"\u0141ukasz Walaszczyk")),o.a.createElement("nav",null,o.a.createElement(q,null),o.a.createElement(A,null)))},G=n(22),K=n(63),Q=n(21),U=h.b.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-1cj7rx7-0"})(["display:flex;justify-content:center;align-items:center;height:30px;text-align:center;& > *{margin:0 0.5rem;}p{font-size:0.75rem;}svg{font-size:1rem;}"]),V=function(){return o.a.createElement(U,null,o.a.createElement("p",null,"\xa9 \u0141ukasz Walaszczyk 2020"),o.a.createElement(G.a,{icon:K.a}),o.a.createElement(G.a,{icon:Q.a}),o.a.createElement(G.a,{icon:Q.b}))};var X=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1],l=function(){i(window.innerWidth)};return Object(a.useEffect)((function(){window&&l()}),[]),Object(a.useEffect)((function(){return window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[]),o.a.createElement(u.a,{basename:"/portfolio"},o.a.createElement(g,null),o.a.createElement(f,null),o.a.createElement(m,null,o.a.createElement(S.a,{style:{height:"calc(100vh - 50px)",width:"100vw",position:"absolute",top:50}},o.a.createElement("main",null,o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/",exact:!0,component:z}),o.a.createElement(p.a,{path:"/about",exact:!0,component:C}),o.a.createElement(p.a,{path:"/skills",exact:!0,component:_}),o.a.createElement(p.a,{path:"/projects",exact:!0,component:O}),o.a.createElement(p.a,{path:"/contact",exact:!0,component:M}))),o.a.createElement(V,null)),n<1024?o.a.createElement(Z,null):o.a.createElement(Y,null)))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(X,null)),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('{"categories":{"about":{"pl":"o mnie","en":"about"},"skills":{"pl":"umiej\u0119tno\u015bci","en":"skills"},"projects":{"pl":"projekty","en":"projects"},"contact":{"pl":"kontakt","en":"contact"}},"home":{"title1":{"pl":"junior web developer","en":"junior web developer"},"title2":{"pl":"programista JavaScript","en":"JavaScript programmer"}},"about":{"present":{"title":{"pl":"obecnie","en":"present"},"text":{"pl":"Jestem pocz\u0105tkuj\u0105cym web developerem, samoukiem, kt\xf3ry zdobywa praktyczn\u0105 wiedz\u0119 poprzez przekrojowe, produkcyjne projekty. Dzi\u0119ki uniwersalno\u015bci JavaScript\u2019u i nowym rozwi\u0105zaniom JAMstack jestem w stanie realizowa\u0107 projekty w zakresie front i back-endu. Moim stosem technologicznym jest MERN (MongoDB, Express.js, React.js, Node.js), ale ucz\u0119 si\u0119 tak\u017ce framework\u2019a Angular.","en":"I\u2019m a self-taught web developer who gains experience and practical knowledge by creating small-scale commercial projects. Thanks to the versatility of JavaScript and new JAMstack solutions I\u2019m able tackle front-end as well as back-end of a project. My technology stack is MERN (MongoDB, Express.js, React.js, Node.js), but I\u2019m also learning Angular framework."}},"past":{"title":{"pl":"kiedy\u015b","en":"past"},"text":{"pl":"Z wykszta\u0142cenia jestem mgr. in\u017c. budownictwa. Zanim zaj\u0105\u0142em si\u0119 programowaniem, zajmowa\u0142em si\u0119 projektowaniem konstrukcji stalowych tworz\u0105c ich modele w technologii BIM (Building Information Modeling). Dostrzegaj\u0105c potencja\u0142 drzemi\u0105cy w wirtualnych modelach tworzy\u0142em parametryczne komponenty dla powtarzalnych element\xf3w konstrukcji i automatyzowa\u0142em czynno\u015bci dzi\u0119ki makrom. To w\u0142a\u015bnie praca w BIM skierowa\u0142a moje zainteresowania w stron\u0119 programowania.","en":"By education I am a MSc in Civil Engineering. Before I went into programming I had been designing steel structures by creating their models in BIM technology (Building Information Modeling). Recognizing the potential of the virtual models I created parametric components for repetitive elements and automated processes with macros. It was the work in BIM that directed my interest toward programming."}},"interests":{"title":{"pl":"moje pasje","en":"my interests"},"text":{"pl":"Lubi\u0119 zdobywa\u0107 nowe umiej\u0119tno\u015bci i korzysta\u0107 z nowych mo\u017cliwo\u015bci jakie stwarzaj\u0105 - dlatego zdecydowa\u0142em si\u0119 zwi\u0105za\u0107 swoj\u0105 przysz\u0142o\u015b\u0107 z IT. Opr\xf3cz programowania, podobnie jest z nauk\u0105 j\u0119zyk\xf3w i poznawaniem \u015bwiata - moimi hobby. Poni\u017cej zamieszczam kilka fotografii z moich ulubionych podr\xf3\u017cy.","en":"I like learining new skills and benefit from the opportunities that they create - that\u2019s why I decided to pursue a career in IT. Besides programming, it\u2019s similar with learning foreign languages and exploring the world - my hobbies. Below I publish a few photographs from my favourite journeys."}}}}')},66:function(e,t,n){e.exports=n(108)},76:function(e,t,n){}},[[66,1,2]]]);
//# sourceMappingURL=main.b5be22e1.chunk.js.map