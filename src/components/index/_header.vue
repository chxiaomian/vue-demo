<template>
    <van-nav-bar title="标题" left-text="返回" left-arrow>
    <van-icon name="search" slot="right" />
    </van-nav-bar>
</template>

<script>
export default {
  
}
</script>
<style scoped>
.van-nav-bar{
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    z-index: 999;
}
</style>

