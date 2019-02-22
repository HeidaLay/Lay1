<template>
    <div class="imgbox">
        <img v-for="(photoSrc,index) in $store.state.photos" :key="index" :src="photoSrc.src" alt="" @click="goDetail(index)" >
    </div>
</template>

<script>
import Axios from 'axios'
    export default {
        data() {
            return {
                photo:[

                ]
            }
        },
        created() {
            Axios.get('/data/photodata.json')
            .then(
                (result)=>{
                    // console.log(result.data.photoData);
                    // this.photo=[...result.data.photoData];
                    this.$store.commit('addPhoto',result.data.photoData)
                }
            ).catch()
        },
        methods: {
            goDetail(index)
            {
                this.$router.push('/photodetail/'+index);
            }
        },
    }
</script>

<style scoped>
img{
         width:2.1rem; 
        /* height:2.5rem; */
        margin-bottom: 0.03rem;
        margin-right: 0.03rem;
    }
</style>