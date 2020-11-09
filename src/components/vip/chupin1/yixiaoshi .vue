<template>
  <div>
    <van-row gutter="30"  v-for="(val,index) in shuju " :key="index">
      <van-col span="6" offset="1"
        ><van-image
          width="100"
          height="100"
          :src=val.icon
      /></van-col>
      <van-col span="12">
        <van-cell :title=val.title  :label=val.label
      />
      <p>{{val.value}}</p>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
         shuju:[{title:"加勒比往事1",label:'十一点半',
         icon:require("../../../assets/tp/lunbotu/vip/chupin/1.png"),
         value:'为什么哥伦比亚到此都不知道他抵达的是哪儿'
         },{title:"流行文化中的克苏鲁神话",label:'大乘虚怀苦',
         icon:require("../../../assets/tp/lunbotu/vip/chupin/2.png"),
         value:'漫威、魔兽、迪迦奥特曼。。'
         },{title:"谁亡了大宋",label:'丧心病狂刘董事',
         icon:require("../../../assets/tp/lunbotu/vip/chupin/3.png"),
         value:'为什么哥伦比亚到此都不知道他抵达的是哪儿'
         },{title:"大脑通讯员",label:'赵思家',
         icon:require("../../../assets/tp/lunbotu/vip/chupin/4.png"),
         value:'爱情真的由多巴胺控制吗？'
         },{title:"看不见的恋人",label:'时光多吉等',
         icon:require("../../../assets/tp/lunbotu/vip/chupin/5.png"),
         value:'看不见彼此等'
         },]
    }
  }
};
</script>