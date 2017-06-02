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
  </div>
</template>

<script>
export default {
  name: 'bear-details',
  props: ['id'],
  computed: {
    bear() {
      const bearId = parseInt(this.id, 10);
      return this.$store.state.bears.find(x => x.id === bearId);
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

