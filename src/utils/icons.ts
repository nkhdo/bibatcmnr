const EMOJI_REGEX = /^\p{Emoji}$/u;

export const isEmoji = (text?: string) => text && EMOJI_REGEX.test(text)
export const isHIcon = (text?: string) => text && !isEmoji(text)