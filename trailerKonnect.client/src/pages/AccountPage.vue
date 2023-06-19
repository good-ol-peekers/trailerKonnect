<template>
    <div class="about text-center">
        <h1>Welcome {{ account.name }}</h1>
        <img class="rounded" :src="account.picture" alt="" />
        <p>{{ account.email }}</p>
    </div>


    <button class="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Edit Account Information / Update Address</button>

    <router-link :to="{ name: 'MyTrailers', params: { accountId: account.id } } ">
        <button class="btn btn-outline-success">View My Trailer Listings / Create Trailer Listing / Edit Trailer Listings</button>
    </router-link>



<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Edit Account Information / Update</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
                    <form @submit.prevent="editAccount()">
                        <div class="form-floating mb-2">
                            <input v-model="editable.picture" :placeholder="account.picture" required type="text"
                                class="form-control" id="picture">
                            <label for="floatingInput" class="form-label">Picture</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input v-model="editable.name" :placeholder="account.name" required type="text" class="form-control"
                                id="name">
                            <label for="floatingInput" class="form-label">Name</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input v-model="editable.bio" :placeholder="account.bio" required type="text" class="form-control"
                                id="bio">
                            <label for="floatingInput" class="form-label">Bio</label>
                        </div>
                        <button class="btn btn-outline-success mb-4" type="submit">Save Changes</button>
                    </form>
    </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { ref, watchEffect, onUpdated } from "vue"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { accountService } from "../services/AccountService"
export default {
    setup() {
        const editable = ref({})

        watchEffect(() => {
            if (AppState.account.id) {
                editable.value = { ...AppState.profile }
            }
        })
        onUpdated(() => {
            window.scrollTo(0, 0)
        })

        return {
            editable,
            async editAccount() {
                try {
                    const formData = editable.value
                    await accountService.editAccount(formData)
                } catch (error) {
                    Pop.error(error.message)
                    logger.error(error)
                }
            },
            account: computed(() => AppState.account),
            profile: computed(() => AppState.profile)
        }
    }
}
</script>

<style scoped>
img {
    max-width: 100px;
}
</style>
