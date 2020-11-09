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
    arr:[{title:'亲密关系',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/16.jpg"),
    label:'时长24分钟',
    value:'原价:免费'
    },{title:'进化心理学',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/17.jpg"),
    label:'时长25分钟',
    value:'原价:免费'
    },{title:'羞涩与社交焦虑',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/18.jpg"),
    label:'时长37分钟',
    value:'原价:免费'
    },{title:'批判性思维工具',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/19.jpg"),
    label:'时长26分钟',
    value:'原价:免费'
    },{title:'幸福之路',
    icon:require("../../../assets/tp/lunbotu/vip/jiangshu/20.jpg"),
    label:'时长30分钟',
    value:'原价:免费'
    },]
  }
}
}
</script>

<style>

</style>