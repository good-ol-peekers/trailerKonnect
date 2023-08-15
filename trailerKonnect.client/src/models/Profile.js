
export class Profile {
    constructor(data){
        this.id = data.id
        this.accountId = data.accountId
        this.picture = data.picture
        this.bio = data.bio
        this.location = data.location
        this.state = data.state
        this.city = data.city
        this.rating = data.rating
        this.name = data.name
    }
}