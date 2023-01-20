import mongoose, {Schema, Document, model} from "mongoose";

interface houses{
    houseName: string;
    houseAddress: string;
    houseDescription: string;
    housePrice: string;
    bedrooms: string;
    bathrooms: string;
    houseImage: string;
    houseRentage: string;
    houseLocation: string;
    houseTypes: string;
}

interface iHouses extends houses, Document{};

const houseSchema = new Schema({
    houseName: {
        type: String,
        required: [true, "Please enter a House Name"],
        trim: true,
    },
    houseAddress: {
        type: String,
        required: [true, "Please enter a House Address"],
        unique: true,
        trim: true,
    },
    houseDescription: {
        type: String,
        required: [true, "Please enter a House Description"],
        trim: true,
    },
    housePrice: {
        type: String,
        required: [true, "Please enter a House Price"],
        trim: true,
    },
    bedrooms: {
        type: String,
        required: [true, "Please enter a House Description"],
        trim: true,
    },
    bathrooms: {
        type: String,
        required: [true, "Please enter a House Description"],
        trim: true,
    },
    houseImage: {
        type: String,
        required: [true, "Please enter a House Image"],
        unique: true,
        trim: true,
    },
    houseRentage: {
        type: String,
        required: [true, "Please enter a House Type e.g Rent or sale"],
        trim: true,
    },
    houseLocation: {
        type: String,
        required: [true, "Please enter the house Location"],
        trim: true,
    },
    houseStyles: {
        type: String,
        required: [true, "Please enter the house Model e.g Duplex, Bungalows"],
        trim: true,
    },
}, {timestamps: true});

const houseModel = model<iHouses>("House collections", houseSchema);

export default houseModel;