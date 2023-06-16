import { dbContext } from "../db/DbContext"

class TrailersService {
    async getTrailerById(trailerId) {
        const trailer = await dbContext.Trailers.findById(trailerId)
        // @ts-ignore
        await trailer.populate('trailerOwner')
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