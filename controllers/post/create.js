const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
// const cloudinary = require("cloudinary").v2;

async function create_post(req,res){
    id = req.id;
    const{title,filename,fileURL,body,caption} = req.body;
    const newPost = await prisma.post.create({
        data:{
            title:title,
            filename:filename,
            fileURL:fileURL,
            body:body,
            caption:caption
        },
        connect:{
            User:{
                id:id
            }
        }
    })
    return res.status(200).json(newPost)
}

module.exports = create_post;