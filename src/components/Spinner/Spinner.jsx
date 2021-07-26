import Loader from 'react-loader-spinner';

import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <Loader
        type="Circles"
        color="#ff6b08"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default Spinner;
