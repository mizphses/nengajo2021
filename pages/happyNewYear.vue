<template>
  <div>
      <input v-model="username" type="input" class="input sans" placeholder="ここに名前を入力するとスクショに名前が出ます" />
    <div class="MainModule">
      <div>
        <span class="fude is-size-2 fadeIn">{{username}}さんへ</span>
      </div>
      <AkeomeModule class="MainImage fadeIn" @message-data="messageData($event, message)"/>
      <a :href="createUrl">Tweet</a>
      <NuxtContent :document="akeomessage" class="serif article fadeIn5s"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content }) {
    const akeomessage = await $content('akeomessage').fetch()

    return {
      akeomessage
    }
  },
  data() {
    return {
      username: "",
      message: "",
      createUrl: "",
    }
  },
  mounted() {
    this.createUrl = "https://twitter.com/intent/tweet?text=なとさんから，2022年元旦のご挨拶（年賀状）&url=" + encodeURIComponent(window.location.href + "share?="+ this.message)
  },
  methods: {
    messageData(message: "") {
      this.message = message
    }
  }
})
</script>
<style lang="scss">

$PaddingTnB: 100px;
$PaddingLnR: 10%;

body{
  padding: 0;
  margin: 0;
}
.article{
  padding-left: 10px;
  padding-right: 10px;
}
.MainModule{
  padding-top: $PaddingTnB;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.MainImage{
  max-width: 80%;
  height: 60vh;
  padding-bottom: $PaddingTnB;
  margin-left: $PaddingLnR;
  margin-right: $PaddingLnR;
}
.input{
  font-size: 1.5em;
  border: none;
  border-bottom: 1px solid rgb(80, 80, 80);
  margin: 30px;
  padding: 10px;
  min-width: 90vw;
}
.is-size-2{
  font-size: 4em;
}
</style>
