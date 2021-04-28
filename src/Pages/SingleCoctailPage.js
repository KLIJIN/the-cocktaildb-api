
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useListContext } from '../context/list_context';
import { useCommentContext } from '../context/comments_context';
//components
import Comment from "../Components/Comment"


const SingleCoctailPage = () => {
  const { id } = useParams();

  const { getSingleCoctail, singleCoctail, cleartSingleCoctail } = useListContext();
  const { handleSubmit, comments, commentUser, commentText, updateCommentUser, updateCommentText,
    commentUserPh, commentTextPh } = useCommentContext();

  const { strDrinkThumb, strDrink, strAlcoholic, strGlass,
    strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7,
    strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15,
    strInstructions,
  } = singleCoctail

  useEffect(() => {
    getSingleCoctail(id);
    return function cleanup() {
      console.log("cleanup")
      cleartSingleCoctail();
    };
  }, []);

  // console.log("SingleCoctailPage render");
  return (
    <div>
      <section className="coctail section" >
        <div className="coctail__description" >
          <div className="coctail__image" >   <img style={{ width: "100%", height: "100%" }} src={strDrinkThumb} alt="coctail" />  </div>
          <div className="coctail__content" >
            <div className="coctail__title" >
              <div className="coctail__title-ttle" > {strDrink} </div>
              <span className="coctail__title-alcohol" > {strAlcoholic} </span>
              <span className="coctail__title-glass" > {strGlass} </span>
            </div>
            <div className="coctail__ingredients" >
              Ingredients
              <ul>
                {strIngredient1 && <li> {strIngredient1}</li>}
                {strIngredient2 && <li> {strIngredient2}</li>}
                {strIngredient3 && <li> {strIngredient3}</li>}
                {strIngredient4 && <li> {strIngredient4}</li>}
                {strIngredient5 && <li> {strIngredient5}</li>}

                {strIngredient6 && <li> {strIngredient6}</li>}
                {strIngredient7 && <li> {strIngredient7}</li>}
                {strIngredient8 && <li> {strIngredient8}</li>}
                {strIngredient9 && <li> {strIngredient9}</li>}
                {strIngredient10 && <li> {strIngredient10}</li>}

                {strIngredient11 && <li> {strIngredient11}</li>}
                {strIngredient12 && <li> {strIngredient12}</li>}
                {strIngredient13 && <li> {strIngredient13}</li>}
                {strIngredient14 && <li> {strIngredient14}</li>}
                {strIngredient15 && <li> {strIngredient15}</li>}
              </ul>
            </div>
          </div>
        </div>
        <div className="coctail__instruction" >
          <div className="coctail__instruction-title" > How to make it </div>
          {strInstructions}
        </div>

      </section>

      <section className="comments section" >

        {
          comments?.length > 0 &&
          <div className="comments_container" >
            <div className="comments__title">Comments:</div>
            {comments.map((item) => <Comment key={item.id} {...item} id={item.id} />)}
          </div>
        }

        <label className="comments__form_label" htmlFor="comments__form">Leave a comment </label>
        <form className="comments__form" id="comments__form">
          <input type="text" name="text" className="comments__form_user" placeholder={`${commentUserPh?.length > 0 ? commentUserPh : "User"}`} value={commentUser} onChange={updateCommentUser} />
          <textarea type="text" name="text" className="comments__form_text" placeholder={`${commentTextPh?.length > 0 ? commentTextPh : "Text"}`} value={commentText} onChange={updateCommentText} />
          <button type='submit' onClick={handleSubmit} className='submit-btn'> Leave a comment </button>
        </form>

      </section>

    </div>
  )
}

export default SingleCoctailPage