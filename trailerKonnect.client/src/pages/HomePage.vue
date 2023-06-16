<template>
  <div class="container-fluid">
    <div class="row mb-3 homePagePic  box-shadow2 justify-content-around">
      <div class="col-12 d-flex justify-content-around mt-4">
        <span>
        <h1>"Act as if what you do makes difference. It does."</h1>
          <h2 class="mt-2">-William James</h2>
        </span>
      </div>
      <div class="col-12 text-center">
        <h3>Rent a trailer anywhere in the United States</h3>
      </div>
      <towing-capacity />
      </div>
    </div>

  <div class="container-fluid homePagePic1">
    <div class="row d-flex justify-content-center">
      <div class="col-12 my-5 text-center">
        <h3 class="mb-5 fw-bold">Host your trailer for rent with TRAILERKONNECT</h3>
        <h3>Start your online dump trailer rental business with TRAILERKONNECT</h3>
      </div>
        <div class="col-6 d-flex justify-content-center glassCard2 mb-5">
            <div class="row d-flex justify-content-between">
              <div class="col-12 mt-4">
                <div class="btn-group-vertical" role="group" aria-label="">
                  <span><button type="button" class="btn btn-primary rounded my-3">Location</button>
                      <input class="" type="location" name="location" id="location"></span>
                      <button type="button" class="btn btn-primary rounded my-2">Start / End Date</button>
                      <div class="my-2">
                        <input type="date" name="startDate" id="startDate">
                        <input type="date" name="endDate" id="endDate">
                      </div>
                      <div class="btn-group" role="group">
                        <button id="dropdownId" type="button" class="btn btn-primary my-2 dropdown-toggle rounded" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        Type of Trailer
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownId">
                        <a class="dropdown-item" href="#"></a>
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
                      <div class="col-12">
                        <router-link :to="{ name: 'Trailer' }" class="btn text-success lighten-30 selectable text-uppercase">
                          <button class="btn btn-success"> Search All Trailers</button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
    </div>

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
  background-color: rgba(0, 85, 128, 0.367);
  border-radius: 5%;
  position: relative;
  width: 510px;
  height: 300px;
}
.box-shadow2{
    box-shadow: 7px 7px 12px rgba(147, 221, 240, 0.867), 10px 10px 12px rgba(0, 106, 255, 0.672), 15px 15px 10px rgba(74, 87, 205, 0.953);
}
</style>
