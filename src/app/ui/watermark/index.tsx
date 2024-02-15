import { useTheme } from '~/app/hooks/use-theme'
import { Canvas, View } from '~/react-pdf'

// prettier-ignore
const path =
  'M304 216L317.5 258.5L374 199M304 216L374 199M304 216L293 183.5L268.5 200.5L304 216ZM374 199L382.5 231L408.5 176M374 199L408.5 176M374 199L361.5 170M374 199L330.5 177M408.5 176L361.5 170M408.5 176L400.5 121L361.5 170M361.5 170L330.5 177M330.5 177L326 85.5M330.5 177L288.5 149M326 85.5L288.5 149M326 85.5L377 41M326 85.5L272.5 86M326 85.5L289 42.5M288.5 149L255 148.5M288.5 149L272.5 86M377 41L351 100L378 102L377 41ZM377 41L395.5 3M377 41L424 12.5L395.5 3M377 41L339 6.5M377 41L289 42.5M395.5 3L406.5 -4H387L395.5 3ZM395.5 3L339 6.5M339 6.5L285.5 -7L336 -16.5L339 6.5ZM255 148.5L246 209L216 187L255 148.5ZM255 148.5L272.5 86M255 148.5L219.5 126.5M272.5 86L219.5 126.5M272.5 86L247.5 60.5M272.5 86L289 42.5M219.5 126.5L247.5 60.5M247.5 60.5L289 42.5M247.5 60.5L241.5 21M289 42.5L241.5 21M241.5 21L199.5 22M241.5 21L196 -21.5M199.5 22L196 -21.5M199.5 22L178 43.5M196 -21.5L102 16M196 -21.5L178 43.5M102 16L155.5 61.5L124.5 81.5L102 16ZM102 16L178 43.5M64.5 317L86.5 334.5L96.5 315.5L64.5 317ZM290.5 448.5L312.5 397L263.5 412.5L290.5 448.5ZM302.5 308L300 328.5L322.5 326.5L302.5 308ZM364.5 294L388.5 267.5L401.5 274L364.5 294ZM221.5 277L251.5 288.5L250 261.5L221.5 277ZM148.5 184L144.5 206L194 173L148.5 184ZM209.5 81L161 92L164.5 148.5L209.5 81ZM72 194.5L83 171L58.5 173.5L72 194.5ZM1 69.5L9.5 91L46.5 71L1 69.5Z'

export function Watermark() {
  const theme = useTheme()

  // biome-ignore lint/suspicious/noExplicitAny: I don't know what type `doc` is but it does what I need
  function paint(doc: any) {
    return doc.path(path).opacity(0.3).strokeColor(theme.colors.gray).stroke()
  }

  return (
    <View style={{ position: 'absolute', right: -19, top: -22 }}>
      <Canvas paint={paint} style={{ width: 423, height: 470 }} />
    </View>
  )
}
