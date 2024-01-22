import axios, { AxiosResponse } from "axios";
import { blogs } from "../data/blogs";

const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

const addBlog = async (blog: TBlog): Promise<void> => {
  try {
    await axios.post(`${SERVER_BASE_URL}/blogs`, blog);
    console.log(`Blog ${blog?.id} added successfully`);
  } catch (error) {
    console.log(`Failed to add blog - ${blog?.id}\nError: ${error}`);
  }
};

const setBlogs = async (blogs: TBlog[]): Promise<void> => {
  try {
    for (const blog of blogs) {
      await addBlog(blog);
    }
    console.log(`${blogs.length} Blogs added successfully`);
  } catch (error) {
    console.log(`Failed to add blogs\nError: ${error}`);
  }
};

const getBlogs = async (filters?: TFilters): Promise<TBlog[]> => {
  try {
    const response: AxiosResponse<TBlog[]> = await axios.get(
      `${SERVER_BASE_URL}/blogs`,
      {
        params: filters,
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Failed to get blogs\nError: ${error}`);
    return [];
  }
};

const getBlogById = async (id: string): Promise<TBlog | null> => {
  try {
    const response = await axios.get(`${SERVER_BASE_URL}/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.log(`Failed to get blog by id - ${id}\nError: ${error}`);
    return null;
  }
};

const setInitialBlogs = async () => {
  await setBlogs(blogs);
};

export { getBlogs, getBlogById, setInitialBlogs };
