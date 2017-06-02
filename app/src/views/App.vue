<template>
  <div id="app">
    <h1>{{title}}</h1>
    <h2>{{bear.name}} details</h2>
    <div><label>id: </label>{{bear.id}}</div>
    <div>
      <label>name: </label>
      <input v-model="bear.name" placeholder="name">
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Bears are Awesome',
      bear: {
        id: 1,
        name: 'Ursus',
      },
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
