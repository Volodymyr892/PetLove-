import css from "./PetBlock.module.css"
import dog from "../../assets/dog.svg"
import { useEffect, useState } from "react";
import dogbig from "../../assets/DogBig.svg"
export default function PetBlock() {
  
   const [isMobileView, setIsMobileView] = useState(window.innerWidth >= 1280);

  useEffect(() => {
          const handleResize = () => setIsMobileView(window.innerWidth >= 1280);
          window.addEventListener("resize", handleResize);
      
          return () => window.removeEventListener("resize", handleResize);
        }, []);
  return (
    <div className={css.container}>
       {isMobileView ? <img className={css.dogbig} src={dogbig} alt="" />: <img className={css.img} src={dog} alt="dog" />}
    </div>
  )
}