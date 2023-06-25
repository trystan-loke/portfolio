<template>
  <PortfolioBody title="About me">
    <h3>{{ CONSTANTS.ABOUT_ME }}</h3>
  </PortfolioBody>
</template>

<script>
import CONSTANTS from './../constants/values'
import PortfolioBody from '../components/PortfolioBody.vue';
export default {
  name: 'About',
  components: {
    PortfolioBody
  },
	data() {
    return {
      CONSTANTS: CONSTANTS
    }
  }
}
</script>
