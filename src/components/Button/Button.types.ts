import { ButtonHTMLAttributes, ReactNode } from "react";
import { ICON_POSITIONS } from "../../constants/icon-positions";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: any;
    iconPosition?: ICON_POSITIONS;
    variant: string;
}

export interface ButtonColourObject {
}

export interface ButtonData {
    color: string;
    container: string;
    icon?: ReactNode;
}
