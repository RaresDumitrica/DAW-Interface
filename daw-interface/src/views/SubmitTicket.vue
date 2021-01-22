<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <Dashboard message="Daca ai ajuns aici, trimite un ticket, Nice!"/>
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard'

export default {
  name: 'About',
  components: {
    Dashboard
  }
}
</script>
