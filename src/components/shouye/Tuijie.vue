<template>
  <div>
<div v-for="(val,index) in x" :key="index">
<van-row>
  <van-col span="24"  offset="1"><h3>{{val.Timu}}</h3></van-col>

</van-row>
<van-row>
  <van-col span="24"  offset="1"><van-cell @click="tiao(index)"    :title="val.Name" icon="location-o"   size="large" :label="val.String" /></van-col>

</van-row>
<van-row justify="space-between">
  <van-col span="4" offset="1" >{{val.Number}}赞同</van-col>
  <van-col span="4"  >{{val.Number2}}评论</van-col>
    <van-col span="8" offset="7" ><van-button square  class="anniu"  type="default " icon="ellipsis" size="small" ></van-button></van-col>
</van-row>


</div>


  </div>
  
</template>

<script>
import instance from '../../assets/js/axios'
export default {
beforeCreate() {
    this.anniu = document.querySelector('anniu');
  },
data () {
  return {
       show: false,
      
  }
},
computed: {
  x(){
   return  this.$store.state.arr 
  }
},
methods:{
  tiao(index){

    this.$router.push({path:'/tuijiexiang',query: { id: index }})
  }
},

mounted () {
 
  instance.get("/suiji").then((res)=>{

     this.$store.commit('jieshou',res.data)    
  }).catch((error)=>{
console.log(error);

  })
 
},

}
</script>

<style>

</style>