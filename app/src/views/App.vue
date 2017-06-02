<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Bears />
  </div>
</template>

<script>
import Bears from './Bears';

export default {
  name: 'app',
  components: { Bears },
  data() {
    return {
      title: 'Bears are Awesome',
    };
  },
};
</script>
