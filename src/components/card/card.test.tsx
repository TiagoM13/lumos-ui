import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PCard } from "./card";

describe("LCard", () => {
  it("renders title and children", () => {
    render(<PCard title="Card Title">Card Content</PCard>);
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  it("renders children without title", () => {
    render(<PCard>Only Content</PCard>);
    expect(screen.getByText("Only Content")).toBeInTheDocument();
  });
});
