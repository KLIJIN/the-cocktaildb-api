import React, {
  createContext, useEffect, useContext,
  useReducer,
  //useState
} from 'react';

import {
  SET_LOADING,
  SET_CATEGORY,
  TARGET_CATEGORY,
  SET_LIST_COCTAILS,
  SET_SINGLE_COCTAIL,
  CLEAR_SINGLE_COCTAIL,

} from './actions/action.js'

import reducer from './reducers/listReducer'

const initialState = {
  isLoading: true,
  category: [],
  listCoctails: [],
  targetCategory: '',
  singleCoctail: {},
}


const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const [category, setCategory] = useState([]);
  // const [target, setTarget] = useState('');
  // const [list, setList] = useState([]);


  const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
  const url2 = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=`;

  const fetchCategory = async (url) => {
    dispatch({ type: SET_LOADING })
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log("AppProvider_fetchStories come data from API-->", data);
      // setCategory(data.drinks);
      dispatch({
        type: SET_CATEGORY,
        payload: { category: data.drinks },
      })
    } catch (error) {
      console.log(error);
    }
  };

  const setTargetCategory = (e) => {
    // console.log("setTargetCategory", e)
    dispatch({
      type: TARGET_CATEGORY,
      payload: { targetCategory: e.target.value },
    })
  }
  const fetchCoctails = async (url) => {
    try {
      const response = await fetch(`${url}${state.targetCategory}`);
      const data = await response.json();
      // console.log("AppProvider_fetchCoctails come data from API-->", data);
      const fullCoctail = await Promise.all(data.drinks.map(item => fetchSingleCoctail(item.idDrink)))

      dispatch({
        type: SET_LIST_COCTAILS,
        payload: { listCoctails: fullCoctail },
      })
    } catch (error) {
      console.log(error);
    }
  };


  const fetchSingleCoctail = async (id) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    // console.log(url)
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log("fetchSingleCoctail", data.drinks[0]);
      return data.drinks[0]
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchCategory(url);
  }, []);

  useEffect(() => {
    fetchCoctails(url2);
  }, [state.targetCategory]);


  const getSingleCoctail = async (id) => {
    const coctail = await fetchSingleCoctail(id)
    // console.log("getSingleCoctail:", coctail)
    dispatch({
      type: SET_SINGLE_COCTAIL,
      payload: { singleCoctail: coctail },
    })
  }

  const cleartSingleCoctail = () => {
    dispatch({
      type: CLEAR_SINGLE_COCTAIL,
    })
  }

  // console.log("List Context render");
  return (
    <ListContext.Provider value={{
      ...state,
      setTargetCategory,
      fetchSingleCoctail,
      getSingleCoctail,
      cleartSingleCoctail,

    }}>
      {children}
    </ListContext.Provider>
  )
}



export const useListContext = () => {
  return useContext(ListContext);
}