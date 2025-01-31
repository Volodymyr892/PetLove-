export const location = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "#FFF", 
        borderColor: state.isFocused ? "#FF8C00" : "transparent", 
        padding: "8px",
        borderWidth: "1px", 
        borderRadius: "30px",
        boxShadow: "none", 
        width: "295px",
        minHeight: "42px", 
        fontFamily: "var(--font-family)",  
          fontWeight: "500", 
          fontSize: "14px", 
          lineHeight: "129%",  
          letterSpacing: "-0.03em",
          cursor: "pointer",
        "&:hover": {
            borderColor: state.isFocused ? "#FF8C00" : "transparent", 
          },
          "@media (min-width: 768px)": {
          // borderRadius: "20px",  
          padding: "8px", 
          width: "227px",     
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
      
  }