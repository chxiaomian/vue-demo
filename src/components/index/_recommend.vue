<template>
    <div class="recommend">
        <div class="line">
            <span>热门推荐</span>
        </div>
        <div class="line-txt">热门推荐热门推荐</div>
        <van-row gutter="10">
            <van-col v-for="item in goods" :key="item.id" span="8">
                <div class="tl">
                    <img :src="item.imgPath" alt="">
                    <span>{{item.title}}</span>
                    <span>￥{{item.price}}</span>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        {
          id: 1,
          title: "goods1",
          price: "23",
          imgPath: "http://placehold.it/100x100/111/fff.png"
        },
        {
          id: 2,
          title: "goods2",
          price: "14",
          imgPath: "http://placehold.it/100x100/222/fff.png"
        },
        {
          id: 3,
          title: "goods3",
          price: "34",
          imgPath: "http://placehold.it/100x100/333/fff.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.line {
  width: 50%;
  height: 0.8rem;
  border-top: 1px solid #333;
  margin: 0 auto;
  position: relative;
  margin-top: 1.2rem;
}
.line span {
  display: inline-block;
  font-size: 0.875rem;
  color: #505050;
  text-align: center;
  background: #fff;
  position: absolute;
  width: 80px;
  top: -10px;
  left: 50%;
  margin-left: -40px;
}
.line-txt {
  color: #999;
  text-align: center;
  font-size: 0.6rem;
  margin-top: -.2rem;
  margin-bottom: .6rem;
}
.tl{
    text-align: left;
}
.van-row{
    padding: 0 .5rem;
    margin-left: 0!important;
    margin-right: 0!important;
}
.van-col img{
    width: 100%;
    height: 100%;
}
.van-col span{
    display: block;
    padding-left: .2rem;
}
</style>
