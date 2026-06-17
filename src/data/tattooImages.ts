const imageModules = import.meta.glob<{ default: string }>(
  [
    '../assets/images/tattoos/tattoo-*.{jpg,jpeg,png,webp}',
    '!../assets/images/tattoos/tattoo-06.{jpg,jpeg,png,webp}',
  ],
  { eager: true },
)

export const tattooImages = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, module]) => module.default)

export function getTattooImage(index: number) {
  if (tattooImages.length === 0) {
    return undefined
  }

  return tattooImages[index % tattooImages.length]
}
