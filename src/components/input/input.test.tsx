import { render, screen } from "@testing-library/react";
import { LInput } from "./input";
import { describe, it, expect } from "vitest";

describe("LInput", () => {
  it("renders with label and placeholder", () => {
    render(<LInput label="Name" placeholder="Enter name" />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });

  it("shows error message", () => {
    render(<LInput label="Email" error="Invalid" />);
    expect(screen.getByText("Invalid")).toBeInTheDocument();
  });
});
