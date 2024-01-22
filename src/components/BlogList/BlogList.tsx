import BlogCard from "../BlogCard";
import styles from "./BlogList.module.scss";

type TProps = {
  blogs: TBlog[];
};
const BlogList = ({ blogs }: TProps) => {
  return blogs?.length ? (
    <div className={styles.list}>
      {blogs?.map((blog) => (
        <BlogCard key={blog?.id} blog={blog} />
      ))}
    </div>
  ) : (
    <div className={styles.noResults}>
      <span>No Results Found</span>
    </div>
  );
};

export default BlogList;
