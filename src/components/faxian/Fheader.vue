<template>
<div>
  <van-tabs v-model="activeName">
  <van-tab title="频道" to="/faxian/fpingdao"></van-tab>
  <van-tab title="分区" to="/faxian/ffenqu" ></van-tab>
</van-tabs>
</div>
  
</template>
<script>

export default {
    name:'Fheader',
    data () {
        return {
            activeName:1
        }
    },
   
}
</script>