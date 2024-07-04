class ComponentHeight {
  readonly large: number = 44
}

class FontSize {
  readonly small: number = 12
  readonly medium: number = 14
  readonly large: number = 16
  readonly largex2: number = 20
}
export default abstract class dimensions {
  static readonly componentHeight: ComponentHeight = new ComponentHeight()
  static readonly fontSize: FontSize = new FontSize()
  static readonly small: number = 20
  static readonly medium: number = 40
  static readonly large: number = 60
}
