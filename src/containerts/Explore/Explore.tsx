import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import { blogsAtoms } from "../../state/blogsAtom/blogsAtoms";
import { getBlogs } from "../../services/blogsService";
import SearchBar from "../../components/SearchBar";
import styles from "./Explore.module.scss";
import BlogList from "../../components/BlogList";
import Filters from "../../components/Filters";
import { useFilter } from "../../components/Filters/useFilter";

const Explore = () => {
  const [blogs, setBlogs] = useAtom(blogsAtoms.blogs);
  const currentFilters = useAtomValue(blogsAtoms.currentFilters);

  const { updateFilter } = useFilter();

  const fetchBlogs = async () => {
    setBlogs(await getBlogs(currentFilters));
  };

  useEffect(() => {
    fetchBlogs();
  }, [currentFilters]);

  return (
    <section className="explore">
    <section className={styles.explore}>
      <SearchBar
        search={currentFilters?.search}
        onSubmit={(value) => updateFilter("search", value)}
      />
      <Filters filters={currentFilters} />
      <BlogList blogs={blogs} />
    </section>
  );
};

export default Explore;
