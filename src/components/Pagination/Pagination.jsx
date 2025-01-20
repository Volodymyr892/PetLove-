import { HiMiniChevronDoubleLeft } from "react-icons/hi2";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import css from "./Pagination.module.css"

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePageClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 2) {
                pages.push(1, 2, '...');
            } 
            else if (currentPage >= totalPages - 1) {
                pages.push('...', totalPages - 1, totalPages);
            } 
            else {
                pages.push('...', currentPage, currentPage + 1, );
            }
        }
        return pages;
    };

    return(
        <div className={css.container}>
            <div className={css.containerArrow}>
                <button 
                className={css.arrow} 
                disabled={currentPage === 1}
                onClick={() => handlePageClick(1)}
                type="submit">
                <HiMiniChevronDoubleLeft  className={css.svg}/>
                </button>
                <button
                className={css.arrow} 
                type="submit"
                disabled={currentPage === 1}
                onClick={() => handlePageClick(currentPage - 1)}
                >
                <FiChevronLeft className={css.svg} />
                </button>
            </div>

            <div className={css.containerBtnNumber}>
            {renderPageNumbers().map((page, index) => (
                    <button
                        type="button"
                        key={index}
                        className={page === currentPage ? css.activeButton : css.buttonNumber}
                        disabled={page === '...'}
                        onClick={() => typeof page === 'number' && handlePageClick(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <div className={css.containerArrow}>
                <button
                 className={css.arrow} 
                 type="submit"
                 disabled={currentPage === totalPages}
                 onClick={() => handlePageClick(currentPage + 1)}
                 >
                <FiChevronRight className={css.svg} />
                </button>
                <button 
                className={css.arrow}  
                type="submit"
                disabled={currentPage === totalPages}
                onClick={() => handlePageClick(totalPages)}
                >
                <HiMiniChevronDoubleRight className={css.svg} />
                </button>
            </div>
        </div>
    )
}