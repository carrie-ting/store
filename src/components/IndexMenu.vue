<template lang="html">
  <div class="container">
    <div class="top-logo clearfix">
      <div class="logo-icon"></div>
      <div class="search-content">
        <div class="search-input">
          <input type="search" placeholder="可以模糊搜索哦，如：swisse 维生素 女">
          <span>搜索</span>
          <p>热门搜索：爱他美 贝拉米 A2Ugg 护肝片 蔓越莓</p>
        </div>
        <div class="menu">
          <ul>
            <li>澳洲奶粉</li>
            <li>母婴美食日用</li>
            <li>澳新营养保健品</li>
            <li>精选澳洲UGG</li>
            <li>澳洲羊毛制品</li>
            <li>生鲜红酒</li>
            <li>美容护肤品</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <div class="kinds">
        <left-menu></left-menu>
      </div>
      <div class="slider-container">
        <slider></slider>
      </div>
    </div>
  </div>
</template>

<script>
import slider from './slider';
import LeftMenu from './LeftMenu';
export default {
  name: 'IndexMenu',
  data () {
    return {

    }
  },
  components:{
    LeftMenu,
    slider
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

.slider-container{
  width:100%;
  height: 500px;
  margin-bottom: 10px;
  padding-left: 225px;
  box-sizing: border-box;
}

</style>
