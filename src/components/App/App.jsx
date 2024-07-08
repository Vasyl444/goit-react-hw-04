import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import RequestFunction from "../../request-function.js";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "../Loader/Loader.jsx";
import css from "../App/App.module.css";
import ImageModal from "../ImageModal/ImageModal.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(999);
  const [responseValue, setResponseValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectImg, setSelectImg] = useState(null);
  const [modalText, setModalText] = useState(null);
  const [imgLikes, setImgLikes] = useState(null);

  function closeModal() {
    setModalOpen(false);
  }
  function openModal() {
    setModalOpen(true);
  }

  const modalClick = (srcRegular, description, likes) => {
    setSelectImg(srcRegular);
    setModalText(description);
    setModalOpen(true);
    setImgLikes(likes);
  };

  const modalClose = () => {
    setModalOpen(false);
  };

  const pageCalculator = () => {
    setCurrentPage(currentPage + 1);
  };
  const onSubmit = (inputValue) => {
    setResponseValue([]);
    setInputValue(inputValue);
    setCurrentPage(1);
  };

  useEffect(() => {
    async function fetchImages() {
      try {
        setErrorMessage(false);
        setMessage(false);
        setIsVisible(true);
        if (inputValue === "") {
          return;
        }
        const responseData = await RequestFunction(inputValue, currentPage);
        setTotalPages(responseData.total_pages);
        if (responseData.results.length === 0) setMessage(true);
        setResponseValue((value) => [...value, ...responseData.results]);
      } catch {
        setErrorMessage(true);
      } finally {
        setIsVisible(false);
      }
    }
    fetchImages();
  }, [inputValue, currentPage]);
  return (
    <div className={css.app}>
      <SearchBar onSubmit={onSubmit} />
      {errorMessage && <p>Opps... Please, reload page</p>}
      {message && <p>No results found for your request</p>}
      <ImageGallery
        closeModal={closeModal}
        openModal={openModal}
        dataCard={responseValue}
        onClick={modalClick}
        //id="galleryElement"
      />
      <ImageModal
        isOpen={modalOpen}
        handleRequestCloseFunc={modalClose}
        selectImg={selectImg}
        modalText={modalText}
        imgLikes={imgLikes}
      />
      <Loader visible={isVisible} />
      {responseValue.length !== 0 && currentPage < totalPages && !isVisible && (
        <LoadMoreBtn onClick={pageCalculator} />
      )}
    </div>
  );
}
/*const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export default function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "green";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form></form>
      </ReactModal>
    </div>
  );
}*/
