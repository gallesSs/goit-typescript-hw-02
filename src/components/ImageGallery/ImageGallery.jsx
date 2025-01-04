import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ results, openModal }) => {
  return (
    <div>
      <ul className={s.list}>
        {results.map((result) => {
          return (
            <li key={result.id}>
              <ImageCard
                src={result.urls.regular}
                alt={result.alt_description}
                onClick={() => openModal(result.urls.full)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
