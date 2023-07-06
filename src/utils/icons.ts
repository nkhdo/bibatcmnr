import { SECTIONS } from "@/constants/sections";

const EMOJI_REGEX = /^\p{Emoji}$/u;


export const isEmoji = (text?: string) => text && EMOJI_REGEX.test(text)
export const isHIcon = (text?: string) => text && !isEmoji(text)

const randomizeItem = <T>(items: T[]): T => {
  return items[Math.floor(Math.random() * items.length)]
}
export const randomizeIcon = () => {
  const section = randomizeItem(SECTIONS)
  return randomizeItem(section.icons)
}
