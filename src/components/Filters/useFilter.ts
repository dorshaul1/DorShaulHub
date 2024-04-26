import { useAtom } from "jotai";
import { useNavigate, useLocation } from "react-router-dom";
import { blogsAtoms } from "../../state/blogsAtom/blogsAtoms";
import { useEffect } from "react";

const extractQueryParams = (queryParams: URLSearchParams): TFilters => ({
  labels: queryParams.get("labels")
    ? (queryParams.get("labels")!.split(",").filter(Boolean) as TLabel[])
    : [],
  sortBy: (queryParams.get("sortBy") as TSortBy) || "",
  search: queryParams.get("search") || "",
});

const updateQueryParams = (
  queryParams: URLSearchParams,
  filter: TFilterOptions,
  value: TFilterValues
) => {
  if (filter === "labels") {
    const labels = queryParams.get("labels")?.split(",") || [];
    const stringValue = value as string;

    if (labels.includes(stringValue)) {
      const updatedLabels = labels.filter((label) => label !== stringValue);
      if (updatedLabels.length > 0) {
        queryParams.set("labels", updatedLabels.join(","));
      } else {
        queryParams.delete("labels");
      }
    } else {
      queryParams.set("labels", [...labels, stringValue].join(","));
    }
  } else {
    const stringValue = value as string;
    if (stringValue.trim() !== "") {
      queryParams.set(filter, stringValue);
    } else {
      queryParams.delete(filter);
    }
  }
};

export const useFilter = () => {
  const [_, setCurrentFilters] = useAtom(blogsAtoms.currentFilters);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filters = extractQueryParams(queryParams);

    setCurrentFilters(filters);
  }, [location.search]);

  const updateFilter = (filter: TFilterOptions, value: TFilterValues) => {
    setCurrentFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
    }));

    const queryParams = new URLSearchParams(location.search);
    updateQueryParams(queryParams, filter, value);
    navigate({ search: queryParams.toString() });
  };

  return { updateFilter };
};
