<template>
    <section id="content">
        <h4>购物车</h4>
        <nav>
            <section class="left">
                <i class="icon-dizhi iconfont"></i>
                广东省，东莞市，东坑镇</section>
             <section class="right">编辑地址</section>
        </nav>
        <footer>
            <div>
                <div class="span1">京东自营</div>
            <div class="span2">优惠券 </div>
                <section class="left">
                <img :src="shopXinxi.ims" alt="">
                <strong>无货</strong>
                </section>
            <section class="right">
                <span>{{shopXinxi.xinxi}}</span>
                <span>{{shopXinxi.banben}}</span>
                <span>￥{{shopXinxi.jiage}}</span>
                <span>赠品x3</span>
            </section>
            </div>    
        </footer>
        <hr>
        <div id="TJ">猜你想要</div>
       <mytuijian :jicheng='tupiandizhi' />
    </section>
</template>
<script>
import tuijian from '../components/tuijian.vue';
export default {
    name:'Shopcar',
    data(){
          return {
              shopXinxi:{jiage:'3699.00',xinxi:'华为(HUAWEI)MateBook D 15.6英寸全面屏轻薄笔记本电脑第三方',
              banben:'D15【linux版】 R5 8+256+1',ims:require('../assets/tupian.jpg')},
                   tupiandizhi:[{image:require('../assets/imgs2/1.jpg'),yuanjia:180,discountPrice:80},
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
        mytuijian:tuijian
    }
}
</script>
<style scoped>
#content{
    width: 100%;
    /* height: 100%; */
}
#content > h4{
    margin: 0;
    padding: 0;
    font-size:0.8rem;
    text-align: center;
    box-sizing: border-box;
    padding-top:0.2rem;
    color: #fff;
    font-weight: 500;
    background: #08c;
}
#content > nav{
    width: 100%;
    margin-top:0.4rem;
    background: pink;
    font-size:0.56rem;
    display: flex;
}
#content > nav >section{
    flex: 1;
    text-align: center;
}
#content > nav .left{
    color: rgb(107, 102, 102);
}
#content > footer{
    width: 100%;
    /* height: 300px; */
    margin-top: 0.4rem
}
#content > footer > div{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top:0.2rem;
}
#content > footer > div > .span1{
    font-size:0.6rem;
    width: 50%;
    /* flex: 1; */
}
#content > footer > div > .span2{
    font-size:0.6rem;
    color: #f00;
    /* display: block; */
    /* flex: 1; */
    width: 50%;
    text-align: right;
}

#content > footer > div > .left{
    width: 50%;
    height:4.2rem;
    margin-top:0.4rem;
}
#content > footer > div > .right{
    width: 50%;
    margin-top:0.4rem;
    height:5.2rem;
    background: rgb(235, 230, 230);
}
#content > footer > div > .left > img{
    width: 100%;
    height: 100%;
    display: block;
}
#content > footer > div > .left > strong{
    width: 100%;
    display: block;
    font-weight: 500;
    font-size:0.8rem;
    text-align: center;
    border-radius:0.8rem;
    background:#ccc;
} 
#content > footer > div > .right > span:first-of-type{
    font-size:0.52rem;
    display: block;
    height:1.6rem;
    overflow: hidden;
    white-space: nowrap;
    line-height:1.6rem;
    text-overflow: ellipsis;
}
#content > footer > div > .right > span:nth-of-type(2){
display: block;
height:0.8rem;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
font-size:0.6rem;
background: #f6f6f6
}
#content > footer > div > .right > span:nth-of-type(3){
    display: block;
    width:4.4rem;
    margin-top:0.4rem;
    color: #f00;
    line-height:1.2rem;
    height:1.2rem;
    font-size:0.8rem;
    font-weight: bold;
}
#content > footer > div > .right > span:nth-of-type(3)::first-letter{
    font-size:1rem;
}

#content > footer > div > .right > span:nth-of-type(4){
    display: block;
    background-color: rgb(138, 130, 130);
    font-size:0.56rem;
    color: #fff;
    width:2.4rem;
    margin-top:0.4rem;
}
hr{
    margin-top:1.2rem;
    border: 0.04rem solid #f00;
    margin-bottom:0rem;
}
#content > #TJ{
    width:4rem;
    margin: 0rem auto;
    border-radius: 0rem 0rem 0.4rem 0.4rem;
    text-align: center;
    font-size: 0.6rem;
    color: #fff;
    background: #f40;
    margin-bottom: 0.4rem;
}
@import '//at.alicdn.com/t/font_1571007_ska4p6lg9ts.css';
</style>