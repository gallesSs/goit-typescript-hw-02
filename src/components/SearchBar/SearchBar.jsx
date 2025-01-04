import { Form, Formik, Field } from "formik";
import s from "./SearchBar.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    query: "",
  };

  return (
    <div>
      <header className={s.header}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className={s.form}>
            <button type="submit">
              <FaMagnifyingGlass />
            </button>
            <Field
              name="query"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default SearchBar;
