import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div>
      <h2 className={s.error}>Something went wrong...</h2>
    </div>
  );
};

export default ErrorMessage;
