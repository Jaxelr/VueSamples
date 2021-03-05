<template>
  <div>
    <a href="#" class="btn btn-success" @click="getToken">Submit</a>
    <div v-if="loading">Loading...</div>
    {{ token }}
  </div>
</template>

<script>
import getAccessToken from '../services/ApiService'

export default {
  name: 'HelloWorld',
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

        getAccessToken(process.env.VUE_APP_TOKEN_URL, process.env.VUE_APP_CLIENT_ID, process.env.VUE_APP_CLIENT_SECRET, process.env.SCOPE)
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
