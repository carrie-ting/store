<template lang="html">
  <div class="container">
  <weixin></weixin>
    <div class="top-logo clearfix">
      <div class="logo-icon" @click="toIndex()"></div>
      <div class="search-content">
        <div class="search-input">
          <input type="search" placeholder="可以模糊搜索哦，如：swisse 维生素 女">
          <span>搜索</span>
          <p>热门搜索：爱他美 贝拉米 A2Ugg 护肝片 蔓越莓</p>
        </div>
        <b-menu></b-menu>
      </div>
    </div>
    <div>
      <div class="kinds">
        <left-menu></left-menu>
      </div>
      <div class="prolist-container">
        <list-info></list-info>
      </div>
    </div>
    <b-footer></b-footer>
  </div>
</template>

<script>
import BFooter from './BFooter';
import LeftMenu from './LeftMenu';
import listInfo from './listInfo';
import weixin from './weixin';
import BMenu from './BMenu';
export default {
  name: 'IndexMenu',
  data () {
    return {

    }
  },
  methods:{
    toIndex(){
      this.$router.push({
        path: '/'
      });
    }
  },
  components:{
    BFooter,
    LeftMenu,
    listInfo,
    weixin,
    BMenu
  }
}
</script>

<style>
*{padding:0;margin:0;}
.container {
  width: 1200px;
  margin: 0 auto;
}
.top-logo{
  width:100%;
}
.logo-icon{
  float: left;
  width: 225px;
  height: 150px;
  background: url(../assets/images/logo.png)center no-repeat;
  background-size: contain;
}
.search-content{
  width:100%;
  padding-left:300px;
  box-sizing: border-box;
}
.search-input{
  position: relative;
  height: 100px;
}
.search-input input {
  margin-top:20px;
  padding: 4px;
  width: 490px;
  height: 35px;
  border: 1px solid #f10215;
  line-height: 35px;
  font-size: 14px;
  color: #989898;
}
.search-input span{
  position: absolute;
  top: 20px;
  width: 50px;
  height: 35px;
  color: #fff;
  line-height: 35px;
  font-size: 14px;
  background-color: #f10215;
}
.search-input p{
  width: 490px;
  font-size: 12px;
  text-align: left;
  margin: 10px auto 0 auto;
}
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
.kinds{
  float: left;
}

.prolist-container{
  width:100%;
  padding-left: 225px;
  box-sizing: border-box;
}

</style>
