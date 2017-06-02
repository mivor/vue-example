<template>
  <div>
    <h2>My Bears</h2>
    <AddBear @add="add($event.name)"/>
    <ul class="bears">
      <li v-for="bear in bears"
        :key="bear.id"
        :class="{ 'selected': selectedBear == bear }"
        @click="select(bear)">
        <span class="badge">{{bear.id}}</span>
        <span>{{bear.name}}</span>
        <button class="delete" @click.stop="remove(bear.id)">x</button>
      </li>
    </ul>
    <BearPreview :bear="selectedBear" @open="open()" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ns, NS, ADD, REMOVE } from '@/modules/bear-module';
import AddBear from '@/components/AddBear';
import BearPreview from '@/components/BearPreview';

export default {
  name: 'bears',
  components: { AddBear, BearPreview },
  data() {
    return {
      selectedBear: null,
      bearName: null,
    };
  },
  computed: {
    ...mapState(NS, ['bears']),
  },
  methods: {
    select(bear) {
      this.selectedBear = bear;
    },
    open() {
      this.$router.push({ name: 'bear-details', params: { id: this.selectedBear.id } });
    },
    add(name) {
      this.$store.dispatch(ns(ADD), { bear: { name } });
    },
    async remove(id) {
      await this.$store.dispatch(ns(REMOVE), { id });
      this.selectedBear = null;
    },
  },
};
</script>

<style scoped>
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
button.delete {
  float:right;
  margin-top: 2px;
  margin-right: .8em;
  background-color: gray !important;
  color:white;
}
</style>
