export type ColorModeString = 'dark' | 'light';
export interface ColorModeState {
  colorMode?: ColorModeString;
  toggleColorMode?: any;
  setColorMode?: any;
}
export enum Color {
  Accent = 'accent',
  Brand = 'brand',
  Bg = 'bg',
  Bg2 = 'bg-2',
  Bg3 = 'bg-3',
  Bg4 = 'bg-4',
  BgAlt = 'bg-alt', // deprecated
  BgLight = 'bg-light', // deprecated
  Invert = 'invert',
  TextHover = 'text-hover',
  TextTitle = 'text-title',
  TextCaption = 'text-caption',
  TextBody = 'text-body',
  Icon = 'icon',
  InputPlaceholder = 'input-placeholder',
  Border = 'border',
  FeedbackAlert = 'feedback-alert',
  FeedbackError = 'feedback-error',
  FeedbackSuccess = 'feedback-success',
}

export type ColorsStringLiteral =
  | 'accent'
  | 'brand'
  | 'bg'
  | 'bg-2'
  | 'bg-3'
  | 'bg-4'
  | 'bg-alt'
  | 'bg-light'
  | 'invert'
  | 'text-hover'
  | 'text-title'
  | 'text-caption'
  | 'text-body'
  | 'icon'
  | 'input-placeholder'
  | 'border'
  | 'feedback-alert'
  | 'feedback-error'
  | 'feedback-success';

export type ColorModeTypes = {
  [key in ColorsStringLiteral]: string;
};

export interface ColorModesInterface {
  light: ColorModeTypes;
  dark: ColorModeTypes;
}

export type ThemeColorsStringLiteral =
  | 'transparent'
  | 'current'
  | 'black'
  | 'white'
  | 'blue'
  | 'blue.100'
  | 'blue.200'
  | 'blue.300'
  | 'blue.400'
  | 'blue.900'
  | 'blue.hover'
  | 'ink'
  | 'ink.50'
  | 'ink.100'
  | 'ink.150'
  | 'ink.200'
  | 'ink.250'
  | 'ink.300'
  | 'ink.400'
  | 'ink.600'
  | 'darken.50'
  | 'darken.100'
  | 'darken.150'
  | 'red'
  | 'green'
  | 'orange'
  | 'cyan'
  | 'feedback.error'
  | 'feedback.success'
  | 'feedback.warning'
  | 'feedback.info';
