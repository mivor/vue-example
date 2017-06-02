<template>
  <div>
    <h3>Top Bears</h3>
    <div class="grid grid-pad">
      <router-link v-for="bear in bears" :to="{ name: 'bear-details', params: { id: bear.id }}" class="col-1-4">
        <div class="module bear">
          <h4>{{bear.name}}</h4>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  computed: {
    bears() {
      return this.$store.state.bears.slice(1, 5);
    },
  },
};
</script>

<style>

</style>
