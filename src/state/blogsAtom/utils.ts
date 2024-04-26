const filterBlogs = (blogs: TBlog[], filters: TFilters): TBlog[] => {
  const { search, labels = [] } = filters;

  let result = blogs;

  if (search) {
    const lowerSearch = search.toLowerCase();
    result = result.filter(
      (blog) =>
        (blog.title || "").toLowerCase().includes(lowerSearch) ||
        (blog.description || "").toLowerCase().includes(lowerSearch)
    );
  }

  if (labels.length > 0) {
    result = result.filter((blog) =>
      blog.labels?.some((label) => labels.includes(label))
    );
  }

  return result;
};

const sortBlogs = (blogs: TBlog[], sortBy: string): TBlog[] => {
  switch (sortBy) {
    case "date":
      return blogs.sort((a, b) => {
        const timeA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const timeB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return timeB - timeA;
      });

    case "name":
      return blogs.sort((a, b) => (a.title || "").localeCompare(b.title || ""));

    default:
      return blogs;
  }
};

export { filterBlogs, sortBlogs };
