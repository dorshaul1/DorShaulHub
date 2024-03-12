import SeperatorLine from "../../components/SeperatorLine";
import { formatDate } from "../../utils/utils";
import styles from "./BlogHeader.module.scss";

type TProps = {
  title?: String;
  description?: string;
  date?: number;
  previewImg?: string;
};
const BlogHeader = ({ title, description, date, previewImg }: TProps) => {
  return (
    <header className={styles.header}>
      <div
        className={styles.previewImg}
        style={{ backgroundImage: `url(${previewImg})` }}
      ></div>

      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.description}>{description}</h3>

      <span className={styles.date}>{formatDate(date)}</span>
      <SeperatorLine />
    </header>
  );
};

export default BlogHeader;
