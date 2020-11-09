<template>
    <div>
    <van-grid :column-num="4" square :border=false >
  <van-grid-item v-for="(val,index) in  batu" :key="index" :icon="val.img" :text="val.wenzi" />
</van-grid> 
   <van-cell title="我的卡片" >
  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
 
  <template #extra >

   <van-button @click="youbian"  color='#0080FF' size='small' icon="plus" type="primary">管理图片</van-button>
  </template>
 
</van-cell>
    </div>
</template>
<script>
export default {
    name:'Wbatu',
    methods: {
      youbian(){
          console.log(123)
      }  
    },
    data () {
        return {
            batu:[{
                img: require("../../assets/tp/tubiao/w1.png"),
                wenzi:'书架'
            },{
                 img: require("../../assets/tp/tubiao/w2.png"),
                wenzi:'已购'
            },{
                 img: require("../../assets/tp/tubiao/w3.png"),
                wenzi:'付费咨询'
            },{
                  img: require("../../assets/tp/tubiao/w4.png"),
                wenzi:'活动广场'
            },{
                 img: require("../../assets/tp/tubiao/w5.png"),
                wenzi:'钱包'
            },
            {
                img: require("../../assets/tp/tubiao/w6.png"),
                wenzi:'社区共建'
            },
            {
                 img: require("../../assets/tp/tubiao/w7.png"),
                wenzi:'反馈与帮助'
            },
            {
                 img: require("../../assets/tp/tubiao/w8.png"),
                wenzi:'邀请码'
            },]
        }
    }
}
</script>