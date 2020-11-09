<template>
    <div>
        <!-- 粘性布局 -->
        <van-tabs v-model="active"   sticky> 
  <van-tab title="动态" to="/xiaoxi/xdongtai"></van-tab>

  <van-tab title="消息"  to="/xiaoxi/xxiaoxi"></van-tab>


  <!-- 左边得图标得换一下 -->
 <template #nav-left>
     <van-button icon="info" type="primary" />
    
  
     </template> 
<!-- 
     这里得做个判断 切换了就消失 -->
      <template #nav-right v-if="true">
     <van-button icon="chat" type="primary" />
    
    
     </template> 
</van-tabs>
    </div>
</template>
<script>
export default {
    name:'Xheader',
    data () {
        return {
           active:1
        }
    }
}
</script>