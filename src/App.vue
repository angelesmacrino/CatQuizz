<template>
  <Loading v-show="loading"/>
  <WelcomePage @componentMounted="cMounted" @startingGame="startGame" v-if="welcome"/>
  <Game v-if="game" @finalScore="finalScore($event)"/>
  <Ending v-if="!game && finalscore != 0" :finalscore="finalscore" @restart="restart"/>

</template>

<script>
import WelcomePage from "./components/WelcomePage.vue"
import Loading from "./components/Loading.vue"
import Game from "./components/Game.vue"
import Ending from "./components/Ending.vue"



export default {
  name: 'App',
  data() {
    return {
      loading: true,
      welcome: true,
      game: false,
      finalscore: 0
    }
  },
  components: {
    WelcomePage,
    Loading,
    Game,
    Ending
  },
  methods: {
   cMounted() {
     this.loading = false
   },
   startGame() {
     this.welcome = false;
     this.game = true
   },
   finalScore(score) {
     this.finalscore = score
     this.game = false
   },
   restart() {
     this.welcome = true,
     this.game = false,
     this.finalscore = 0
   }
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
