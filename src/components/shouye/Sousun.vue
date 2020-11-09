<template>
    <div>
        <van-search
  v-model="value"
  show-action
 
  placeholder="请输入搜索关键词"
  @focus="taiozhuan"
>
  <template #action>
    <div @click="onSearch">搜索</div>
  </template>
</van-search>
    </div>
</template>
<script>
export default {
    name:'Sousun',
    data () {
      return {
           value:'joker'  
      }
    },
    methods: {
    onSearch(val){
    console.log(val)
      
    },
    taiozhuan(){
      this.$router.push({ path: '/sindex'});
    }
    }
    
}
</script>