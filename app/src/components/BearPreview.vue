<template>
  <div v-if="bear">
    <h2>{{ bear.name.toUpperCase() }} is my bear</h2>
    <button @click="$emit('open')">View Details</button>
  </div>
</template>

<script>
export default {
  name: 'bear-preview',
  props: ['bear'],
};
</script>

<style>
</style>
