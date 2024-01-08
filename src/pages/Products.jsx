/* eslint-disable no-unused-vars */
// import { customFetch } from "../utils"
import { PaginationContainer,ProductsContainer,Filter } from "../components";

export const loader = async({request})=>{
  return null;
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