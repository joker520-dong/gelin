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
          title: "镖人",
          label: "明星都在追看 ",
          icon: require("../../../assets/tp/lunbotu/vip/redu/11.jpg"),
          value:"原价：￥35.4",
        },
         {
          title: "横渡孟加拉湾",
          label: "豆瓣评分9.4 ",
          icon: require("../../../assets/tp/lunbotu/vip/redu/12.jpg"),
          value:"原价：￥59.99",
        },  {
          title: "镖人（卷十）",
          label: "特别好看呢",
          icon: require("../../../assets/tp/lunbotu/vip/redu/13.jpg"),
          value:"原价￥42.8",
        },  {
          title: "影响力投资",
          label: "为财富变革提速",
          icon: require("../../../assets/tp/lunbotu/vip/redu/14.jpg"),
          value:"原价：免费",
        },  {
          title: "信睿周报",
          label: "百万读者称赞口碑作者 ",
          icon: require("../../../assets/tp/lunbotu/vip/redu/15.jpg"),
          value:"原价￥28.8",
        },
      ],
        }
    }
};
</script> 