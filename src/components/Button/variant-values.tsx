import { ButtonData } from "./Button.types"

const primaryButtonVariant: ButtonData = {
    color: 'text-white',
    container: 'border-emerald-500 bg-emerald-500 hover:bg-emerald-600 hover:border-emerald-600',
}
const secondaryButtonVariant: ButtonData = {
    color: 'text-white',
    container: 'border-rose-400 bg-rose-400 hover:bg-rose-500 hover:border-rose-500',
}

const dangerButtonVariant: ButtonData = {
    color: 'text-white',
    container: 'border-red-500 bg-red-500 hover:bg-red-600 hover:border-red-600',
}
const successButtonVariant: ButtonData = {
    color: 'text-white',
    container: 'border-green-500 bg-green-500 hover:bg-green-600 hover:border-green-600',
}
const warningButtonVariant: ButtonData = {
    color: 'text-white',
    container: 'border-orange-400 bg-orange-400 hover:bg-orange-500 hover:border-orange-500',
}
const infoButtonVariant: ButtonData = {
    color: 'text-white',
    container: 'border-blue-500 bg-blue-500 hover:bg-blue-600 hover:border-blue-600',
}
const darkButtonVariant: ButtonData = {
    color: 'text-white',
    container: 'border-slate-500 bg-slate-500 hover:bg-slate-600 hover:border-slate-600',
}
const lightButtonVariant: ButtonData = {
    color: 'text-slate-400',
    container: 'border-slate-200 bg-slate-200 hover:bg-slate-300 hover:border-slate-300',
}
const linkButtonVariant: ButtonData = {
    color: 'text-slate-800',
    container: 'border-none',
}


const outlinePrimaryButtonVariant: ButtonData = {
    color: 'text-sky-500',
    container: 'border-sky-500 hover:bg-sky-500 hover:text-white'
}
const outlineSecondaryButtonVariant: ButtonData = {
    color: 'text-indigo-500',
    container: 'border-indigo-500 hover:bg-indigo-500 hover:text-white',
}
const outlineDangerButtonVariant: ButtonData = {
    color: 'text-red-500',
    container: 'border-red-500 hover:bg-red-500 hover:text-white',
}
const outlineSuccessButtonVariant: ButtonData = {
    color: 'text-green-500',
    container: 'border-green-500 hover:bg-green-500 hover:text-white',
}
const outlineWarningButtonVariant: ButtonData = {
    color: 'text-orange-400',
    container: 'border-orange-400 hover:bg-orange-400 hover:text-white',
}
const outlineInfoButtonVariant: ButtonData = {
    color: 'text-blue-500',
    container: 'border-blue-500 hover:bg-blue-500 hover:text-white',
}
const outlineDarkButtonVariant: ButtonData = {
    color: '',
    container: '',
}
const outlineLightButtonVariant: ButtonData = {
    color: '',
    container: '',
}


export const ButtonVariantValues = {
   PRIMARY: primaryButtonVariant,
   SECONDARY: secondaryButtonVariant,
   DANGER: dangerButtonVariant,
   SUCCESS: successButtonVariant,
   WARNING: warningButtonVariant,
   INFO: infoButtonVariant,
   DARK: darkButtonVariant,
   LIGHT: lightButtonVariant,
   LINK: linkButtonVariant,
   OUTLINE_PRIMARY: outlinePrimaryButtonVariant,
   OUTLINE_SECONDARY: outlineSecondaryButtonVariant,
   OUTLINE_DANGER: outlineDangerButtonVariant,
   OUTLINE_SUCCESS: outlineSuccessButtonVariant,
   OUTLINE_WARNING: outlineWarningButtonVariant,
   OUTLINE_INFO: outlineInfoButtonVariant,
   OUTLINE_DARK: outlineDarkButtonVariant,
   OUTLINE_LIGHT: outlineLightButtonVariant,
}