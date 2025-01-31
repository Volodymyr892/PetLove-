

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { HiOutlineEyeSlash } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";
import { HiCheck } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

const UserSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Enter a valid Email")
    .required("Enter your email"),
  password: Yup.string()
    .min(7, "Password should be at least 7 characters!")
    .required("Enter your password"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shouldPasswordBeShown, setShouldPasswordBeShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
    setValue, 
  } = useForm({
    resolver: yupResolver(UserSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(login(data)).unwrap();

      if (response.token) {
        iziToast.success({
          title: "Login Success",
          message: "You have logged in successfully!",
          position: "topRight",
        });
        navigate("/profile");
      }
    } catch (error) {
      iziToast.error({
        title: "Login Failed",
        message: error.message || "An unexpected error occurred.",
        position: "topRight",
      });
    } finally {
      reset();
    }
  };

  return (
    <div className={css.container}>
      <div className={css.modal}>
        <h2 className={css.title}>Log In</h2>
        <p className={css.description}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.inputGroup}>
           <div className={css.emailContainer}>
              <input
                className={`${css.input} ${
                  errors.email ? css.inputError : touchedFields.email ? css.inputValid : ""
                }`}
                type="email"
                placeholder="Email"
                {...register("email")}
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
                className={`${css.input} ${
                  errors.password
                    ? css.inputError
                    : touchedFields.password && !errors.password
                    ? css.inputValidPassword
                    : ""
                }`}
                type={shouldPasswordBeShown ? "text" : "password"}
                // type="password"
                placeholder="Password"
                {...register("password")}
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

          <div className={css.containerBtn}>
            <button className={css.button} type="submit">
              Log in
            </button>
            <p className={css.question}>
              Don’t have an account?
              <NavLink className={css.spanRegister} to="/register">
                Register
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
