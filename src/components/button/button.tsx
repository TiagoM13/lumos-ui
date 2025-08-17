import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "dark";
export type ButtonSize = "sm" | "md" | "lg";

interface LButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export const LButton: React.FC<LButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}) => {
  // 🎨 Variantes de cor
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-secondary text-white hover:opacity-90",
    success: "bg-success text-white hover:opacity-90",
    danger: "bg-danger text-white hover:opacity-90",
    warning: "bg-warning text-white hover:opacity-90",
    dark: "bg-dark text-white hover:opacity-90",
  };

  // 🔠 Tamanhos
  const sizeClasses: Record<ButtonSize, string> = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      className={`
        rounded-lg font-medium transition
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
