<template>
	<div class="listinfo-container">
		<div class="lists">
			<ul>
				<li v-for="(item,index) in listInfo" @click="toDetail()">
					<div class="pro-img">
						<img :src="item.url">
					</div>
					<p class="desc">{{item.desc}}</p>
					<div class="price">带走价：${{item.price}}</div>
					<div class="sub_price">代发价：${{item.sub_price}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'listInfo',
		data(){
			return{
				listInfo:[
				{
					url:'http://9721813.s21i-9.faiusr.com/4/ABUIABAEGAAguobZugUoqIu0ODCsAjisAg!160x160.png',
					desc:'3罐包邮 bellamy贝拉米二段婴儿有机奶粉',
					price: 20,
					sub_price: 27.5,
				}]
			}
		},
		methods:{
			toDetail(){
				this.$router.push({
					path:'/detail'
				})
			}
		}
	}
</script>
<style>
	.listinfo-container{
		/*width: 100%;*/
		min-height: 500px;
		padding: 10px;
		margin-bottom: 20px;
		margin-left:75px;
		border: 1px solid #f4f4f4;
		box-sizing: border-box;
	}
	.lists ul{
		display: flex;
		display: -webkit-flex;
		justify-content: space-left;
	}
	.lists ul li{
		width: 23%;
		padding:10px;
		box-sizing: border-box;
		border: 1px solid #f4f4f4;
		margin: 0 1% 10px 1%;
	}
	.pro-img{
		width: 100%;
		height: 200px;
		margin-bottom: 10px;
	}
	.pro-img img{
		display: block;
		width:100%;
		height: 100%;
	}
	.lists .desc{
		margin-bottom: 10px;
		font-size: 12px;
		color: #999;
	}
	.lists .price{
		font-size: 12px;
		color: #999;
		text-decoration: line-through;
	}
	.lists .sub_price{
		font-size: 14px;
		color: #f10214;
	}
</style>