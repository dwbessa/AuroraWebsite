(function(){"use strict";var a={2203:function(a,e,n){var o=n(5130),t=n(6768);const r={class:"app"},s={class:"main-content"};function i(a,e,n,o,i,c){const l=(0,t.g2)("NavBar"),u=(0,t.g2)("AboutSection"),d=(0,t.g2)("LocationSection"),m=(0,t.g2)("MenuSection"),p=(0,t.g2)("ContactSection"),f=(0,t.g2)("FooterSection");return(0,t.uX)(),(0,t.CE)("div",r,[(0,t.bF)(l,{onToggleMenu:c.toggleMenu},null,8,["onToggleMenu"]),(0,t.Lk)("div",s,[(0,t.bF)(u),(0,t.bF)(d)]),(0,t.bF)(m,{"is-open":i.isMenuOpen,onClose:c.closeMenu},null,8,["is-open","onClose"]),(0,t.bF)(p),(0,t.bF)(f)])}var c=n(4232),l=n.p+"img/aurora_logo.a019345f.png";const u={class:"navbar"},d={class:"menu-container"};function m(a,e,n,r,s,i){return(0,t.uX)(),(0,t.CE)("nav",u,[e[4]||(e[4]=(0,t.Lk)("div",{class:"logo-container"},[(0,t.Lk)("img",{src:l,alt:"Aurora Logo"}),(0,t.Lk)("span",{class:"brand-name"},"Aurora Gourmet")],-1)),(0,t.Lk)("div",d,[(0,t.Lk)("button",{class:"hamburger-button",onClick:e[0]||(e[0]=(...a)=>i.toggleNav&&i.toggleNav(...a))},e[3]||(e[3]=[(0,t.Lk)("span",{class:"hamburger-icon"},"☰",-1)])),(0,t.Lk)("div",{class:(0,c.C4)(["nav-links",{"nav-active":s.isNavOpen}])},[(0,t.Lk)("a",{href:"#",onClick:e[1]||(e[1]=(0,o.D$)((e=>{a.$emit("toggle-menu"),i.toggleNav()}),["prevent"]))},"Menu"),(0,t.Lk)("a",{href:"#contato",onClick:e[2]||(e[2]=(...a)=>i.toggleNav&&i.toggleNav(...a))},"Contato")],2)])])}var p={name:"NavBar",data(){return{isNavOpen:!1}},methods:{toggleNav(){this.isNavOpen=!this.isNavOpen}}},f=n(1241);const v=(0,f.A)(p,[["render",m],["__scopeId","data-v-1b34208e"]]);var g=v;const b={id:"about",class:"about-section"};function k(a,e,n,o,r,s){return(0,t.uX)(),(0,t.CE)("section",b,e[0]||(e[0]=[(0,t.Lk)("div",{class:"container"},[(0,t.Lk)("h2",null,"🍽️ Sobre o Restaurante"),(0,t.Lk)("p",{class:"description"},[(0,t.eW)(" Fundado em 2016 e localizado no coração de São Gonçalo, o Aurora Gourmet se propõe a servir uma comida de qualidade aliado com um atendimento de excelência, se tornando assim um dos melhores restaurantes da região."),(0,t.Lk)("br"),(0,t.eW)(" Nestes quase 10 anos, Renato e Tânia construíram um pilar de atendimento baseado no bem-estar do cliente, ofertando uma diversidade grande de pratos que agrada a todos os gostos e desejos, de segunda a sábado. "),(0,t.Lk)("br"),(0,t.eW)(" São mais de 30 opções de pratos quentes e 15 opções de saladas, além de opções veganas para dar mais acessibilidade para todos os tipos de pessoas e ideais."),(0,t.Lk)("br"),(0,t.eW)(" Você está convidado a se juntar a nós e fazer parte da história que construímos juntos."),(0,t.Lk)("br"),(0,t.Lk)("b",null,"Venha pro Aurora!")])],-1)]))}var L={name:"AboutSection"};const h=(0,f.A)(L,[["render",k],["__scopeId","data-v-0c518fbb"]]);var C=h;const S={id:"location",class:"location-section"};function w(a,e,n,o,r,s){return(0,t.uX)(),(0,t.CE)("section",S,e[0]||(e[0]=[(0,t.Lk)("div",{class:"container"},[(0,t.Lk)("h2",null,"📍 Localização"),(0,t.Lk)("div",{class:"map-container"},[(0,t.Lk)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.4544571062565!2d-43.04517889999999!3d-22.82267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999af138e018c7%3A0xb9c83492dad3af5f!2sAurora%20Gourmet!5e0!3m2!1spt-BR!2sbr!4v1739651991344!5m2!1spt-BR!2sbr",width:"100%",height:"300",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})])],-1)]))}var y={name:"LocationSection"};const D=(0,f.A)(y,[["render",w],["__scopeId","data-v-183f487e"]]);var O=D;const _={class:"footer"};function A(a,e,n,o,r,s){return(0,t.uX)(),(0,t.CE)("footer",_,e[0]||(e[0]=[(0,t.Fv)('<div class="contact-links" data-v-4f7322ca><a href="tel:+5521970084783" class="contact-item" data-v-4f7322ca><span class="icon" data-v-4f7322ca><i class="fas fa-phone icon" data-v-4f7322ca></i></span><span class="text" data-v-4f7322ca>Contato</span></a><a href="https://instagram.com/gourmetaurora" target="_blank" class="contact-item" data-v-4f7322ca><span class="icon" data-v-4f7322ca><i class="fab fa-instagram" data-v-4f7322ca></i><br data-v-4f7322ca></span><span data-v-4f7322ca>Instagram</span></a><a href="mailto:auroragourmet128@gmail.com" class="contact-item" data-v-4f7322ca><span class="icon" data-v-4f7322ca><i class="fas fa-envelope icon" data-v-4f7322ca></i></span><span data-v-4f7322ca>E-mail</span></a></div>',1)]))}var M={name:"FooterSection"};const F=(0,f.A)(M,[["render",A],["__scopeId","data-v-4f7322ca"]]);var N=F;const E={id:"contato",class:"contato-section"},x={class:"container"},W={class:"form-group"},j={class:"form-group"},q={class:"form-group"};function I(a,e,n,r,s,i){return(0,t.uX)(),(0,t.CE)("section",E,[(0,t.Lk)("div",x,[e[8]||(e[8]=(0,t.Lk)("h2",null,"📞 Contato",-1)),(0,t.Lk)("form",{class:"contact-form",onSubmit:e[3]||(e[3]=(0,o.D$)(((...a)=>i.submitForm&&i.submitForm(...a)),["prevent"]))},[(0,t.Lk)("div",W,[e[4]||(e[4]=(0,t.Lk)("label",{for:"name"},"Nome",-1)),(0,t.bo)((0,t.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=a=>s.formData.name=a),required:"",placeholder:"Insira seu nome"},null,512),[[o.Jo,s.formData.name]])]),(0,t.Lk)("div",j,[e[5]||(e[5]=(0,t.Lk)("label",{for:"email"},"E-mail",-1)),(0,t.bo)((0,t.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=a=>s.formData.email=a),required:"",placeholder:"seu@email.com"},null,512),[[o.Jo,s.formData.email]])]),(0,t.Lk)("div",q,[e[6]||(e[6]=(0,t.Lk)("label",{for:"message"},"Mensagem",-1)),(0,t.bo)((0,t.Lk)("textarea",{id:"message","onUpdate:modelValue":e[2]||(e[2]=a=>s.formData.message=a),required:"",placeholder:"Digite aqui a sua mensagem",rows:"5"},null,512),[[o.Jo,s.formData.message]])]),e[7]||(e[7]=(0,t.Lk)("button",{type:"submit",class:"submit-btn"},"Enviar Mensagem",-1))],32)])])}var X=n(365),B={name:"ContactSection",data(){return{formData:{name:"",email:"",message:""}}},methods:{async submitForm(){try{const a={from_name:this.formData.name,reply_to:this.formData.email,message:this.formData.message};await X.Ay.send("service_6e4wivp","template_x4ixhqc",a,"PZNOXdI8wykiQu5CY"),this.formData={name:"",email:"",message:""},alert("Mensagem enviada com sucesso!")}catch(a){console.error("Error:",a),alert("Erro ao enviar mensagem. Tente novamente.")}}}};const $=(0,f.A)(B,[["render",I],["__scopeId","data-v-58dae476"]]);var R=$;const T={key:0,class:"menu-popup-overlay"},P={class:"menu-popup"},Q={class:"menu-header"},V={class:"date-range"};function z(a,e,n,r,s,i){return(0,t.uX)(),(0,t.Wv)(o.eB,{name:"fade"},{default:(0,t.k6)((()=>[n.isOpen?((0,t.uX)(),(0,t.CE)("div",T,[(0,t.Lk)("div",P,[(0,t.Lk)("div",Q,[(0,t.Lk)("h2",null,[e[1]||(e[1]=(0,t.eW)("📃 Menu ")),(0,t.Lk)("span",V,(0,c.v_)(r.dateRange),1)]),(0,t.Lk)("button",{class:"close-button",onClick:e[0]||(e[0]=e=>a.$emit("close"))},"×")]),e[2]||(e[2]=(0,t.Lk)("div",{class:"menu-content"},[(0,t.Lk)("ul",null,[(0,t.Lk)("li",null,[(0,t.Lk)("b",null,"Segunda:"),(0,t.eW)("Costela com Agrião")]),(0,t.Lk)("li",null,[(0,t.Lk)("b",null,"Terça:"),(0,t.eW)("Feijão Branco com Camarão")]),(0,t.Lk)("li",null,[(0,t.Lk)("b",null,"Quarta:"),(0,t.eW)("Frango à Parmegiana")]),(0,t.Lk)("li",null,[(0,t.Lk)("b",null,"Quinta:"),(0,t.eW)("Dobradinha")]),(0,t.Lk)("li",null,[(0,t.Lk)("b",null,"Sexta:"),(0,t.eW)("Feijoada")]),(0,t.Lk)("li",null,[(0,t.Lk)("b",null,"Sábado:"),(0,t.eW)("Rabada com Agrião")])])],-1))])])):(0,t.Q3)("",!0)])),_:1})}var G={name:"MenuSection",props:{isOpen:Boolean},emits:["close"],setup(){const a=(0,t.EW)((()=>{const a=new Date,e=new Date(a),n=new Date(a);e.setDate(a.getDate()-a.getDay()+1),n.setDate(a.getDate()-a.getDay()+6);const o=a=>`${String(a.getDate()).padStart(2,"0")}/${String(a.getMonth()+1).padStart(2,"0")}`;return`${o(e)} a ${o(n)}`}));return{dateRange:a}}};const J=(0,f.A)(G,[["render",z],["__scopeId","data-v-4ed9791a"]]);var U=J,Y={name:"App",components:{NavBar:g,AboutSection:C,LocationSection:O,MenuSection:U,ContactSection:R,FooterSection:N},data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){this.isMenuOpen=!1}}};const Z=(0,f.A)(Y,[["render",i]]);var H=Z;X.Ay.init("PZNOXdI8wykiQu5CY"),(0,o.Ef)(H).mount("#app")}},e={};function n(o){var t=e[o];if(void 0!==t)return t.exports;var r=e[o]={exports:{}};return a[o].call(r.exports,r,r.exports,n),r.exports}n.m=a,function(){var a=[];n.O=function(e,o,t,r){if(!o){var s=1/0;for(u=0;u<a.length;u++){o=a[u][0],t=a[u][1],r=a[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||s>=r)&&Object.keys(n.O).every((function(a){return n.O[a](o[c])}))?o.splice(c--,1):(i=!1,r<s&&(s=r));if(i){a.splice(u--,1);var l=t();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=a.length;u>0&&a[u-1][2]>r;u--)a[u]=a[u-1];a[u]=[o,t,r]}}(),function(){n.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(e,{a:e}),e}}(),function(){n.d=function(a,e){for(var o in e)n.o(e,o)&&!n.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){n.p="/"}(),function(){var a={524:0};n.O.j=function(e){return 0===a[e]};var e=function(e,o){var t,r,s=o[0],i=o[1],c=o[2],l=0;if(s.some((function(e){return 0!==a[e]}))){for(t in i)n.o(i,t)&&(n.m[t]=i[t]);if(c)var u=c(n)}for(e&&e(o);l<s.length;l++)r=s[l],n.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return n.O(u)},o=self["webpackChunkaurora_website"]=self["webpackChunkaurora_website"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(2203)}));o=n.O(o)})();
//# sourceMappingURL=app.a3f5d6ef.js.map