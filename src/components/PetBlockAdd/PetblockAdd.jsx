// import addDog from "../../assets/addDog.jpg"
import css from "./PetBlockAdd.module.css"
import addDog from "../../assets/dogAdd.svg"
import addDogDesctop from "../../assets/addDogDesctop.svg"
import { useEffect, useState } from "react";
export default function PetBlockAdd(){
    const [isMobileView, setIsMobileView] = useState(window.innerWidth >= 1280);
      
        useEffect(() => {
                const handleResize = () => setIsMobileView(window.innerWidth >= 1280);
                window.addEventListener("resize", handleResize);
            
                return () => window.removeEventListener("resize", handleResize);
              }, []);
    return(
        <div className={css.container}>
            {isMobileView ? <img className={css.addDogDesctop} src={addDogDesctop} alt="addDogDesctop" />: <img className={css.addDog} src={addDog} alt="addDog" />}
        </div>
    )
}