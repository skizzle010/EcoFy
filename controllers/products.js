const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function post_product(req, res) {
  id = req.id;
  try {
    const { prod_name, price } = req.body;
    const newProd = await prisma.products.create({
      data: {
        prod_name: prod_name,
        price: price,
      },
    });
    return res.status(200).json(newProd);
  } catch (error) {
    return res.status(400).json("user does not exist");
  }
}

async function buy_product(req, res) {
  id = req.id;
  const { wallet, prod_name,quantity } = req.body;
  try {
    const prod = await prisma.products.findUnique({
      where: { prod_name: prod_name },
    });
    newWallet = wallet - prod.price;
    newquant = --quantity;
    const buyprod = await prisma.user.update({
      where: { id: id },
      data: {
        wallet: newWallet,
        quantity:newquant
      },
    });
    const boughtprod = await prisma.products.update({
      where: { prod_name: prod_name },
      data: {
        userId: id,
      },
    });
    return res.status(200).json(buyprod, boughtprod);
  } catch (error) {
    return res.status(400).json("product does not exist");
  }
}

async function delete_all_prods(req, res) {
  id = req.id;
  try {
    await prisma.products.deleteMany({ where: { userId: id } });
    return res.status(200).json("all the products have been deleted");
  } catch (error) {
    return res.status(400).json("user does not have any product");
  }
}

async function update_prod(req, res) {
  id = req.id;
  try {
    const { prod_name, price,quantity } = req.body;
    const newProd = await prisma.products.update({
      where: { prod_name: prod_name },
      data: {
        price: price,
        quantity:quantity
      },
    });
    return res.status(200).json(newProd);
  } catch (error) {
    return res.status(400).json("product name not defined");
  }
}

async function get_prod(req, res) {
  try {
    const { prod_name } = req.body;
    const data = await prisma.products.findUnique({
      where: { prod_name: prod_name },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json("no such product");
  }
}

async function getmyprods(req, res) {
  id = req.id;
  try {
    const myprods = await prisma.products.findMany({ where: { userId: id } });
    return res.status(200).json(myprods);
  } catch (error) {
    return res.status(400).json("user has not bought any product");
  }
}

module.exports={
    post_product,
    buy_product,
    delete_all_prods,
    update_prod,
    get_prod,
    getmyprods
}