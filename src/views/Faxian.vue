<template>
    <div>
     <Fheader></Fheader>


   
           <Weibu></Weibu>
            <router-view></router-view>
    </div>

</template>
<script>
import Fheader from '../components/faxian/Fheader.vue'
import Weibu from '../components/shouye/Weibu.vue'
export default {
    name:'Faxian',
    components: {
        Weibu,Fheader
      
    }
    
}
</script>