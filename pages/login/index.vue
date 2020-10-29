<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">{{isLogin ? 'Sign up' : 'Sign in'}}</h1>
            <p class="text-xs-center">
              <nuxt-link to="./register" v-if="isLogin">Have an account?</nuxt-link>
              <nuxt-link 
              v-else
              to="./login">Need an account?</nuxt-link>
            </p>
            
              <ul class="error-messages">
                <template v-for="(messages,field) in errors">
                  <li v-for="(message,index) in messages" :key="index">
                    {{field}} {{message}}
                  </li>
                </template>
              </ul>
            
            

            <form @submit.prevent="onSubmit">
              <fieldset
                v-if="!isLogin"
               class="form-group">
                <input
                  v-model="user.username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.email"
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  required
                  minlength="8"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                {{isLogin ? 'Sign up' : 'Sign in'}}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login , register } from '@/api/user'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  middleware: 'notAuthenticated',
  name: "LoginIndex",
  data() {
    return {
      user:{
        username:'',
        email:'',
        passworld:''
      },
      errors:{
        // email:['b','a'],
        // passworld:['b','a']
      }
    }
  },
  computed: {
    isLogin() {
      return this.$route.name === 'login'
    }
  },
  methods: {
    async onSubmit() {
      try {
         //提交表单
        const { data } =  this.isLogin 
        ? await login({
          user:this.user
        }) 
        : await register({
          user:this.user
        }) 
        console.log(data)
        //TODO: 保护用户登录状态
        this.$store.commit('setUser',data.user)
        Cookie.set('user',data.user)
        //跳转首页
        this.$router.push('/')
      } catch (error) {
        console.dir(error)
        this.errors = error.response.data.errors
      }
     
    }
  },
};
</script>

<style>
</style>