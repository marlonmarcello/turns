import classNames from "classnames";

export interface FormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  children?: React.ReactNode;
}

export function FormLabel({
  label,
  children,
  className,
  ...props
}: FormLabelProps) {
  return (
    <label
      className={classNames("block py-2", { "pb-1": !children }, className)}
      {...props}
    >
      {label && (
        <span
          className={classNames(
            "block pl-1 text-sm text-gray-600 dark:text-gray-200",
            {
              "mb-2": label && children,
            }
          )}
        >
          {label}
        </span>
      )}
      {children}
    </label>
  );
}
