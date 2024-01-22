import classNames from "classnames";
import styles from "./Labels.module.scss";

type TProps = {
  checkedLabels?: TLabel[];
  onClick: (value: string | undefined) => void;
};

const labels = ["react", "css", "node"];

const Labels = ({ checkedLabels, onClick }: TProps) => {
  return (
    <div className={styles.labels}>
      <span>Labels</span>
      {labels?.map((label: any) => (
        <span
          key={label}
          onClick={() => onClick(label)}
          className={classNames(styles.label, {
            [styles.selected]: checkedLabels?.includes(label),
          })}
        >
          {label}
        </span>
      ))}
    </div>
  );
};

export default Labels;
