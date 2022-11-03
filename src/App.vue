<script>
import TopBar from "./components/TopBar.vue"
export default {
  data() {
    return {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft"
    }
  },
  components:{
    TopBar
  },
  watch: {
    $route(to, from) {
      if (to.name === 'Esports') {
        this.enterClass = "animate__animated animate__fadeInRight"
        this.leaveClass = "animate__animated animate__fadeOutLeft"
      }
      if (to.name === 'Mangas') {
         if (from.name === 'Ptcg') {
          this.enterClass = "animate__animated animate__fadeInRight"
          this.leaveClass = "animate__animated animate__fadeOutLeft"
        } else if (from.name === 'Esports') {
          this.enterClass = "animate__animated animate__fadeInLeft"
        this.leaveClass = "animate__animated animate__fadeOutRight"
        }
      }
      if (to.name === 'Ptcg') {
        this.enterClass = "animate__animated animate__fadeInLeft"
        this.leaveClass = "animate__animated animate__fadeOutRight"
      }
    }
  }
}
</script>

<template>
  <div class="app">
    <TopBar />
    <router-view v-slot="{ Component }">
      <Transition 
      :enter-active-class="enterClass" 
      :leave-active-class="leaveClass"
      >
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap");

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.app {
  min-height: 100vh;
  position: relative;
  grid-row: 1;
  grid-column: 1/-1;
}

.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}

.page {
  position:absolute;
  top: 9%;
}

*{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
        font-weight: 400;
}
</style>
