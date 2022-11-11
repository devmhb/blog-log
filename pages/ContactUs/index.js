import React from "react";
import styles from "../../styles/components/ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div className={styles.contactus_container}>
      <h1 className={styles.contactus_title}>Contact Us</h1>
      <div className={styles.form_wrapper}>
        <form className={styles.input_container}>
          <div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="10" />
          <button className={styles.btn}></button>
        </form>
        <div className={styles.contactus_desc}>
          <p className={styles.excerpt}>
            Dynamically underwhelm integrated outsourcing via timely models.
            Rapidiously reconceptualize visionary imperatives without
          </p>
          <p className={styles.contact_info}>
            mehedibuiyan734@gmail.com <br />
            01910819923 <br />
            17/2-A Maniknagar, Dhaka-1203
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
