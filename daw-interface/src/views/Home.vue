<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Test message="Welcome to the App, Submit us a ticket!"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/Test.vue'

export default {
  name: 'Home',
  components: {
    Test
  }
}
</script>


