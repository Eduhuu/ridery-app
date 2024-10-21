import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const vehicleSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        enum: ['disponible', 'mantenimiento'],
        required: true
    }
}, { timestamps: true });
vehicleSchema.plugin(mongoosePaginate)
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle