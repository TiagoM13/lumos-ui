import { type Meta, type StoryObj } from "@storybook/react";
import { LInput } from "./input";

const meta: Meta<typeof LInput> = {
  title: "Components/LInput",
  component: LInput,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof LInput>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Invalid email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    placeholder: "Cannot type",
    disabled: true,
  },
};
