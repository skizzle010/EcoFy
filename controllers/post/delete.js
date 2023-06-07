const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

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

module.exports={
    deleteOne,
    deleteall
}