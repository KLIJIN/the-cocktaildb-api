import {
  SET_LOADING,
  SET_CATEGORY,
  TARGET_CATEGORY,
  SET_LIST_COCTAILS,
  SET_SINGLE_COCTAIL,
  CLEAR_SINGLE_COCTAIL,


} from '../actions/action.js'

const reducer = (state, action) => {
  // console.log("List Reducer:", state, action)
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_CATEGORY:
      return {
        ...state,
        isLoading: false,
        category: action.payload.category,

      }
    case TARGET_CATEGORY:
      return {
        ...state,
        targetCategory: action.payload.targetCategory,
      }

    case SET_LIST_COCTAILS:
      return {
        ...state,
        listCoctails: action.payload.listCoctails,
      }

    case SET_SINGLE_COCTAIL:
      return {
        ...state,
        singleCoctail: action.payload.singleCoctail,
      }
    case CLEAR_SINGLE_COCTAIL:
      return {
        ...state,
        singleCoctail: {},
      }

    default:
      return { ...state }
  }
}
export default reducer
