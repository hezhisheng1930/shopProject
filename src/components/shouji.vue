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
       msg:[{image:require('../assets/shouji/1.jpg'),yuanjia:180,discountPrice:80},
      {image:require('../assets/shouji/2.jpg'),yuanjia:500,discountPrice:300},
      {image:require('../assets/shouji/3.jpg'),yuanjia:299,discountPrice:200},
      {image:require('../assets/shouji/4.jpg'),yuanjia:199,discountPrice:99},
      {image:require('../assets/shouji/5.jpg'),yuanjia:599,discountPrice:499},
      {image:require('../assets/shouji/6.jpg'),yuanjia:399,discountPrice:299},
       {image:require('../assets/shouji/7.jpg'),yuanjia:99,discountPrice:50},
      {image:require('../assets/shouji/8.jpg'),yuanjia:699,discountPrice:399},
      {image:require('../assets/shouji/9.jpg'),yuanjia:799,discountPrice:499},
      {image:require('../assets/shouji/10.jpg'),yuanjia:299,discountPrice:299},
       {image:require('../assets/shouji/11.jpg'),yuanjia:199,discountPrice:50},
      {image:require('../assets/shouji/12.jpg'),yuanjia:499,discountPrice:399}
      ]
    }    
    }
    
}
</script>
<style scoped>
@import '../assets/css/tuijianCommon.css';
/* main{
  width:100%;
}
main ul{
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-content:space-evenly;
  justify-content: center
}
main ul li{
width:6rem;
box-sizing: border-box;
 margin-right:0.4rem;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
margin-top:0.4rem;
}
main ul li img{
  width: 100%;
  display: block;
  height: 4.8rem;
}
main ul li span{
  font-size: 14px;
  color: #f00;
  font-weight: bold
}
main ul li del{
  font-size: 13px;
  color: rgb(90, 87, 87)
} */
</style>