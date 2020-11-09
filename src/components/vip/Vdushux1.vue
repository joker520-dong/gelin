<template>
  <div>
    <van-cell title="内容上新" size="large" :border="false">
      <template #icon>
        <van-icon name="arrow-left" class="search-icon" @click="fanhui" />
      </template>
      <template #right-icon>
        <van-icon name="search" class="search-icon" @click="tiaozhuan" />

        <van-icon name="share" class="search-icon"  @click="showShare = true" />
      </template>
    </van-cell>
    <van-cell title="上新提醒设置" size="large" :border="false">
      <template #right-icon>
        <van-icon name="setting" class="search-icon" @click="shezhi" />
      </template>
    </van-cell>
    

    <!-- 下面内容 得遍历 -->
    <div class="box" v-for="(val,index) in arr" :key="index">
      <div class="tp">
        <van-image
          width="100"
          height="100"
          lazy-load
          :src=val.icon
        />
      </div>
      <div class="wz">
        <van-cell
          :title=val.name
          size="large"
          :border="false"
          :label=val.label
        >
          <template #right-icon>
            <van-button round type="info">阅读</van-button>
          </template>
        </van-cell>
      </div>
    </div>

    <!-- 遮罩层 -->
 <van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
 
/>
  </div>
</template>
<script>
export default {
  name: "Vdushux1",
  data() {
    return {
      
     showShare: false,
         options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
          
                   
           
        ],
        [
          { name: '复制链接', icon: 'link' },
           { name: '二维码', icon: 'qrcode' },
          { name: '分享海报', icon: 'poster' },
      
        ],
      ],
     arr:[{name:'PHP基础案例教程',label:'原价：￥31.9',
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
       },]
    };
  },
  methods: {
    fanhui() {
      console.log(123);
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    },
    tiaozhuan() {
      this.$router.push({ path: "/sindex" });
    },
    shezhi() {
      console.log("跳转到新的页面");
    },
  },
};
</script>
<style lang="scss" scoped>
.search-icon {
  font-size: 16px;
  line-height: inherit;
  margin: 0px 10px;
}
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