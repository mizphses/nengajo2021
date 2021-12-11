<template>
  <img :src="`/svg/`+message+`.svg`" />
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AkeomeModuleB',
  props: {
    message: {
      type: String,
      required: true
    }
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
