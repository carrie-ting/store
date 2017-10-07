<template>
	<div class="menu">
		<ul>
      <!-- <li>首页</li> -->
      <li v-for="(item,index) in menuList" @click="toList()">{{item}}</li>
    </ul>
	</div>
</template>
<script>
	export default{
		name: 'menu',
		data(){
			return{
        menuList:['澳洲奶粉','母婴美食日用','澳新营养保健品','精选澳洲UGG','澳洲羊毛制品','生鲜红酒','美容护肤品']
			}
		},
		methods:{
      toList(){
        this.$router.push({
            path: '/list'
        })
    }
		}
	}
</script>
<style>
	.menu ul{
  display: flex;
  display:-webkit-flex;
  width: 100%;
}
.menu ul li {
  flex:1;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: 700;
  color: #555;
}
.menu ul li:hover{
  background-color: #f10215;
  color: #fff;
}
</style>