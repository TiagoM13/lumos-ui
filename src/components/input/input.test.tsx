import { render, screen, fireEvent } from "@testing-library/react";
import { PInput } from "./input";
import { describe, it, expect, vi } from "vitest";

describe("🚀 PInput", () => {
  describe("Renderização básica", () => {
    it("renderiza com label e placeholder", () => {
      render(<PInput label="Nome" placeholder="Digite seu nome" />);
      expect(screen.getByText("Nome")).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText("Digite seu nome"),
      ).toBeInTheDocument();
    });

    it("renderiza sem label", () => {
      render(<PInput placeholder="Apenas placeholder" />);
      expect(
        screen.getByPlaceholderText("Apenas placeholder"),
      ).toBeInTheDocument();
    });

    it("renderiza como elemento input", () => {
      render(<PInput label="Test" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
  });

  describe("Variantes visuais", () => {
    it("aplica variante primary por padrão", () => {
      render(<PInput label="Primary" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-gray-300");
    });

    it("aplica variante quantum corretamente", () => {
      render(<PInput label="Quantum" variant="quantum" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-gradient-to-r");
    });

    it("aplica variante glass corretamente", () => {
      render(<PInput label="Glass" variant="glass" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("bg-white/10", "backdrop-blur-sm");
    });

    it("aplica variante minimal corretamente", () => {
      render(<PInput label="Minimal" variant="minimal" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-0", "border-b-2", "rounded-none");
    });
  });

  describe("Tipos de input", () => {
    it("renderiza input tipo email", () => {
      render(<PInput label="Email" type="email" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("type", "email");
    });

    it("renderiza input tipo password", () => {
      render(<PInput label="Password" type="password" />);
      const input = screen.getByLabelText("Password");
      expect(input).toHaveAttribute("type", "password");
    });

    it("renderiza input tipo number", () => {
      render(<PInput label="Number" type="number" />);
      const input = screen.getByRole("spinbutton");
      expect(input).toHaveAttribute("type", "number");
    });
  });

  describe("Efeitos especiais", () => {
    it("aplica efeito glow quando habilitado", () => {
      render(<PInput label="Glow" glow />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("shadow-lg");
    });

    it("não aplica efeito glow por padrão", () => {
      render(<PInput label="Normal" />);
      const input = screen.getByRole("textbox");
      expect(input).not.toHaveClass("shadow-lg");
    });
  });

  describe("Ícones", () => {
    it("renderiza ícone à esquerda", () => {
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

    it("renderiza ícone à direita", () => {
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

    it("renderiza ambos os ícones", () => {
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

  describe("Estados do input", () => {
    it("mostra mensagem de erro", () => {
      render(<PInput label="Email" error="Email inválido" />);
      expect(screen.getByText("⚠️ Email inválido")).toBeInTheDocument();

      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-danger");
    });

    it("mostra mensagem de sucesso", () => {
      render(<PInput label="Email" success="Email válido" />);
      expect(screen.getByText("✨ Email válido")).toBeInTheDocument();

      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-success");
    });

    it("mostra texto de ajuda", () => {
      render(<PInput label="Senha" helperText="Mínimo 8 caracteres" />);
      expect(screen.getByText("💡 Mínimo 8 caracteres")).toBeInTheDocument();
    });

    it("prioriza erro sobre sucesso", () => {
      render(<PInput label="Test" error="Erro" success="Sucesso" />);
      expect(screen.getByText("⚠️ Erro")).toBeInTheDocument();
      expect(screen.queryByText("✨ Sucesso")).not.toBeInTheDocument();
    });

    it("fica desabilitado quando disabled é true", () => {
      render(<PInput label="Desabilitado" disabled />);
      const input = screen.getByRole("textbox");
      expect(input).toBeDisabled();
      expect(input).toHaveClass("opacity-50", "cursor-not-allowed");
    });
  });

  describe("Campo obrigatório", () => {
    it("mostra asterisco quando required é true", () => {
      render(<PInput label="Campo Obrigatório" required />);
      expect(screen.getByText("*")).toBeInTheDocument();
    });

    it("não mostra asterisco por padrão", () => {
      render(<PInput label="Campo Normal" />);
      expect(screen.queryByText("*")).not.toBeInTheDocument();
    });
  });

  describe("Interações", () => {
    it("chama onFocus quando focado", () => {
      const handleFocus = vi.fn();
      render(<PInput label="Focável" onFocus={handleFocus} />);

      const input = screen.getByRole("textbox");
      fireEvent.focus(input);

      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it("chama onBlur quando perde o foco", () => {
      const handleBlur = vi.fn();
      render(<PInput label="Blur" onBlur={handleBlur} />);

      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.blur(input);

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it("chama onChange quando o valor muda", () => {
      const handleChange = vi.fn();
      render(<PInput label="Change" onChange={handleChange} />);

      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "novo valor" } });

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("atualiza valor corretamente", () => {
      render(<PInput label="Valor" defaultValue="inicial" />);

      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("inicial");

      fireEvent.change(input, { target: { value: "atualizado" } });
      expect(input.value).toBe("atualizado");
    });
  });

  describe("Customização", () => {
    it("aplica className personalizada", () => {
      render(<PInput label="Custom" className="custom-class" />);
      const container =
        screen.getByRole("textbox").parentElement?.parentElement;
      expect(container).toHaveClass("custom-class");
    });

    it("preserva classes padrão com className personalizada", () => {
      render(<PInput label="Custom" className="custom-class" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("w-full", "px-4", "py-3", "rounded-lg");
    });
  });

  describe("Acessibilidade", () => {
    it("associa label com input corretamente", () => {
      render(<PInput label="Nome Completo" />);
      const input = screen.getByRole("textbox");
      const label = screen.getByText("Nome Completo");

      expect(input).toHaveAttribute("id");
      expect(label).toHaveAttribute("for", input.getAttribute("id"));
    });

    it("suporta propriedades ARIA", () => {
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

    it("tem foco visível", () => {
      render(<PInput label="Focável" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("focus:outline-none", "focus:ring-2");
    });
  });

  describe("Estados visuais", () => {
    it("altera cor do label ao focar", () => {
      render(<PInput label="Label Interativo" />);
      const input = screen.getByRole("textbox");
      const label = screen.getByText("Label Interativo");

      fireEvent.focus(input);
      expect(label).toHaveClass("text-primary");
    });

    it("altera cor dos ícones ao focar", () => {
      render(
        <PInput
          label="Com Ícone"
          leftIcon={<span data-testid="icon">🔍</span>}
        />,
      );

      const input = screen.getByRole("textbox");
      fireEvent.focus(input);

      const iconContainer = screen.getByTestId("icon").parentElement;
      expect(iconContainer?.querySelector("span")).toHaveClass("text-primary");
    });
  });
});
