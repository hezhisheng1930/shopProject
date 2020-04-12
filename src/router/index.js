import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue';
// import My from '../views/My.vue';
// import Dingdan from '../views/Dingdan.vue';
// import Shopcar from '../views/Shopcar.vue';
// import Yifu from '../components/yifu.vue';
// import Jiaju from '../components/jiaju.vue';
// import Lingshi from '../components/lingshi.vue';
// import Shouji from '../components/shouji.vue';
Vue.use(VueRouter);

const home=()=>import('../views/Home.vue')
const routes = [
  { path:'', component:home},
  {path:'/Home',component:home},
  { path:"/My",component:() => import('../views/My.vue')},
  {path:'/Dingdan',component:()=>import('../views/Dingdan.vue'),
  children:[{path:'',component:()=>import('../components/yifu.vue')},
  {path:'/Yifu',component:()=>import('../components/yifu.vue')},{path:'/Jiaju',component:()=>import('../components/jiaju.vue')},
  {path:'/Lingshi',component:()=>import('../components/lingshi.vue')},{path:'/Shouji',component:()=>import('../components/shouji.vue')}]},
  {path:'/Shopcar',component:()=>import('../views/Shopcar.vue')},

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
