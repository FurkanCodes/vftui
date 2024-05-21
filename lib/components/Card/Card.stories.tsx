import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    header: "My Custom Card",

    children: <div>Children Content</div>,
  },
};

export const Secondary: Story = {
  args: {
    header: "Another Card",
    className: "text-red bg-black",
  },
};
