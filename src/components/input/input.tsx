import React from "react";

interface LInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const LInput: React.FC<LInputProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <input
        className={`
          border border-gray rounded-md px-3 py-2
          focus:outline-none focus:ring-2 focus:ring-primary
          ${error ? "border-danger" : ""}
        `}
        {...props}
      />
      {error && <span className="text-danger text-xs mt-1">{error}</span>}
    </div>
  );
};
