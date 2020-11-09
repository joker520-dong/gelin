<template>
  <div>
    <van-cell-group border>
      <van-cell title="设置" size="large">
        <template #icon>
          <van-icon name="arrow-left" class="search-icon" @click="tui" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-row>
      <van-col span="8" offset="1">基本设置 </van-col>
    </van-row>
    <van-cell-group border>
      <van-cell
        v-for="(val, index) in yonghu"
        :key="index"
        :title="val.title"
        size="large"
        :label="val.label"
      >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-switch v-model="val.checked" size="20px" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-row>
      <van-col span="8" offset="1">账号设置 </van-col>
      <van-cell
        v-for="(val, index) in yonghu1"
        :key="index"
        :title="val.title"
        size="large"
        :label="val.label"
        
      >
      </van-cell>
    </van-row>
      <van-row>
      <van-col span="8" offset="1">关于与帮助 </van-col>
      <van-cell
        v-for="(val, index) in yonghu2"
        :key="index"
        :title="val.title"
        size="large"
        :label="val.label"
        @click="kuang(index)"
      >
      </van-cell>
    </van-row>
    <van-row type="flex" justify="center">
  <van-col span="6"> <van-button type="default" @click="zhanghao">退出账号</van-button></van-col>

</van-row>
  </div>
</template>

<script>
import  storage  from '../../assets/js/Localstorage'
import { Dialog,Toast } from 'vant';
export default {
  data() {
    return {
      checked: true,
      yonghu: [
        { title: "水印图片", label: "在上传的图片添加水印", checked: true },
        {
          title: "省流量模式",
          label: "仅有Wi-Fi环境模式下才会自动加载图片",
          checked: false,
        },
        {
          title: "双击赞同",
          label: "在回答与文章正文区支持赞同",
          checked: true,
        },
        {
          title: "摇动发送反馈",
          label: "遇到问题？摇一摇手机就能反馈",
          checked: false,
        },
        { title: "截屏后分享", label: "在上传的图片添加水印", checked: true },
      ],
      yonghu1: [
        { title: "账号与安全", label: "管理账号安全,修改账号密码等" },
        { title: "屏蔽设置", label: "会影响到客户端与网页版" },
      
       
      ],
       yonghu2: [
        { title: "去评价", },
        { title: "清除缓存", label: "包括图片、音频和视频缓存（共7.02MB）" },
      {title: "检查更新", label: "当前版本1.12.0" }
      ],
    };
  },
  methods: {
    tui() {
      this.$router.go(-1);
    },
    zhanghao(){
        Dialog.confirm({
  title: '退出登录',
  message: '是否退出登录？',
})
  .then(() => {
  storage.Remove("username"),
    storage.Remove("passwd"),
   this.$store.commit('retp')      //传到vue x 里面  删除图片
    this.$router.push({path:'/wode'})
   
  
  })
  .catch(() => {
    // on cancel
  });
    },
    kuang(index){
console.log(index)
if(index==0){
    Dialog.confirm({
  title: '评价',
  message: '喜欢给个好评把',
})
  .then(() => {
Toast.success('谢谢你拉');
  })
  .catch(() => {
Toast.fail('你真狠心呀');
  });
}else if(index==1){
    this.yonghu2[1].label="包括图片、音频和视频缓存"
    Toast({
  message: '缓存清理成功',
  position: 'bottom',
})
}else{
      Toast({
  message: '您的应用为最新版本',
  position: 'bottom',
}) 
}

    }
  },
};
</script>

<style>
.search-icon {
  font-size: 16px;
  line-height: inherit;
}
</style>