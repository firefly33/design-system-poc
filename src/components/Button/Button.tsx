import { twMerge } from "tailwind-merge";
import { ICON_POSITIONS } from "../../constants/icon-positions";
import { ButtonProps } from "./Button.types"
import useButtonVariant from "./hooks/useButtonVariant"

function Button({ children, variant, icon, iconPosition, ...props }: ButtonProps) {

    const buttonVariant = useButtonVariant(variant)
    
    if (!buttonVariant) return null;
    
  return (
    <button {...props} className={`flex gap-2 px-4 py-2 border-2 border-solid rounded-md ${twMerge(buttonVariant.container, buttonVariant.color)}`}>
        {iconPosition === ICON_POSITIONS.LEFT && icon}
        {children}
        {iconPosition === ICON_POSITIONS.RIGHT && icon}
    </button>
  )
}

export default Button