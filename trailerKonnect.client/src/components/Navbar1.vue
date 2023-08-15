<template>
    <div class="container-fluid bg-secondary">
        <div class="row">
            <div class="col-12 d-flex justify-content-between mt-4">
                <router-link :to="{ name: 'Home' }" class="btn text-light fw-bold selectable text-uppercase my-2">
                <p class="mx-2">trailer connect</p>
            </router-link>
                <div class="p-1 mx-5">
                    <Login />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Login from './Login.vue';

export default {
    setup() {
        return {};
    },
    components: { Login }
}
</script>


<style lang="scss" scoped>

</style>