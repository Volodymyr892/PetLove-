

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import iziToast from "izitoast";

// Validation schema
const UserSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Format example@mail.com")
    .required("Enter your email"),
  password: Yup.string()
    .min(7, "Password should be at least 7 characters!")
    .required("Enter your password"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UserSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      // Dispatch the login action
      const response = await dispatch(login(data)).unwrap();

      if (response.token) {
        // Navigate to the Profile page
        navigate("/profile");
      }
    } catch (error) {
      // Show error notification
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
            <input
              className={css.input}
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <span className={css.errorMessage}>{errors.email.message}</span>
            )}
          </div>

          <div className={css.inputGroup}>
            <input
              className={css.input}
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <span className={css.errorMessage}>{errors.password.message}</span>
            )}
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
