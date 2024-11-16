import { stats } from "../constants";
import styles from "../style";


const Stats = () => (
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className="text-white">
            <h4>{stat.value}</h4>
            <p>{stat.title}</p>
            |
        </div>
      ))}
    </div>
  )

export default Stats