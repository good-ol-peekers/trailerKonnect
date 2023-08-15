<template>
    <div class="container-fluid bg-primary">
        <div class="row">
            <div class="col-12 text-center my-3">
                <h1>Add New Trailer Listing</h1>
            </div>
        </div>
    </div>

    <div class="container-fluid bg-primary">
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="createTrailerListing()">
                    <div class="form-floating mb-2">
                        <input v-model="editable.make" required type="text" class="form-control"
                            aria-describedby="enter event name">
                        <label for="make" class="form-label">Make</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.model" required type="text" class="form-control"
                            aria-describedby="enter trailer model">
                        <label for="model" class="form-label">Model</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.year" required type="text" class="form-control"
                            aria-describedby="enter Year">
                        <label for="year" class="form-label">Year</label>
                    </div>
                    <div class="form-check form-switch bg-secondary rounded my-3">
                        <input v-model="editable.pickup" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Trailer available for Pickup</label>
                    </div>
                    <div class="form-check form-switch bg-secondary rounded my-3">
                        <input 
                        v-model="editable.delivery" class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Trailer available for Delivery (Delivery included is a 10 miles radius for flat-rate + additional cost per milage beyond 10 mile radius)</label>
                    </div>

                    <div class="form-floating mb-2">
                        <input v-model="editable.weight" required type="text" class="form-control"
                            aria-describedby="trailer capacity">
                        <label for="capacity" class="form-label">Trailers Weight in Pounds(lbs.)</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.capacity" required type="text" class="form-control"
                            aria-describedby="trailer capacity">
                        <label for="capacity" class="form-label">Trailers Capacity in pounds(lbs.)</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.lengthSize" required type="text" class="form-control"
                            aria-describedby="enter trailer length">
                        <label for="lengthSize" class="form-label">Trailer Length(feet)</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.width" required type="text" class="form-control"
                            aria-describedby="enter trailer width">
                        <label for="width" class="form-label">Trailer Width(feet)</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.description" required type="text" class="form-control"
                            aria-describedby="enter trailer description">
                        <label for="description" class="form-label">Description of Trailer</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.details" type="text" class="form-control"
                            aria-describedby="enter trailer details">
                        <label for="details" class="form-label">Trailer Details</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.rules" type="text" class="form-control" aria-describedby="enter rules">
                        <label for="rules" class="form-label">Rules for trailer rental</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.dailyRate" required type="text" class="form-control"
                            aria-describedby="enter daily rate / cost">
                        <label for="dailyRate" class="form-label">Daily rental Rate in $USD</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.weeklyRate" required type="text" class="form-control"
                            aria-describedby="enter weekly rate / cost">
                        <label for="weeklyRate" class="form-label">Weekly Rental Rate in $USD</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.addons" type="text" class="form-control"
                            aria-describedby="enter trailer addons here">
                        <label for="addons" class="form-label">Addons offered with trailer rental</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.deposit" type="text" class="form-control"
                            aria-describedby="enter deposit dollar amount here">
                        <label for="deposit" class="form-label">Deposit if required for trailer rental in $USD</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.img1" required type="text" class="form-control"
                            aria-describedby="enter image 1">
                        <label for="img1" class="form-label">Trailer Image # 1</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.img2" required type="text" class="form-control"
                            aria-describedby="enter image 2">
                        <label for="img2" class="form-label">Trailer Image # 2</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.img3" type="text" class="form-control"
                            aria-describedby="enter image 3, not required">
                        <label for="img3" class="form-label">Trailer Image # 3</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.img4" type="text" class="form-control"
                            aria-describedby="enter image 4, not required">
                        <label for="img4" class="form-label">Trailer Image # 4</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.img5" for="floatingInput" type="text" class="form-control"
                            aria-describedby="enter image 5, not required">
                        <label for="img5" class="form-label">Trailer Image # 5</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.img6" for="floatingInput" type="text" class="form-control"
                            aria-describedby="enter image 6, not required">
                        <label for="img6" class="form-label">Trailer Image # 6</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input v-model="editable.img7" for="floatingInput" type="text" class="form-control"
                            aria-describedby="enter image 7, not required">
                        <label for="img7" class="form-label">Trailer Image # 7</label>
                    </div>
                    <div>
                        <label for="type" class="form-label">Type of Trailer being offered for rent</label>
                        <select v-model="editable.type" class="form-select mb-5" required>
                            <option selected value="utility">Utility Trailer</option>
                            <option value="flatbed">Flatbed Trailer</option>
                            <option value="car">Car Trailer</option>
                            <option value="car dolly">Car dolly</option>
                            <option value="dump">Dump Trailer</option>
                            <option value="enclosed">Enclosed Trailer</option>
                            <option value="horse trailer">Horse Trailer</option>
                            <option value="motorcycle trailer">Motorcycle Trailer</option>
                            <option value="hitch cargo carrier">Hitch Cargo Carrier / RoofTop Box</option>
                        </select>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-success my-5" type="submit"> Create Trailer Listing </button>
                    </div>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from "vue"
import { AppState } from '../AppState'
import { trailersService } from '../services/TrailersServices.js';
// import { router } from '../router';
import Pop from '../utils/Pop';
import { logger } from "../utils/Logger";
export default {
    setup() {
        const editable = ref({ type: 'utility' })

        return {
            editable,
            account: computed(() => AppState?.account),
            newTrailer: computed(() => AppState.newTrailer),
            async createTrailerListing() {
                try {
                    const formData = editable.value
                    let newTrailer = await trailersService.createTrailerListing(formData)
                    logger.log(newTrailer)
                    editable.value = {}
                    // router.push({ name: 'ActiveTrailer', params: { trailerId: newTrailer.id } })
                } catch (error) {
                    Pop.error(error.message)
                }
            }
        }
    }
}
</script>

<style scoped></style>
