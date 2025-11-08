import { ProductModel } from "./productSchema.js";

export const addProduct = async (req, res) => {
  const { title, price, description, image } = req.body;

  if (!title || !price || !description || !image) {
    res.status(400).json({ message: "fill the blanks" });
  }

  const productExist = await ProductModel.findOne({ title });

  if (productExist) {
    return res.status(403).json({ message: "Product already exist" });
  }

  const newProduct = await ProductModel.create({
    title,
    price,
    description,
    image,
  });

  res.status(200).json({ message: "product added", data: newProduct });
};

export const allProduct = async (req, res) => {
  const Products = await ProductModel.find();

  if (!Products) {
    return res.status(404).json({ message: "Products Not found" });
  }

  res.status(200).json({ message: "all products fetched", data: Products });
};

export const getProductById = async (req, res) => {
  const { productId } = req.params;

  const currentProduct = await ProductModel.findById(productId);

  if (!currentProduct) {
    return res.status(404).json({ message: "Product Not Found" });
  }

  res.status(200).json({ message: "product by id", data: currentProduct });
};

export const editById = async (req, res) => {
    const { productId } = req.params;
    const { title, price, description, image } = req.body;

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      { title, price, description, image },
      { new: true }  // ✅ return updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    res.status(200).json({ message: "Product Updated", data: updatedProduct });

  
};
