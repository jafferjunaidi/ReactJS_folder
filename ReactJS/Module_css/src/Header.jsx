import React from "react";
import Logo from "./assets/react.svg";
import styles from "./header.module.css";

const header = () => {
  return (
    <>
      <img src={Logo} alt="Computer Logo" className={styles.logo} />
    </>
  );
};

export default header;
