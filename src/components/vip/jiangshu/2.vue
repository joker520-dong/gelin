<template>
  <div>


 <van-row gutter="20" v-for="(val,index) in arr"  :key="index"> 
      <van-col span="8" offset="1">
        <van-image
          width="100"
          height="100"
          lazy-load
          :src=val.icon
      /></van-col>
      <van-col span="14"
        ><van-cell :title=val.title size="large" :label=val.label
      > <template #right-icon>
    <van-button round type="default">收听</van-button>
  </template></van-cell>
        <van-col span="8" offset="2">{{val.value}}</van-col>
      </van-col>
    </van-row>

  </div>
</template>

<script>
export default {
data () {
  return {
    arr:[{title:'人格裂变的姑娘',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/6.jpg"),
    label:'时长33分钟',
    value:'原价:免费'
    },{title:'杜月笙传',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/7.jpg"),
    label:'时长29分钟',
    value:'原价:免费'
    },{title:'追风筝的人',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/8.jpg"),
    label:'时长27分钟',
    value:'原价:免费'
    },{title:'海边的卡夫卡',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/9.jpg"),
    label:'时长21分钟',
    value:'原价:免费'
    },{title:'时间简史',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/10.jpg"),
    label:'时长22分钟',
    value:'原价:免费'
    },]
  }
}
}
</script>

<style>

</style>