const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function get_comment(req,res){
    const commentId = req.params.id;
    const data = await prisma.comment.findUnique({where:{commentId:commentId}})
    return res.status(200).json(data)
}

async function get_all_comments(req,res){
    id = req.id;
    const data = await prisma.comment.findMany({where:{userId:id}})
    return res.status(200).json(data)
}

module.exports={
    get_comment,
    get_all_comments
}