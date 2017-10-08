<template lang="html">
  <div class="container">
    <weixin></weixin>
    <index-menu></index-menu>
	<div class="first-floor clearfix">
		<div class="first-left">
			<h1>澳洲奶粉</h1>
			<ul>
				<li v-for="(item,index) in indexData.arr" @click="toList()">
					<div class="first-left-title">
						<h2 :class="{'color2':index===0}">{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
					<!-- <img src="../../src/assets/images/01.png" class="first-left-img"> -->
				</li>
			</ul>
		</div>
		<div class="first-right">
			<h1>母婴美食日用</h1>
			<ul class="first-right-list1">
				<li v-for="(item,index) in indexData.arr1" v-if="index<3" @click="toList()">
					<div class="first-right-title">
						<h2 :class="{'color2':index===0}">{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
				</li>
			</ul>
			<ul class="first-right-list2">
				<li v-for="(item,index) in indexData.arr1" v-if="index>=3" @click="toList()">
					<div class="first-right-title first-right-title2">
						<h2 :class="{'color2':index===0}">{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
				</li>
			</ul>
		</div>
	</div>
	<div class="second-floor clearfix">
		<h1>澳新营养保健品</h1>
		<ul>
			<li :class="{'list':index===0}" v-for="(item,index) in indexData.arr2" @click="toList()">
					<div class="list-title">
						<h2 :class="{'color2':index===0}">{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
				</li>
		</ul>
	</div>
	<div class="second-floor color3 clearfix">
		<h1>精选澳洲UGG</h1>
		<ul>
			<li class="list" v-for="(item,index) in indexData.arr3" v-if="index===0" @click="toList()">
					<div class="list2-title">
						<h2 :class="{'color2':index===0}">{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
				</li>
			<li class="list2" v-for="(item,index) in indexData.arr3" v-if="index===1">
				<ul>
					<li v-for="(item,index) in indexData.arr3" v-if="index===1|| index===2" @click="toList()">
						<div class="list2-title">
						<h2 :class="{'color2':index===0}">{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
					</li>
				</ul>
			</li>
			<li :class="{'list':(index===0 ||index===3)}" v-for="(item,index) in indexData.arr3" v-if="index>=3" @click="toList()">
					<div class="list2-title">
						<h2 :class="{'color2':index===0}">{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
				</li>
		</ul>
	</div>
	<div class="four-floor clearfix">
		<div class="four-left">
			<h1>澳洲羊毛制品</h1>
			<ul>
				<li v-for="(item,index) in indexData.arr4" @click="toList()">
					<div class="list3-title">
						<h2>{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
				</li>
			</ul>
		</div>
		<div class="four-right">
			<h1>生鲜红酒</h1>
			<ul>
				<li v-for="(item,index) in indexData.arr5" @click="toList()">
					<div class="list4-title">
						<h2>{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
				</li>
			</ul>
		</div>
	</div>
	<div class="second-floor color5 clearfix">
		<h1>美容护肤品</h1>
		<ul>
			<li class="list" v-for="(item,index) in indexData.arr6" v-if="index===0" @click="toList()">
					<div class="list5-title">
						<h2>{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
				</li>
			<li class="list2" v-for="(item,index) in indexData.arr6" v-if="index===1">
				<ul>
					<li v-for="(item,option) in indexData.arr6" v-if="option===index|| option===index+1" @click="toList()">
						<div class="list5-title">
						<h2>{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
					</li>
				</ul>
			</li>
			<li class="list" v-for="(item,index) in indexData.arr6" v-if="index===3" @click="toList()">
					<div class="list5-title">
						<h2>{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
			</li>
			<li class="list2" v-for="(item,index) in indexData.arr6" v-if="index===4">
				<ul>
					<li v-for="(item,option) in indexData.arr6" v-if="option===index|| option===index+1" @click="toList()">
						<div class="list5-title">
						<h2>{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
					</li>
				</ul>
			</li>
			<li class="list2" v-for="(item,index) in indexData.arr6" v-if="index===6">
				<ul>
					<li v-for="(item,option) in indexData.arr6" v-if="option===index|| option===index+1" @click="toList()">
						<div class="list5-title">
						<h2>{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
					</li>
				</ul>
			</li>
			<li class="list" v-for="(item,index) in indexData.arr6" v-if="index===8" @click="toList()">
					<div class="list5-title">
						<h2>{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
			</li>
			<li class="list2" v-for="(item,index) in indexData.arr6" v-if="index===9">
				<ul>
					<li v-for="(item,option) in indexData.arr6" v-if="option===index|| option===index+1" @click="toList()">
						<div class="list5-title">
						<h2>{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
					</li>
				</ul>
			</li>
			<li class="list" v-for="(item,index) in indexData.arr6" v-if="index===11 ||index===12" @click="toList()">
					<div class="list5-title">
						<h2>{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
			</li>
			<li v-for="(item,index) in indexData.arr6" v-if="index>12" @click="toList()">
					<div class="list5-title">
						<h2>{{item.title}}</h2>
						<h3>{{item.subtitle}}</h3>
						<h4>{{item.desc}}</h4>
					</div>
					<img :src="item.img" class="first-left-img">
				</li>
		</ul>
	</div>
    <div class="tip">
        <div class="tip-left">
            <p>注册及下单流程：</p>
            <p>请直接加客服微信询价下单</p>
        </div>
        <div class="tip-right">
            <p>备注：</p>
            <p>1：客服微信号：Superme0009，公司电话：0731089440.地址：Unit 1/33-37 Rosedale St,Coopersplain.QLD Australia.</p>
            <p>2：工作时间：每周7天营业，早上10点到晚上7点。工作时间以外下单，客服第二天上班会继续更进。</p>
        </div>
    </div>
    <b-footer></b-footer>
  </div>
</template>

<script>
import BFooter from './BFooter';
import IndexMenu from './IndexMenu';
import weixin from './weixin';
export default {
  name: 'index',
  data () {
    return {
    	indexData:{
    		arr:[
    		{
    			title:'儿童成人奶粉',
    			subtitle:'ADULT CHILDREN',
    			desc:'特价包邮包税',
    			img:'static/img/index/01.png'
    		},{
    			title:'婴幼儿奶粉',
    			subtitle:'BABY FORMULA',
    			desc:'特价包邮包税',
    			img:'static/img/index/02.png'
    		}],
    		arr1:[
    		{
    			title:'澳新食品',
    			subtitle:'FOOD & SNACKS',
    			desc:'',
    			img:'static/img/index/11.png'
    		},{
    			title:'日用百货',
    			subtitle:'GROCERY',
    			desc:'',
    			img:'static/img/index/12.png'
    		},{
    			title:'宝宝保健',
    			subtitle:'BABY CARE',
    			desc:'',
    			img:'static/img/index/13.png'
    		},{
    			title:'孕产妇必备',
    			subtitle:'PROGANT CARE',
    			desc:'',
    			img:'static/img/index/14.png'
    		},{
    			title:'宝宝日用',
    			subtitle:'BABY GROCERY',
    			desc:'',
    			img:'static/img/index/15.png'
    		}],
    		arr2:[
    		{
    			title:'美体塑身',
    			subtitle:'FITNESS',
    			desc:'',
    			img:'static/img/index/21.png'
    		},{
    			title:'抗老美容',
    			subtitle:'ANTI-AGING AND BEAUTY',
    			desc:'',
    			img:'static/img/index/22.png'
    		},{
    			title:'女性养护',
    			subtitle:'WOMEN HEALTH',
    			desc:'',
    			img:'static/img/index/23.png'
    		},{
    			title:'澳新神物',
    			subtitle:'BABY FORMULA',
    			desc:'',
    			img:'static/img/index/24.png'
    		},{
    			title:'麦卢卡蜂蜜',
    			subtitle:'MANUKA HONEY',
    			desc:'',
    			img:'static/img/index/25.png'
    		},{
    			title:'明目健脑',
    			subtitle:'EYE CARE & BRAIN CARE',
    			desc:'',
    			img:'static/img/index/26.png'
    		},{
    			title:'保肺止咳',
    			subtitle:'LUNG CARE & ANTI-CCUGH',
    			desc:'',
    			img:'static/img/index/27.png'
    		},{
    			title:'日常保健',
    			subtitle:'HEALTH FOOD',
    			desc:'',
    			img:'static/img/index/28.png'
    		},{
    			title:'补钙强体',
    			subtitle:'STRENGTH & PERFCRMANCE',
    			desc:'',
    			img:'static/img/index/29.png'
    		},{
    			title:'肠胃通便',
    			subtitle:'GUT CARE',
    			desc:'',
    			img:'static/img/index/29_1.png'
    		},{
    			title:'蜂蜜衍生品',
    			subtitle:'HONEY PRODUCT',
    			desc:'',
    			img:'static/img/index/29_2.png'
    		}],
            arr3:[
    		{
    			title:'新款抢先看',
    			subtitle:'THE NEW',
    			desc:'',
    			img:'static/img/index/31.png'
    		},{
    			title:'清仓特价款',
    			subtitle:'SALE',
    			desc:'',
    			img:'static/img/index/32.png'
    		},{
    			title:'OZLANA UGG',
    			subtitle:'OZLANA UGG',
    			desc:'',
    			img:'static/img/index/33.png'
    		},{
    			title:'OZWEAR UGG',
    			subtitle:'OZWEAR UGG',
    			desc:'',
    			img:'static/img/index/34.png'
    		},{
    			title:'AS UGG',
    			subtitle:'AS UGG',
    			desc:'',
    			img:'static/img/index/35.png'
    		},{
    			title:'AXA UGG',
    			subtitle:'AXA UGG',
    			desc:'',
    			img:'static/img/index/36.png'
    		},{
    			title:'春夏款系列',
    			subtitle:'SPRING & SUMMER',
    			desc:'',
    			img:'static/img/index/37.png'
    		},{
    			title:'时尚美靴',
    			subtitle:'BEAUTIFUL BOOTS',
    			desc:'',
    			img:'static/img/index/38.png'
    		},{
    			title:'豆豆鞋 家居鞋',
    			subtitle:'DOUG SHOES & HOUSEHOLD SHOES',
    			desc:'',
    			img:'static/img/index/39.png'
    		},{
    			title:'AUSTRALIAN',
    			subtitle:'AUSTRALIAN',
    			desc:'',
    			img:'static/img/index/39_1.png'
    		},{
    			title:'OZLAMB UGG',
    			subtitle:'OZLAMB UGG',
    			desc:'',
    			img:'static/img/index/39_2.png'
    		},{
    			title:'AC&BULE',
    			subtitle:'AC&BULE',
    			desc:'',
    			img:'static/img/index/39_3.png'
    		},{
    			title:'PACIFIC UGG',
    			subtitle:'PACIFIC UGG',
    			desc:'',
    			img:'static/img/index/39_4.png'
    		},{
    			title:'D2C UGG',
    			subtitle:'D2C UGG',
    			desc:'',
    			img:'static/img/index/39_5.png'
    		}],
    		arr4:[
    		{
    			title:'羊毛被/褥子/羊毛毯',
    			subtitle:'',
    			desc:'',
    			img:'static/img/index/41.png'
    		},{
    			title:'羊毛垫 羊毛包',
    			subtitle:'WOOL BAG',
    			desc:'',
    			img:'static/img/index/42.png'
    		},{
    			title:'羊皮手套',
    			subtitle:'WOOL GLOVES',
    			desc:'',
    			img:'static/img/index/43.png'
    		},{
    			title:'羊毛羊绒围巾',
    			subtitle:'WOOL SCARF',
    			desc:'',
    			img:'static/img/index/44.png'
    		}],
    		arr5:[
    		{
    			title:'生鲜水果',
    			subtitle: 'FRUIT',
    			desc:'',
    			img:'static/img/index/51.png'
    		},{
    			title:'生鲜肉类',
    			subtitle:'MEAT',
    			desc:'',
    			img:'static/img/index/52.png'
    		},{
    			title:'生鲜海鲜',
    			subtitle:'SEAFOOD',
    			desc:'',
    			img:'static/img/index/53.png'
    		},{
    			title:'生鲜套餐',
    			subtitle:'SET',
    			desc:'',
    			img:'static/img/index/54.png'
    		}],
    		arr6:[
    		{
    			title:'脸部护肤',
    			subtitle: 'FACIAL',
    			desc:'',
    			img:'static/img/index/61.png'
    		},{
    			title:'日常洗护',
    			subtitle:'PERSONAL CARE',
    			desc:'',
    			img:'static/img/index/62.png'
    		},{
    			title:'卸妆洁面',
    			subtitle:'DISCHARGE MAKEUP CLEAN FACE',
    			desc:'',
    			img:'static/img/index/63.png'
    		},{
    			title:'爽肤水',
    			subtitle:'TONER',
    			desc:'',
    			img:'static/img/index/64.png'
    		},{
    			title:'精华类',
    			subtitle:'ESSENCE',
    			desc:'',
    			img:'static/img/index/65.png'
    		},{
    			title:'面霜乳液',
    			subtitle:'CREAM LOTION',
    			desc:'',
    			img:'static/img/index/66.png'
    		},{
    			title:'眼部护理',
    			subtitle:'EYE CARE',
    			desc:'',
    			img:'static/img/index/67.png'
    		},{
    			title:'面膜类',
    			subtitle:'MASK',
    			desc:'',
    			img:'static/img/index/68.png'
    		},{
    			title:'功能类',
    			subtitle:'FUNCTION',
    			desc:'',
    			img:'static/img/index/69.png'
    		},{
    			title:'洗发护发',
    			subtitle:'HAIR CARE',
    			desc:'',
    			img:'static/img/index/69_1.png'
    		},{
    			title:'身体护理',
    			subtitle:'BODY CARE',
    			desc:'',
    			img:'static/img/index/69_2.png'
    		},{
    			title:'清洁皂类',
    			subtitle:'TOILET SOAP',
    			desc:'',
    			img:'static/img/index/69_3.png'
    		},{
    			title:'牙齿护理',
    			subtitle:'DENTAL',
    			desc:'',
    			img:'static/img/index/69_4.png'
    		},{
    			title:'牙齿美白',
    			subtitle:'TEETH WHITENING',
    			desc:'',
    			img:'static/img/index/69_5.png'
    		},{
    			title:'儿童系列',
    			subtitle:`CHILDREN'S SERIES`,
    			desc:'',
    			img:'static/img/index/69_6.png'
    		},{
    			title:'防晒',
    			subtitle:'SUNSCREEN',
    			desc:'',
    			img:'static/img/index/69_7.png'
    		},{
    			title:'晒后修复',
    			subtitle:'AFTER SUN REPAIR',
    			desc:'',
    			img:'static/img/index/69_8.png'
    		},{
    			title:'熏香类',
    			subtitle:'INCENSE',
    			desc:'',
    			img:'static/img/index/69_9.png'
    		},{
    			title:'特殊功效',
    			subtitle:'SPECIAL EFFECT',
    			desc:'',
    			img:'static/img/index/69_10.png'
    		}]
    	}
    }
  },
  methods: {
    toList(){
        this.$router.push({
            path: '/list'
        })
    }
  },
  components:{
    BFooter,
    IndexMenu,
    weixin
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
.clearfix:after {
    display: block;
    visibility: hidden;
    font-size: 0;
    clear: both;
    width: 0;
    height: 0;
    content: '.';
}
.container {
	width: 1200px;
	margin: 0 auto;
}
ul,li{
    list-style: none;
}
.first-floor{
    background: #fff;
}

.first-left{
    float: left;
    width: 49%;
}
.first-left h1{
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 18px;
    text-align: left;
    text-indent: 25px;
    background-color: #d56b74;
}
.first-left ul{
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 380px;
}
.first-left ul li{
    position: relative;
    margin: 10px;
    flex: 1;
    background-color: #faf5fb;
}
.first-left-title {
    position: absolute;
    top:0;
    left:0;
    z-index:2;
    padding: 20px 5px 0px 25px;
}
.first-left-title h2 {
    text-align: left;
    color: #e77551;
}
.first-left-title .color2{
    color: #75873d;
}
.first-left-title h3 {
    text-align: left;
    color: #f0b5a6;
}
.first-left-title h4 {
    text-align: left;
    color: #e77551;
}
.first-right-title {
    position: absolute;
    top:0;
    left:0;
    z-index:2;
    padding: 20px 5px 0px 25px;
}
.title2 {
    padding: 10px 5px 0px 15px;
}
.first-right-title h2 {
    text-align: left;
    color: #e6b849;
}
.first-right-title .color2{
    color: #e6b849;
}
.first-right-title h3 {
    text-align: left;
    color: #eed7a0;
}
.first-right-title h4 {
    text-align: left;
    color: #e6b849;
}
.first-left-img{
    position: absolute;
    bottom:0;
    right: 0;
    z-index:1;
    max-width: 100%;
    max-height: 100%;
}

.color3 li .first-left-img {
    max-width: 70%;
    max-height: 70%;
}
.color3 .list .first-left-img{
    max-width: 100%;
    max-height: 100%;
}.color3 .list2 .first-left-img{
    max-width: 100%;
    max-height: 100%;
}
.four-left .first-left-img{
    max-width: 80%;
    max-height: 80%;
}.four-right .first-left-img{
    max-width: 80%;
    max-height: 80%;
}
.list-title {
    position: absolute;
    top:0;
    left:0;
    z-index:2;
    padding: 20px 5px 0px 25px;
}
.list-title h2 {
    text-align: left;
    color: #75873d;
}
.list-title h3 {
    text-align: left;
    color: #b6bf9a;
}
.list-title h4 {
    text-align: left;
    color: #75873d;
}
.list2-title {
    position: absolute;
    top:0;
    left:0;
    z-index:2;
    padding: 20px 5px 0px 25px;
}
.list2-title h2 {
    text-align: left;
    color: #986545;
}
.list2-title h3 {
    text-align: left;
    color: #c7ae9e;
}
.list2-title h4 {
    text-align: left;
    color: #986545;
}.list3-title {
    position: absolute;
    top:0;
    left:0;
    z-index:2;
    padding: 20px 5px 0px 25px;
}
.list3-title h2 {
    text-align: left;
    color: #8e4b74;
}
.list3-title h3 {
    text-align: left;
    color: #c3a0b6;
}
.list3-title h4 {
    text-align: left;
    color: #8e4b74;
}.list4-title {
    position: absolute;
    top:0;
    left:0;
    z-index:2;
    padding: 20px 5px 0px 25px;
}
.list4-title h2 {
    text-align: left;
    color: #8e4b74;
}
.list4-title h3 {
    text-align: left;
    color: #c3a0b6;
}
.list4-title h4 {
    text-align: left;
    color: #8e4b74;
}.list5-title {
    position: absolute;
    top:0;
    left:0;
    z-index:2;
    padding: 20px 5px 0px 25px;
}
.list5-title h2 {
    text-align: left;
    color: #bb425a;
}
.list5-title h3 {
    text-align: left;
    color: #da9baa;
}
.list5-title h4 {
    text-align: left;
    color: #bb425a;
}
.list-img{
    // display: block;
    position: absolute;
    bottom:0;
    right: 0;
    max-width: 100%;
    max-height: 60%;
}


.first-right{
    float: right;
    width: 49%;
}
.first-right h1{
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 18px;
    text-align: left;
    text-indent: 25px;
    background-color: #e6b849;
}
.first-right .first-right-list1{
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 270px;
}
.first-right .first-right-list1 li{
    position: relative;
    flex:1;
    margin:10px;
    background-color: #faf5fb;
}
.first-right .first-right-list2{
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 110px;
}
.first-right .first-right-list2 li {
    position: relative;
    flex:1;
    margin: 10px;
    border: 1px solid #faf5fb;
}



.second-floor{
    width: 100%;
    margin-bottom: 30px;
}

.second-floor h1{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    color: #fff;
    text-indent: 25px;
    text-align: left;
    background-color: #75873d;
}
.color3 h1{
    background-color: #986545;
}
.second-floor ul{
}
.second-floor ul li{
    position: relative;
    float: left;
    background-color: #faf5fb;
    width: 280px;
    height: 185px;
    margin-left: 15px;
    margin-top: 15px;
}
.second-floor ul .list{
    width: 280px;
    height: 385px;
    margin-left: 15px;
    margin-top: 15px;
}
.second-floor ul .list2{
    width: 280px;
    height: 385px;
    margin-left: 15px;
    margin-top: 15px;
    background-color: #fff;
}
.list2 ul li {
    width: 100%;
    height: 185px;
    margin: 0 0 15px 0;
}

.four-floor {
    width: 100%;
    margin-bottom: 30px;
}
.four-left{
    float: left;
    width: 49%;
}
.four-left h1{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    color: #fff;
    text-indent: 25px;
    text-align: left;
    background-color: #8e4b74;
}
.four-right {
    float: right;
    width: 49%;
}
.four-right h1{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    color: #fff;
    text-indent: 25px;
    text-align: left;
    background-color: #6c5086;
}
.four-floor ul li{
    position: relative;
    float: left;
    background-color: #faf5fb;
    width: 280px;
    height: 185px;
    margin-left: 10px;
    margin-top: 15px;
}
.color5 h1{
    background-color: #bb425a;
}


.tip{
    width: 100%;
    height: 100px;
    padding-top:30px;
    margin-top:50px;
    border-top: 1px solid #f4f4f4;
}
.tip p{
    color: #333;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    text-indent: 25px;
}
.tip-left{
    float: left;
    width:49%;
    margin-right:2%;
}
.tip-right{
    float: right;
    width: 49%;
}













</style>
