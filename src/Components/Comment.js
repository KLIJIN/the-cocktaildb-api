
import React from 'react';
import Button from "../images/x-circle-fill.svg";
import { useCommentContext } from '../context/comments_context';

const Comment = ({ commentUser, commentText, commentTime, id }) => {
  const { openModal } = useCommentContext();
  // console.log("Component render");

  return (
    <div className="comments_item section" >
      <div className="comments_item-title "  >
        <div className="comments_item-title-content "  >
          <div className="comments_item-title-user" > {commentUser}</div>
          <div className="comments_item-title-time" >{commentTime} </div>
        </div>
        <div className="comments_item-title-button" > <img src={Button} alt="close btn" onClick={() => openModal(id)} /> </div>
      </div>
      <div className="comments_item-text">  {commentText}</div>
      <div className="comments_item-line" />
    </div>
  )
}

export default Comment

