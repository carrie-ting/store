<template>
	<div class="leftmenu-container">
		<ul class="menu-lists">
			<li @mouseenter="showDetail(index)" @mouseleave="hiddenDetail()" v-for="(item, index) in kindsList">
				<h1>{{item.title}}</h1>
				<ul v-if="item.list.length>0" class="clearfix">
					<li v-for="(item,index) in item.list" v-if="index<6">{{item}}</li>
				</ul>
			</li>
		</ul>
		<div @mouseenter="changeStatus()" @mouseleave="hiddenDetail()" v-if="hoverStatus" class="hover-layer">
			<ul>
				<li v-for="(item,index) in hoverList">{{item}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'LeftMenu',
		data(){
			return{
				hoverStatus: false,
				hoverList:[],
				kindsList:[
				{
					title:'澳洲奶粉',
					list:['儿童成人奶粉','婴幼儿奶粉']
				},{
					title:'母婴美食日用',
					list:['澳新食品','日用百货','宝宝保健','孕产妇必备','宝宝日用']
				},{
					title:'澳新营养保健品',
					list:['美体塑身','抗老美容','女性养护','澳新神物','麦卢卡蜂蜜','明目健脑','保肺止咳','日常保健','补钙强体','肠胃通便','蜂蜜衍生品']
				},{
					title:'精选澳洲UGG',
					list:['新款抢先看','清仓特价款','OZLANA UGG','OZWEAR UGG','AS UGG','AXA UGG','春夏款系列','时尚美靴','豆豆鞋 家居鞋','AUSTRALIAN','OZLAMB UGG','AC&BULE','PACIFIC UGG','D2C UGG']
				},{
					title:'澳洲羊毛制品',
					list:['羊毛被/褥子/羊毛毯','羊毛垫 羊毛包','羊皮手套','羊毛羊绒围巾']
				},{
					title:'生鲜红酒',
					list:['生鲜水果','生鲜肉类','生鲜海鲜','生鲜套餐']
				},{
					title:'美容护肤品',
					list:['脸部护肤','日常洗护','卸妆洁面','爽肤水','精华类','面霜乳液','眼部护理','面膜类','功能类','洗发护发','身体护理','清洁皂类','牙齿护理','牙齿美白','晒后修复','儿童系列','熏香类','防晒','特殊功效']
				}]
			}
		},
		methods:{
			showDetail(index){
				this.hoverStatus =true;
				this.hoverList = this.kindsList[index].list;
			},
			changeStatus(){
				this.hoverStatus =true;
			},
			hiddenDetail(){
				this.hoverStatus =false;
			}
		}
	}
</script>
<style>
	.hover-layer {
		position: absolute;
		top: 0;
		left: 225px;
		z-index:10;
		width: 300px;
		height: 500px;
		line-height: 30px;
		padding: 20px 10px 0 30px;
		color: #333;
		font-size: 12px;
		box-sizing: border-box;
		border: 1px solid #f7f7f7;
	    background-color: #f7f7f7;
	    box-shadow: 2px 0 5px rgba(0,0,0,.3);
	    -webkit-transition: top .25s ease;
	    transition: top .25s ease;
	}
	.hover-layer ul li{
		float: left;
		width: 110px;
		max-height: 60px;
		margin-right: 10px;
		text-indent: 0;
	}
	.leftmenu-container{
		position: relative;
		width: 225px;
		height: 500px;
		color: #fff;
		text-align: left;
		text-indent: 20px;
		background-color: #6e6568;
	}
	.menu-lists {
		padding: 10px 0;
	}
	.menu-lists li{
		font-size: 14px;
		cursor: default;
	}
	.menu-lists li:hover{
		background-color: #999395;
	}
	.menu-lists li h1{
		font-size: 16px;
	}
	.menu-lists li h1:hover{
		color: #c81623;
	}
	.menu-lists li ul{
		margin-left:25px;
	}
	.menu-lists li ul li{
		float: left;
		text-indent: 0;
		margin-right:5px;
	}
</style>