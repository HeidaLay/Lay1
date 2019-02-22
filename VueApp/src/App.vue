<template>
  <div id="app" >
    <commonheader :bgc='bgc'></commonheader>
    <div id="content">
      <router-view></router-view>
    </div>
    <commonfooter :menu="menu" @changebg="color" :bgc="bgc"></commonfooter>
  </div>
</template>

<script>
import commonheader from '@/components/AppHeader.vue';
import commonfooter from '@/components/AppFooter.vue';
  export default {
    data() {
      return {
        menu:[
          {
            path:'/movie',
            name:'电影',
            color:''
          },
          {
            path:'/music',
            name:'音乐',
            color:'pink'
          },
          {
            path:'/photo',
            name:'图片',
            color:'red'
          },
          {
            path:'/book',
            name:'图书',
            color:'#c48888'
          }
        ],
        bgc:{
            path:'/movie',
            name:'电影',
            color:'blueviolet'
        }
      }
    },
    components:{
      commonheader,
      commonfooter
    },
    methods: {
      color(obj){
        // console.log(bg);
        // console.log(obj);
        this.bgc=obj;
      },
      
    },
    created() {
      let result=this.menu.filter((obj,index)=>{
        return obj.path==this.$route.path;
      });
      if(result.length){
        this.bgc=result[0];
      }
      
    },
  }
</script>

<style scoped>
    #content{
      margin: 1rem 0;
    }
</style>
