import { AppState } from "../AppState"
import { Profile } from "../models/Profile"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class ProfileServices {
async getProfile(){
    try {
        const res = await api.get('/profile')
        AppState.profile = new Profile(res.data)
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