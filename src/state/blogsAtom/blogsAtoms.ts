import { atom } from "jotai";
import { initialFilters } from "./initializations";
import { filterBlogs, sortBlogs } from "./utils";

// Atoms
const blogs = atom<TBlog[]>([]);
const currentFilters = atom<TFilters>(initialFilters);

const filteredBlogs = atom<TBlog[]>((get) => {
  const initialBlogs = get(blogs);
  const filters = get(currentFilters);

  const { sortBy, search, labels } = filters || {};

  if (!search?.length && !labels?.length) return initialBlogs;

  const sortedBlogs = sortBlogs(initialBlogs, sortBy || "");
  const filteredBlogs = filterBlogs(sortedBlogs, filters || {});

  return filteredBlogs;
});

const latestBlogs = atom<TBlog[]>((get) => {
  const NUMBER_OF_BLOGS = 3;

  const all_blogs = get(blogs);
  const sortedBlogs = sortBlogs(all_blogs, "date");

  return sortedBlogs.slice(0, NUMBER_OF_BLOGS).reverse();
});

export const blogsAtoms = { blogs, currentFilters, filteredBlogs, latestBlogs };
