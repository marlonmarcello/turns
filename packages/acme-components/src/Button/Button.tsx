import classNames from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "success";
}

export function Button({
  variant,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "rounded-md border px-8 py-3",
        {
          "border-green-300 bg-green-200 text-green-600 hover:bg-green-400 hover:text-green-900":
            variant === "success",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
