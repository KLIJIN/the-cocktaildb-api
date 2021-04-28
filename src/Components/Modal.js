import ReactDom from "react-dom"
import { useCommentContext } from '../context/comments_context';
import Close from "../images/modal-x.svg"

export default function Modal() {

  const { openModalwindow, commentToRemove, closeModal, removeComment } = useCommentContext();

  if (!openModalwindow) return null;  // если в стейе true, то в проверке будет false


  const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(171, 181, 190, 0.5)',
    zIndex: 999,
  }

  const handleClick = () => {
    removeComment(commentToRemove);
    closeModal();
  }
  // console.log("Modal component render");
  return ReactDom.createPortal(
    <div >
      <div className="overlay" style={overlay} onClick={closeModal} />
      <div className="modal"   >
        <div className="modal__title" > Confirm Deletion </div>
        <div className="modal__text" > Are you sure you want to delete a comment? </div>
        <div className="modal__buttons" >
          <button className="modal__buttons-cancel" onClick={closeModal}> Cancel </button>
          <button className="modal__buttons-delete" onClick={handleClick}> Delete  </button>
        </div>
        <div className="modal__close" > <img src={Close} alt="close btn" onClick={closeModal} /> </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}