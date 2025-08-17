import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LCard } from "./card";

describe("LCard", () => {
  it("renders title and children", () => {
    render(<LCard title="Card Title">Card Content</LCard>);
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  it("renders children without title", () => {
    render(<LCard>Only Content</LCard>);
    expect(screen.getByText("Only Content")).toBeInTheDocument();
  });
});
