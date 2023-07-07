export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button className="rounded-lg bg-purple-600 px-8 py-2 text-white">
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
