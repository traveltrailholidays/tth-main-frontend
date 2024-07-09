import mongoose, {Schema, Document} from "mongoose";

export interface Package extends Document {
    title: string;
    location: string;
    photos: string[];
    description: string;
    perks: string[];
    price: number;
    days: number;
    nights: number;
    category: string[];
    itinary: string[];
    createdAt: Date;
}

const PackageSchema: Schema<Package> = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    perks: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    nights: {
        type: Number,
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    itinary: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const PackageModel = (mongoose.models.Package as mongoose.Model<Package>) || mongoose.model<Package>("Package", PackageSchema)

export default PackageModel;