<template>
  <div class="register">
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  methods:{
     _getRegister(){
       let data = {
         email:"qwe114@163.com",
         nickname:"aaqq",
         password1:"aw123243@",
         password2:"aw123243@"
       }
       this.$api.user.getRegister(data).then(res=>{
         console.log(res)
       })
     },
     _toLogin(){
       let data = {
       }
       this.$api.user.toLogin(data).then(res=>{
         console.log(res)
       })
     }    
  }
};
</script>

<style>
</style>