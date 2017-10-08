<template lang="html">
  <div class="footer-container">
  <ul class="footer-list">
    <li>
      <h1>0731089440</h1>
      <p>周一至周日：10：00-19：00</p>
      <div class="footer-icon">关注我们</div>
    </li>
    <li>
      <h1>常用服务</h1>
      <ul>
        <li>问题咨询</li>
        <li>订单查询</li>
        <li>保修退换货</li>
      </ul>
    </li>
    <li>
      <h1>购物联盟</h1>
      <ul>
        <li>怎么购物</li>
        <li>积分查询</li>
        <li>礼品卡介绍</li>
      </ul>
    </li>
    <li>
      <h1>付款条例</h1>
      <ul>
        <li>在线付款</li>
        <li>货到付款</li>
        <li>发票说明</li>
      </ul>
    </li><li>
      <h1>配送方式</h1>
      <ul>
        <li>易速快递</li>
        <li>上门自提</li>
        <li>价格保护</li>
      </ul>
    </li>
  </ul>
    <div class="copyright">版权所有@2017</div>
  </div>
</template>

<script>
export default {
  name: 'BFooter',
  data () {
    return {

    }
  }
}
</script>

<style>
*{padding:0;margin:0;}
.footer-container{
  padding-top:50px;
  border-top: 1px solid #f4f4f4;
}
.footer-list{
  display: flex;
  display: -webkit-flex;
}
.footer-list li{
  flex:1;
}
.footer-list li h1{
  margin-bottom: 15px;
  font-size: 16px;
  color: #333;
}
.footer-list li p{
  font-size: 12px;
  color: #333;
}
.footer-icon{
  width: 80px;
  height: 30px;
  margin:10px auto 0 auto;
  padding-right: 70px;
  font-size: 12px;
  line-height: 30px;
  background: url(../assets/images/footer_icon.png)top right no-repeat;
  background-size: 70px 30px;
}
.footer-list ul li{
  font-size: 12px;
  line-height: 25px;
}
.copyright{
  width:100%;
  height: 200px;
  color: #999;
  line-height: 200px;
  font-size: 14px;
}
</style>
