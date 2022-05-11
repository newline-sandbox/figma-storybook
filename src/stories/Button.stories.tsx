import { ComponentMeta, Story } from "@storybook/react";
import { SyntheticEvent } from "react";
import Button, { ButtonProps } from "../components/Button";

export default {
  title: "Components/FilledButton",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>;

export const Enabled = Template.bind({});

Enabled.args = {
  primaryCategory: "filled",
  secondaryCategory: "enabled",
  children: <span>Enabled</span>,
};

Enabled.parameters = {
  design: {
    type: "figspec",
    url: "https://www.figma.com/file/Jp0btOGVdHYO6XdPnKtpeu/Material-3-Design-Kit-(Community)?node-id=50716%3A11407",
  },
};

export const Disabled = Template.bind({});

Disabled.args = {
  primaryCategory: "filled",
  secondaryCategory: "disabled",
  children: <span>Disabled</span>,
};

Disabled.parameters = {
  design: {
    type: "figspec",
    url: "https://www.figma.com/file/Jp0btOGVdHYO6XdPnKtpeu/Material-3-Design-Kit-(Community)?node-id=50716%3A11396",
  },
};
