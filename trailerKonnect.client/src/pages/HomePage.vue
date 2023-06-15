<template>
  <div class="container-fluid">
    <div class="row mb-3 homePagePic  box-shadow2 justify-content-around">
      <div class="d-flex justify-content-center mt-4">
        <h1>"Act as if what you do makes difference. It does."</h1>
        <h2>-William James</h2>
      </div>
      <div class="col-12 glassCard1 d-flex justify-content-center mb-5">
        <div>
          <h3 class="fw-bold mt-3">Towing Capacity</h3>
          <div>
            <label for="year">Year</label>
            <input type="text">
          </div>
          <div>
            <label for="make">Make</label>
            <input type="text">
          </div>
          <div>
            <label for="model">Model</label>
            <input type="text">
          </div>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center glassCard1">
        <div class="row">
          <div class="row d-flex justify-content-between">
            <div class="col-12 mt-4">
              <div class="btn-group-vertical" role="group" aria-label="">
                <button type="button" class="btn btn-primary rounded">Location</button>
                <span>
                  <input class="" type="location" name="location" id="location"></span>
                  <button class="btn btn-primary rounded">Start / End Date</button>
                  <button type="button" class="btn btn-primary rounded">Start / End Date</button>
                  <div class="btn-group" role="group">
                    <button id="dropdownId" type="button" class="btn btn-primary dropdown-toggle rounded" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <div class="mt-2">
                      <input type="date" name="startDate" id="startDate">
                      <input type="date" name="endDate" id="endDate">
                    </div>
                    Type of Trailer
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownId">
                    <a class="dropdown-item" href="#">Utility Trailer</a>
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
          </div>
        </div> 
      </div>
      <div class="col-12 d-flex justify-content-end">
        <router-link :to="{ name: 'Trailer' }" class="btn text-success lighten-30 selectable text-uppercase">
          <button class="btn btn-success"> Search All Trailers</button>
        </router-link>
      </div>
    </div>
  </div>
    <!-- <div class="row d-flex justify-content-center">
    <div class="col-md-6">
      <div class="row d-flex justify-content-between">
        <div class="col-12">
          <div class="btn-group-vertical" role="group" aria-label="">
            <button type="button" class="btn btn-primary">Location</button><span><input type="location" name="location" id="location"></span>
            <button type="button" class="btn btn-primary">Start / End Date</button><span>

            </span>
            <div class="btn-group" role="group">
              <button id="dropdownId" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Type of Trailer
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Utility Trailer</a>
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
          <button class="btn btn-outline-primary">Start / End Date</button>
          <input type="date" name="startDate" id="startDate">
          <input type="date" name="endDate" id="endDate">
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
      !-- </div> -->
    <!-- </div>
    </div>
  </div>
</div> -->
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

.homePagePic {
  background-image: url(../assets/img/van-cargoTrailer.jpg);
  background-size: cover;
  height: 650px;
}

.glassCard1 {
  background-color: rgba(196, 177, 154, 0.614);
  border-radius: 5%;
  position: relative;
  width: 250px;
  height: 300px;
}
.box-shadow2{
    box-shadow: 7px 7px 12px rgba(147, 221, 240, 0.867), 10px 10px 12px rgba(0, 106, 255, 0.672), 15px 15px 10px rgba(74, 87, 205, 0.953);
}
</style>
