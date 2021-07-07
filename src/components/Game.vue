<template>
<div v-if="loaded" class="container">
        <div class="row">
<<<<<<< HEAD
            <div v-if="index < questions.length" class="col d-flex flex-column align-items-center justify-content-center">
                <div class="row" id="question"> {{index+1}}/{{questions.length}} : {{questions[index].question}}</div>
                <div class="answer" id="True" @click="choiceMade('True', 'False')"> TRUE </div>
                <div class="answer" id="False" @click="choiceMade('False', 'True')"> FALSE </div>
                <div class="row align-self-start" id="score"> SCORE: {{score}} </div>
=======
            <div class="col d-flex flex-column align-items-center justify-content-center">
                <div class="row" id="question">QUESTION</div>
                    <div class="row answer" id="answer1">answer1</div>
                    <div class="row answer" id="answer2">answer2</div>
                    <div class="row answer" id="answer3">answer3</div>
                    <div class="row answer" id="answer4">answer4</div>
                    <div class="row answer" id="answer5">answer5</div>
                <div class="row align-self-start" id="score">SCORE:</div>
>>>>>>> 1f3ceff089d1cb4364a2fdef0a036fabb9881371
            </div>
        </div>
</div>
</template>

<script>
export default {
<<<<<<< HEAD
    emits: ["finalScore"],
    data() {
       return {
           questions: [],
           index: 0,
           score: 0,
           answer: "",
           loaded:false,
          
       }
   },

   methods: {
       choiceMade(choice, other) {
        document.getElementById(choice).style.pointerEvents = "none";
        document.getElementById(other).style.pointerEvents = "none";
        if (choice === this.questions[this.index].correct_answer) {
            this.score++
            document.getElementById(choice).style.border = "thick solid #00FF00";
            document.getElementById(other).style.border = "thick solid #FF0000";
        }
        else {
            document.getElementById(other).style.border = "thick solid #00FF00";
            document.getElementById(choice).style.border = "thick solid #FF0000";
        }
        setTimeout(this.nextQuestion, 1500)
       },
      
       nextQuestion() {
            this.index++;
            document.getElementById("True").style.border = "none";
            document.getElementById("False").style.border = "none";
            document.getElementById("True").style.pointerEvents = "auto";
            document.getElementById("False").style.pointerEvents = "auto";
            if (this.index === this.questions.length) this.gameFinished(this.score);
       },
       gameFinished(event) {
           this.$emit("finalScore", event)
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
=======
   
>>>>>>> 1f3ceff089d1cb4364a2fdef0a036fabb9881371
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
<<<<<<< HEAD
    margin-left: auto;
    @media (orientation:portrait) {
        margin-top:20%;
    }
    @media (orientation:landscape) {
        margin-top:15%;
    }
=======
    @media (orientation:portrait) {
        margin-top:20%;
    }
>>>>>>> 1f3ceff089d1cb4364a2fdef0a036fabb9881371
    #question {
    background-color: white;
    border-radius: 25px;
    padding:10px;
    font-family: 'Fredoka One', cursive;
    color:#073B4C;
        @include mobile {
<<<<<<< HEAD
            font-size: 2rem;
            margin: 5px 5px 5px 5px
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
        
=======
            font-size: 3rem;
        }
        @include s-tablet {
            font-size: 3.5rem;
        }
        @include l-tablet {
            font-size: 5rem;
        }
        @include desktop {
            font-size: 5.5rem;
        }
>>>>>>> 1f3ceff089d1cb4364a2fdef0a036fabb9881371
    }
    .answer {
    background-color: white;
    border-radius: 25px;
    padding:10px;
    font-family: 'Fredoka One', cursive;
    font-size: 1.5rem;
    margin:5px;
    color:#42565d;
<<<<<<< HEAD
    cursor: pointer;
=======
>>>>>>> 1f3ceff089d1cb4364a2fdef0a036fabb9881371
        @include mobile {
            font-size: 2rem;
        }
        @include s-tablet {
            font-size: 2.5rem;
        }
        @include l-tablet {
<<<<<<< HEAD
            font-size: 3rem;
        }
        @include desktop {
            font-size: 3rem;
        }
        @include l-desktop {
            font-size: 3rem;
=======
            font-size: 4rem;
        }
        @include desktop {
            font-size: 4.5rem;
>>>>>>> 1f3ceff089d1cb4364a2fdef0a036fabb9881371
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
    
 
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 1f3ceff089d1cb4364a2fdef0a036fabb9881371
