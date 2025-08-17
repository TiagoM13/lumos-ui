// ⚡ Photon UI - Components at the speed of light
// 🚀 Biblioteca de componentes React futurística

import "./index.css";

// 🔘 Componentes principais
export {
  PButton,
  type ButtonVariant,
  type ButtonSize,
} from "./components/button/button";
export { PInput } from "./components/input/input";
export { PCard } from "./components/card/card";
export { PModal } from "./components/modal/modal";

// 🎨 Tipos e interfaces
export type {
  PhotonTheme,
  ComponentVariant,
  ComponentSize,
  GlowIntensity,
  AnimationSpeed,
  PhotonBaseProps,
} from "./types/photon";

// 🌟 Re-exports úteis para compatibilidade (aliases)
export { PButton as PhotonButton } from "./components/button/button";
export { PInput as PhotonInput } from "./components/input/input";
export { PCard as PhotonCard } from "./components/card/card";
export { PModal as PhotonModal } from "./components/modal/modal";

// 📦 Versão da biblioteca
export const PHOTON_VERSION = "1.0.0";

// 🎯 Configurações padrão
export const PHOTON_DEFAULTS = {
  theme: "quantum" as const,
  animation: "fast" as const,
  glow: true as const,
} as const;
