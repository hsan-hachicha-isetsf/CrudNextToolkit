
import React from 'react';

import { store } from "@/store/store";
import Cardprod from './Cardprod';

const ProductsCard = () => {
  const  {produits} =store.getState().product
  
  return (
    
    <React.Fragment>
    {produits &&
    <div
    
    style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
    
    {produits.map((art)=>
     <Cardprod article={art}/>
    )}</div>
    }
    </React.Fragment>
  )
}

export default ProductsCard
