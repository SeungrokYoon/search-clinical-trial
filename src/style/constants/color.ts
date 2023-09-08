export interface ColorType {
  textColor: string
  buttonBg: string
  bgColor: string
  white: string
  bannerBgColor: string
  keyboardBg: string
  searchTitleText: string
  shadow: string
  divider: string
  placeholder: string
  caret: string
}

export const color: ColorType = {
  textColor: '#000000',
  buttonBg: 'rgb(1, 123, 233)',
  bgColor: 'rgb(240 248 254)',
  white: '#ffffff',
  bannerBgColor: 'rgb(202,233,255)',
  keyboardBg: 'rgb(237,240,242)',
  searchTitleText: 'rgb(105, 112, 119)',
  shadow: 'rgba(214, 214, 214, 1)',
  divider: `rgb(236, 239, 241)`,
  placeholder: 'rgb(167,175,183)',
  caret: 'rgb(25, 118, 210)',
} as const

export default color
