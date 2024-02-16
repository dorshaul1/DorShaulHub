import MarkDownRenderer from "../../components/MarkDownRenderer";
import styles from "./BlogBody.module.scss";

type TProps = {
  blogContent?: string;
};
const BlogBody = ({ blogContent }: TProps) => {
  return (
    <div className={styles.container}>
      {blogContent && <MarkDownRenderer content={blogContent} />}
    </div>
  );
};

export default BlogBody;
