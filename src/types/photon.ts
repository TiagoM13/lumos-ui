// 🚀 Photon UI - Tipos base do sistema

/**
 * Variantes principais dos componentes Photon UI
 */
export type ComponentVariant =
  | "primary" // Azul fóton padrão
  | "secondary" // Violeta quântico
  | "quantum" // Efeito de partículas
  | "plasma" // Gradiente animado
  | "laser" // Borda pulsante
  | "photon" // Brilho interno
  | "success" // Verde quântico
  | "danger" // Vermelho plasma
  | "warning" // Amarelo laser
  | "dark" // Escuro profundo
  | "light"; // Claro luminoso

/**
 * Tamanhos padronizados dos componentes
 */
export type ComponentSize = "sm" | "md" | "lg" | "xl";

/**
 * Intensidade dos efeitos de brilho
 */
export type GlowIntensity = "subtle" | "normal" | "intense" | "quantum";

/**
 * Velocidade das animações
 */
export type AnimationSpeed = "slow" | "normal" | "fast" | "lightspeed";

/**
 * Tema personalizado do Photon UI
 */
export interface PhotonTheme {
  colors: {
    primary: string;
    secondary: string;
    quantum: string;
    plasma: string;
    laser: string;
    success: string;
    danger: string;
    warning: string;
    dark: string;
    light: string;
  };
  effects: {
    glow: GlowIntensity;
    blur: "subtle" | "normal" | "strong";
    particles: boolean;
  };
  animations: {
    speed: AnimationSpeed;
    easing: string;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

/**
 * Propriedades base compartilhadas por todos os componentes Photon
 */
export interface PhotonBaseProps {
  /**
   * Adiciona efeito de brilho ao componente
   */
  glow?: boolean | GlowIntensity;

  /**
   * Adiciona efeito de ondulação ao hover
   */
  ripple?: boolean;

  /**
   * Adiciona animação de partículas
   */
  particles?: boolean;

  /**
   * Classe CSS personalizada
   */
  className?: string;
}
