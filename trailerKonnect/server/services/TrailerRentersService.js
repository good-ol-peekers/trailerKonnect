import { dbContext } from "../db/DbContext";

class TrailerRentersService{
    async createTrailerRental(body) {
        const trailerRenter = await dbContext.TrailerRenters.create(body)
        return trailerRenter
    }
    getTrailerRenters() {
        throw new Error("Method not implemented.");
    }



}
export const trailerRentersService = new TrailerRentersService()