
import { useParams, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Sort from './components/Sort';
import FilterSection from './components/FilterSection';



const Home = () => {


    return (
        <>
            <div className="grid_all_products my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <div className="full">
                                {/* FilterSection */}
                                <FilterSection />
                            </div>
                        </div>
                        <div className="col-md-9 col-12">
                            <div className="full my-2">
                                <section className="product_view_sort">
                                    <div className="sort_filter">
                                        {/* Sort */}
                                        <Sort />
                                    </div>
                                </section>
                            </div>
                            <div className="row mt-5">
                                <ProductList />                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
