<template>
    <div>
 <van-cell title=""  size="large"  :border="false" >
 
      <template #icon>
        <van-icon name="arrow-left" class="search-icon" @click="fanhui"  />
      </template>
         <template #right-icon>
          <van-icon name="share" class="search-icon" @click="showShare = true" />
        </template>
    </van-cell>
     <div class="bg" ></div>
     
     <!-- 头像 -->
      <van-image
  round
  width="10rem"
  height="10rem"
  :src=data[id].icon
/>

   
        
        
        <van-button round type="info"  icon="plus"  @click="add">关注</van-button>
     <span class="kong"></span>
     <van-button round type="default" icon="chat-o" @click="liaotian"></van-button>
     <h2>{{data[id].title}}</h2>
     <van-cell title="" value="内容" :label=data[id].title1 />
     <van-row gutter="20">
  <van-col span="20">关注他的人{{data[id].label}}</van-col>
 
 
</van-row>

     
    
  
    


    <!-- 遮罩层 -->
    <van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
  @select="onSelect"
/>
    </div>
</template>
<script>
export default {
    name:'Guanzhux',
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
      id:this.$route.query.id,
      data:this.$route.query.data
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
    add(){
        console.log("关注");
    },
    liaotian(){
        console.log("聊天");
    }
    }
}
</script>
<style lang="scss" scoped>
h2{
    margin-top: 40px;
    margin-left:60px;
}
.custom-title {

  margin-right: 4px;
  vertical-align: middle;
}

.search-icon {
  font-size: 16px;
  line-height: inherit;
}
.pp{
    text-align: center;
}
.bg{
  width: auto;
  height: 100px;
  background-color: rgb(212, 209, 209);
}

.kong{
   margin: 0px 20px;
}
</style>