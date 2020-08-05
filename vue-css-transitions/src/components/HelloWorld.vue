<template>
  <div class="hello">
    <h1>Hi CSS Transitions</h1>
    <button class="btn">Hover on me to see a cool transition</button>
    <div>
      <transition name="fade" appear mode="out-in">
      <p v-if="show" key="visible">Now you see me!</p>
      <p v-else key="notVisible">Now you don't!</p>
      </transition>
      <button @click="show = !show">click me</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      show: true
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

.btn {
  width: 200px;
  height: 50px;
  transition-property: width;
  background-color: red;
  transition-duration: 2s;
  /* transition-timing-function: ease-in; */
  /* transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 5s; */
  transition: width 2s cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  color: #fff;
  border: 0;
}

.btn:hover {
  width: 300px;
}

p {
  color: green;
}

.fade-enter{
  color: red;
  transform: translateY(20px);
}

.fade-enter-active {
  transition: transform .3s cubic-bezier(1.0, 0.5, 0.8, 1.0), color .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-leave-active {
  transition: transform 1s cubic-bezier(1.0, 0.5, 0.8, 1.0), color 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-leave-to {
  transform: translateX(100px);
  color: cyan;
}
</style>
