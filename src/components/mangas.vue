<script>
export default {
    data () {
        return {
            img_src: "assets/fmab.jpg",
            img2_src: "assets/jojop5.jpg",
            img3_src: "assets/snk.jpg",
            video_src: "jumppv.mp4",
            marginText: "7%",
            open_state: false,
            fma_state: true,
            jojo_state: true,
            snk_state: true,
            text_state: false,
            title_condition: false
        }
    },
    methods: {
        /*fetchMAL() {
            var myHeaders = {
                'X-MAL-CLIENT-ID': "1e96827f781dffe8545d930a6ace9e8f",
                'Content-Type': "application/json"
            }

            var myInit = {
                method: 'GET',
                headers: myHeaders,
            };

            console.log(myInit)

            fetch("https://cors-anywhere.herokuapp.com/https://api.myanimelist.net/v2/users/Nyluta/animelist?status=completed&sort=list_score&limit=3", myInit)
            .then(function(response) {
                this.img_src = response.data[0].node.main_picture.medium;
                this.img_src2 = response.data[1].node.main_picture.medium;
                this.img_src3 = response.data[2].node.main_picture.medium;
            }).catch(function(error) {
                console.log(error.message);
            });
        }*/
        changeVideo: function (video) {
            if (this.open_state === false && video === "fma") {
                this.marginText = '7%';
                this.video_src = "fmabopening.mp4";
                this.jojo_state = false;
                this.snk_state = false;
                setTimeout(() => this.text_state = true, 500);
                this.open_state = true;
            } else if (this.open_state === false && video === "jojo") {
                this.marginText= '6%';
                this.fma_state = false;
                this.snk_state = false;
                this.video_src ="jojopv.mp4";
                setTimeout(() => this.text_state = true, 500);
                this.open_state = true;
            } else if (this.open_state === false && video === "snk") {
                this.marginText = '7%';
                this.fma_state = false;
                this.jojo_state = false;
                this.video_src ="snkpv.mp4";
                setTimeout(() => this.text_state = true, 500);
                this.open_state = true;
            } else {
                this.video_src = "jumppv.mp4"
                this.text_state = false;
                this.open_state = false;
                setTimeout(() => this.snk_state = true, 600);
                setTimeout(() => this.fma_state = true, 600);
                setTimeout(() => this.jojo_state = true, 600);
            }
        },
        changeCondition() {
            this.title_condition = true;
        }
    },
    mounted() {
        this.changeCondition();
    },
    beforeMount() {
        //this.fetchMAL();
    }
}
</script>

<template>
    <div class="page">
        <div class="title">
            <Transition class="animate__animated animate__fadeInLeft animate__delay-1s">
                <h1 v-if="title_condition" class="mangas" id="title">Mangas and Animes</h1> 
            </Transition>
            <Transition class="animate__animated animate__fadeInLeft animate__delay-2s">
                <p v-if="title_condition" class="preambule">Mangas and Animes are a form of media I consume on a daily basis, if you know me, you know that I spend a lot
                of time reading japanese comics : It can be anywhere, at a party, in the toilets or simply in my bed. I've been knees deep in this culture
                since I was young, indeed my brother and my sister made me watch animes in our childhood. To this day, I still appreciate this part of the japanese pop-culture a lot worth.
                </p>
            </Transition>
        </div>
        <Transition class="animate__animated animate__fadeInUp animate__delay-3s">
            <video-background class="manga-bg" v-if="title_condition" :src="video_src" style="max-height: 700px; height: 100vh; width: 100%; margin-top: 3%;">
            <div class="favorite-works" style="overflow: hidden;">
            <h1 class="mangas" id="favorite-title" style="padding-top: 2%">Here are some of my favorite works</h1>
            <TransitionGroup tag="ul" name="anime" class="anime_top" mode="out-in" appear="true">
                <li v-if="fma_state" class="fma-li"><img @click="changeVideo('fma')" :src="img_src" /></li>
                <li v-if="jojo_state" class="jojo-li" style="width: 34%"><img @click="changeVideo('jojo')" :src="img2_src"/></li>
                <li v-if="snk_state" class="snk-li"><img @click="changeVideo('snk')" :src="img3_src" /></li>
                <li v-if="text_state" id="text-li" :style="{'margin-right': marginText}">
                    <h1 v-if="fma_state">FullMetal Alchemist:Brotherhood</h1>
                    <p v-if="fma_state">My favorite anime, it is not the most well animated story, but its quality in all its aspects is very good.<br />
                            Lots of relevant themes in our modern era: philosophy, politics and religion. It still packs a lot of action. The plot in itself is very interesting, it doesn't use any particular way of narration but convey
                            the plot point with clarty and ease, in itself the story is not boring : plot twists and build-ups throughout the whole story paying off with one of my favorite ending in anime history.
                            <br /><br />Please consider watching it !</p>
                    <h1 v-if="jojo_state">Jojo's Bizarre Adventure Golden Wind</h1>
                    <p v-if="jojo_state">5th part of the classic Jojo's bizarre adventure. <br /> <br />Set in Italy, the story talks about gangsters and the italian mafia, in this crazy part we have maybe the most entertaining fights of the whole series.
                        Taking the concept of "STAND" even further beyond, the characters have guts and make all the fights exciting. Making you wonder if they will die against each opponent they encounter. <br /> 
                        The last part of this season is so exciting that it might make you faint ! <br /> <br />
                        Don't hesitate and come watch this masterpiece packed with all kind of emotions : melancholy, sadness, happiness, excitement. And as they say : Arrivederci
                    </p>
                    <h1 v-if="snk_state">Shingeki no Kyojin</h1>
                    <p v-if="snk_state">Shingeki no Kyojin or Attack on Titan, one of the best stories ever told. Set in a strange world filled with Titans, some kind of mindless giant humanoïd creature coming straight from horror movies, humans are trying to survive and exterminate all the titans. We follow the
                        of Eren Jaeger a young Teenager who unfortunately lost his mom in a giant attack from the Colossal Titan. <br/> <br/> The way it's constructed, the way every plot twist makes every rewatch a new story.
                    Every relevant characters are complex and plenty moral dilemmas are shown. I recommend everyone who wants to experience a great story (through its narrative ways) to watch this show</p>
                </li>
            </TransitionGroup>
        </div>
        </video-background>
        </Transition>
        <div class="last-watched">
            <h1 class="mangas" id="watched-title">My last episodes watched</h1>
            <p class="preambule" style="margin-bottom: 2%;">(WIP Problems with the MAL Api at the moment come back check later !)</p>
        </div>
    </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap");

.anime-move,
.anime-enter-active,
.anime-leave-active {
  transition: all 0.5s ease;
}

.anime-enter-from,
.anime-leave-to {
  opacity: 0;
  transform: translate(100px, 0);
}

.anime-leave-active {
    position: absolute;
}

#text-li {
    background: #080808;
    opacity: 95%;
    text-align: center;
    width: 60%;
    height: 475px;
    border-radius: 10px;
    border: 1px solid #ffffff;
    margin-top: 2%;
}

#text-li h1 {
    font-size: 28px;
    border-bottom: 2px solid #ffffff;
    display: inline;
}

#text-li p{
    margin-top: 3%;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 18px;
}

#watched-title {
    padding-top: 3%;
}

#favorite-title {
    text-shadow: 0 0 20px #000000;
    font-weight: 600;
}

ul.anime_top li img {
    transition: top 1s ease, left 1s ease;
    top: 0px;
    left: 0px;
    margin: auto;
    height: 475px;
    border: 1px solid #000000;
}

ul.anime_top li img:hover {
    top: -5px;
    left: 5px;
}

ul.anime_top li {
    float: left;
    width: 33%;
    text-align: center;
    padding-top: 2%;
    display: inline-block;
}

ul.anime_top {
    width: 100%;
    text-align: center;
}

p.preambule {
    color: white;
    width: 50%;
    margin: auto;
    text-align: center;
    padding-top: 2%;
    font-size: 16px;
}

@media (max-width: 1403px) {
    p.preambule {
        color: white;
    width: 90%;
    margin: auto;
    text-align: center;
    padding-top: 2%;
    font-size: 2.25vh;
    }

    ul.anime_top li img {
    transition: top 1s ease, left 1s ease;
    top: 0px;
    left: 0px;
    margin: auto;
    height: 200px;
    border: 1px solid #000000;
}
    ul.anime_top li {
    width: 100%;
    text-align: center;
    padding-top: 2%;
    }

    .jojo-li {
        width: 100% !important; 
    }

    #text-li {
        width: 100% !important;
        font-size: 2.5vw;
    }

    .manga-bg {
        max-height: 1000px !important;
    }

    #text-li h1 {
        font-size: 4vw;
    }
}

h1#title {
    font-size: 5vh;
}

h1.mangas {
    text-align: center;
    color: white;
}

div.title {
    width: 100%;
    padding-top: 1%;
}

.page {
    width: 100%;
}
</style>