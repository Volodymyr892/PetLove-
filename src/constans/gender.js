export const gender = {
    
        control: (provided) => ({
          ...provided,
          backgroundColor: "#FFF", 
          borderColor: "transparent", 
          borderRadius: "30px", 
          padding: "12px", 
          boxShadow: "none",
          width: "143px",   
          minHeight: "42px", 
          fontFamily: "var(--font-family)",  
          fontWeight: "500", 
          fontSize: "14px", 
          lineHeight: "129%",  
          letterSpacing: "-0.03em", 
          cursor: "pointer", 
          "&:hover": {
            borderColor: "transparent",
          },
          "@media (min-width: 768px)": { 
          padding: "14px", 
          width: "170px",     
          minHeight: "48px",  
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
           cursor: "pointer",
          "&:hover": {
            color: "#222222", 
          },
        }),
        clearIndicator: (provided) => ({
            ...provided,
            color: "#222222", 
            padding: "0", 
            cursor: "pointer",
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