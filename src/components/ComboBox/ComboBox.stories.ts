
import { Meta, StoryObj } from "@storybook/react";
import ComboBox from "./ComboBox";
import { ComboBoxOption } from "./ComboBox.types";


const people: ComboBoxOption[] = [
    { value: 1, label: 'Wade Cooper' },
    { value: 2, label: 'Arlene Mccoy' },
    { value: 3, label: 'Devon Webb' },
    { value: 4, label: 'Tom Cook' },
    { value: 5, label: 'Tanya Fox' },
    { value: 6, label: 'Hellen Schmidt' },
  ]

  let selectedPerson: ComboBoxOption = people[1]

const meta = {
    title: "ComboBox",
    component: ComboBox,
    parameters: {

    },
    tags: ['autodocs'],
    argTypes: {
        options: people
    }
} satisfies Meta<typeof ComboBox>

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        name: "people",
        options: people,
        selectedValue: selectedPerson,
        onChange(option) {
            selectedPerson = option;
        },
    }
}