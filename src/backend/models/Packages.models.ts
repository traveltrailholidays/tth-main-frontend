import mongoose, { Schema, Document } from 'mongoose';

export interface PackageData extends Document {
    title: string;
    address: string;
    photos: [string];
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const PackageSchema: Schema<PackageData> = new Schema({
    title: {
        type: String,
        required: [true, "Name is required."],
        minlength: [2, "Name must be larger than 2 characters."],
        maxlength: [50, "Name must be lesser than 50 characters."],
    },
    address: {
        type: String,
    },
    photos: {
        type: [String],
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const PackageModel = mongoose.models.Package || mongoose.model<PackageData>('Package', PackageSchema);

export default PackageModel;
