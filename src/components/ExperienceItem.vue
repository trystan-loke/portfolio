<template>
  <div class="experience-item">
    <img :src="`/assets/company-logo/${experienceItem.logo}`" :alt="experienceItem.company" />
    <div class="experience-item-details">
      <div class="experience-item-details-header">
        <h3>{{ experienceItem.title }} for {{ experienceItem.company }}</h3>
        <h5>{{ `${experienceItem.location}, ${experienceItem.startDate} - ${experienceItem.endDate}` }}</h5>
      </div>
      <p v-for="r in experienceItem.responsibilities">
        {{ r }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceItem',
  props: {
    experienceItem: {
      type: Object
    },
  }
}
</script>

<style scoped>
.experience-item{
  display: flex;
  flex-direction: row;
  column-gap: 100px;
  margin: 25px 0 25px 0;
}

.experience-item-details{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.experience-item-details-header{
  margin-bottom: 10px;
}
.experience-item-details-header *{
  margin: 0px;
}

.experience-item-details p{
  margin: 0 0 5px 0;
  font-size: 15px;
}

img{
  width: 20%;
  object-fit: contain;
}
</style>