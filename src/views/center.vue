<template>
  <div>
    <div class="box">
      <div class="img"></div>
      <div class="name">昵称昵称</div>
    </div>
    <van-cell-group>
      <van-cell title="我的订单" is-link value="查看全部订单"></van-cell>
    </van-cell-group>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">待付款</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>待发货</van-tabbar-item>
      <van-tabbar-item icon="records">待收货</van-tabbar-item>
      <van-tabbar-item icon="gold-coin">评价</van-tabbar-item>
      <van-tabbar-item icon="gold-coin">售后</van-tabbar-item>
    </van-tabbar>
    <van-cell title="我的积分" icon="location" is-link></van-cell>
    <van-cell title="我的收藏" icon="location" is-link></van-cell>
    <van-cell title="我的优惠券" icon="location" is-link></van-cell>
    <van-cell title="帮助与客服" icon="location" is-link></van-cell>
  </div>
</template>

<script>
  export default {
    name:'center',
    data() {
      return {
        active: 0,
      }
    }
  }
</script>

<style scoped>
  .box {
    width: 100%;
    height: 10rem;
    background: #ececec;
    text-align: center;
    box-sizing: border-box;
    padding: 3rem 0;
  }
  .box .img {
    width: 3.504rem;
    height: 3.504rem;
    border-radius: 50%;
    background: #a18667;
  }
  .name {
    font-size: 0.816rem;
    color: #323232;
  }
</style>
