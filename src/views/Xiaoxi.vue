<template>
    <div>
      <Xheader></Xheader>



        <Weibu></Weibu>
        <router-view></router-view>
    </div>
</template>
<script>
import Xheader from '../components/xiaoxi/Xheader'
import Weibu from '../components/shouye/Weibu.vue'
export default {
    name:'Xiaoxi',
    components: {
        Weibu,
        Xheader
    }
}
</script>