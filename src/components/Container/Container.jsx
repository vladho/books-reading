import styles from "./Container.module.scss";

export default Container = (children) => {
  return <div className={styles.container}>{children}</div>;
};
