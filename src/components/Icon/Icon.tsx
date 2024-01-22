import { icons } from "./assets";
import { TIcon } from "./types";
import { scssVariables } from "../../style/setup/variables";
import classNames from "classnames";

import styles from "./Icon.module.scss";

import SVG from "react-inlinesvg";

type TProps = {
  name: TIcon;
  width?: number;
  color?: string;
  className?: string;
};

export const Icon = ({
  name,
  width = 20,
  color = scssVariables.clrBlack,
  className,
}: TProps) => {
  return (
    <span className={classNames(styles.container, className)}>
      <SVG
        src={icons[name]}
        width={width}
        height={width}
        title={name}
        fill={color}
      />
    </span>
  );
};
