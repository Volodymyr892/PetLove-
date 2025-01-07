// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import css from "./RegistrationForm.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
// import x from "../../assets/x.svg"
import * as Yup from "yup"
import { emailPattern} from "../../constans/index";
// import { useDispatch} from "react-redux";
// import { registerUser } from "../../redux/auth/operations";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import { useEffect } from "react";

const UserShema = Yup.object().shape(
    {
        name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
        email: Yup.string()
        .matches(emailPattern, "Format example@mail.com")
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Enter your email"),
        password:Yup.string()
        .min(8, "Password should be at least 8 characters!")
        .max(50, "Password should be max 64 characters!")
        .required("Enter your password"),
    }
)


export default function RegistrationForm() {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     document.body.style.overflow = "hidden";
    //     return () => {
    //       document.body.style.overflow = "";
    //     };
    //   }, []);

    const initialValues={
        name: "",
        email: "",
        password: "",
    }

    //**-----відправлення форми реєстрації--- */
    // const handleSubmit = async  (values, action) =>{
        // try {
        //     const resultAction = await dispatch(registerUser(values));
            
        //     if (registerUser.fulfilled.match(resultAction)) {
        //         iziToast.success({
        //             title: "Success",
        //             message: "Registration completed successfully!",
        //             position: 'topCenter',
        //             timeout: 3000,
        //         });
        //         action.resetForm();
        //         navigate(-1); 
        //     } else {
        //         const errorMessage = resultAction.payload || "Registration failed. User may already exist.";
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
    
        // const closeHandler = () => {
        //     navigate(-1); 
        // };
    return(
        <div className={css.container} >
                    <div className={css.modal}>
                    <div>
                        <h2 className={css.title}>Registration</h2>
                        <p className={css.description}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={UserShema}
                        // onSubmit={handleSubmit}
                        >
                            <Form className={css.form}>
                                <Field
                                type="name" 
                                name="name"   
                                placeholder="Name"  
                                />
                                <ErrorMessage 
                                className={css.errorMessage} 
                                name="name" 
                                component="span"
                                />

                                <Field 
                                type="email"   
                                placeholder="Email" 
                                name="email" 
                                />
                                <ErrorMessage 
                                className={css.errorMessage} 
                                name="email" 
                                component="span"
                                />

                                <Field 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                />
                                <ErrorMessage 
                                className={css.errorMessage} 
                                name="password" component="span"
                                />

                                <Field 
                                type="password" 
                                name="password" 
                                placeholder="Confirm password" 
                                />
                                <ErrorMessage 
                                className={css.errorMessage} 
                                name="password" component="span"
                                />

                               <div className={css.containerBtn}>
                                    <button className={css.button} type="submit">Registration</button>
                                    <p className={css.question}>Already have an account?<NavLink className={css.spanRegister} to="/login">Login</NavLink></p>
                               </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            )
}