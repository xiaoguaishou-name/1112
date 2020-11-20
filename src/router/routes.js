import Supply from '../pages/Supply/index.vue'
import Profit from '../pages/Profit/index.vue'
export default [
  {
    path:'/home',
    component:Supply
  },
  {
    path:'/profit',
    component:Profit
  },
  {
    path:'/',
    redirect:'/home'
  }
]