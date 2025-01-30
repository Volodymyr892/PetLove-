
import css from "./ModalEditUser.module.css";
import x from "../../assets/x.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { currentEdit } from "../../redux/auth/operations";
import download from "../../assets/download.svg"
import iziToast from "izitoast";
import  paw from "../../assets/paw.svg"
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        "Invalid email format"
      )
      .required("Email is required"),
    avatar: Yup
      .string()
      .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, "Invalid image URL format")
      .required("Avatar is required"),
    phone: Yup.string()
      .matches(/^\+38\d{10}$/, "Phone must follow +38XXXXXXXXXX format")
      .required("Phone is required"),
  });


export default function ModalEditUser({ onClose }) {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  // const [fileName, setFileName] = useState("");
  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (values) => {
    try {
      const result = await dispatch(currentEdit(values));
      if (currentEdit.fulfilled.match(result)) {
        iziToast.success({
          title: "Success",
          message: "Registration successful! Redirecting to your profile...",
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

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert("Invalid file format. Only images are allowed (JPEG, PNG, GIF, BMP, WEBP).");
        return;
      }

      try {
        // Завантаження зображення на сервер (приклад з використанням Cloudinary)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "my_preset"); // Замініть на ваш upload_preset
  
        const response = await fetch("https://api.cloudinary.com/v1_1/dfycklrxt/image/upload", {
          method: "POST",
          body: formData,
        });
  
        const data = await response.json();
        if (data.secure_url) {
          setPreview(data.secure_url);
          setValue("avatar", data.secure_url); // Встановлення валідного URL
        } else {
          throw new Error("Failed to upload image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Please try again.");
      }
    }
  };
  const handleURLChange = (e) => {
    const url = e.target.value;
    setPreview(url);
    setValue("avatar", url);
  };

  return (
    <div className={css.container}>
      <div className={css.modal}>
        <button className={css.buttonClose} onClick={onClose}>
          <img src={x} alt="x" />
        </button>
        <h2>Edit information</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className={css.containerAvatar}>
              <img
                src={preview || paw}
                alt="Avatar"
                className={css.avatarPreview}
              />
            </div>


            <div className={css.containerUpload}> 
               <input
                          type="text"
                          placeholder="Enter URL"
                          {...register("avatar")}
                          value={preview || ""} 
                          onChange={handleURLChange}
                          className={`${css.inputURL} ${errors.imgURL ? css.inputErrorUrl : css.inputValidUrl}`}
                        />
                        <input
                         type="file"  
                         id="fileInput"
                         onChange={handleFileChange} 
                         className={css.fileInput} 
                         />
              <label htmlFor="fileInput" className={css.customBtn}>
                <p className={css.uploadPhoto}>Upload  photo</p>
                <img src={download} alt="" />
              </label>
            </div>
            {errors.imgURL && <p className={css.errorText}>{errors.imgURL.message}</p>}



            {errors.avatar && <p className={css.errorText}>{errors.avatar.message}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className={`${css.input} ${errors.name ? css.inputError: css.inputValid }`}
            />
            {errors.name && <p className={css.errorText}>{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              className={`${css.input} ${errors.email ? css.inputError: css.inputValid }`}
            />
            {errors.email && <p className={css.errorText}>{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone"
              {...register("phone")}
              className={`${css.input} ${errors.phone ? css.inputError: css.inputValid }`}
            />
            {errors.phone && <p className={css.errorText}>{errors.phone.message}</p>}
          </div>
          <button type="submit" className={css.submitButton}>
            Go to profile
          </button>
        </form>
      </div>
    </div>
  );
}