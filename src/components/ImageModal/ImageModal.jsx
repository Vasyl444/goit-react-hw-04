import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({
  isOpen,
  handleRequestCloseFunc,
  handleAfterOpenFunc,
  selectImg,
  modalText,
  imgLikes,
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleRequestCloseFunc}
      onAfterOpen={handleAfterOpenFunc}
      contentLabel="Image Modal"
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        content: {
          color: "white",
          position: "absolute",
          top: "4%",
          left: "50%",
          translate: "-50%",
          bottom: "20%",
          border: "none",
          background: "rgba(0, 0, 0, 0)",
          //overflow: "auto",
          WebkitOverflowScrolling: "touch",
          // borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
      shouldReturnFocusAfterClose={true}
      shouldCloseOnEsc={true}
      className={css.imageModal}
    >
      <div className="css.contentWrapper">
        <img className={css.modalImg} src={selectImg} />
        <div className={css.textWrapper}>
          <p className={css.contentText}>{modalText}</p>
          <p className={css.contentText}>Likes: {imgLikes}</p>
        </div>
      </div>
    </ReactModal>
  );
}
