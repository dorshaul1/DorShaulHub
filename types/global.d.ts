// Basic
type TLanguages = "eu" | "he";
type TAppTheme = "light" | "dark" | null;

// Blog
type TLabel = "react" | "node" | "css";
type TSortBy = "name" | "date";

type TBlog = {
  id: string;
  title?: string;
  previewImg?: string;
  labels?: TLabel[];
  description?: string;
  publishedAt?: number;
  isLike?: boolean;
  content?: string;
};

// Filter
type TFilterOptions = "labels" | "sortBy" | "search";

type TFilterValues = TLabel | TSortBy | string;

type TFilters = {
  search?: string;
  labels?: TLabel[];
  sortBy?: TSortBy;
};
