import { EMOJIS } from "./emojis";
import { ICONS } from "./hicons";

const hIconSection = {
  name: 'Charts',
  label: 'Charts',
  icons: ICONS.map(icon => icon.icon)
}
const emojsSections = Object.keys(EMOJIS).map(key => {
  const icons = Object.values(EMOJIS[key])
  return {
    name: key,
    label: icons[0],
    icons
  }
})

export const SECTIONS = [hIconSection, ...emojsSections]
