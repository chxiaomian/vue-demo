<template>
   <div class="line-txt">{{msg}}</div>
</template>

<script>
export default {
    data(){
        return {
            msg:'已经扯到底了~'
        }
    }
};
</script>

<style scoped>
.line-txt {
  color: #999;
  text-align: center;
  font-size: 0.6rem;
  padding: 0.6rem 0;
}
</style>
