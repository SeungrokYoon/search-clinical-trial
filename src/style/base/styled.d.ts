import 'styled-components'
import { FontSizeType } from './../constants/fontSize'
import { ColorType } from '../constants/color'
import { FlexType } from '../constants/flex'

declare module 'styled-components' {
  interface DefaultTheme extends ExtendedTheme {
    color: ColorType
    flex: FlexType
    fontSize: FontSizeType
  }
}
