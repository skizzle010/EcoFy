const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function create_comment(req, res) {
  id = req.id;
  const { comment } = req.body;
  try {
    const newComment = await prisma.comment.create({
      data: {
        comment: comment,
        connect: {
          User: {
            id: id,
          },
        },
      },
    });
    return res.status(200).json({ message: "commented" }, newComment);
  } catch (error) {
    return res.status.json({ message: "post does not exist" });
  }
}

async function comment_delete_one(req, res) {
  id = req.id;
  try {
    const c_id = req.params.c_id;
    await prisma.comment.delete({ where: { commentId: c_id } });
    return res.status(200).json({ message: "comment deleted" });
  } catch (error) {
    return res.status(500).json("comment does not exist");
  }
}

async function comment_delete_many(req, res) {
  id = req.id;
  try {
    await prisma.comment.deleteMany({ where: { userId: id } });
    return res.status(200).json({ message: "all comment deleted" });
  } catch (error) {
    return res.status(400).json("user does not exist");
  }
}

async function get_comment(req, res) {
  try {
    const commentId = req.params.id;
    const data = await prisma.comment.findUnique({
      where: { commentId: commentId },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(401).json("comment does not exist");
  }
}

async function get_all_comments(req, res) {
  id = req.id;
  try {
    const data = await prisma.comment.findMany({ where: { userId: id } });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json("user does not exist");
  }
}

async function update_comment(req, res) {
  id = req.id;
  try {
    const { comment } = req.body;
    const newComment = await prisma.comment.update({
      where: { userId: id },
      data: {
        comment: comment,
      },
    });
    return res.status(200).json(newComment);
  } catch (error) {
    return res.status("comment does not exist");
  }
}

module.exports = {
  create_comment,
  comment_delete_one,
  comment_delete_many,
  get_comment,
  get_all_comments,
  update_comment,
};
