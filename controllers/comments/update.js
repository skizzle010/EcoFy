const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function update_comment(req,res){
    id = req.id;
    const{comment} = req.body;
    const newComment = await prisma.comment.update({where:{userId:id},
    data:{
        comment:comment
    }})
    return res.status(200).json(newComment)
}
