import { InputContainer, InputContainerProps } from "./input-container";

type TextInputProps = InputContainerProps & {
  placeholder?: string;
  value?: string;
  onChange?(text: string): void;
};

export const TextInput = ({
  placeholder,
  value,
  onChange,
  ...rest
}: TextInputProps) => (
  <InputContainer {...rest}>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="input input-bordered w-full max-w-xs"
    />
  </InputContainer>
);
