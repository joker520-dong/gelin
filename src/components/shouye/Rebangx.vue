<template>
  <div>
    <Biaoti></Biaoti>
    <van-row>
  <van-col span="22" offset="1">  <h2>{{zhi[id].Timu2}}</h2></van-col>
</van-row>
<van-cell :title=zhi[id].Name icon="location-o"    size="large"  >
    <template #right-icon>
<van-button   v-if="on" icon="plus" type="primary" size="small"   @click="on1" >关注</van-button>
<van-button  v-else type="default" size="small" @click="on2">已关注</van-button>

  </template>














</van-cell>
<van-row>
  <van-col span="23"  offset="1">{{zhi[id].String}}</van-col>
 
</van-row>
<br>

<van-row>
  <van-col span="8"  offset="1"> 就是那个浏览</van-col>

</van-row>
<br>
<br>
<van-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
 
</van-divider>
   <van-row justify="center">
  <van-col span="10" offset="4">  <van-button  size="small" icon="https://img.yzcdn.cn/vant/user-active.png" type="default">
  邀请回答
</van-button></van-col>
    <van-col span="10" > <van-button size="small" icon="https://img.yzcdn.cn/vant/user-active.png" type="default">
  写回答
</van-button> </van-col>


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
  id:this.$route.query.id,
    biao1:2,
  
  }

},
computed: {
  zhi(){
    return this.$store.state.arr 
  }
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
  },
components:{
    Biaoti

  }
 
}
</script>

<style lang="scss" scoped>

</style>