

import { NavLink, useNavigate } from "react-router-dom";
import css from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import iziToast from "izitoast";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UserSchema),
  });

  const onSubmit = async (values) => {
    const { name, email, password } = values;
    try {
      const result = await dispatch(register({ name, email, password }));
      if (register.fulfilled.match(result)) {
        navigate("/profile");
      }
    } catch (error) {
      iziToast.error({
        title: "Error",
        message: error.message || "Registration failed",
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
          <input
            type="text"
            placeholder="Name"
            {...formRegister("name")}
          />
          {errors.name && (
            <span className={css.errorMessage}>{errors.name.message}</span>
          )}

          <input
            type="email"
            placeholder="Email"
            {...formRegister("email")}
          />
          {errors.email && (
            <span className={css.errorMessage}>{errors.email.message}</span>
          )}

          <input
            type="password"
            placeholder="Password"
            {...formRegister("password")}
          />
          {errors.password && (
            <span className={css.errorMessage}>{errors.password.message}</span>
          )}

          <input
            type="password"
            placeholder="Confirm password"
            {...formRegister("repeat")}
          />
          {errors.repeat && (
            <span className={css.errorMessage}>{errors.repeat.message}</span>
          )}

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