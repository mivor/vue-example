<template>
  <div id="app">
    <h1>{{title}}</h1>
    <nav>
      <router-link activeClass="active" to="/dashboard">Dashboard</router-link>
      <router-link activeClass="active" to="/bears">Bears</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Bears are Awesome',
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.2em;
  color: #999;
  margin-bottom: 0;
}
h2 {
  font-size: 2em;
  margin-top: 0;
  padding-top: 0;
}
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited, a:link {
  color: #607D8B;
}
nav a:hover {
  color: #039be5;
  background-color: #CFD8DC;
}
nav a.active {
  color: #039be5;
}
</style>
