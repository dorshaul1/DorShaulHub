import { Icon } from "../Icon";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.wrapper}>
        <Icon name="loading" width={70} />
        <p>Loading ...</p>
      </div>
    </div>
  );
};

export default Loading;
