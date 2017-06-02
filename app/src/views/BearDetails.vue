<template>
  <div v-if="bear">
    <h2>
      {{bear.name}} details</h2>
    <div>
      <label>id: </label>{{bear.id}}
    </div>
    <div>
      <label>name: </label>
      <input v-model="bear.name" placeholder="name">
    </div>
    <button @click="goBack()">Back</button>
    <button @click="save()">Save</button>
  </div>
</template>

<script>
import { SAVE_BEAR } from '../store/index';

export default {
  name: 'bear-details',
  props: ['id'],
  computed: {
    bear() {
      const bearId = parseInt(this.id, 10);
      const bear = this.$store.state.bears.find(x => x.id === bearId);
      // clone bear to avoid editing the original bear
      return JSON.parse(JSON.stringify(bear));
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async save() {
      await this.$store.dispatch(SAVE_BEAR, { bear: this.bear });
      this.goBack();
    },
  },
};
</script>

<style scoped>
label {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer; cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>
