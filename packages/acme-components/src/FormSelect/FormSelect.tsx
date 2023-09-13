"use client";
import classNames from "classnames";
import { ChangeEvent } from "react";

export interface FormSelectOption {
  value: string;
  label: string;
}

export interface FormSelectChangeEvent {
  value: string;
}

export interface FormSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  options: FormSelectOption[];
  onChange?: (e: FormSelectChangeEvent) => void;
}

export function FormSelect({
  options,
  onChange,
  className,
  ...props
}: FormSelectProps) {
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.({ value: e.target.value });
  };

  return (
    <select
      {...props}
      className={classNames("form-input flex-auto cursor-pointer", className)}
      onChange={handleOnChange}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
