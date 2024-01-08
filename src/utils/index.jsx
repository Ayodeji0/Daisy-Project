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

 export const getAmountOptions = (number)=>{
   return Array.from({length:number},(_, index)=>{
   const amount = index +1
   return (
      <option key={amount} value={amount} >{amount}</option>
   )
   })
 }