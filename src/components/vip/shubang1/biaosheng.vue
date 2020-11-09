<template>
  <div>
    <van-row gutter="20" v-for="(val,index) in shuju "  :key="index"> 
      <van-col span="8" offset="1">
        <van-image
          width="100"
          height="100"
          lazy-load
          :src=val.icon
      /></van-col>
      <van-col span="14"
        ><van-cell :title=val.title size="large" :label=val.label
      />
        <van-col span="8" offset="2"></van-col>
        <br>
        {{val.value}}
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
    data () {
        return {
              shuju: [
        {
          title: "人生由我",
          label: "极力推介 ",
          icon: require("../../../assets/tp/lunbotu/vip/redu/6.jpg"),
          value:"原价：￥35.4",
        },
         {
          title: "球状闪电",
          label: "没有球状闪电 ",
          icon: require("../../../assets/tp/lunbotu/vip/redu/7.jpg"),
          value:"原价：￥35",
        },  {
          title: "巴菲特的护城河",
          label: "特别好看呢",
          icon: require("../../../assets/tp/lunbotu/vip/redu/8.jpg"),
          value:"原价：免费",
        },  {
          title: "孩子，别玩手机了",
          label: "特别有趣的方式",
          icon: require("../../../assets/tp/lunbotu/vip/redu/9.jpg"),
          value:"原价：免费",
        },  {
          title: "华为灰度管理法",
          label: "百万读者称赞口碑作者 ",
          icon: require("../../../assets/tp/lunbotu/vip/redu/10.jpg"),
          value:"原价：免费",
        },
      ],
        }
    }
};
</script> 