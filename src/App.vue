<template>
    <Header/>
    <div class="content"><router-view /></div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style>
*{
  font-family: Calibri;
  font-weight: 400;
  font-style: normal;
}

html {
  overflow-y: scroll;
}

.content{
  margin-top: 20px;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
