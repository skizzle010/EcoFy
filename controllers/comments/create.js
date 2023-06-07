const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function create_comment(req, res) {
    id = req.id;
  const { comment } = req.body;
  try {
    const newComment = await prisma.comment.create({
      data: {
        comment: comment,
        connect:{
            User:{
                id:id
            }
        }
      },
    });
    return res.status(200).json({"message":"commented"},newComment)
  } 
  catch (error) {
    return res.status.json({"message":"post does not exist"})
  }
}

module.exports = create_comment;
