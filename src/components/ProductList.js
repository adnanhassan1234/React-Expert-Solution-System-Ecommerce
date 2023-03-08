import React from 'react';
import Product from './Product';
import { useFilterContext } from '../Context/FilterContext';


const ProductList = () => {
    const { filter_products } = useFilterContext();
    return (
        <>

            {
                filter_products.map((currElm, ind) => {
                    return <Product key={ind} {...currElm} />
                })
            }

        </>
    )
}

export default ProductList