import styles from "./LatestBlogs.module.scss";
import { Icon } from "../Icon";
import { useAtomValue } from "jotai";
import { blogsAtoms } from "../../state/blogsAtom/blogsAtoms";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LatestBlogs = () => {
  const latestBlogs = useAtomValue(blogsAtoms.latestBlogs);

  useEffect(() => {
    const latestBlogsElement = document.getElementById("latest__blogs");

    const onScroll = () => {
      if (latestBlogsElement) {
        latestBlogsElement.classList.toggle(styles.fixed, window.scrollY > 200);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div id="latest__blogs" className={styles.latestBlogs}>
        <div className={styles.header}>
          <h1 className={styles.title}>Latest Blogs</h1>
        </div>

        <div className={styles.list}>
          {latestBlogs.map((blog: TBlog) => (
            <Link
              to={`/blogs/${blog.id}`}
              className={styles.blog}
              key={blog?.id}
            >
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
    </div>
  );
};

export default LatestBlogs;
