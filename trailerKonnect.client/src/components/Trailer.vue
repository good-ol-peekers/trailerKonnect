<template>
    <div class="trailerCard">
        <div class="">
            <router-link class="selectable" :to="{ name: 'ActiveTrailer', params: { trailerId: trailer.id} }">
                <img class="img-fluid rounded" :src="trailer.img1" :alt="trailer.img2">
            </router-link>
    
            <div>
                <p class="fs-3">{{ trailer.title }}</p>
                <p class="fs-4">{{ trailer.dailyRate }}</p>
            </div>
        </div>

    </div>
</template>


<script>
import { Trailer } from '../models/Trailer';

export default {
    props: {trailer: {type: Trailer, required: true}},
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>
.trailerCard {
    border: 2px, solid, black;
}
</style>