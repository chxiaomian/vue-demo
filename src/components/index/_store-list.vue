<template>
    <div class="stores-list">
        <van-cell-group>
            <van-cell title="Store List" value="More" icon="location" is-link></van-cell>
        </van-cell-group>
        <van-row>
            <van-col v-for="store in stores" :key="store.id" span=8>
                <div>
                    <img :src="store.imgPath" alt="">
                </div>
            </van-col>
        </van-row>
    </div>

</template>

<script>
export default {
  data() {
    return {
      stores: [
        { id: 1, imgPath: "http://placehold.it/100x100/09f/fff.png" },
        { id: 1, imgPath: "http://placehold.it/100x100/09f/fff.png" },
        { id: 1, imgPath: "http://placehold.it/100x100/09f/fff.png" },
        { id: 1, imgPath: "http://placehold.it/100x100/09f/fff.png" },
        { id: 1, imgPath: "http://placehold.it/100x100/09f/fff.png" },
        { id: 1, imgPath: "http://placehold.it/100x100/09f/fff.png" }
      ]
    };
  }
};
</script>

<style scoped>
.van-row {
  width: 100%;
}
.van-col div {
  width: 100%;
  height: 100%;
}
.van-col img {
  margin: 2px;
}
.van-cell{
  text-align: left!important;
}
</style>

