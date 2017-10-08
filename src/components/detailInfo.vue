<template>
	<div>
		<div class="detail-info clearfix">
			<div class="info-left">
				<div class="info-img">
					<img :src="detailInfo.url">
				</div>
			</div>
			<div class="info-right">
				<h1>{{detailInfo.desc}}</h1>
				<p class="price">带走价：${{detailInfo.price}}</p>
				<p class="sub_price">代发价：${{detailInfo.sub_price}}</p>
			</div>
		</div>
		<div class="detail-content">
			<h1>产品详情</h1>
			<ul>
				<li v-for="(item, index) in detailInfo.imgList">
					<img :src="item.url">
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'detailInfo',
		data(){
			return{
				detailInfo:{
					url:'http://9721813.s21i-9.faiusr.com/4/ABUIABAEGAAguobZugUoqIu0ODCsAjisAg!160x160.png',
					desc:'3罐包邮 bellamy贝拉米二段婴儿有机奶粉',
					price: 20,
					sub_price: 27.5,
					imgList:[{
						url:'http://9721813.s21i-9.faiusr.com/4/ABUIABAEGAAgyYbZugUooPLh_AYwlgY4rwc.png'
					},{
						url:'http://9721813.s21i-9.faiusr.com/4/ABUIABAEGAAgzIbZugUogerCxQYwlgY4_AI.png'
					},{
						url:'http://9721813.s21i-9.faiusr.com/4/ABUIABAEGAAgsofZugUonuzSjAMwlgY4ugc.png'
					},{
						url:'http://9721813.s21i-9.faiusr.com/4/ABUIABAEGAAg04bZugUonIqUkAQwlgY4oQU.png'
					},{
						url:'http://9721813.s21i-9.faiusr.com/4/ABUIABAEGAAg1obZugUo6cy2mgEwlgY4mQc.png'
					},{
						url:'http://9721813.s21i-9.faiusr.com/4/ABUIABAEGAAg2YbZugUovob_yAQwlgY4rQQ.png'
					},{
						url:'http://9721813.s21i-9.faiusr.com/4/ABUIABAEGAAg3IbZugUog_agTjCWBjiXBA.png'
					},{
						url:'http://9721813.s21i-9.faiusr.com/4/ABUIABAEGAAgwYfZugUo_Na9vgMwlgY43wM.png'
					},{
						url:'http://9721813.s21i-9.faiusr.com/4/ABUIABAEGAAg4YbZugUoqIfDrwIwlgY4hQM.png'
					},{
						url:'http://9721813.s21i-9.faiusr.com/4/ABUIABAEGAAgxofZugUohabGUjCWBjj9Aw.png'
					}]
				}
			}
		},
		methods:{
			
		}
	}
</script>
<style>
	.detail-info {
		width: 100%;
		padding-left: 75px;
		padding-top:50px;
		box-sizing: border-box;
	}
	.info-left{
		float: left;
		width: 300px;
	}
	.info-left .info-img{
		width: 300px;
		height: 300px;
	}
	.info-left .info-img img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.info-right{
		float: left;
		margin-left:50px;
		padding-top:50px;
	}
	.info-right p{
		text-align: left;
		text-indent: 35px;
	}
	.info-right .price{
		font-size: 12px;
		color: #999;
		text-decoration: line-through;
	}
	.info-right .sub_price{
		font-size: 14px;
		color: #f10214;
	}
	.info-right h1{
		text-align: left;
		font-size: 18px;
		margin-bottom:10px;
	}
	.detail-content{
		width: 100%;

	}
	.detail-content h1{
		margin-top:10px;
		padding:10px;
		font-size: 18px;
		text-align: left;
		border-bottom: 1px solid #f4f4f4;
	}
	.detail-content li{
		width: 100%;
	}
	.detail-content li img{
		display: block;
		width: 100%;
	}
</style>