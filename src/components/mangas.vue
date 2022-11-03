<script>
export default {
    data () {
        return {
            img_src: "",
            img2_src: "",
            img3_src: "",
            link_list: "",
            link_list2: "",
            link_list3: "",
        }
    },
    methods: {
        fetchMAL() {
            var myHeaders = {
                'Access-Control-Allow-Origin': "http://127.0.0.1:5173/mangas" ,
                'X-MAL-CLIENT-ID': "1e96827f781dffe8545d930a6ace9e8f" 
            }

            var myInit = {
                mode: 'cors',
                method: 'GET',
                headers: myHeaders,
                status: 'completed',
                sort: 'list_score',
                limit: 3
            };

            console.log(myInit)

            fetch("https://api.myanimelist.net/v2/users/Nyluta/animelist/", myInit)
            .then(function(response) {
                this.img_src = response.data[0].node.main_picture.medium;
                this.img_src2 = response.data[1].node.main_picture.medium;
                this.img_src3 = response.data[2].node.main_picture.medium;
            }).catch(function(error) {
                console.log(error.message);
            });
        }
    },
    beforeMount() {
        this.fetchMAL();
    }
}
</script>

<template>
    <div class="page">
        <div class="title">
            <h1 class="mangas" id="title">Mangas and Animes</h1>
            <p class="preambule">Mangas and Animes are a form of media I consume on a daily basis, if you know me, you know that I spend a lot
                of time reading japanese comics : It can be everywhere, at a party, in the toilets or simply in my bed. I've been knees deep in this culture
                since I was young, indeed my brother and my sister made me watch animes in our childhood. To this day, I still appreciate this part of the japanese pop-culture a lot worth.
            </p>
        </div>
        <div class="favorite-works">
            <h1 class="mangas" id="favorite-title" style="padding-top: 2%">Here are some of my favorite works</h1>
            <img :src="img_src" />
            <!--<img :src="img_src2" />
            <img :src="img_src3" /> -->
        </div>
        <div class="last-watched">
            <h1 class="mangas" id="watched-title" style="padding-top: 2%">My last episodes watched</h1>
        </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap");

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