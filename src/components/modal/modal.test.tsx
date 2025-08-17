import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PModal } from "./modal";
import { PButton } from "../button/button";
import { useState } from "react";

const ModalTestWrapper = ({
  initialOpen = false,
  title = "Test Modal",
  children = <p>Modal Content</p>,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <>
      <PButton onClick={() => setIsOpen(true)}>Open Modal</PButton>
      <PButton onClick={() => setIsOpen(false)}>Close Modal</PButton>
      <PModal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title}>
        {children}
      </PModal>
    </>
  );
};

describe("PModal Component", () => {
  it("should not render modal content when isOpen is false", () => {
    render(<ModalTestWrapper initialOpen={false} />);

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("should render modal without title when title is not provided", () => {
    const ModalWithoutTitle = () => {
      const [isOpen, setIsOpen] = useState(true);
      return (
        <PModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>Content without title</p>
        </PModal>
      );
    };

    render(<ModalWithoutTitle />);
    expect(screen.getByText("Content without title")).toBeInTheDocument();
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("should render custom children content", () => {
    const customContent = (
      <div>
        <h4>Custom Title</h4>
        <p>Custom paragraph</p>
        <button>Custom Button</button>
      </div>
    );

    render(
      <ModalTestWrapper initialOpen={true} title="Custom Modal">
        {customContent}
      </ModalTestWrapper>,
    );

    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom paragraph")).toBeInTheDocument();
    expect(screen.getByText("Custom Button")).toBeInTheDocument();
  });

  it("should apply correct dialog role and accessibility attributes", () => {
    render(<ModalTestWrapper initialOpen={true} />);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });

  it("should apply transition classes", () => {
    render(<ModalTestWrapper initialOpen={true} />);

    const dialog = screen.getByRole("dialog");
    const modalContainer = dialog.closest("div");
    expect(modalContainer).toBeInTheDocument();
  });
});
