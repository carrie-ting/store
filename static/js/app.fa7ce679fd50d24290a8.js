webpackJsonp([0],[function(t,s,e){t.exports=e.p+"store/static/img/01.792f0bb.png"},,,,,,function(t,s,e){"use strict";var i=e(2),a=e(47),l=e(33),n=e.n(l);i.a.use(a.a),s.a=new a.a({routes:[{path:"/",name:"index",component:n.a}]})},function(t,s){},function(t,s,e){e(24);var i=e(1)(e(11),e(41),null,null);t.exports=i.exports},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=e(3)),s.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,s=function(){if(!t.swiper&&i){delete t.options.notNextTick;var s=!1;for(var e in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(e)&&t.options[e]&&(s=!0,t.defaultSwiperClasses[e]=t.options[e]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};s?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?s():this.$nextTick(s)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"app"}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"BFooter",data:function(){return{}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(32),a=e.n(i),l=e(34),n=e.n(l),r=e(37),c=e.n(r);s.default={name:"index",data:function(){return{indexData:{arr:[{title:"儿童成人奶粉",subtitle:"ADULT CHILDREN",desc:"特价包邮包税",img:"../../src/assets/images/01.png"},{title:"婴幼儿奶粉",subtitle:"BABY FORMULA",desc:"特价包邮包税",img:"../../src/assets/images/01.png"}],arr1:[{title:"澳新食品",subtitle:"FOOD & SNACKS",desc:"",img:"../../src/assets/images/01.png"},{title:"日用百货",subtitle:"GROCERY",desc:"",img:"../../src/assets/images/01.png"},{title:"宝宝保健",subtitle:"BABY CARE",desc:"",img:"../../src/assets/images/01.png"},{title:"孕产妇必备",subtitle:"PROGANT CARE",desc:"",img:"../../src/assets/images/01.png"},{title:"宝宝日用",subtitle:"BABY GROCERY",desc:"",img:"../../src/assets/images/01.png"}],arr2:[{title:"美体塑身",subtitle:"FITNESS",desc:"",img:"../../src/assets/images/01.png"},{title:"抗老美容",subtitle:"ANTI-AGING AND BEAUTY",desc:"",img:"../../src/assets/images/01.png"},{title:"女性养护",subtitle:"WOMEN HEALTH",desc:"",img:"../../src/assets/images/01.png"},{title:"澳新神物",subtitle:"BABY FORMULA",desc:"",img:"../../src/assets/images/01.png"},{title:"麦卢卡蜂蜜",subtitle:"MANUKA HONEY",desc:"",img:"../../src/assets/images/01.png"},{title:"明目健脑",subtitle:"EYE CARE & BRAIN CARE",desc:"",img:"../../src/assets/images/01.png"},{title:"保肺止咳",subtitle:"LUNG CARE & ANTI-CCUGH",desc:"",img:"../../src/assets/images/01.png"},{title:"日常保健",subtitle:"HEALTH FOOD",desc:"",img:"../../src/assets/images/01.png"},{title:"补钙强体",subtitle:"STRENGTH & PERFCRMANCE",desc:"",img:"../../src/assets/images/01.png"},{title:"肠胃通便",subtitle:"GUT CARE",desc:"",img:"../../src/assets/images/01.png"},{title:"蜂蜜衍生品",subtitle:"HONEY PRODUCT",desc:"",img:"../../src/assets/images/01.png"}],arr3:[{title:"新款抢先看",subtitle:"THE NEW",desc:"",img:"../../src/assets/images/01.png"},{title:"清仓特价款",subtitle:"SALE",desc:"",img:"../../src/assets/images/01.png"},{title:"OZLANA UGG",subtitle:"OZLANA UGG",desc:"",img:"../../src/assets/images/01.png"},{title:"OZWEAR UGG",subtitle:"OZWEAR UGG",desc:"",img:"../../src/assets/images/01.png"},{title:"AS UGG",subtitle:"AS UGG",desc:"",img:"../../src/assets/images/01.png"},{title:"AXA UGG",subtitle:"AXA UGG",desc:"",img:"../../src/assets/images/01.png"},{title:"春夏款系列",subtitle:"SPRING & SUMMER",desc:"",img:"../../src/assets/images/01.png"},{title:"时尚美靴",subtitle:"BEAUTIFUL BOOTS",desc:"",img:"../../src/assets/images/01.png"},{title:"豆豆鞋 家居鞋",subtitle:"DOUG SHOES & HOUSEHOLD SHOES",desc:"",img:"../../src/assets/images/01.png"},{title:"AUSTRALIAN",subtitle:"AUSTRALIAN",desc:"",img:"../../src/assets/images/01.png"},{title:"OZLAMB UGG",subtitle:"OZLAMB UGG",desc:"",img:"../../src/assets/images/01.png"},{title:"AC&BULE",subtitle:"AC&BULE",desc:"",img:"../../src/assets/images/01.png"},{title:"PACIFIC UGG",subtitle:"PACIFIC UGG",desc:"",img:"../../src/assets/images/01.png"},{title:"D2C UGG",subtitle:"D2C UGG",desc:"",img:"../../src/assets/images/01.png"}],arr4:[{title:"羊毛被/褥子/羊毛毯",subtitle:"",desc:"",img:"../../src/assets/images/01.png"},{title:"羊毛垫 羊毛包",subtitle:"WOOL BAG",desc:"",img:"../../src/assets/images/01.png"},{title:"羊皮手套",subtitle:"WOOL GLOVES",desc:"",img:"../../src/assets/images/01.png"},{title:"羊毛羊绒围巾",subtitle:"WOOL SCARF",desc:"",img:"../../src/assets/images/01.png"}],arr5:[{title:"生鲜水果",subtitle:"FRUIT",desc:"",img:"../../src/assets/images/01.png"},{title:"生鲜肉类",subtitle:"MEAT",desc:"",img:"../../src/assets/images/01.png"},{title:"生鲜海鲜",subtitle:"SEAFOOD",desc:"",img:"../../src/assets/images/01.png"},{title:"生鲜套餐",subtitle:"SET",desc:"",img:"../../src/assets/images/01.png"}],arr6:[{title:"脸部护肤",subtitle:"FACIAL",desc:"",img:"../../src/assets/images/01.png"},{title:"日常洗护",subtitle:"PERSONAL CARE",desc:"",img:"../../src/assets/images/01.png"},{title:"卸妆洁面",subtitle:"DISCHARGE MAKEUP CLEAN FACE",desc:"",img:"../../src/assets/images/01.png"},{title:"爽肤水",subtitle:"TONER",desc:"",img:"../../src/assets/images/01.png"},{title:"精华类",subtitle:"ESSENCE",desc:"",img:"../../src/assets/images/01.png"},{title:"面霜乳液",subtitle:"CREAM LOTION",desc:"",img:"../../src/assets/images/01.png"},{title:"眼部护理",subtitle:"EYE CARE",desc:"",img:"../../src/assets/images/01.png"},{title:"面膜类",subtitle:"MASK",desc:"",img:"../../src/assets/images/01.png"},{title:"功能类",subtitle:"FUNCTION",desc:"",img:"../../src/assets/images/01.png"},{title:"洗发护发",subtitle:"HAIR CARE",desc:"",img:"../../src/assets/images/01.png"},{title:"身体护理",subtitle:"BODY CARE",desc:"",img:"../../src/assets/images/01.png"},{title:"清洁皂类",subtitle:"TOILET SOAP",desc:"",img:"../../src/assets/images/01.png"},{title:"牙齿护理",subtitle:"DENTAL",desc:"",img:"../../src/assets/images/01.png"},{title:"牙齿美白",subtitle:"TEETH WHITENING",desc:"",img:"../../src/assets/images/01.png"},{title:"儿童系列",subtitle:"CHILDREN'S SERIES",desc:"",img:"../../src/assets/images/01.png"},{title:"防晒",subtitle:"SUNSCREEN",desc:"",img:"../../src/assets/images/01.png"},{title:"晒后修复",subtitle:"AFTER SUN REPAIR",desc:"",img:"../../src/assets/images/01.png"},{title:"熏香类",subtitle:"INCENSE",desc:"",img:"../../src/assets/images/01.png"},{title:"特殊功效",subtitle:"SPECIAL EFFECT",desc:"",img:"../../src/assets/images/01.png"}]}}},method:{getData:function(){}},components:{BFooter:a.a,IndexMenu:n.a,weixin:c.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(36),a=e.n(i),l=e(35),n=e.n(l);s.default={name:"IndexMenu",data:function(){return{}},components:{LeftMenu:n.a,slider:a.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"LeftMenu",data:function(){return{hoverStatus:!1,hoverList:[],kindsList:[{title:"澳洲奶粉",list:["儿童成人奶粉","婴幼儿奶粉"]},{title:"母婴美食日用",list:["澳新食品","日用百货","宝宝保健","孕产妇必备","宝宝日用"]},{title:"澳新营养保健品",list:["美体塑身","抗老美容","女性养护","澳新神物","麦卢卡蜂蜜","明目健脑","保肺止咳","日常保健","补钙强体","肠胃通便","蜂蜜衍生品"]},{title:"精选澳洲UGG",list:["新款抢先看","清仓特价款","OZLANA UGG","OZWEAR UGG","AS UGG","AXA UGG","春夏款系列","时尚美靴","豆豆鞋 家居鞋","AUSTRALIAN","OZLAMB UGG","AC&BULE","PACIFIC UGG","D2C UGG"]},{title:"澳洲羊毛制品",list:["羊毛被/褥子/羊毛毯","羊毛垫 羊毛包","羊皮手套","羊毛羊绒围巾"]},{title:"生鲜红酒",list:["生鲜水果","生鲜肉类","生鲜海鲜","生鲜套餐"]},{title:"美容护肤品",list:["脸部护肤","日常洗护","卸妆洁面","爽肤水","精华类","面霜乳液","眼部护理","面膜类","功能类","洗发护发","身体护理","清洁皂类","牙齿护理","牙齿美白","晒后修复","儿童系列","熏香类","防晒","特殊功效"]}]}},methods:{showDetail:function(t){this.hoverStatus=!0,this.hoverList=this.kindsList[t].list},changeStatus:function(){this.hoverStatus=!0},hiddenDetail:function(){this.hoverStatus=!1}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2),a=e(4),l=e.n(a);i.a.use(l.a),s.default={name:"slider",data:function(){var t=this;return{swiperOption:{notNextTick:!0,autoplay:5e3,pagination:".swiper-pagination",slidesPerView:"auto",centeredSlides:!0,paginationClickable:!0,spaceBetween:30,onSlideChangeEnd:function(s){t.page=s.realIndex+1,t.index=s.realIndex}},sliderList:[{url:"store/static/img/slider/01.jpg",desc:""},{url:"store/static/img/slider/02.jpg",desc:""},{url:"store/static/img/slider/03.jpg",desc:""},{url:"store/static/img/slider/04.jpg",desc:""},{url:"store/static/img/slider/05.jpg",desc:""}]}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"IndexMenu",data:function(){return{status:!0}},methods:{hiddenLayer:function(){this.status=!1}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2),a=e(8),l=e.n(a),n=e(6);e(7),i.a.config.productionTip=!1,new i.a({el:"#app",router:n.a,template:"<App/>",components:{App:l.a}})},,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,function(t,s,e){var i=e(1)(e(9),e(44),null,null);t.exports=i.exports},function(t,s,e){var i=e(1)(e(10),e(43),null,null);t.exports=i.exports},function(t,s,e){e(27);var i=e(1)(e(12),e(46),null,null);t.exports=i.exports},function(t,s,e){e(26);var i=e(1)(e(13),e(45),null,null);t.exports=i.exports},function(t,s,e){e(25);var i=e(1)(e(14),e(42),null,null);t.exports=i.exports},function(t,s,e){e(23);var i=e(1)(e(15),e(40),null,null);t.exports=i.exports},function(t,s,e){e(22);var i=e(1)(e(16),e(39),null,null);t.exports=i.exports},function(t,s,e){e(21);var i=e(1)(e(17),e(38),null,null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.status?e("div",{staticClass:"weixin-service"},[e("h1",[t._v("下单请加微信客服"),e("span",{on:{click:function(s){t.hiddenLayer()}}},[t._v("×")])]),t._v(" "),e("p",[t._v("微信号：")]),t._v(" "),e("p",[t._v("Superme0009")]),t._v(" "),e("div")]):t._e()},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"swiper-container"},[e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.sliderList,function(t,s){return e("swiper-slide",{key:s},[e("img",{attrs:{src:t.url}})])}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.sliderList.length>1,expression:"sliderList.length >1"}],staticClass:"swiper-pagination",slot:"pagination"})],2)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"leftmenu-container"},[e("ul",{staticClass:"menu-lists"},t._l(t.kindsList,function(s,i){return e("li",{on:{mouseenter:function(s){t.showDetail(i)},mouseleave:function(s){t.hiddenDetail()}}},[e("h1",[t._v(t._s(s.title))]),t._v(" "),s.list.length>0?e("ul",{staticClass:"clearfix"},t._l(s.list,function(s,i){return i<6?e("li",[t._v(t._s(s))]):t._e()})):t._e()])})),t._v(" "),t.hoverStatus?e("div",{staticClass:"hover-layer",on:{mouseenter:function(s){t.changeStatus()},mouseleave:function(s){t.hiddenDetail()}}},[e("ul",t._l(t.hoverList,function(s,i){return e("li",[t._v(t._s(s))])}))]):t._e()])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",[e("div",{staticClass:"kinds"},[e("left-menu")],1),t._v(" "),e("div",{staticClass:"slider-container"},[e("slider")],1)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"top-logo clearfix"},[e("div",{staticClass:"logo-icon"}),t._v(" "),e("div",{staticClass:"search-content"},[e("div",{staticClass:"search-input"},[e("input",{attrs:{type:"search",placeholder:"可以模糊搜索哦，如：swisse 维生素 女"}}),t._v(" "),e("span",[t._v("搜索")]),t._v(" "),e("p",[t._v("热门搜索：爱他美 贝拉米 A2Ugg 护肝片 蔓越莓")])]),t._v(" "),e("div",{staticClass:"menu"},[e("ul",[e("li",[t._v("澳洲奶粉")]),t._v(" "),e("li",[t._v("母婴美食日用")]),t._v(" "),e("li",[t._v("澳新营养保健品")]),t._v(" "),e("li",[t._v("精选澳洲UGG")]),t._v(" "),e("li",[t._v("澳洲羊毛制品")]),t._v(" "),e("li",[t._v("生鲜红酒")]),t._v(" "),e("li",[t._v("美容护肤品")])])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),e("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("weixin"),t._v(" "),i("index-menu"),t._v(" "),i("div",{staticClass:"first-floor clearfix"},[i("div",{staticClass:"first-left"},[i("h1",[t._v("澳洲奶粉")]),t._v(" "),i("ul",t._l(t.indexData.arr,function(s,a){return i("li",[i("div",{staticClass:"first-left-title"},[i("h2",{class:{color2:0===a}},[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"first-left-img",attrs:{src:e(0)}})])}))]),t._v(" "),i("div",{staticClass:"first-right"},[i("h1",[t._v("母婴美食日用")]),t._v(" "),i("ul",{staticClass:"first-right-list1"},t._l(t.indexData.arr1,function(s,a){return a<3?i("li",[i("div",{staticClass:"first-right-title"},[i("h2",{class:{color2:0===a}},[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"first-left-img",attrs:{src:e(0)}})]):t._e()})),t._v(" "),i("ul",{staticClass:"first-right-list2"},t._l(t.indexData.arr1,function(s,a){return a>=3?i("li",[i("div",{staticClass:"first-right-title first-right-title2"},[i("h2",{class:{color2:0===a}},[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"first-left-img",attrs:{src:e(0)}})]):t._e()}))])]),t._v(" "),i("div",{staticClass:"second-floor clearfix"},[i("h1",[t._v("澳新营养保健品")]),t._v(" "),i("ul",t._l(t.indexData.arr2,function(s,a){return i("li",{class:{list:0===a}},[i("div",{staticClass:"list-title"},[i("h2",{class:{color2:0===a}},[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})])}))]),t._v(" "),i("div",{staticClass:"second-floor color3 clearfix"},[i("h1",[t._v("精选澳洲UGG")]),t._v(" "),i("ul",[t._l(t.indexData.arr3,function(s,a){return 0===a?i("li",{staticClass:"list"},[i("div",{staticClass:"list2-title"},[i("h2",{class:{color2:0===a}},[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})]):t._e()}),t._v(" "),t._l(t.indexData.arr3,function(s,a){return 1===a?i("li",{staticClass:"list2"},[i("ul",t._l(t.indexData.arr3,function(s,a){return 1===a||2===a?i("li",[i("div",{staticClass:"list2-title"},[i("h2",{class:{color2:0===a}},[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})]):t._e()}))]):t._e()}),t._v(" "),t._l(t.indexData.arr3,function(s,a){return a>=3?i("li",{class:{list:0===a||3===a}},[i("div",{staticClass:"list2-title"},[i("h2",{class:{color2:0===a}},[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})]):t._e()})],2)]),t._v(" "),i("div",{staticClass:"four-floor clearfix"},[i("div",{staticClass:"four-left"},[i("h1",[t._v("澳洲羊毛制品")]),t._v(" "),i("ul",t._l(t.indexData.arr4,function(s,a){return i("li",[i("div",{staticClass:"list3-title"},[i("h2",[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})])}))]),t._v(" "),i("div",{staticClass:"four-right"},[i("h1",[t._v("生鲜红酒")]),t._v(" "),i("ul",t._l(t.indexData.arr5,function(s,a){return i("li",[i("div",{staticClass:"list4-title"},[i("h2",[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})])}))])]),t._v(" "),i("div",{staticClass:"second-floor color5 clearfix"},[i("h1",[t._v("美容护肤品")]),t._v(" "),i("ul",[t._l(t.indexData.arr6,function(s,a){return 0===a?i("li",{staticClass:"list"},[i("div",{staticClass:"list5-title"},[i("h2",[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})]):t._e()}),t._v(" "),t._l(t.indexData.arr6,function(s,a){return 1===a?i("li",{staticClass:"list2"},[i("ul",t._l(t.indexData.arr6,function(s,l){return l===a||l===a+1?i("li",[i("div",{staticClass:"list5-title"},[i("h2",[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})]):t._e()}))]):t._e()}),t._v(" "),t._l(t.indexData.arr6,function(s,a){return 3===a?i("li",{staticClass:"list"},[i("div",{staticClass:"list5-title"},[i("h2",[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})]):t._e()}),t._v(" "),t._l(t.indexData.arr6,function(s,a){return 4===a?i("li",{staticClass:"list2"},[i("ul",t._l(t.indexData.arr6,function(s,l){return l===a||l===a+1?i("li",[i("div",{staticClass:"list5-title"},[i("h2",[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})]):t._e()}))]):t._e()}),t._v(" "),t._l(t.indexData.arr6,function(s,a){return 6===a?i("li",{staticClass:"list2"},[i("ul",t._l(t.indexData.arr6,function(s,l){return l===a||l===a+1?i("li",[i("div",{staticClass:"list5-title"},[i("h2",[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})]):t._e()}))]):t._e()}),t._v(" "),t._l(t.indexData.arr6,function(s,a){return 8===a?i("li",{staticClass:"list"},[i("div",{staticClass:"list5-title"},[i("h2",[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})]):t._e()}),t._v(" "),t._l(t.indexData.arr6,function(s,a){return 9===a?i("li",{staticClass:"list2"},[i("ul",t._l(t.indexData.arr6,function(s,l){return l===a||l===a+1?i("li",[i("div",{staticClass:"list5-title"},[i("h2",[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})]):t._e()}))]):t._e()}),t._v(" "),t._l(t.indexData.arr6,function(s,a){return 11===a||12===a?i("li",{staticClass:"list"},[i("div",{staticClass:"list5-title"},[i("h2",[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})]):t._e()}),t._v(" "),t._l(t.indexData.arr6,function(s,a){return a>12?i("li",[i("div",{staticClass:"list5-title"},[i("h2",[t._v(t._s(s.title))]),t._v(" "),i("h3",[t._v(t._s(s.subtitle))]),t._v(" "),i("h4",[t._v(t._s(s.desc))])]),t._v(" "),i("img",{staticClass:"list-img",attrs:{src:e(0)}})]):t._e()})],2)]),t._v(" "),t._m(0),t._v(" "),i("b-footer")],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip"},[e("div",{staticClass:"tip-left"},[e("p",[t._v("注册及下单流程：")]),t._v(" "),e("p",[t._v("请直接加客服微信询价下单")])]),t._v(" "),e("div",{staticClass:"tip-right"},[e("p",[t._v("备注：")]),t._v(" "),e("p",[t._v("1：客服微信号：Superme0009，公司电话：0731089440.地址：Unit 1/33-37 Rosedale St,Coopersplain.QLD Australia.")]),t._v(" "),e("p",[t._v("2：工作时间：每周7天营业，早上10点到晚上7点。工作时间以外下单，客服第二天上班会继续更进。")])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"footer-container"},[e("ul",{staticClass:"footer-list"},[e("li",[e("h1",[t._v("0731089440")]),t._v(" "),e("p",[t._v("周一至周日：10：00-19：00")]),t._v(" "),e("div",{staticClass:"footer-icon"},[t._v("关注我们")])]),t._v(" "),e("li",[e("h1",[t._v("常用服务")]),t._v(" "),e("ul",[e("li",[t._v("问题咨询")]),t._v(" "),e("li",[t._v("订单查询")]),t._v(" "),e("li",[t._v("保修退换货")])])]),t._v(" "),e("li",[e("h1",[t._v("购物联盟")]),t._v(" "),e("ul",[e("li",[t._v("怎么购物")]),t._v(" "),e("li",[t._v("积分查询")]),t._v(" "),e("li",[t._v("礼品卡介绍")])])]),t._v(" "),e("li",[e("h1",[t._v("付款条例")]),t._v(" "),e("ul",[e("li",[t._v("在线付款")]),t._v(" "),e("li",[t._v("货到付款")]),t._v(" "),e("li",[t._v("发票说明")])])]),e("li",[e("h1",[t._v("配送方式")]),t._v(" "),e("ul",[e("li",[t._v("易速快递")]),t._v(" "),e("li",[t._v("上门自提")]),t._v(" "),e("li",[t._v("价格保护")])])])]),t._v(" "),e("div",{staticClass:"copyright"},[t._v("版权所有@2017")])])}]}}],[18]);
//# sourceMappingURL=app.fa7ce679fd50d24290a8.js.map