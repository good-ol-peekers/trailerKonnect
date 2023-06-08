<template>
  <div>
    <h1>"Act as if what you do makes difference. It does."</h1>
    <h2>-William James</h2>
  </div>
<img class="img-fluid" src="../assets/img/van-cargoTrailer.jpg" alt="">
<div class="">
  <div class="row">
    <div class="col-12">
      <div class="row d-flex justify-content-between">
        <div class="col-12">
          <div class="btn-group-vertical" role="group" aria-label="">
            <button type="button" class="btn btn-secondary">Location</button>
            <button type="button" class="btn btn-secondary">Start / End Date</button>
            <div class="btn-group" role="group">
              <button id="dropdownId" type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Type of Trailer
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Utility Trailer</a>
                <a class="dropdown-item" href="#">FlatBed Trailer</a>
              </div>
            </div>
          </div>
          <button class="btn btn-outline-secondary">Location</button>
          <input type="location">
          <button class="btn btn-outline-secondary">Start / End Date</button>
          <input type="date">
              
          <router-link :to="{ name: 'Trailer' }" class="btn text-success lighten-30 selectable text-uppercase">
          <button class="btn btn-outline-success"> Search All Trailers</button>
          </router-link>
        </div>
        <div class="col-12">
          <h1>Rent Trailers Locally</h1>
        </div>
        <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('')">All Trailer Types</button></div>
        <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('utility')">Utility Trailer</button></div>
        <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('flatbed')">FlatBed Trailer</button></div>
        <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('car')">Car Trailer</button></div>
        <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('car dolly')">Car Dolly</button></div>
        <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('dump')">Dump Trailer</button></div>
        <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('enclosed')">Enclosed Cargo Trailer</button></div>
        <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('horse trailer')">Motorcycle Trailer</button></div>
        <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('motorcycle trailer')">Horse Trailer</button></div>
        <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('hitch cargo carrier')">Hitch Cargo Carrier / Rooftop Cargo Carrier</button></div>
      </div>
    </div>
  </div>
</div>
<div>
  <img class="img-fluid" src="../assets/img/kenny-eliason-uXTkE1oiPs8-unsplash.jpg" alt="">
</div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">


</style>
