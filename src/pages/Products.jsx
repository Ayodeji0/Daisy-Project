/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
// import { customFetch } from "../utils"
import { PaginationContainer,ProductsContainer,Filter } from "../components";
import { customFetch } from "../utils";

const url = '/products'
export const loader = async({request})=>{
  try {
    const response = await customFetch(url)
     const products = response.data.data;
     const meta = response.data.meta;
     return { products, meta }
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error; // Re-throw the error to propagate it further
  }
}

const Products = () => {
    return (
      <>
      <Filter/>,
      <ProductsContainer/>,
      <PaginationContainer/>
      </>
    )
  }
  
  export default Products;