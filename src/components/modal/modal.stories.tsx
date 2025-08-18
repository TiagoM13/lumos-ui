import React, { Fragment, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PModal } from "./modal";
import { PButton } from "../button/button";
import { PInput } from "../input/input";

const meta: Meta<typeof PModal> = {
  title: "⚡ Photon UI/PModal",
  component: PModal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "🚀 PModal - Modal cinematográfico com animações suaves e efeitos futurísticos.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Título do modal",
    },
    subtitle: {
      control: "text",
      description: "Subtítulo do modal",
    },
    variant: {
      control: "select",
      options: ["default", "glass", "quantum", "minimal"],
      description: "Variante visual do modal",
    },
    animation: {
      control: "select",
      options: ["fade", "slide", "quantum", "zoom"],
      description: "Tipo de animação de entrada",
    },
    backdrop: {
      control: "select",
      options: ["blur", "dark", "transparent"],
      description: "Tipo de backdrop",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
      description: "Tamanho do modal",
    },
    glow: {
      control: "boolean",
      description: "Adiciona efeito de brilho",
    },
    closeOnBackdrop: {
      control: "boolean",
      description: "Pode fechar clicando no backdrop",
    },
    closeOnEscape: {
      control: "boolean",
      description: "Pode fechar com ESC",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PModal>;

// 🚀 Componente wrapper para controlar estado
const ModalWrapper: React.FC<{
  variant?: "default" | "glass" | "quantum" | "minimal";
  animation?: "fade" | "slide" | "quantum" | "zoom";
  backdrop?: "blur" | "dark" | "transparent";
  size?: "sm" | "md" | "lg" | "xl" | "full";
  glow?: boolean;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  footerActions?: React.ReactNode;
}> = ({
  variant = "default",
  animation = "fade",
  backdrop = "blur",
  size = "md",
  glow = false,
  title = "Modal Exemplo",
  subtitle,
  children = "Este é o conteúdo do modal.",
  footerActions,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <PButton onClick={() => setIsOpen(true)} variant="quantum" glow>
        🚀 Abrir Modal
      </PButton>
      <PModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        subtitle={subtitle}
        variant={variant}
        animation={animation}
        backdrop={backdrop}
        size={size}
        glow={glow}
        footerActions={footerActions}
      >
        {children}
      </PModal>
    </Fragment>
  );
};

// 🚀 Story principal
export const Default: Story = {
  render: () => <ModalWrapper />,
};

// ⚡ Modal quântico
export const Quantum: Story = {
  render: () => (
    <ModalWrapper
      title="⚡ Portal Quântico"
      subtitle="Entrada para outra dimensão"
      variant="quantum"
      animation="quantum"
      glow
      footerActions={
        <div className="flex gap-2">
          <PButton variant="danger" onClick={() => {}}>
            ❌ Cancelar
          </PButton>
          <PButton variant="quantum" glow onClick={() => {}}>
            ⚡ Ativar Portal
          </PButton>
        </div>
      }
    >
      <div className="space-y-4">
        <p>🌌 Bem-vindo ao portal quântico mais avançado do universo!</p>
        <p>
          Este modal utiliza as mais recentes tecnologias de partículas
          subatômicas para proporcionar uma experiência interdimensional única.
        </p>
        <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
          <p className="font-semibold">⚠️ Aviso Importante:</p>
          <p className="text-sm mt-1">
            O uso deste portal pode resultar em viagem no tempo acidental.
          </p>
        </div>
      </div>
    </ModalWrapper>
  ),
};

// 🌟 Modal de vidro
export const Glass: Story = {
  render: () => (
    <ModalWrapper
      title="🌟 Interface Transparente"
      subtitle="Glassmorphism em sua forma mais pura"
      variant="glass"
      animation="fade"
      backdrop="blur"
      glow
      footerActions={
        <PButton variant="photon" glow>
          ✨ Entendido
        </PButton>
      }
    >
      <div className="space-y-4">
        <p>
          Este modal demonstra o efeito glassmorphism com transparência
          avançada.
        </p>
        <p>
          🔬 A tecnologia de vidro quântico permite uma experiência visual
          imersiva mantendo a funcionalidade completa.
        </p>
      </div>
    </ModalWrapper>
  ),
  parameters: {
    backgrounds: {
      default: "gradient",
      values: [
        {
          name: "gradient",
          value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        },
      ],
    },
  },
};

// 📝 Modal minimalista
export const Minimal: Story = {
  render: () => (
    <ModalWrapper
      title="📝 Design Limpo"
      variant="minimal"
      animation="slide"
      size="sm"
    >
      <p>Simplicidade e funcionalidade em um design minimalista.</p>
    </ModalWrapper>
  ),
};

// 🎭 Animações diferentes
export const Animations: Story = {
  render: () => {
    const [animation, setAnimation] = useState<
      "fade" | "slide" | "quantum" | "zoom"
    >("fade");
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <PButton
            variant={animation === "fade" ? "quantum" : "secondary"}
            onClick={() => setAnimation("fade")}
            size="sm"
          >
            🌫️ Fade
          </PButton>
          <PButton
            variant={animation === "slide" ? "quantum" : "secondary"}
            onClick={() => setAnimation("slide")}
            size="sm"
          >
            📱 Slide
          </PButton>
          <PButton
            variant={animation === "quantum" ? "quantum" : "secondary"}
            onClick={() => setAnimation("quantum")}
            size="sm"
          >
            ⚡ Quantum
          </PButton>
          <PButton
            variant={animation === "zoom" ? "quantum" : "secondary"}
            onClick={() => setAnimation("zoom")}
            size="sm"
          >
            🔍 Zoom
          </PButton>
        </div>

        <PButton onClick={() => setIsOpen(true)} variant="primary" glow>
          🎭 Testar Animação: {animation.toUpperCase()}
        </PButton>

        <PModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={`🎭 Animação ${animation.toUpperCase()}`}
          animation={animation}
          variant="quantum"
          glow
        >
          <p>
            Esta demonstração mostra a animação <strong>{animation}</strong> em
            ação!
          </p>
          <p className="mt-2 text-gray-600">
            Feche e teste outras animações para ver a diferença.
          </p>
        </PModal>
      </div>
    );
  },
};

// 📏 Tamanhos diferentes
export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<"sm" | "md" | "lg" | "xl" | "full">("md");
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <PButton
            variant={size === "sm" ? "quantum" : "secondary"}
            onClick={() => setSize("sm")}
            size="sm"
          >
            📱 Small
          </PButton>
          <PButton
            variant={size === "md" ? "quantum" : "secondary"}
            onClick={() => setSize("md")}
            size="sm"
          >
            💻 Medium
          </PButton>
          <PButton
            variant={size === "lg" ? "quantum" : "secondary"}
            onClick={() => setSize("lg")}
            size="sm"
          >
            🖥️ Large
          </PButton>
          <PButton
            variant={size === "xl" ? "quantum" : "secondary"}
            onClick={() => setSize("xl")}
            size="sm"
          >
            📺 Extra Large
          </PButton>
          <PButton
            variant={size === "full" ? "quantum" : "secondary"}
            onClick={() => setSize("full")}
            size="sm"
          >
            🌐 Full Screen
          </PButton>
        </div>

        <PButton onClick={() => setIsOpen(true)} variant="primary" glow>
          📏 Testar Tamanho: {size.toUpperCase()}
        </PButton>

        <PModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={`📏 Modal ${size.toUpperCase()}`}
          size={size}
          variant="quantum"
          glow
        >
          <p>
            Este modal está configurado com o tamanho <strong>{size}</strong>.
          </p>
          <p className="mt-2">
            Teste diferentes tamanhos para ver como se adapta ao conteúdo.
          </p>
          {size === "full" && (
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <p>🌐 No modo full screen, o modal ocupa quase toda a tela!</p>
            </div>
          )}
        </PModal>
      </div>
    );
  },
};

// 📝 Modal de formulário
export const FormModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Fragment>
        <PButton onClick={() => setIsOpen(true)} variant="quantum" glow>
          📝 Abrir Formulário
        </PButton>
        <PModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="📝 Formulário Quântico"
          subtitle="Preencha os dados com energia"
          variant="quantum"
          animation="quantum"
          size="lg"
          glow
          footerActions={
            <div className="flex gap-2">
              <PButton variant="secondary" onClick={() => setIsOpen(false)}>
                ❌ Cancelar
              </PButton>
              <PButton variant="quantum" glow>
                ⚡ Enviar Dados
              </PButton>
            </div>
          }
        >
          <div className="space-y-4">
            <PInput
              label="🚀 Nome Completo"
              placeholder="Digite seu nome..."
              variant="quantum"
              glow
              required
            />
            <PInput
              label="📧 Email"
              type="email"
              placeholder="seu@email.com"
              variant="primary"
              leftIcon="✉️"
            />
            <PInput
              label="🔒 Senha"
              type="password"
              placeholder="••••••••"
              variant="primary"
              leftIcon="🔐"
            />
            <PInput
              label="💭 Mensagem"
              placeholder="Conte-nos sobre sua experiência quântica..."
              variant="glass"
              helperText="Descreva sua jornada através das dimensões"
            />
          </div>
        </PModal>
      </Fragment>
    );
  },
};

// 🎮 Playground interativo
export const Playground: Story = {
  render: () => (
    <ModalWrapper
      title="🎮 Modal Interativo"
      subtitle="Teste todas as funcionalidades"
      variant="quantum"
      animation="quantum"
      backdrop="blur"
      size="lg"
      glow
      footerActions={
        <div className="flex gap-2">
          <PButton variant="danger">❌ Cancelar</PButton>
          <PButton variant="quantum" glow>
            ⚡ Confirmar
          </PButton>
        </div>
      }
    >
      <div className="space-y-4">
        <p>
          🚀 Este é um modal de demonstração onde você pode testar todas as
          funcionalidades.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold">⚡ Características:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Animações suaves</li>
              <li>• Efeitos de brilho</li>
              <li>• Backdrop blur</li>
              <li>• Responsivo</li>
            </ul>
          </div>
          <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
            <h4 className="font-semibold">🎯 Funcionalidades:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Múltiplos tamanhos</li>
              <li>• Variantes visuais</li>
              <li>• Controle de fechamento</li>
              <li>• Acessibilidade</li>
            </ul>
          </div>
        </div>
      </div>
    </ModalWrapper>
  ),
};
