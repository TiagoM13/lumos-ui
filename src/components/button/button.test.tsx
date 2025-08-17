import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LButton } from "./button";

describe("LButton", () => {
  it("renders with children", () => {
    render(<LButton>Click Me</LButton>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("calls onClick handler", () => {
    const handleClick = vi.fn();
    render(<LButton onClick={handleClick}>Click Me</LButton>);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
