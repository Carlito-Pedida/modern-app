import styles from "../style"
import Button from "./Button"


const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div>
        <h2>Let's try our service now</h2>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div>
        <Button   styles='mt-10' label='Start Service' />
      </div>
    </section>
  )


export default CTA