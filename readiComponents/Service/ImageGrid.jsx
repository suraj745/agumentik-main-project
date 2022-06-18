import React from "react";
import styles from "../../styles/ReadiStyles/service/imagegrid.module.scss";
const ImageGrid = ({ url, classname, imageUrl }) => {
  return (
    <section className={styles.rtl}>
      <img src={url} alt="" className={imageUrl} />
    </section>
  );
};

export default ImageGrid;
