<template>
    <div>
        <h1 class="juzhong">登录</h1>
        <!-- <van-cell title="注册"    :center="false" size="large" label-width="10em"  title-class="juzhong"/> -->

<van-form @submit="onSubmit" >
  
  <van-field
    v-model="username"
   
    label="用户名"
    placeholder="用户名"
    :rules="[{ pattern, message: '请输入正确用户名' }]"
  />

  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ pattern1, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info"  native-type="submit">
      登录
    </van-button>
<van-row>
  <van-col span="8" class="xx" @click="tiao">注册</van-col>

</van-row>
  </div>
</van-form>
    </div>
</template>
<script>
import storage from'../../assets/js/Localstorage.js'
import { Toast } from 'vant';
export default {
     name:'Zdenglu',
  data() {
    return {
      username: '',
      password: '',


      //正则有问题
      pattern:/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
       pattern1: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
    };
  },
 
 
  methods: {
    onSubmit() {
            if(this.username==storage.Getstorage("username")&&(this.password==storage.Getstorage("passwd"))){
        Toast.success('登录成功')
         this.$store.commit('yingcang')
  this.$router.push({path:'/wode'})
      }else{
           Toast.fail('请输入正确的用户名和密码')
      }

 
      
      
    },
    tiao(){
        
      this.$router.push({path:'/zzhuce'})
 
    }
  },
};
</script>
<style lang="scss" scoped>
.juzhong{
    text-align: center;
 
}
form.van-form{
    margin-top: 50px;
}
.xx{
  color: rgba(168, 168, 164, 0.795);
}
</style>