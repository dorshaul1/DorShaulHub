import { Icon } from "../Icon";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Icon name="loading" width={70} />
      <p>Loading ...</p>
    </div>
  );
};

export default Loading;
