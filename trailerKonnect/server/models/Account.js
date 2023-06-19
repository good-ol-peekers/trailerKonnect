import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String, minLength: 1, maxLength: 10000, },
    bio: { type: String, minLength: 3, maxLength: 2000, },
    state: { type: String, minLength: 2, maxLength: 1000, },
    city: { type: String, minLength: 2, maxLength: 100, },
    streetAddress: { type: String, minLength: 2, maxLength: 10000, },
    zipCode: { type: String, minLength: 3, maxLength: 100, }
    // NOTE If you wish to add additional properties do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

