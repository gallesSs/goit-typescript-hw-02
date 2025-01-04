import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import toast from "react-hot-toast";
import { fetchResults } from "./components/services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";

function App() {
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  function openModal(url) {
    setImageUrl(url);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setImageUrl("");
  }

  const fetchImages = async (newQuery, newPage) => {
    try {
      setIsLoading(true);
      const data = await fetchResults(newQuery, newPage);
      toast.success("Images loaded successfully!", { duration: 3000 });
      setResults((prevResults) => [...prevResults, ...data.results]);
    } catch (err) {
      toast.error("Failed to fetch results");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages(query, page);
    }
  }, [query, page]);

  const onSubmit = (value) => {
    if (!value.query.trim()) {
      toast.error("Please enter a search", { duration: 3000 });
      return;
    }

    setQuery(value.query);
    setPage(1);
    setResults([]);
    setIsError(false);
  };

  const onClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  Modal.setAppElement("#root");

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {results.length > 0 && (
        <ImageGallery results={results} openModal={openModal} />
      )}
      {results.length > 0 && !isLoading && <LoadMoreBtn onClick={onClick} />}

      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          imageUrl={imageUrl}
        />
      )}
    </>
  );
}

export default App;
