

import { NavLink, useNavigate } from "react-router-dom";
import css from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { useState } from "react";

import { HiOutlineEyeSlash } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";
import { HiCheck } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const UserSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(emailPattern, "Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters long")
    .required("Password is required"),
  repeat: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function RegistrationForm() {
    const [shouldPasswordBeShown, setShouldPasswordBeShown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(UserSchema),
  });

  const onSubmit = async (values) => {
    const { name, email, password } = values;
    try {
      const result = await dispatch(register({ name, email, password }));

      if (register.fulfilled.match(result)) {
        iziToast.success({
          title: "Success",
          message: "You have successfully added your pet.",
          position: "topRight",
        });
        navigate("/profile");
      } else {
        if ( result.payload && result.payload.includes('409')) {
          iziToast.error({
            title: "Error",
            message: "This email is already registered. Please use a different one.",
            position: "topRight",
          });
        } else if (result.payload.status === 400) {
          iziToast.error({
            title: "Error",
            message: "Invalid request. Please check your input.",
            position: "topRight",
          });
        } else if (result.payload.status === 404) {
          iziToast.error({
            title: "Error",
            message: "Service not found. Please try again later.",
            position: "topRight",
          });
        } else if (result.payload.status === 500) {
          iziToast.error({
            title: "Error",
            message: "Server error. Please try again later.",
            position: "topRight",
          });
        }
      }
    } catch (error) {
      iziToast.error({
        title: "Error",
        message: error.message || "Registration failed. Please try again.",
        position: "topRight",
      });
    }
    reset();
  };

  return (
    <div className={css.container}>
      <div className={css.modal}>
        <h2 className={css.title}>Registration</h2>
        <p className={css.description}>
          Thank you for your interest in our platform! Please provide us with
          the following information.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <div className={css.inputGroup}>
            <input
             className={`${css.input} ${errors.name ? css.inputError : ""}`}
              type="text"
              placeholder="Name"
              {...formRegister("name")}
            />
            {errors.name && (
              <span className={css.errorMessage}>{errors.name.message}</span>
            )}
          </div>

          <div className={css.inputGroup}>
            <div className={css.emailContainer}>
              <input
                type="email"
                placeholder="Email"
                className={`${css.input} ${
                                errors.email ? css.inputError : touchedFields.email ? css.inputValid : ""
                              }`}
                {...formRegister("email")}
              />
              {errors.email && (
                    <IoClose size={20}  
                    className={css.validIconClose}
                    onClick={() => setValue("email", "")} // Очистити поле
                    />
              )}
            </div>
            {errors.email && (
              <span className={css.errorMessage}>{errors.email.message}</span>
            )}
          </div>

          <div className={css.inputGroup}>
            <div className={css.passwordContainer}>
              <input
                type={shouldPasswordBeShown ? "text" : "password"}
                placeholder="Password"
                className={`${css.input} ${
                errors.password
                  ? css.inputError
                  : touchedFields.password && !errors.password
                  ? css.inputValidPassword
                  : ""
                }`}
                {...formRegister("password")}
              />
              
              {touchedFields.password && !errors.password && (
                  <HiCheck size={18} className={css.validIcon} />
              )}
              {shouldPasswordBeShown ? (
                  <HiOutlineEye
                    size={20}
                    className={css.icon}
                    onClick={() => setShouldPasswordBeShown((prev) => !prev)}
                  />
                ) : (
                  <HiOutlineEyeSlash
                    size={20}
                    className={css.icon}
                    onClick={() => setShouldPasswordBeShown((prev) => !prev)}
                  />
                )}
            </div>
            {errors.password ? (
              <span className={css.errorMessage}>{errors.password.message}</span>
            ) : touchedFields.password && !errors.password ? (
              <span className={css.successMessage}>Password is secure</span>
            ) : null}
          </div>

          <div className={css.inputGroup}>
            <div className={css.passwordContainer}>
              <input
                 type={shouldPasswordBeShown ? "text" : "password"}
                placeholder="Confirm password"
                className={`${css.input} ${
                  errors.repeat
                    ? css.inputError
                    : touchedFields.repeat && !errors.repeat
                    ? css.inputValidPassword
                    : ""
                }`}
                {...formRegister("repeat")}
              />
               {touchedFields.repeat && !errors.repeat && (
                    <HiCheck size={18} className={css.validIcon} />
                )}
                {shouldPasswordBeShown ? (
                    <HiOutlineEye
                      size={20}
                      className={css.icon}
                      onClick={() => setShouldPasswordBeShown((prev) => !prev)}
                    />
                  ) : (
                    <HiOutlineEyeSlash
                      size={20}
                      className={css.icon}
                      onClick={() => setShouldPasswordBeShown((prev) => !prev)}
                    />
                  )}
            </div>
            {errors.repeat ? (
              <span className={css.errorMessage}>{errors.repeat.message}</span>
            ) : touchedFields.password && !errors.repeat ? (
              <span className={css.successMessage}>Password is secure</span>
            ) : null}
          </div>

          <div className={css.containerBtn}>
            <button className={css.button} type="submit">
              Registration
            </button>
            <p className={css.question}>
              Already have an account?{" "}
              <NavLink className={css.spanRegister} to="/login">
                Login
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}