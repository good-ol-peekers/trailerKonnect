<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3 d-none d-md-block bg-custom-primary">
                <router-link v-if="profile.id == account.id" class="selectable" :to="{ name: 'Account' }">
                    <div class="text-end"><i class="mdi mdi-pencil icon-size"></i></div>
                </router-link>
                <div v-else class="text-end"><i class="mdi mdi-account-circle icon-size"></i></div>
                <div class="text-center">
                    <img class="position-move profile-pic box-shadow" :src="profile.picture" alt="">
                </div>
                <div class="col-9 m-auto bg-danger text-center box-shadow rounded">
                    <h1 class="my-3">{{ profile.name }}</h1>
                </div>
                <div class="bg-custom-warning rounded box-shadow p-2">
                    <div :class="expanded ? 'expanded' : 'expandable'">
                        <p class="p-2 fs-6 mt-2">{{ profile.bio }}</p>
                    </div>
                    <div class="d-flex flex-column align-items-center">
                        <button v-if="expanded" @click="expand" class='btn-cool text-center'>read less</button>
                        <button v-else @click="expand" class='btn-cool text-center'>read more</button>
                    </div>
                </div>
            </div>
            <div class=" col-md-9 scroll-y">
                <div class="row">
                    <div class="col-md-9 m-auto">
                        <div class="row">
                            <div class="col-12 d-md-none bg-custom-primary pb-3">
                                <router-link v-if="profile.id == account.id" class="selectable" :to="{ name: 'Account' }">
                                    <div class="text-end"><i class="mdi mdi-pencil icon-size"></i></div>
                                </router-link>
                                <div v-else class="text-end"><i class="mdi mdi-account-circle icon-size"></i></div>
                                <div class="text-center">
                                    <img class="position-move profile-pic box-shadow" :src="profile.picture" alt="">
                                </div>
                                <div class="col-9 m-auto bg-danger text-center box-shadow rounded">
                                    <h1 class="my-3">{{ profile.name }}</h1>
                                </div>
                                <div class="bg-custom-warning rounded box-shadow p-2">
                                    <div :class="expanded ? 'expanded' : 'expandable'">
                                        <p class="p-2 fs-6 mt-2">{{ profile.bio }}</p>
                                    </div>
                                    <div class="d-flex flex-column align-items-center">
                                        <button v-if="expanded" @click="expand" class='btn-cool text-center'>read
                                            less</button>
                                        <button v-else @click="expand" class='btn-cool text-center'>read more</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 bg-dark bg-gradient my-md-3 rounded box-shadow p-3">
                            <div class="col-12 bg-custom-warning my-md-3 rounded box-shadow p-3">
                                <div class="col-8 m-auto bg-danger text-center rounded box-shadow">
                                    <h4 class="my-3 py-3">{{ profile.name }}'s Read Books</h4>
                                </div>

                            </div>
                            <div class="col-12 bg-custom-danger my-md-3 rounded box-shadow p-3">
                                <div class="col-8 m-auto bg-dark bg-gradient text-light text-center rounded box-shadow">
                                    <h4 class="my-3 py-3">{{ profile.name }}'s Clubs</h4>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
import { AppState } from '../AppState.js';
import { computed, onUpdated, watchEffect } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { useRoute } from 'vue-router';
import { profilesService } from '../services/ProfilesService.js'


export default {
    setup() {
        const route = useRoute();
        async function getProfileById() {
            try {
                const profileId = route.params.profileId;
                logger.log(profileId);
                await profilesService.getProfileById(profileId);
            }
            catch (error) {
                logger.error(error);
                Pop.error(error.message);
            }
        }





        // async function getCommentsByProfileId() {
        //     try {
        //         const profileId = route.params.profileId
        //         await commentsService.getCommentsByProfileId(profileId)
        //     } catch (error) {
        //         logger.error(error)
        //         Pop.error(error.message)
        //     }
        // }

        watchEffect(() => {
            if (route.params.profileId) {
                getProfileById();
                // getCommentsByProfileId();
            }
        });
        onUpdated(() => {
            window.scrollTo(0, 0)
        })
        return {
            profile: computed(() => AppState.profile),

            expanded: computed(() => AppState.expanded),
            account: computed(() => AppState.account),
            comments: computed(() => AppState.comments),

            expand() {
                logger.log(AppState.expanded)
                if (AppState.expanded) {
                    AppState.expanded = false
                } else {
                    AppState.expanded = true
                }
                logger.log(AppState.expanded)
            },
        };
    },
    components: { }
}
</script>


<style lang="scss" scoped>
.profile-pic {
    height: 160px;
    width: 160px;
    border-radius: 50%;
}

.profile-size {
    max-height: 20vh;
}

.icon-size {
    font-size: 30px;
}

.position-move {
    transform: translateY(1vh);
}

.expandable {
    max-height: 25vh;
    overflow: hidden;
}

.expanded {
    max-height: none;
}

.btn-cool {
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    position: relative;
    background-color: transparent;
    transition: .2s cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 0.6;
}

.btn-cool::after {
    content: '';
    border-bottom: 3px double rgb(214, 207, 113);
    width: 0;
    height: 100%;
    position: absolute;
    margin-top: -5px;
    top: 0;
    left: 5px;
    visibility: hidden;
    opacity: 1;
    transition: .2s linear;
}

.btn-cool .icon {
    transform: translateX(0%);
    transition: .2s linear;
    animation: attention 1.2s linear infinite;
}

.btn-cool:hover::after {
    visibility: visible;
    opacity: 0.7;
    width: 90%;
}

.btn-cool:hover {
    letter-spacing: 2px;
    opacity: 1;
}

.btn-cool:hover>.icon {
    transform: translateX(30%);
    animation: none;
}

@keyframes attention {
    0% {
        transform: translateX(0%);
    }

    50% {
        transform: translateX(30%);
    }
}

.scroll-x {
    overflow-x: scroll;
    width: 100%;
    height: 40vh;
}

.scroll-y {
    overflow-y: scroll;
    height: calc(100vh - 122px);
}

@media (max-width: 768px) {
    .scroll-y {
        overflow-y: visible;
        height: auto;
    }
}
</style>
