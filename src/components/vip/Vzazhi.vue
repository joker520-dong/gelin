<template>
  <div>
    <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <h2>封面故事</h2>

    <!-- 
       差数据 -->
    <div class="tumu" v-for="(val,index) in shuju" :key="index">
      <div><img :src=  val[0].tp class="tp11" /></div>
      <br />
      <span @click="tiao(val)"><b>{{val[0].timu}}</b></span>
      <van-row type="flex">
        <van-col span="6">{{val[0].zan}}</van-col>
        <van-col span="6">{{val[0].pin}}</van-col>
      </van-row>
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa' }">
      </van-divider>

      <div v-for="(val1,index1) in  val" :key="index1" @click="tiao1(val1)">
        <van-row>
          <van-col span="24" class="zi1">{{val1.timu1}}</van-col>
        </van-row>
        <van-row>
          <van-col span="18">
            <van-row>
              <van-col span="24">{{val1.neirong1}}</van-col>
            </van-row>
            <van-row>
              <van-col span="24">{{val1.neirong2}}</van-col>
            </van-row>
            <br>
  <van-row>
              <van-col span="6">{{val1.zan1}}赞 </van-col>
              <van-col span="6">{{val1.pin1}}评论</van-col>
            </van-row>
          </van-col>
          <van-col span="6">
            <van-image
              width="100"
              height="100"
              fit="cover"
              :src=val1.tp1
            />
          </van-col>
        </van-row>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa' }" />
      </div>
    </div>
    <div id="kong"></div>
  </div>
</template>
<script>
export default {
  name: "Vzazhi",
  data() {
    return {
      images: [
        require("../../assets/tp/lunbotu/l2.png"),
        require("../../assets/tp/lunbotu/l7.png"),
        require("../../assets/tp/lunbotu/l4.png"),
      ],
      shuju: [
        [
          {
            tp: require("../../assets/tp/lunbotu/zazhi/1.jpg"),
            timu: "大英博物馆真的有幽灵嘛",
            zan: 45,
            pin: 27,
            timu1: "生鲜平台：菜市场取代者?",
                    tp1:    require("../../assets/tp/lunbotu/zazhi/2.jpg"),
            neirong1: "疫情之下，人们对线上业务的需求被放大，但有多少因疫情而选择线上买菜的消费者会长期留存在平台上，尚无明确答案。",
            neirong2: " 自 2012 年「褚橙进京」掀起生鲜电商热度以来，创业公司、电商平台纷纷在这一领域布局，其间既有「攻城略地」的高光时刻，也不乏落寞转身的黯淡瞬间。起起落落间，",
            zan1: 56,
            pin1: 36,
          },
          {
            timu1: "在巴黎失踪的女孩?",
               tp1:    require("../../assets/tp/lunbotu/zazhi/3.jpg"),
            neirong1: "在战争时期，真相是如此可贵，需要用谎言来护卫。",
            neirong2: " ——温斯顿·丘吉尔",
            zan1: 10,
            pin1: 36,
          },
          {
            timu1: "元气森林还能【元气多久】？",
               tp1:    require("../../assets/tp/lunbotu/zazhi/4.jpg"),
            neirong1: "「0 糖、0 脂、0 卡的元气森林给大家安排上了！」近期，张雨绮在社交网络上不断「安利」元气森林。 ",
            neirong2: "这个夏天，元气森林披荆斩棘，即将完成新一轮融资，投后估值约 20 亿美元，约合 140 亿元人民币。",
            zan1: 56,
            pin1: 78,
          },
        ],
       [
          {
            tp: require("../../assets/tp/lunbotu/zazhi/5.jpg"),
            timu: "美国体育文化中的政治内涵",
            zan: 10,
            pin: 27,
            timu1: "日本人的怀旧之情",
                    tp1:    require("../../assets/tp/lunbotu/zazhi/6.jpg"),
            neirong1: "日本首都东京市的日暮里以其「老城区」的氛围而闻名，熙熙攘攘的购物者聚集在批发区和街道商场中",
            neirong2: "在这个拥有众多旧货古董商店的地区，有一家 2016 年开业的照相机商店。陈列在该商店横跨整面墙的玻璃橱窗里的各种各样的照相机，散发着怀旧的气息",
            zan1: 9,
            pin1: 12,
          },
          {
            timu1: "戴口罩背后的文化与科学?",
               tp1:    require("../../assets/tp/lunbotu/zazhi/7.jpg"),
            neirong1: "新冠肺炎流行，戴口罩是防止病毒传播的有效方式之一。可是，总是戴口罩也很难受，早日摘下口罩成为人们的热切期盼",
            neirong2: "不过，口罩要戴多久，现在尚无确切信息。疫情发现到现在，中国人是普遍戴口罩，但也有一些国家的公众因为种种原因不愿意戴口罩。于是，小小口罩引起巨大风波，甚至民情汹涌。",
            zan1: 100,
            pin1: 99,
          },
          {
            timu1: "素食之选回归生活本味",
               tp1:    require("../../assets/tp/lunbotu/zazhi/8.jpg"),
            neirong1: "吃素的理由， 有很多。 有人是为了让身体减少负担， 吃得健康； 有人是为了环保， 为地球着想； ",
            neirong2: "近年的素食世界， 早已变得不一样， 以素食为主打的餐厅、炮制的手法、店铺经营的方式， 层出不穷。 茹素的人， 也不再局限于年龄及宗教信仰， 只彰显一种生活态度。 一种善待自己、追求原味， 希望世界更好的生活态度。",
            zan1: 9,
            pin1: 6,
          },
        ],],
    };
  },
  methods: {
    tiao(val) {
     
      this.$store.commit('zazhi', val[0])
      this.$router.push({ path: "/zazhix" }); //传个 index
    },
    tiao1(val1) {
      console.log(val1)
       this.$store.commit('zazhi1', val1)
      this.$router.push({ path: "/zazhix2" }); //传个 index
    },
  },
};
</script>
<style lang="scss" scoped>
.van-row--flex {
  font-size: 10px;
}

.xi {
  width: 50%;
  height: 100px;
}
.kong {
  height: 80px;
}
.zi1 {
  font-weight: bold;
}
.tp11{
  
  width: 376px;
height: 200px;
}
</style>