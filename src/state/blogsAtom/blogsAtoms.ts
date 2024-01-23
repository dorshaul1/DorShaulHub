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

export const blogsAtoms = { blogs, currentFilters, filteredBlogs };
