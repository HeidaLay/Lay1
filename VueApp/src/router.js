import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/movie/Movie.vue'
import Music from './views/music/Music.vue'
import Photo from './views/photo/Photo.vue'
import Book from './views/book/Book.vue'
import MusicList from './views/music/MusicList.vue'
import MovieDetail from './views/movie/MovieDetail.vue'
import Slide from './components/Slide.vue'
import PhotoDetail from './views/photo/PhotoDetail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/movie',
      component:Movie
    },
    {
      path:'/music',
      component:Music
    },
    {
      path:'/book',
      component:Book
    },
    {
      path:'/photo',
      component:Photo
    },
    {
      path:'/musiclist',
      component:MusicList
    },
    {
      path:'/moviedetail/:movieid',
      component:MovieDetail
    },
    {
      path:'/',
      redirect:'/movie'
    },
    {
      path:'/slide',
      component:Slide
    },
    {
      path:'/photodetail/:index',
      component:PhotoDetail
    }
    
  ]
})
