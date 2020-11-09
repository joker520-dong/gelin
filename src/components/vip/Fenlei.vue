<template>
  <div>
    <van-cell title="分类" size="large">
      <template #icon>
        <van-icon name="arrow-left" class="search-icon" @click="fanhui" />
      </template>
      <template #right-icon>
        <van-icon name="search" class="search-icon" @click="tiaozhuan" />

        <van-icon name="share" class="search-icon" @click="showPopup" />
      </template>
    </van-cell>

    分类



    <!-- 这个有问题 -->
  <van-tree-select  :items="items" :active-id.sync="activeId"
  :main-active-index.sync="activeIndex">
  <template #content>
   <van-grid :column-num="3" v-for="n in 3" :key="n">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid>
   
  </template>
</van-tree-select>

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
      activeId: 1,
      activeIndex: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }],
     
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
* {
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