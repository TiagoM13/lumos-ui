import { type Meta, type StoryObj } from "@storybook/react";
import { PButton, type ButtonVariant, type ButtonSize } from "./button";

const meta: Meta<typeof PButton> = {
  title: "⚡ Photon UI/PButton",
  component: PButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "🚀 PButton - Botão do futuro com efeitos quânticos e performance otimizada.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "quantum",
        "plasma",
        "laser",
        "photon",
        "success",
        "danger",
        "warning",
        "dark",
        "light",
      ] as ButtonVariant[],
      description: "Variante visual do botão",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"] as ButtonSize[],
      description: "Tamanho do botão",
    },
    fullWidth: {
      control: "boolean",
      description: "Ocupa toda a largura disponível",
    },
    glow: {
      control: "boolean",
      description: "Adiciona efeito de brilho",
    },
    ripple: {
      control: "boolean",
      description: "Adiciona efeito de ondulação no hover",
    },
    particles: {
      control: "boolean",
      description: "Adiciona animação de partículas",
    },
    loading: {
      control: "boolean",
      description: "Estado de carregamento",
    },
    disabled: {
      control: "boolean",
      description: "Estado desabilitado",
    },
    children: {
      control: "text",
      description: "Conteúdo do botão",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PButton>;

// 🚀 Story principal
export const Default: Story = {
  args: {
    children: "Botão Padrão",
    variant: "primary",
    size: "md",
    fullWidth: false,
  },
};

// ✨ Variantes especiais
export const Quantum: Story = {
  args: {
    children: "⚡ Efeito Quântico",
    variant: "quantum",
    size: "lg",
    glow: true,
  },
};

export const Plasma: Story = {
  args: {
    children: "🔥 Plasma Ardente",
    variant: "plasma",
    size: "lg",
    glow: true,
    ripple: true,
  },
};

export const Laser: Story = {
  args: {
    children: "💫 Borda Laser",
    variant: "laser",
    size: "md",
    glow: true,
  },
};

export const Photon: Story = {
  args: {
    children: "✨ Efeito Photon",
    variant: "photon",
    size: "md",
    glow: true,
  },
};

// 📏 Tamanhos
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <PButton size="sm">Pequeno</PButton>
      <PButton size="md">Médio</PButton>
      <PButton size="lg">Grande</PButton>
      <PButton size="xl">Extra Grande</PButton>
    </div>
  ),
};

// 🎨 Todas as variantes
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <PButton variant="primary">Primary</PButton>
      <PButton variant="secondary">Secondary</PButton>
      <PButton variant="quantum" glow>
        Quantum ⚡
      </PButton>
      <PButton variant="plasma" glow>
        Plasma 🔥
      </PButton>
      <PButton variant="laser">Laser 💫</PButton>
      <PButton variant="photon" glow>
        Photon ✨
      </PButton>
      <PButton variant="success">Success ✅</PButton>
      <PButton variant="danger">Danger ❌</PButton>
      <PButton variant="warning">Warning ⚠️</PButton>
      <PButton variant="dark">Dark 🌑</PButton>
      <PButton variant="light">Light ☀️</PButton>
    </div>
  ),
};

// ⚡ Com efeitos especiais
export const WithEffects: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <PButton variant="primary" glow>
        🌟 Com Brilho
      </PButton>
      <PButton variant="quantum" ripple>
        🌊 Com Ondulação
      </PButton>
      <PButton variant="plasma" particles>
        ✨ Com Partículas
      </PButton>
      <PButton variant="photon" glow ripple particles>
        🚀 Todos os Efeitos
      </PButton>
    </div>
  ),
};

// 🔄 Estados especiais
export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <PButton variant="primary">Normal</PButton>
      <PButton variant="primary" loading>
        Carregando...
      </PButton>
      <PButton variant="primary" disabled>
        Desabilitado
      </PButton>
    </div>
  ),
};

// 📱 Largura total
export const FullWidth: Story = {
  args: {
    children: "🚀 Botão de Largura Total",
    variant: "quantum",
    size: "lg",
    fullWidth: true,
    glow: true,
  },
};

// 🎯 Com ícones
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <PButton variant="primary" leftIcon={<span>🚀</span>}>
        Com Ícone à Esquerda
      </PButton>
      <PButton variant="secondary" rightIcon={<span>⚡</span>}>
        Com Ícone à Direita
      </PButton>
      <PButton
        variant="quantum"
        leftIcon={<span>✨</span>}
        rightIcon={<span>🌟</span>}
        glow
      >
        Com Ambos os Ícones
      </PButton>
    </div>
  ),
};

// 🎪 Playground interativo
export const Playground: Story = {
  args: {
    children: "🎮 Teste Interativo",
    variant: "quantum",
    size: "lg",
    glow: true,
    ripple: true,
    fullWidth: false,
  },
};
