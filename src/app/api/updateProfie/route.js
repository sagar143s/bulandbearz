import connect from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDAPIKEY,
    api_secret: process.env.CLOUDAPISECRET,
    secure: true,
});

export const dynamic = 'force-dynamic';
export const POST = async (request) => {
    try {
        await connect();
        const CourseData = await request.formData();
        const id = CourseData.get('id');

        const user = await User.findOne({ _id: id });

        if (!user) {
            return new NextResponse(JSON.stringify("No user"), { status: 404 });
        }

        // Update only the fields that are provided and changed
        const updateFields = {};

        const name = CourseData.get('name');
        if (name && name !== user.name) {
            updateFields.name = name;
        }

        const currentpassword = CourseData.get('currentpassword');
        const newPassword = CourseData.get('newPassword');
        if (currentpassword) {
            const isPasswordCorrect = await bcrypt.compare(currentpassword, user.password);
            if (isPasswordCorrect) {
                if (newPassword) {
                    const hashedPassword = await bcrypt.hash(newPassword, 10);
                    updateFields.password = hashedPassword;
                }

               
            }

        }
        const imageFile = CourseData.get('image');
        if (imageFile) {
            const fileBuffer = await imageFile.arrayBuffer();
            const mime = imageFile.type;
            const encoding = 'base64';
            const base64Data = Buffer.from(fileBuffer).toString('base64');
            const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;

            try {
                const uploadToCloudinary = () => {
                    return new Promise((resolve, reject) => {
                        cloudinary.uploader.upload(fileUri, { invalidate: true })
                            .then((result) => {
                                console.log(result);
                                resolve(result);
                            })
                            .catch((error) => {
                                console.log(error);
                                reject(error);
                            });
                    });
                };

                const result = await uploadToCloudinary();
                updateFields.image = result.secure_url;
            } catch (error) {
                console.error(error);
            }

            const oldImageUrl = user.image; 
            const publicId = oldImageUrl.split('/').slice(-1)[0].replace(/\.[^/.]+$/, '');

            console.log(publicId,'old');
      if (oldImageUrl) {
        try {
         const deleteImg = await cloudinary.uploader.destroy(publicId);
         if(deleteImg){
            console.log(deleteImg,'success');
         }

        } catch (error) {
          console.error("Error deleting image from Cloudinary:", error);
        }
      }
        }

        // Update the user with the changed fields
      const Updated =   await User.findByIdAndUpdate(id, updateFields);
        if(Updated){
     return new NextResponse(JSON.stringify("User has been updated"), { status: 200 });
        }else{
            return new NextResponse(JSON.stringify("Error in Uploading"), { status: 400 });
        }

    } catch (error) {
        console.error(error.message);
        return new NextResponse(JSON.stringify(error.message), { status: 500 });
    }
};
