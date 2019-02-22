import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/components/Music.vue'
import Movie from '@/components/Movie.vue'
import Food from '@/components/Food.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'/movie',
     components:Movie
    },
    {
      path:'/music',
      components:Music
    },
    {
      path:'/food',
      components:Food
    }
  ]
})
