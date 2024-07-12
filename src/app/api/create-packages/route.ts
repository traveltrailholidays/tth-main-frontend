import PackageModel from "@/backend/models/Packages.models";
import dbConnect from "@/lib/dbConnect";
import { NextRequest,NextResponse } from "next/server";


dbConnect()

export async function POST(req:NextRequest) {

    try {
        // const body = await req.json
        const {title,description,days,nights,imageUrls,daysActivities,regularPrice,discount,location} = await req.json();
        const newPackage = await PackageModel.create({title,description,days,nights,imageUrls,daysActivities,regularPrice,discount,location });

        await newPackage.save();

        return NextResponse.json({message:"package created successfully"}, {status:201})
        
    } catch (error: any) {
        console.error("Error creating package:", error);
        return NextResponse.json({ error: 'Error creating package', details: error.message }, { status: 500 });
    }
    
}