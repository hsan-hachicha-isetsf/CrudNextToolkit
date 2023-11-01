import React from "react";
import ProductsCard from '@/components/client/ProductsCard';
import { fetchProducts } from '@/slice/productSlice'
import { store } from "@/store/store";


const ProductPageClient =async() =>{
  await store.dispatch(fetchProducts());
  
    
  return (
    <div>
      <ProductsCard/>
    </div>
  )
}
export default ProductPageClient
