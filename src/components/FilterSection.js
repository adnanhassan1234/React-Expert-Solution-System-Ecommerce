import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
// import FormatPrice from '../Helper/FormatPrice';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { useFilterContext } from '../Context/FilterContext';


const FilterSection = () => {

  /* Destructuring the `filters` object from the `useFilterContext` hook. */
  const { filters: { text, name, color, maxPrice, minPrice, price }, updateFilterValue, all_products, clearFilters } = useFilterContext();
  console.log("🚀 ~ file: FilterSection.js:13 ~ FilterSection ~ color:", color)


  // TO GET THE UNIQUE DATA FOR EACH FIELD OF names
  //  * It returns an array of unique values from the data array.

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });


    /* Checking if the attribute is colors, if it is, it is returning a new array with the unique values. */
    if (attr === "colour") {
      newVal = newVal.flat();
      // return  (newVal = ["All" , ...new Set([].concat(...newVal))]);
    }

    /* Adding the string "All" to the beginning of the array. */
    return (newVal = ["all", ...new Set(newVal)]); // Removing the duplicate values from the 

  };

  /* Getting the unique data for each field of category. */
  const categoryData = getUniqueData(all_products, "name")
  console.log("🚀 ~ file: FilterSection.js:38 ~ FilterSection ~ categoryData:", categoryData)
  const companyData = getUniqueData(all_products, "company")
  const colorsData = getUniqueData(all_products, "colour")
  console.log("🚀 ~ file: FilterSection.js ~ line 28 ~ FilterSection ~ colorsData", colorsData);


  return (
    <>
      <div className="filter_search my-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="text" className='form-control'
            value={text}
            onChange={updateFilterValue}
            placeholder="SEARCH"
          />
        </form>
      </div>

      {/* filter-color */}
      <div className="filter_color my-4">
        <h5 className='my-3'>Colors</h5>
        <div className="color_sort my-3">
          {
            colorsData.map((currColors, ind) => {
              if (currColors === "all") {
                return (
                  <button key={ind} type="button"
                    name="color"
                    className=" btn btn-primary my-1 mx-1 btnStyles"
                    value={currColors}
                    onClick={updateFilterValue} >
                    <span className="all">All</span>
                  </button>
                )
              }
              return (
                <button key={ind} type="button"
                  name="color"
                  value={currColors}
                  style={{ backgroundColor: currColors }}
                  className={color === currColors ? "btn btn-info my-1 mx-1 active" : "btn btn-info my-1 mx-1 btnStyle"}
                  onClick={updateFilterValue} >
                  {color === currColors ? <FaCheck className='icon_check' /> : null}
                </button>
              )
            })
          }
        </div>
      </div>
      {/* filter-price */}
      <div className="filter_price my-4">
        <h5 className='my-3'>Price</h5>
        <div className="company_sort my-3">
          <p className='mb-0'>
            {/* <FormatPrice price={price} /> */}
            {price} 
          </p>
          {/* A range slider.  */}
          <input
            type="range"
            name="price"
            max={maxPrice}
            min={minPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </div>
      </div>
      {/* filter-clear */}
      <div className="filter_clear my-4">
        <Button type="button" variant="contained" color="secondary" onClick={clearFilters}>
           Clear Filters
        </Button>
      </div>
    </> 
  )
}

export default FilterSection;