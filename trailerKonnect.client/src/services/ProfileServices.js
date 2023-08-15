import { AppState } from "../AppState"
import { Profile } from "../models/Profile"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProfileServices {
async getProfileById(profileId){
    try {
        const res = await api.get('api/profile' + profileId)
        AppState.profile = new Profile(res.data)
        logger.log('getting profile', res.data)
    } catch (error) {
        
    }
}
async editProfile(formData) {
    logger.log(formData)
    const res = await api.put('profile', formData)
    AppState.profile = new Profile(res.data)
    logger.log(res.data)
}
}
export const profileServices = new ProfileServices()