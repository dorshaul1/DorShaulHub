type TLanguages = "eu" | "he";

type TAppTheme = "light" | "dark" | null;

type TLabel = "react" | "node" | "css";

type TSortBy = "name" | "date";

type TFilters = {
  search?: string;
  labels?: TLabel[];
  sortBy?: TSortBy;
};

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
