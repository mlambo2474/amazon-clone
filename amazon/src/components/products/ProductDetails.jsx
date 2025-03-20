import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();
  return (
    <div>
        <h1>Product Details</h1>
        <span>params: {params.id}</span>
    </div>

  )
}

export default ProductDetails;