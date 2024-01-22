import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import styles from "./BlogCard.module.scss";

type TProps = {
  blog: TBlog;
};

const BlogCard = ({ blog }: TProps) => {
  return (
    <Link to={`/blogs/${blog.id}`} className={styles.link}>
      <div className={styles.blogCard}>
        <div
          className={styles.imgSection}
          style={{
            backgroundImage: `url(${blog?.previewImg})`,
          }}
        ></div>
        <div className={styles.content}>
          <div className={styles.labelsSection}>
            {blog?.labels?.map((label) => (
              <span key={label} className="label">
                {label}
              </span>
            ))}
          </div>

          <h1 className={styles.title}>{blog?.title}</h1>

          <p className={styles.description}>{blog?.description}</p>

          <div className={styles.gradiant}></div>
        </div>
        <footer className={styles.cardFooter}>
          <div className={styles.footerContent}>
            <div className={styles.date}>{formatDate(blog?.publishedAt)}</div>
          </div>
        </footer>
      </div>
    </Link>
  );
};

export default BlogCard;
