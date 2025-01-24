import SearchField from "../SearchField/SearchField";
import Select from "react-select"
import css from "./NoticesFilters.module.css"
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNoticesCategories, selectNoticesCities, selectNoticesSexOptions, selectNoticesSpeciesOptions } from "../../redux/Notices/selectors";
import { fetchCities, fetchCitiesAll, fetchNoticesSex, fetchNoticesSpecies, noticesCategories } from "../../redux/Notices/operations";

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

  


export default function NoticesFilters({onFiltersChange}){
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();

    const categoriesOptions = useSelector(selectNoticesCategories)?.map(category => ({
      value: category, 
      label: category.charAt(0).toUpperCase() + category.slice(1),
  })) || [];
    const genderOptions = useSelector(selectNoticesSexOptions)?.map(gender => ({
      value: gender, 
      label: gender.charAt(0).toUpperCase() + gender.slice(1),
    }))|| [];
    const typeOptions = useSelector(selectNoticesSpeciesOptions)?.map(type => ({
      value: type, 
      label: type.charAt(0).toUpperCase() + type.slice(1),
    }))|| [];

    const cities = useSelector(selectNoticesCities);
    console.log("🚀 ~ NoticesFilters ~ cities:", cities)

    useEffect(() => {
      dispatch(noticesCategories());
      dispatch(fetchNoticesSex());
      dispatch(fetchNoticesSpecies());
      dispatch(fetchCities());
      dispatch(fetchCitiesAll())
    }, [dispatch]);
  
    const handleClearSelection = () => {
      setSelected('');
    }
    const handleRadioChange = (value) => {
      setSelected(value);
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
                    options={cities.map(city => ({
                      value: city._id,
                        label: `${city.stateEn.charAt(0).toUpperCase() + city.stateEn.slice(1)}, ${city.cityEn.charAt(0).toUpperCase() + city.cityEn.slice(1)}`
                    }))}
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