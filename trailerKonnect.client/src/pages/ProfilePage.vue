<template>
    <div class="component">


    </div>
</template>


<script>
export default {
    setup(){
        async function getProfileById(){
            try {
                await profileServices.getProfileById()
            } catch (error) {
                Pop.error(error, "getProfileById")
            }
        }
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>