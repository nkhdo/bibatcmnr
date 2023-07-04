/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@holistics/configs/tailwind.config.cjs'),
  ],
  content: [
    'src/**/*.{vue,ts}',
  ],
  prefix: 'tw-',
}
