<template>
  <div>
    <Biaoti></Biaoti>
    <van-row>
  <van-col span="22" offset="1">  <h2>{{y[id].Timu}}</h2></van-col>
</van-row>
   <van-row justify="center">
  <van-col span="10" offset="4">  <van-button  size="small" icon="https://img.yzcdn.cn/vant/user-active.png" type="default">
  邀请回答
</van-button></van-col>
    <van-col span="10" > <van-button size="small" icon="https://img.yzcdn.cn/vant/user-active.png" type="default">
  写回答
</van-button> </van-col>
<br>
<br>
<van-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
 
</van-divider>
<van-cell :title="title" icon="location-o"    size="large"  >
    <template #right-icon>
<van-button   v-if="on" icon="plus" type="primary" size="small"   @click="on1" >关注</van-button>
<van-button  v-else type="default" size="small" @click="on2">已关注</van-button>


<van-tabbar v-model="active" >
  <van-tabbar-item @click="onChange(index)" :icon=val.icon v-for="(val,index) in arrtubiao" :badge=val.bage    :key="index">{{val.nei}}</van-tabbar-item>

</van-tabbar>
  </template>
</van-cell>
<van-row>
  <van-col span="23" offset="1">{{y[id].String}}</van-col>

</van-row>
</van-row>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import Biaoti from '../biaoti/Biaoti'
export default {
data () {
  return {
    
      active: 0,
    on:true,
    num:1,
    biao1:2,
    id:this.$route.query.id,
    title:'',
    //路由传得值
    arrtubiao:[{
      icon:"home-o",
      nei:'赞同',
      bage:268
    },{
      icon:"setting-o",
      nei:'喜欢',
      bage:26
    },{
      icon:"friends-o",
      nei:'收藏',
         bage:2
    },{
      icon:"setting-o",
      nei:'评论',
      bage:4
    },]
  }
},
computed: {
  y(){
   return  this.$store.state.arr 
  }
},
mounted () {
   this.title=this.$store.state.arr[this.id].Name 
   this.arrtubiao[1].bage=this.$store.state.arr[this.id].Number
    this.arrrtubiao[3].bage=this.$store.state.arr[this.id].Number2
},
methods: {
  on1(){
    this.on=false
  },
  on2(){
    Dialog.confirm({
 
  message: '确定要取消关注吗',
})
  .then(() => {
   this.on=true
  })
  .catch(() => {
    // on cancel
  });
  },
  onChange(index) {
    this.num++
    if(this.num%2==0){
      this.arrtubiao[index].bage+=1;
    }else{
       this.arrtubiao[index].bage-=1;
    }
 console.log(this.num)
 
}},
components:{
    Biaoti

  }
 
}
</script>

<style lang="scss" scoped>

</style>