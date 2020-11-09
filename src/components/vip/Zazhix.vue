<template>
  <div>
    <Biaoti v-show="show3"></Biaoti>
    
    
    
  <!-- 接受传的index   获取题目  图片 -->
    
    <h1>{{zazhi.timu}}</h1>
    <van-image width="atuo" height="250" :src=zazhi.tp />




    <van-row @click="onoff1">
      知来源的声音、闪动的浮光掠影、突然下降的气温……大英博物馆内上演着古怪的一幕幕。傍晚，当最后一批参观者离开大英博物馆的建筑，外部大门封锁后，博物馆便恍然进入另一种状态。
      保安的夜班开始了，此时博物馆中的大部分灯都已熄灭。他们要在占地 85
      亩的建筑群中巡逻直到清晨，打着手电筒搜寻异常状况：漏水、煤气味、被困在偏僻楼道里的同事……当光柱打向黑暗的角落时，可能会照射出一具勇勐的罗马半身像，一个眼睛和牙齿发光的阿兹别克面具的影子，甚至也可能是一个真实的人类，比如一具死于
      5500 年前、蜷卧在重建沙质坟墓中的古埃及人尸体。
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="6"
        ><van-button icon="plus" type="primary" color="gray" round @click="tiao1"
      /></van-col>
      <van-col span="6"
        ><van-button icon="plus" type="primary" color="gray" round @click="tiao2"
      /></van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="8" class="haoyou1">请好友免费读</van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="14">每篇文章可以分享给10个好友</van-col>
    </van-row>
    <h3>评论</h3>
    <van-cell
      v-for="(val, index) in shuju"
      :key="index"
      :title="val.title"
      size="large"
      :label="val.label"
      :value="val.value"
      icon="location-o"
    >
      <template #right-icon>
        <van-icon name="good-job" :color="val.color" @click="huan(index)" />
      </template>
    </van-cell>
    <van-row type="flex" justify="space-around" v-show="show3">

<!-- 
      接受赞同  和评论 -->
      <van-col span="4"
        ><van-button icon="plus" type="primary" color="black" />{{zazhi.zan}}赞同</van-col
      >
      <van-col span="4"
        ><van-button icon="plus" type="primary" color="black" />目录</van-col
      >
      <van-col span="4"
        ><van-button icon="plus" type="primary" color="black" />{{zazhi.pin}}评论</van-col
      >
      <van-col span="4"
        ><van-button
          icon="plus"
          type="primary"
          color="black"
        />我的笔记</van-col
      >
      <van-col span="4"
        ><van-button icon="plus" type="primary" color="black" />分享</van-col
      >
    </van-row>
  </div>
</template>


<script>
import { Toast } from 'vant';

import Biaoti from "../biaoti/Biaoti";
export default {
  data() {
    return {
      timer: null,
      show3: false,
      num: 1,
      shuju: [
        { title: "小巨人", label: "我想去当保安", value: 1, color: "black" },
        { title: "苏苏", label: "它们只想回家", value: 3, color: "black" },
        { title: "稻草人", label: "造孽得地方", value: 5, color: "black" },
        { title: "小奋斗", label: "不知道如何表达", value: 26, color: "black" },
      ],
    };
  },
  computed: {
    zazhi(){
      return  this.$store.state.zazhi
    }
  },
  methods: {
    huan(index) {
      this.num++;

      if (this.num % 2 == 0) {
        this.shuju[index].color = "blue";
        this.shuju[index].value += 1;
      } else {
        this.shuju[index].value -= 1;
        this.shuju[index].color = "black";
      }
    },
    onoff1() {
      this.show3 =!this.show3;
    },
    tiao1(){
Toast.success('发送微信好友');
    },
      tiao2(){
Toast.success('发送微信朋友圈');
    }
  },
  components: {
    Biaoti,
  },
};
</script>

<style>
.haoyou1 {
  color: orange;
}
</style>