<template>
  <footer class="footer" @click.stop='gotoRouter'>
    <van-tabbar v-model="active" @click.stop='gotoRouter'>
      <van-tabbar-item icon="shop" id='index'>首页</van-tabbar-item>
      <van-tabbar-item icon="password-view" id='search'>发现</van-tabbar-item>
      <van-tabbar-item icon="pending-orders">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },
    // mounted() {
    //   let Rname = this.$route.name;
    //   //console.log(name);
    //   switch (Rname) {
    //     case 1:
    //       this.active = "detail";
    //       break;
    //     case 2:
    //       this.active = "search";
    //       break;
    //     case 3:
    //       this.active = "center";
    //       break;
    //     default:
    //       this.active = 'index';
    //       break;
    //   }
    // },
    methods: {
      gotoRouter() {
        let name = this.active
        if (this.active == 0) {
          name = 1
        }
        this.$router.push({
          name: name
        });
        //console.log(this.active)
        console.log('route.name:' + this.$route.name)
      }
    }
  };
</script>

<style scoped>
  a:active {
    text-decoration: none;
    outline: none;
    color: #38f;
  }
  .router-link-avtive {
    color: #38f;
  }
</style>
    