<template>
  <header>
    <Navbar1 />
  </header>
  <main>
    <router-view />
  </main>
   <footer class="bg-dark text-light text-uppercase container-fluid">
    <div class="row">
      <div class="col-6">
        <div>
          Hitch Trailer Now
        </div>
        <div class="ps-3 my-3">
            <a href="https://www.facebook.com/profile.php?id=100089984958499" class="mdi mdi-facebook fs-5">
              <p class="fw-bold">FACEBOOK</p>
            </a>
        </div>
        <div>
          TWITTER
          <i class="mdi mdi-twitter"></i>
        </div>
        <div>
          instagram
          <i class="mdi mdi-instagram"></i>
        </div>
      </div>
      <div class="col-6">
  <router-link :to="{ name: 'Terms' }" class="btn text-success lighten-30 selectable text-uppercase">
    <div>
      terms
    </div>
  </router-link>
        <div>
          privacy
        </div>
        <div>
          site map
        </div>
        <div>
          company / support
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar1 from './components/Navbar1.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar1 }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";




</style>
