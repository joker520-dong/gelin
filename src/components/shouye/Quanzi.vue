<template>
  <div>
    <div v-for="(val,index) in arr2" :key="index">
      <van-cell
        :title=val.title
        :icon=val.icon
        :label=val.label
      />
      <van-row>
        <van-col span="8" offset="1">{{val.timu}}</van-col>
      </van-row>
      <van-row>
        <van-col span="8" offset="1"
          ><van-image
            width="100"
            height="100"
            :src="val.tp"
        /></van-col>
        <van-col span="8"
          ><van-image
            width="100"
            height="100"
             :src="val.tp1"
        /></van-col>
      </van-row>
      <van-row>
        <van-col span="4" offset="1"
          ><van-button
            size="small"
            icon="https://img.yzcdn.cn/vant/user-active.png"
            type="default"
            @click="add"
          >
           {{val.zan}}
          </van-button></van-col
        >

        <van-col span="4"
          ><van-button size="small" icon="like-o" type="default" @click="add1">
         {{val.xin}}
          </van-button></van-col
        >
        <van-col span="4" offset="7"
          ><van-button size="small" icon="chat-o" type="default">
            {{val.xiaoxi}}
          </van-button></van-col
        >
        <van-col span="4"
          ><van-button
            icon="weapp-nav"
            type="default"
            size="small"
            @click="showPopup"
        /></van-col>
      </van-row>
    </div>
    <div class="quanzi"></div>

    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <van-cell
        v-for="(val, index) in arr"
        :key="index"
        :title="val.title"
        @click="tiao"
      />
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      show: false,
      arr: [
        { title: "不感兴趣" },
        { title: "内容质量差" },
        { title: "不想看此作者" },
        { title: "不想看此圈子" },
      ],
      arr2: [
        {
          title: "婷子",
          icon: require("../../assets/tp/lunbotu/1.png"),
          label: "10-18最后回复",
          timu: "原来是枚程序员",
          zan: 98,
          xin: 65,
          xiaoxi: 3,
          tp: require("../../assets/tp/lunbotu/quanzi/1.jpg"),
          tp1: require("../../assets/tp/lunbotu/quanzi/2.jpg"),
        },{
          title: "科技猕猴桃",
          icon: require("../../assets/tp/lunbotu/1.png"),
          label: "10-15最后回复",
          timu: "这个脸我不要了",
          zan: 85,
          xin: 46,
          xiaoxi: 5,
          tp: require("../../assets/tp/lunbotu/quanzi/3.jpg"),
          tp1: require("../../assets/tp/lunbotu/quanzi/4.jpg"),
        },{
          title: "瓦房上的猫yu",
          icon: require("../../assets/tp/lunbotu/1.png"),
          label: "10-15最后回复",
          timu: "这是啥时候的事情",
          zan: 102,
          xin: 59,
          xiaoxi: 10
          ,
          tp: require("../../assets/tp/lunbotu/quanzi/5.jpg"),
          tp1: require("../../assets/tp/lunbotu/quanzi/6.jpg"),
        },{
          title: "叛逆的少年",
          icon: require("../../assets/tp/lunbotu/1.png"),
          label: "10-14最后回复",
          timu: "靠，过了这么久又刷到这张图片了",
          zan: 103,
          xin: 54,
          xiaoxi: 11,
          tp: require("../../assets/tp/lunbotu/quanzi/7.jpg"),
          tp1: require("../../assets/tp/lunbotu/quanzi/8.jpg"),
        },{
          title: "森林的白猫",
          icon: require("../../assets/tp/lunbotu/1.png"),
          label: "10-13最后回复",
          timu: "上点最近挖的生图",
          zan: 106,
          xin: 35,
          xiaoxi: 14,
          tp: require("../../assets/tp/lunbotu/quanzi/9.jpg"),
          tp1: require("../../assets/tp/lunbotu/quanzi/10.jpg"),
        },
      ],

      num: 1,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    tiao() {
      Toast({
        message: "将减少此类的内容的推荐",
        position: "bottom",
      });
      this.show = false;
    },
    add() {
      this.num++;

      if (this.num % 2 == 0) {
        this.zan += 1;
      } else {
        this.zan -= 1;
      }
      console.log(this.num);
    },
    add1() {
      this.num++;
      if (this.num % 2 == 0) {
        this.xin += 1;
      } else {
        this.xin -= 1;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.quanzi {
  height: 50px;
}
</style>