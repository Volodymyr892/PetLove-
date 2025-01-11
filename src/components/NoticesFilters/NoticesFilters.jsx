import SearchField from "../SearchField/SearchField";
import Select from "react-select"
import css from "./NoticesFilters.module.css"
import { CgClose } from "react-icons/cg";
import { useState } from "react";
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
      color: "#262626", 
      fontWeight: "500", 
      fontSize: "14px", 
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#262626", 
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

  const customStylesLocation = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "#FFF", 
        borderColor: state.isFocused ? "#FF8C00" : "transparent", 
        borderWidth: "2px", 
        borderRadius: "30px",
        boxShadow: "none", 
        minHeight: "40px", 
        "&:hover": {
            borderColor: state.isFocused ? "#FF8C00" : "transparent", 
          },
      }),
      placeholder: (provided) => ({
        ...provided,
        color: "#262626", 
        fontWeight: "500", 
        fontSize: "14px", 
      }),
      singleValue: (provided) => ({
        ...provided,
        color: "#262626", 
        fontWeight: "500", 
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