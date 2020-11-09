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
          title: "向上生长",
          label: "百万读者称赞口碑作者 ",
          icon: require("../../../assets/tp/lunbotu/vip/redu/1.jpg"),
          value:"原价：￥28.99",
        },
         {
          title: "煤气灯效应",
          label: "在你心中占据重要位置 ",
          icon: require("../../../assets/tp/lunbotu/vip/redu/2.jpg"),
          value:"原价：￥34.8",
        },  {
          title: "良辰美锦",
          label: "未到四十便百病缠身",
          icon: require("../../../assets/tp/lunbotu/vip/redu/3.jpg"),
          value:"原价：￥28.99",
        },  {
          title: "漫画经济学",
          label: "特别有趣的方式",
          icon: require("../../../assets/tp/lunbotu/vip/redu/4.jpg"),
          value:"原价：￥39.99",
        },  {
          title: "能力陷进",
          label: "百万读者称赞口碑作者 ",
          icon: require("../../../assets/tp/lunbotu/vip/redu/5.jpg"),
          value:"原价：免费",
        },
      ],
        }
    }
};
</script>