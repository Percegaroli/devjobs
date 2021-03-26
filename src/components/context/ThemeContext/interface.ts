export type Theme = 'DarkTheme' | 'LightTheme'

export type Resolution = 'Mobile' | 'Tablet' | 'Desktop';

export interface IThemeContext {
  theme: Theme,
  changeTheme: (theme: Theme) => void,
}
