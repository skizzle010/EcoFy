const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function like(req, res) {
  const { posts_Id } = req.params.id;
  try {
    const curr_li = await prisma.post.findUnique({
      where: { postId: posts_Id },
    });
    curr_li.likes++;
    const one_like = await prisma.post.update({
      where: { posts_Id: posts_Id },
      data: {
        likes: curr_li.likes,
        connect:{
            User:{
                id:id
            }
        }
      },
    });
    return res.status(200).json({"message": "liked the post"})
  } 
  catch (error) {
        return res.status(400).json({"message":"post does not exist"})
  }
}

module.exports = like;
