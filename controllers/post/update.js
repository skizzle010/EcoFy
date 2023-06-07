const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

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

module.exports={
    update_post
}