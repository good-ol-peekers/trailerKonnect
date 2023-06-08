<template>
    <div class="Container-fluid">
        <div class="row">
            <div class="col-4">
                <div v-for="t in trailer">
                    <Trailer :trailer="t" />
                </div>
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

</style>