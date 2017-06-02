<template>
  <div>
    <label>Bear name:</label>
    <input v-model="name" />
    <button @click="add()">Add</button>
  </div>
</template>

<script>
export default {
  name: 'add-bear',
  data() {
    return {
      name: null,
    };
  },
  methods: {
    add() {
      this.$emit('add', { name: this.name });
      this.name = null;
    },
  },
};
</script>

<style>
</style>
