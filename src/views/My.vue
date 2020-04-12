<template>
  <div>
    <header>
      <section class="left">
        <i class="iconfont icon-touxiang"></i>
        <span class="iconfont">{{yonghushuju.name}}</span>
        <section>
          <strong>点击登录</strong>
        </section>
      </section>
      <section class="right">
        <section class="iconfont icon-tianchongxing-">拼单返现</section>
      </section>
    </header>
    <nav>
      <section class="left">我的订单</section>
      <section class="right iconfont icon-jiantou">查看全部</section>
      <ul>
        <li class="">
          <i class="iconfont icon-pingjia"></i>
          待付款</li>
        <li><i class="iconfont icon-pingjia"></i>待分享</li>
        <li><i class="iconfont icon-pingjia"></i>待发货</li>
        <li><i class="iconfont icon-pingjia"></i>待收货</li>
        <li><i class="iconfont icon-pingjia"></i>待评价</li>
      </ul>
    </nav>
    <main id="component">
      <section>娱乐</section>
      <ul>
        <li><i class="iconfont icon-fruit"></i><span>多多果园</span></li>
        <li><i class="iconfont icon-fruit"></i><span>砍价免费拿</span></li>
        <li><i class="iconfont icon-fruit"></i><span>天天领现金</span></li>
        <li><i class="iconfont icon-fruit"></i><span>多多爱消除</span></li>
        <li><i class="iconfont icon-fruit"></i><span>多多牧场</span></li>
        <li><i class="iconfont icon-fruit"></i><span>火车票</span></li>
        <li><i class="iconfont icon-fruit"></i><span>收获地址</span></li>
        <li><i class="iconfont icon-fruit"></i><span>我的评价</span></li>
        <!-- <li><i class="iconfont icon-fruit"></i><span>官方客服</span></li>
        <li><i class="iconfont icon-fruit"></i><span>我的设置</span></li> -->
      </ul>
    </main>
  <tuijian2 :xinxi='asa' />
  </div>
</template>
<script>
import Tuijian2 from '../components/Mycc';
export default{
  name:'Home',
  data(){
    return {
      yonghushuju:{name:'作鉴显孤独'},
      asa:[{image:require('../assets/imgs2/1.jpg'),yuanjia:180,discountPrice:80},
      {image:require('../assets/购物车.img/1.jpg'),yuanjia:300,discountPrice:200},
      {image:require('../assets/购物车.img/2.jpg'),yuanjia:299,discountPrice:200},
      {image:require('../assets/购物车.img/3.jpg'),yuanjia:299,discountPrice:199},
      {image:require('../assets/购物车.img/4.jpg'),yuanjia:499,discountPrice:399},
      {image:require('../assets/购物车.img/5.jpg'),yuanjia:299,discountPrice:199},
       {image:require('../assets/购物车.img/6.jpg'),yuanjia:199,discountPrice:50},
      {image:require('../assets/购物车.img/7.jpg'),yuanjia:599,discountPrice:399},
      {image:require('../assets/购物车.img/8.jpg'),yuanjia:199,discountPrice:99},
      {image:require('../assets/购物车.img/3.jpg'),yuanjia:299,discountPrice:199}]}
    
  },
  components:{
    tuijian2:Tuijian2
  }
}
</script>
<style scoped>
header{
  width: 100%;
  box-sizing: border-box;
  display:flex;
  height:4.8rem;
  line-height:4.8rem;
  background: rgb(235, 171, 171);
  position: relative;
}
header > .left{
  flex: 7;
}
header > .right{
  flex: 3
}
header > .left > i{
  font-size:3.2rem;
  line-height:4.8rem;
  margin-left:0.8rem;
  background:#f6f6f6;
  border-radius: 50%;
  color: #ccc
}
header > .left > span{
  vertical-align:1.2rem;
  border: 1px solid #008c8c;
  border-radius:0.4rem;
  margin-left:0.8rem;
  color: rgb(240, 64, 93);
}
strong{
  font-weight: 600;
  font-size:0.8rem;
  color: #08c;
  border: 1px solid;
  border-radius:0.4rem;
  background: #fff;
}
header > .left > section{
  /* text-align: center; */
  position: absolute;
  bottom:-1.6rem;
  left:4.8rem;
}
header > .right > section{
  color: #f6f6f6;
  /* border: 1px solid; */
  font-size:0.8rem;
  letter-spacing:0.08rem;
}
nav{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size:0.72rem;
  margin-top:0.4rem;
}
nav > .left{
  width: 50%;
  text-align: center;
  background-color: #f00;
}
nav > .right{
  width: 50%;
  background-color: #0f0;
  text-align: center;
  font-size:0.72rem;
}
nav > ul{
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  margin-top:0.6rem;
 
}
nav > ul > li{
  flex: 2;
  font-size:0.6rem;
  display: flex;
   justify-content: center;
  align-items: center;
  flex-direction: column;
}
nav > ul > li > i{
  color: #08c;
  font-size:0.8rem;
}
#component{
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  margin-top:0.8rem;
     box-sizing: border-box;
}
#component > section{
  width: 100%;
  text-align: center;
  font-size:0.8rem;
  color: #fff;
  background: #008c8c
}
#component > ul{
  margin: 0;
  padding: 0;
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  list-style: none;
}
#component > ul > li{
  width:20%;
  font-size: 0.52rem;
  margin-top:1.2rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-bottom:0.2rem;
  }
#component > ul > li > i{
  color: #f00;
  font-size:0.8rem;
}
@import '//at.alicdn.com/t/font_1571007_g2slygqw3iu.css';
@import '//at.alicdn.com/t/font_1571007_lqj3pmkch48.css';
@import '//at.alicdn.com/t/font_1571007_kyhv9pv2tz.css';
@import '//at.alicdn.com/t/font_1571007_0r40fkh4qk1l.css';
@import '//at.alicdn.com/t/font_1571007_16li2lx7kuk.css';
</style>
