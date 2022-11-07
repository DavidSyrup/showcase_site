<script>
import gsap from "gsap"
    export default {
        data() {
            return {
                background_state: true
            }
        },
        methods: {
            transition_backgrounds () {
                this.background_state = false;
            },
            remove_logo: function (el, done) {
                gsap.to(el, {y: -550, duration: 3, onComplete: done}).delay(3);
            },
            remove_redbg: function(el, done) {
                var tl = gsap.timeline();
                tl.to(el, {y: -1020, rotation: 0, duration: 3});
                tl.to(el, {y: -1600, duration: 3, onComplete: done});
            },
            remove_bluebg: function(el, done) {
                var tl = gsap.timeline();
                tl.to(el, {y: -1090, x: "-15", rotation: 0, duration: 3})
                tl.to(el, {y: -400, duration: 3, onComplete: done});
            }
        },
        mounted () {
            document.body.classList.add('overflow-body');
        },
        watch: {
            $route(to, from) {
                document.body.classList.remove('overflow-body');
            }
        }
    }
</script>
<template>
    <div id="esports_page" class="page">
        <Transition @leave="remove_redbg">
            <div v-if="background_state" id="red_background"></div>
        </Transition>
        <Transition @leave="remove_logo">
            <img v-if="background_state" @click="transition_backgrounds" id="worlds_logo" src="../../public/assets/worldslogo.png"/>
        </Transition>
        <Transition @leave="remove_bluebg">
            <div v-if="background_state" id="blue_background"></div>
        </Transition>
    </div>
</template>

<style>
    #esports_page {
        width: 100%;
        height: 100%;
    }

    #red_background {
        width: 150%;
        height: 150%;
        background-color: #e8042c;
        transform: rotate(-23.25deg) translateY(-80%) translateX(-15%);
        z-index: 3;
    }
    #blue_background {
        width: 150%;
        height: 150%;
        background-color: #5a8dff;
        transform: rotate(-23.25deg) translateY(-72%) translateX(15%);
        z-index: auto;
    }

    img#worlds_logo {
        width: 20%;
        position: absolute;
        left: 40%;
        top: 30%;
        z-index: 6;
    }

    .overflow-body {
        overflow-y: hidden;
    }
</style>