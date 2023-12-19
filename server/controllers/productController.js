import { prisma } from "../index.js";

export const products = async (req, res) => {
  try {
    const allProducts = await prisma.products.findMany();
    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Unable to fetch products' });
  }
};

export const productStarred = async (req, res) => {
  const { productId, stars, name, email } = req.body;

  try {
    await prisma.productStars.create({
      data: {
        products: {
          connect: {
            id: productId,
          },
        },
        email: email,
        fullName: name,
        stars: stars,
      },
    });

    res.status(200).json({ success: true, message: 'Product starred successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Failed to star the product', error: error.message });
  }
};

export const starredProducts = async (req, res) => {
  try {
    const starredProducts = await prisma.productStars.findMany({
      include: {
        products: true,
      },
    });
    res.status(200).json(starredProducts);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Unable to fetch products' });
  }
};