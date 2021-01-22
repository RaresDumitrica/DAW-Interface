<template>
  <el-row :gutter="20">
    
    <el-col :span="24">
      <div class="page-title">
            <h1 v-if= !tokenID> Login </h1>
            <h1 v-else> You are logged in! </h1>
          </div>
    </el-col>
    <el-col :span="8" :offset="8" v-if=!tokenID>
      <div class="grid-content bg-purple">
        <el-input
        placeholder="Email address"
        v-model="email"
        clearable></el-input>
        <el-input
        placeholder="Password"
        v-model="password"
        show-password>
        </el-input>
        <el-button class="save-button" @click="onLogin" v-bgColor="'#42b883'">Login</el-button>
      </div>
    </el-col>
    <el-col :span="8" :offset="8" v-if="tokenID">
        <div class="grid-content bg-purple-light home-link">
        <router-link :to="{ path: '/submit' }">
          <el-button class="save-button2" type="success">Submit</el-button>
        </router-link>
        </div>
        <div>
          <el-button class="save-button" v-bgColor="'#d9e2ef'" @click="onLogout">Logout</el-button>

        </div>
      </el-col>

    <el-col :span="24" v-if=!tokenID>
        <div class="grid-content bg-purple-light login-link">
        <router-link :to="{ path: '/register' }">
          <el-link>
              Don't have an account? <b> Register </b> here!
          </el-link>
        </router-link>
        </div>
      </el-col>
  </el-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import router from '../router/index'

export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: '',
      loginError: false,
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters(['tokenID'])
  },
  methods: {
    ...mapActions([
      'login',
      'logout'
    ]),
    onLogin () {
      const formData = {
        email: this.email,
        password: this.password
      }
      this.login({email: formData.email, password: formData.password})
      this.email = '';
      this.password = ''
    },
    onLogout() {
        this.logout();
    }
  },
  directives: {
    bgColor: {
        bind: function(el, binding, vnode) {
            el.style.backgroundColor = binding.value;
            console.log(vnode);
        }
    }, 
  }
}
</script>

<style type="scss" scoped>
.save-button{
  width: 80%;
  margin-top: 30px;
}
.save-button2{
  width: 100%;
  margin-top: 10px;
  font-size: 17px;
}

.el-input {
  margin-top: 15px;
}
.login-link{
  text-align: center;
  margin-top: 15px;
}
.home-link {
  text-align: left;
}
</style>
