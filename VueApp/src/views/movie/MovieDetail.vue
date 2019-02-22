<template>
    <div v-if="isShow">
        hahahaha
        {{$route.params.movieid}}
        {{movieDetail.title}}
        <!-- {{movieDetail.images.small}} -->
        <img :src="movieDetail.images.small">
    </div>
</template>

<script>
import Axios from 'axios'
    export default {
        data() {
            return {
                movieDetail:{

                },
                isShow:false
            }
        },
        created() {
            Axios.get('/data/moviedetail.json')
            .then((result)=>{
                console.log(result.data);
                this.movieDetail=result.data;
                this.isShow=true;
            })
            .catch(()=>{
                console.log('未收到数据!!!!');
            }
            )
        },
    }
</script>

<style scoped>

</style>