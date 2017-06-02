<template>
  <div id="app">
    <h1>{{title}}</h1>
    <router-link to="/bears">Bears</router-link>
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
