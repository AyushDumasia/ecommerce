import mongoose from 'mongoose'
const Schema = mongoose.Schema

const merchantSchema = new Schema(
    {
        merchant: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        document: {
            type: String,
            required: true,
        },
        licenseId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
)

const Merchant = mongoose.model('Merchant', merchantSchema)

export default Merchant
