<template>
    <div>
        <!-- <swipe class="my-swipe">
            <swipe-item class="slide1"><img src="/img/1.jpg" alt=""></swipe-item>
            <swipe-item class="slide2"><img src="/img/2.jpg" alt=""></swipe-item>
            <swipe-item class="slide3"><img src="/img/3.jpg" alt=""></swipe-item>
        </swipe> -->
        <slide :imgBox="imgBox"></slide>
    </div>
</template>

<script>
import {Swipe,SwipeItem} from 'vue-swipe';
import Slide from '@/components/Slide.vue'
import 'vue-swipe/dist/vue-swipe.css';
    export default {
        components:{
            // Swipe,
            // SwipeItem
            Slide
        },
        data() {
          return {
            imgBox:[
              'http://localhost:8080/img/1.jpg',
              'http://localhost:8080/img/2.jpg',
              'http://localhost:8080/img/3.jpg',

            ]
          }
        },
    }
</script>

<style scoped>
/* .my-swipe {
  height: 370px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.slide1 {
  background-color: #0089dc;
  color: #fff;
}
.slide2 {
  background-color: #ffd705;
  color: #000;
}
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
} */
</style>