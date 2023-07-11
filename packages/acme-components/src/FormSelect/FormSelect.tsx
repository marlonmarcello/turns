import classNames from "classnames";

export interface FormSelectOption {
  value: string;
  label: string;
}

export interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: FormSelectOption[];
}

export function FormSelect({ options, className, ...props }: FormSelectProps) {
  return (
    <select
      {...props}
      className={classNames("form-input flex-auto cursor-pointer", className)}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
