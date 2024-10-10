import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuote } from "../../redux/thunks";
import styles from "./styles.module.css";

function Quote() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  if (status === "failed") return <h1>{error}</h1>;
  if (status === "loading") return <h1>Loading ...</h1>;

  return (
    <article className={styles.quote_container}>
      <h3 className={styles.quote_heading}>Words of wisdom of the day are: </h3>
      <p className={styles.quote}>{data.quote}</p>
      <p className={styles.quote_author}>{data.author}</p>
      <button
        className={styles.load_btn}
        onClick={() => dispatch(getQuote())}
        type="button"
      >
        Load more
      </button>
    </article>
  );
}

export default Quote;
