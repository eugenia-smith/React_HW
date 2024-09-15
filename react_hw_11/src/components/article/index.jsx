import { useParams, useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

import blog from "../../blog.js";

function Article() {
  const navigate = useNavigate();
  function goBack() {
    navigate("/blog");
  }
  const { articleId } = useParams();
  const article = blog.find((elem) => elem.id.toString() === articleId);

  return (
    <article className={styles.article_item}>
      <h3 className={styles.article_heading}>{article.title}</h3>
      <p className={styles.article_contents}>{article.body}</p>
      <button type="button" className={styles.back_button} onClick={goBack}>
        Back
      </button>
    </article>
  );
}

export default Article;
