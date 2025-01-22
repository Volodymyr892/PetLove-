
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
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)")
    .required("Birthday is required"),
  sex: yup.string().required("Sex is required"),
});

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
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert("Invalid file format. Only images are allowed (JPEG, PNG, GIF, BMP, WEBP).");
        return;
      }
  
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
    
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("imgURL", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleURLChange = (e) => {
    const url = e.target.value;
    setPreview(url);
    setValue("imgURL", url);
  };

  const onSubmit = async (data) => {
    try {
      const petData = {
        title: data.title,
        name: data.name,
        imgURL: preview || "", 
        species: data.species,
        birthday: data.birthday,
        sex: data.sex,
      };
      console.log("🚀 ~ onSubmit ~ petData:", petData)
  
      // Викликаємо dispatch для додавання нового домашнього улюбленця
      const resultAction = await dispatch(currentPetAdd(petData));
  
      if (currentPetAdd.fulfilled.match(resultAction)) {
        navigate("/profile");
      } else {
        throw new Error(resultAction.payload || "Failed to add pet");
      }
    } catch (error) {
      alert(error.message);
    }
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

          <input type="radio" value="other" {...register("sex")} id="other" className={css.radioInput} />
          <label htmlFor="other" className={css.radioLabelSexual}>
            <img src={sexual} alt="Other" />
          </label>
        </div>
        {errors.sex && <p className={css.errorText}>{errors.sex.message}</p>}

        <img src={preview || "https://via.placeholder.com/100"} alt="Avatar" className={css.avatarPreview} />
        <input type="file" accept="image/*" onChange={handleFileChange} className={css.fileInput} />
        {/* {errors.imgURL && <p className={css.errorText}>{errors.imgURL.message}</p>} */}

        <input
          type="text"
          placeholder="Enter image URL"
          {...register("imgURL")}
          onChange={handleURLChange}
          className={css.input}
        />
        {errors.imgURL && <p className={css.errorText}>{errors.imgURL.message}</p>}

        <input {...register("title")} placeholder="Title" className={css.input} />
        {errors.title && <p className={css.errorText}>{errors.title.message}</p>}

        <input {...register("name")} placeholder="Pet's Name" className={css.input} />
        {errors.name && <p className={css.errorText}>{errors.name.message}</p>}

        <input {...register("birthday")} placeholder="YYYY-MM-DD" className={css.inputData} />
        {errors.birthday && <p className={css.errorText}>{errors.birthday.message}</p>}

        <Select
          options={typeOptions}
          placeholder="Type of pet"
          isClearable
          onChange={(option) => setValue("species", option?.value || "")}
          className={css.reactSelect}
        />
        {errors.species && <p className={css.errorText}>{errors.species.message}</p>}

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