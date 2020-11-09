<template>
  <div>
    <van-swipe :autoplay="2000">
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
        @click="dianji"
      >
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="5">
      <van-grid-item
        v-for="(val, index) in tubiao"
        :key="index"
        :icon="val.tp"
        :text="val.text"
        :to="val.url"
      />
    </van-grid>

    <div v-for="(val, index) in shuju" :key="index">
      <van-cell
        :title="val[0].timu"
        title-class="biaoti"
        value="查看更多"
        is-link
      />
      <!-- <van-row gutter="50" v-for="(data,index) in data.row" :key="index">
        <van-col span="10" offset="1" v-for="(data,index) in data.col" :key="index">
          <van-image
            width="150"
            height="100"
            lazy-load
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <van-cell :title=data.tile label="27篇"  />
        </van-col>
      </van-row> -->
      <van-row>
        <van-col
          span="11"
          offset="1"
          v-for="(val1, index1) in val"
          :key="index1"
        >
          <van-image width="100" height="120" :src="val1.tp" />
          <van-cell
            :title="val1.title"
            title-class="biaoti"
            @click="tiao(index, index1)"
            :label="val1.labe"
          />
        </van-col>
        <!-- <van-col span="11" offset="1" v-for="(val1,index2) in arr" :key="index2">
          <van-image width="100" height="120" :src="val.tp2" />
          <van-cell
            :title="val.title2"
            title-class="biaoti"
            :label="val.labe2"
          />
        </van-col> -->
      </van-row>
    </div>
    <div class="kong"></div>
  </div>
</template>
<script>
export default {
  name: "Vhuiyuan",

  data() {
    return {
      images: [
        require("../../assets/tp/lunbotu/1.png"),
        require("../../assets/tp/lunbotu/2.png"),
        require("../../assets/tp/lunbotu/3.png"),
      ],
      tubiao: [
        {
          text: "每日上新",
          tp: require("../../assets/tp/tubiao/x1.png"),
          url: "/vdushux1",
        },
        {
          text: "榜单",
          tp: require("../../assets/tp/tubiao/x2.png"),
          url: "/bangdan",
        },
        {
          text: "小说",
          tp: require("../../assets/tp/tubiao/x3.png"),
          url: "/vip/1",
        },
        {
          text: "会员福利",
          tp: require("../../assets/tp/tubiao/vip.jpg"),
          url: "/fuli",
        },
        {
          text: "分类",
          tp: require("../../assets/tp/tubiao/d5.png"),
          url: "/fenlei",
        },
      ],

      shuju: [
        [
          {
            timu: "治疗心灵的作品",
            tp: require("../../assets/tp/lunbotu/vip/index/1.jpg"),
            title: "好好分手",
            labe: "安慰记店长",
          },
          {
            tp: require("../../assets/tp/lunbotu/vip/index/2.jpg"),
            title: "挽回爱情",
            labe: "穆木",
          },
          {
            tp: require("../../assets/tp/lunbotu/vip/index/3.jpg"),
            title: "高情商",
            labe: "张萌",
          },
          {
            tp: require("../../assets/tp/lunbotu/vip/index/4.jpg"),
            title: "爱情总是不尽人意",
            labe: "简单心理",
          },
        ],
        [
          {
            timu: "相见恨晚历史书",
            tp: require("../../assets/tp/lunbotu/vip/index/5.jpg"),
            title: "朱元璋",
            labe: "度阴山",
          },
          {
            tp: require("../../assets/tp/lunbotu/vip/index/6.jpg"),
            title: "简读中国史",
            labe: "张宏杰",
          },
          {
            tp: require("../../assets/tp/lunbotu/vip/index/7.jpg"),
            title: "历史的温度",
            labe: "张玮等",
          },
          {
            tp: require("../../assets/tp/lunbotu/vip/index/8.jpg"),
            title: "血腥的盛唐",
            labe: "王觉仁",
          },
        ],
      ],
 
    };
  },
  methods: {
    dianji() {
      //点击后  跳转新的页面
      console.log(123);
    },
    tiao(index,index1) {
      // console.log(index,index1)
      this.$router.push({ path: "/tuijiex" ,query:{id:index,id1:index1}});
    
    },
  },
};
</script>
<style lang="scss">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.biaoti {
  font-size: 20px;
}
.kong {
  height: 50px;
}
</style>
