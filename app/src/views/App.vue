<template>
  <div id="app">
    <h1>{{title}}</h1>
    <h2>My Bears</h2>
    <ul class="bears">
      <li v-for="bear in bears" @click="select(bear)">
        <span class="badge">{{bear.id}}</span> {{bear.name}}
      </li>
    </ul>
    <div v-if="selectedBear">
      <h2>{{selectedBear.name}} details</h2>
      <div>
        <label>id: </label>{{selectedBear.id}}</div>
      <div>
        <label>name: </label>
        <input v-model="selectedBear.name" placeholder="name">
      </div>
    </div>
  </div>
</template>

<script>
const testBears = [
  { id: 11, name: 'Jammy' },
  { id: 12, name: 'Charlie' },
  { id: 13, name: 'Hohots' },
  { id: 14, name: 'Henri' },
  { id: 15, name: 'Art' },
  { id: 16, name: 'Coco' },
  { id: 17, name: 'Edun' },
  { id: 18, name: 'Kuruk' },
  { id: 19, name: 'Bemot' },
  { id: 20, name: 'Telutci' },
];

export default {
  name: 'app',
  data() {
    return {
      title: 'Bears are Awesome',
      bears: testBears,
      selectedBear: null,
    };
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
