import PackageModel from "@/backend/models/Packages.models";
import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

dbConnect();


export async function GET ( req:NextRequest){
    try {
        const allPackages = await PackageModel.find()
        return NextResponse.json(allPackages, { status: 200 });
    } catch (error:any) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: 'Error fetching users', details: error.message }, { status: 500 });
    }
}