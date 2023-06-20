<template>
    <div>
        <img class="img-height img-fluid" :src="myTrailers.img1" alt="img1">
        <h1>{{ myTrailers.title }}</h1>
    </div>
</template>


<script>
import { Trailer } from '../models/Trailer';
export default {
    props: { myTrailers: { type: Trailer, required: true} },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>
.img-height{
    max-height: 49vh;
}
</style>