<template>
    <main id="tuijian">
    <ul>
      <li v-for="(item,i) in mgs" :key="i">
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
            mgs:[{image:require('../assets/lingshi/1.jpg'),yuanjia:180,discountPrice:80},
      {image:require('../assets/lingshi/2.jpg'),yuanjia:500,discountPrice:300},
      {image:require('../assets/lingshi/3.jpg'),yuanjia:299,discountPrice:200},
      {image:require('../assets/lingshi/4.jpg'),yuanjia:199,discountPrice:99},
      {image:require('../assets/lingshi/5.jpg'),yuanjia:599,discountPrice:499},
      {image:require('../assets/lingshi/6.jpg'),yuanjia:399,discountPrice:299},
       {image:require('../assets/lingshi/7.jpg'),yuanjia:99,discountPrice:50},
      {image:require('../assets/lingshi/8.jpg'),yuanjia:699,discountPrice:399},
      {image:require('../assets/lingshi/9.jpg'),yuanjia:299,discountPrice:199},
      {image:require('../assets/lingshi/10.jpg'),yuanjia:199,discountPrice:99},
      {image:require('../assets/lingshi/11.jpg'),yuanjia:299,discountPrice:199},
      {image:require('../assets/lingshi/12.jpg'),yuanjia:199,discountPrice:99}],

        }
    }    ,
    props:['jicheng']
    
}
</script>
<style scoped>
@import '../assets/css/tuijianCommon.css';
</style>