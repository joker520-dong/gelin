<template>
  <div>
    <van-cell title="热门推荐" title-class="timu" value="查看更多" is-link />
    <el-carousel
      type="card"
      height="200px"
      arrow="hover"
      indicator-position="none"
    >
      <el-carousel-item v-for="(val, index) in images" :key="index">
        <img :src="val.tp" alt="" />
      </el-carousel-item>
    </el-carousel>

    <van-cell
      title="新人见面礼"
      label="赠送十张网络文学免费阅读卷"
      title-class="biaoti"
      is-link
    >
    </van-cell>
    <div>
 
      <van-grid direction="horizontal" :column-num="2" gutter="15">
        <van-grid-item
          v-for="(val, index) in fenlei"
          :key="index"
          :icon="val.icon"
          :text="val.text"
          @click="go(index)"
        />
      </van-grid>
    </div>
    <div v-for="(val,index) in zuoye" :key="index">
      <van-cell
        :title=val[0].timu
        title-class="biaoti"
        value="查看更多"
        is-link
      />
      <van-row gutter="5">
        <van-col span="8" v-for="(val1,index1) in val" :key="index1">
          <van-image
            width="100"
            height="120"
          :src=val1.icon
          />
          <van-cell
            :title=val1.title
            title-class="biaoti"
            :label=val1.label
           @click="tiao(index,index1)" 
      
          />
        </van-col>
      </van-row>
    </div>

 
    <div class="kong"></div>
  </div>
</template>
<script>
export default {
  name: "Vxiaoshuo",
  data() {
    return {
      images: [
        { tp: require("../../assets/tp/lunbotu/x1.jpg") },
        { tp: require("../../assets/tp/lunbotu/x2.jpg") },
        { tp: require("../../assets/tp/lunbotu/x3.jpg") },
      ],
      fenlei: [
        { text: "玄幻奇幻", icon: require("../../assets/tp/tubiao/x1.png") },
        { text: "科幻小说", icon: require("../../assets/tp/tubiao/x2.png") },
        { text: "文学作品", icon: require("../../assets/tp/tubiao/x3.png") },
        { text: "武侠仙侠", icon: require("../../assets/tp/tubiao/x4.png") },
        { text: "青春言情", icon: require("../../assets/tp/tubiao/x5.png") },
        { text: "悬疑推理", icon: require("../../assets/tp/tubiao/x6.png") },
        { text: "男生小说", icon: require("../../assets/tp/tubiao/x7.png") },
        { text: "女生小说", icon: require("../../assets/tp/tubiao/x8.png") },
      ],
      zuoye: [
        [
          {
            timu: "玄幻奇幻",
            icon: require("../../assets/tp/lunbotu/vip/xuanhui/1.jpg"),
            title: "雪鹰领主",
            label: "我吃西红柿",
          },
          {
        
            icon: require("../../assets/tp/lunbotu/vip/xuanhui/2.jpg"),
            title: "奥数神座",
            label: "爱潜水的乌贼",
          },
          {
        
            icon: require("../../assets/tp/lunbotu/vip/xuanhui/3.jpg"),
            title: "完美世界",
            label: "辰东",
          },
        ],
        [
          {
            timu: "科幻小说",
            icon: require("../../assets/tp/lunbotu/vip/kehuan/1.jpg"),
            title: "九星毒奶",
            label: "育",
          },
          {
        
            icon: require("../../assets/tp/lunbotu/vip/kehuan/2.jpg"),
            title: "吞噬星空",
            label: "我吃西红柿",
          },
          {
      
            icon: require("../../assets/tp/lunbotu/vip/kehuan/3.jpg"),
            title: "学霸的黑科技系统",
            label: "晨星LL",
          },
        ],[
          {
            timu: "文学作品",
            icon: require("../../assets/tp/lunbotu/vip/wenxue/1.jpg"),
            title: "跑吧梅洛斯",
            label: "太宰治",
          },
          {
        
            icon: require("../../assets/tp/lunbotu/vip/kehuan/2.jpg"),
            title: "基督山伯爵",
            label: "Alexandre",
          },
          {
      
            icon: require("../../assets/tp/lunbotu/vip/kehuan/3.jpg"),
            title: "三国演义",
            label: "（明）罗贯中",
          },
        ], [
          {
            timu: "武侠仙侠",
            icon: require("../../assets/tp/lunbotu/vip/wuxiaxianxia/2.jpg"),
            title: "凡人修仙传",
            label: "忘语",
          },
          {
        
            icon: require("../../assets/tp/lunbotu/vip/wuxiaxianxia/4.jpg"),
            title: "诛仙",
            label: "萧鼎",
          },
          {
      
            icon: require("../../assets/tp/lunbotu/vip/wuxiaxianxia/5.jpg"),
            title: "天下老九",
            label: "鹅是老五",
          },
        ],
      ],
    };
  },
  methods: {
    go(index) {
      this.$router.push({
        path: "/xiaoshuox",
        query: { txt: this.fenlei, id: index },
      });
    },
    tiao(index,index1){
      console.log(this.zuoye[0][0])
       this.$router.push({
        path: "/xiaoshuox1",
        query: { id: index,id1:index1 },
      });
  
    }
  },
};
</script>

<style lang="scss">
.biaoti {
  font-size: 20px;
}

.timu {
  font-weight: bold;
}
.kong {
  height: 50px;
}
</style>