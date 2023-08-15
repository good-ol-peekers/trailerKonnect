<template>
    <div class="bg-dark text-light text-uppercase container-fluid">
        <div class="row">
            <div class="col-6">
                <div>
                    let's connect!
                </div>
                <div class="ps-3 my-3">
                    <a href="https://www.facebook.com/profile.php?id=100089984958499" class="mdi mdi-facebook fs-5">
                        <p class="fw-bold">FACEBOOK</p>
                    </a>
                </div>
                <div class="ps-3 my-3">
                    <a href="https://www.instagram.com/trailerconnect/" class="mdi mdi-instagram">
                        <p class="fw-bold">INSTAGRAM</p>
                    </a>
                </div>
                <div class="ps-3 my-3">
                    <a href="https://www.facebook.com/profile.php?id=100089984958499" class="fs-5">
                        <img class="img-fluid tik-tok-img-height" src="src/assets/img/tiktok.svg" alt="tiktok icon">
                        <p class="fw-bold">TIKTOK </p>
                    </a>
                </div>
                <div>
                    TWITTER
                    <i class="mdi mdi-twitter"></i>
                </div>
            </div>
            <div class="col-6">
                <router-link :to="{ name: 'Terms' }" class="btn text-success lighten-30 selectable text-uppercase">
                    <div>
                        terms
                    </div>
                </router-link>
                <div>
                    privacy
                </div>
                <div>
                    site map
                </div>
                <div>
                    company / support
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
.tik-tok-img-height{
    height: 22px;
    }
</style>