<template>
    <div>

<Biaoti></Biaoti>
<van-row>
  <van-col span="24">
<van-image  fit="fill" :src="require('../../../assets/tp/lunbotu/shubang.jpg')" />
  </van-col>
</van-row>
   <van-tabs v-model="active">
  <van-tab title="热度榜"><redu></redu></van-tab>
  <van-tab title="飙升榜"><biaosheng></biaosheng></van-tab>
  <van-tab title="上新榜"><shangxin></shangxin></van-tab>
</van-tabs>     
    </div>
</template>
<script>
import Biaoti from '../../biaoti/Biaoti'
import redu from './redu'
import shangxin from './shangxin'
import biaosheng from './biaosheng'

export default {
    data () {
        return {
            
        }
    },
    components: {
        Biaoti,redu,biaosheng,shangxin
    }
}
</script>