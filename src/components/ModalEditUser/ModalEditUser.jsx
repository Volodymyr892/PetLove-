

import css from "./ModalEditUser.module.css";
import x from "../../assets/x.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { currentEdit } from "../../redux/auth/operations";
import iziToast from "izitoast";

// Валідація форми
const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        "Invalid email format"
      )
      .required("Email is required"),
    avatar: Yup.string()
      .matches(
        /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
        "Avatar must be a valid image URL"
      )
      .nullable(),
    phone: Yup.string()
      .matches(/^\+38\d{10}$/, "Phone must follow +38XXXXXXXXXX format")
      .required("Phone is required"),
  });


export default function ModalEditUser({ onClose }) {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (values) => {
    try {
      const result = await dispatch(currentEdit(values));
      if (result.meta.requestStatus === "fulfilled") {
        iziToast.success({
          title: "Success",
          message: "Profile updated successfully",
          position: "topRight",
        });
        onClose();
      }
    } catch (error) {
      iziToast.error({
        title: "Error",
        message: error.message || "Update failed",
        position: "topRight",
      });
    }
    reset();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
      setFileName(file.name);
    }
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
            <img
              src={preview || "https://via.placeholder.com/100"}
              alt="Avatar"
              className={css.avatarPreview}
            />
            <div>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                className={css.fileInput}
              />
              <label htmlFor="fileInput" className={css.uploadButton}>
                Upload photo
              </label>
            </div>
            <input
              type="text"
              value={fileName}
              placeholder="https://ftp.goit.stu..."
              readOnly
              className={css.fileNameInput}
            />
            {errors.avatar && <p className={css.errorText}>{errors.avatar.message}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className={css.inputField}
            />
            {errors.name && <p className={css.errorText}>{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              className={css.inputField}
            />
            {errors.email && <p className={css.errorText}>{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone"
              {...register("phone")}
              className={css.inputField}
            />
            {errors.phone && <p className={css.errorText}>{errors.phone.message}</p>}
          </div>
          <button type="submit" className={css.submitButton}>
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}