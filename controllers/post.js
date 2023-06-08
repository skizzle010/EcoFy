const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
// const cloudinary = require("cloudinary").v2;

async function create_post(req, res) {
  id = req.id;
  const { title, filename, fileURL, body, caption } = req.body;
  try {
    const newPost = await prisma.post.create({
      data: {
        title: title,
        filename: filename,
        fileURL: fileURL,
        body: body,
        caption: caption,
      },
      connect: {
        User: {
          id: id,
        },
      },
    });
    return res.status(200).json(newPost);
  } catch (error) {
    return res.status(300).json("the title already exists");
  }
}

async function deleteOne(req, res) {
  id = req.id;
  try {
    const postId = req.params.id;
    await prisma.post.delete({ where: { postId: postId } });
    return res.status(200).json({ message: "the post is deleted" });
  } catch (error) {
    return res.status(400).json("post does not exist");
  }
}

async function deleteall(req, res) {
  id = req.id;
  try {
    await prisma.post.deleteMany({ where: { userId: id } });
    return res.status(200).json({ message: "all your posts are deleted" });
  } catch (error) {
    return res.status(400).json("user does not exist");
  }
}

async function get_post(req, res) {
  try {
    const { title } = req.body;
    const data = await prisma.post.findUnique({ where: { title: title } });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json("no post exists under that title");
  }
}

async function getmyposts(req, res) {
  id = req.id;
  try {
    const data = await prisma.post.findMany({ where: { userId: id } });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: "no such user exists" });
  }
}

async function update_post(req, res) {
  id = req.id;
  try {
    const updatedPost = await prisma.post.update({
      where: { userId: id },
      data: {
        title: title,
        body: body,
        filename: filename,
        fileURL: fileURL,
        caption: caption,
      },
    });
    return res.status(200).json(updatedPost);
  } catch (error) {
    return res.status(400).json({ message: "user does not have any posts" });
  }
}

module.exports = {
  create_post,
  deleteOne,
  deleteall,
  get_post,
  getmyposts,
  update_post,
};
