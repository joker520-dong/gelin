<template>
  <div>
    <Biaoti></Biaoti>
 <div class="back1">
   
 </div>
<van-row type="flex" justify="space-between">
  <van-col span="8"  offset="1">
    <!-- 上传头像 -->
   <van-uploader v-model="fileList" multiple :max-count="1"  :after-read="afterRead" />   
  </van-col>
  <van-col span="10"  offset="8"><van-button round type="info" hairline >编辑资料</van-button></van-col>
  <van-col span="6"  ><van-button icon="plus" type="primary"  @click="suiji" round/></van-col>
</van-row>
<van-row>
  <van-col span="24"  offset="2"> {{yonghu}}</van-col>
</van-row>
<van-row>
  <van-col span="8" offset="2">0  关注我的人</van-col>
  <van-col span="8">0   我关注的人</van-col>
 
</van-row>
<van-divider  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"/>
<van-row>
  <van-col span="8" offset="2">我的徽章</van-col>
  <van-col span="8">收藏</van-col>
</van-row>
<van-divider  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"/>
<van-row type="flex" justify="center">
  <van-col span="16">完善我的小乎形象，获取更多关注</van-col>
 
</van-row>
<van-row type="flex" justify="center">
  <van-col span="12"><van-button icon="plus" type="info" @click="dakai">添加形象关键词</van-button></van-col>
 
</van-row>
<van-row type="flex" justify="center">
  <van-col span="12">添加的属性 放在这里</van-col>
 
</van-row>
  </div>

</template>

<script>
import {Toast} from 'vant'
import storage from '../../assets/js/Localstorage.js'
import Biaoti from '../biaoti/Biaoti'

export default {
data () {
  return {
     fileList: [
     
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
     
      ],
      yonghu:''
  }
 
},
beforeRead (file) {	//上传之前校验
	if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
		Toast('只允许上传jpg/png格式的图片！')
		return false
	}
	return true
},

methods: {
afterRead(file) {
      // 此时可以自行将文件上传至服务器
       this.$store.commit('tupian',file.content)    

    },  
    dakai(){
      console.log("打开新的页面   然后加属性")
    },
    suiji(){
      console.log("随机二维码")
    }
},
mounted () {
 this.yonghu= storage.Getstorage("username")
},
components: {
  Biaoti
}
}
</script>

<style lang="scss">
.back1{
  width: atuo;
  height: 120px;
  background-color: rgba(224, 217, 217, 0.808);
}
</style>