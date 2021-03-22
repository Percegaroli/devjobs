export type Theme = 'DarkTheme' | 'LightTheme'

export interface IThemeContext {
  theme: Theme,
  changeTheme: (theme: Theme) => void
}
