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

async function deleteOne(req,res){
    id = req.id;
    const postId = req.params.id;
    await prisma.post.delete({where:{postId:postId}})
    return res.status(200).json({"message":"the post is deleted"})
}

async function deleteall(req,res){
    id=req.id
    await prisma.post.deleteMany({where:{userId:id}})
    return res.status(200).json({"message":"all your posts are deleted"})
}

async function get_post(req,res){
    const{title} = req.body;
    const data = await prisma.post.findUnique({where:{title:title}})
    return res.status(200).json(data)
}

async function getmyposts(req,res){
    id = req.id;
    const data = await prisma.post.findMany({where:{userId:id}})
    return res.status(200).json(data)
}

async function update_post(req,res){
    id = req.id;
    const updatedPost = await prisma.post.update({where:{userId:id},
    data:{
        title:title,
        body:body,
        filename:filename,
        fileURL:fileURL,
        caption:caption
    }})
    return res.status(200).json(updatedPost)
}

module.exports = {
    create_post,
    deleteOne,
    deleteall,
    get_post,
    getmyposts,
    update_post
}