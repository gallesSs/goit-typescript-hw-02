import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} type="button" className={s.btn}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
