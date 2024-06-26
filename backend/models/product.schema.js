import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        images: [
            {
                type: String,
                required: true,
            },
        ],
        stock: {
            type: Number,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            default: 0,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    },
)

const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase())
}

productSchema.pre('save', function (next) {
    if (this.isModified('productName') || this.isNew) {
        this.productName = capitalizeWords(this.productName)
    }
    next()
})

const Product = mongoose.model('Product', productSchema)

export default Product
