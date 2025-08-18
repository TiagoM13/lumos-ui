import type { Meta, StoryObj } from "@storybook/react-vite";
import { PInput } from "./input";

const meta: Meta<typeof PInput> = {
  title: "⚡ Photon UI/PInput",
  component: PInput,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "🚀 PInput - Campo de entrada inteligente com validação em tempo real e efeitos visuais.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label do campo",
    },
    placeholder: {
      control: "text",
      description: "Placeholder do campo",
    },
    variant: {
      control: "select",
      options: ["primary", "quantum", "glass", "minimal"],
      description: "Variante visual do input",
    },
    error: {
      control: "text",
      description: "Mensagem de erro",
    },
    success: {
      control: "text",
      description: "Mensagem de sucesso",
    },
    helperText: {
      control: "text",
      description: "Texto de ajuda",
    },
    glow: {
      control: "boolean",
      description: "Adiciona efeito de brilho",
    },
    disabled: {
      control: "boolean",
      description: "Estado desabilitado",
    },
    required: {
      control: "boolean",
      description: "Campo obrigatório",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PInput>;

// 🚀 Story principal
export const Default: Story = {
  args: {
    label: "Nome Completo",
    placeholder: "Digite seu nome...",
    variant: "primary",
  },
};

// ⚡ Com efeito quântico
export const Quantum: Story = {
  args: {
    label: "⚡ Campo Quântico",
    placeholder: "Energia pura...",
    variant: "quantum",
    glow: true,
  },
};

// 🌟 Efeito vidro
export const Glass: Story = {
  args: {
    label: "🌟 Campo de Vidro",
    placeholder: "Transparência total...",
    variant: "glass",
    glow: true,
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#1f2937" }],
    },
  },
};

// 📝 Minimalista
export const Minimal: Story = {
  args: {
    label: "📝 Campo Minimalista",
    placeholder: "Simplicidade...",
    variant: "minimal",
  },
};

// 🎯 Tipos de input
export const InputTypes: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <PInput
        label="📧 Email"
        type="email"
        placeholder="seu@email.com"
        leftIcon="✉️"
      />
      <PInput
        label="🔒 Senha"
        type="password"
        placeholder="••••••••"
        leftIcon="🔐"
      />
      <PInput
        label="📞 Telefone"
        type="tel"
        placeholder="(11) 99999-9999"
        leftIcon="📱"
      />
      <PInput label="🔢 Número" type="number" placeholder="123" leftIcon="🔢" />
      <PInput label="📅 Data" type="date" leftIcon="📅" />
    </div>
  ),
};

// ⚠️ Estados de validação
export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <PInput
        label="✅ Campo Válido"
        placeholder="email@exemplo.com"
        success="Email válido!"
        defaultValue="usuario@exemplo.com"
      />
      <PInput
        label="❌ Campo com Erro"
        placeholder="email@exemplo.com"
        error="Email inválido!"
        defaultValue="email-invalido"
      />
      <PInput
        label="💡 Campo com Ajuda"
        placeholder="Digite sua mensagem..."
        helperText="Mínimo de 10 caracteres"
      />
    </div>
  ),
};

// 🎯 Com ícones
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <PInput
        label="🔍 Buscar"
        placeholder="Procurar..."
        leftIcon="🔍"
        variant="quantum"
        glow
      />
      <PInput
        label="💰 Valor"
        placeholder="0,00"
        leftIcon="💰"
        rightIcon="⚡"
        variant="primary"
      />
      <PInput
        label="🌍 Website"
        placeholder="https://..."
        leftIcon="🌐"
        rightIcon="🔗"
        variant="glass"
      />
    </div>
  ),
};

// 📱 Tamanhos diferentes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <PInput
        label="Pequeno"
        placeholder="Campo pequeno..."
        className="text-sm"
        style={{ padding: "8px 12px" }}
      />
      <PInput label="Médio (padrão)" placeholder="Campo médio..." />
      <PInput
        label="Grande"
        placeholder="Campo grande..."
        className="text-lg"
        style={{ padding: "16px 20px" }}
      />
    </div>
  ),
};

// 🎨 Todas as variantes
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <PInput
        label="Primary"
        placeholder="Variante primária..."
        variant="primary"
      />
      <PInput
        label="⚡ Quantum"
        placeholder="Campo quântico..."
        variant="quantum"
        glow
      />
      <PInput label="🌟 Glass" placeholder="Efeito vidro..." variant="glass" />
      <PInput
        label="📝 Minimal"
        placeholder="Design minimalista..."
        variant="minimal"
      />
    </div>
  ),
};

// 🎮 Playground interativo
export const Playground: Story = {
  args: {
    label: "🎮 Campo Interativo",
    placeholder: "Digite algo incrível...",
    variant: "quantum",
    glow: true,
    leftIcon: "⚡",
    helperText: "Este é um campo de teste interativo",
  },
};
