import { NextResponse } from "next/server";
import { cookies } from 'next/headers'


export const GET = async(request)=>{

try {
    cookies().delete('userToken')


  return new NextResponse('Cookies deleted Logout Successfull' , {status:200})
    
} catch (error) {
    console.log(error.message);
    return new NextResponse('Error' , {status:500})
}



}