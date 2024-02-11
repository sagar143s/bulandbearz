import { NextResponse } from "next/server";
import connect from "@/utils/db";
import News from "@/models/News";



export const dynamic = 'force-dynamic';
export const GET = async(request,{params})=>{

        try{
            await connect()
            const user = await News.findOne({_id:params.id});
            
            if(user){
                return new NextResponse(JSON.stringify(user),{
                    status:200
                })
                    }else
                    {
                return new NextResponse(JSON.stringify('No News found'),{status:404})
                    }
           

        }catch(err){
            console.log(err.message);
                return new NextResponse(JSON.stringify(err.message),{status:500})
        }




}