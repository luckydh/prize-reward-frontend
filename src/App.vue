<template>
  <div class="container">
   <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },

  methods: {
  getUrl() {
    return window.location.pathname
  }
  }



}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container{
  max-width: 1440px;
  margin: 0px 30px;
  min-height: 300px;
  padding: 0px 30px;
  margin: 0 auto;
}
.btn {
  border: none;
  padding: 15px 40px;
  border-radius: 20px;
  cursor: pointer;
}
.reedem {
      background-color: #FECF38;
  }
</style>
