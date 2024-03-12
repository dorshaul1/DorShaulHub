import { useRef, useState } from "react";
import * as RadixSelect from "@radix-ui/react-select";

import styles from "./Select.module.scss";
import { Icon } from "../Icon";
import classNames from "classnames";

type TProps = {
  items: string[];
  value?: string;
  label?: string;
  onChange: (value: string | undefined) => void;
};

const Select = ({ items, value, label, onChange }: TProps) => {
  const handleValueChange = (newValue: string | undefined) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const labelRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (labelRef.current) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <div className={styles.select}>
      <RadixSelect.Root
        defaultValue="name"
        value={value}
        onValueChange={handleValueChange}
        open={isOpen}
        onOpenChange={() => setIsOpen(!isOpen)}
      >
        <div className={styles.wrapper}>
          <div className={styles.label} onClick={handleClick} ref={labelRef}>
            {label}
          </div>
          <div className={styles.content}>
            <RadixSelect.Trigger>
              <Icon
                className={classNames({ [styles.open]: isOpen })}
                name="expend"
              />
            </RadixSelect.Trigger>
            <RadixSelect.Content position="popper">
              <RadixSelect.Group className={styles.group}>
                {items?.map((item) => (
                  <RadixSelect.Item
                    className={classNames(styles.item, {
                      [styles.checked]: !!(item === value),
                    })}
                    key={item}
                    value={item}
                  >
                    {item}
                  </RadixSelect.Item>
                ))}
              </RadixSelect.Group>
            </RadixSelect.Content>
          </div>
        </div>
      </RadixSelect.Root>
    </div>
  );
};

export default Select;
