<template>
    <nav>
       <div>
         <img :src="item" alt="" v-for="(item,index) in urls" :key='index' v-show='n==index'>
         <ul>
           <li  v-for="(v,i) in urls" :key='i' :class="i==n?cls:''"></li>
         </ul>
       </div>
     </nav>
</template>
<script>
    export default {
        name:'Banner',
         data(){
    return {
      n:0,
      temp:null,
    
      cls:'checked',
      urls:[
            require('../assets/imgs/0.jpg'),
            require('../assets/imgs/1.jpg'),
            require('../assets/imgs/2.jpg'),
            require('../assets/imgs/3.jpg'),
            require('../assets/imgs/4.jpg')]
    }
  },
  methods:{
    autoPlay(){
      this.temp=setInterval(()=>{
        this.n++;
        if(this.n == this.urls.length){
          this.n=0;
        }
      },2000)
    }
    
  },
  mounted(){
    this.autoPlay();
  },
  destryoyed(){
    clearInterval(this.temp)
  }
    }
</script>
<style scoped>
    nav{
  margin-top: 0.4rem;
  width: 100%;
  height: 6rem;
}
nav div{
  width: 100%;
  height: 100%;
  position: relative;
}
nav div img{
  width: 100%;
  height: 100%;
  display: block
}
nav div ul{
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  height: 0.4rem;
  border-radius: 0.1rem;
}
nav div ul li{
  width: 0.4rem;
  height:0.4rem;
  background: #fff;
  margin-right: 0.4rem;
  border-radius: 0.2rem;
}
nav div ul li:last-of-type{
  margin-right: 0px
}
.checked{
  background: rgb(70, 67, 67);
}

</style>>