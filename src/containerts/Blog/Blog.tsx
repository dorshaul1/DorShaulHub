import { useParams } from "react-router-dom";
import styles from "./Blog.module.scss";
import { getBlogById } from "../../services/blogsService";
import { useEffect, useState } from "react";
import BlogHeader from "../BlogHeader";
import BlogBody from "../BlogBody";

const Blog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState<TBlog | null>();

  const fetchBlog = async () => {
    if (blogId) {
      const fetchedBlog = await getBlogById(blogId);
      setBlog(fetchedBlog);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  return (
    <section className={styles.blog}>
      <BlogHeader
        title={blog?.title}
        description={blog?.description}
        date={blog?.publishedAt}
      />
      <BlogBody blogContent={blog?.content} />
    </section>
  );
};

export default Blog;
