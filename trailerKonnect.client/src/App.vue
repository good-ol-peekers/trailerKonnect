<template>
  <header>
    <Navbar1 />
  </header>
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar1 from './components/Navbar1.vue'
import Footer from './components/Footer.vue'
export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar1, Footer }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";




</style>
