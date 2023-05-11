<template class="aaa">
    <h1 class="aaa">About Me</h1>
    <h3>{{ CONSTANTS.ABOUT_ME }}</h3>
</template>

<script>
import CONSTANTS from './../constants/values'
export default {
  data() {
    return {
      CONSTANTS: CONSTANTS
    }
  }
}
</script>

<style scoped>
</style>