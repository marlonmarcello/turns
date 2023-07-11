import classNames from "classnames";

export type FormInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function FormInput({ className, ...props }: FormInputProps) {
  return (
    <input
      className={classNames("form-input flex-auto", className)}
      {...props}
    />
  );
}
