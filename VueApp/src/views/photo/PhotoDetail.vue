<template>
    <div>
        <!-- {{$route.params.index}} -->
        <router-link to="/photo" v-if="isShow">
          <v-touch v-on:swipeleft="next()" class="bg" :style="{backgroundImage:'url('+ photos[iNow].src +')'}"></v-touch>
          <!-- <div class="bg" :style="{backgroundImage:'url('+photos[$route.params.index].src+')'}"></div> -->
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import VueTouch from 'vue-touch';
import Vue from 'vue';
Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        data() {
            return {
                isShow:false,
                iNow:this.$route.params.index
            }
        },
        computed: {
            // mapState
            ...mapState(['photos'])
        },  
        created() {
             if(this.photos.length==0){
                this.$router.push('/photo');
            }else{
                this.isShow = true;
            }
         },
        methods: {
            next(){
            this.iNow++;
        },
        }
    } 
        
    
</script>

<style scoped>
        .bg{
            position: absolute;
            top:1rem;
            left:0px;
            bottom: 1rem;
            right:0px;
            background:black no-repeat center center;
            background-size: contain;
            
        }
</style>