# Lumos UI

[![npm version](https://img.shields.io/npm/v/lumos-ui?color=blue&label=npm)](https://www.npmjs.com/package/lumos-ui)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](./coverage/lcov-report/index.html)
[![Storybook](https://img.shields.io/badge/storybook-view-orange)](http://localhost:6006)

> Lumos UI é uma biblioteca de componentes UI para React com TailwindCSS, TypeScript, Storybook e Vitest.  
> Criada para aprendizado, prototipagem rápida e projetos reais.

---

## 📦 Instalação

Instale via npm ou yarn:

```bash
# npm
npm install lumos-ui

# yarn
yarn add lumos-ui
```

⚠️ Requer React >= 18 e TailwindCSS >= 4.

#### 🛠️ Configuração do TailwindCSS

No arquivo index.css ou main.css do seu projeto:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Todos os componentes da Lumos UI utilizam classes Tailwind para estilização.

#### 🔹 Componentes Disponíveis
##### 1. LButton

Botão customizável com variantes primary e secondary:

```tsx
import { LButton } from 'lumos-ui';

<LButton onClick={() => alert('Clicked!')} variant="primary">
  Clique aqui
</LButton>
```

#### 2. LInput

Campo de input com label, placeholder e mensagens de erro:

```tsx
import { LInput } from 'lumos-ui';

<LInput label="Nome" placeholder="Digite seu nome" error="Obrigatório" />
```
#### 3. LCard

Card simples com título e conteúdo:

```tsx
import { LCard } from 'lumos-ui';

<LCard title="Card Title">
  Conteúdo do card aqui
</LCard>
```

#### 4. LModal

Modal baseado em Headless UI com transições suaves:

```tsx
import { LModal, LButton } from 'lumos-ui';
import { useState } from 'react';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LButton onClick={() => setIsOpen(true)}>Abrir Modal</LButton>
      <LModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Exemplo Modal">
        <p>Conteúdo do modal</p>
        <LButton onClick={() => setIsOpen(false)}>Fechar</LButton>
      </LModal>
    </>
  );
};
```

### 📖 Storybook

Visualize todos os componentes em ação:
```bash
npm run storybook
```

O Storybook inclui exemplos de uso, props e interações.

### 🧪 Testes

Testes unitários com Vitest + React Testing Library:


```bash
# Rodar todos os testes
npm run test

# Rodar testes com UI
npm run test:ui

# Gerar relatório de cobertura
npm run test:coverage
```

### 🎨 Personalização

- TailwindCSS para estilização
- Cores, fontes, paddings, animações e gradientes pré-definidos
- É possível sobrescrever estilos usando className em qualquer componente