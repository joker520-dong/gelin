<template>
  <div>
    <van-search
      show-action
      background="#0080FF"
      placeholder="请输入搜索关键词"
      @focus="tiaozhuan"
    >
      <!-- 二维码 -->
      <template #left>
        <van-button icon="scan" type="primary" color="#0080FF" />
      </template>

      <template #action>
        <van-button icon="circle" type="primary" color="#0080FF" to="/shezhi" />
        <!-- 设置 -->
      </template>
    </van-search>
    <div>
      <van-row>
        <van-col span="8">
          <van-image width="5rem" height="5rem" fit="contain" :src="tp"
        /></van-col>
        <van-col span="16">
          <van-cell
            :title="username"
            :boder="true"
            value="个人主页"
            size="large"
          >
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #right-icon>
              <van-icon name="arrow" @click="zhuye" class="search-icon" />
            </template>

        
          
          </van-cell>
        </van-col>
      </van-row>

      <van-row gutter="20">
        <van-col span="6"
          ><span>未开通</span><br /><span>创作中心</span></van-col
        >
        <van-col span="6"
          ><span>{{this.$store.state.num}}</span><br /><span @click="guanzhu">关注</span></van-col
        >
        <van-col span="6"><span>6</span><br /><span>收藏夹</span></van-col>
        <van-col span="6"><span>209</span><br /><span>最近浏览</span></van-col>
      </van-row>
    </div>
    <br />
    <br />
    <Wbatu></Wbatu>
    
              <van-row>
                <van-col span="8" v-if="on" @click="tiao1">注册</van-col>
                <van-col span="8" @click="tiao2">登录</van-col>
              </van-row>
  </div>
</template>
<script>
import storage from "../../assets/js/Localstorage.js";
import Wbatu from "./Batu";
export default {
  name: "Wheader",
  data() {
    return {
      username: "",
    
    };
  },
  computed: {
    tp() {
      return this.$store.state.tp;
    },
    on(){
      return   this.$store.state.on
    }
  },
  methods: {
    zhuye() {
      this.$router.push({ path: "/wgeren" });
    },
    guanzhu() {
      this.$router.push({ path: "/wguanzhu" });
    },

    tiaozhuan() {
      console.log(123);
      this.$router.push({ path: "/sindex" });
    },
    tiao1() {
      this.$router.push({ path: "/zzhuce" });
    },
    tiao2() {
      this.$router.push({ path: "/zdenglu" });
    },
  },
  components: {
    Wbatu,
  },
 
  mounted() {
    this.username = storage.Getstorage("username");
    //  this.on=this.$route.query.on1
    //  this.on=this.$route.query.on
  

  
    console.log(this.on)
  },
};
</script>
<style lang="scss" scoped>
.search-icon {
  font-size: 16px;
  line-height: inherit;
}
</style>