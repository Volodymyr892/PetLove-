import { HiMiniChevronDoubleLeft } from "react-icons/hi2";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import css from "./Pagination.module.css"

export default function Pagination() {
    


    return(
        <div className={css.container}>
            <div className={css.containerArrow}>
                <button className={css.arrow} type="submit">
                <HiMiniChevronDoubleLeft  className={css.svg}/>
                </button>
                <button className={css.arrow} type="submit">
                <FiChevronLeft className={css.svg} />
                </button>
            </div>

            <div className={css.containerBtnNumber}>
                <button className={css.buttonNumber} type="submit">1</button>
                <button className={css.buttonNumber} type="submit">2</button>
                <button className={css.points}>...</button>
            </div>

            <div className={css.containerArrow}>
                <button className={css.arrow} type="submit">
                <FiChevronRight className={css.svg} />
                </button>
                <button className={css.arrow}  type="submit">
                <HiMiniChevronDoubleRight className={css.svg} />
                </button>
            </div>
        </div>
    )
}