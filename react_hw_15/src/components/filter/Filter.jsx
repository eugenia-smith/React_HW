import styles from "./styles.module.css";

function Filter({ setFilter }) {
  console.log("Rendering Filter");

  return (
    <form
      className={styles.filter_form}
      onSubmit={(e) => {
        e.preventDefault();
        setFilter(e.target.elements.filterField.value);
      }}
    >
      <label className={styles.filter_label}>
        Filter: <input name="filterField" />
      </label>
      <input className={styles.submit_btn} type="submit" value="Filter" />
    </form>
  );
}

export default Filter;
