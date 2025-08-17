import { type Meta, type StoryObj } from "@storybook/react";
import { LButton, type ButtonVariant, type ButtonSize } from "./button";

const meta: Meta<typeof LButton> = {
  title: "Components/LButton",
  component: LButton,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "dark",
      ] as ButtonVariant[],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"] as ButtonSize[],
    },
    fullWidth: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof LButton>;

export const Default: Story = {
  args: {
    children: "Click Me",
    variant: "primary",
    size: "md",
    fullWidth: false,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    variant: "primary",
    size: "md",
    fullWidth: true,
  },
};
