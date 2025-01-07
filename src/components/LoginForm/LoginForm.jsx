// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import css from "./LoginForm.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
// import x from "../../assets/x.svg"
import * as Yup from "yup"
import { emailPattern } from "../../constans/index";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../../redux/auth/operations";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import { useEffect } from "react";

const UserShema = Yup.object().shape(
    {
        email: Yup.string()
        .matches(emailPattern, "Format example@mail.com")
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Enter your email"),
        password:Yup.string()
        .min(3, "Password should be at least 8 characters!")
        .max(50, "Password should be max 64 characters!")
        .required("Enter your password"),
    }
)

export default function LoginForm() {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //     document.body.style.overflow = "hidden";
    //     return () => {
    //       document.body.style.overflow = "";
    //     };
    //   }, []);

    //**------відправленя форми логіну---*/
    // const handleSubmit = async (values, actions) => {
        // try {
        //     const resultAction = await dispatch(loginUser(values));
            
        //     if (loginUser.fulfilled.match(resultAction)) {
        //         iziToast.success({
        //             title: "Success",
        //             message: "Login completed successfully!",
        //             position: 'topCenter',
        //             timeout: 3000,
        //         });
        //         actions.resetForm();
        //         navigate(-1); // Повернення назад
        //     } else {
        //         const errorMessage = resultAction.payload || "The email address is entered incorrectly.";
        //         iziToast.error({
        //             title: "Error",
        //             message: errorMessage,
        //             position: 'topCenter',
        //             timeout: 3000,
        //         });
        //     }
        // } catch (error) {
        //     iziToast.error({
        //         title: "Error",
        //         message: "An unexpected error occurred. Please try again.",
        //         position: 'topCenter',
        //         timeout: 3000,
        //     });
        // }
    // }

    const initialValues={
        email: "",
        password: "",
        }

    return(
        <div className={css.container} >
            <div className={css.modal}>
            <div>
                <h2 className={css.title}>Log In</h2>
                <p className={css.description}>Welcome! Please enter your credentials to login to the platform:</p>
            </div>
            <Formik
             initialValues={initialValues}
                validationSchema={UserShema}
                // onSubmit={handleSubmit}
                >
                    <Form className={css.form}>
                        <Field
                        type="email"   
                        placeholder="Email" 
                        name="email" 
                        />
                        <ErrorMessage 
                        className={css.errorMessage} 
                        name="email" 
                        component="span"/>


                        <Field 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        />
                        <ErrorMessage 
                        className={css.errorMessage} 
                        name="password" 
                        component="span"/>
                        <div className={css.containerBtn}> 
                        <button className={css.button} type="submit">Log in</button>
                        <p className={css.question}>Don’t have an account? <NavLink  className={css.spanRegister} to="/register"> Register</NavLink></p>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}