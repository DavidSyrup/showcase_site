<script>
import { gsap, Power0 } from "gsap"
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
                gsap.to(el, {y: -550, duration: 2.5, onComplete: done}).delay(1);
            },
            make_pulse_logo: function() {
                gsap.to('.pulse_logo', {scale: 1.01, repeat: "-1", yoyo: true, ease: Power0.easeNone})
                //gsap.to(".pulse_logo", {y: -550, duration: 2.5}).delay(1);
            },
            remove_redbg: function(el, done) {
                var tl = gsap.timeline();
                tl.to(el, {y: -1020, rotation: 0, duration: 1});
                tl.to(el, {y: -1600, duration: 2.5, onComplete: done});
            },
            remove_bluebg: function(el, done) {
                var tl = gsap.timeline();
                tl.to(el, {y: -1090, x: "-15", rotation: 0, duration: 1})
                tl.to(el, {y: -400, duration: 2.5, onComplete: done});
            },
            remove_t1: function (el, done) {
                gsap.to(el, {y: -550, duration: 2.5, onComplete: done}).delay(1);
            },
            remove_drx: function(el, done) {
                gsap.to(el, {y: 700, duration: 2.5, onComplete: done}).delay(1);
            }
        },
        mounted () {
            document.body.classList.add('overflow-body');
            this.make_pulse_logo();
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
        <Transition @leave="remove_t1">
            <img v-if="background_state" id="t1_logo" src="../../public/assets/whiteT1.png" />
        </Transition>
        <Transition @leave="remove_redbg">
            <div v-if="background_state" id="red_background"></div>
        </Transition>
        <Transition @leave="remove_logo">
            <img v-if="background_state" @click="transition_backgrounds" class="pulse_logo" id="worlds_logo" src="../../public/assets/worldslogo.png"/>
        </Transition>
        <Transition @leave="remove_bluebg">
            <div v-if="background_state" id="blue_background"></div>
        </Transition>
        <Transition @leave="remove_drx">
            <img v-if="background_state" id="drx_logo" src="../../public/assets/whitedrx.png" />
        </Transition>
        <div class="underlayer"></div>
    </div>
</template>

<style>
    .underlayer {
        z-index: -1;
    }

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

    img#t1_logo {
        width: 15%;
        position:absolute;
        z-index: 6;
        left: 20%;
        top: 20%;
    }

    img#drx_logo {
        width: 10%;
        position: absolute;
        z-index: 6;
        left: 70%;
        top: 50%;
    }

    .overflow-body {
        overflow-y: hidden;
        background-color: white;
    }
</style>