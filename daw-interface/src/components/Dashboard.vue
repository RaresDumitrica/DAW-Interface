<template>
    <el-row>
        <el-col :span="24" :offset="0">
            <div v-purple><h3>{{ this.$options.filters.coolerMessage(message) }}</h3></div>
        </el-col>
      <el-col :span="8" :offset="8">
          <div class="grid-content bg-purple">
          <el-input
          placeholder="Title"
          v-model="title"
          clearable></el-input>
        </div>
      </el-col>
      <el-col :span="8" :offset="8">
          <div class="grid-content bg-purple .el-input">
          <el-input
          type="textarea"
          placeholder="Your message"
          v-model="content"
          clearable></el-input>
        </div>
      </el-col>
      <el-col :span="8" :offset="8">
          <div class="grid-content bg-purple .el-input">
            <el-button type="info" class="save-button" @click="onSubmit">Submit Ticket</el-button>
          </div>
      </el-col>
      <el-col :span="6" :offset="9">
          <div class="grid-content">
              <el-button class="save-button" v-bgColor="'#d9e2ef'" @click="onLogout">Logout</el-button>
          </div>
      </el-col>
    </el-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Dashboard',
    data: function () {
        return {
            title: '',
            content: ''
        }
    },
    props: {
        message: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions([
            'logout',
            'postTicketData'
        ]),
        onLogout() {
            this.logout();
            this.$router.push('/home');
        },
        onSubmit() {
            const formData = {
                title: this.title,
                content: this.content,
                color: 'rosie',
                createdDate: new Date()
            }
            this.postTicketData(formData);
            this.title = '',
            this.content= ''
        }
    },
    directives: {
        purple: {
            inserted: function(el) {
                el.style.color = '#7c69ef';
            }
        },    
        bgColor: {
            bind: function(el, binding, vnode) {
                el.style.backgroundColor = binding.value;
                console.log(vnode);
            }
        }
    }

}
</script>

<style type="scss" scoped>
body {
    background-color: #5CDB95;
}

.save-button{
  width: 100%;
  margin-top: 30px;
  font-size:16px
}

.el-input {
  margin-top: 15px;
}
.el-textarea {
  margin-top: 15px;
}
.home-link {
  text-align: left;
}
</style>