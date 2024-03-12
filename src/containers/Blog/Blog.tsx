import { useParams } from "react-router-dom";
import styles from "./Blog.module.scss";
import { getBlogById } from "../../services/blogsService";
import { useEffect, useState } from "react";
import BlogHeader from "../BlogHeader";
import BlogBody from "../BlogBody";
import Loading from "../../components/Loading";

const Blog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState<TBlog | null>();
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    if (blogId) {
      try {
        setLoading(true);
        setBlog(await getBlogById(blogId));
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  return loading ? (
    <Loading />
  ) : (
    <section className={styles.blog}>
      <BlogHeader
        title={blog?.title}
        description={blog?.description}
        date={blog?.publishedAt}
        previewImg={blog?.previewImg}
      />
      <BlogBody blogContent={blog?.content} />
    </section>
  );
};

export default Blog;
