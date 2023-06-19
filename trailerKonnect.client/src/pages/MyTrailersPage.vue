<template>

  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
  </div>
  <div>
    my active trailer rentals
  </div>
<div>edit my trailers form</div>  
  
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center my-3">
        <h1>Add New Trailer Listing</h1>
      </div>
    </div>
    </div>

    
    
    
    <component>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <createTrailerForm/>
          </div>
        </div>
      </div>
    </component>
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
      // trailer: computed(() => {
      //   if(!category.value){
      //     return AppState.trailer
      //   };
      // }),
      account: computed(() => AppState?.account),
      newTrailer: computed(() => AppState.newTrailer),
      async createTrailerListing(){
        try {
          const formData = editable.value
          // formData.accountId = account?.id
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

<style scoped>

</style>
