import PackageModel from "@/backend/models/Packages.models";
import dbConnect from "@/lib/dbConnect";
import { NextResponse,NextRequest } from "next/server";
import { Url } from "url";

dbConnect();

interface Params {
    id: string;
  }

export async function GET(req:NextRequest, context : { params: Params}) {
    const { id } = context.params
    console.log(id);
    try {
        const singlePackage = await PackageModel.findById(id);
        
        if(!singlePackage){
            NextResponse.json({message:"Data not found"}, {status:400});
            return;
        }
        return NextResponse.json(singlePackage);

    } catch (error) {
        return NextResponse.json({message:"Bad Authentication"}, {status:500});
    }

}