<template>
  <PortfolioBody title="Experiences">
		<ExperienceItem v-for="item in CONSTANTS.Experiences" :experience-item="item" />
  </PortfolioBody>
</template>

<script>
import CONSTANTS from './../constants/values'
import ExperienceItem from '../components/ExperienceItem.vue'
import PortfolioBody from '../components/PortfolioBody.vue';

export default {
  name: 'Experiences',
	components: {
		ExperienceItem,
    PortfolioBody
	},
	data() {
    return {
      CONSTANTS: CONSTANTS
    }
  }
}
</script>

<style scoped>
</style>