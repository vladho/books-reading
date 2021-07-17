import TimerLogic from "../EndOfYear/TimerLogicOfYear.jsx/TimerLogicOfYear"
import styles from "./EndOfGoal.module.scss"

const EndOfGoal = () => {
    return (
        <div className={styles.box}>
            <TimerLogic/>
        </div>
    );
};

export default EndOfGoal;