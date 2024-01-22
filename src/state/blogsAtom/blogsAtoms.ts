import { atom } from "jotai";
import { initialFilters } from "./initializations";

// Atoms
const blogs = atom<TBlog[]>([]);
const currentFilters = atom<TFilters>(initialFilters);

export const blogsAtoms = { blogs, currentFilters };
