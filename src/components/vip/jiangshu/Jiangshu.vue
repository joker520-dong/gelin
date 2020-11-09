<template>
    <div>
<Biaoti></Biaoti>
<van-row>
  <van-col span="24">
<van-image  fit="fill" :src="require('../../../assets/tp/lunbotu/jianshu.jpg')" />
  </van-col>
  <van-row>
  <van-col span="14">点击订阅按钮，即可每一天第一时间获取最新的【精彩讲书】</van-col>
  <van-col span="8" offset="2"><van-button type="default" color="red" v-if="show"   @click="onoff">订阅讲书</van-button>
  <van-button type="default"  v-else  @click="onoff1"> 已订阅</van-button></van-col>
</van-row>
</van-row>
<van-tabs >
  <van-tab title="热门推荐"><remen></remen></van-tab>
  <van-tab title="文学"><remen2></remen2></van-tab>
  <van-tab title="财商"><remen3></remen3></van-tab>
  <van-tab title="成长"><remen4></remen4></van-tab>
</van-tabs>
    </div>
</template>
<script>
import { Toast } from 'vant';
import Biaoti from '../../biaoti/Biaoti'
import  remen from './1'
import  remen2 from './2'
import  remen3 from './3'
import  remen4 from './4'
export default {
    data () {
        return {
        show:true
        }
    },
    components: {
        Biaoti,remen,remen2,remen3,remen4
    },
    methods: {
        onoff(){
            this.show=!this.show
            Toast('订阅成功~');
            console.log(this.show)
        },
        onoff1(){
               this.show=!this.show
                  Toast('取消订阅成功~')
        }
    }

}
</script>