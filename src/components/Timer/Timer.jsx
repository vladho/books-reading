import EndOfGoal from "./EndOfGoal/EndOfGoal"
import EndOfYear from "./EndOfYear/EndOfYear"
import styles from "./Timer.module.scss"

const Timer = () => {
    return (
        <div className={styles.wrapper}>
          <EndOfYear/>
          <EndOfGoal/>  
        </div>
    );
};

export default Timer;