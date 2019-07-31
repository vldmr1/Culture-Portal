import React from 'react';

import styles from "./AboutAuthor.module.css";
import Yanka_Kupala from "../../assets/images/img/Yanka_Kupala.jpg";

const AboutAuthor = () => (
    <div className = {styles.poetContent}>
      <div className = {styles.poetImage}>
        <img src={Yanka_Kupala} alt="Kupala"/>
      </div>
      <div className = {styles.poetTitle}>
        Янка Купала
      </div>
      <div>
        (25 июня 1882 – 28 июня 1942)
      </div>
      <div className = {styles.description}>
        Белорусский поэт и переводчик, драматург, публицист. Классик белорусской литературы. Народный поэт БССР (1925). Академик АН БССР (1928) и АН УССР (1929). Лауреат Сталинской премии первой степени (1941).
      </div>
    </div>
  );

export default AboutAuthor;