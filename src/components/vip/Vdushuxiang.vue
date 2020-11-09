<template>
  <div>
<Biaoti></Biaoti>
  
   <van-row>
  <van-col span="8"  offset="1"><van-image width="100" height="100" :src=dushu[id][id1].tp /></van-col>
  <van-col span="8">  <van-cell :title=dushu[id][id1].title  :label=dushu[id][id1].labe /></van-col>
  
</van-row>
<van-cell title="知友推荐" label="3028评价">
  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
  <template #right-icon>
<van-button icon="good-job" type="primary"  round  @click="showPopup"  />
<van-button icon="clear" type="primary"  round  @click="showPopup1"   /> 
  </template>
</van-cell>


<!-- <van-popup v-model="show2" position="bottom" :style="{ height: '30%',width:'100%' }" >
   遮罩层 -->
   <van-popup v-model="show1" position="bottom" :style="{ height: '30%',width:'100%' }" >

<van-row type="flex" justify="space-between">
  <van-col span="6" class="quxiao" @click="quxiao">取消</van-col>
  <van-col span="6">上次短评</van-col>
  <van-col span="6" @click="gengxin" >更新</van-col>
</van-row>
<van-field
  v-model="message"
  rows="2"
  autosize
  label="留言"
  type="textarea"
  maxlength="50"
  placeholder="请输入留言"
  show-word-limit
  @blur="xx"
/>
   </van-popup>
   <van-popup v-model="show2" position="bottom" :style="{ height: '30%',width:'100%' }" >

<van-row type="flex" justify="space-between">
  <van-col span="6" class="quxiao" @click="quxiao">取消</van-col>
  <van-col span="6">差评</van-col>
  <van-col span="6" @click="gengxin1" >更新</van-col>
</van-row>
<van-field
  v-model="message"
  rows="2"
  autosize
  label="留言"
  type="textarea"
  maxlength="50"
  placeholder="请输入留言"
  show-word-limit
  @blur="xx"
/>
   </van-popup>


<van-col span="24"  offset="1"><h2>图书介绍</h2>

</van-col>
<div>本书从多个角度，阐述我们在生活中遇到的各种困惑、难题，然后逐个进行深层分析，从而告诉你如何精准选择，抓住每一次出现的机会，拥有一条一路向前的人生路径。</div>
  <van-col span="24"  offset="1"><h2>短评</h2>

</van-col>
  <van-cell v-for="(val,index) in pinglun" :key="index"  :title="val.title" :value="val.value" :label="val.label "/>
  <div>
      <h2>版权信息</h2>
版权方：联合读创<br>
字数：9.4 万字<br>

大小：2M
  </div>
  </div>
  
</template>

<script>
import storage from '../../assets/js/Localstorage'
import Biaoti  from '../biaoti/Biaoti'
export default { 
    data () {
        return {
            timu:'',
             show1: false,
             show2: false,     
             message:'' ,
            id:this.$route.query.id,
            id1:this.$route.query.id1,
             pinglun:[{
                 title:'邵林',
                 label:'博采众长亦不失个人看法，国运value:、行运、个运打通不够，略显强行联系',
               value:'好评'
             },{
                 title:'mock',
                 label:'真好看 我极力推荐',
                  value:'好评'
             },{
                 title:'nigeder',
                 label:'感觉毫无逻辑',
                 value:'好评'
             },]
            
        }
    },
 
  computed: {
    dushu(){
      return this.$store.state.dushu
    }
  },
  components: {
      Biaoti
  },
  methods: {
      showPopup() {
      this.show1 = true;
      this.show2=false;
    },
    showPopup1(){
         this.show2 = true;
            this.show1=false;
    },
    quxiao(){
        this.show = false
    },
    gengxin1(){
var title1=storage.Getstorage('username') 
     var label=storage.Getstorage('pinglun')
    
     this.pinglun.push({
         title:title1,
         label:label,
          value:'差评'
     })
   
     this.message=''
      this.show = false
      
     },
    
    gengxin(){
     var title1=storage.Getstorage('username') 
     var label=storage.Getstorage('pinglun')
    
     this.pinglun.push({
         title:title1,
         label:label,
         value:'好评'
     })
     this.message=''
      this.show = false

     },
   xx(){
  storage.Setstorage('pinglun',this.message)

    }
  }
}
</script>

<style lang="scss" scoped>
.quxiao{
    color: rgba(7, 162, 223, 0.945)
}
</style>

