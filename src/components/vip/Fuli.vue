<template>
  <div>
    <van-cell title="会员福利社" size="large" :border="false">
      <template #icon>
        <van-icon name="arrow-left" class="search-icon" @click="fanhui" />
      </template>
      <template #right-icon>
        <van-icon name="search" class="search-icon" @click="tiaozhuan" />

        <van-icon name="share" class="search-icon" @click="showPopup" />
      </template>
    </van-cell>
    <div>
      <van-image
        v-for="(val, index) in tp"
        :key="index"
        lazy-load
        fill
        :src="val.img"
      />
    </div>

    <!-- 遮罩层 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      分享到。。。
      <van-grid :column-num="5">
        <van-grid-item
          v-for="(val, index) in zheceng"
          :key="index"
          :icon="val.img"
          :text="val.text"
        />
      </van-grid>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "Fuli",
  data() {
    return {
      show: false,
      zheceng: [
        { text: "微信好友", img: require("../../assets/tp/lunbotu/1.png") },
        { text: "朋友圈", img: require("../../assets/tp/lunbotu/1.png") },
        { text: "QQ", img: require("../../assets/tp/lunbotu/1.png") },
        { text: "新浪微博", img: require("../../assets/tp/lunbotu/1.png") },
        { text: "知乎私信", img: require("../../assets/tp/lunbotu/1.png") },
        { text: "转发到想法", img: require("../../assets/tp/lunbotu/1.png") },
        { text: "复制链接", img: require("../../assets/tp/lunbotu/1.png") },
        { text: "更多", img: require("../../assets/tp/lunbotu/1.png") },
      ],
      tp: [
        {
          img: require("../../assets/tp/lunbotu/vip1.jpg"),
        },
          {
          img: require("../../assets/tp/lunbotu/vip2.jpg"),
        },
          {
          img: require("../../assets/tp/lunbotu/vip3.jpg"),
        },
          {
          img: require("../../assets/tp/lunbotu/vip4.jpg"),
        },
          {
          img: require("../../assets/tp/lunbotu/vip5.jpg"),
        },  {
          img: require("../../assets/tp/lunbotu/vip6.jpg"),
        },  {
          img: require("../../assets/tp/lunbotu/vip7.jpg"),
        },
      ],
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
*{
    margin: 0px;
    padding: 0px;
}
.search-icon {
  font-size: 16px;
  line-height: inherit;
  margin: 0px 10px;
}
// .box{
//     width: 100%;
// }
</style>