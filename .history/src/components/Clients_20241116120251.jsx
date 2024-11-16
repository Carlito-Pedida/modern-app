import { clients } from "../constants"
import styles from "../style"

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-1-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="client"className="sm:w-[192px] w-[100px] object-contain  transition-all duration-300 group-hover:brightness-200 group-hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.7)]" />
          </div>
        ))}
      </div>
    </section>
  )


export default Clients