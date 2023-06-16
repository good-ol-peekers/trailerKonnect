import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class TowingCapacityServices {
    async getVehicleTowingCapacity(formData){
        logger.log(formData)

    }
}
export const towingCapacityServices = new TowingCapacityServices()