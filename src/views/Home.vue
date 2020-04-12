 <template>
    <div>
      <div id="guding" @click="Rotate" ref="guding2">
        <a href="#app"  class="iconfont icon-jiantou"></a>
      </div>
     <header ref="header">
       <ul>
         <li class="tubiao"  v-for="(item,i) in lists" :key="i">
           <i :class="item.logo" :style="{background:item.color}"></i> 
           <span>{{item.content}}</span> 
          </li>
       </ul>
     </header>
     <!-- 轮播图组件 -->
     <mycol3/>
  <main id="tuijian">
    <ul>
      <li v-for="(item,i) in imgs2" :key="i">
        <img :src="item.image" alt="">
        <span>折扣价:{{item.discountPrice}}</span>
        <del>原价:{{item.yuanjia}}</del>
      </li>
     
    </ul>
  </main>
 </div>
 </template>
<script>

import Banner from '../components/banner.vue';
export default{
  name:'Home',
  data(){
    return {
      lists:[{content:'美食',logo:'iconfont icon-shouyeshouye',color:'#f40'},
      {content:'餐厅',logo:'iconfont icon-meishi1',color:'green'},
      {content:'娱乐',logo:'iconfont icon-shouyeshouye',color:'blue'},
      {content:'旅游',logo:'iconfont icon-shouyeshouye',color:'pink'},
      {content:'健康',logo:'iconfont icon-shouyeshouye',color:'lightblue'},
      {content:'景点',logo:'iconfont icon-shouyeshouye',color:'#08c'},
      {content:'生活',logo:'iconfont icon-shouyeshouye',color:'#008c8c'},
      {content:'充值',logo:'iconfont icon-shouyeshouye',color:'yellow'}],
      n:0,
      temp:null,   //首页推荐广告图片
      imgs2:[{image:require('../assets/imgs2/1.jpg'),yuanjia:180,discountPrice:80},
      {image:require('../assets/imgs2/2.jpg'),yuanjia:500,discountPrice:300},
      {image:require('../assets/imgs2/3.jpg'),yuanjia:299,discountPrice:200},
      {image:require('../assets/imgs2/4.jpg'),yuanjia:199,discountPrice:99},
      {image:require('../assets/imgs2/5.jpg'),yuanjia:599,discountPrice:499},
      {image:require('../assets/imgs2/6.jpg'),yuanjia:399,discountPrice:299},
       {image:require('../assets/imgs2/7.jpg'),yuanjia:99,discountPrice:50},
      {image:require('../assets/imgs2/8.jpg'),yuanjia:699,discountPrice:399},
      {image:require('../assets/imgs2/9.jpg'),yuanjia:299,discountPrice:199},
      {image:require('../assets/imgs2/10.jpg'),yuanjia:199,discountPrice:99}],

      
    }},
    components:{
    mycol3:Banner  //生成组件
  },
  methods:{
    Rotate(){
      let she=this.$refs.guding2;
      // she.className='iconfont icon-jiantou xuanzhuan';
      if(window.pageYOffset>=this.$refs.header.offsetHeight){
        she.className=' xuanzhuan';
      }else{
        she.className='';
      }
    }
  }

}
</script>

<style scoped>
#guding{
  width: 50px;
  height: 50px;
  background: rgb(122, 129, 122);
  position: fixed;
  top:380px;
  right: 0px;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  transition: transform 1s linear 0s;
}
#guding > a{
  text-decoration: none;
  color: #fff;
  font-size: 30px;
}
.xuanzhuan{
  transform: rotate(90deg);
}

 header ul{
  padding: 0px;
  margin: 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none
}
header ul li{
  color: #0f0;
  font-size: 30px;
  /* background: rgb(140, 168, 140); */
  width: 25%;
  margin-top: 10px;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
header ul li > i{
  color: #fff;
  font-size: 2.4rem;
  border-radius: 0.4rem;
  /* background: #928383 */
  box-shadow: 1px 1px 5px #000;
}
 header ul li > span{
  color: rgb(54, 52, 52);
  font-size: 0.6rem
}
main{
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
}

@import '//at.alicdn.com/t/font_1571007_kyhv9pv2tz.css';
@import '//at.alicdn.com/t/font_1571007_2p71ruuoci6.css';
@import '//at.alicdn.com/t/font_1571007_jd1nkpcn949.css';

</style>
