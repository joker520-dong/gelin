<template>
  <div>
    <Wheader></Wheader>
    <Weibu></Weibu>
  </div>
</template>
<script>
import Weibu from "../components/shouye/Weibu.vue";
import Wheader from "../components/wode/Header.vue";
export default {
  name: "Wode",
  components: {
    Weibu,
    Wheader,
  },
};
</script>