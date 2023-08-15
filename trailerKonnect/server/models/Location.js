import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const LocationSchema = new Schema(
    {
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
        // NOTE come back to this and find out if it needs to be an ObjectID
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true },
        county: { type: String, required: true },
        createdAt: { type: Date },
        updatedAt: { type: Date },

    },
    { timestamps: true, toJSON: { virtuals: true } }
)
LocationSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'
})