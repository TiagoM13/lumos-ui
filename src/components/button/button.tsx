import React from "react";
import {
  type ComponentVariant,
  type ComponentSize,
  type PhotonBaseProps,
} from "../../types/photon";

export type ButtonVariant = ComponentVariant;
export type ButtonSize = ComponentSize;

interface PButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PhotonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * 🚀 PButton - Botão do futuro com efeitos quânticos
 *
 * Um botão revolucionário com animações fluidas, efeitos de brilho
 * e performance otimizada para aplicações modernas.
 *
 * @example
 * ```tsx
 * <PButton variant="quantum" size="lg" glow ripple>
 *   Ativar Fótons ⚡
 * </PButton>
 * ```
 */
export const PButton: React.FC<PButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  glow = false,
  ripple = false,
  particles = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}) => {
  // 🎨 Variantes com efeitos quânticos
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:opacity-90 focus:ring-primary/50",
    secondary:
      "bg-secondary text-white hover:opacity-90 focus:ring-secondary/50",
    quantum:
      "bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 focus:ring-primary/50 animate-pulse",
    plasma:
      "bg-gradient-to-r from-accent to-pink text-white hover:from-accent/90 hover:to-pink/90 focus:ring-accent/50",
    laser:
      "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white focus:ring-primary/50 transition-all",
    photon:
      "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 focus:ring-white/50",
    success: "bg-success text-white hover:opacity-90 focus:ring-success/50",
    danger: "bg-danger text-white hover:opacity-90 focus:ring-danger/50",
    warning: "bg-warning text-white hover:opacity-90 focus:ring-warning/50",
    dark: "bg-dark text-white hover:opacity-90 focus:ring-dark/50",
    light: "bg-light text-dark hover:opacity-90 focus:ring-light/50",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "text-sm px-3 py-1.5 min-h-[32px]",
    md: "text-base px-4 py-2 min-h-[40px]",
    lg: "text-lg px-6 py-3 min-h-[48px]",
    xl: "text-xl px-8 py-4 min-h-[56px]",
  };

  // ✨ Efeitos especiais
  const effectClasses = [
    glow &&
      (typeof glow === "string"
        ? `shadow-lg shadow-${variant}/25 hover:shadow-${variant}/40`
        : `shadow-md shadow-${variant}/20 hover:shadow-${variant}/30`),

    ripple &&
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",

    particles && "animate-pulse",

    loading && "cursor-wait opacity-80",
  ]
    .filter(Boolean)
    .join(" ");

  const isDisabled = disabled || loading;

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg font-medium transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${effectClasses}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {!loading && leftIcon && (
        <span className="flex items-center">{leftIcon}</span>
      )}

      <span>{children}</span>

      {!loading && rightIcon && (
        <span className="flex items-center">{rightIcon}</span>
      )}
    </button>
  );
};
