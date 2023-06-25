<template>
  <div class="page">
    <Header/>
    <div class="content"><router-view /></div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}

</script>

<style>
*{
  font-family: Calibri;
  font-weight: 400;
  font-style: normal;
}

.page {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
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
