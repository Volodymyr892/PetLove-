
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import css from "./AddPetForm.module.css";
import male from "../../assets/male.svg";
import sexual from "../../assets/sexual.svg";
import { TbGenderFemale } from "react-icons/tb";
import { currentPetAdd } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import download from "../../assets/download.svg"
import  paw from "../../assets/paw.svg"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  name: yup.string().required("Name is required"),
  imgURL: yup
  .string()
  .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, "Invalid image URL format")
  .required("Image is required"),
  species: yup.string().required("Species is required"),
  birthday: yup
    .string()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, "Format data (DD.MM.YYYY)")
    .required("Birthday is required"),
  sex: yup.string().required("Sex is required"),
});

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#FFF", 
      borderColor: state.isFocused || state.selectProps.value ? "#FF8C00" : "#ebebeb",
    borderRadius: "30px", 
    padding: "5px", 
    boxShadow: "none", 
    width: "143px",
    height: "42px", 
    "&:hover": {
      borderColor: "#cecece",
    },
    caretColor: "transparent", // Прибирає рисочку курсора
    // pointerEvents: "none", 
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#888888", 
    fontWeight: "500", 
    fontSize: "14px", 
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#cecece", 
    fontWeight: "500", 
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#cecece", 
     padding: "0 4px",
    "&:hover": {
      color: "#cecece", 
    },
  }),
  clearIndicator: (provided) => ({
      ...provided,
      color: "#cecece", 
      padding: "0", 
      "&:hover": {
        color: "#cecece", 
      },
    }),
  indicatorSeparator: () => ({
    display: "none", 
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#FFFFFF", 
    borderRadius: "15px",
    overflowY: "auto", 
    // overflow: "hidden", 
    marginTop: "5px",
    width: "143px", 
    maxHeight: "78px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    "::-webkit-scrollbar": {
    width: "6px", // Ширина скролбару
  },
  "::-webkit-scrollbar-track": {
    background: "#f1f1f1", // Колір фону треку
    borderRadius: "13px",  // Закруглення треку
  },
  "::-webkit-scrollbar-thumb": {
    background: "#cecece", // Колір бігунка (скролу)
    borderRadius: "12px",  // Закруглення бігунка
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "#a9a9a9", // Колір бігунка при наведенні
  },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#F9F9F9" : "#FFFFFF", 
    color: state.isSelected ? "#FF8C00" : "#222222", 
    fontWeight: state.isSelected ? "600" : "400", 
    fontSize: "14px", 
    padding: "10px 15px", 
    "&:active": {
      backgroundColor: "#FFFFFF", 
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 8px",
  }),
};

const tabletStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#FFF", 
      borderColor: state.isFocused || state.selectProps.value ? "#FF8C00" : "#ebebeb",
    borderRadius: "30px", 
    padding: "14px", 
    boxShadow: "none", 
    width: "210px",
    height: "52px", 
    "&:hover": {
      borderColor: "#cecece",
    },
    caretColor: "transparent", 
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#888888", 
    fontWeight: "500", 
    fontSize: "16px", 
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#cecece", 
    fontWeight: "500", 
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#cecece", 
     padding: "0 4px",
    "&:hover": {
      color: "#cecece", 
    },
  }),
  clearIndicator: (provided) => ({
      ...provided,
      color: "#cecece", 
      padding: "0", 
      "&:hover": {
        color: "#cecece", 
      },
    }),
  indicatorSeparator: () => ({
    display: "none", 
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#FFFFFF", 
    borderRadius: "15px",
    overflowY: "auto", 
    // overflow: "hidden", 
    marginTop: "4px",
    width: "210px", 
    maxHeight: "142px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    "::-webkit-scrollbar": {
    width: "6px", // Ширина скролбару
  },
  "::-webkit-scrollbar-track": {
    background: "#f1f1f1", // Колір фону треку
    borderRadius: "13px",  // Закруглення треку
  },
  "::-webkit-scrollbar-thumb": {
    background: "#cecece", // Колір бігунка (скролу)
    borderRadius: "12px",  // Закруглення бігунка
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "#a9a9a9", // Колір бігунка при наведенні
  },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#F9F9F9" : "#FFFFFF", 
    color: state.isSelected ? "#FF8C00" : "#222222", 
    fontWeight: state.isSelected ? "600" : "400", 
    fontSize: "16px", 
    padding: "10px 15px", 
    "&:active": {
      backgroundColor: "#FFFFFF", 
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 8px",
  }),
};

// Media query logic to merge styles for tablet
const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches;
const finalStyles = isTablet ? { ...customStyles, ...tabletStyles } : customStyles;

const typeOptions = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "monkey", label: "Monkey" },
  { value: "bird", label: "Bird" },
  { value: "snake", label: "Snake" },
  { value: "turtle", label: "Turtle" },
  { value: "lizard", label: "Lizard" },
];

export default function AddPetForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
        setValue("imgURL", data.secure_url); // Встановлення валідного URL
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
    setValue("imgURL", url);
  };

  const handleDateChange = (e) => {
    const inputDate = e.target.value; // Очікується формат DD.MM.YYYY
    setValue("birthday", inputDate);
  };


  const onSubmit = async (data) => {
    try {
      const [day, month, year] = data.birthday.split(".");
      const formattedDate = `${year}-${month}-${day}`; 
      const petData = {
        title: data.title,
        name: data.name,
        imgURL: preview || "", 
        species: data.species,
        birthday: formattedDate,
        sex: data.sex,
      };
  
      // Викликаємо dispatch для додавання нового домашнього улюбленця
      const result = await dispatch(currentPetAdd(petData));
  
      if (currentPetAdd.fulfilled.match(result)) {
        iziToast.success({
          title: "Success",
          message: "Registration successful! Redirecting to your profile...",
          position: "topRight",
        });
        navigate("/profile");
      } else {
        if ( result.payload && result.payload.includes('409')) {
          con
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.container}>
      <h2 className={css.Titlle}>
        Add my pet/ <span className={css.span}>Personal details</span>
      </h2>
        <div className={css.radioGrup}>
          <input type="radio" value="female" {...register("sex")} id="female" className={css.radioInput} />
          <label htmlFor="female" className={css.radioLabelFamel}>
            <TbGenderFemale className={css.famele} />
          </label>

          <input type="radio" value="male" {...register("sex")} id="male" className={css.radioInput} />
          <label htmlFor="male" className={css.radioLabelMale}>
            <img src={male} alt="Male" />
          </label>

          <input type="radio" value="unknown" {...register("sex")} id="unknown" className={css.radioInput} />
          <label htmlFor="unknown" className={css.radioLabelSexual}>
            <img src={sexual} alt="unknown" />
          </label>
        </div>
        {errors.sex && <p className={css.errorText}>{errors.sex.message}</p>}

        <div className={css.containerImg}><img src={preview ||paw} alt="Avatar" className={css.avatarPreview} /></div>

        <div className={css.containerUrl}>
          <input
            type="text"
            placeholder="Enter URL"
            {...register("imgURL")}
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

        <input {...register("title")} placeholder="Title" className={`${css.input} ${errors.title ? css.inputError : css.inputValid}`} />
        {errors.title && <p className={css.errorText}>{errors.title.message}</p>}

        <input {...register("name")} placeholder="Pet's Name" className={`${css.input} ${errors.name? css.inputError : css.inputValid}`} />
        {errors.name && <p className={css.errorText}>{errors.name.message}</p>}

        <div className={css.containerType}>
         <div>
            <input {...register("birthday")} placeholder="00.00.0000" className={`${css.inputData} ${errors.birthday ? css.inputError : css.inputValid}`}   onChange={handleDateChange}/>
            {errors.birthday && <p className={css.errorText}>{errors.birthday.message}</p>}
         </div>
  
          <div>
            <Select
              options={typeOptions}
              placeholder="Type of pet"
              isClearable
              onChange={(option) => setValue("species", option?.value || "")}
              styles={finalStyles}

            />
            {/* {errors.species && <p className={css.errorText}>{errors.species.message}</p>} */}
          </div>
        </div>

        <div className={css.buttonContiner}>
          <button type="button" className={css.backButton} onClick={() => navigate("/profile")}>
            Back
          </button>
          <button type="submit" className={css.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}