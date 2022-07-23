import mongoose  from 'mongoose';

// Creating product schema
const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    url: String,
    title:{
        shortTitle: String,
        longTitle: String,
    },
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String,
});

// storing product in database
const Product = mongoose.model('product', productSchema);
export default Product;