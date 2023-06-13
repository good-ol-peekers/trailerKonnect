<template>
    <div class="container">

        <div class="row">
            <div class="col-4 mt-4 p-3">
                <img class="img-fluid rounded box-shadow1 user-select-none" :src="activeTrailer?.img1" alt="">
            </div>
            <div class="col-6 mt-4 ps-4 user-select-none"> 
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
            <div class="col-4 p-3 mt-4 user-select-none">
                <img class="img-fluid rounded box-shadow1" :src="activeTrailer?.img2" alt="">
            </div>
            <div class="col-4 p-3 mt-4">
                <img class="img-fluid rounded box-shadow1" :src="activeTrailer?.img3" alt="">
            </div>
            <div class="col-4 p-3 mt-4">
                <img class="img-fluid rounded box-shadow1" :src="activeTrailer?.img4" alt="">
            </div>
            <div class="col-4 p-3 mt-4">
                <img class="img-fluid rounded box-shadow1" :src="activeTrailer?.img4" alt="">
            </div>
            <div class="col-4 p-3 mt-4">
                <img class="img-fluid rounded box-shadow1" :src="activeTrailer?.img5" alt="">
            </div>
            <div class="col-4 p-3 mt-4">
                <img class="img-fluid rounded box-shadow1" :src="activeTrailer?.img6" alt="">
            </div>
            <div class="col-4 p-3 mt-4">
                <img class="img-fluid rounded box-shadow1" :src="activeTrailer?.img7" alt="">
            </div>
            <div class="col-4 p-3 mt-5 text-center user-select-none">
                <p class="fs-4">Rules for trailer: examples such as no off road use with trailer: {{ activeTrailer?.rules }}</p>
                <p class="fs-4">Additional addons for the trailer such as wiring adaptors, ball hitches, or tie downs: {{ activeTrailer?.addons }}</p>
                <p class="fs-4">Daily rate for trailer rental: ${{ activeTrailer?.dailyRate }}</p>
                <p class="fs-4">Weekly rate for trailer rental: ${{ activeTrailer?.weeklyRate }}</p>
                <p class="fs-4">Optional deposit: ${{ activeTrailer?.deposit }}</p>
            </div>
            <div class="col-4 p-3 mt-5 text-center selectable">
                <button @click="purchaseTrailerRental()" class="btn btn-success">Purchase Trailer Rental</button>
            </div>
            
            <div>
                <h1>{{ activeTrailer?.trailerOwner?.name }}</h1>
                <img class="img-fluid selectable" :src="activeTrailer?.trailerOwner?.picture" alt="">
            </div>
        </div>
    </div>
        
    </template>


<script>
import { useRoute, useRouter } from 'vue-router';
import { computed, watchEffect } from 'vue';
import { trailersService } from '../services/TrailersServices';
import { TrailerRentalsService } from '../services/TrailerRentalsService'
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
            async purchaseTrailerRental(){
                try {
                    const trailerId = route.params.trailerId
                    let body = {}
                    body.ownerOfTrailerAccountId = this.activeTrailer.trailerOwner.id
                    await TrailerRentalsService.purchaseTrailerRental(body, trailerId)
                } catch (error) {
                    Pop.error(error, "purchase Trailer Rental");
                }
            },
            activeTrailer: computed(() => AppState.trailer),
            profile: computed(() => AppState.profile),
            account: computed(() => AppState.account),

        }
    }
}
</script>


<style lang="scss" scoped>
.box-shadow1{
    box-shadow: 5px 5px 12px blue, 10px 10px 12px red, 15px 15px 10px green;
}
    
</style>
