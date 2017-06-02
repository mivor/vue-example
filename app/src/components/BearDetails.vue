<template>
  <div v-if="bear">
    <h2>
      {{bear.name}} details</h2>
    <div>
      <label>id: </label>{{bear.id}}</div>
    <div>
      <label>name: </label>
      <input v-model="bear.name" placeholder="name">
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero-details',
  props: ['bear'],
};
</script>

