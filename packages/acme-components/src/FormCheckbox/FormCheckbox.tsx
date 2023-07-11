import classNames from "classnames";

export interface FormCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperTag?: keyof JSX.IntrinsicElements;
  caption?: string;
  children?: React.ReactNode;
}

export function FormCheckbox({
  wrapperTag = "label",
  caption,
  className,
  children,
  ...props
}: FormCheckboxProps) {
  const Wrapper = wrapperTag || "label";

  return (
    <Wrapper
      className={classNames("cursor-pointer dark:text-gray-100", className)}
    >
      <input type="checkbox" {...props} /> {children}
      {caption && (
        <span className="block text-sm dark:text-gray-600">{caption}</span>
      )}
    </Wrapper>
  );
}
