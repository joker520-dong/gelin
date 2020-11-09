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
        :title="val[0][0].title"
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
          <van-col v-for="(item, key) in val1" :key="key">
            <van-image width="100" height="120" :src="item.tp1" />
            <van-cell
              :title="item.title1"
              title-class="biaoti"
              @click="tiao(index1, index,key)"
              :label="item.labe1"
            />
          </van-col>
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
          tp: require("../../assets/tp/lunbotu/1.png"),
          url: "/vdushux1",
        },
        {
          text: "榜单",
          tp: require("../../assets/tp/lunbotu/1.png"),
          url: "/bangdan",
        },
        {
          text: "小说",
          tp: require("../../assets/tp/lunbotu/1.png"),
          url: "/vip/1",
        },
        {
          text: "会员福利",
          tp: require("../../assets/tp/lunbotu/1.png"),
          url: "/fuli",
        },
        {
          text: "分类",
          tp: require("../../assets/tp/lunbotu/1.png"),
          url: "/fenlei",
        },
      ],
      shuju: [
        [
          [{
            title: "治疗心灵的作品",
            tp1: require("../../assets/tp/lunbotu/vip/index/1.jpg"),
            title1: "好好分手",
            labe1: "安慰记店长",
          },
          {
            tp1: require("../../assets/tp/lunbotu/vip/index/2.jpg"),
            title1: "挽回爱情",
            labe1: "穆木",
          }],
        ],
        [
          [{
            title: "相见恨晚历史书",
            tp1: require("../../assets/tp/lunbotu/vip/index/3.jpg"),
            title1: "高情商",
            labe1: "张萌",
          },
          {
            tp1: require("../../assets/tp/lunbotu/vip/index/4.jpg"),
            title1: "爱情总是不尽人意",
            label1: "简单心理",
          }],
        ],
      ],
      //  arr2:[ {tp2: require("../../assets/tp/lunbotu/vip/index/5.jpg"),
      //         title2: "朱元璋",
      //         labe2: "度阴山"},
      //         {tp2: require("../../assets/tp/lunbotu/vip/index/6.jpg"),
      //         title2: "简读中国史",
      //         labe2: "张宏杰"},
      //         {tp2: require("../../assets/tp/lunbotu/vip/index/7.jpg"),
      //         title2: "历史的温度",
      //         labe2: "张玮等"},
      //         {tp2: require("../../assets/tp/lunbotu/vip/index/8.jpg"),
      //         title2: "血腥的盛唐",
      //         labe2: "王觉仁"}, ]
    };
  },
  methods: {
    dianji() {
      //点击后  跳转新的页面
      console.log(123);
    },
    tiao(index1, index,key) {
      console.log(index1, index,key)
      // this.$router.push({ path: "/tuijiex" });
      // this.$store.commit("viptui", this.arr[index]);
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
