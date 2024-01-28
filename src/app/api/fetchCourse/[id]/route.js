import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Courses from "@/models/Courses";

export const dynamic = 'force-dynamic';
export const GET = async (request,{params}) => {

try{
    
  await connect()
  const course = await Courses.findOne({_id:params.id})

  if(course){
    return new NextResponse(JSON.stringify(course), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
  }else{
    return new NextResponse("Course Not found",{status:404})
  }




    return new NextResponse("Kitti Mone",{status:200})
}catch(err){

    console.log(err.message);
    return new NextResponse("Oombi Mone",{status:500})
}

}