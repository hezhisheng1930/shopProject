<template>
  <div id="app">
    <!-- 路由展示 -->
    <div id="top">
     <keep-alive exclude='dingdan'>
       <router-view></router-view>
       </keep-alive> 
    </div>
    <!-- 底部导航 -->
     <mydibu></mydibu>
    <!-- <dibudaohang></dibudaohang> -->
<br>
<br>
<br>
<br>
<br>

  </div>
</template>
<script>
import dibudaohang from './components/Dibu.vue';
export default {
  components:{
    mydibu:dibudaohang
  }
}
</script>
<style lang="less" stoped>
@import './assets/css/index.css';
@import './assets/css/common.css';
@import '//at.alicdn.com/t/font_1571007_2p71ruuoci6.css';
@import '//at.alicdn.com/t/font_1571007_ljwbrxz9yce.css';
@import '//at.alicdn.com/t/font_1571007_vkz5egg1wb.css';
@import '//at.alicdn.com/t/font_1571007_vdo86toc5.css';
</style>
