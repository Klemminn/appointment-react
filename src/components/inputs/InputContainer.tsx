export type InputContainerProps = {
  error?: string;
  label?: string;
};

const InputContainer: React.FC<InputContainerProps> = ({
  children,
  error,
  label,
}) => (
  <div className="form-control w-full max-w-xs">
    {label && (
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
    )}
    {children}
    {error && <div className="text-error">{error}</div>}
  </div>
);

export default InputContainer;
