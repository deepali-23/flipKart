import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";
const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("Data exporting successfully");
  } catch (error) {
    console.log("Error by Inserting default Data", error.message);
  }
};
export default DefaultData;
