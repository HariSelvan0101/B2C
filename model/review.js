const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const reviewSchema = new mongoose.Schema({

    productId:{
        type:ObjectId,
        require:true
    },
    reviews: [
        {
            userId:{
                type:ObjectId,
                require:true
             },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            createdAt:{
                type: Date,
                default: Date.now()
            }
        }
    ],
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
