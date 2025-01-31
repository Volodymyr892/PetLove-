import { SearchFind } from "../SearchField/SearchField";
import Select from "react-select"
import css from "./NoticesFilters.module.css"
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNoticesCategories, selectNoticesCities, selectNoticesSexOptions, selectNoticesSpeciesOptions } from "../../redux/notices/selectors";
import { fetchCities, fetchCitiesAll, fetchNoticesSex, fetchNoticesSpecies, noticesCategories } from "../../redux/notices/operations";
import { clearFilters, clearFiltersRadio, setFilters } from "../../redux/filters/slice";
import { category } from "../../constans/category";
import { gender } from "../../constans/gender";
import { type } from "../../constans/type";
import { location } from "../../constans/location";


 

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

    const cities = useSelector(selectNoticesCities)?.map(city => ({
        value: city._id,
        label: `${city.stateEn.charAt(0).toUpperCase() + city.stateEn.slice(1)}, ${city.cityEn.charAt(0).toUpperCase() + city.cityEn.slice(1)}`
    }))

    useEffect(() => {
      dispatch(noticesCategories());
      dispatch(fetchNoticesSex());
      dispatch(fetchNoticesSpecies());
      dispatch(fetchCities());
      dispatch(fetchCitiesAll());
    }, [dispatch]);
  
    const handleRadioChange = (value) => {
      if (selected === value) {
        setSelected('');
        dispatch(clearFilters());
      } else {

        setSelected(value);
        dispatch(clearFiltersRadio());
    
        let payload = {};
      
        switch (value) {
          case 'popular':
            payload = { popular: 5 };
            break;
          case 'unpopular':
            payload = { unpopular: 5 };
            break;
          case 'cheap':
            payload = { cheap: 50 };
            break;
          case 'expensive':
            payload = { expensive: 50 };
            break;
          default:
            payload = {};
        }
    
        dispatch(setFilters(payload));  
      }
      onFiltersChange?.();
  };


  const handleFilterChange = (filterName, value) => {
    dispatch(setFilters({ [filterName]: value }));
    onFiltersChange?.();
  };
    return(
        <section className={css.container}>
              <div className={css.selectContainer}>
              <SearchFind/>
                 
                    <Select
                        options={categoriesOptions}
                        placeholder="Category"
                        isClearable
                        className={css.reactSelect}
                        classNamePrefix="select"
                        styles={category}
                        onChange={(option) => handleFilterChange("category", option?.value || null)}
                    />
                    <Select
                        options={genderOptions}
                        placeholder="By gender"
                        isClearable
                        className={css.reactSelect}
                        classNamePrefix="select"
                        styles={gender}
                        onChange={(option) => handleFilterChange("sex", option?.value || null)}
                    />
                
                    <Select
                        options={typeOptions}
                        placeholder="By type"
                        isClearable
                        className={css.reactSelect}
                        classNamePrefix="select"
                        styles={type}
                        onChange={(option) => handleFilterChange("species", option?.value || null)}
                    />
                    <Select
                        id="location"
                        placeholder="Location"
                        isClearable
                        className={css.reactSelect}
                        classNamePrefix="select"
                        styles={location}
                        options={cities}
                        onChange={(option) => handleFilterChange("location", option?.value || null)}
                    />
                <div>
              </div>
            </div>
                    <hr className={css.line}/>
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
                                        dispatch(clearFilters());
                                    }}
                                />
                            )}
                        </div>
                    </label>
                ))}
            </div>
        </section>
    )
}