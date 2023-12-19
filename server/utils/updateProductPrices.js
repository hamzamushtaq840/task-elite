import { prisma } from "../index.js";

const updateProductPrices = async () => {
  try {
    const products = await prisma.products.findMany();
    await Promise.all(
      products.map(async (product) => {
        const updatedPrice = Math.floor(Math.random() * 1000) + 1;
        await prisma.products.update({
          where: { id: product.id },
          data: { price: updatedPrice },
        });
      })
    );
  } catch (error) {
    console.error('Error updating prices:', error);
  }
}

export default updateProductPrices