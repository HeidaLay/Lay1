<template>
  <div class="slide-wraper">
      <ul class="slide">
    <transition-group name="fade">
        <li v-for="(photo,index) in imgBox" :key="index" v-show="index==iNow">
          <img :src="photo" alt>
        </li>
    </transition-group>
      </ul>
    
    <div class="container">
      <ul class="btn">
        <li v-for="(i,index) in imgBox.length" :key="index" :class="{active:index == iNow}"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // imgBox: [
      //   // "https://img3.doubanio.com/lpic/s24468373.jpg",
      //   // "https://img3.doubanio.com/lpic/s27102925.jpg",
      //   // "https://img3.doubanio.com/lpic/s6989253.jpg"
      //   // 'http://localhost:8080/img/1.jpg',
      //   // 'http://localhost:8080/img/2.jpg',
      //   // 'http://localhost:8080/img/3.jpg',
      // ],
      iNow: 0
    };
  },
  props:['imgBox'],

  created() {
    setInterval(() => {
      this.iNow++;
      if (this.iNow == this.imgBox.length) {
        this.iNow = 0;
      }
    }, 1800);
  }
};
</script>

<style scoped>
.slide-wraper{
    position: relative;
    width: 100%;
    height: 9rem;
    overflow: hidden;
}
img {
 width: 7rem;
  height: 8rem;
}
.slide li{
    position: absolute;
    left: 0;
    top: 0;
}
.btn{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom:0.2rem;
} 
.btn li {
  width: 0.2rem;
  height: 0.2rem;
  background: #ff0036;
  border-radius: 50%;
  float: left;
  margin-right: 0.1rem;
}

.btn .active {
  background: greenyellow;
}
.fade-enter{
    transform: translateX(100%)
}
.fade-enter-active{
    transition: transform 1s ease;
}
.fade-enter-to{
    transform: translateX(0);
}
.fade-leave{
    transform: translateX(0);
}
.fade-leave-active{
    transition: transform 1s ease;
}
.fade-leave-to{
    transform: translateX(-100%);
}
</style>