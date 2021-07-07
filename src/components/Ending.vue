<template>
    <div class="content d-flex flex-column justify-content-center align-items-center">
        <p id="score"> Final score: {{finalscore}}</p>
        <p id="finalgrade" class="text-center"> {{finalgrade}}</p>
        <button id="startGameButton" @click="$emit('restart')">Start again</button>
    </div>
</template>

<script>
export default {
    props: ["finalscore"],
    emits: ["restart"],
    data() {
        return {
            badge: ['Keep trying, you can do it!', 'Good work!', 'You are a master!'],
            finalgrade : ""
        }
    },
    mounted() {
        (this.finalscore <= 3) ? this.finalgrade += this.badge[0]:
        (this.finalscore >= 4 && this.finalscore < 8 ) ? this.finalgrade += this.badge[1]:
        this.finalgrade += this.badge[2];
    }
}
</script>

<style lang="scss" scoped>
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

.content {
    @media (orientation:portrait) {
        margin-top:20%;
    }
    @media (orientation:landscape) {
        margin-top:10%;
    }
    #score {
        font-family: 'Fredoka One', cursive;
        color:#073B4C;
        @include mobile {
            font-size: 2.5rem;
        }
        @include s-tablet {
            font-size: 5rem;
        }
        @include l-tablet {
            font-size: 5rem;
        }
        @include desktop {
            font-size: 5rem;
        }
        @include l-desktop {
            font-size: 5rem;
        }
    }
    #finalgrade {
        font-family: 'Fredoka One', cursive;
        color:#073B4C;
        @include mobile {
            font-size: 2.5rem;
        }
        @include s-tablet {
            font-size: 5rem;
        }
        @include l-tablet {
            font-size: 5rem;
        }
        @include desktop {
            font-size: 5rem;
        }
        @include l-desktop {
            font-size: 5rem;
        }
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
             @include mobile {
            font-size: 2.5rem;
            }
            @include s-tablet {
                font-size: 5rem;
            }
            @include l-tablet {
                font-size: 5rem;
            }
            @include desktop {
                font-size: 5rem;
            }
            @include l-desktop {
                font-size: 5rem;
            }
        }
}

</style>>

