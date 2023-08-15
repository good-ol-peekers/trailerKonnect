import { dbContext } from "../db/DbContext"

class TrailersService {
    async getMyActiveTrailerRentals(accountId) {
        const trailers = await dbContext.Trailers.find({accountId})
        return trailers
    }
    async getTrailerById(trailerId) {
        const trailer = await dbContext.Trailers.findById(trailerId)
        // @ts-ignore
        .populate('profile')
        return trailer
    }
    async createTrailer(body) {
        const trailer = await dbContext.Trailers.create(body)
        return trailer
    }
    async getAll() {
        const trailers = await dbContext.Trailers.find()
        return trailers
    }

}
export const trailersService = new TrailersService()