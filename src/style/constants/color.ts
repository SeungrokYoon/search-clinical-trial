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
}

export const color: ColorType = {
  textColor: '#000000',
  buttonBg: 'rgb(1, 123, 233)',
  bgColor: 'rgb(240 248 254)',
  white: '#ffffff',
  bannerBgColor: 'rgb(202,233,255)',
  keyboardBg: 'rgb(248, 249, 250)',
  searchTitleText: 'rgb(105, 112, 119)',
  shadow: 'rgba(214, 214, 214, 1)',
  divider: `rgb(236, 239, 241)`,
} as const

export default color
