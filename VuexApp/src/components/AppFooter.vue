<template>
    <div>
        <ul :style="{background:bgc.color}">
            <li v-for="(obj,index) in menu" :key="index"><router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link></li>  
        </ul>
    </div>
</template>

<script>
    export default {
        props:['menu','bgc'],
        
        // data() {
        //     return {
        //         bg:''

        //     }
        // },
        methods: {
           change(obj){
            //    this.bg=obj.color;
               this.$emit('changebg',obj)
           }
        },
    }
</script>

<style scoped>
    ul{
        background:blueviolet;
        width: 100%;
        height: 1rem;
        position: fixed;
        bottom: 0;
        line-height: 1rem;
        display: flex
    }
    li{
        text-align: center; 
        color: #fff;
        flex-grow: 1;
        
    }
    li a{
        outline: none;
        color: black;
    }
    li a.router-link-active{
        color: #fff;
    }
</style>