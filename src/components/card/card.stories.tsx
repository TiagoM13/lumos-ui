import type { Meta, StoryObj } from "@storybook/react-vite";
import { PCard } from "./card";
import { PButton } from "../button/button";

const meta: Meta<typeof PCard> = {
  title: "⚡ Photon UI/PCard",
  component: PCard,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "🚀 PCard - Container futurístico com efeitos visuais avançados e animações suaves.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Título do card",
    },
    subtitle: {
      control: "text",
      description: "Subtítulo do card",
    },
    variant: {
      control: "select",
      options: ["default", "glass", "quantum", "minimal", "elevated"],
      description: "Variante visual do card",
    },
    hover: {
      control: "select",
      options: ["none", "lift", "float", "glow", "scale"],
      description: "Efeito ao passar o mouse",
    },
    glow: {
      control: "boolean",
      description: "Adiciona efeito de brilho",
    },
    padding: {
      control: "boolean",
      description: "Se deve ter padding interno",
    },
    children: {
      control: "text",
      description: "Conteúdo do card",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PCard>;

// 🚀 Story principal
export const Default: Story = {
  args: {
    title: "Card Padrão",
    children: "Este é um card simples com o design padrão do Photon UI.",
    variant: "default",
  },
};

// ⚡ Card quântico
export const Quantum: Story = {
  args: {
    title: "⚡ Card Quântico",
    subtitle: "Powered by quantum energy",
    children:
      "Este card utiliza efeitos quânticos para uma aparência futurística e energética.",
    variant: "quantum",
    hover: "float",
    glow: true,
  },
};

// 🌟 Card de vidro
export const Glass: Story = {
  args: {
    title: "🌟 Card de Vidro",
    subtitle: "Transparency at its finest",
    children:
      "Um card com efeito glassmorphism para um visual moderno e elegante.",
    variant: "glass",
    hover: "glow",
    glow: true,
  },
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

// 📝 Card minimalista
export const Minimal: Story = {
  args: {
    title: "📝 Design Minimalista",
    children: "Simplicidade e elegância em um design limpo e funcional.",
    variant: "minimal",
    hover: "lift",
  },
};

// 🏔️ Card elevado
export const Elevated: Story = {
  args: {
    title: "🏔️ Card Elevado",
    subtitle: "High above the clouds",
    children: "Um card com sombra pronunciada para se destacar na interface.",
    variant: "elevated",
    hover: "scale",
    glow: true,
  },
};

// 🎨 Todas as variantes
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PCard title="Default" variant="default">
        Card com design padrão
      </PCard>
      <PCard title="🌟 Glass" variant="glass" glow>
        Card com efeito de vidro
      </PCard>
      <PCard title="⚡ Quantum" variant="quantum" glow>
        Card com energia quântica
      </PCard>
      <PCard title="📝 Minimal" variant="minimal">
        Design minimalista
      </PCard>
      <PCard title="🏔️ Elevated" variant="elevated" glow>
        Card com elevação
      </PCard>
    </div>
  ),
};

// ✨ Efeitos de hover
export const HoverEffects: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PCard title="🚁 Lift" hover="lift" variant="default">
        Passa o mouse para elevar
      </PCard>
      <PCard title="🎈 Float" hover="float" variant="quantum" glow>
        Efeito de flutuação suave
      </PCard>
      <PCard title="✨ Glow" hover="glow" variant="glass">
        Brilho intenso no hover
      </PCard>
      <PCard title="🔍 Scale" hover="scale" variant="elevated">
        Aumenta de tamanho
      </PCard>
    </div>
  ),
};

// 🎯 Com ações
export const WithActions: Story = {
  render: () => (
    <div className="max-w-md">
      <PCard
        title="🎯 Card com Ações"
        subtitle="Exemplo completo"
        variant="quantum"
        hover="float"
        glow
        headerAction={
          <PButton size="sm" variant="laser">
            ⚡ Editar
          </PButton>
        }
        footerActions={
          <div className="flex gap-2">
            <PButton variant="danger" size="sm">
              ❌ Cancelar
            </PButton>
            <PButton variant="quantum" size="sm" glow>
              ✅ Confirmar
            </PButton>
          </div>
        }
      >
        <p>Este card demonstra como usar ações no header e footer.</p>
        <p className="mt-2 text-gray-600">
          🚀 Perfeito para formulários, configurações e dashboards.
        </p>
      </PCard>
    </div>
  ),
};

// 📊 Card de dashboard
export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <PCard
        title="📈 Vendas"
        variant="quantum"
        hover="lift"
        glow
        headerAction={<span className="text-2xl">📊</span>}
      >
        <div className="text-3xl font-bold text-primary mb-2">R$ 45.230</div>
        <div className="text-sm text-success">⬆️ +12% este mês</div>
      </PCard>

      <PCard
        title="👥 Usuários"
        variant="glass"
        hover="float"
        glow
        headerAction={<span className="text-2xl">👥</span>}
      >
        <div className="text-3xl font-bold text-secondary mb-2">1.234</div>
        <div className="text-sm text-warning">⚡ +5% esta semana</div>
      </PCard>

      <PCard
        title="⚡ Performance"
        variant="elevated"
        hover="glow"
        glow
        headerAction={<span className="text-2xl">🚀</span>}
      >
        <div className="text-3xl font-bold text-success mb-2">98.5%</div>
        <div className="text-sm text-success">✅ Excelente</div>
      </PCard>
    </div>
  ),
};

// 🎮 Playground interativo
export const Playground: Story = {
  args: {
    title: "🎮 Card Interativo",
    subtitle: "Teste todas as funcionalidades",
    children:
      "Este é um card de demonstração onde você pode testar todas as propriedades disponíveis.",
    variant: "quantum",
    hover: "float",
    glow: true,
    padding: true,
  },
};
