import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
    title: 'Form/Input',
    component: Input,
    parameters: {

    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputTest: Story = {
    args: {
        name: "test"
    }
};