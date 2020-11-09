<template>
  <div>
    <van-row gutter="30" v-for="(val, index) in shuju" :key="index">
      <van-col span="6" offset="1"
        ><van-image width="100" height="100" :src="val.icon"
      /></van-col>
      <van-col span="12">
        <van-cell :title="val.title" :label="val.label" />
        <p>{{ val.value }}</p>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shuju: [
        {
          title: "刑事辩护书",
          label: "DoonerDIe",
          icon: require("../../../assets/tp/lunbotu/vip/chupin/6.png"),
          value: "以一线法官的视角",
        },
        {
          title: "汽车是怎么造出来的",
          label: "内向小瘦子",
          icon: require("../../../assets/tp/lunbotu/vip/chupin/7.png"),
          value: "汽车工程师告诉你。。",
        },
        {
          title: "穿过硝烟",
          label: "韩冲",
          icon: require("../../../assets/tp/lunbotu/vip/chupin/8.png"),
          value: "在中东的战地摄像师",
        },
        {
          title: "建筑生态笔记",
          label: "铭慰",
          icon: require("../../../assets/tp/lunbotu/vip/chupin/9.png"),
          value: "带你重拾自然人居体验？",
        },
        {
          title: "我在美国学设计",
          label: "李姬韧",
          icon: require("../../../assets/tp/lunbotu/vip/chupin/10.png"),
          value: "在USC读游戏设计",
        },
      ],
    };
  },
};
</script>