import {
  SET_COMMENT_USER,
  SET_COMMENT_TEXT,
  PUSH_COMMENT,
  CLOSE_MODAL,
  OPEN_MODAL,
  REMOVE_COMMENT

} from '../actions/action.js'


const reducer = (state, action) => {
  // console.log("Comment Reducer", state, action)
  switch (action.type) {
    case SET_COMMENT_USER:
      return {
        ...state,
        commentUser: action.payload
      }

    case SET_COMMENT_TEXT:
      return {
        ...state,
        commentText: action.payload
      }


    case PUSH_COMMENT:
      if (action.payload.commentUser.split(' ').join('')?.length < 1) {
        return {
          ...state,
          commentUserPh: "Поле User не должно быть пустым",
          commentUser: "",
          commentText: action.payload.commentText,
        }
      }

      if (action.payload.commentText.split(' ').join('')?.length < 1) {
        return {
          ...state,
          commentUser: action.payload.commentUser,
          commentTextPh: "Поле Text не должно быть пустым",
          commentText: "",
        }
      }
      const date = new Date();
      let day = date.getDate();
      day = day < 10 ? (day = `0${day}`) : day;
      let month = date.getMonth() + 1;
      month = month < 10 ? (month = `0${month}`) : month;
      let hours = date.getHours();
      hours = hours < 10 ? (hours = `0${hours}`) : hours;
      let minutes = date.getMinutes();
      minutes = minutes < 10 ? (minutes = `0${minutes}`) : minutes;
      let seconds = date.getSeconds();
      seconds = seconds < 10 ? (seconds = `0${seconds}`) : seconds;
      let miliSeconds = date.getMilliseconds();
      miliSeconds = miliSeconds < 10 ? (miliSeconds = `0${miliSeconds}`) : miliSeconds;
      // console.log(`${miliSeconds}${seconds}`);
      const newItem = {
        commentUser: action.payload.commentUser,
        commentText: action.payload.commentText,
        commentTime: `${day}.${month}.${date.getFullYear()} ${hours}:${minutes}`,
        id: `${miliSeconds}${seconds}`,
      }
      return {
        ...state,
        comments: [...state.comments, newItem],
        commentUser: "",
        commentText: "",
        commentUserPh: "",
        commentTextPh: "",
      }
    case CLOSE_MODAL:
      return {
        ...state,
        openModalwindow: false,
        commentToRemove: "",
      }

    case OPEN_MODAL:
      // console.log("OPEN_MODAL", action.payload)
      return {
        ...state,
        openModalwindow: true,
        commentToRemove: action.payload,
      }

    case REMOVE_COMMENT:
      // console.log("REMOVE_COMMENT", action.payload)
      return {
        ...state,
        comments: state.comments.filter((comment) => comment.id !== action.payload),
      }

    default:
      return { ...state }
  }
}
export default reducer
