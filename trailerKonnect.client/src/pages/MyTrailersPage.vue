<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
  </div>

  

  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center my-3">
        <h1>Add New Trailer Listing</h1>
      </div>
      <div class="col-md-6">
        <form @submit.prevent="createTrailerListing()">
          <div class="form-floating mb-2">
            <label for="title" class="form-label">Introduction-Title</label>
            <input v-model="editable.title" required type="text" class="form-control"
            aria-describedby="enter Title ">
          </div>
          <div class="form-floating mb-2" >
              <label for="year" class="form-label">Year</label>
              <input v-model="editable.year" required type="text" class="form-control" 
              aria-describedby="enter Year">
            </div>
            <div class="form-floating mb-2">
            <label for="capacity" class="form-label">Capacity</label>
            <input v-model="editable.capacity" required type="text" class="form-control" 
            aria-describedby="trailer capacity">
          </div>
          <div class="form-floating mb-2">
            <label for="make" class="form-label">Make</label>
            <input v-model="editable.make" required type="text" class="form-control"
            aria-describedby="enter event name">
          </div>
          <div class="form-floating mb-2">
            <label for="lengthSize" class="form-label">Length</label>
            <input v-model="editable.lengthSize" required type="text" class="form-control"
            aria-describedby="enter trailer length">
          </div>
          <div class="form-floating mb-2">
            <label for="width" class="form-label">Width</label>
            <input v-model="editable.width" required type="text" class="form-control"
            aria-describedby="enter trailer width">
          </div>
          <div class="form-floating mb-2">
            <label for="description" class="form-label">Description</label>
            <input v-model="editable.description" required type="text" class="form-control"
            aria-describedby="enter trailer description">
          </div>
          <div class="form-floating mb-2">
            <label for="details" class="form-label">Details</label>
            <input v-model="editable.details" required type="text" class="form-control" 
            aria-describedby="enter trailer details">
          </div>
          <div class="form-floating mb-2">
            <label for="rules" class="form-label">Rules</label>
            <input v-model="editable.rules" required type="text" class="form-control" 
            aria-describedby="enter rules">
          </div>
          <div class="form-floating mb-2">
            <label for="dailyRate" class="form-label">Daily Rate</label>
            <input v-model="editable.dailyRate" required type="text" class="form-control" 
            aria-describedby="enter daily rate / cost">
          </div>
          <div class="form-floating mb-2">
              <label for="weeklyRate" class="form-label">Weekly Rate</label>
              <input v-model="editable.weeklyRate" required type="text" class="form-control" 
              aria-describedby="enter weekly rate / cost">
          </div>
          <div class="form-floating mb-2">
            <label for="addons" class="form-label">Addons</label>
            <input v-model="editable.addons" required type="text" class="form-control" 
            aria-describedby="enter trailer addons here">
          </div>
          <div class="form-floating mb-2">
            <label for="deposit" class="form-label">Deposit</label>
            <input v-model="editable.deposit" required type="text" class="form-control" 
            aria-describedby="enter deposit dollar amount here">
          </div>
          <div class="form-floating mb-2">
            <label for="img1" class="form-label">Image # 1</label>
            <input v-model="editable.img1" required type="text" class="form-control" 
            aria-describedby="enter image 1">
          </div>
                    <div class="form-floating mb-2">
              <label for="img2" class="form-label">Image # 2</label>
              <input v-model="editable.img2" required type="text" class="form-control" 
              aria-describedby="enter image 2">
            </div>
                      <div class="form-floating mb-2">
              <label for="img3" class="form-label">Image # 3</label>
              <input v-model="editable.img3" type="text" class="form-control"
              aria-describedby="enter image 3, not required">
            </div>
            <div class="form-floating mb-2">
                <label for="img4" class="form-label">Image # 4</label>
                <input v-model="editable.img4" type="text" class="form-control" 
                aria-describedby="enter image 4, not required">
              </div>
              <div class="form-floating mb-2">
                <label for="img5" class="form-label">Image # 5</label>
                <input v-model="editable.img5" for="floatingInput" type="text" class="form-control" 
                aria-describedby="enter image 5, not required">
              </div>
              <div class="form-floating mb-2">
                <label for="img6" class="form-label">Image # 6</label>
                <input v-model="editable.img6" for="floatingInput" type="text" class="form-control" 
                aria-describedby="enter image 6, not required">
              </div>
              <div class="form-floating mb-2">
                <label for="img7" class="form-label">Image # 7</label>
                <input v-model="editable.img7" for="floatingInput" type="text" class="form-control" 
                aria-describedby="enter image 7, not required">
              </div>
          <div class="">
                <label for="type" class="form-label">Type of Trailer</label>
                <select v-model="editable.type" class="form-select mb-4" required >
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
                <button class="btn btn-outline-success" type="submit"> Create Trailer Listing </button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import {  computed, ref } from 'vue'

import { AppState } from '../AppState.js'
import { trailersService } from '../services/TrailersServices.js';
import { router } from '../router';
import Pop from '../utils/Pop.js';
export default {
  setup() {
    const editable = ref({ type: 'utility' })

    return {
      editable,
      // trailer: computed(() => {
      //   if(!category.value){
      //     return AppState.trailer
      //   };
      // }),
      account: computed(() => AppState.account),
      // newTrailer: computed(() => AppState.newTrailer),
    }
  },
    async createTrailerListing(){
  try {
    debugger
    const formData = editable.value
    let newTrailer = await trailersService.createTrailerListing(formData)
    editable.value = {}
    // router.push({ name: 'ActiveTrailer', params: { trailerId: newTrailer.id } })
  } catch (error) {
    Pop.error(error.message)
  }
}
}
</script>

<style scoped>

</style>
