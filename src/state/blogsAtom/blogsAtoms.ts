import { atom } from "jotai";
import { initialFilters } from "./initializations";
import { filterBlogs, sortBlogs } from "./utils";

// Blog Atoms
const blogsAtom = atom<TBlog[]>([]);
const currentFiltersAtom = atom<TFilters>(initialFilters);

// Filtered Blogs
const filteredBlogsAtom = atom((get) => {
  const blogs = get(blogsAtom);
  const filters = get(currentFiltersAtom);

  const { sortBy = "", search = "", labels = [] } = filters;

  // If no search or labels, return the blogs without additional filtering
  if (!search && labels.length === 0) {
    return sortBlogs(blogs, sortBy);
  }

  const sortedBlogs = sortBlogs(blogs, sortBy);
  const filteredBlogs = filterBlogs(sortedBlogs, { search, labels });

  return filteredBlogs;
});

// Latest Blogs
const latestBlogsAtom = atom((get) => {
  const blogs = get(blogsAtom);
  const sortedBlogs = sortBlogs(blogs, "date");

  const NUMBER_OF_BLOGS = 3;
  return sortedBlogs.slice(0, NUMBER_OF_BLOGS).reverse();
});

export const blogsAtoms = {
  blogs: blogsAtom,
  currentFilters: currentFiltersAtom,
  filteredBlogs: filteredBlogsAtom,
  latestBlogs: latestBlogsAtom,
};
