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
    arr:[{title:'美国陷进',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/11.jpg"),
    label:'时长23分钟',
    value:'原价:免费'
    },{title:'财务自由之路',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/12.jpg"),
    label:'时长28分钟',
    value:'原价:免费'
    },{title:'经济学的思维方式',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/13.jpg"),
    label:'时长28分钟',
    value:'原价:免费'
    },{title:'血酬定律',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/14.jpg"),
    label:'时长28分钟',
    value:'原价:免费'
    },{title:'贫穷的本质',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/15.jpg"),
    label:'时长22分钟',
    value:'原价:免费'
    },]
  }
}
}
</script>

<style>

</style>