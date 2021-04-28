import React, { createContext, useContext, useReducer, } from 'react';

import {
  SET_COMMENT_USER,
  SET_COMMENT_TEXT,
  PUSH_COMMENT,
  OPEN_MODAL,
  CLOSE_MODAL,
  REMOVE_COMMENT,
} from './actions/action.js'

import reducer from './reducers/commentsReducer'



const initialState = {
  comments: [
    {
      id: 15615615,
      commentTime: '25.04.2021 20:12',
      commentText: "In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac sagittis ultricies, metus leo pharetra mi, non vehicula felis elit et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh lobortis vel. Aliquam auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna.",
      commentUser: "User Name_1"
    },
    {
      id: 15677,
      commentTime: '26.04.2021 18:12',
      commentText: "In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac sagittis ultricies, metus leo pharetra mi, non vehicula felis elit et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh lobortis vel. Aliquam auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna.",
      commentUser: "User Name_2"
    }
  ],
  commentUser: "",
  commentText: "",
  openModalwindow: false,
  commentToRemove: "",
}


const CommentContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: PUSH_COMMENT,
      payload: {
        commentUser: state.commentUser,
        commentText: state.commentText,
      },
    })

  }

  const updateCommentUser = (e) => {
    dispatch({
      type: SET_COMMENT_USER,
      payload: e.target.value,
    })
  }

  const updateCommentText = (e) => {
    dispatch({
      type: SET_COMMENT_TEXT,
      payload: e.target.value,
    })
  }


  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    })
  }

  const openModal = (id) => {
    dispatch({
      type: OPEN_MODAL,
      payload: id,
    })
  }


  const removeComment = (id) => {
    dispatch({
      type: REMOVE_COMMENT,
      payload: id,
    })
  }

  // console.log("Comment Context render");
  return (
    <CommentContext.Provider value={{
      ...state,
      handleSubmit,
      updateCommentUser,
      updateCommentText,
      closeModal,
      openModal,
      removeComment,
    }}>
      {children}
    </CommentContext.Provider>
  )
}



export const useCommentContext = () => {
  return useContext(CommentContext);
}