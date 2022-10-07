import React, { useState, useRef } from "react";
import styles from "../../styles/Agumen2/_form/_form.module.scss";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spinner } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { schema } from "./Validation";
const Form = ({ closeForm }) => {
  // captcha reference
  const captcha = useRef();
  // toggle message
  const [message, setMessage] = useState(false);

  // button activation

  const [active, setActive] = useState(false);

  // catpcha value

  const onChange = (value) => {
    value ? setActive(true) : setActive(false);
  };
  // form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // handle form data
  const onSubmit = async (data) => {
    const res = await fetch(`${process.env.URL}api/contact`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const data1 = await res.json();

    toast.success(data1.success, {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    captcha.current.props.grecaptcha.reset();

    return reset();
  };

  return (
    <section className={styles.form_container} onClick={closeForm}>
      <ToastContainer />
      <section className="row justify-content-center">
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className={`${styles.form_main_container} `}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
          exit={{ scale: 0, transition: { duration: 0.2 } }}
        >
          <img src="/images/shape/1.png" alt="" />
          <img src="/images/shape/2.png" alt="" />
          <img src="/images/shape/3.png" alt="" />
          <img src="/images/shape/5.png" alt="" />

          <ul
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <li className={styles.cross_icon}>
              <ImCross onClick={closeForm} fontSize={"2rem"} />
            </li>
            <li>
              <ul className={styles.form_heading}>
                <li className={styles.heading}>
                  <h1>Enquiry Form</h1>
                </li>
              </ul>
            </li>

            <li className={styles.first_row}>
              <section className={`${styles.name} ${styles.field}`}>
                <input
                  type="text"
                  placeholder="Name"
                  autoComplete={"off"}
                  {...register("name")}
                />
                <br />
                <section>
                  {errors?.name && (
                    <p
                      style={{
                        color: "red",
                        margin: "0rem",
                        textAlign: "left",
                        marginTop: "0.5rem",
                        padding: "0rem",
                        paddingLeft: "0.5rem",
                      }}
                    >
                      {errors.name.message}
                    </p>
                  )}
                </section>
              </section>
              <section className={`${styles.email}  ${styles.field}`}>
                <input
                  autoComplete={"off"}
                  type="text"
                  placeholder="Email"
                  {...register("email")}
                />

                <section>
                  {errors?.email && (
                    <p
                      style={{
                        color: "red",
                        margin: "0",
                        textAlign: "left",
                        marginTop: "0.5rem",
                        padding: "0rem",
                        paddingLeft: "0.5rem",
                      }}
                    >
                      {errors.email.message}
                    </p>
                  )}
                </section>
              </section>
              <section className={`${styles.phone}  ${styles.field}`}>
                <input
                  autoComplete={"off"}
                  type="text"
                  placeholder="Phone Number"
                  {...register("phoneNumber")}
                />
                <section>
                  {errors?.phoneNumber && (
                    <p
                      style={{
                        color: "red",
                        textAlign: "left",
                        margin: "0",
                        marginTop: "0.5rem",
                        padding: "0rem",
                        paddingLeft: "0.5rem",
                      }}
                    >
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </section>
              </section>
              <section className="d-flex justify-content-between w-100 gap-2">
                <select
                  className={`${styles.service} w-50`}
                  {...register("services")}
                >
                  <option value="">Services</option>
                  <option value="CSR">CSR</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Careers">Careers</option>
                  <option value="Placements">Placements</option>
                  <option value="Drive">Drive</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>

                <select
                  className={`${styles.service} w-50`}
                  {...register("how_you_find_us")}
                >
                  <option value="">How You Find Us ?</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Search Engine">Search Engine</option>
                  <option value="From Your Friends">From Your Friend</option>
                </select>
              </section>

              <section className={`${styles.message} w-100 text-start`}>
                <p>Do You Have Something Specific To Share ?</p>

                <section className={styles.buttons}>
                  <a className={styles.yes} onClick={() => setMessage(true)}>
                    Yes
                  </a>
                  <a onClick={() => setMessage(false)} className={styles.no}>
                    No
                  </a>
                </section>

                {message && (
                  <textarea
                    autoComplete={"off"}
                    className="mt-4"
                    placeholder="Message"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    {...register("message")}
                  ></textarea>
                )}

                <section className="d-flex justify-content-center mt-4">
                  <ReCAPTCHA
                    ref={captcha}
                    sitekey={process.env.RECAPTCHA}
                    onChange={onChange}
                  />
                </section>
              </section>
            </li>

            <li className={`${styles.default_button} mt-3`}>
              <button
                disabled={active ? false : true}
                className={styles.default}
                type="submit"
              >
                {isSubmitting ? (
                  <Spinner color="light">Loading...</Spinner>
                ) : (
                  <p>Send Message</p>
                )}
              </button>
            </li>
          </ul>
        </motion.form>
      </section>
    </section>
  );
};

export default Form;
