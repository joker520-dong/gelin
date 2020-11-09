
<template>
  <div>
    <Toubu></Toubu>
    <Weibu></Weibu>

    <router-view></router-view>
  </div>
</template>
<script>
import Weibu from "../components/shouye/Weibu.vue";
import Toubu from "../components/shouye/Toubu.vue";
export default {
  components: {
    Weibu,
    Toubu,
   
  },
};
</script>