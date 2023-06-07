const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

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

module.exports={
    get_post,
    getmyposts
}