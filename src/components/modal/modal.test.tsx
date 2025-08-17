import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LModal } from "./modal";
import { LButton } from "../button/button";
import { useState } from "react";

const ModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <LButton onClick={() => setIsOpen(true)}>Open Modal</LButton>
      <LModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Test Modal"
      >
        <p>Modal Content</p>
      </LModal>
    </>
  );
};

describe("LModal", () => {
  it("renders modal content when open", () => {
    render(<ModalWrapper />);
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("closes modal when close button is clicked", async () => {
    render(<ModalWrapper />);
    fireEvent.click(screen.getByText("✕"));
    await waitFor(() => {
      expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
    });
  });
});
