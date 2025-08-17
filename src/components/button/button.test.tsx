import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PButton } from "./button";

describe("🚀 PButton", () => {
  describe("Renderização básica", () => {
    it("renderiza com children", () => {
      render(<PButton>Clique aqui</PButton>);
      expect(screen.getByText("Clique aqui")).toBeInTheDocument();
    });

    it("renderiza como elemento button", () => {
      render(<PButton>Botão</PButton>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("Variantes visuais", () => {
    it("aplica variante primary por padrão", () => {
      render(<PButton>Primary</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-primary");
    });

    it("aplica variante quantum corretamente", () => {
      render(<PButton variant="quantum">Quantum</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-gradient-to-r");
    });

    it("aplica variante laser corretamente", () => {
      render(<PButton variant="laser">Laser</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("border-2", "border-primary");
    });

    it("aplica variante success corretamente", () => {
      render(<PButton variant="success">Success</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-success");
    });
  });

  describe("Tamanhos", () => {
    it("aplica tamanho md por padrão", () => {
      render(<PButton>Médio</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("px-4", "py-2");
    });

    it("aplica tamanho sm corretamente", () => {
      render(<PButton size="sm">Pequeno</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("px-3", "py-1.5");
    });

    it("aplica tamanho lg corretamente", () => {
      render(<PButton size="lg">Grande</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("px-6", "py-3");
    });

    it("aplica tamanho xl corretamente", () => {
      render(<PButton size="xl">Extra Grande</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("px-8", "py-4");
    });
  });

  describe("Efeitos especiais", () => {
    it("aplica efeito glow quando habilitado", () => {
      render(<PButton glow>Brilhante</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("shadow-md");
    });

    it("aplica efeito ripple quando habilitado", () => {
      render(<PButton ripple>Ondulação</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("relative", "overflow-hidden");
    });

    it("aplica efeito particles quando habilitado", () => {
      render(<PButton particles>Partículas</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("animate-pulse");
    });
  });

  describe("Propriedades especiais", () => {
    it("aplica largura total quando fullWidth é true", () => {
      render(<PButton fullWidth>Largura Total</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("w-full");
    });

    it("não aplica largura total por padrão", () => {
      render(<PButton>Normal</PButton>);
      const button = screen.getByRole("button");
      expect(button).not.toHaveClass("w-full");
    });
  });

  describe("Estados do botão", () => {
    it("fica desabilitado quando disabled é true", () => {
      render(<PButton disabled>Desabilitado</PButton>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveClass("opacity-50", "cursor-not-allowed");
    });

    it("fica desabilitado quando loading é true", () => {
      render(<PButton loading>Carregando</PButton>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveClass("cursor-wait", "opacity-80");
    });

    it("mostra spinner quando loading é true", () => {
      render(<PButton loading>Carregando</PButton>);
      const spinner = screen.getByRole("button").querySelector("svg");
      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveClass("animate-spin");
    });
  });

  describe("Ícones", () => {
    it("renderiza ícone à esquerda", () => {
      render(
        <PButton leftIcon={<span data-testid="left-icon">🚀</span>}>
          Com Ícone
        </PButton>,
      );
      expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    });

    it("renderiza ícone à direita", () => {
      render(
        <PButton rightIcon={<span data-testid="right-icon">⚡</span>}>
          Com Ícone
        </PButton>,
      );
      expect(screen.getByTestId("right-icon")).toBeInTheDocument();
    });

    it("não renderiza ícones quando loading", () => {
      render(
        <PButton
          loading
          leftIcon={<span data-testid="left-icon">🚀</span>}
          rightIcon={<span data-testid="right-icon">⚡</span>}
        >
          Carregando
        </PButton>,
      );
      expect(screen.queryByTestId("left-icon")).not.toBeInTheDocument();
      expect(screen.queryByTestId("right-icon")).not.toBeInTheDocument();
    });
  });

  describe("Interações", () => {
    it("chama onClick quando clicado", () => {
      const handleClick = vi.fn();
      render(<PButton onClick={handleClick}>Clicável</PButton>);

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("não chama onClick quando desabilitado", () => {
      const handleClick = vi.fn();
      render(
        <PButton onClick={handleClick} disabled>
          Desabilitado
        </PButton>,
      );

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("não chama onClick quando em loading", () => {
      const handleClick = vi.fn();
      render(
        <PButton onClick={handleClick} loading>
          Carregando
        </PButton>,
      );

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Customização", () => {
    it("aplica className personalizada", () => {
      render(<PButton className="custom-class">Customizado</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-class");
    });

    it("preserva classes padrão com className personalizada", () => {
      render(<PButton className="custom-class">Customizado</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-class", "bg-primary", "rounded-lg");
    });
  });

  describe("Acessibilidade", () => {
    it("suporta propriedades ARIA", () => {
      render(
        <PButton aria-label="Botão especial" aria-describedby="description">
          Acessível
        </PButton>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-label", "Botão especial");
      expect(button).toHaveAttribute("aria-describedby", "description");
    });

    it("tem foco visível", () => {
      render(<PButton>Focável</PButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("focus:outline-none", "focus:ring-2");
    });
  });
});
