import React from "react";
import styles from "../../styles/components/ContactUs.module.scss";
import Layout from "../../components/layout";

const ContactUs = () => {
  return (
    <Layout>
      <div className={styles.contactus_container}>
        <h1 className={styles.contactus_title}>
          <span>Contact</span> Us
        </h1>
        <div className={styles.form_wrapper}>
          <form className={styles.input_container}>
            <div className={styles.name_email}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type Your message"
            />
            <div className={styles.btn_container}>
              <button className={styles.btn}>Send Message</button>
            </div>
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
    </Layout>
  );
};

export default ContactUs;
