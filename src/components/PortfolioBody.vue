<template>
    <h1>{{ title }}</h1>
    <slot />
</template>

<script>
export default {
  name: 'PortfolioBody',
  props: {
    title: String,
  }
}
</script>