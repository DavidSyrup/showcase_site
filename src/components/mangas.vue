<script>
export default {
    data () {
        return {
            img_src: "assets/fmab.jpg",
            img2_src: "assets/jojop5.jpg",
            img3_src: "assets/snk.jpg",
            video_src: "jumppv.mp4",
            open_state: false,
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
        changeFMAvideo() {
            if (this.open_state === false) {
                this.video_src = "fmabopening.mp4";
                this.open_state = true;
            } else {
                this.video_src = "jumppv.mp4"
                this.open_state = false;
            }
        }
    },
    beforeMount() {
        //this.fetchMAL();
    }
}
</script>

<template>
    <div class="page">
        <div class="title">
            <h1 class="mangas" id="title">Mangas and Animes</h1>
            <p class="preambule">Mangas and Animes are a form of media I consume on a daily basis, if you know me, you know that I spend a lot
                of time reading japanese comics : It can be anywhere, at a party, in the toilets or simply in my bed. I've been knees deep in this culture
                since I was young, indeed my brother and my sister made me watch animes in our childhood. To this day, I still appreciate this part of the japanese pop-culture a lot worth.
            </p>
        </div>
        <video-background :src="video_src" style="max-height: 700px; height: 100vh; width: 100%; margin-top: 3%;">
            <div class="favorite-works" style="overflow: hidden;">
            <h1 class="mangas" id="favorite-title" style="padding-top: 2%">Here are some of my favorite works</h1>
            <ul class="anime_top">
                <li><img @click="changeFMAvideo" :src="img_src" /></li>
                <li style="width: 34%"><img :src="img2_src"/></li>
                <li><img :src="img3_src" /></li>
            </ul>
        </div>
        </video-background>
        <div class="last-watched">
            <h1 class="mangas" id="watched-title">My last episodes watched</h1>
        </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap");

#watched-title {
    padding-top: 3%;
}

#favorite-title {
    text-shadow: 0 0 20px #000000;
    font-weight: 600;
}

ul.anime_top li img {
    margin: auto;
    height: 475px;
    border: 1px solid #000000;
}

ul.anime_top li {
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

h1#title {
    font-size: 48px;
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