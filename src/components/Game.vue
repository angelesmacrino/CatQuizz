<template>
<div v-if="loaded" class="container">
        <div class="row">
            <div v-if="index < questions.length" class="col d-flex flex-column align-items-center justify-content-center">
                <div class="row" id="question"> {{index+1}}/{{questions.length}} : {{questions[index].question}}</div>
                <div class="answer" id="correct" @click="correctChoice"> {{questions[index].correct_answer}} </div>
                <div class="answer" id="incorrect" @click="wrongChoice"> {{questions[index].incorrect_answers[0]}} </div>
                <div class="row align-self-start" id="score"> SCORE: {{score}} </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
   data() {
       return {
           questions: [],
           index: 0,
           score: 0,
           answer: "",
           loaded:false
       }
   },
   methods: {
       correctChoice() {
           this.score++
            document.getElementById("correct").style.pointerEvents = "none";
            document.getElementById("incorrect").style.pointerEvents = "none";
            document.getElementById("correct").style.border = "thick solid #00FF00";
            setTimeout(this.nextQuestion, 1500)
       },
       wrongChoice() {
            document.getElementById("incorrect").style.border = "thick solid #FF0000";
            document.getElementById("correct").style.pointerEvents = "none";
            document.getElementById("incorrect").style.pointerEvents = "none";
            setTimeout(this.nextQuestion, 1500)
       },
       nextQuestion() {
            this.index++;
            document.getElementById("correct").style.border = "none";
            document.getElementById("incorrect").style.border = "none";
            document.getElementById("correct").style.pointerEvents = "auto";
            document.getElementById("incorrect").style.pointerEvents = "auto";
            if (this.index === this.questions.length) this.gameFinished;
       },
       gameFinished() {

       }
   },
   created() {
       fetch("https://opentdb.com/api.php?amount=10&category=27&type=boolean")
        .then((res) => res.json())
        .then(data => {
            this.questions = data.results;
            console.log(this.questions)
            this.loaded = true
        })
        .catch(err => console.log(err.message))
   }
}
</script>

<style scoped lang="scss">
$mobile-width: 600px;
$tablet-width: 900px;
$desktop-width: 1200px;
$large-desktop-width: 1800px;

@mixin mobile {
  @media (max-width: #{$mobile-width}) {
    @content;
  }
}

@mixin s-tablet {
    @media (min-width: #{$mobile-width + 1px}) and (max-width: #{$tablet-width}) {
    @content;
  }
}

@mixin l-tablet {
    @media (min-width: #{$tablet-width + 1px}) and (max-width: #{$desktop-width}) {
    @content;
  }
}

@mixin desktop {
    @media (min-width: #{$desktop-width + 1px}) and (max-width: #{$large-desktop-width}) {
    @content;
  }
}

@mixin l-desktop {
    @media (min-width: #{$large-desktop-width + 1px}){
    @content;
  }
}


.container {
    margin-left: auto;
    @media (orientation:portrait) {
        margin-top:20%;
    }
    @media (orientation:landscape) {
        margin-top:15%;
    }
    #question {
    background-color: white;
    border-radius: 25px;
    padding:10px;
    font-family: 'Fredoka One', cursive;
    color:#073B4C;
        @include mobile {
            font-size: 2.5rem;
        }
        @include s-tablet {
            font-size: 3rem;
        }
        @include l-tablet {
            font-size: 3.5rem;
        }
        @include desktop {
            font-size: 3.5rem;
        }
        @include l-desktop {
            font-size: 3.5rem;
        }
        
    }
    .answer {
    background-color: white;
    border-radius: 25px;
    padding:10px;
    font-family: 'Fredoka One', cursive;
    font-size: 1.5rem;
    margin:5px;
    color:#42565d;
    cursor: pointer;
        @include mobile {
            font-size: 2rem;
        }
        @include s-tablet {
            font-size: 2.5rem;
        }
        @include l-tablet {
            font-size: 3rem;
        }
        @include desktop {
            font-size: 3rem;
        }
        @include l-desktop {
            font-size: 3rem;
        }
    }
    #score {
    margin-top: 20px;
    margin-left:10px;
    font-family: 'Fredoka One', cursive;
    font-size: 2rem;
    color:#073B4C;
    }
    }
    
 
</style>