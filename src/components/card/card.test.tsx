import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PCard } from "./card";

describe("PCard Component", () => {
  it("should render title and children when both are provided", () => {
    render(<PCard title="Card Title">Card Content</PCard>);

    expect(screen.getByText(/Card Title/)).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  it("should render only children when no title is provided", () => {
    render(<PCard>Only Content</PCard>);

    expect(screen.getByText("Only Content")).toBeInTheDocument();
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("should render title as h3 element", () => {
    render(<PCard title="Card Title">Content</PCard>);

    const title = screen.getByRole("heading", { level: 3 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/Card Title/);
  });

  it("should render complex children content", () => {
    render(
      <PCard title="Complex Card">
        <div data-testid="complex-content">
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
        </div>
      </PCard>,
    );

    expect(screen.getByTestId("complex-content")).toBeInTheDocument();
    expect(screen.getByText("Paragraph 1")).toBeInTheDocument();
    expect(screen.getByText("Paragraph 2")).toBeInTheDocument();
  });

  it("should pass through HTML attributes", () => {
    render(
      <PCard title="Test" data-testid="card-element" id="test-card">
        Content
      </PCard>,
    );

    const card = screen.getByTestId("card-element");
    expect(card).toHaveAttribute("id", "test-card");
  });

  it("should have proper structure with header and content sections", () => {
    render(<PCard title="Structured Card">Main Content</PCard>);

    const cardElement = screen.getByText(/Structured Card/).closest("div");
    expect(cardElement).toBeInTheDocument();

    expect(screen.getByText("Main Content")).toBeInTheDocument();
  });
});
