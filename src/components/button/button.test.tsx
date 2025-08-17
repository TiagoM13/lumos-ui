import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PButton } from "./button";

describe("PButton Component", () => {
  it("should render with children text", () => {
    render(<PButton>Click Me</PButton>);
    expect(
      screen.getByRole("button", { name: "Click Me" }),
    ).toBeInTheDocument();
  });

  it("should call onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<PButton onClick={handleClick}>Click Me</PButton>);

    const button = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should apply primary variant class by default", () => {
    render(<PButton>Primary Button</PButton>);
    const button = screen.getByRole("button", { name: "Primary Button" });
    expect(button).toHaveClass("bg-primary");
  });

  it("should apply secondary variant class when specified", () => {
    render(<PButton variant="secondary">Secondary Button</PButton>);
    const button = screen.getByRole("button", { name: "Secondary Button" });
    expect(button).toHaveClass("bg-secondary");
  });

  it("should apply quantum variant with gradient classes", () => {
    render(<PButton variant="quantum">Quantum Button</PButton>);
    const button = screen.getByRole("button", { name: "Quantum Button" });
    expect(button).toHaveClass(
      "bg-gradient-to-r",
      "from-primary",
      "to-secondary",
    );
  });

  it("should apply plasma variant with accent gradient", () => {
    render(<PButton variant="plasma">Plasma Button</PButton>);
    const button = screen.getByRole("button", { name: "Plasma Button" });
    expect(button).toHaveClass("bg-gradient-to-r", "from-accent", "to-pink");
  });

  it("should apply medium size class by default", () => {
    render(<PButton>Medium Button</PButton>);
    const button = screen.getByRole("button", { name: "Medium Button" });
    expect(button).toHaveClass("px-4", "py-2", "min-h-[40px]");
  });

  it("should apply large size class when specified", () => {
    render(<PButton size="lg">Large Button</PButton>);
    const button = screen.getByRole("button", { name: "Large Button" });
    expect(button).toHaveClass("px-6", "py-3", "min-h-[48px]");
  });

  it("should apply xl size class when specified", () => {
    render(<PButton size="xl">XL Button</PButton>);
    const button = screen.getByRole("button", { name: "XL Button" });
    expect(button).toHaveClass("px-8", "py-4", "min-h-[56px]");
  });

  it("should apply full width class when fullWidth is true", () => {
    render(<PButton fullWidth>Full Width Button</PButton>);
    const button = screen.getByRole("button", { name: "Full Width Button" });
    expect(button).toHaveClass("w-full");
  });

  it("should be disabled when disabled prop is true", () => {
    render(<PButton disabled>Disabled Button</PButton>);
    const button = screen.getByRole("button", { name: "Disabled Button" });
    expect(button).toBeDisabled();
  });

  it("should be disabled when loading is true", () => {
    render(<PButton loading>Loading Button</PButton>);
    const button = screen.getByRole("button", { name: "Loading Button" });
    expect(button).toBeDisabled();
  });

  it("should show loading spinner when loading is true", () => {
    render(<PButton loading>Loading Button</PButton>);
    const spinner = screen.getByRole("button").querySelector("svg");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("animate-spin");
  });

  it("should render left icon when provided", () => {
    const LeftIcon = () => <span data-testid="left-icon">←</span>;
    render(<PButton leftIcon={<LeftIcon />}>With Left Icon</PButton>);
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("should render right icon when provided", () => {
    const RightIcon = () => <span data-testid="right-icon">→</span>;
    render(<PButton rightIcon={<RightIcon />}>With Right Icon</PButton>);
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("should not render icons when loading", () => {
    const LeftIcon = () => <span data-testid="left-icon">←</span>;
    const RightIcon = () => <span data-testid="right-icon">→</span>;
    render(
      <PButton loading leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>
        Loading
      </PButton>,
    );
    expect(screen.queryByTestId("left-icon")).not.toBeInTheDocument();
    expect(screen.queryByTestId("right-icon")).not.toBeInTheDocument();
  });

  it("should apply custom className", () => {
    render(<PButton className="custom-class">Custom Button</PButton>);
    const button = screen.getByRole("button", { name: "Custom Button" });
    expect(button).toHaveClass("custom-class");
  });

  it("should apply focus ring classes", () => {
    render(<PButton>Focus Button</PButton>);
    const button = screen.getByRole("button", { name: "Focus Button" });
    expect(button).toHaveClass(
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-offset-2",
    );
  });

  it("should apply laser variant with border styling", () => {
    render(<PButton variant="laser">Laser Button</PButton>);
    const button = screen.getByRole("button", { name: "Laser Button" });
    expect(button).toHaveClass("border-2", "border-primary", "bg-transparent");
  });

  it("should apply photon variant with backdrop blur", () => {
    render(<PButton variant="photon">Photon Button</PButton>);
    const button = screen.getByRole("button", { name: "Photon Button" });
    expect(button).toHaveClass("bg-white/10", "backdrop-blur-sm", "border");
  });
});
