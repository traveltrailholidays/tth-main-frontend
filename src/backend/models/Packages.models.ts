import mongoose, {Schema, Document} from "mongoose";


export interface DayActivity {
    activity: string;
}

export interface Package extends Document {
    title: string;
    location: string;
    imageUrls: string;
    description: string;
    // perks: string[];
    regularPrice: number;
    discount:number;
    days: number;
    nights: number;
    daysActivities: DayActivity[];
    // category: string[];
    // itinary: string[];
    createdAt: Date;
}

const DayActivitySchema: Schema = new Schema({
    activity: {
        type: String,
        required: true
    }
});

const PackageSchema: Schema<Package> = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    imageUrls: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // perks: {
    //     type: [String],
    //     required: true
    // },
    regularPrice: {
        type: Number,
        required: true
    },
    discount:{
        type:Number,
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
    daysActivities:{
        type: [DayActivitySchema],
        required: true
    },
    // category: {
    //     type: [String],
    //     required: true
    // },
    // itinary: {
    //     type: [String],
    //     required: true
    // },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const PackageModel = (mongoose.models.Package as mongoose.Model<Package>) || mongoose.model<Package>("Package", PackageSchema)

export default PackageModel;