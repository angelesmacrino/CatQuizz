<template>
<div class="container">
        <div class="row">
            <div class="col d-flex flex-column align-items-center justify-content-center">
                <div class="row" id="question">QUESTION</div>
                    <div class="row answer" id="answer1">answer1</div>
                    <div class="row answer" id="answer2">answer2</div>
                    <div class="row answer" id="answer3">answer3</div>
                    <div class="row answer" id="answer4">answer4</div>
                    <div class="row answer" id="answer5">answer5</div>
                <div class="row align-self-start" id="score">SCORE:</div>
            </div>
        </div>
</div>
</template>

<script>
export default {
   
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
    @media (orientation:portrait) {
        margin-top:20%;
    }
    #question {
    background-color: white;
    border-radius: 25px;
    padding:10px;
    font-family: 'Fredoka One', cursive;
    color:#073B4C;
        @include mobile {
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
    }
    .answer {
    background-color: white;
    border-radius: 25px;
    padding:10px;
    font-family: 'Fredoka One', cursive;
    font-size: 1.5rem;
    margin:5px;
    color:#42565d;
        @include mobile {
            font-size: 2rem;
        }
        @include s-tablet {
            font-size: 2.5rem;
        }
        @include l-tablet {
            font-size: 4rem;
        }
        @include desktop {
            font-size: 4.5rem;
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
