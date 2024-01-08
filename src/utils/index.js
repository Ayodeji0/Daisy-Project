/* eslint-disable no-unused-vars */
 import  axios  from "axios";

 const productionUrl = "https://strapi-store-server.onrender.com/api"

 export const customFetch = axios.create({
    baseURL:productionUrl,
 })
// how to calculate currency
 export const formatPrice = (price)=>{
   const nairaAmount = new Intl.NumberFormat('en-NG',{
      style:'currency',
      currency:'NGN'
   }).format((price/1).toFixed(2))
   return nairaAmount;
 }