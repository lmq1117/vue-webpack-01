<template>
  <div id="app">
    <h1>hello route</h1>
    <p>
      <router-link to="/foo">go to foo</router-link>
      |
      <router-link to="/bar">go to bar</router-link>
      |
      <router-link to="/user/1">go to user</router-link>
      |
      <router-link to="/member/1/post/1">go to user post</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
