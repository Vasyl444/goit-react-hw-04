import css from "./SearchBar.module.css";
import { VscSearch } from "react-icons/vsc";
import toast, { Toaster } from "react-hot-toast";
export default function SearchBar({ onSubmit }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const inputValue = form.querySelector('input[type="text"]').value.trim();
    if (inputValue === "") {
      toast("The field is empty. Please, enter your request", {
        duration: 3000,
        position: "top-right",
        style: {
          background: "#FFE4C4",
          border: "1px solid #DEB887",
        },
      });
      form.reset();
      return;
    } else onSubmit(inputValue);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchButton}>
          <VscSearch />
        </button>
        <Toaster />
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.searchInput}
        />
      </form>
    </header>
  );
}
