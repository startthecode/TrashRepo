import React from "react";
import styles from "./style.module.css";

const HomeHeader = () => {
  return (
    <div>
      <img
        src="http://localhost:4200/assets/images/gallery/static_header_bg.jpg"
        alt=""
        className={styles.homer_header}
      />
    </div>
  );
};

export default HomeHeader;
