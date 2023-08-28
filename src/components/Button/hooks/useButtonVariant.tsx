import { ButtonData } from "../Button.types";
import { ButtonVariantValues } from "../variant-values";

const useButtonVariant = (variant: string): ButtonData | null => {
    const variants = {
        "primary": ButtonVariantValues.PRIMARY,
        "secondary": ButtonVariantValues.SECONDARY,
        "danger": ButtonVariantValues.DANGER,
        "success": ButtonVariantValues.SUCCESS,
        "warning": ButtonVariantValues.WARNING,
        "info": ButtonVariantValues.INFO,
        "dark": ButtonVariantValues.DARK,
        "light": ButtonVariantValues.LIGHT,
        "link": ButtonVariantValues.LINK,

        "outline-primary": ButtonVariantValues.OUTLINE_PRIMARY,
        "outline-secondary": ButtonVariantValues.OUTLINE_SECONDARY,
        "outline-danger": ButtonVariantValues.OUTLINE_DANGER,
        "outline-success": ButtonVariantValues.OUTLINE_SUCCESS,
        "outline-warning": ButtonVariantValues.OUTLINE_WARNING,
        "outline-info": ButtonVariantValues.OUTLINE_INFO,
        "outline-dark": ButtonVariantValues.OUTLINE_DARK,
        "outline-light": ButtonVariantValues.OUTLINE_LIGHT,
    }

    const keys = Object.keys(variants)
    const selectedKey = keys.findIndex(x => x === variant)
    const activeVariant = Object.values(variants).at(selectedKey) as ButtonData

    if (!activeVariant) {
        console.error('ALERT_ERROR_MESSAGE');
        return null;
      }

      
    return activeVariant;
}

export default useButtonVariant