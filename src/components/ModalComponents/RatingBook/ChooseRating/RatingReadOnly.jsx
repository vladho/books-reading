import styles from './ChooseRating.module.scss';
import ReactStars from 'react-rating-stars-component';

const RatingReadOnly = ({ rating }) => {
  return (
    <div className={styles.mainBox}>
      <ReactStars
        size={20}
        value={rating}
        edit={false}
        activeColor="#FF6B08"
        emptyIcon={<span className={styles.empty}></span>}
        filledIcon={<span className={styles.filled}></span>}
      />
    </div>
  );
};

export default RatingReadOnly;
