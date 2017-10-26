<template>
    <div class="index">
        <v-header></v-header>
        <div class="main">
            <v-swiper></v-swiper>
            <v-notice></v-notice>
            <v-stores></v-stores>
            <v-recommend></v-recommend>
            <v-end></v-end>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/index/_header";
    import Swiper from "@/components/index/_swiper";
    import Notice from "@/components/index/_notice";
    import Stores from "@/components/index/_store-list";
    import Recommend from "@/components/index/_recommend";
    import End from "@/components/index/_end";
    import Footer from "@/components/index/_footer";
    export default {
        name: 'index',
        components: {
            "v-header": Header,
            "v-swiper": Swiper,
            "v-notice": Notice,
            "v-stores": Stores,
            "v-recommend": Recommend,
            "v-end": End,
            "v-footer": Footer
        }
    };
</script>

<style scoped>
    .main {
        margin: 46px 0 50px 0;
    }
</style>
