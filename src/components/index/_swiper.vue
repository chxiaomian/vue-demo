<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="item in swiper" :key="item.id">
        <img :src="item.imgPath" alt="">
    </van-swipe-item>
  </van-swipe>    
</template>

<script>
export default {
  data() {
    return {
      swiper: [
        { id: 1, imgPath: "http://placehold.it/600x360/222/fff.png" },
        { id: 2, imgPath: "http://placehold.it/600x360/136/fff.png" },
        { id: 3, imgPath: "http://placehold.it/600x360/09f/fff.png" },
        { id: 4, imgPath: "http://placehold.it/600x360/093/fff.png" }
      ]
    };
  }
};
</script>

<style>
.van-swipe img {
  width: 100%;
  height: 200px;
}
</style>


