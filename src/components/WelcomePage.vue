<template>
    <div class="d-flex flex-column justify-content-center align-items-center" id="welcomePage">
        <img :src="require('../assets/' + catProfessor.Img)" :alt="catProfessor.alt">
        <h1>CAT QUIZZ</h1>
        
        <button id="startGameButton" @click="startGame">GET STARTED!!</button>
    </div>

</template>

<script>
export default {
    data: function() {
        return {
            catProfessor: {
               Img: "cat.svg",
               alt: "Illustration of a Cat with glasses and a graduation cap"
            } 
        }
    },
    methods: {
        startGame() {
            this.$emit("startingGame")
        }
    },
    mounted() {
        this.$emit("componentMounted")
    }
}
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
    #welcomePage {
        margin-top: 10px;
        img {
            max-width: 600px;
        }
        h1 {
            margin-top: 10px;
            font-family: 'Fredoka One', cursive;
            font-size: 9rem;
            color:#073B4C
        }
        #startGameButton {
            border-radius: 50px;
            margin-bottom: 30px;
            border: none;
            background-color: white;
            font-family: 'Fredoka One', cursive;
            font-size: 5rem;
            padding: 15px;
            color: #118AB2;
        }
    }

    @media screen and (prefers-color-scheme: dark) {
    body {
        background-color: #62E2C1;
    }    
    h1 {
        color:#073B4C
    }
    #startGameButton a{
        color: #118AB2;     
    }
    #startGameButton {
        background-color: white;  
    }
}

    @media (max-width: 280px) {
       #welcomePage {
           h1 {
               font-size: 5rem
           }
           #startGameButton {
               font-size: 3rem;
           }
       }
    }

    @media (min-width:281px) and (max-width: 414px) {
       #welcomePage {
           h1 {
               font-size: 6rem
           }
           #startGameButton {
               font-size: 3.5rem;
           }
       }
    }

    @media (max-width:823px) and (orientation:landscape) {
        #welcomePage {
            img {
                max-width: 200px;
            }
            h1 {
                margin-top: 10px;
                font-size: 4rem;
            }
            #startGameButton {
                font-size: 3rem;
                padding: 15px;
            }       
        }
    }

    @media (max-width:1024px) and (orientation:landscape) {
        #welcomePage {
            img {
                max-width: 500px;
            }
            h1 {
                margin-top: 10px;
                font-size: 6rem;
            }
            #startGameButton {
                font-size: 4rem;
                padding: 15px;
            }       
        }
    }
</style>