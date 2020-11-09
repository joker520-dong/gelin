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
    arr:[{title:'爱的艺术',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/1.jpg"),
    label:'时长22分钟',
    value:'原价:免费'
    },{title:'取悦症',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/2.jpg"),
    label:'时长23分钟',
    value:'原价:免费'
    },{title:'幸福的婚姻',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/3.jpg"),
    label:'时长27分钟',
    value:'原价:免费'
    },{title:'癌症 真相',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/4.jpg"),
    label:'时长31分钟',
    value:'原价:免费'
    },{title:'精准表达',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/5.jpg"),
    label:'时长22分钟',
    value:'原价:免费'
    },]
  }
}
}
</script>

<style>

</style>