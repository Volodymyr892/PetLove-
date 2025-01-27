import css from "./Viewed.module.css"
export default function Viewed(){
    const favoritId = 0;
    return(
         <div>
                    {favoritId=== 0 ? (
                        <p className={css.emptyMessage}>
                            Oops, <span className={css.span}>looks like there aren't any furries</span> on our adorable page yet. 
                            Do not worry! View your pets on the "find your favorite pet" page 
                            and add them to your favorites.
                        </p>
                    ) : (
                        <ul className={css.list}>
                            {/* {favoritId.map((favorit) => (
                                <li key={favorit._id}>
                                    <NoticesItem notices={favorit} />
                                </li>
                            ))} */}
                        </ul>
                    )}
                </div>
    )
}