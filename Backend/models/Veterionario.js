import mongoose from "mongoose";

const veterinarioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true  // elimina espacios en blanco al inicio o al final
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        default: false,
        trim: true
    },
    web: {
        type: String,
        default: false
    },
    token: {
        type: String,
    },
    confirmed: {
        type: Boolean,
        default: false
    }
});

const Veterinario = mongoose.model("Veterinario", veterinarioSchema);
export default Veterinario;