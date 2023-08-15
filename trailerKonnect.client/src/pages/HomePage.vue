<template>
  <h1>
  </h1>
  <div class="container animation1 animation2 animation3 animation4">
    <div class="row">
      <div class="col-12">
        <p class="fw-bold fs-2 text-center my-5">
          Welcome to Trailer Connect ! Your Ultimate Trailer Rental Destination
        </p>
        <p class="fs-3 mb-5">
          Rent the Perfect Trailer for Your Needs, Hassle-Free.
          
          Discover a Wide Range of Utility, Flatbed, Car, Dump, Enclosed, and More!
          
          Get Competitive Rates, Reliable Service, and Convenient Booking.
          
          Explore our User-Friendly Platform and Find Your Ideal Trailer Today!
        </p>
      </div>
      <div class="col-12">
        <router-link :to="{ name: 'Trailer' }" class="btn text-success lighten-30 selectable text-uppercase">
          <button class="btn btn-success"> Search All Trailers</button>
        </router-link>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row mb-3 homePagePic  box-shadow2 justify-content-around">
      <div class="col-12 d-flex justify-content-around mt-4">


      </div>
      <div class="col-12 text-center">
        <h3 class="T-outline1">Rent a trailer anywhere in the United States</h3>
      </div>
      <towing-capacity />
    </div>
  </div>
  <!-- 
  <div class="container-fluid homePagePic1">
    <div class="row d-flex justify-content-center">
      <div class="col-12 my-5 text-center">
        <h3 class="T-outline1">Find Your Perfect Trailer Now!
        </h3>
        <h3 class="mb-5 fw-bold">Host your trailer for rent with TRAILERKONNECT</h3>
        <h3>Start your online dump trailer rental business with TRAILERKONNECT</h3>
      </div>
      <div class="col-6 d-flex justify-content-center glassCard2 mb-5">
        <div class="row d-flex justify-content-between">
          <div class="col-12 mt-4">
            <p class="fs-4 T-outline fw-bold text-light">Filter by Type, Location, and Dates to Discover the Ideal Rental
              for Your Needs.</p>
            <div class="btn-group-vertical" role="group" aria-label="">
              <span><button type="button" class="btn btn-primary rounded my-3">Location</button>
                <input class="" type="location" name="location" id="location"></span>
              <button type="button" class="btn btn-primary rounded my-2">Start / End Date</button>
              <div class="my-2">
                <input type="date" name="startDate" id="startDate">
                <input type="date" name="endDate" id="endDate">
              </div>
              <div class="btn-group" role="group">
                <button id="dropdownId" type="button" class="btn btn-primary my-2 dropdown-toggle rounded"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Type of Trailer
                </button>
                <div class="dropdown-menu DDmenu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="#"></a>
                  <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('')">All Trailer
                      Types</button></div>
                  <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('utility')">Utility
                      Trailer</button></div>
                  <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('flatbed')">FlatBed
                      Trailer</button></div>
                  <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('car')">Car
                      Trailer</button></div>
                  <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('car dolly')">Car
                      Dolly</button></div>
                  <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('dump')">Dump
                      Trailer</button></div>
                  <div class="col-3 mt-1"><button class="btn btn-primary" @click="filterTrailerType('enclosed')">Enclosed
                      Cargo Trailer</button></div>
                  <div class="col-3 mt-1"><button class="btn btn-primary"
                      @click="filterTrailerType('horse trailer')">Motorcycle Trailer</button></div>
                  <div class="col-3 mt-1"><button class="btn btn-primary"
                      @click="filterTrailerType('motorcycle trailer')">Horse Trailer</button></div>
                  <div class="col-3 mt-1"><button class="btn btn-primary"
                      @click="filterTrailerType('hitch cargo carrier')">Hitch Cargo Carrier / Rooftop Cargo
                      Carrier</button></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
import { ref, computed, onUpdated } from "vue"
// import Pop from "../utils/Pop"
// import { logger } from "../utils/Logger"
// import { towingCapacityServices } from '../services/TowingCapacityServices.js';
import TowingCapacity from "../components/TowingCapacity.vue";
export default {
  setup() {
    // onUpdated(() => {
    //     window.scrollTo(-500, 0);
    // });
    return {
    };
  },
  components: { TowingCapacity }
}
</script>

<style scoped lang="scss">

.animation1::before {  
  transform: scaleX(0);
  transform-origin: bottom right;
}

.animation2:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.animation3::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  inset: 0 0 0 0;
  background: hsl(200 100% 80%);
  z-index: -1;
  transition: transform .3s ease;
}

.animation4 {
  position: relative;
  font-size: 5rem;
}

html {
  block-size: 100%;
  inline-size: 100%;
}

body {
  min-block-size: 100%;
  min-inline-size: 100%;
  margin: 0;
  box-sizing: border-box;
  display: grid;
  place-content: center;
  font-family: system-ui, sans-serif;
}

@media (orientation: landscape) {
  body {
    grid-auto-flow: column;
  }
}

.homePagePic {
  background-image: url(../assets/img/van-cargoTrailer.jpg);
  background-size: cover;
  height: 650px;
}

.homePagePic1 {
  background-image: url(../assets/img/kenny-eliason-uXTkE1oiPs8-unsplash.jpg);
  background-size: cover;
  height: 650px;
}

.glassCard1 {
  background-color: rgba(0, 85, 128, 0.367);
  border-radius: 5%;
  position: relative;
  width: 250px;
  height: 360px;
}

.glassCard2 {
  background-color: rgba(0, 85, 128, 0.671);
  border-radius: 5%;
  position: relative;
  width: 510px;
  height: 370px;
}

.DDmenu {
  height: 20vh;
  width: 200px;
  overflow-y: scroll;
  overflow-x: visible;
  position: static;
}

.DDmenu>div {
  width: 300px;
}

// .box-shadow2{
//     box-shadow: 7px 7px 12px rgba(147, 221, 240, 0.867), 10px 10px 12px rgba(0, 106, 255, 0.672), 15px 15px 10px rgba(74, 87, 205, 0.953);
// }
.T-outline {
  text-shadow: 1px 1px 2px rgb(36, 27, 28);
}

.T-outline1 {
  text-shadow: 1px 1px 2px rgb(249, 195, 201);
}</style>
