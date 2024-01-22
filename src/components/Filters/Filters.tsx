import Labels from "../Labels";
import Select from "../Select";
import styles from "./Filters.module.scss";
import { useFilter } from "./useFilter";

const sortByOptions = ["name", "date"];

type TProps = {
  filters: TFilters;
};

const Filters = ({ filters }: TProps) => {
  const { updateFilter } = useFilter();

  return (
    <div className={styles.filters}>
      <div className={styles.sortBy}>
        <Select
          value={filters.sortBy}
          onChange={(value) => updateFilter("sortBy", value)}
          items={sortByOptions}
          label="Sort By"
        />
      </div>
      <div className={styles.labels}>
        <Labels
          checkedLabels={filters.labels}
          onClick={(value) => updateFilter("labels", value)}
        />
      </div>
    </div>
  );
};

export default Filters;
