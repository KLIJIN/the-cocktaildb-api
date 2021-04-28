import React from 'react';
//components
import SearchForm from "../Components/SearchForm"
import CoctailPreview from "../Components/CoctailPreview"

import { useListContext } from '../context/list_context'



const HomePage = () => {
  const { listCoctails } = useListContext()
  // console.log("Home Page render");
  return (
    <div>
      <SearchForm />
      {listCoctails.map(item => <CoctailPreview key={item.idDrink}  {...item} />
      )}
    </div>
  )
}

export default HomePage