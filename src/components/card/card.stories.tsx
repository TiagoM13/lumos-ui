import { type Meta, type StoryObj } from "@storybook/react";
import { LCard } from "./card";

const meta: Meta<typeof LCard> = {
  title: "Components/LCard",
  component: LCard,
  argTypes: {
    title: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof LCard>;

export const Default: Story = {
  args: {
    title: "Card Title",
    children: "This is some content inside the card.",
  },
};

export const WithoutTitle: Story = {
  args: {
    children: "Card without a title.",
  },
};
