<template>
  <div>
    <van-cell :title="username" :icon="tp" size="large">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-icon name="search" class="search-icon" @click="xx" />
      </template>
    </van-cell>

    <!-- 
通知栏 -->
    <van-notice-bar left-icon="volume-o" :scrollable="false">
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :show-indicators="false"
      >
        <!-- 得遍历   获取数据 改变  内容1 -->
        <van-swipe-item v-for="(val,index) in lunbo" :key="index">{{val.txt}}</van-swipe-item>
       
      </van-swipe>
    </van-notice-bar>


      <!-- 得 点击 一下 改变标签文字得颜色 -->
    <van-tabs animated @click="onClick"  v-model="active"  >
      <van-tab
        v-for="(val,index) in arr"
        :key="index"
          :title="val.name"
  
        :to="val.to"
      
      >
   



      </van-tab>
    </van-tabs>
    <div id="kong"></div>
  </div>
</template>
<script>
import storage from'../../assets/js/Localstorage.js'
export default {
  name: "Vheader",
  data() {
    return {
      active:0,
      username:'',
      arr: [
        { name: "会员推荐", to: "/vip/0" },
        { name: "小说", to: "/vip/1" },
        { name: "读书会", to: "/vip/2" },
        { name: "杂志", to: "/vip/3" },
      
      ],
      lunbo:[
      
      {txt:"欢迎来到小小乎！"},
       {txt:"奥里给 美好的一天开始了！"},
       {txt:"盐选会员已累计为你节省29.0元"}
      ]
    
    };
  },
  computed: {
    tp(){
     return  this.$store.state.tp
    }
  },
  methods: {
    xx() {
      //跳转到新的页面
      this.$router.push({ path: '/sindex'});
    },

    onClick(title) {
      //切换一次  color  变为red
      console.log(title);
    },
  },
  mounted () {
    this.username=storage.Getstorage("username")
  }
};
</script>
<style lang="scss" scoped>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.kong{
  height: 50px;
}
</style>
