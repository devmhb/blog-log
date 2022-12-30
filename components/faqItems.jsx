import React, { useState } from "react";
import styles from "../styles/components/faqItem.module.scss";
import { FaqItem } from "./index";

const FaqItems = () => {
  return (
    <div className={styles.faq_con}>
      {data.map((item, i) => (
        <FaqItem key={i} item={item} />
      ))}
    </div>
  );
};

export default FaqItems;

export const data = [
  {
    question: "Is there have any option for write blog?",
    answer:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about",
  },

  {
    question: "can i change my plan later?",
    answer:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about",
  },

  {
    question: "Did you come here for something in particular?",
    answer:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about",
  },

  {
    question: "Is there have any option for write blog?",
    answer:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about",
  },

  {
    question: "something in particular or just general Riker-bashing?",
    answer:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about",
  },
];

{
  /* */
}
