import { NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/models/User";

export const dynamic = 'force-dynamic';
export const GET = async(request,{params})=>{
console.log(params);
        try{
            await connect()
            const user = await User.findOne({_id:params.id});
             console.log(user);
            if(user){
                return new NextResponse(JSON.stringify(user),{
                    status:200
                })
                    }else
                    {
                return new NextResponse(JSON.stringify('No User found'),{status:404})
                    }
           

        }catch(err){
            console.log(err.message);
                return new NextResponse(JSON.stringify(err.message),{status:500})
        }




}