const{PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

async function comment_delete_one(req,res){
    id = req.id;
    const c_id = req.params.c_id;
    await prisma.comment.delete({where:{commentId:c_id}})
    return res.status(200).json({"message":"comment deleted"})
}

async function comment_delete_many(req,res){
    id = req.id;
    await prisma.comment.deleteMany({where:{userId:id}})
    return res.status(200).json({"message":"all comment deleted"})
}

module.exports={
    comment_delete_many,
    comment_delete_one
}
