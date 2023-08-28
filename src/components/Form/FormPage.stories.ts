import { Meta, StoryObj } from "@storybook/react";
import { FormPage } from "./FormPage";

const meta = {
    title: 'Form/FormPage',
    component: FormPage,
    parameters: {

    }
} satisfies Meta<typeof FormPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormPageClassic: Story = {
    args: {
    }
};