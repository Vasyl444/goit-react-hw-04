import css from "./ImageCard.module.css";

export default function ImageCard({
  alt,
  src,
  likes,
  onClick,
  srcRegular,
  description,
}) {
  return (
    <div
      className={css.imageWrapper}
      onClick={() => onClick(srcRegular, description, likes)}
    >
      <img className={css.image} src={src} alt={alt} />
    </div>
  );
}
