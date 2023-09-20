interface Props {
  name?: string;
  label: string;
  type: string;
  placeholder?: string;
  onchangeHandler: any;
  value: string;
  required?: boolean;
  autoFocus?: boolean;
}
export const Input: React.FC<Props> = ({
  name,
  label,
  type,
  placeholder,
  onchangeHandler,
  value,
  required,
  autoFocus,
}) => {
  return (
    <div className="field">
      {label && <label>{label}</label>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onchangeHandler}
        autoFocus={autoFocus}
      />
    </div>
  );
};
