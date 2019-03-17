<template>
  <div id="app">
    <div id="nav">
     <p>count1:  {{$store.state.count1}}</p>
     <button @click="add(3)">add</button>
     <p>count2:   {{count2}}</p>
     <button @click="subAction(2)">sub</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapState,mapMutations, mapActions} from 'vuex'
export default {
    computed: {
      ...mapState(['count1','count2'])
    },
    methods: {
      ...mapMutations(['add','sub']),
      ...mapActions(['subAction'])
    },
}
</script>