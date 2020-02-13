<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>The user logged in is: {{this.userId}}</div>
    <button @click="login()">Login as Jaxel</button>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: mapState({
    userId: state => state.account.userId
  }),
  methods: {
    login() {
      this.$store.commit('login', 'Jaxel')
    },
    logout() {
      this.$store.commit('logout')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
