
<template>
    <div>


<van-tabbar route>
  <van-tabbar-item replace to="/" icon="orders-o">
    首页
  </van-tabbar-item>
  <van-tabbar-item replace to="/vip" icon="like-o">
    会员
  </van-tabbar-item>
   <van-tabbar-item replace to="/faxian" icon="browsing-history-o">
    发现
  </van-tabbar-item>
   <van-tabbar-item replace to="/xiaoxi" icon="chat-o">
    消息
  </van-tabbar-item>

   <van-tabbar-item replace to="/wode" icon="user-circle-o">
    我的
  </van-tabbar-item>
</van-tabbar>


    </div>
</template>
<script>
export default {
    name:'Weibu',
  data() {
    return {
      active: 1,
    };
  },
};
</script>