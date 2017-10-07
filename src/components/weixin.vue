<template lang="html">
  <div v-if="status" class="weixin-service" >
  <h1>下单请加微信客服<span @click="hiddenLayer()">×</span></h1>
  <p>微信号：</p>
  <p>Superme0009</p>
  <div></div>
  </div>
</template>

<script>
export default {
  name: 'IndexMenu',
  data () {
    return {
    	status: true,
    }
  },
  methods:{
  	hiddenLayer(){
  		this.status=false;
  	}
  }
}
</script>

<style>
*{padding:0;margin:0;}
.weixin-service {
	position: fixed;
	right:20px;
	top:35%;
	z-index:10;
	border:1px solid #b51419;
	background: #fff;
}
.weixin-service h1{
	width:100%;
	font-size: 14px;
	line-height: 30px;
	text-align: left;
	text-indent: 10px;
	color:#fff;
	background-color: #b51419;
}
.weixin-service span{
	float:right;
	width:30px;
	height: 30px;
	font-size: 25px;
	text-indent: 0;
	text-align: center;
	color:#fff;
	cursor: default;
}
.weixin-service p{
	font-size: 22px;
	line-height: 35px;
}
.weixin-service div{
	width: 225px;
	height: 225px;
	background: url(../assets/images/weixin.png)center no-repeat;
	background-size: contain;

}

</style>
