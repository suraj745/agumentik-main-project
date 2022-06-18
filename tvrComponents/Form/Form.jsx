import React from "react";
import styles from "../../styles/TVR styles/Form/form.module.scss";
const Form = () => {
  return (
    <section className={styles.form_container}>
      <section className="container">
        <section className="row  flex-column">
          <section className="col">
            <ul className={styles.top_content}>
              <li className={styles.heading}>
                <h1>
                  Get <span>started</span> now
                </h1>
              </li>
              <li className={styles.paragraph}>
                <p>Interested to partner with us ? Then get in touch</p>
              </li>
            </ul>
          </section>
          <section className="col d-flex justify-content-center py-5 flex-column align-items-center">
            <section className={styles.main_form}>
              <input type="text" name="" id="" placeholder="Full name" />
              <input type="text" name="" id="" placeholder="Email" />
              <input type="text" name="" id="" placeholder="Phone" />
              <input type="text" name="" id="" placeholder="Address" />
              <input type="text" name="" id="" placeholder="Message" />
            </section>

            <section className={styles.contact_button}>
              <button>Submit</button>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Form;
