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
      backgroundColor: "#FFF", // Світло-персиковий фон
      borderColor: "transparent", // Без рамки
      borderRadius: "30px", // Закруглені кути
      padding: "5px", // Відступи
      boxShadow: "none", // Без тіні
      minHeight: "40px", // Висота елемента
      "&:hover": {
        borderColor: "transparent",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#26262680", // Темний текст
      // fontWeight: "500",
      fontSize: "14px", // Розмір шрифту
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#26262680", // Темний текст
      fontWeight: "500", // Напівжирний шрифт
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#222222", // Темний колір стрілки
       padding: "0 4px",
      "&:hover": {
        color: "#222222", // Такий самий колір при ховері
      },
    }),
    clearIndicator: (provided) => ({
        ...provided,
        color: "#222222", // Помаранчевий хрестик
        padding: "0", // Зменшуємо відступи
        "&:hover": {
          color: "#222222", // Хрестик при ховері
        },
      }),
    indicatorSeparator: () => ({
      display: "none", // Прибираємо вертикальну лінію біля стрілки
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#FFFFFF", // Білий фон меню
      borderRadius: "15px", // Закруглені кути
      overflow: "hidden", // Забираємо вихід елементів за межі
      marginTop: "5px", // Відступ зверху
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Легка тінь
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#F9F9F9" : "#FFFFFF", // Легкий сірий фон при наведенні
      color: state.isSelected ? "#FF8C00" : "#222222", // Помаранчевий текст для вибраного
      fontWeight: state.isSelected ? "600" : "400", // Жирний текст для вибраного елемента
      fontSize: "14px", // Розмір шрифту
      padding: "10px 15px", // Відступи
      "&:active": {
        backgroundColor: "#FFFFFF", // Білий фон при кліку
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0 8px", // Відступи всередині контейнера
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