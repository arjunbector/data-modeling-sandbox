import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productID: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Product"
    },
    quantity:{
        type: Number,
        required: true
    }
})


const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "User"
    },
    orderItems: {
        type: [orderItems]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }

}, {timestamps: true});
export const Order = mongoose.model("Order", orderSchema);
