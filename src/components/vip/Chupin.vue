<template>
    <div>
 <van-cell title="小小乎出品"  size="large"  :border="false" >
 
      <template #icon>
        <van-icon name="arrow-left" class="search-icon" @click="fanhui"  />
      </template>
         <template #right-icon>
              <van-icon name="search" class="search-icon" @click="tiaozhuan" />
             
          <van-icon name="share" class="search-icon" @click="showShare = true" />
        </template>
</van-cell>

    <van-tabs v-model="active">
  <van-tab title="周刊"><zhoukai></zhoukai></van-tab>
  <van-tab title="一小时"><yixiaoshi></yixiaoshi></van-tab>
  <van-tab title="小小乎 盐"><zhihuye></zhihuye></van-tab>

</van-tabs>
    
    
    
  

    <!-- 遮罩层 -->
  <van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
  
/>
    
    </div>
</template>
<script>
import zhoukai from './chupin1/zhoukai'
import yixiaoshi from'./chupin1/yixiaoshi '
import zhihuye from'./chupin1/zhihuye'


export default {
    
    name:'Bangdan',
     data() {
    return {
          active: 0,
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
    };
  },
    methods: {
        fanhui(){
            console.log(123);
            this.$router.go(-1)
        },
         showPopup() {
      this.show = true;
    },
    tiaozhuan(){
          this.$router.push({ path: '/sindex'});
    },
    shezhi(){
      console.log("跳转到新的页面");
    }
    },
    components: {
        zhoukai,yixiaoshi,zhihuye
    }

}
</script>
<style lang="scss" scoped>


.search-icon {
  font-size: 16px;
  line-height: inherit;
  margin: 0px 10px;
}
.box{
  width: auto;
  height: 140px;

}
.tp{
  width: 29%;
  height: 100%;
 
  float: left;
}
.wz{
   width: 68%;
  height: 100%;
 
 float: right;
}
.van-image{
  margin: 0px 10px;
}
</style>