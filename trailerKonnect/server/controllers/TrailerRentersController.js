
import { Auth0Provider } from "@bcwdev/auth0provider";
import { trailerRentersService } from "../services/TrailerRentersService";
import BaseController from "../utils/BaseController";

export class TrailerRentersController extends BaseController{
    constructor(){
        super('api/trailerRenters')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .get('', this.getMyTrailerRentals)
        .post('/:trailerId', this.createTrailerRenter)
    }
    async createTrailerRenter(req, res, next) {
        try {
            let body = req.body
            body.renterProfileId = req.userInfo.id
            body.trailerId = req.params.trailerId
            const trailerRental = await trailerRentersService.createTrailerRental(body)
            res.send(trailerRental)
        } catch (error) {
            next(error)
        }
    }
    // **NOTE - Turn this INTO two Different Gets! need to change this to get trailerHostsTrailerRentals, and get RentersTrailerRentals one will use in the empty string above id or come from accountsController to trailerRentalsService and respectively profiles counterpart for renter of host
    async getMyTrailerRentals(req, res, next) {
        try {
            const TrailerRenter = await trailerRentersService.getTrailerRenters()
            res.send(TrailerRenter)
        } catch (error) {
            next(error)
        }
    }
}