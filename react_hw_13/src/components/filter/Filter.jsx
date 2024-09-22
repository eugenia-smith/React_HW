import { connect } from "react-redux";
import { setFilter } from "../../redux/actions";
import styles from "./styles.module.css";

function Filter({ setFilter }) {
  return (
    <label className={styles.filter_label}>
      Filter: <input onChange={(e) => setFilter(e.target.value)} />
    </label>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => dispatch(setFilter(filter)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
