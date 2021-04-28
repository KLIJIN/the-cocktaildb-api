
import React from 'react';
import { Link } from 'react-router-dom'


const CoctailPreview = ({ idDrink, strDrinkThumb, strGlass, strAlcoholic, strDrink }) => {
  // console.log(" Coctail Preview  render");
  return (
    < div className="Preview section" >
      <Link to={`/coctail/${idDrink}`} >
        <div className="Preview__image" >  <img style={{ width: "100%", height: "100%" }} src={strDrinkThumb} alt="coctail" /> </div>
      </Link>

      <div className="Preview__description" >
        <Link to={`/coctail/${idDrink}`} > <div className="Preview__title" >  {strDrink}  </div>  </Link>
        <div className="Preview__content" >
          <div className="Preview__alcohol" > {strAlcoholic} </div>
          <div className="Preview__glass" > {strGlass} </div>
        </div>
      </div>
    </ div>
  )
}

export default CoctailPreview





