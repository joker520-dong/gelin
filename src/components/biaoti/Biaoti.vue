<template>
    <div>
 <van-cell title=""  size="large"  :border="false" >
 
      <template #icon>
        <van-icon name="arrow-left" class="search-icon" @click="fanhui"  />
      </template>
         <template #right-icon>
              <van-icon name="search" class="search-icon" @click="tiaozhuan" />
             
      
                <van-icon name="share" class="search-icon" @click="showShare = true"  />
        </template>
    </van-cell>
     
<van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
  @select="onSelect"
/>
    
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name:'biaoti',
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
     
    };
  },
    methods: {
        fanhui(){
            console.log(123);
            this.$router.go(-1)
        },
         onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    //      showPopup() {
    //   this.show = true;
    // },
    tiaozhuan(){
          this.$router.push({ path: '/sindex'});
    }
  
    }
}
</script>
<style lang="scss" scoped>


.search-icon {
  font-size: 16px;
  line-height: inherit;
  margin: 0px 10px;
}
</style>