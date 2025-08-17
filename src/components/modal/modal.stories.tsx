import React, { Fragment, useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { LModal } from "./modal";
import { LButton } from "../button/button";

const meta: Meta<typeof LModal> = {
  title: "Components/LModal",
  component: LModal,
};

export default meta;
type Story = StoryObj<typeof LModal>;

// Criamos um wrapper para controlar o estado
const ModalWrapper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <LButton onClick={() => setIsOpen(true)}>Open Modal</LButton>
      <LModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
      >
        <p>This is the modal content.</p>
        <div className="mt-4 flex gap-2">
          <LButton variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </LButton>
          <LButton variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </LButton>
        </div>
      </LModal>
    </Fragment>
  );
};

export const Default: Story = {
  render: () => <ModalWrapper />,
};
