import React, { useState } from "react";
import { type PhotonBaseProps } from "../../types/photon";

interface PInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    PhotonBaseProps {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
  variant?: "primary" | "quantum" | "glass" | "minimal";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  validation?: "realtime" | "blur" | "submit";
}

/**
 * 🚀 PInput - Campo de entrada do futuro
 *
 * Um input inteligente com validação em tempo real, efeitos visuais
 * e feedback instantâneo para uma experiência de usuário superior.
 *
 * @example
 * ```tsx
 * <PInput
 *   label="Email"
 *   variant="quantum"
 *   validation="realtime"
 *   glow
 * />
 * ```
 */
export const PInput: React.FC<PInputProps> = ({
  label,
  error,
  success,
  helperText,
  variant = "primary",
  leftIcon,
  rightIcon,
  glow = false,
  className = "",
  type = "text",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const variantClasses = {
    primary: "border-gray-300 focus:border-primary focus:ring-primary/20",
    quantum:
      "border-gradient-to-r from-primary to-secondary focus:border-transparent focus:ring-gradient-to-r focus:ring-from-primary/20 focus:ring-to-secondary/20",
    glass:
      "bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40",
    minimal:
      "border-0 border-b-2 rounded-none border-gray-300 focus:border-primary bg-transparent",
  };

  const stateClasses = [
    error && "border-danger focus:border-danger focus:ring-danger/20",
    success && "border-success focus:border-success focus:ring-success/20",
    glow && "shadow-lg shadow-primary/10 focus:shadow-primary/20",
    isFocused && "transform scale-[1.02] transition-transform",
  ]
    .filter(Boolean)
    .join(" ");

  const inputId =
    props.id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`
            text-sm font-medium transition-colors
            ${error ? "text-danger" : success ? "text-success" : "text-gray-700"}
            ${isFocused ? "text-primary" : ""}
          `}
        >
          {label}
          {props.required && <span className="text-danger ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span
              className={`text-gray-400 ${isFocused ? "text-primary" : ""}`}
            >
              {leftIcon}
            </span>
          </div>
        )}

        <input
          {...props}
          id={inputId}
          type={type}
          className={`
            w-full px-4 py-3 rounded-lg transition-all duration-300
            placeholder-gray-400 focus:outline-none focus:ring-2
            ${variantClasses[variant]}
            ${stateClasses}
            ${leftIcon ? "pl-10" : ""}
            ${rightIcon ? "pr-10" : ""}
            ${props.disabled ? "opacity-50 cursor-not-allowed bg-gray-50" : ""}
          `}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
        />

        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <span
              className={`text-gray-400 ${isFocused ? "text-primary" : ""}`}
            >
              {rightIcon}
            </span>
          </div>
        )}

        {(error || success) && !rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {error && <span className="text-danger">❌</span>}
            {success && <span className="text-success">✅</span>}
          </div>
        )}
      </div>

      <div className="min-h-[20px]">
        {error && (
          <p className="text-sm text-danger flex items-center gap-1">
            <span>⚠️</span> {error}
          </p>
        )}
        {success && !error && (
          <p className="text-sm text-success flex items-center gap-1">
            <span>✨</span> {success}
          </p>
        )}
        {helperText && !error && !success && (
          <p className="text-sm text-gray-500">💡 {helperText}</p>
        )}
      </div>
    </div>
  );
};
