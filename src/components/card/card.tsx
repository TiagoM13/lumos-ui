import React from "react";
import { type PhotonBaseProps } from "../../types/photon";

interface PCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PhotonBaseProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: "default" | "glass" | "quantum" | "minimal" | "elevated";
  hover?: "none" | "lift" | "float" | "glow" | "scale";
  headerAction?: React.ReactNode;
  footerActions?: React.ReactNode;
  padding?: boolean;
}

/**
 * 🚀 PCard - Container futurístico
 *
 * Um card elegante com efeitos visuais avançados, glassmorphism
 * e animações suaves para criar interfaces modernas e atrativas.
 *
 * @example
 * ```tsx
 * <PCard
 *   title="Card Futurístico"
 *   variant="glass"
 *   hover="float"
 *   glow
 * >
 *   Conteúdo incrível aqui
 * </PCard>
 * ```
 */
export const PCard: React.FC<PCardProps> = ({
  title,
  subtitle,
  children,
  variant = "default",
  hover = "none",
  headerAction,
  footerActions,
  padding = true,
  glow = false,
  className = "",
  ...props
}) => {
  // 🎨 Variantes visuais
  const variantClasses = {
    default: "bg-white border border-gray-200 shadow-md",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
    quantum:
      "bg-gradient-to-br from-white to-gray-50 border border-primary/20 shadow-lg shadow-primary/10",
    minimal: "bg-white border-l-4 border-primary shadow-sm",
    elevated: "bg-white shadow-xl border-0",
  };

  const hoverClasses = {
    none: "",
    lift: "hover:-translate-y-1 hover:shadow-lg",
    float: "hover:-translate-y-2 hover:shadow-xl",
    glow: "hover:shadow-2xl hover:shadow-primary/20",
    scale: "hover:scale-105",
  };

  const effectClasses = [
    glow && "shadow-lg shadow-primary/10",
    "transition-all duration-300 ease-in-out",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`
        rounded-xl overflow-hidden
        ${variantClasses[variant]}
        ${hoverClasses[hover]}
        ${effectClasses}
        ${className}
      `}
      {...props}
    >
      {(title || subtitle || headerAction) && (
        <div
          className={`
          flex items-start justify-between 
          ${padding ? "p-6 pb-0" : "p-4 pb-0"}
          ${!children ? "pb-6" : ""}
        `}
        >
          <div className="flex-1">
            {title && (
              <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                ✨ {title}
              </h3>
            )}
            {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
          </div>
          {headerAction && (
            <div className="ml-4 flex-shrink-0">{headerAction}</div>
          )}
        </div>
      )}

      {children && (
        <div
          className={`
          ${padding ? "px-6" : ""}
          ${title || subtitle ? (padding ? "pt-4 pb-6" : "pt-2 pb-4") : padding ? "p-6" : "p-4"}
        `}
        >
          {children}
        </div>
      )}

      {footerActions && (
        <div
          className={`
          border-t border-gray-200/50 bg-gray-50/50
          ${padding ? "px-6 py-4" : "px-4 py-3"}
        `}
        >
          {footerActions}
        </div>
      )}
    </div>
  );
};
