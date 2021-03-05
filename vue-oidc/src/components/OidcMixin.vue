<template>
  <div>
    <p>Using a Mixin</p>
    <a href="#" class="btn btn-success" @click="getToken">Submit</a>
    <div v-if="loading">Loading...</div>
    {{ token }}
  </div>
</template>

<script>
export default {
  name: 'OidcMixin',
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

        this.getAccessToken()
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
