(()=>{"use strict";var e={536:(e,t,a)=>{var i=a(963),n=a(842),s=a(252);const o={class:"app"};function r(e,t,a,n,r,l){const c=(0,s.up)("TopBar"),d=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(c),(0,s.Wm)(d,null,{default:(0,s.w5)((({Component:e})=>[(0,s.Wm)(i.uT,{"enter-active-class":r.enterClass,"leave-active-class":r.leaveClass},{default:(0,s.w5)((()=>[((0,s.wg)(),(0,s.j4)((0,s.LL)(e)))])),_:2},1032,["enter-active-class","leave-active-class"])])),_:1})])}var l=a(577);const c={style:{"z-index":"7",width:"100%","background-color":"black"}},d={style:{width:"100%"}},m={class:"navigation"},g={class:"navbar-li"},u={class:"others navbar-li"},h={class:"others navbar-li"};function p(e,t,a,n,o,r){const p=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("header",{class:(0,l.C_)({"scrolled-nav":e.scrollPosition})},null,2),(0,s._)("nav",null,[(0,s._)("div",d,[(0,s.wy)((0,s._)("ul",m,[(0,s._)("li",g,[(0,s.Wm)(p,{class:"link",to:{name:"Ptcg"}},{default:(0,s.w5)((()=>[(0,s.Uk)("PTCG")])),_:1})]),(0,s._)("li",u,[(0,s.Wm)(p,{class:"link",to:{name:"Mangas"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Mangas")])),_:1})]),(0,s._)("li",h,[(0,s.Wm)(p,{class:"link",to:{name:"Esports"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Esports")])),_:1})])],512),[[i.F8,!e.mobile]])])])])}const A={};var k=a(744);const y=(0,k.Z)(A,[["render",p]]),_=y,f={data(){return{enterClass:"",leaveClass:"animate__animated animate__fadeOutLeft"}},components:{TopBar:_},watch:{$route(e,t){"Esports"===e.name&&(this.enterClass="animate__animated animate__fadeInRight",this.leaveClass="animate__animated animate__fadeOutLeft"),"Mangas"===e.name&&("Ptcg"===t.name?(this.enterClass="animate__animated animate__fadeInRight",this.leaveClass="animate__animated animate__fadeOutLeft"):"Esports"===t.name&&(this.enterClass="animate__animated animate__fadeInLeft",this.leaveClass="animate__animated animate__fadeOutRight")),"Ptcg"===e.name&&(this.enterClass="animate__animated animate__fadeInLeft",this.leaveClass="animate__animated animate__fadeOutRight")}}},v=(0,k.Z)(f,[["render",r]]),w=v;var b=a(201);const C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAB3AgMAAADELZVmAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFAAAA////////c3ilYwAAAAN0Uk5TAP/ffz726QAAArdJREFUeJzlmV1u4zAMhOUABnYPoCPkHjqCHtRiH3OUXCL3bX4smSIl2hy5QNrlU6tmvpgzlsykzv0X5T/gCqs8HcH6oKwZZ93V0/JjfLL+wqgkWJP6+i1W7iq8zIdZkbg9GiSxPrNg84lBaWGhhlG7Yr5bQRa1q7C8IlCK2hXcmGHUnrIjMcMedp0FCzPsQoRpZUFN0oaiG2qyavFCzrCbnUVbXGPEmqxUjpYZRW9Uaj1yu16pyzXL6n6q3j9WrDWS3ZdFPA41y+ZYrDvhLEuX9w5P9HfHaz8ssTaSYG2X59IBFpfWzzNTCWl+sgacVaQzzhJS34vRbezwJKWa9epkkfLBJGL812Kpd1g0xqixgpDq1vsO56kQ0rzQRKnmlz9e+Tu3WYphxhhVw5KULgu9HdRvMgrp1m7sN2mN0SlJXo0xahcmpZ4v7HXMHqNWXJoPfOAgNMeolD3GfpkOwo06c+nC+lRV+Q2PiLHFsh6EuVp3WBRS8VBqVuvWL7vxwt9RZ7UOHjjGhmFS6pl/nZKGJXgskYahMbqGYWiMrSbDwFgirB/YjezCPqX0ts968tLiuOdSnoWhuPRNDkIxmIrZYn8deagKqc16EqPcQVtjyQ5WGUyNMfqVBYwlddFPh/axpC5y8CBjSV0FdcBY4lfWYIzEMPt0KaoYNhyjW5uU06WYLTYrb+jxGF12+JjpcqqtP2K6FFIxW1gv7/2mSyH1duuZdB1MgRh70iOfZ7vHkj6rSH9vjIeMJbcO68jPegFnFel3sACU49IJt95x6cJqfukFspAYHZeecOuXe5VIcesXlrhQiHXmUg/H+DonqNTD1r9yo9IZZ524dIJjfHkd+AKGevqjL+yvmUtnNManYeL/P5j17tETkw6wZi71aIyPngJfQFH36+AL+pdeap34wh+c9cPrC+0AhkldtCanAAAAAElFTkSuQmCC",E=a.p+"img/worldslogo.1a9a839f.png",I="data:image/png;base64,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",x=a.p+"img/drx2ndcase.25e49026.png",O=a.p+"img/case1.6f534cfb.png",T=a.p+"img/drxbar.4b23a88f.png",j=a.p+"img/case3.5ef8bf15.png",z=a.p+"img/case4.3c269212.png",D=a.p+"img/case5.7546af45.png",Q={key:0},Z={key:0,id:"t1_logo",src:C},B={key:0,id:"red_background"},J={key:0,id:"blue_background"},S={key:0,id:"drx_logo",src:I},P={key:0,class:"underlayer"},M={class:"drx-title"},q={key:0,class:"h1_drx"},H={key:0,style:{"text-align":"center",opacity:"0"}},W=(0,s._)("br",null,null,-1),L={class:"first-case"},R={key:0,class:"first_case_class",src:x},G={key:0,class:"second_case_class",src:O},U={class:"transition_bar_div"},K={key:0,class:"bar_class first_case_class",src:T},F={class:"bottom_case",style:{width:"100%"}},N={key:0,class:"third_case_class",src:j},V={key:0,class:"fourth_case_class",src:z},Y={key:0,class:"fifth_case_class",src:D};function X(e,t,a,n,o,r){return(0,s.wg)(),(0,s.iD)("div",{class:(0,l.C_)([[o.page_value],"page"])},[r.isMobile()?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",Q,[(0,s.Wm)(i.uT,{onLeave:r.remove_t1},{default:(0,s.w5)((()=>[o.background_state?((0,s.wg)(),(0,s.iD)("img",Z)):(0,s.kq)("",!0)])),_:1},8,["onLeave"]),(0,s.Wm)(i.uT,{onLeave:r.remove_redbg},{default:(0,s.w5)((()=>[o.background_state?((0,s.wg)(),(0,s.iD)("div",B)):(0,s.kq)("",!0)])),_:1},8,["onLeave"]),(0,s.Wm)(i.uT,{onLeave:r.remove_logo},{default:(0,s.w5)((()=>[o.background_state?((0,s.wg)(),(0,s.iD)("img",{key:0,onClick:t[0]||(t[0]=(...e)=>r.transition_backgrounds&&r.transition_backgrounds(...e)),class:"pulse_logo",id:"worlds_logo",src:E})):(0,s.kq)("",!0)])),_:1},8,["onLeave"]),(0,s.Wm)(i.uT,{onLeave:r.remove_bluebg},{default:(0,s.w5)((()=>[o.background_state?((0,s.wg)(),(0,s.iD)("div",J)):(0,s.kq)("",!0)])),_:1},8,["onLeave"]),(0,s.Wm)(i.uT,{onLeave:r.remove_drx},{default:(0,s.w5)((()=>[o.background_state?((0,s.wg)(),(0,s.iD)("img",S)):(0,s.kq)("",!0)])),_:1},8,["onLeave"])])),(0,s.Wm)(i.uT,{onEnter:r.div_arrive},{default:(0,s.w5)((()=>[o.second_state?((0,s.wg)(),(0,s.iD)("div",P,[(0,s._)("div",M,[(0,s.Wm)(i.uT,{onEnter:r.h1_arrive},{default:(0,s.w5)((()=>[o.drx_state?((0,s.wg)(),(0,s.iD)("h1",q,"DRX WINS")):(0,s.kq)("",!0)])),_:1},8,["onEnter"]),(0,s.Wm)(i.uT,{onEnter:r.p_arrive},{default:(0,s.w5)((()=>[o.drx_state?((0,s.wg)(),(0,s.iD)("p",H,[(0,s.Uk)("DRX aka DragonX won the Worlds championship 2022 of League of Legends !"),W,(0,s.Uk)(" Maybe the biggest cinderella story of the competitive history of this game, the finals was such an emotional rollercoaster ")])):(0,s.kq)("",!0)])),_:1},8,["onEnter"])]),(0,s._)("div",L,[(0,s.Wm)(i.uT,{onEnter:r.firstcase_arrive},{default:(0,s.w5)((()=>[o.firstcase_state?((0,s.wg)(),(0,s.iD)("img",R)):(0,s.kq)("",!0)])),_:1},8,["onEnter"]),(0,s.Wm)(i.uT,{onEnter:r.secondcase_arrive},{default:(0,s.w5)((()=>[o.firstcase_state?((0,s.wg)(),(0,s.iD)("img",G)):(0,s.kq)("",!0)])),_:1},8,["onEnter"])]),(0,s._)("div",U,[(0,s.Wm)(i.uT,{onEnter:r.bar_arrive},{default:(0,s.w5)((()=>[o.firstcase_state?((0,s.wg)(),(0,s.iD)("img",K)):(0,s.kq)("",!0)])),_:1},8,["onEnter"])]),(0,s._)("div",F,[(0,s.Wm)(i.uT,{onEnter:r.case3_arrive},{default:(0,s.w5)((()=>[o.firstcase_state?((0,s.wg)(),(0,s.iD)("img",N)):(0,s.kq)("",!0)])),_:1},8,["onEnter"]),(0,s.Wm)(i.uT,{onEnter:r.case4_arrive},{default:(0,s.w5)((()=>[o.firstcase_state?((0,s.wg)(),(0,s.iD)("img",V)):(0,s.kq)("",!0)])),_:1},8,["onEnter"]),(0,s.Wm)(i.uT,{onEnter:r.case5_arrive},{default:(0,s.w5)((()=>[o.firstcase_state?((0,s.wg)(),(0,s.iD)("img",Y)):(0,s.kq)("",!0)])),_:1},8,["onEnter"])])])):(0,s.kq)("",!0)])),_:1},8,["onEnter"])],2)}var $=a(990),ee=a(317);const te={data(){return{background_state:!0,page_value:"esports_page",second_state:!1,drx_state:!1,firstcase_state:!1}},methods:{transition_backgrounds(){this.background_state=!1},div_arrive:function(e,t){$.p8.to(e,{duration:1.5,opacity:1}),setTimeout((()=>{this.drx_state=!0,this.firstcase_state=!0}),1500)},remove_logo:function(e,t){$.p8.to(e,{duration:.5,opacity:0,onComplete:t}).delay(1),setTimeout((()=>{this.page_value="esports_page_2"}),3400),setTimeout((()=>{this.second_state=!0}),3700)},h1_arrive:function(e,t){$.p8.set(e,{y:20}),$.p8.to(e,{x:35,duration:1.5,onComplete:t,opacity:1})},p_arrive:function(e,t){$.p8.set(e,{y:2e3}),$.p8.to(e,{y:20,duration:1.5,onComplete:t,opacity:1}).delay(1.5)},firstcase_arrive:function(e,t){$.p8.set(e,{x:50,y:0,opacity:0}),$.p8.to(e,{y:20,opacity:1,duration:1,onComplete:t}).delay(3)},secondcase_arrive:function(e,t){$.p8.set(e,{x:300,y:20,opacity:0}),$.p8.to(e,{x:-50,duration:1,opacity:1}).delay(3.5)},bar_arrive:function(e,t){$.p8.set(e,{x:"-750",y:20});var a=$.p8.timeline({repeat:-1}).delay(6);a.set(e,{x:"-750",opacity:1}),a.to(e,{x:2e3,duration:10})},case3_arrive:function(e,t){$.p8.set(e,{x:"-750",y:40}),$.p8.to(e,{x:100,duration:1,opacity:1,onComplete:t}).delay(4)},case4_arrive:function(e,t){$.p8.set(e,{x:2e3,y:40}),$.p8.to(e,{x:-10,duration:1,opacity:1,onComplete:t}).delay(4.5)},case5_arrive:function(e,t){$.p8.set(e,{x:2e3,y:40}),$.p8.to(e,{x:100,duration:1,opacity:1,onComplete:t}).delay(6)},make_pulse_logo:function(){$.p8.to(".pulse_logo",{scale:1.01,repeat:"-1",yoyo:!0,ease:ee.qD.easeNone})},remove_redbg:function(e,t){var a=$.p8.timeline();a.to(e,{y:-1150,rotation:0,duration:1}),a.to(e,{y:-1700,duration:2.5,onComplete:t})},remove_bluebg:function(e,t){var a=$.p8.timeline();a.to(e,{y:-1190,x:"-15",rotation:0,duration:1}),a.to(e,{y:-300,duration:2.5,onComplete:t})},remove_t1:function(e,t){$.p8.to(e,{y:-550,duration:2.5,onComplete:t}).delay(1)},remove_drx:function(e,t){$.p8.to(e,{y:850,duration:2.5,onComplete:t}).delay(1)},isMobile(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(setTimeout((()=>{this.page_value="esports_page_2"}),3400),setTimeout((()=>{this.second_state=!0}),3700),!0)}},mounted(){document.body.classList.add("overflow-body"),this.page_value="esports_page",this.make_pulse_logo()},watch:{$route(e,t){document.body.classList.remove("overflow-body"),this.page_value="esports_page_initial"}}},ae=(0,k.Z)(te,[["render",X]]),ie=ae,ne={class:"page"},se={class:"title"},oe={key:0,class:"mangas",id:"title"},re={key:0,class:"preambule"},le={class:"favorite-works",style:{overflow:"hidden"}},ce=(0,s._)("h1",{class:"mangas",id:"favorite-title",style:{"padding-top":"2%"}},"Here are some of my favorite works",-1),de={key:0,class:"fma-li"},me=["src"],ge={key:1,class:"jojo-li",style:{width:"34%"}},ue=["src"],he={key:2,class:"snk-li"},pe=["src"],Ae={key:0},ke={key:1},ye=(0,s._)("br",null,null,-1),_e=(0,s._)("br",null,null,-1),fe=(0,s._)("br",null,null,-1),ve={key:2},we={key:3},be=(0,s._)("br",null,null,-1),Ce=(0,s._)("br",null,null,-1),Ee=(0,s._)("br",null,null,-1),Ie=(0,s._)("br",null,null,-1),xe=(0,s._)("br",null,null,-1),Oe={key:4},Te={key:5},je=(0,s._)("br",null,null,-1),ze=(0,s._)("br",null,null,-1),De=(0,s._)("div",{class:"last-watched"},[(0,s._)("h1",{class:"mangas",id:"watched-title"},"My last episodes watched"),(0,s._)("p",{class:"preambule",style:{"margin-bottom":"2%"}},"(WIP Problems with the MAL Api at the moment come back check later !)")],-1);function Qe(e,t,a,n,o,r){const c=(0,s.up)("video-background");return(0,s.wg)(),(0,s.iD)("div",ne,[(0,s._)("div",se,[(0,s.Wm)(i.uT,{class:"animate__animated animate__fadeInLeft animate__delay-1s"},{default:(0,s.w5)((()=>[o.title_condition?((0,s.wg)(),(0,s.iD)("h1",oe,"Mangas and Animes")):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(i.uT,{class:"animate__animated animate__fadeInLeft animate__delay-2s"},{default:(0,s.w5)((()=>[o.title_condition?((0,s.wg)(),(0,s.iD)("p",re,"Mangas and Animes are a form of media I consume on a daily basis, if you know me, you know that I spend a lot of time reading japanese comics : It can be anywhere, at a party, in the toilets or simply in my bed. I've been knees deep in this culture since I was young, indeed my brother and my sister made me watch animes in our childhood. To this day, I still appreciate this part of the japanese pop-culture a lot worth. ")):(0,s.kq)("",!0)])),_:1})]),(0,s.Wm)(i.uT,{class:"animate__animated animate__fadeInUp animate__delay-3s"},{default:(0,s.w5)((()=>[o.title_condition?((0,s.wg)(),(0,s.j4)(c,{key:0,class:"manga-bg",src:o.video_src,style:{"max-height":"700px",height:"100vh",width:"100%","margin-top":"3%"}},{default:(0,s.w5)((()=>[(0,s._)("div",le,[ce,(0,s.Wm)(i.W3,{tag:"ul",name:"anime",class:"anime_top",mode:"out-in",appear:"true"},{default:(0,s.w5)((()=>[o.fma_state?((0,s.wg)(),(0,s.iD)("li",de,[(0,s._)("img",{onClick:t[0]||(t[0]=e=>r.changeVideo("fma")),src:o.img_src},null,8,me)])):(0,s.kq)("",!0),o.jojo_state?((0,s.wg)(),(0,s.iD)("li",ge,[(0,s._)("img",{onClick:t[1]||(t[1]=e=>r.changeVideo("jojo")),src:o.img2_src},null,8,ue)])):(0,s.kq)("",!0),o.snk_state?((0,s.wg)(),(0,s.iD)("li",he,[(0,s._)("img",{onClick:t[2]||(t[2]=e=>r.changeVideo("snk")),src:o.img3_src},null,8,pe)])):(0,s.kq)("",!0),o.text_state?((0,s.wg)(),(0,s.iD)("li",{key:3,id:"text-li",style:(0,l.j5)({"margin-right":o.marginText})},[o.fma_state?((0,s.wg)(),(0,s.iD)("h1",Ae,"FullMetal Alchemist:Brotherhood")):(0,s.kq)("",!0),o.fma_state?((0,s.wg)(),(0,s.iD)("p",ke,[(0,s.Uk)("My favorite anime, it is not the most well animated story, but its quality in all its aspects is very good."),ye,(0,s.Uk)(" Lots of relevant themes in our modern era: philosophy, politics and religion. It still packs a lot of action. The plot in itself is very interesting, it doesn't use any particular way of narration but convey the plot point with clarty and ease, in itself the story is not boring : plot twists and build-ups throughout the whole story paying off with one of my favorite ending in anime history. "),_e,fe,(0,s.Uk)("Please consider watching it !")])):(0,s.kq)("",!0),o.jojo_state?((0,s.wg)(),(0,s.iD)("h1",ve,"Jojo's Bizarre Adventure Golden Wind")):(0,s.kq)("",!0),o.jojo_state?((0,s.wg)(),(0,s.iD)("p",we,[(0,s.Uk)("5th part of the classic Jojo's bizarre adventure. "),be,(0,s.Uk)(),Ce,(0,s.Uk)('Set in Italy, the story talks about gangsters and the italian mafia, in this crazy part we have maybe the most entertaining fights of the whole series. Taking the concept of "STAND" even further beyond, the characters have guts and make all the fights exciting. Making you wonder if they will die against each opponent they encounter. '),Ee,(0,s.Uk)(" The last part of this season is so exciting that it might make you faint ! "),Ie,(0,s.Uk)(),xe,(0,s.Uk)(" Don't hesitate and come watch this masterpiece packed with all kind of emotions : melancholy, sadness, happiness, excitement. And as they say : Arrivederci ")])):(0,s.kq)("",!0),o.snk_state?((0,s.wg)(),(0,s.iD)("h1",Oe,"Shingeki no Kyojin")):(0,s.kq)("",!0),o.snk_state?((0,s.wg)(),(0,s.iD)("p",Te,[(0,s.Uk)("Shingeki no Kyojin or Attack on Titan, one of the best stories ever told. Set in a strange world filled with Titans, some kind of mindless giant humanoïd creature coming straight from horror movies, humans are trying to survive and exterminate all the titans. We follow the of Eren Jaeger a young Teenager who unfortunately lost his mom in a giant attack from the Colossal Titan. "),je,(0,s.Uk)(),ze,(0,s.Uk)(" The way it's constructed, the way every plot twist makes every rewatch a new story. Every relevant characters are complex and plenty moral dilemmas are shown. I recommend everyone who wants to experience a great story (through its narrative ways) to watch this show")])):(0,s.kq)("",!0)],4)):(0,s.kq)("",!0)])),_:1})])])),_:1},8,["src"])):(0,s.kq)("",!0)])),_:1}),De])}const Ze={data(){return{img_src:"assets/fmab.jpg",img2_src:"assets/jojop5.jpg",img3_src:"assets/snk.jpg",video_src:"jumppv.mp4",marginText:"7%",open_state:!1,fma_state:!0,jojo_state:!0,snk_state:!0,text_state:!1,title_condition:!1}},methods:{changeVideo:function(e){!1===this.open_state&&"fma"===e?(this.marginText="7%",this.video_src="fmabopening.mp4",this.jojo_state=!1,this.snk_state=!1,setTimeout((()=>this.text_state=!0),500),this.open_state=!0):!1===this.open_state&&"jojo"===e?(this.marginText="6%",this.fma_state=!1,this.snk_state=!1,this.video_src="jojopv.mp4",setTimeout((()=>this.text_state=!0),500),this.open_state=!0):!1===this.open_state&&"snk"===e?(this.marginText="7%",this.fma_state=!1,this.jojo_state=!1,this.video_src="snkpv.mp4",setTimeout((()=>this.text_state=!0),500),this.open_state=!0):(this.video_src="jumppv.mp4",this.text_state=!1,this.open_state=!1,setTimeout((()=>this.snk_state=!0),600),setTimeout((()=>this.fma_state=!0),600),setTimeout((()=>this.jojo_state=!0),600))},changeCondition(){this.title_condition=!0}},mounted(){this.changeCondition()},beforeMount(){}},Be=(0,k.Z)(Ze,[["render",Qe]]),Je=Be,Se=a.p+"img/giratina-vstar.65e2e5d1.png",Pe={class:"page"},Me=(0,s._)("div",{class:"video-div"},[(0,s._)("h1",{id:"text-ptcg"}," Competitive PTCG ")],-1),qe={key:0},He=(0,s._)("h1",{class:"firsth1",style:{color:"white","text-align":"center","padding-top":"1%"}},"Competitive Card Game",-1),We=(0,s._)("p",{class:"explanation-text"},"Pokémon Trading Card Game has been a huge part of my 2021-2022 years, I've discovered this game in the bright summer of 2021, I've started by collecting cards as I've always been a fan of the Pokémon licence since I was a kid. One day I stumbled on players in my usual gaming bar. I tried the game and fell in love with it and its community: I dare say I met one of my best friends while playing this game. Since then I tried to compete in tournaments around Europe.",-1),Le=[He,We],Re={key:0,class:"firsth2",style:{color:"white","text-align":"center","padding-top":"5%"}},Ge={style:{"padding-top":"2%"}},Ue={key:0,class:"giratina-text"},Ke=(0,s._)("h3",{class:"firsth3",style:{color:"white","padding-top":"1%","text-align":"center","font-size":"30px"}},"Giratina VSTAR (LOR Format)",-1),Fe=(0,s._)("p",{class:"deck-text"},[(0,s.Uk)("This is the deck I am playing right now, I choose this one because of its particuliar nature, slow starting but strong-hitting. It also uses the Lost Zone Engine which I really like. "),(0,s._)("br"),(0,s.Uk)(" It appeared in the Last Origin Expansion which released in early september this year, lots of playable cards were also released in this expansion like Kyurem VMAX or Thorton "),(0,s._)("br"),(0,s._)("br"),(0,s.Uk)(" I advise people to try this deck ! It has a lot of advantages and you can learn a lot playing it. ")],-1),Ne=[Ke,Fe];function Ve(e,t,a,n,o,r){const c=(0,s.up)("video-background");return(0,s.wg)(),(0,s.iD)("div",Pe,[(0,s.Wm)(c,{class:"video-bg",src:"pokemonrules.mp4",style:{"max-height":"400px",height:"100vh",width:"100%",opacity:"100%"},autoplay:"false"},{default:(0,s.w5)((()=>[Me])),_:1}),(0,s.Wm)(i.uT,{"enter-active-class":"animate__animated animate__fadeInDown animate__delay-1s"},{default:(0,s.w5)((()=>[o.displayCondition?((0,s.wg)(),(0,s.iD)("div",qe,Le)):(0,s.kq)("",!0)])),_:1}),(0,s._)("div",null,[(0,s.Wm)(i.uT,{"enter-active-class":"animate__animated animate__fadeInDown animate__delay-2s"},{default:(0,s.w5)((()=>[o.displayCondition?((0,s.wg)(),(0,s.iD)("h2",Re,"My standard format Deck")):(0,s.kq)("",!0)])),_:1}),(0,s._)("div",Ge,[(0,s._)("div",null,[(0,s._)("img",{onClick:t[0]||(t[0]=(...e)=>r.activateGiratina&&r.activateGiratina(...e)),class:(0,l.C_)({giratinaUnfolded:!o.giratinaActive,giratinaFolded:o.giratinaActive}),id:"giratina",src:Se},null,2)]),(0,s.Wm)(i.uT,{name:"giratina"},{default:(0,s.w5)((()=>[!1===o.giratinaActive?((0,s.wg)(),(0,s.iD)("div",Ue,Ne)):(0,s.kq)("",!0)])),_:1})])])])}const Ye={data(){return{giratinaActive:!0,displayCondition:!1}},methods:{activateGiratina(e){!0===this.giratinaActive?this.giratinaActive=!1:this.giratinaActive=!0},activateElement(){this.displayCondition=!0}},mounted:function(){this.activateElement()}},Xe=(0,k.Z)(Ye,[["render",Ve]]),$e=Xe,et=(0,b.p7)({history:(0,b.r5)(),routes:[{path:"/",component:$e,name:"Ptcg",meta:{enterClass:"animate__animated animate__fadeInLeft",leaveClass:"animate__animated animate__fadeOutRight"}},{path:"/mangas",component:Je,name:"Mangas",meta:{enterClass:"animate__animated animate__fadeInLeft",leaveClass:"animate__animated animate__fadeOutRight"}},{path:"/esports",component:ie,name:"Esports",meta:{enterClass:"animate__animated animate__fadeInRight",leaveClass:"animate__animated animate__fadeOutLeft"}}]}),tt=et,at=(0,i.ri)(w);at.use(tt),at.use(n.S),at.mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,a),s.exports}a.m=e,(()=>{var e=[];a.O=(t,i,n,s)=>{if(!i){var o=1/0;for(d=0;d<e.length;d++){for(var[i,n,s]=e[d],r=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((e=>a.O[e](i[l])))?i.splice(l--,1):(r=!1,s<o&&(o=s));if(r){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,n,s]}})(),(()=>{a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{a.p="/showcase_site/"})(),(()=>{var e={143:0};a.O.j=t=>0===e[t];var t=(t,i)=>{var n,s,[o,r,l]=i,c=0;if(o.some((t=>0!==e[t]))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(l)var d=l(a)}for(t&&t(i);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},i=self["webpackChunkshowcase_site"]=self["webpackChunkshowcase_site"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=a.O(void 0,[998],(()=>a(536)));i=a.O(i)})();
//# sourceMappingURL=app.9ec7baa3.js.map