<template>
  <Loading v-show="loading"/>
  <WelcomePage @componentMounted="cMounted" @startingGame="startGame" v-if="welcome"/>
  <Game v-if="game"/>


</template>

<script>
import WelcomePage from "./components/WelcomePage.vue"
import Loading from "./components/Loading.vue"
import Game from "./components/Game.vue"


export default {
  name: 'App',
  data() {
    return {
      loading: true,
      welcome: true,
      game: false,
    }
  },
  components: {
    WelcomePage,
    Loading,
    Game
  },
  methods: {
   cMounted() {
     this.loading = false
   },
   startGame() {
     this.welcome = false;
     this.game = true
   },
   
  },
 
}



    



</script>

<style lang="scss">
html {
  font-size: 62.5%;
  background-color: #62E2C1;
}

#app {
  background-color: #62E2C1;
}


</style>
