<template>
    <div>
     
       <van-swipe :autoplay="2000" >
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="5">
  <van-grid-item v-for="(val,index) in tubiao " :key="index" :icon=val.tp :text=val.text  :to=val.url />
</van-grid>

  
    <div  v-for="(val,index)  in shuju " :key="index">
    
 <van-cell :title=val[0].timu   title-class="biaoti" value="查看更多" is-link />
     <van-row gutter="20">
  <van-col span="8" v-for="(val1,index1) in val" :key="index1"  @click="xiangqing(index,index1)">
    <van-image width="100" height="120" :src="val1.tp"></van-image>
    <van-cell :title=val1.title title-class="biaoti" :label=val1.labe  />
  </van-col>

</van-row>
</div>

      <div>
     <!-- 图片滑动 懒加载 -->
      <van-cell
      title="每周读一本|VOL.05"
      value="查看更多"
      title-class="biaoti"
      is-link
    >
    </van-cell>
    <van-swipe touchable :show-indicators="false">
      <van-swipe-item v-for="(image, index) in images1" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    </div>
 
     


     <!-- 还有无限刷新 -->



<div class="kong"></div>
    </div>
</template>
<script>
export default {
    name:'Vdushu',
    data () {
        return {
             images1: [
          require("../../assets/tp/lunbotu/d1.png"),
           require("../../assets/tp/lunbotu/d2.png"),
          require("../../assets/tp/lunbotu/d3.png"),
        
      ],
      images: [
          require("../../assets/tp/lunbotu/l1.png"),
           require("../../assets/tp/lunbotu/l5.jpg"),
          require("../../assets/tp/lunbotu/l3.png"),
        
      ],
   
        tubiao: [
        { text: "知乎出品", tp: require("../../assets/tp/tubiao/d1.png"),
        url:'/chupin'
        },
        { text: "书榜", tp: require("../../assets/tp/tubiao/d2.png"),   url:'/shubang' },
        { text: "小说", tp: require("../../assets/tp/tubiao/d3.png") ,},
        { text: "免费讲书", tp: require("../../assets/tp/tubiao/d4.png") ,url:'/jiangshu'},
        { text: "分类", tp: require("../../assets/tp/tubiao/d5.png") },
      ],
       shuju: [
        [
          {
            timu: "主编推荐",
            tp: require("../../assets/tp/lunbotu/vip/dushuhui/1.jpg"),
            title: "向上生长",
            labe: "九边",
          },
          {
            tp: require("../../assets/tp/lunbotu/vip/dushuhui/2.jpg"),
            title: "盐",
            labe: "孙频",
          },
          {
            tp: require("../../assets/tp/lunbotu/vip/dushuhui/3.jpg"),
            title: "大学四年",
            labe: "Lachel等",
          },
         
        ],
        [
          {
            timu: "本周新书",
            tp: require("../../assets/tp/lunbotu/vip/dushuhui/4.jpg"),
            title: "价格的发现",
            labe: "[美]保罗 米尔",
          },
          {
            tp: require("../../assets/tp/lunbotu/vip/dushuhui/5.jpg"),
            title: "小大夫",
            labe: "王小枪",
          },
          {
            tp: require("../../assets/tp/lunbotu/vip/dushuhui/6.jpg"),
            title: "半个小时漫画科学史",
            labe: "陈磊等",
          },
        
        ],
      ],
        }
    },
    methods: {
     xiangqing(index,index1){
       console.log(index,index1);
     this.$router.push({ path: '/dushuxiang', query: {id:index,id1:index1}})
     }
    }
}

</script>

<style lang="scss" scoped>

.kong{
  height: 50px;
}
</style>