<template>
    <div id=header :style="{background:bgc.color}">
        <span id=begin>首页</span>
        {{bgc.name}}
    </div>
</template>

<script>
    export default {
        props:['bgc']
    }
</script>

<style scoped>
    #header{
        width: 100%;
        background:blueviolet;
        color:#fff;
        position: fixed;
        top: 0;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
    }
    #begin{
        position: absolute;
        left: 0.1rem;
        /* top:50%; */
        /* transform: translateY(50%); */
    }
</style>