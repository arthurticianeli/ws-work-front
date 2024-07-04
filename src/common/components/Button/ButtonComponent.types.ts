import { ButtonHTMLAttributes } from 'react'

type TButtonSizes = 'supersmall' | 'extrasmall' | 'small' | 'medium' | 'large' | 'full' | 'auto'

export interface IStyledButtonProps {
  $color?: string
  $transparent?: boolean
  $size?: TButtonSizes
  $fontColor?: string
  $borderSize?: number
}
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  transparent?: boolean
  loading?: boolean
  size?: TButtonSizes
  fontColor?: string
  borderSize?: number
}
