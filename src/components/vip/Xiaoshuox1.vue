<template>
    <div>
        <!-- timu  接受传过来的值 -->
 <van-cell :title="xx"  size="large"  :border="false" >
 
      <template #icon>
        <van-icon name="arrow-left" class="search-icon" @click="fanhui"  />
      </template>
         <template #right-icon>
              <van-icon name="search" class="search-icon" @click="tiaozhuan" />
             
          <van-icon name="share" class="search-icon" @click="showShare = true" />
        </template>
</van-cell>
<van-image width="100" height="100" :src=shuju[id][id1].icon  />
<h2 >{{shuju[id][id1].title}}</h2>
<span class="zuo">{{shuju[id][id1].label}}</span>
<van-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  详情
</van-divider>
<div class="van-multi-ellipsis--l3">
 <h3>简介</h3>
 大撒大撒大撒倒萨倒萨倒萨倒萨的撒大苏打撒旦撒旦撒旦撒旦撒旦啊实打撒旦撒旦啊实打实啊实打萨达萨达撒旦打撒撒大撒大撒阿德撒大撒大撒大撒大撒大撒大撒大撒大苏打撒旦旦
</div>

<div>
<h3>评价</h3>

 <van-cell icon="require('../../assets/tp/lunbotu/1.png')"   :title=val.title  v-for="(val,index) in pinglun" :key="index" >
<template #label>
   <van-rate v-model="value" size="5px" />
   <div>{{val.label}}</div>
  
  </template>

 </van-cell>
 <div class="tp1">
    <van-image fit="fill" :src="require('../../assets/tp/lunbotu/xiaoshuo .jpg')" />
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
    name:'Xiaoshuox1',
     data() {
    return {
      
         value: 3,//星星的默认值
      showShare: false,
      id:this.$route.query.id,
      id1:this.$route.query.id1,
      xx:null,
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
     pinglun:[{title:'joker',label:'好好看呀'},{title:'你真好',label:'绝对好看极了'},{title:'derder',label:'怎么更新这么慢呀'},]
    };
  },
  computed: {
    shuju(){
return  this.$store.state.zuoye
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
      this.xx=this.shuju[this.id][0].timu
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
h2 {
    margin-top: -90px;
    margin-left: 170px;
}
.zuo{
     margin-top: -70px;
    margin-left: 170px;
}
.ping{
    font-size: 50px;
    font-weight: bold;
    margin: 0px 5px ;
}
.tp1{
    width: 375.200px;
    height: 200px;
}
</style>