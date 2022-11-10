import React, { useState } from "react";
import styles from "../styles/components/faqItem.module.scss";

const FaqItem = ({ item }) => {
  const [onClicked, setOnClicked] = useState(false);

  const showAns = () => {
    setOnClicked(!onClicked);
  };

  return (
    <div className={styles.faq_items} key={item}>
      <div className={styles.faq_item} onClick={showAns}>
        <h3 className={styles.faq_qus}>{item.question}</h3>
        {onClicked && <p className={styles.faq_ans}>{item.answer}</p>}
      </div>
    </div>
  );
};

export default FaqItem;
