import SearchField from "../SearchField/SearchField";
import Select from "react-select"
import css from "./NoticesFilters.module.css"
import { CgClose } from "react-icons/cg";
import { useState } from "react";
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
      color: "#262626", // Темний текст
      fontWeight: "500", // Напівжирний шрифт
      fontSize: "14px", // Розмір шрифту
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#262626", // Темний текст
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

  const customStylesLocation = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "#FFF", // Світло-персиковий фон
        borderColor: state.isFocused ? "#FF8C00" : "transparent", // Помаранчевий бордер при фокусі
        borderWidth: "2px", // Ширина бордера
        borderRadius: "30px", // Закруглені кути
        // padding: "5px", 
        boxShadow: "none", // Без тіні
        minHeight: "40px", // Висота елемента
        "&:hover": {
            borderColor: state.isFocused ? "#FF8C00" : "transparent", // Бордер при ховері
          },
      }),
      placeholder: (provided) => ({
        ...provided,
        color: "#262626", // Темний текст
        fontWeight: "500", // Напівжирний шрифт
        fontSize: "14px", // Розмір шрифту
      }),
      singleValue: (provided) => ({
        ...provided,
        color: "#262626", // Темний текст
        fontWeight: "500", // Напівжирний шрифт
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
      
  }
const categoriesOptions = [
    { value: "all", label: "Show all" },
    { value: "sell", label: "Sell" },
    { value: "free", label: "Free" },
    { value: "lost", label: "Lost" },
    { value: "toys", label: "Found" },
  ];
  
  const genderOptions = [
    { value: "all", label: "Show all" },
    { value: "unknow", label: "Unknown" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "multiple", label: "Multiple" },
  ];
  
  const typeOptions = [
    { value: "all", label: "Show all" },
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "monkey", label: "Monkey" },
    { value: "bird", label: "Bird" },
    { value: "snake", label: "Snake" },
    { value: "turtle", label: "Turtle" },
    { value: "lizard", label: "Lizard" },
  ];

export default function NoticesFilters(){
    const [selected, setSelected] = useState('');

    const handleRadioChange = (value) => {
        setSelected(value);
    };

    const handleClearSelection = () => {
        setSelected('');
    };

    return(
        <section className={css.container}>
            <SearchField/>
            <div className={css.selectContainer}>
                <Select
                    options={categoriesOptions}
                    placeholder="Category"
                    isClearable
                    className={css.reactSelect}
                    classNamePrefix="select"
                    styles={customStyles}
                />
                <Select
                    options={genderOptions}
                    placeholder="By gender"
                    isClearable
                    className={css.reactSelect}
                    classNamePrefix="select"
                    styles={customStyles}
                />
            </div>
                <Select
                    options={typeOptions}
                    placeholder="By type"
                    isClearable
                    className={css.reactSelect}
                    classNamePrefix="select"
                    styles={customStyles}
                />
                <Select
                    id="location"
                    placeholder="Location"
                    isClearable
                    className={css.reactSelect}
                    classNamePrefix="select"
                    styles={customStylesLocation}
                />
                <hr className={css.line} />
                <div>
            <div className={css.sortOptions}>
                {['popular', 'unpopular', 'cheap', 'expensive'].map((option) => (
                    <label key={option} className={css.radioLabel}>
                        <input
                            type="radio"
                            name="sort"
                            value={option}
                            checked={selected === option}
                            onChange={() => handleRadioChange(option)}
                            className={css.hiddenRadio}
                        />
                        <div
                            className={`${css.radioContainer} ${
                                selected === option ? css.selected : ''
                            }`}
                        >
                            <p>{option.charAt(0).toUpperCase() + option.slice(1)}</p>
                            {selected === option && (
                                
                                <CgClose
                                    className={css.clearIcon}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleClearSelection();
                                    }}
                                />
                            )}
                        </div>
                    </label>
                ))}
            </div>
        </div>
        </section>
    )
}