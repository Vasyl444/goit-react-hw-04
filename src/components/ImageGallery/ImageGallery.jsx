import ImageCard from "./ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ dataCard, onClick }) {
  if (dataCard.length === 0) {
    return;
  }

  return (
    <ul className={css.galleryList}>
      {dataCard.map((item) => (
        <li key={item.id} id={item.id} className={css.galleryItem}>
          <ImageCard
            onClick={(srcRegular, description, likes) =>
              onClick(srcRegular, description, likes)
            }
            alt={item.alt_description}
            src={item.urls.small}
            srcRegular={item.urls.regular}
            likes={item.likes}
            description={item.alt_description}
          />
        </li>
      ))}
    </ul>
  );
}
