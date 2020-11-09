<template>
    <div>
 <van-cell title="分类排行"  size="large"  :border="false" >
 
      <template #icon>
        <van-icon name="arrow-left" class="search-icon" @click="fanhui"  />
      </template>
         <template #right-icon>
              <van-icon name="search" class="search-icon" @click="tiaozhuan" />
             
          <van-icon name="share" class="search-icon" @click="showShare = true"/>
        </template>
</van-cell>



<!-- 接受上面的值 -->
    <h2>  {{arr[id].text}}    </h2>
    
    
    
    
  <!-- 下面的内容得获取  从vuex里 或者直接写死 -->
    <div  class="box" v-for="(val,index) in arr1[id]" :key="index
    ">
      <div class="tp"  >
<van-image
  width="100"
  height="100"
  lazy-load
  :src=val.icon
/>
      </div>
      <div  class="wz">


    <van-cell :title=val.name size="large"  :border="false" :label=val.label >
 
       <template #right-icon>
            <van-button round type="info">去阅读</van-button>
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
    name:'Xiaoshuox',
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
      arr:[],
      id:0,

    };
  },
  computed: {
    arr1(){
      return this.$store.state.xiaoshuo
    }
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
    mounted () {
     this.arr= this.$route.query.txt
     this.id=this.$route.query.id
     console.log(this.arr);
     console.log(this.id);
  
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

</style>