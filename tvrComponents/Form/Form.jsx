import React from "react";
import styles from "../../styles/TVR styles/Form/form.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Spinner } from "reactstrap";
const Form = () => {
  const [active, setActive] = useState(false);
  const captcha = useRef();

  console.log(errors);
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required("Full Name is a required field"),
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is a required field"),
    phoneNumber: yup
      .string(/^[0-9][0-9 -]*$/, "Phone number must be integer")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number must be greater than 8 or equal to 8"
      ),
    address: yup.string().required("Address field is required"),
    message: yup.string().required("Write some message"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChange = (value) => {
    value ? setActive(true) : setActive(false);
  };
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
      position: "bottom-right",
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
    <section className={styles.form_container}>
      <ToastContainer />
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
            <form
              className={styles.main_form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <section>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Full Name"
                  {...register("name")}
                />
                <section>
                  {errors?.name && (
                    <p style={{ color: "red" }}>{errors.name.message}</p>
                  )}
                </section>
              </section>
              <section>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                  {...register("email")}
                />
                <section>
                  {errors?.email && (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
                  )}
                </section>
              </section>
              <section>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone"
                  {...register("phoneNumber")}
                />
                <section>
                  {errors?.phoneNumber && (
                    <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
                  )}
                </section>
              </section>
              <section>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Address"
                  {...register("address")}
                />
                <section>
                  {errors?.address && (
                    <p style={{ color: "red" }}>{errors.address.message}</p>
                  )}
                </section>
              </section>
              <section>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Message"
                  {...register("message")}
                />
                <section>
                  {errors?.message && (
                    <p style={{ color: "red" }}>{errors.message.message}</p>
                  )}
                </section>

                <ReCAPTCHA
                  ref={captcha}
                  sitekey={process.env.RECAPTCHA}
                  onChange={onChange}
                />
              </section>

              <section
                className={`${styles.contact_button} 
              text-center`}
              >
                <button disabled={active ? false : true}>
                  {isSubmitting ? (
                    <Spinner color="light">Loading...</Spinner>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </section>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Form;
