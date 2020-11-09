<template>
  <div>
    <van-cell
      v-for="(val, index) in arr"
      :key="index"
      :title="val.title"
      :icon="val.icon"
      :boder="true"
    >
      <!-- 使用 title 插槽来自定义标题 -->
      <template #right-icon>
        <van-button icon="plus" type="primary" size="small">关注</van-button>
      </template>
      <template #label>
        <van-cell :title="val.title1" :label="val.label" @click="tiao(index)" />
      </template>
    </van-cell>
    <div class="kong"></div>
  </div>
</template>
<script>
export default {
  name: "Guanzhu",
  data() {
    return {
      arr: [
        {
          title: "简单",
          icon: require("../../assets/tp/tubiao/t1.png"),
          title1: "游戏话题的活跃用户",
          label: "1回答  7.9万关注",
        },
        {
          title: "无常",
          icon: require("../../assets/tp/tubiao/t2.png"),
          title1: "文学话题的活跃用户",
          label: "56回答  8.8万关注",
        },
        {
          title: "波旬",
          icon: require("../../assets/tp/tubiao/t3.png"),
          title1: "创业话题的活跃用户",
          label: "161回答  5.6万关注",
        },
        {
          title: "简单",
          icon: require("../../assets/tp/tubiao/t4.png"),
          title1: "谭迂回的活跃用户",
          label: "85回答  2.3万关注",
        },
        {
          title: "网易三三三",
          icon: require("../../assets/tp/tubiao/t5.png"),
          title1: "已认证的官方账号",
          label: "56回答  17.9万关注",
        },
        {
          title: "o代号95270",
          icon: require("../../assets/tp/tubiao/t6.png"),
          title1: "篮球话题的活跃用户",
          label: "174回答  3.1万关注",
        },
        {
          title: "游研社",
          icon: require("../../assets/tp/tubiao/t7.png"),
          title1: "游戏话题的活跃用户",
          label: "241回答  3.6万关注",
        },
        {
          title: "啊NEl",
          icon: require("../../assets/tp/tubiao/t8.png"),
          title1: "时尚话题的活跃用户",
          label: "910回答  12.9万关注",
        },
        {
          title: "网易体育",
          icon: require("../../assets/tp/tubiao/t9.png"),
          title1: "篮球话题的活跃用户",
          label: "321回答  9万关注",
        },
        {
          title: "李希",
          icon: require("../../assets/tp/tubiao/t5.png"),
          title1: "医学话题的活跃用户",
          label: "16回答  3.6万关注",
        },
        {
          title: "死者代言人",
          icon: require("../../assets/tp/tubiao/t2.png"),
          title1: "法医学话题的活跃用户",
          label: "599回答  26万关注",
        },
      ],
    };
  },
  computed: {
    x() {
      return this.$store.state.count; //从vueX里面取出来的数据
    },
  },
  methods: {
    tiao(index){
     this.$router.push({path:'/guanzhux',query: {data:this.arr, id: index }})
    }
  }
};
</script>
<style lang="scss" scoped>
.van-cell__label {
  width: 200px;
}
.kong {
  height: 50px;
}
</style>