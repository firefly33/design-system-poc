
export interface ComboBoxOption {
    label: string;
    value: unknown;
}

export interface ComboBoxProps {
    name?: string;
    selectedValue?: ComboBoxOption;
    options: ComboBoxOption[];
    onChange?: (option: ComboBoxOption) => void;
}
  