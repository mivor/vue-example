<template>
  <div>
    <label>Bear name:</label>
    <input v-model="bearName" />
    <button @click="add()">Add</button>
  </div>
</template>

<script>
import { ADD_BEAR } from '../store/index';

export default {
  name: 'add-bear',
  data() {
    return {
      bearName: null,
    };
  },
  methods: {
    async add() {
      await this.$store.dispatch(ADD_BEAR, { bear: { name: this.bearName } });
      this.bearName = null;
    },
  },
};
</script>

<style>
</style>
