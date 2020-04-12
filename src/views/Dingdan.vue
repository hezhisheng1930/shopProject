<template>
    <div>
        <section class="jujian">推荐</section>
        <div class="gehang"></div>
        <div class="btn">
            <i class="iconfont icon-suosou"></i>
<input type="text" name="" id="" v-model="msg" placeholder="搜索你想要的" @focus="plays" @keyup.delete='plays4' @blur="plays2" @keyup.enter='plays3'>
            <ul id="uls" v-show="flag" >
                <li v-for="(item ,index) in navXin" :key="index">{{item}}</li>
            </ul>
        </div>
        <header>
        <router-link class="router-link" to='/Shouji'>手机</router-link>
        <router-link class="router-link" to='/Yifu'>衣服</router-link>
        <router-link class="router-link" to='/Jiaju'>家具</router-link>
        <router-link class="router-link" to='/Lingshi' >零食</router-link>
        
        </header>
        <div class="xian"></div>  
            <main>
        
              
         <router-view/>
        </main>
    </div>
</template>
<script>

export default {
    name:"dingdan",
   data(){
       return {
           navXin:['冬季羽绒服','夏季短袖','秋季喷雾器','春季长衣'],
           flag:false,
           msg:''
       }
   },
   methods:{
           plays(){
                   this.flag=true
           },
           plays2(){
               this.flag=false
           },
           plays3(){
               if(this.msg){
                   this.navXin.push(this.msg);
                   this.msg='';
               }},
               plays4(){
                   if(this.navXin.length>4){
                   this.navXin.pop();}
               
               
           }
       },
       created(){
           console.log('推荐页面创建了')
       },
       destroyed(){
           console.log('销毁； ')
       }
}
</script>
<style scoped>
.router-link-active{
    color: #08c;
    font-weight: bold
}
header{
    width: 100%;
    font-size:0.72rem;
    display: flex;
    height:2rem;
}
.router-link{
    flex: 1;
    text-align: center;
    line-height:2rem;
    
}
 .jujian{
    font-size:0.8rem;
    color: #f00;
    text-align: center;
    font-weight: bold
}
.gehang{
    width: 100%;
    height:0.8rem;
    margin-top:0.2rem;
    box-sizing: border-box;
    background: linear-gradient(90deg, red,green, yellow,blue)
}


a{
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    color: rgb(54, 65, 54)
}
.btn{
    width: 100%;
    height:1.2rem;
    margin-top:0.4rem;
    line-height:1.2rem;
    position: relative;
}
.yincang{
    display: none;
}
.btn > input{
    width: 100%;
    height: 100%;
    margin-top: -0.4rem;
    padding: 0;
    border: 1px solid rgb(167, 165, 165);
    box-sizing: border-box;
    display: block;
    margin-top:0.4rem;
    padding-left:1.4rem;
    border-radius:0.8rem;
    background: #f0f0f0;
}
.btn > input:focus{
    outline: none;
}
.btn > i{
    position: absolute;
    left: 0.4rem;
}
.btn > ul{
    margin: 0;
    padding: 0px;
    list-style: none;
    width: 100%;
    position: relative;
    background:1px solid;
    box-sizing:border-box;
}
.btn > ul > li:first-of-type{
    border-top: 0rem;
    /* border-top-left-radius: 0.4rem */
    border-radius: 0.2rem 0.2rem 0rem 0rem;
}
.btn > ul > li:last-of-type{
    border-radius: 0rem 0rem 0.2rem 0.2rem;
}

 .btn > ul > li{
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid;
    font-size: 0.6rem;
    background: rgb(131, 211, 238);
    color: rgb(0,0,0);
}
.xian{
    width: 100%;
    height:0.12rem;
    background: #08c;
    margin-top:0.4rem;
}
@import '//at.alicdn.com/t/font_1571007_qk9f2w2ga2a.css';
</style>