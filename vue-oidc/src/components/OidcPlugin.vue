<template>
  <div>
    <p>Using a Vue Plugin</p>
    <a href="#" class="btn btn-success" @click="getToken">Submit</a>
    <div v-if="loading">Loading...</div>
    {{ token }}
  </div>
</template>

<script>
export default {
  name: 'OidcPlugin',
  data()  {
     return {
      token: '',
      loading: false
     }
   },
   methods: {
      getToken() {
        this.loading = true;
        this.token = '';

        this.$Token.getAccessTokenNoParams()
        //getAccessToken(process.env.VUE_APP_TOKEN_URL, process.env.VUE_APP_CLIENT_ID, process.env.VUE_APP_CLIENT_SECRET, process.env.SCOPE)
        .then(response => this.token = response.access_token);
        
        this.loading = false;
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
