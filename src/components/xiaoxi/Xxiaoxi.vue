<template>
  <div>
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      style="min-height: 100vh"
    >
      <van-grid :column-num="4" :border="false">
        <van-grid-item
          v-for="(val, index) in wenzi"
          :key="index"
          :icon="val.tp"
          :text="val.name"
        />
        <van-cell
          v-for="(val, index) in neirong"
          :key="index"
          :title="val.title"
          :value="val.value"
          size="large"
          :label="val.label"
          :icon="val.icon"
        />
      </van-grid>
      <div id="zhong" v-show="show">
        <van-cell title="为你推荐" value="更多" is-link />

        <van-cell
          v-for="(val, index) in arr"
          :key="index"
          :title="val.tilte"
          :label="val.label"
          :icon="val.icon"
          :boder="true"
        >
          <!-- 使用 title 插槽来自定义标题 -->
          <template #right-icon>
            <van-button
              v-if="val.on"
              icon="plus"
              type="primary"
              size="small"
              @click="kaiguan(val,index)"
              >  关注</van-button
            >
            <van-button
              icon="plus"
              type="primary"
              color=" rgba(77, 74, 72, 0.089)"
              size="small"
              v-else
             
              >已经关注</van-button
            >

          </template>
        </van-cell>
           <div class="kong11"></div>
      </div>
    </van-pull-refresh>
 
  </div>
</template>
<script>
export default {
  name: "Xxiaoxi",
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
        this.show = !this.show; // 刷新之后显示下面的内容
      }, 1000);
    },

    kaiguan(val,index) {
      this.arr[index].on=false
    
      this.$store.commit('guanzhu',val)
      // this.on = !this.on;
    },
   
      // this.on = !this.on;
  
  },
  data() {
    return {
   
      guanzhu: "已关注",
      count: 0,
      isLoading: false,
      show: false, //显示
      wenzi: [
        {
          name: "邀请回答",
          tp: require("../../assets/tp/tubiao/xiao1.png"),
        },
        {
          name: "赞同与喜欢",
          tp: require("../../assets/tp/tubiao/xiao2.png"),
        },
        {
          name: "关注",
          tp: require("../../assets/tp/tubiao/xiao3.png"),
        },
        {
          name: "评论与转发",
          tp: require("../../assets/tp/tubiao/xiao4.png"),
        },
      ],
      neirong: [
        {
          title: "官方账号消息", //题目
          label: "亲爱的用户你好~", //下面消息
          icon: require("../../assets/tp/tubiao/xx1.png"), //图片
          value: "10-13", //右边时间
        },
        {
          title: "系统消息", //题目
          label: "徽章小助手恭喜你的徽章已经升级", //下面消息
          icon: require("../../assets/tp/tubiao/xx2.png"), //图片
          value: "05-13", //右边时间
        },

        {
          title: "小小乎小管家", //题目
          label: "刘董事要努力学习了", //下面消息
          icon: require("../../assets/tp/tubiao/xx3.png"), //图片
          value: "06-13", //右边时间
        },
      ],
      arr: [
        {
                on:true,
          tilte: "大辉",
          label: "从事不锈钢装饰材料",
          icon: require("../../assets/tp/tubiao/w1.png"),
        },
        {      on:true,
          tilte: "tooth-keeper",
          label: "兰州大学口腔病医学硕士",
          icon: require("../../assets/tp/tubiao/w1.png"),
        },
        {      on:true,
          tilte: "方恨少",
          label: "",
          icon: require("../../assets/tp/tubiao/w1.png"),
        },
        {      on:true,
          tilte: "Leoleeym",
          label: "携梦想，走向远方",
          icon: require("../../assets/tp/tubiao/w1.png"),
        },
        {      on:true,
          tilte: "安逸",
          label: "趁春光明媚，把一切都慢慢体会",
          icon: require("../../assets/tp/tubiao/w1.png"),
        },
        {      on:true,
          tilte: "兔子小姐",
          label: "头像壁纸领域创作者",
          icon: require("../../assets/tp/tubiao/w1.png"),
        },
        {      on:true,
          tilte: "邓灿炎",
          label: "哈美工作室",
          icon: require("../../assets/tp/tubiao/w1.png"),
        },
      ],
    };
  },
  computed: {
    
  }
};
</script>
<style scoped lang="scss">
.zhong {
  margin-top: 20px;
}
.kong11{
  height: 50px;
}
</style>