<template>
  <div>
   
    <van-cell-group v-for="(val, index) in arr" :key="index">
      <van-cell
        :border="true"
        :title="val.Timu2"
        size="large"
        icon="location-o"
        @click="tiao(index)"
   
      >
        <template #default>
          <img src="../../assets/tp/logo.jpg" :height="100" />
        </template>
      </van-cell>
    </van-cell-group>
    <div class="kong"></div>
  </div>
</template>
<script>
export default {
  name: "Rebang",
  mounted () {

 
  
  },
  computed: {
    arr(){
      return this.$store.state.arr     //从vueX里面取出来的数据 
    }
  },
  methods: {
     tiao(index){
    this.$router.push({path:'/rebangx',query: { id: index }})
  }
  },
  data() {
    return {
      
      // xinxi: [
      //   {
      //     timu:
      //       "如何评价 10 月 14 日发布的 iPhone 12 系列新机，有哪些看点和不足？",
      //     miaoshu: "1155万热度",
      //   },
      //   {
      //     timu: "如何评价10月",
      //     miaoshu: "1222万热度",
      //   },
      //   {
      //     timu: "如何评价11月",
      //     miaoshu: "1333万热度",
      //   },
      //   {
      //     timu: "如何评价12月",
      //     miaoshu: "1444万热度",
      //   },
      // ],
    };
  },
};
</script>
<style lang="scss" scoped>

.kong{
  height: 50px;
}
</style>
