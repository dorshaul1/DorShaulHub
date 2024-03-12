const filterBlogs = (blogs: TBlog[], filters: TFilters): TBlog[] => {
  const { search, labels } = filters;

  let filteredBlogs = blogs;

  if (search) {
    const lowercaseSearch = search.toLowerCase();
    filteredBlogs = filteredBlogs.filter(
      (blog: TBlog) =>
        (blog?.title?.toLowerCase() || "").includes(lowercaseSearch) ||
        (blog?.description?.toLowerCase() || "").includes(lowercaseSearch)
    );
  }

  if (labels) {
    const selectedLabels = Array.isArray(labels) ? labels : [labels];
    filteredBlogs = filteredBlogs.filter((blog: TBlog) =>
      blog?.labels?.some((label: TLabel) => selectedLabels.includes(label))
    );
  }

  return filteredBlogs;
};

const sortBlogs = (blogs: TBlog[], sortBy: string): TBlog[] => {
  console.log("🚀 ~ sortBlogs ~ sortBy:", sortBy);
  if (sortBy === "date") {
    return blogs.sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dateB - dateA;
    });
  } else if (sortBy === "name") {
    return blogs.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
  }

  return blogs;
};

export { filterBlogs, sortBlogs };
