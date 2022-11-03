<script>
export default {
    data() {
        return {
            isRotate: false
        }
    },
    methods: {
        rotate_icon(event) {
            this.isRotate = !this.isRotate;
        }
    }
}
</script>

<template>
<div>
    <header :class="{'scrolled-nav': scrollPosition}"></header>
    <nav>
        <div>
            <ul v-show="!mobile" class="navigation">
                <li>
                    <router-link class="link" :to="{name: 'Ptcg'}">PTCG</router-link>
                </li>
                <li class="others">
                    <router-link class="link" :to="{name: 'Mangas'}">Mangas</router-link>
                </li>
                <li class="others">
                    <router-link class="link" :to="{name: 'Esports'}">Esports</router-link>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>

<style lang="scss">

    li:hover {
        opacity: 1;
        background: none;
        text-decoration: none;
    }

    li a:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }

    li a.router-link-active:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 0;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 100%;
    }

    li a:hover:after
    {
        width: 100%;
        left: 0;
    }

    header {
        z-index: 99;
        width: 100%;
        position: fixed;
        transition: 0.5s ease all;
        color: #fff;
        background-color: rgba(0,0,0, 0.8);
    }

    nav {
        display: flex;
        margin: 0 auto;
        flex-direction: row;
        padding: 12px 10.5%;
        transition: .5s ease all;
        width: 90%;
        @media (min-width: 1140px) {
            max-width: 1140px;
        }    
    }

    ul,
    .link {
        font-weight: 500;
        color: white;
        list-style: none;
        text-decoration: none;
    }

    li {
        color: white;
        text-decoration: none;
        transition: opacity 1s;
        opacity: 0.7;
        text-transform: uppercase;
        padding: 16px;
    }

    li.others {
        margin-left: 256px;
    }

    .link {
        font-size: 14px;
        transition: .5s ease all;
        padding-bottom: 4px;
    }

    .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex;
    }
</style>