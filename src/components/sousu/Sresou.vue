<template>
  <div>
    <van-sticky>
      <van-cell title="知乎热搜" icon="shop" :center="true" title-class="juzhong">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <van-icon name="arrow-left" class="search-icon" @click="fanhui" />
        </template>
        <template #right-icon>
          <van-icon name="share" class="search-icon" @click="showPopup" />
        </template>
      </van-cell>
    </van-sticky>



<!-- 这是内容 -->

<div  v-for="n in 10" :key="n">
<van-cell title="单元格" icon="location-o"  label="123112"/>
<hr>
</div>
   
   
   
   
   
    <!-- 这是遮盖层 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      分享到。。。
      <van-grid :column-num="5">
        <van-grid-item
          v-for="(val,index) in zheceng "
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
  name: "Sresou",

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
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.juzhong {
  text-align: center;
}
</style>