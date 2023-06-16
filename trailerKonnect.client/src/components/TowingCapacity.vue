<template>
    <div class="col-12 glassCard1 d-flex justify-content-center mb-5">
              <div>
                <h3 class="fw-bold mt-3">Towing Capacity</h3>
                <p class="fs-5">Enter vehicle information</p>
                <form @submit.prevent="getVehicleTowingCapacity()">
                  <div class="form-floating mb-2">
                    <input v-model="editable.year" placeholder="Year" class="form-control" id="year" required  type="text">
                    <label for="floatingInput" class="form-label">Year</label>
                  </div>
                  <div class="form-floating mb-2">
                    <input v-model="editable.make" placeholder="Make" class="form-control" id="make" required type="text">
                    <label for="floatingInput" class="form-label" >Make</label>
                  </div>
                  <div class="form-floating mb-2">
                    <input v-model="editable.model" placeholder="Model" class="form-control" id="model" required type="text">
                    <label  for="floatingInput" class="form-label">Model</label>
                  </div>
                  <div class="text-center">
                    <button class="btn btn-success" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
</template>


<script>
import { ref } from 'vue';
export default {
    setup(){
         const editable = ref({})

        return {
            editable,
            async getVehicleTowingCapacity() {
                try {
                    const formData = editable.value;
                    let vehicleDetails = await towingCapacityServices.getVehicleTowingCapacity(formData);
                }
                catch (error) {
                    Pop.error(error.message);
                    logger.error(error);
                }
            }
        }
    }
    
}
</script>


<style lang="scss" scoped>

</style>