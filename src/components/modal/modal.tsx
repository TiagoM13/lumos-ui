import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";

interface LModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const LModal: React.FC<LModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay escuro com fade */}
        <TransitionChild
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </TransitionChild>

        {/* Painel do modal com transição de slide */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="transition-transform duration-300"
            enterFrom="translate-y-4 opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition-transform duration-200"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="translate-y-4 opacity-0"
          >
            <DialogPanel className="max-w-lg w-full bg-white rounded-lg p-6 relative space-y-4">
              {title && (
                <DialogTitle className="text-xl font-semibold">
                  {title}
                </DialogTitle>
              )}
              <Description>{children}</Description>
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                ✕
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};
