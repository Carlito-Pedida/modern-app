import {card} from "../assets";
import styles, {layout} from "../style"
import Button from "./Button";


const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in a few years.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}></p>
      </div>
    </section>
  )
}

export default CardDeal