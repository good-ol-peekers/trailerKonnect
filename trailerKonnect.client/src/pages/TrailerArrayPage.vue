<template>
    <div class="container-fluid homePagePic1">
        <div class="row d-flex justify-content-center">
            <div class="col-12 my-5 text-center">
                <h3 class="T-outline1">Find Your Perfect Trailer Now!
                </h3>
                <!-- <h3 class="mb-5 fw-bold">Host your trailer for rent with TRAILERKONNECT</h3>
        <h3>Start your online dump trailer rental business with TRAILERKONNECT</h3> -->
            </div>
            <div class="col-6 d-flex justify-content-center glassCard2 mb-5">
                <div class="row d-flex justify-content-between">
                    <div class="col-12 mt-4">
                        <p class="fs-4 T-outline fw-bold text-light">SEARCH by Type, Location, and Dates to Discover the
                            Ideal Rental for Your Needs.</p>
                        <div class="btn-group-vertical" role="group" aria-label="Boise">
                            <span><button type="button" class="btn btn-primary rounded my-3">Location Set To Boise</button>
                                <!-- <input class="" type="location" name="location" id="location"> -->
                            </span>
                            <!-- <button type="button" class="btn btn-primary rounded my-2">Start / End Date</button> -->
                            <div class="row">
                                <div class="my-2 col-6">
                                    <div class="glassCard3 my-3">
                                        <h1>State Date</h1>
                                        <input type="date" name="startDate" id="startDate">
                                    </div>
                                </div>
                                <div class="my-2 col-6">
                                    <div class="glassCard3 my-3">
                                        <h1>End Date</h1>
                                        <input type="date" name="endDate" id="endDate">
                                    </div>
                                </div>
                            </div>
                            <div class="btn-group" role="group">
                                <button id="dropdownId" type="button" class="btn btn-primary my-2 dropdown-toggle rounded"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Type of Trailer
                                </button>
                                <div class="dropdown-menu DDmenu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item" href="#"></a>
                                    <div class="col-3 mt-1"><button class="btn btn-primary"
                                            @click="filterTrailerType('')">All Trailer
                                            Types</button></div>
                                    <div class="col-3 mt-1"><button class="btn btn-primary"
                                            @click="filterTrailerType('utility')">Utility
                                            Trailer</button></div>
                                    <div class="col-3 mt-1"><button class="btn btn-primary"
                                            @click="filterTrailerType('flatbed')">FlatBed
                                            Trailer</button></div>
                                    <div class="col-3 mt-1"><button class="btn btn-primary"
                                            @click="filterTrailerType('car')">Car
                                            Trailer</button></div>
                                    <div class="col-3 mt-1"><button class="btn btn-primary"
                                            @click="filterTrailerType('car dolly')">Car
                                            Dolly</button></div>
                                    <div class="col-3 mt-1"><button class="btn btn-primary"
                                            @click="filterTrailerType('dump')">Dump
                                            Trailer</button></div>
                                    <div class="col-3 mt-1"><button class="btn btn-primary"
                                            @click="filterTrailerType('enclosed')">Enclosed
                                            Cargo Trailer</button></div>
                                    <div class="col-3 mt-1"><button class="btn btn-primary"
                                            @click="filterTrailerType('horse trailer')">Motorcycle Trailer</button></div>
                                    <div class="col-3 mt-1"><button class="btn btn-primary"
                                            @click="filterTrailerType('motorcycle trailer')">Horse Trailer</button></div>
                                    <div class="col-3 mt-1"><button class="btn btn-primary"
                                            @click="filterTrailerType('hitch cargo carrier')">Hitch Cargo Carrier / Rooftop
                                            Cargo
                                            Carrier</button></div>
                                </div>
                                <div class="col-12">
                                    <router-link :to="{ name: 'Trailer' }"
                                        class="btn text-success lighten-30 selectable text-uppercase">
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
    <div class="container-fluid bg-secondary">
        <div class="row d-flex justify-content-center">
            <div v-for="t in trailer" class="col-11 my-5 bg-dark">
                <Trailer :trailer="t" />
            </div>
        </div>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { trailersService } from '../services/TrailersServices';
import Pop from '../utils/Pop';
import Trailer from '../components/Trailer.vue';
import { AppState } from '../AppState';
export default {
    setup() {
        async function getAllTrailers() {
            try {
                await trailersService.getAllTrailers();
            }
            catch (error) {
                Pop.error(error, "get All Trailers");
            }
        }
        onMounted(() => {
            getAllTrailers();
        });
        return {

            trailer: computed(() => AppState.trailers),

        };
    },
    components: { Trailer }
}
</script>


<style lang="scss" scoped>
.homePagePic1 {
    background-image: url(../assets/img/kenny-eliason-uXTkE1oiPs8-unsplash.jpg);
    background-size: cover;
    height: 650px;
}

.glassCard2 {
    background-color: rgba(0, 85, 128, 0.671);
    border-radius: 5%;
    position: relative;
    width: 510px;
    height: 370px;
}

.glassCard3 {
    background-color: rgba(101, 132, 147, 0.793);
    border-radius: 5%;
    position: relative;
    width: 210px;
    height: 170px;
}

.T-outline {
    text-shadow: 1px 1px 2px rgb(36, 27, 28);
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
</style>