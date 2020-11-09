<template>
  <div>
    <van-grid :column-num="3" center gutter="10px" :border="false">
      <van-grid-item
        v-for="(val, index) in wenzi"
        :key="index"
        :icon="val.icon"
        :text="val.name"
      />
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "Ffenqu",
  data() {
    return {
      wenzi: [
        { name: "小蓝星", icon: require("../../assets/tp/tubiao/f1.png") },
        { name: "活动中心", icon: require("../../assets/tp/tubiao/f2.png") },
        { name: "数码", icon: require("../../assets/tp/tubiao/f3.png") },
        { name: "影视", icon: require("../../assets/tp/tubiao/f4.png") },
        { name: "时尚", icon: require("../../assets/tp/tubiao/f5.png") },
        { name: "体育", icon: require("../../assets/tp/tubiao/f6.png") },
        { name: "校园", icon: require("../../assets/tp/tubiao/f7.png") },
        { name: "亲子", icon: require("../../assets/tp/tubiao/f8.png") },
        { name: "科学", icon: require("../../assets/tp/tubiao/f9.png") },
        { name: "动漫", icon: require("../../assets/tp/tubiao/f10.png") },
        { name: "游戏", icon: require("../../assets/tp/tubiao/f11.png") },
        { name: "汽车", icon: require("../../assets/tp/tubiao/f12.png") },
        { name: "旅行", icon: require("../../assets/tp/tubiao/f13.png") },
        { name: "职场", icon: require("../../assets/tp/tubiao/f14.png") },
        { name: "法律", icon: require("../../assets/tp/tubiao/f15.png") },
      ], //文字
    };
  },
};
</script>