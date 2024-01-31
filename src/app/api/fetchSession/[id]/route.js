import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Privatesession from "@/models/Privatesession";
export const dynamic = 'force-dynamic';
export const GET = async(request,{params})=>{
try {
    await connect()

    const course = await Privatesession.findOne({_id:params.id})
    console.log(course);
    if(course){
        return new NextResponse(JSON.stringify(course),{status:200})
    }else{
        return new NextResponse(JSON.stringify('Course Not found'),{status:404})
    }

    

} catch (error) {

    return new NextResponse(JSON.stringify(error.message),{status:500})

}
}