<template>
  <div>
    <Biaoti></Biaoti>
    <div class="box">
      <div class="tp">
        <van-image
          width="100"
          height="100"
          lazy-load
          :src=tuijiex[id][id1].tp
        />
      </div>

      <!-- 
      得接受 传的值 -->
      <div class="wz">
        <van-cell :title=tuijiex[id][0].timu size="large" :border="false">
          <template #label>
            <van-cell title="简介" label="文学故事">
              <template #right-icon>
                <!-- 遮罩层 -->
                <van-icon name="arrow" class="search-icon" @click="showPopup" />
                <van-popup
                  v-model="show"
                  position="bottom"
                  :style="{ height: '80%' }"
                  >{{value1[id].String}}</van-popup
                >
              </template>
            </van-cell>
            评分： {{ value }} <van-rate v-model="value" @change="onChange" />
          </template>
        </van-cell>
      </div>
    </div>
    <van-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  亲爱的会员，你已畅享该会员的内容

</van-divider>
<h3>作者</h3>
   <van-cell
   
      :title=tuijiex[id][id1].labe
      :boder="true"
    
    >
      <!-- 使用 title 插槽来自定义标题 -->
      <template #right-icon>
        <van-button icon="plus" type="primary" size="small"  @click="guan">关注</van-button>
      </template>
    </van-cell>
    <hr>
    <h4>目录</h4>
  </div>
</template>
<script>

import Biaoti from "../biaoti/Biaoti";
export default {
  name: "Tuijiex",
  data() {
    return {
      show: false,
      value: 2,
     id:this.$route.query.id,
      id1:this.$route.query.id1,
      y:[[{name:'PHP基础案例教程',label:'原价：￥31.9',
       icon: require("../../assets/tp/lunbotu/vip/shangxin/1.jpg"),
       },{name:'创客电子制作入门',label:'原价：￥41.9',
       icon: require("../../assets/tp/lunbotu/vip/shangxin/2.jpg"),
       },{name:'计算机操作系统',label:'原价：￥31.9',
       icon: require("../../assets/tp/lunbotu/vip/shangxin/3.jpg"),
       },{name:'智能小车机器人制作大全',label:'原价：￥37.8',
       icon: require("../../assets/tp/lunbotu/vip/shangxin/4.jpg"),
       },{name:'Excel2013使用详解',label:'原价：￥37.8',
       icon: require("../../assets/tp/lunbotu/vip/shangxin/5.jpg"),
       },{name:'新编信息检索教程',label:'原价：￥25.5',
       icon: require("../../assets/tp/lunbotu/vip/shangxin/1.jpg"),
       },],[],]
    };
  },
  computed: {
    tuijiex(){
         return  this.$store.state.shuju
    },
    value1(){
   return  this.$store.state.arr
    }
  },
  mounted () {
    this.y=this.$store.state.vip1
    console.log(this.y)
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    onChange(value) {
      console.log("当前值：" + value);
    },
    guan(){
        console.log("关注")
        console.log(this.y)
    }
  },
  components: {
    Biaoti,
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: auto;
  height: 140px;
}
.tp {
  width: 29%;
  height: 100%;

  float: left;
}
.wz {
  width: 68%;
  height: 100%;

  float: right;
}

</style>