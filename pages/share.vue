<template>
  <div>
    <div class="MainModule">
      <div v-if="$route.query.message">
        <AkeomeModuleB class="MainImage" :message="$route.query.message" />
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="あけおめツイート" :data-url="`https://2022nenga.mizphses.com`+$route.fullPath" data-show-count="false">Tweet</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <NuxtContent :document="akeomessage" class="serif article"/>
      </div>
      <div v-else>
        <h2 class="fude" style="font-size: 3em;">不正アクセスはやめましょう。<br />正月早々お説教させないで。</h2>
        <a href="/" class="sans" style="text-align:center;">フロントページへ</a>
      </div>
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
  max-width: 100%;
  height: 60vh;
  padding-bottom: $PaddingTnB;
  padding-left: $PaddingLnR;
  padding-right: $PaddingLnR;
}
.input{
  font-size: 3em;
  border: none;
  margin-bottom: 30px;
}
.is-size-2{
  font-size: 2em;
}
</style>
