export interface IColor {
  HEX: string;
  RGB: string;
  HSL: string;
  textColorInverted: boolean;
}

export interface ITypography {
  fontFamily: string;
  fontWeight: "Bold" | "Medium";
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  example: string;
}

export interface ICheckbox {
  id: number,
  text: string,
  value: boolean
}

export type TButtonType = 'PrimaryL' | 'PrimaryS' | 'Secondary' | 'Destructive'

export type TButtonSize = 'L' | 'S'
