import { Field, Form, Formik } from "formik";
import male from "../../assets/male.svg"
import sexual from "../../assets/sexual.svg"
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import uload from "../../assets/upload-cloud.svg"
import { TbGenderFemale } from "react-icons/tb";
import footprint from "../../assets/icons8_cat-footprint.svg"

import css from "./AddPetForm.module.css"

const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#FFF", 
      borderColor: "transparent", 
      borderRadius: "30px", 
      padding: "5px", 
      boxShadow: "none", 
      minHeight: "40px", 
      "&:hover": {
        borderColor: "transparent",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#26262680", 
      fontSize: "14px", 
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#26262680", 
      fontWeight: "500", 
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#222222",
       padding: "0 4px",
      "&:hover": {
        color: "#222222", 
      },
    }),
    clearIndicator: (provided) => ({
        ...provided,
        color: "#222222", 
        padding: "0", 
        "&:hover": {
          color: "#222222", 
        },
      }),
    indicatorSeparator: () => ({
      display: "none", 
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#FFFFFF", 
      borderRadius: "15px", 
      overflow: "hidden",
      marginTop: "5px", 
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
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

const typeOptions = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "monkey", label: "Monkey" },
    { value: "bird", label: "Bird" },
    { value: "snake", label: "Snake" },
    { value: "turtle", label: "Turtle" },
    { value: "lizard", label: "Lizard" },
];

export default function AddPetForm(){
    const navigate = useNavigate();
    const initialValues = {
        title: '',
        name: '',
        imgUrl: '',
        species: '',
        birthday: '',
        sex: '',
    };
    return(
        <div>
            <Formik
            initialValues={initialValues} 
            >
                <Form className={css.container}> 
                    <div>
                        <h2 className={css.Titlle}>Add my pet/ <span className={css.span}>Personal details</span></h2>
                    </div>
              
                    <div className={css.radioGrup}>
                                <Field type="radio" name="sex" value="female"  className={css.radioInput} id="female" />
                        <label className={css.radioLabelFamel} htmlFor="female">
                                <TbGenderFemale  className={css.famele}/>
                        </label>

                            <Field type="radio" name="sex" value="male"  className={css.radioInput} id="male"/>
                        <label className={css.radioLabelMale} htmlFor="male">
                            <img src={male} alt="x" />
                        </label>

                            <Field type="radio" name="sex" value="other"  className={css.radioInput} id="other"/>
                        <label className={css.radioLabelSexual} htmlFor="other">
                            <img src={sexual} alt="x" />
                        </label>
                    </div>

                    <div className={css.containerFoot}>
                      <img src={footprint} alt="footprint" />
                    </div>
                    <div>
                        <Field className={css.inputEnter} type="text" name="imgUrl" placeholder="Enter URL"/>
                        <button className={css.buttonUpload} type="submit">
                            <div className={css.containerUload}>
                                <p>Upload  photo</p>
                                <img src={uload} alt="upload" />
                            </div>
                            </button>
                    </div>
                    

                    <div>
                        <Field className={css.input} type="text" name="title" placeholder="Title"/>
                    </div>

                    <div>
                        <Field className={css.input} type="text" name="name" placeholder="Pet's Name"/>
                    </div>

                    <div className={css.dataContainer}>
                        <Field className={css.inputData} type="data" name="birthday" placeholder="YYYY-MM-DD"/>
                    <Select
                    options={typeOptions}
                    placeholder="Type of pet"
                    isClearable
                    className={css.reactSelect}
                    classNamePrefix="select"
                    styles={customStyles}
                    />
                    </div>
                    <div className={css.buttonContiner}>
                        <button
                        className={css.backButton}
                        type="button"
                        onClick={() => navigate('/profile')}
                        >Back</button>
                        <button className={css.submitButton}>Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}