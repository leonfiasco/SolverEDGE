import React from "react";
import styles from "./styles.module.scss";

type props = {
  list: string[];
};

const CurriculumList = ({ list }: props) => {
  const renderList = () => {
    return list.map((el, i) => (
      <li key={i} className={styles.listItem}>
        {el}
      </li>
    ));
  };
  return <ul className={styles.listWrap}>{renderList()}</ul>;
};

export default CurriculumList;
