import { useAtom } from "jotai";
import { useNavigate, useLocation } from "react-router-dom";
import { blogsAtoms } from "../../state/blogsAtom/blogsAtoms";
import { useEffect } from "react";

type TFilterOptions = "labels" | "sortBy" | "search";
type TFilterValues = TLabel | TSortBy | string;

export const useFilter = () => {
  const [currentFilters, setCurrentFilters] = useAtom(
    blogsAtoms.currentFilters
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const labelsParam = queryParams.get("labels") || "";
    const sortByParam = queryParams.get("sortBy") || "";
    const searchParam = queryParams.get("search") || "";

    const labels = labelsParam.split(",");
    const sortBy = sortByParam as TSortBy;
    const search = searchParam;

    setCurrentFilters({
      labels: labels.filter(Boolean) as TLabel[],
      sortBy,
      search,
    });
  }, [location.search, setCurrentFilters]);

  const updateFilter = (filter: TFilterOptions, value?: TFilterValues) => {
    if (filter === "sortBy") {
      setCurrentFilters({ ...currentFilters, sortBy: value as TSortBy });
    } else if (filter === "labels") {
      const labels = currentFilters.labels || [];
      const updatedLabels = labels.includes(value as TLabel)
        ? labels.filter((label) => label !== value)
        : [...labels, value as TLabel];

      setCurrentFilters({ ...currentFilters, labels: updatedLabels });
    } else if (filter === "search") {
      setCurrentFilters({ ...currentFilters, search: value as string });
    }
    updateURLParams(filter, value);
  };

  const updateURLParams = (filter: TFilterOptions, value?: TFilterValues) => {
    const queryParams = new URLSearchParams(location.search);

    if (filter === "labels") {
      const labelsParam = queryParams.get("labels") || "";
      const existingLabels = labelsParam.split(",");

      if (existingLabels.includes(value as string)) {
        // Label is already selected, remove it from URL
        const updatedLabels = existingLabels.filter((label) => label !== value);
        if (updatedLabels.length > 0) {
          queryParams.set("labels", updatedLabels.join(","));
        } else {
          queryParams.delete("labels");
        }
      } else {
        // Label is not selected, add it to URL
        const updatedLabels = existingLabels
          .concat(value as string)
          .filter(Boolean);
        queryParams.set("labels", updatedLabels.join(","));
      }
    } else if (filter === "sortBy") {
      queryParams.set("sortBy", value as string);
    } else if (filter === "search") {
      if (value && (value as string).trim() !== "") {
        queryParams.set("search", value as string);
      } else {
        queryParams.delete("search");
      }
    }

    navigate({ search: queryParams.toString() });
  };

  return { updateFilter };
};
