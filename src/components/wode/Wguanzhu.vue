<template>
  <div>
    <van-cell title="我关注的 " size="large">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #icon>
        <van-icon name="arrow-left" class="search-icon" @click="fanhui" />
      </template>
    </van-cell>






     <!-- 获取数据   然后让他遍历-->
    <van-cell
      v-for="(val,index) in shuju"
      :key="index"
      :title=val.tilte
      :label=val.label
      :icon=val.icon
      :boder="true"
    >
      <!-- 使用 title 插槽来自定义标题 -->
      <template #right-icon>
      
        <van-button  v-if="val.on"   icon="plus" type="primary" size="small">关注</van-button>
          <van-button 
      v-else
          icon="plus"
          type="primary"
          color=" rgba(77, 74, 72, 0.089)"
          size="small"
          v
          @click="quxiao(index)"
          >{{guanzhu}}
          
          </van-button
        >
      </template>
    
    </van-cell>
    <p class="pp">没有更多的内容


      
    </p>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  name: "Wguanzhu",
  data () {
      return {

          guanzhu:'已关注',
        //  on:false,
        //  o1:true
      }
  },
  computed: {
      shuju(){
        return   this.$store.state.gshuju
      }
      
      },
    
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    quxiao(index) {
  // console.log(val.on)
  // console.log(index);
      Dialog.confirm({
        title: "确认取消关注         ",//   得获取到用户得数据
     
      })
        .then(() => {
           this.$store.commit('reguanzhu',index)
       
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}

.search-icon {
  font-size: 16px;
  line-height: inherit;
}
.pp{
    text-align: center;
}
</style>
 
