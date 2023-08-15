import { Profile } from "./Profile"

export class Trailer{
    constructor(data){
        this.id = data.id
        this.archived = data.archived
        this.delivery = data.delivery
        this.pickup = data.pickup
        this.model = data.model
        this.year = data.year
        this.make = data.make
        this.capacity = data.capacity
        this.lengthSize = data.lengthSize
        this.width = data.width
        this.description = data.description
        this.details = data.details
        this.rules = data.rules
        this.dailyRate = data.dailyRate
        this.weeklyRate = data.weeklyRate
        this.addons = data.addons
        this.deposit = data.deposit
        this.type = data.type
        this.img1 = data.img1
        this.img2 = data.img2
        this.img3 = data.img3
        this.img4 = data.img4
        this.img5 = data.img5
        this.img6 = data.img6
        this.img6 = data.img6
        this.img7 = data.img7
        this.trailerOwner = data.profile
    }
}
