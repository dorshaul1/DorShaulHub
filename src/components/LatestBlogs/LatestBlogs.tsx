import styles from "./LatestBlogs.module.scss";
import { Icon } from "../Icon";
import { useAtomValue } from "jotai";
import { blogsAtoms } from "../../state/blogsAtom/blogsAtoms";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  const latestBlogs = useAtomValue(blogsAtoms.latestBlogs);

  return (
    <div className={styles.topBlogs}>
      <div className={styles.header}>
        <h1 className={styles.title}>Latest Blogs</h1>
      </div>

      <div className={styles.list}>
        {latestBlogs.map((blog: TBlog) => (
          <Link to={`/blogs/${blog.id}`} className={styles.blog} key={blog?.id}>
            <Icon
              className={styles.icon}
              color="var(--clr-primary)"
              name="arrowRight"
            />
            <h3>{blog?.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
