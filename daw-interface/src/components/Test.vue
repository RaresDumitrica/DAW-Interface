<template>
    <el-row>
        <el-col :span="24" :offset="0">
            <div v-purple>{{ this.$options.filters.coolerMessage(message) }}</div>
        </el-col>
        <el-col :span="8" :offset="8">
        <div class="grid-content bg-purple">
            <router-link :to="{ path: '/submit' }">
                <el-button type="success" class="save-button" @click="click">Create a ticket!</el-button>
            </router-link>
        </div>
      </el-col>
      
    </el-row>

    
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Test',
    
    props: {
        message: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions([
            'getTicketData'
        ]),

        click() {
            this.getTicketData();
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
.home-link {
  text-align: left;
}
</style>