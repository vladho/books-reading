import TimerLogic from "./TimerLogicOfYear.jsx/TimerLogicOfYear"
import styles from "./EndOfYear.module.scss"

const EndOfYear = () => {
    return (
        <div className={styles.box}>
            <TimerLogic/>
        </div>
    );
};

export default EndOfYear;