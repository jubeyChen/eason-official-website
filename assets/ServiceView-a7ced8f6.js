import{g as J,c as Y,b as K,n as Q,e as Z,S as ee,a as ae,N as le,P as te}from"./pagination-99c822fb.js";import{d as B,r as z,o as p,a as d,f as H,w as j,F as w,b as P,c as se,e as s,t as b,u as O,_ as M,g as oe,p as ne,h as re}from"./index-bdb9a5a0.js";function ie(x){let{swiper:e,extendParams:_,on:u,emit:v}=x;const c=J();let g=!1,y=null,S=null,h,i,C,F;_({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function I(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:a,rtlTranslate:o}=e,{dragEl:l,el:t}=a,n=e.params.scrollbar,m=e.params.loop?e.progressLoop:e.progress;let f=i,r=(C-i)*m;o?(r=-r,r>0?(f=i-r,r=0):-r+i>C&&(f=C+r)):r<0?(f=i+r,r=0):r+i>C&&(f=C-r),e.isHorizontal()?(l.style.transform=`translate3d(${r}px, 0, 0)`,l.style.width=`${f}px`):(l.style.transform=`translate3d(0px, ${r}px, 0)`,l.style.height=`${f}px`),n.hide&&(clearTimeout(y),t.style.opacity=1,y=setTimeout(()=>{t.style.opacity=0,t.style.transitionDuration="400ms"},1e3))}function R(a){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${a}ms`)}function D(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:a}=e,{dragEl:o,el:l}=a;o.style.width="",o.style.height="",C=e.isHorizontal()?l.offsetWidth:l.offsetHeight,F=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?i=C*F:i=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?o.style.width=`${i}px`:o.style.height=`${i}px`,F>=1?l.style.display="none":l.style.display="",e.params.scrollbar.hide&&(l.style.opacity=0),e.params.watchOverflow&&e.enabled&&a.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function T(a){return e.isHorizontal()?a.clientX:a.clientY}function k(a){const{scrollbar:o,rtlTranslate:l}=e,{el:t}=o;let n;n=(T(a)-Z(t)[e.isHorizontal()?"left":"top"]-(h!==null?h:i/2))/(C-i),n=Math.max(Math.min(n,1),0),l&&(n=1-n);const m=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*n;e.updateProgress(m),e.setTranslate(m),e.updateActiveIndex(),e.updateSlidesClasses()}function V(a){const o=e.params.scrollbar,{scrollbar:l,wrapperEl:t}=e,{el:n,dragEl:m}=l;g=!0,h=a.target===m?T(a)-a.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,a.preventDefault(),a.stopPropagation(),t.style.transitionDuration="100ms",m.style.transitionDuration="100ms",k(a),clearTimeout(S),n.style.transitionDuration="0ms",o.hide&&(n.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),v("scrollbarDragStart",a)}function q(a){const{scrollbar:o,wrapperEl:l}=e,{el:t,dragEl:n}=o;g&&(a.preventDefault?a.preventDefault():a.returnValue=!1,k(a),l.style.transitionDuration="0ms",t.style.transitionDuration="0ms",n.style.transitionDuration="0ms",v("scrollbarDragMove",a))}function A(a){const o=e.params.scrollbar,{scrollbar:l,wrapperEl:t}=e,{el:n}=l;g&&(g=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",t.style.transitionDuration=""),o.hide&&(clearTimeout(S),S=Q(()=>{n.style.opacity=0,n.style.transitionDuration="400ms"},1e3)),v("scrollbarDragEnd",a),o.snapOnRelease&&e.slideToClosest())}function L(a){const{scrollbar:o,params:l}=e,t=o.el;if(!t)return;const n=t,m=l.passiveListeners?{passive:!1,capture:!1}:!1,f=l.passiveListeners?{passive:!0,capture:!1}:!1;if(!n)return;const r=a==="on"?"addEventListener":"removeEventListener";n[r]("pointerdown",V,m),c[r]("pointermove",q,m),c[r]("pointerup",A,f)}function W(){!e.params.scrollbar.el||!e.scrollbar.el||L("on")}function X(){!e.params.scrollbar.el||!e.scrollbar.el||L("off")}function E(){const{scrollbar:a,el:o}=e;e.params.scrollbar=Y(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const l=e.params.scrollbar;if(!l.el)return;let t;typeof l.el=="string"&&e.isElement&&(t=e.el.querySelector(l.el)),!t&&typeof l.el=="string"?t=c.querySelectorAll(l.el):t||(t=l.el),e.params.uniqueNavElements&&typeof l.el=="string"&&t.length>1&&o.querySelectorAll(l.el).length===1&&(t=o.querySelector(l.el)),t.length>0&&(t=t[0]),t.classList.add(e.isHorizontal()?l.horizontalClass:l.verticalClass);let n;t&&(n=t.querySelector(`.${e.params.scrollbar.dragClass}`),n||(n=K("div",e.params.scrollbar.dragClass),t.append(n))),Object.assign(a,{el:t,dragEl:n}),l.draggable&&W(),t&&t.classList[e.enabled?"remove":"add"](e.params.scrollbar.lockClass)}function U(){const a=e.params.scrollbar,o=e.scrollbar.el;o&&o.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),X()}u("init",()=>{e.params.scrollbar.enabled===!1?$():(E(),D(),I())}),u("update resize observerUpdate lock unlock",()=>{D()}),u("setTranslate",()=>{I()}),u("setTransition",(a,o)=>{R(o)}),u("enable disable",()=>{const{el:a}=e.scrollbar;a&&a.classList[e.enabled?"remove":"add"](e.params.scrollbar.lockClass)}),u("destroy",()=>{U()});const G=()=>{e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.el&&e.scrollbar.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),E(),D(),I()},$=()=>{e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.el&&e.scrollbar.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),U()};Object.assign(e.scrollbar,{enable:G,disable:$,updateSize:D,setTranslate:I,init:E,destroy:U})}const ce={class:"w-[85%] mx-auto max-[700px]:w-[98%]"},pe={class:"grid grid-cols-4 gap-8 p-16 max-[996px]:grid-cols-3 max-[996px]:p-2 max-[700px]:grid-cols-2 max-[700px]:gap-5 max-[700px]:pb-10"},de={class:"card relative py-14 max-[996px]:py-20 rounded-[13px] shadow-[0_1px_10px_0px_rgba(0,0,0,0.25)]"},me={class:"w-[80%] h-full mx-auto flex items-center"},ge=["src"],ue={class:"content"},Ce={class:"list-disc"},fe=B({__name:"Project",setup(x){const e=[le,te,ie],_=z([{company:[{logo:"images/company/logo-第一金投信.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-富邦人壽.svg",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-新光人壽.jpeg",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-明台產物.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-第一金投信.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-富邦人壽.svg",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-新光人壽.jpeg",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-明台產物.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-第一金投信.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-富邦人壽.svg",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-新光人壽.jpeg",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-明台產物.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]}]},{company:[{logo:"images/company/logo-第一金投信.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-富邦人壽.svg",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-新光人壽.jpeg",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-明台產物.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-第一金投信.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-富邦人壽.svg",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-新光人壽.jpeg",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-明台產物.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-第一金投信.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-第一金投信.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-第一金投信.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]},{logo:"images/company/logo-第一金投信.png",name:"第一金人壽",content:["雲端Call Center平台Upgrade400席","電銷系統","IP Fax","雲端Call Center異地備元平台"]}]}]);return(u,v)=>(p(),d("div",ce,[H(O(ae),{modules:e,class:"mySwiper",navigation:!0,scrollbar:!0},{default:j(()=>[(p(!0),d(w,null,P(_.value,(c,g)=>(p(),se(O(ee),{key:g},{default:j(()=>[s("div",pe,[(p(!0),d(w,null,P(c.company,(y,S)=>(p(),d("div",de,[s("div",me,[s("img",{src:y.logo},null,8,ge)]),s("div",ue,[s("ul",null,[(p(!0),d(w,null,P(y.content,(h,i)=>(p(),d("li",Ce,b(h),1))),256))])])]))),256))])]),_:2},1024))),128))]),_:1})]))}});const xe=M(fe,[["__scopeId","data-v-8f1326af"]]),N=x=>(ne("data-v-ad079a63"),x=x(),re(),x),be={class:"py-12 service-view"},_e=N(()=>s("div",{class:"what-we-do"},[s("div",null,[s("h1",{class:"text-[42px] text-primary-100 font-thin"},"What We Do"),s("p",{class:"text-[36px] font-semibold"},"開發領先業界的軟體商品")])],-1)),ve={class:"mb-20 mt-16"},ye={class:"grid grid-cols-2 gap-10 w-[72%] mx-auto max-[916px]:w-[80%] max-[700px]:grid-cols-1"},he={class:"tracking-widest w-full"},we={class:"flex items-center mb-3"},Pe=["src"],Se={class:"text-[48px] text-primary-100"},Ie={class:"text-[20px] font-semibold"},De={class:"pl-5"},Fe={class:"bg-[#F6F3FB] py-20"},Ee={class:"w-[80%] mx-auto max-[700px]:w-[95%]"},Ue={class:"w-[90%] tracking-widest mx-auto flex items-center justify-between max-[1120px]:flex-col"},ze=N(()=>s("div",{class:"min-w-[316px] max-[1120px]:mb-10"},[s("p",{class:"text-[42px] text-primary-100 font-thin"},"Enghouse(CCSP)"),s("h2",{class:"text-[36px] font-semibold"},"客服雲端領導者")],-1)),Te={class:"w-[55%] max-[1120px]:w-full"},ke={class:"flex mb-8 items-center"},Le={class:"bg-[#D1C4E9] text-[#6A1B9A] min-w-[40px] h-[40px] text-center pl-2 mr-3 leading-[40px] align-middle rounded-full font-semibold"},$e={class:"text-lg"},je=oe('<div class="our-projects" data-v-ad079a63><div data-v-ad079a63><h1 class="text-[42px] text-primary-100 font-thin" data-v-ad079a63>OUR PROJECTS</h1><p class="text-[36px] font-semibold" data-v-ad079a63>成功案例</p></div></div><div class="w-[338px] mx-auto flex justify-between items-center text-lg tracking-widest mb-5" data-v-ad079a63><p data-v-ad079a63>成功案例</p><label class="switch" data-v-ad079a63><input type="checkbox" data-v-ad079a63><span class="slider" data-v-ad079a63></span></label><p data-v-ad079a63>Call Center成功案例</p></div>',2),Oe=B({__name:"ServiceView",setup(x){const e=z([{pic:"images/icon/icon-01.svg",num:"01",title:"套裝產品",content:"電話行銷管理系統(Outbound System)、客戶服務管理系統(Inbound System)、CRM客戶關係管理系統、傳真管理系統(FAX Server)、系統整合"},{pic:"images/icon/icon-02.svg",num:"02",title:"專案開發及整合",content:"網頁系統開發、網站架設、系統整體委外管理"},{pic:"images/icon/icon-03.svg",num:"03",title:"行動服務應用開發",content:"網頁系統開發、網站架設、系統整體委外管理"},{pic:"images/icon/icon-04.svg",num:"04",title:"代理產品",content:"CosmoCom IP Contact Center, Enghouse IVR, FaxBack IP Fax, Sytel PDS"},{pic:"images/icon/icon-05.svg",num:"05",title:"社群服務",content:"整合LINE、Facebook、WeChat等社群平台，提供社群行銷及社群客服"},{pic:"images/icon/icon-06.svg",num:"06",title:"IoT應用服務",content:"提供服務於Cloud Platform的IoT整合開發"}]),_=z(["CCSP是全球雲端客服中心平台的最佳選擇","我們的合作夥伴在全球擁有1,000多名終端客戶，管理著280,000個客服中心Contact-Center as-a-Service的服務","CCSP平台協助全球服務提供商真正實現全球業務","CCSP完整架構與功能亦支援私有雲及落地建置的服務"]);return(u,v)=>(p(),d("main",be,[_e,s("section",ve,[s("div",ye,[(p(!0),d(w,null,P(e.value,(c,g)=>(p(),d("div",he,[s("div",we,[s("img",{src:c.pic,class:"w-[97px] mr-5"},null,8,Pe),s("div",null,[s("p",Se,b(c.num),1),s("p",Ie,b(c.title),1)])]),s("p",De,b(c.content),1)]))),256))])]),s("section",Fe,[s("div",Ee,[s("div",Ue,[ze,s("ul",Te,[(p(!0),d(w,null,P(_.value,(c,g)=>(p(),d("li",ke,[s("span",Le,b(g+1)+".",1),s("span",$e,b(c),1)]))),256))])])])]),je,s("section",null,[s("div",null,[H(xe)])])]))}});const Me=M(Oe,[["__scopeId","data-v-ad079a63"]]);export{Me as default};
