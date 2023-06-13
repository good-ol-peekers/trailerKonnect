import { AppState } from "../AppState"
import { TrailerRenter } from "../models/TrailerRenter"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TrailerRentalsService{
    async purchaseTrailerRental(body, trailerId){
        const res = await api.post('api/trailerRenters/' + trailerId, body)
        logger.log(res.data, 'PurchasedTrailerRental Object RESPONSE DATA')
        AppState.purchasedRentalByRenter = new TrailerRenter(res.data)
        
    }

}
export const trailerRentalsService = new TrailerRentalsService()