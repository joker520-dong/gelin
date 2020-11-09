<template>
    <div>
        <h1 class="juzhong">注册</h1>
        <!-- <van-cell title="注册"    :center="false" size="large" label-width="10em"  title-class="juzhong"/> -->

<van-form @submit="onSubmit" >
  
  <van-field
    v-model="username"
   name="user"
    label="用户名"
    placeholder="用户名"
    :rules="[{ pattern, message: '请输入正确用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="pwd"
    label="密码"
    placeholder="密码"
    :rules="[{ pattern1, message: '请填写密码' }]"
  />

  <div style="margin: 16px;">
    <van-button round block type="info"  native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
<van-row>
  <van-col span="8" class="xx" @click="tiao">登录</van-col>

</van-row>
    </div>
</template>
<script>
import storage from'../../assets/js/Localstorage.js'
export default {
     name:'Zzhuce',
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
    onSubmit(values) {
        this.$router.push({ path: '/zdenglu'});

    
        //存进local storage里
         storage.Setstorage("username",values.user)
        storage.Setstorage("passwd",values.pwd)
      console.log('submit', values);
    },
    tiao(){
      this.$router.push({path:'/zdenglu'}) 
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