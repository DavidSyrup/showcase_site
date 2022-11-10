<script>
import { gsap, Power0 } from "gsap"
    export default {
        data() {
            return {
                background_state: true,
                page_value: "esports_page",
                second_state: false,
                drx_state: false,
                firstcase_state: false,
            }
        },
        methods: {
            transition_backgrounds () {
                this.background_state = false;
            },
            change_div_size () {
            },
            div_arrive: function (el, done) {
                gsap.to(el, {duration: 1.5, opacity: 1});

                setTimeout(() => {
                    this.drx_state = true;
                    this.firstcase_state = true;
                }, 1500);
            },
            remove_logo: function (el, done) {
                gsap.to(el, {y: -550, duration: 2.5, onComplete: done}).delay(1);
                setTimeout(() => {
                    this.page_value = "esports_page_2"
                }, 3400)
                setTimeout(() => {
                    this.second_state = true;
                }, 3700);
            },
            h1_arrive: function (el, done) {
                gsap.to(el, {x: 180, duration: 1.5, onComplete: done, opacity: 1 })
            },
            h2_arrive: function (el, done) {
                gsap.to(el, {x: 220, duration: 1.5, onComplete: done, opacity: 1}).delay(1.5);
            },
            firstcase_arrive: function (el, done) {
                gsap.set(el, {y: 0, opacity: 0});
                gsap.to(el, {y: 20, opacity: 1, duration: 1, onComplete: done}).delay(3);
            },
            secondcase_arrive: function(el, done) {
                gsap.set(el, {x: 300 , y: 20, opacity: 0});
                gsap.to(el, {x: -100 , duration: 1, opacity: 1}).delay(4);
            },
            bar_arrive: function(el, done) {
                gsap.set(el, {x: "-750", y: 20});
                var tl = gsap.timeline({repeat: -1}).delay(6);
                tl.set (el, {x: "-750", opacity: 1});
                tl.to(el, {x: 2000, duration: 12});
            },
            make_pulse_logo: function() {
                gsap.to('.pulse_logo', {scale: 1.01, repeat: "-1", yoyo: true, ease: Power0.easeNone})
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
    <div :class="[page_value]" class="page">
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
        <Transition @before-enter="change_div_size" @enter="div_arrive">
            <div v-if="second_state" class="underlayer">
                <div class="drx-title">
                    <Transition @enter="h1_arrive">
                        <h1 v-if="drx_state" class="h1_drx">DRX</h1>
                    </Transition>
                    <Transition @enter="h2_arrive">
                        <h2 v-if="drx_state" class="h2_drx">WINS</h2>
                    </Transition>
                </div>
                <div class="first-case">
                    <Transition @enter="firstcase_arrive">
                        <img class="first_case_class" v-if="firstcase_state" src="../../public/assets/drx2ndcase.png" />
                    </Transition>
                    <Transition @enter="secondcase_arrive">
                        <img class="first_case_class" v-if="firstcase_state" src="../../public/assets/drx1stcase.png" />
                    </Transition>
                </div>
                <div class="transition_bar_div">
                    <Transition @enter="bar_arrive">
                        <img v-if="firstcase_state" class="bar_class first_case_class" src="../../public/assets/drxbar.png" />
                    </Transition>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style>
    .bar_class {
        max-width: 750px;
        padding-top: 0.5%;
    }

    .transition_bar_div {
        clear: both;
    }

    .first_case_class {
        opacity: 0;
    }

    .drx-title {
        width: 33%;
        float:left;
    }

    .first-case {
        margin-top: 2%;
        width: 67%;
        float: left;
    }

    .drx-title h1 {
        opacity: 0;
        margin-left: 0;
        margin-top: 2%;
        font-size: 100px;
        font-weight: 600;
    }

    .drx-title h2 {
        opacity: 0;
        margin-top: -9%;
        margin-left: 0;
        font-size: 80px;
        font-weight: 500
    }

    .underlayer {
        opacity: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        border: 6px solid #5a8dff;
        color: #5a8dff
    }

    .esports_page {
        width: 100%;
        height: 100%;
    }

    .esports_page_2 {
        height: 91.25%;
        width: 100%;
        top: 8.5%
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