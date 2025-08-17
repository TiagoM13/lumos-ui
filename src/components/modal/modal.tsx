import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { type PhotonBaseProps } from "../../types/photon";

interface PModalProps extends PhotonBaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: "default" | "glass" | "quantum" | "minimal";
  animation?: "fade" | "slide" | "quantum" | "zoom";
  backdrop?: "blur" | "dark" | "transparent";
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  footerActions?: React.ReactNode;
}

/**
 * 🚀 PModal - Modal cinematográfico
 *
 * Um modal futurístico com animações suaves, efeitos de glassmorphism
 * e transições cinematográficas para uma experiência imersiva.
 *
 * @example
 * ```tsx
 * <PModal
 *   isOpen={isOpen}
 *   onClose={onClose}
 *   title="Portal Dimensional"
 *   variant="glass"
 *   animation="quantum"
 *   glow
 * >
 *   Conteúdo do outro mundo...
 * </PModal>
 * ```
 */
export const PModal: React.FC<PModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  variant = "default",
  animation = "fade",
  backdrop = "blur",
  size = "md",
  closeOnBackdrop = true,
  closeOnEscape = true,
  footerActions,
  glow = false,
  className = "",
}) => {
  const variantClasses = {
    default: "bg-white shadow-2xl",
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl",
    quantum:
      "bg-gradient-to-br from-white to-primary/5 border border-primary/20 shadow-2xl shadow-primary/20",
    minimal: "bg-white shadow-lg border-l-4 border-primary",
  };

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-7xl mx-4",
  };

  const backdropClasses = {
    blur: "backdrop-blur-sm bg-black/50",
    dark: "bg-black/80",
    transparent: "bg-transparent",
  };

  const getAnimationClasses = (type: string) => {
    switch (type) {
      case "slide":
        return {
          enter: "transition-transform duration-300",
          enterFrom: "translate-y-full",
          enterTo: "translate-y-0",
          leave: "transition-transform duration-200",
          leaveFrom: "translate-y-0",
          leaveTo: "translate-y-full",
        };
      case "quantum":
        return {
          enter: "transition-all duration-500",
          enterFrom: "translate-y-8 opacity-0 scale-95 rotate-1",
          enterTo: "translate-y-0 opacity-100 scale-100 rotate-0",
          leave: "transition-all duration-300",
          leaveFrom: "translate-y-0 opacity-100 scale-100 rotate-0",
          leaveTo: "translate-y-8 opacity-0 scale-95 rotate-1",
        };
      case "zoom":
        return {
          enter: "transition-all duration-300",
          enterFrom: "opacity-0 scale-50",
          enterTo: "opacity-100 scale-100",
          leave: "transition-all duration-200",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-50",
        };
      default:
        return {
          enter: "transition-opacity duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "transition-opacity duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
        };
    }
  };

  const animationClasses = getAnimationClasses(animation);

  const effectClasses = [glow && "shadow-2xl shadow-primary/30"]
    .filter(Boolean)
    .join(" ");

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={closeOnBackdrop ? onClose : () => {}}
        static={!closeOnEscape}
      >
        <TransitionChild
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={`fixed inset-0 ${backdropClasses[backdrop]}`} />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter={animationClasses.enter}
            enterFrom={animationClasses.enterFrom}
            enterTo={animationClasses.enterTo}
            leave={animationClasses.leave}
            leaveFrom={animationClasses.leaveFrom}
            leaveTo={animationClasses.leaveTo}
          >
            <DialogPanel
              className={`
              ${sizeClasses[size]} w-full rounded-2xl overflow-hidden
              ${variantClasses[variant]}
              ${effectClasses}
              ${className}
              relative
            `}
            >
              {(title || subtitle) && (
                <div className="px-6 pt-6 pb-4 border-b border-gray-200/20">
                  {title && (
                    <DialogTitle className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      ⚡ {title}
                    </DialogTitle>
                  )}
                  {subtitle && <p className="text-gray-600">{subtitle}</p>}
                </div>
              )}

              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors z-10"
                onClick={onClose}
                aria-label="Fechar modal"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div
                className={`
                px-6 
                ${title || subtitle ? "py-4" : "pt-6 pb-4"}
                ${footerActions ? "" : "pb-6"}
              `}
              >
                <Description as="div">{children}</Description>
              </div>

              {footerActions && (
                <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-200/20 flex justify-end gap-3">
                  {footerActions}
                </div>
              )}
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};
