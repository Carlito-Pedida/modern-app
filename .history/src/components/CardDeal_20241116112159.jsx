import {card} from "../assets";
import styles, {layout} from "../style"
import Button from "./Button";


const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in a few years.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5x`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>

        <Button />
      </div>
    </section>
  )
}

export default CardDeal