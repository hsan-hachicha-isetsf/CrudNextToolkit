import Listproducts from '@/components/admin/Listproducts';

import {fetchArticles} from "@/services/ArticleService"
const getProducts=async()=>{
const {data}=await fetchArticles()
return data;
}
const ProductPage = async() =>{
    const produits=await getProducts()
    
  return (
    <div>
      <Listproducts produits={produits}/>
    </div>
  )
}

export default ProductPage
