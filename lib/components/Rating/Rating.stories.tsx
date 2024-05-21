import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "./"; // Adjust the import path as needed

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    title: "Rate this item",
    theme: "primary",
    count: 5,
    onChange: (value: number) => console.log(value),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: "primary",
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
  },
};

export const WithTitle: Story = {
  args: {
    title: "Custom Title",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomStarCount: Story = {
  args: {
    count: 10,
  },
};

export const Interactive: Story = {
  args: {
    onChange: (value: number) => alert(`You selected ${value} stars`),
  },
};
