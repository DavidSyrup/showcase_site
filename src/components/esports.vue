<script>
import { gsap, Power0 } from "gsap"
    export default {
        data() {
            return {
                background_state: false,
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
            div_arrive: function (el, done) {
                gsap.to(el, {duration: 1.5, opacity: 1});

                setTimeout(() => {
                    this.drx_state = true;
                    this.firstcase_state = true;
                }, 1500);
            },
            remove_logo: function (el, done) {
                gsap.to(el, { duration: 0.5, opacity: 0, onComplete: done}).delay(1);
                setTimeout(() => {
                    this.page_value = "esports_page_2"
                }, 3400)
                setTimeout(() => {
                    this.second_state = true;
                }, 3700);
            },
            h1_arrive: function (el, done) {
                if (this.isMobile()) {
                    gsap.set(el, {x:"-20", y:20});
                    gsap.to(el, {x: 0, duration: 1.5, opacity: 1, onComplete: done});
                } else {
                    gsap.set(el, {y: 20});
                    gsap.to(el, {x: 35, duration: 1.5, onComplete: done, opacity: 1 })
                }
            },
            p_arrive: function (el, done) {
                gsap.set(el, {y: 2000})
                gsap.to(el, {y: 20, duration: 1.5, onComplete: done, opacity: 1}).delay(1.5);
            },
            firstcase_arrive: function (el, done) {
                if (this.isMobile()) {
                    gsap.set(el, {x: 20, y: 0, opacity: 0});
                } else {
                    gsap.set(el, {x: 50, y: 0, opacity: 0});
                }
                gsap.to(el, {y: 20, opacity: 1, duration: 1, onComplete: done}).delay(3);
            },  
            secondcase_arrive: function(el, done) {
                gsap.set(el, {x: 300 , y: 20, opacity: 0});
                if (this.isMobile()) {
                    gsap.to(el, {x: 50 , duration: 1, opacity: 1}).delay(3.5);
                } else {
                    gsap.to(el, {x: -50 , duration: 1, opacity: 1}).delay(3.5);
                }
            },
            bar_arrive: function(el, done) {
                gsap.set(el, {x: "-750", y: 20});
                var tl = gsap.timeline({repeat: -1}).delay(6);
                tl.set (el, {x: "-750", opacity: 1});
                tl.to(el, {x: 2200, duration: 10, ease: Power0.easeNone});
            },
            case3_arrive: function(el, done) {
                gsap.set(el, {x: "-750", y: 40});
                if (this.isMobile()) {
                    gsap.to(el, {x: 30, duration: 1, opacity: 1, onComplete: done}).delay(4);
                } else {
                    gsap.to(el, {x: 100, duration: 1, opacity: 1, onComplete: done}).delay(4);
                }
            },
            case4_arrive: function(el, done) {
                gsap.set(el, {x: 2000, y: 40});
                gsap.to(el, {x: -20, duration: 1, opacity: 1, onComplete: done}).delay(4.5);
            },
            case5_arrive: function(el, done) {
                gsap.set(el, {x: 2000, y: 40});
                if (this.isMobile()) {
                    gsap.to(el, {x: 10, duration: 1, opacity: 1, onComplete: done}).delay(6);
                } else {
                    gsap.to(el, {x: 100, duration: 1, opacity: 1, onComplete: done}).delay(6);
                }
            },
            make_pulse_logo: function() {
                gsap.to('.pulse_logo', {scale: 1.01, repeat: "-1", yoyo: true, ease: Power0.easeNone})
            },
            remove_redbg: function(el, done) {
                var tl = gsap.timeline();
                tl.to(el, {y: -1150, rotation: 0, duration: 1});
                tl.to(el, {y: -1700, duration: 2.5, onComplete: done});
            },
            remove_bluebg: function(el, done) {
                var tl = gsap.timeline();
                tl.to(el, {y: -1190, x: "-15", rotation: 0, duration: 1})
                tl.to(el, {y: -300, duration: 2.5, onComplete: done});
            },
            remove_t1: function (el, done) {
                gsap.to(el, {y: -550, duration: 2.5, onComplete: done}).delay(1);
            },
            remove_drx: function(el, done) {
                gsap.to(el, {y: 850, duration: 2.5, onComplete: done}).delay(1);
            },
            isMobile() {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            }
        },
        mounted () {
            if (this.isMobile()) {
                this.background_state = false;
                setTimeout(() => {
                    this.page_value = "esports_page_2"
                }, 500)
                setTimeout(() => {
                    this.second_state = true;
                }, 700);
            } else {
                this.page_value = "esports_page";
                this.background_state = true;
                setTimeout(() => {
                    this.make_pulse_logo();
                }, 1000)
            }
            document.body.classList.add('overflow-body');
        },
        watch: {
            $route(to, from) {
                document.body.classList.remove('overflow-body');
                this.page_value = "esports_page";
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
        <Transition @enter="div_arrive">
            <div v-if="second_state" class="underlayer">
                <div class="drx-title">
                    <Transition @enter="h1_arrive">
                        <h1 v-if="drx_state" class="h1_drx">DRX WINS</h1>
                    </Transition>
                    <Transition @enter="p_arrive">
                        <p v-if="drx_state" class="p_drx" style="text-align: center; opacity: 0;">DRX aka DragonX won the Worlds championship 2022 of League of Legends !<br />
                    Maybe the biggest cinderella story of the competitive history of this game, the finals was such an emotional rollercoaster </p>
                    </Transition>
                </div>
                <div class="first-case">
                    <Transition @enter="firstcase_arrive">
                        <img class="first_case_class" v-if="firstcase_state" src="../../public/assets/drx2ndcase.png" />
                    </Transition>
                    <Transition @enter="secondcase_arrive">
                        <img class="second_case_class" v-if="firstcase_state" src="../../public/assets/case1.png" />
                    </Transition>
                </div>
                <div class="transition_bar_div">
                    <Transition @enter="bar_arrive">
                        <img v-if="firstcase_state" class="bar_class first_case_class" src="../../public/assets/drxbar.png" />
                    </Transition>
                </div>
                <div class="bottom_case" style="width: 100%">
                    <Transition @enter="case3_arrive">
                        <img v-if="firstcase_state" class="third_case_class" src="../../public/assets/case3.png"/>
                    </Transition>
                    <Transition @enter="case4_arrive">
                        <img v-if="firstcase_state" class="fourth_case_class" src="../../public/assets/case4.png"/>
                    </Transition>
                    <Transition @enter="case5_arrive">
                        <img v-if="firstcase_state" class="fifth_case_class" src="../../public/assets/case5.png">
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
        width: 33%;
        opacity: 0;
    }

    .second_case_class {
        width: 60%;
        opacity: 0;
    }

    .third_case_class {
        width: 18.5%;
        opacity: 0;
    }
    
    .fourth_case_class {
        width: 19.75%;
    }

    .fifth_case_class {
        width: 42.25%;
    }

    .drx-title {
        width: 30%;
        float:left;
    }

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        .drx-title {
            width: 100%;
            text-align: center;
        }
    }

    .first-case {
        margin-top: 2%;
        width: 70%;
        float: left;
    }

    .drx-title h1 {
        opacity: 0;
        margin-left: 0;
        margin-top: 2%;
        font-size: 5vw;
        font-weight: 600;
    }

    .underlayer {
        opacity: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        border: 6px solid #5a8dff;
        color: #5a8dff
    }

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        .underlayer {
        opacity: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        border: none;
        color: #5a8dff
        }

        .p_drx {
            width: 90%;
            margin: auto;
        }

        .first-case {
        margin-top: 2%;
        width: 100%;
        float: left;
        }

        .first_case_class {
        width: 60%;
        opacity: 0;
        }

        .second_case_class {
            width: 80%;
            opacity: 0;
        }

        .third_case_class {
            width: 47.2%;
            opacity: 0;
        }
        
        .fourth_case_class {
            width: 50%;
        }

        .fifth_case_class {
            width: 95%;
        }
    }

    .esports_page {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .esports_page-initial {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .esports_page_2 {
        position: relative;
        height: 92.25%;
        width: 100%;
        top: 0%;
    }

    #red_background {
        width: 150%;
        height: 150%;
        background-color: #e8042c;
        transform: rotate(-23.25deg) translateY(-85%) translateX(-15%);
        z-index: 3;
    }
    #blue_background {
        width: 150%;
        height: 150%;
        background-color: #5a8dff;
        transform: rotate(-23.25deg) translateY(-80%) translateX(15%);
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