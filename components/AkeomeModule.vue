<template>
  <img :src="`/svg/`+message+`.svg`" />
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    message() {
      const rn = Math.floor(Math.random() * 100);
      if(rn === 0){
          return 'goldIsMySpilit';
      }else if(rn > 0 && rn <= 5){
          return 'cute_akeome';
      }else if(rn > 5 && rn <= 37){
          return 'kingasinnnen';
      }else{
        return 'akemasiteomedetou';
      }
    }
  },
  mounted() {
    this.$emit('message-data', this.message)
  }

})
</script>
<style lang="scss" scoped>
.lg-text{
  font-size: 4em;
  padding: 0;
  margin: 0;
}
.is-red{
  color: #c1272d;
}
</style>
