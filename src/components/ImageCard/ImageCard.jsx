import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div>
      <img onClick={onClick} className={s.card} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
