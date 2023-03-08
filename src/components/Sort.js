import React from 'react';
import { BsFillGrid3X3GapFill, BsListUl } from 'react-icons/bs';
import { useFilterContext } from '../Context/FilterContext';

const Sort = () => {

  const { filter_products , sorting} = useFilterContext();

  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="sort grid_list_button">
            <button type='button' className='active sort_btn sort_btn'>
              <BsFillGrid3X3GapFill className="active icon" />        
            </button>
          </div>
        </div>
        <div className="col-4">
          <div className="sort available_product text-center">
            <p> {`${filter_products.length}`} Product Available </p>
          </div>
        </div>
        <div className="col-4">
          <div className="sort full_sort_AZ">
            <form action="">
              {/* <label htmlFor="sort"></label> */}
              <select className="form-select" name='sort' id='sort' onClick={sorting}>
                <option value="lowest"> Price (lowest) </option>
                <option value="highest"> Price (highest) </option>
                <option value="a-z"> Price (a-z) </option>z
                <option value="z-a"> Price (z-a) </option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sort