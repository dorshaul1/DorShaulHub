import { useEffect, useMemo, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { blogsAtoms } from "../../state/blogsAtom/blogsAtoms";
import { getBlogs } from "../../services/blogsService";
import SearchBar from "../../components/SearchBar";
import styles from "./Explore.module.scss";
import BlogList from "../../components/BlogList";
import Filters from "../../components/Filters";
import { useFilter } from "../../components/Filters/useFilter";
import Loading from "../../components/Loading";
import LatestBlogs from "../../components/LatestBlogs";

const Explore = () => {
  const [_, setBlogs] = useAtom(blogsAtoms.blogs);
  const currentFilters = useAtomValue(blogsAtoms.currentFilters);
  const filteredBlogs = useAtomValue(blogsAtoms.filteredBlogs);

  const { updateFilter } = useFilter();

  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setBlogs(await getBlogs(currentFilters));
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className={styles.explore}>
      <div className={styles.content}>
        <SearchBar
          search={currentFilters?.search}
          onSubmit={(value) => updateFilter("search", value)}
        />
        <Filters filters={currentFilters} />
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className={styles.blogsSection}>
              <BlogList blogs={filteredBlogs} />
              <LatestBlogs />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Explore;
