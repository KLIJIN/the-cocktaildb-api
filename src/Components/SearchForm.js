
import React from "react";
import { useListContext } from '../context/list_context'




const SearchForm = () => {
  const { category, setTargetCategory } = useListContext()
  // console.log("SearchForm component render");
  return (
    <form className='section search-form' onSubmit={(e) => e.preventDefault()} >
      <select
        id="search"
        type='text'
        name="text"
        className='form-select'
        //placeholder="category"
        // value={text}
        onChange={setTargetCategory}   // update FilterProvider - filteres.text
      >
        {category?.map((item) => {
          const { strCategory } = item;
          return <option key={strCategory} value={strCategory}>{strCategory}</option>
        })}

      </select>
      <label htmlFor="search" className='form-label'>Select a category</label>
    </form >

  )
}

export default SearchForm