export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.state = data.state
    this.city = data.city
    this.streetAddress = data.streetAddress
    this.zipCode = data.zipCode
  }
}
