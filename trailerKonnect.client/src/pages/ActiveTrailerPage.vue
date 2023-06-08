<template>
    <div class="row">
        <div class="col-4 mt-4 p-3">
            <img class="img-fluid rounded" :src="activeTrailer?.img1" alt="">
        </div>
        <div class="col-6 mt-4 ps-4"> 
            <p class="fs-2 fw-bold">{{ activeTrailer?.title }}</p>
            <p class="fs-4">Year: {{ activeTrailer?.year }}</p>
            <p class="fs-4">Make: {{ activeTrailer?.make }}</p>
            <p class="fs-4">{{ activeTrailer?.description }}</p>
            <p class="fs-4">{{ activeTrailer?.details }}</p>

            
        </div>
        <div class="col-2 p-3 mt-5">
            <p class="fs-5">Average Load Capacity: {{ activeTrailer?.capacity }} lbs.</p>
            <p class="fs-5">Overall Trailer Length: {{ activeTrailer?.lengthSize }}</p>
            <p class="fs-5">Overall Trailer Width: {{ activeTrailer?.width }}</p>
        </div>
        <div class="col-4 p-3 mt-4">
            <img class="img-fluid rounded" :src="activeTrailer?.img2" alt="">
        </div>
        <div class="col-4 p-3 mt-4">
            <img class="img-fluid rounded" :src="activeTrailer?.img3" alt="">
        </div>
        <div class="col-4 p-3 mt-4">
            <img class="img-fluid rounded" :src="activeTrailer?.img4" alt="">
        </div>
        <div class="col-4 p-3 mt-4">
            <img class="img-fluid rounded" :src="activeTrailer?.img4" alt="">
        </div>
        <div class="col-4 p-3 mt-4">
            <img class="img-fluid rounded" :src="activeTrailer?.img5" alt="">
        </div>
        <div class="col-4 p-3 mt-4">
            <img class="img-fluid rounded" :src="activeTrailer?.img6" alt="">
        </div>
        <div class="col-4 p-3 mt-4">
            <img class="img-fluid rounded" :src="activeTrailer?.img7" alt="">
        </div>
        <div class="col-4 p-3 mt-5 text-center">
            <p class="fs-4">Rules for trailer: examples such as no off road use with trailer: {{ activeTrailer?.rules }}</p>
            <p class="fs-4">Additional addons for the trailer such as wiring adaptors, ball hitches, or tie downs: {{ activeTrailer?.addons }}</p>
            <p class="fs-4">Daily rate for trailer rental: ${{ activeTrailer?.dailyRate }}</p>
            <p class="fs-4">Weekly rate for trailer rental: ${{ activeTrailer?.weeklyRate }}</p>
            <p class="fs-4">Optional deposit: ${{ activeTrailer?.deposit }}</p>
        </div>
        <div class="col-4 p-3 mt-5 text-center">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
          Book Trailer
        </button>
            </div>
        <div>
            <h1>{{ activeTrailer?.trailerOwner?.name }}</h1>
            <img :src="activeTrailer?.trailerOwner?.picture" alt="">
        </div>
    </div>
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">{{ activeTrailer.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import { useRoute, useRouter } from 'vue-router';
import { computed, watchEffect } from 'vue';
import { trailersService } from '../services/TrailersServices';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';

export default {
    setup(){
        const route = useRoute()
        const router = useRouter()

        async function getTrailerById(){
            try {
                const trailerId = route.params.trailerId
                await trailersService.getTrailerById(trailerId)
                console.log(trailerId)
            } catch (error) {
                Pop.error(error.message, 'getTrailerById')
                router.push('/')
                }
            }
        watchEffect(() => {
            if(route.params.trailerId){
                getTrailerById();
            };
        })

        return {
            activeTrailer: computed(() => AppState.trailer),
            profile: computed(() => AppState.profile),
            account: computed(() => AppState.account),

        }
    }
}
</script>


<style lang="scss" scoped>

</style>