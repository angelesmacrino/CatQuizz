<template>
<div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-8 d-flex flex-column align-items-center">
                <div class="row" id="question">QUESTION</div>
                <div class="row answer" id="answer1">answer1</div>
                <div class="row answer" id="answer2">answer2</div>
                <div class="row answer" id="answer3">answer3</div>
                <div class="row answer" id="answer4">answer4</div>
                <div class="row answer" id="answer5">answer5</div>
                <div class="row align-self-start" id="score">SCORE:</div>
            </div>
            <div class="col-sm-6 col-md-4 d-flex">
                <img :src="require('../assets/' + catProfessor.Img)" :alt="catProfessor.alt" class="img-fluid align-self-center"  v-show="!mobileView">
            </div>
        </div>
</div>
</template>

<script>
export default {
    data: function() {
            return {
                catProfessor: {
                Img: "cat.svg",
                alt: "Illustration of a Cat with glasses and a graduation cap"
                },
                mobileView: true
            }
        },
    methods: {
        handleView() {
            this.mobileView = window.innerWidth <= 600;
            console.log(window.innerWidth)
      }
    },
    created() {
      this.handleView();
      window.addEventListener('resize', this.handleView)
  }
}
</script>

<style lang="scss">
.container {
    margin:5px;
    #question {
    background-color: white;
    border-radius: 25px;
    padding:10px;
    font-family: 'Fredoka One', cursive;
    font-size: 2rem;
    color:#073B4C;
    }
    .answer {
    background-color: white;
    border-radius: 25px;
    padding:10px;
    font-family: 'Fredoka One', cursive;
    font-size: 1.5rem;
    margin:5px;
    color:#42565d;
    }
    #score {
    margin-top: 20px;
    margin-left:10px;
    font-family: 'Fredoka One', cursive;
    font-size: 2rem;
    color:#073B4C;
    }
}
@media (max-width:540px) {
        .container {
            margin-top:25px
        }
    }
@media (min-width:768px) and (max-width:1024px) and (orientation:portrait) {
        .container {
            margin-top:40%;
            #question {
                font-size: 4rem;
            }
            .answer {
                font-size: 3rem;
                }
            #score {
                font-size: 2rem;
                }
        }
    }

@media (min-width:1024px) and (max-width:1366px) and (orientation:landscape) {
    .container {
        margin-top:10%;
    #question {
                font-size: 5rem;
            }
            .answer {
                font-size: 4rem;
                }
            #score {
                font-size: 3rem;
                }
    }
}
</style>