import * as Switch from "@radix-ui/react-switch";

import styles from "./Switch.module.scss";

type TProps = {
  isChecked?: boolean;
  onChange?: ((checked: boolean) => void) | undefined;
};

const RadixSwitch = ({ isChecked, onChange }: TProps) => {
  return (
    <Switch.Root
      className={styles.SwitchRoot}
      checked={isChecked}
      onClick={onChange as any}
    >
      <Switch.Thumb className={styles.SwitchThumb} />
    </Switch.Root>
  );
};

export default RadixSwitch;
