import styles from "./styles.module.css";

function MainPage() {
  return (
    <section className={styles.main_section}>
      <h2 className={styles.section_heading}>Our awesome blog</h2>
      <p className={styles.section_description}>
        Many more interesting articles on different topics
      </p>
    </section>
  );
}

export default MainPage;
