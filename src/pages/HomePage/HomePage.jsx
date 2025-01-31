import css from "./HomePage.module.css"
import desctop from "../../assets/homefotoD.jpg"
export default function HomePage() {

  return (
    <main >
        <section >
           <div  className={css.section}>
                <h1 className={css.title}>Take good <span>care</span> of your small pets</h1>
                <p className={css.desription}>Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.</p>
           </div>
           <div className={css.imageContainer}>
              <img className={css.img} src={desctop} alt="" />
          </div>
        </section>
    </main>
  )
}