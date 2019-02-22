<template>
  <div>
      hahahahaha
      <div class="content">
         <router-view></router-view>
      </div>
      <cfooter :menu="menu"></cfooter>
  </div>
</template>

<script>
import cfooter from '@/components/cfooter.vue'
  export default {
    data() {
      return {
        menu:[
          {
            path:'/movie',
            name:'电影',
            color:'green'
          },
           {
            path:'/music',
            name:'音乐',
            color:'red'
          },
           {
            path:'/food',
            name:'美食',
            color:'#96c2f1'
          }

        ]
      }
    },
    components:{
      cfooter,
    }
  }
</script>

<style scoped>

</style>
