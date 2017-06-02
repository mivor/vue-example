<template>
  <div id="app">
    <h1>{{title}}</h1>
    <h2>My Bears</h2>
    <ul class="bears">
      <li v-for="bear in bears"
        :class="{ 'selected': selectedBear == bear }"
        @click="select(bear)">
        <span class="badge">{{bear.id}}</span> {{bear.name}}
      </li>
    </ul>
    <BearDetails :bear="selectedBear" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BearDetails from '../components/BearDetails';

export default {
  name: 'app',
  components: { BearDetails },
  data() {
    return {
      title: 'Bears are Awesome',
      selectedBear: null,
    };
  },
  computed: {
    ...mapState(['bears']),
  },
  methods: {
    select(bear) {
      this.selectedBear = bear;
    },
  },
};
</script>

<style>
.selected {
  background-color: #CFD8DC !important;
  color: white;
}

.bears {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}

.bears li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}

.bears li.selected:hover {
  background-color: #BBD8DC !important;
  color: white;
}

.bears li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}

.bears .text {
  position: relative;
  top: -3px;
}

.bears .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
</style>
