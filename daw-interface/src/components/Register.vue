<template>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple-light home-link">
        <router-link :to="{ path: '/' }">
          <el-link>
              Home
          </el-link>
        </router-link>
        </div>
      </el-col>
      <el-col :span="24">
      <div class="page-title">
            <h1>Create an account</h1>
          </div>
    </el-col>
      <el-col :span="8" :offset="8">
        <div class="grid-content bg-purple">
          <el-input
          placeholder="Email address"
          v-model="email"
          clearable></el-input>
        </div>
      </el-col>
      <el-col :span="8" :offset="8">
        <div class="grid-content bg-purple">
          <el-input
          placeholder="Password"
          v-model="password"
          show-password>
          </el-input>
          <el-button type="success" class="save-button" @click="onRegister">Register</el-button>
        </div>
      </el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RegisterForm',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    onRegister() {
      const formData = {
        email: this.email,
        password: this.password,
        username: this.username
      }
      console.log("eee");
      this.register(formData);
      this.$router.push('/login');
      this.email = '';
      this.password = ''
    }
  }
}
</script>

<style type="scss" scoped>
.save-button{
  width: 100%;
  margin-top: 30px;
}

.el-input {
  margin-top: 15px;
}
.home-link {
  text-align: left;
}
</style>