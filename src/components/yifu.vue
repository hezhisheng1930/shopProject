<template>
    <main id="tuijian">
    <ul>
      <li v-for="(item,i) in msg" :key="i">
        <img :src="item.image" alt="">
        <span>折扣价:{{item.discountPrice}}</span>
        <del>原价:{{item.yuanjia}}</del>
      </li>
     
    </ul>
  </main>
</template>
<script>
export default {
    name:'tuijian',
    data(){
        return {
            msg:[{image:require('../assets/imgs/1.jpg'),yuanjia:180,discountPrice:80},
      {image:require('../assets/imgs2/2.jpg'),yuanjia:500,discountPrice:300},
      {image:require('../assets/imgs2/3.jpg'),yuanjia:299,discountPrice:200},
      {image:require('../assets/imgs2/4.jpg'),yuanjia:199,discountPrice:99},
      {image:require('../assets/imgs2/5.jpg'),yuanjia:599,discountPrice:499},
      {image:require('../assets/imgs2/6.jpg'),yuanjia:399,discountPrice:299},
       {image:require('../assets/imgs2/7.jpg'),yuanjia:99,discountPrice:50},
      {image:require('../assets/imgs2/8.jpg'),yuanjia:699,discountPrice:399},
      {image:require('../assets/imgs2/9.jpg'),yuanjia:799,discountPrice:499},
      {image:require('../assets/imgs2/10.jpg'),yuanjia:299,discountPrice:299}
      ]
        }
    }    ,
    props:['jicheng']
    
}
</script>
<style scoped>
@import '../assets/css/tuijianCommon.css';
</style>