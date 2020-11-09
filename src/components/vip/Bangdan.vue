<template>
  <div>
    <van-cell title="盐选榜单" size="large" :border="false">
      <template #icon>
        <van-icon name="arrow-left" class="search-icon" @click="fanhui" />
      </template>
      <template #right-icon>
        <van-icon name="search" class="search-icon" @click="tiaozhuan" />

        <van-icon name="share" class="search-icon" @click="showShare = true" />
      </template>
    </van-cell>
    <h2>热度榜</h2>

    <!-- 下面内容 得遍历 -->
    <div class="box" v-for="(val, index) in arr" :key="index">
      <div class="tp">
        <van-image width="100" height="100" lazy-load :src="val.icon" />
      </div>
      <div class="wz">
        <van-cell
          :title="val.name"
          size="large"
          :border="false"
          :label="val.label"
        >
          <template #extra>
            <van-icon :name=val.icon1 />
          </template>
        </van-cell>
      </div>
    </div>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
    />
  </div>
</template>
<script>
export default {
  name: "Bangdan",
  data() {
    return {
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "二维码", icon: "qrcode" },
          { name: "分享海报", icon: "poster" },
        ],
      ],
      arr: [
        {
          name: "美人妆",
          label: "共16节",
          icon: require("../../assets/tp/lunbotu/vip/bangdan/1.jpg"),
          icon1: require("../../assets/tp/lunbotu/vip/bangdan/11.jpg"),
        },
        {
          name: "倾国倾城",
          label: "共12节",
          icon: require("../../assets/tp/lunbotu/vip/bangdan/2.jpg"),
          icon1: require("../../assets/tp/lunbotu/vip/bangdan/22.jpg"),
        },
        {
          name: "西游新说",
          label: "共8节",
          icon: require("../../assets/tp/lunbotu/vip/bangdan/3.jpg"),
          icon1: require("../../assets/tp/lunbotu/vip/bangdan/33.jpg"),
        },
        {
          name: "穿越时空爱过你",
          label: "连载中，共8节 更新2节",
          icon: require("../../assets/tp/lunbotu/vip/bangdan/4.jpg"),
          icon1: require("../../assets/tp/lunbotu/vip/bangdan/44.jpg"),
        },
        {
          name: "认知颠覆",
          label: "共43节",
          icon: require("../../assets/tp/lunbotu/vip/bangdan/5.jpg"),
          icon1: require("../../assets/tp/lunbotu/vip/bangdan/55.png"),
        },
        {
          name: "午夜心慌慌",
          label: "共15节",
          icon: require("../../assets/tp/lunbotu/vip/bangdan/6.jpg"),
          icon1: require("../../assets/tp/lunbotu/vip/bangdan/66.png"),
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