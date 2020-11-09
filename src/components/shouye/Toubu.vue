<template>
  <div>
    <Sousun></Sousun>
    <van-tabs v-model="active" animated>
      <van-tab
        v-for="(val, index) in arr"
        :key="index"
        :title="val.name"
        :to="val.id"
      >
        
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Sousun from "../shouye/Sousun";
export default {
  name: "Toubu",

  data() {
    return {
      active: 1,
      arr: [
        {
          name: "关注",
          id: "/index/0",
        },
        {
          name: "推荐",
          id: "/index/1",
        },
        {
          name: "热榜",
          id: "/index/2",
        },
        {
          name: "视频",
          id: "/index/3",
        },
        {
          name: "圈子",
          id: "/index/4",
        },
      ],
    };
  },
  components: {
    Sousun,
  },
};
</script>