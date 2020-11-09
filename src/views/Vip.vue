<template>
    <div>
<Vheader></Vheader>


   
        <Weibu></Weibu>
        <router-view></router-view>
    </div>
    
</template>
<script>
import Weibu from '../components/shouye/Weibu.vue'
import Vheader from '../components/vip/Vheader.vue'

export default {
    name:'Vip',
    components: {
        Weibu,Vheader
    }
}
</script>