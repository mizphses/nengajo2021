<template>
  <div>
    <div v-if="$dayjs('2020-02-04').diff('2020-01-01')>=0" class="MainModule">
      <div>
        <span v-text="`あと`+-1*$dayjs().diff('2022-01-01', 'day')+'日で公開'" />
      </div>
    </div>
    <div v-else>
      <a class="button" href="/happyNewYear">明けましておめでとうございます。（年賀状サイトへ）</a>
    </div>
  </div>
</template>

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
.button{
  font-size: 1.5em;
  position: absolute;
  top: 100px;
  padding: 1em;
  margin: 1em;
  border: 1px solid rgb(80, 80, 80);
  text-decoration: none;
  color: black;
}
.button:hover{
  background: rgb(253, 255, 130);
}
</style>
