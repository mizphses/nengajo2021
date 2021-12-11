<template>
  <div>
    <nav class="navbar flex">
      <a href="#" @click="reverseMenu()">
        <span class="icon material-icons material-icons-outlined">
          description
      </span>
      </a>
    </nav>
    <div v-if="menu" class="modal">
      <div class="inModal">
        <h2>このホームページについて</h2>
        <p>2022年1月の年賀状がわりのホームページです。ちなみに再読み込みするたびに乱数によって「謹賀新年」とか「明けましておめでとうございます」とかの文字が変わります。レア・スーパーレアも設定しています。</p>
        <h2>スクショのすすめ</h2>
        <p>一番上の「ここに名前を入力するとスクショに名前が出ます」に名前を入れるとあなたのための年賀状になります。しかし，このデータはツイートボタンを押しても反映されないという残念な事態になっています。共有を押しても出てくるのは画像だけです。</p>
        <h2>実装まわり</h2>
        <p>
          NuxtJSとSCSSでできています。特にフレームワークは使ってませんが，<br />
          <span class="serif">ニューテゴミン</span>とか<span class="sans">ZEN丸ゴシック</span>とか<span class="fude">佑字</span>とか，<a href="https://fonts.google.com">GoogleFonts</a>は適宜使ってます。<br />
          あとデプロイ先にGitHub Pages，その自動化処理のためにGitHub Actionsを使ってます。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      menu: false
    }
  },
  methods: {
    reverseMenu(){
      this.menu = !this.menu
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1024;
}
.flex{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: right;
}
span.icon{
  padding: 1em;
  background: rgb(255, 229, 157);
  border-radius: 00% 0% 00% 40%;
}
.modal{
  background: rgba(0, 0, 0, 0.900);
  z-index: 512;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-flow: column;
}
.inModal{
  width: 90vw;
  padding-left: 5vh;
  padding-right: 5vh;
  a{
    color: white;
  }
}
</style>
