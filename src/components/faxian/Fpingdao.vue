<template>
  <div>
    <div>最常访问</div>
    <van-cell-group v-for="n in 10" :key="n" class="group">
      <van-cell title="前端开发" value="近一周讨论1393" icon="" is-link />
      <van-cell
        title="AST详解与运用"
        label="123123123123123123123123123123123123123你哦接送多久哦啊是巨大四等哈丝毫的安徽的哈斯u等哈似乎嗲上帝按时u等哈说ui "
        size="large"
      />
     
  <van-row type="flex">
  <van-col v-for="(val,index) in arr " :key="index" offset="1" span="6">{{arr.val}}</van-col>
 
</van-row>
   
    </van-cell-group>
  </div>
</template>
<script>
export default {
  name: "Fpingdao",
  data () {
      return {
          arr:[{val:'26赞同'},{val:'26赞同'},{val:'26赞同'}]
      }
  }
};
</script>
<style scoped>
.group{
    margin-top: 10px;
}
</style>