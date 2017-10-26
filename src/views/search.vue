<template>
  <div>
    <van-search v-model="value" :show-action="true" @search="onSearch">
      <div slot="action" @click="goSlotSearch">搜索</div>
    </van-search>
    <div class="search-box">
      <h5>热门搜索</h5>
      <span>搜索</span><span>搜索</span><span>搜索</span>
    </div>
    <div class="search-box">
      <h5>历史搜索</h5>
      <van-icon name="delete" />
      <span>搜索</span><span>搜索</span><span>搜索</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "search",
    data() {
      return {
        value: ""
      };
    },
    methods: {
      goSlotSearch: function() {},
      onSearch: function() {}
    }
  };
</script>

<style scoped>
  .search-box {
    color: #323232;
  }
  .search-box h5 {
    font-size: 0.672rem;
    margin-bottom: 0.2rem;
  }
  .search-box span {
    display: inline-block;
    background: #f8f8f8;
    border: 1px solid #999;
    font-size: 0.672rem;
    border-radius: 1.65rem;
    padding: 0.2rem 0.4rem;
    margin-bottom: 0.72rem;
    margin-right: 0.7rem;
    min-width: 1.5rem;
    text-align: center;
  }
</style>
