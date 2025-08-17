import { render, screen, fireEvent } from "@testing-library/react";
import { PInput } from "./input";
import { describe, it, expect, vi } from "vitest";

describe("PInput Component", () => {
  describe("Basic Rendering", () => {
    it("should render with label and placeholder", () => {
      render(<PInput label="Nome" placeholder="Digite seu nome" />);
      expect(screen.getByText("Nome")).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText("Digite seu nome"),
      ).toBeInTheDocument();
    });

    it("should render without label", () => {
      render(<PInput placeholder="Apenas placeholder" />);
      expect(
        screen.getByPlaceholderText("Apenas placeholder"),
      ).toBeInTheDocument();
    });

    it("should render as input element", () => {
      render(<PInput label="Test" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
  });

  describe("Visual Variants", () => {
    it("should apply primary variant by default", () => {
      render(<PInput label="Primary" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-gray-300");
    });

    it("should apply quantum variant correctly", () => {
      render(<PInput label="Quantum" variant="quantum" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-gradient-to-r");
    });

    it("should apply glass variant correctly", () => {
      render(<PInput label="Glass" variant="glass" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("bg-white/10", "backdrop-blur-sm");
    });

    it("should apply minimal variant correctly", () => {
      render(<PInput label="Minimal" variant="minimal" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-0", "border-b-2", "rounded-none");
    });
  });

  describe("Input Types", () => {
    it("should render email input type", () => {
      render(<PInput label="Email" type="email" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("type", "email");
    });

    it("should render password input type", () => {
      render(<PInput label="Password" type="password" />);
      const input = screen.getByLabelText("Password");
      expect(input).toHaveAttribute("type", "password");
    });

    it("should render number input type", () => {
      render(<PInput label="Number" type="number" />);
      const input = screen.getByRole("spinbutton");
      expect(input).toHaveAttribute("type", "number");
    });
  });

  describe("Special Effects", () => {
    it("should apply glow effect when enabled", () => {
      render(<PInput label="Glow" glow />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("shadow-lg");
    });

    it("should not apply glow effect by default", () => {
      render(<PInput label="Normal" />);
      const input = screen.getByRole("textbox");
      expect(input).not.toHaveClass("shadow-lg");
    });
  });

  describe("Icons", () => {
    it("should render left icon", () => {
      render(
        <PInput
          label="Com Ícone"
          leftIcon={<span data-testid="left-icon">🔍</span>}
        />,
      );
      expect(screen.getByTestId("left-icon")).toBeInTheDocument();

      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("pl-10");
    });

    it("should render right icon", () => {
      render(
        <PInput
          label="Com Ícone"
          rightIcon={<span data-testid="right-icon">⚡</span>}
        />,
      );
      expect(screen.getByTestId("right-icon")).toBeInTheDocument();

      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("pr-10");
    });

    it("should render both icons", () => {
      render(
        <PInput
          label="Com Ambos"
          leftIcon={<span data-testid="left-icon">🔍</span>}
          rightIcon={<span data-testid="right-icon">⚡</span>}
        />,
      );

      expect(screen.getByTestId("left-icon")).toBeInTheDocument();
      expect(screen.getByTestId("right-icon")).toBeInTheDocument();

      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("pl-10", "pr-10");
    });
  });

  describe("Input States", () => {
    it("should show error message", () => {
      render(<PInput label="Email" error="Email inválido" />);
      expect(screen.getByText(/Email inválido/)).toBeInTheDocument();
      expect(screen.getByText("⚠️")).toBeInTheDocument();

      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-danger");
    });

    it("should show success message", () => {
      render(<PInput label="Email" success="Email válido" />);
      expect(screen.getByText(/Email válido/)).toBeInTheDocument();
      expect(screen.getByText("✨")).toBeInTheDocument();

      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-success");
    });

    it("should prioritize error over success", () => {
      render(<PInput label="Test" error="Erro" success="Sucesso" />);
      expect(screen.getByText(/Erro/)).toBeInTheDocument();
      expect(screen.queryByText(/Sucesso/)).not.toBeInTheDocument();
    });

    it("should be disabled when disabled prop is true", () => {
      render(<PInput label="Desabilitado" disabled />);
      const input = screen.getByRole("textbox");
      expect(input).toBeDisabled();
      expect(input).toHaveClass("opacity-50", "cursor-not-allowed");
    });
  });

  describe("Required Field", () => {
    it("should show asterisk when required is true", () => {
      render(<PInput label="Campo Obrigatório" required />);
      expect(screen.getByText("*")).toBeInTheDocument();
    });

    it("should not show asterisk by default", () => {
      render(<PInput label="Campo Normal" />);
      expect(screen.queryByText("*")).not.toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    it("should call onFocus when focused", () => {
      const handleFocus = vi.fn();
      render(<PInput label="Focável" onFocus={handleFocus} />);

      const input = screen.getByRole("textbox");
      fireEvent.focus(input);

      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it("should call onBlur when loses focus", () => {
      const handleBlur = vi.fn();
      render(<PInput label="Blur" onBlur={handleBlur} />);

      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.blur(input);

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it("should call onChange when value changes", () => {
      const handleChange = vi.fn();
      render(<PInput label="Change" onChange={handleChange} />);

      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "novo valor" } });

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("should update value correctly", () => {
      render(<PInput label="Valor" defaultValue="inicial" />);

      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("inicial");

      fireEvent.change(input, { target: { value: "atualizado" } });
      expect(input.value).toBe("atualizado");
    });
  });

  describe("Customization", () => {
    it("should apply custom className", () => {
      render(<PInput label="Custom" className="custom-class" />);
      const container =
        screen.getByRole("textbox").parentElement?.parentElement;
      expect(container).toHaveClass("custom-class");
    });

    it("should preserve default classes with custom className", () => {
      render(<PInput label="Custom" className="custom-class" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("w-full", "px-4", "py-3", "rounded-lg");
    });
  });

  describe("Accessibility", () => {
    it("should associate label with input correctly", () => {
      render(<PInput label="Nome Completo" />);
      const input = screen.getByRole("textbox");
      const label = screen.getByText("Nome Completo");

      expect(input).toHaveAttribute("id");
      expect(label).toHaveAttribute("for", input.getAttribute("id"));
    });

    it("should support ARIA properties", () => {
      render(
        <PInput
          label="Acessível"
          aria-describedby="description"
          aria-invalid="true"
        />,
      );
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("aria-describedby", "description");
      expect(input).toHaveAttribute("aria-invalid", "true");
    });

    it("should have visible focus", () => {
      render(<PInput label="Focável" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("focus:outline-none", "focus:ring-2");
    });
  });

  describe("Visual States", () => {
    it("should change label color when focused", () => {
      render(<PInput label="Label Interativo" />);
      const input = screen.getByRole("textbox");
      const label = screen.getByText("Label Interativo");

      fireEvent.focus(input);
      expect(label).toHaveClass("text-primary");
    });

    it("should change icon colors when focused", () => {
      render(
        <PInput
          label="Com Ícone"
          leftIcon={<span data-testid="icon">🔍</span>}
        />,
      );

      const input = screen.getByRole("textbox");
      fireEvent.focus(input);

      const iconElement = screen.getByTestId("icon");
      const hasTextPrimary =
        iconElement.className.includes("text-primary") ||
        iconElement.parentElement?.className.includes("text-primary");

      expect(hasTextPrimary).toBeTruthy();
    });
  });
});
