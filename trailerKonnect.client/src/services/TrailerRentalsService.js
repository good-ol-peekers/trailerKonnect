import { AppState } from "../AppState.js"
import { TrailerRenter } from "../models/TrailerRenter.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class TrailerRentalsService {
    async purchaseTrailerRental(body, trailerId){
        const res = await api.post('api/trailerRenters/' + trailerId, body)
        logger.log(res.data, 'PurchasedTrailerRental Object RESPONSE DATA')
        AppState.purchasedRentalByRenter = new TrailerRenter(res.data)
        
    }

}
export const trailerRentalsService = new TrailerRentalsService()