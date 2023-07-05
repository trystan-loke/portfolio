<template>
  <div class="error-page">
		<img class="error-dialog-image" :src="errorDialogImage" alt="Error dialog image"/>
    <h1 style="font-size:3vw;">{{ code }} - {{ title }}</h1>
    <h1 style="font-size: calc(3px + 1.5vw);">{{ description }}</h1>
    <button @click="goToHomepage" type="button">Go to homepage</button>
  </div>
</template>

<script>
import errorDialogImage from '../assets/ErrorDialogImage.png'
import nagivationMixins from '../mixins/navigation-mixins.js'
export default {
  name: 'NotFound',
  mixins: [nagivationMixins],
  props: {
    code: Number,
    title: String,
    description: String,
  },
  data() {
    return {
      errorDialogImage
    }
  },
}
</script>

<style>
.error-dialog-image {
  position: absolute;
  z-index: -1;
  width: 100%;
  max-width: 60%;
}

.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.error-page button {
  padding: 0.5vw 1vw 0.5vw 1vw;
  font-size: calc(3px + 1.5vw);
  margin-top: 2.5vw;
  border-radius: 8px;
}
</style>
