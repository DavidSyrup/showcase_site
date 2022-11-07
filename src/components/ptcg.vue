<script>
export default {
    data() {
        return {
            giratinaActive: true,
            displayCondition: false
        }
    },
    methods: {
        activateGiratina(event) {
            if (this.giratinaActive === true)
                this.giratinaActive = false;
            else
                this.giratinaActive = true;
        },
        activateElement() {
            this.displayCondition = true;
        }
    },
    mounted: function() {
        this.activateElement();
    }
}
</script>

<template>
    <div class="page">
        <video-background
        src="pokemonrules.mp4"
        style="max-height: 400px; height: 100vh; width: 100%; opacity: 100%"
        >
        <div class="video-div">
            <h1 id="text-ptcg"> Competitive PTCG </h1>
        </div>
        </video-background>
        <Transition enter-active-class="animate__animated animate__fadeInDown animate__delay-1s">
            <div v-if="displayCondition">
            <h1 style="color: white; text-align: center; padding-top: 1%">Competitive Card Game</h1>
            <p class="explanation-text">Pokémon Trading Card Game has been a huge part of my 2021-2022 years, I've discovered this game in the bright
            summer of 2021, I've started by collecting cards as I've always been a fan of the Pokémon licence since I was a kid. One day I stumbled on players in my usual
        gaming bar. I tried the game and fell in love with it and its community: I dare say I met one of my best friends while playing this game. Since then I tried to compete in tournaments around Europe.</p>
            </div>
        </Transition>
        <div>
            <Transition enter-active-class="animate__animated animate__fadeInDown animate__delay-2s">
                <h2 v-if="displayCondition" style="color: white; text-align: center; padding-top: 5%">My standard format Deck</h2>
            </Transition>
            <div style="padding-top: 2%">
                <div>
                    <img @click="activateGiratina" :class="{ giratinaUnfolded: !giratinaActive, giratinaFolded: giratinaActive}" id="giratina" src="../../public/assets/giratina-vstar.png"/>
                </div>
                <Transition name="giratina">
                    <div class="giratina-text" v-if="giratinaActive === false"  style="float: right;">
                        <h3 style="color: white; padding-top: 1%; text-align: center; font-size: 30px;">Giratina VSTAR (LOR Format)</h3>
                        <p class="deck-text">This is the deck I am playing right now, I choose this one because of its particuliar nature, slow starting but strong-hitting.
                            It also uses the Lost Zone Engine which I really like. <br />
                            It appeared in the Last Origin Expansion which released in early september this year, lots of playable cards were also released in this expansion like Kyurem VMAX or Thorton
                         <br /><br />
                         I advise people to try this deck ! It has a lot of advantages and you can learn a lot playing it.
                        </p>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<style>

.giratina-enter-active {
  transition: opacity 4s ease;
}

.giratina-leave-active {
    transition: opacity 1s ease;
}

.giratina-enter-from,
.giratina-leave-to {
  opacity: 0;
}

img.giratinaFolded {
    top: 0px;
    left: 0px;
    float: left;
    box-shadow: 5px 5px 5px #fff;
    width: 15%; 
    margin-top: 2%;
    margin-bottom: 2%;
    transition: transform 3s, top 1s ease, left 1s ease;
    margin-left: 8%;
    transform: translate(230%);
}

img.giratinaFolded:hover {
    top: -5px;
    left: 5px;
}

img.giratinaUnfolded {
    float: left;
    box-shadow: 5px 5px 5px #fff;
    width: 15%;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 8%;
    display: block;
    transform: rotate3d(-8, 12, 4, 20deg);
    transition: transform 2s;
}

#text-ptcg {
    font-weight: 600;
    font-size: 80px; 
    color: white; 
    opacity: 100%;
    text-align: center;
    text-shadow: 0 0 20px #000000;
}

.video-div {
    top: 35%;
}

p.explanation-text{
    color: white; 
    text-align: center; 
    padding-top: 1%; 
    width: 50%; 
    margin: auto;
    font-size: 16px;
}

.giratina-text {
    width: 60%;
    background-color: #080808;
    margin-right: 5%;
    border-radius: 10px;
    padding-bottom: 1%;
    margin-top: 2%;
}

p.deck-text {
    width: 95%;
    margin: auto;
    color: white; 
    text-align: center; 
    padding-top: 1%; 
    font-size: 18px;
}


</style>