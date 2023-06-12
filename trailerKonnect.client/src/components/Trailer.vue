<template>
    <div class="trailerCard row">
        <div class="col-8 padding0">
            <router-link class="selectable" :to="{ name: 'ActiveTrailer', params: { trailerId: trailer.id } }">
                <img class="img-fluid rounded img-height" :src="trailer.img1" :alt="trailer.img2">
            </router-link>
        </div>

            <div class="col-4">
                <p class="fs-4">{{ trailer.title }}</p>
                <p class="fs-5">{{ trailer.dailyRate }}</p>
            </div>

    </div>
</template>


<script>
import { Trailer } from '../models/Trailer';

export default {
    props: { trailer: { type: Trailer, required: true } },
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
.trailerCard {
    // border: 2px solid black;
    border-radius: 9px;
    box-shadow: 5px 5px 12px blue, 10px 10px 12px red, 15px 15px 10px green;
}
.padding0{
    padding: 0%;
}
.img-height{
    max-height: 49vh;
}
</style>