import { TextField } from "@radix-ui/themes";
import "./Input.scss";

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <TextField.Root>
      <TextField.Input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </TextField.Root>
  );
};

export default Input;
