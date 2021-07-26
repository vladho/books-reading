import styles from './ChooseRating.module.scss';
import ReactStars from 'react-rating-stars-component';

const ChooseRating = ({ rating = 0, setRating }) => {
  return (
    <div className={styles.mainBox}>
      <ReactStars
        size={20}
        count={5}
        value={rating}
        color="#6D7A8D"
        activeColor="#FF6B08"
        a11y={true}
        emptyIcon={<span className={styles.empty}></span>}
        filledIcon={<span className={styles.filled}></span>}
        onChange={newValue => {
          setRating(newValue);
        }}
      />
    </div>
  );
};

export default ChooseRating;
