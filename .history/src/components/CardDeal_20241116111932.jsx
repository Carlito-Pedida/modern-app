import {card} from "../assets";
import styles, {layout} from "../style"
import Button from "./Button";


const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal</h2>
      </div>
    </section>
  )
}

export default CardDeal