import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    brand: "#E43F00",
    lilac: "#9d7cbf",
    accent: "#ffb238",
    success: "#37b635",
    warning: "#ec1818",
    boxShadow: "#00000066",
    ui: {
      bright: "#e0d6eb",
      light: "#f5f3f7",
      whisper: "#fbfafc",
      input: "#D2D2D2",
    },
    code: "#fcf6f0",
    gray: {
      dark: "hsla(270, 17.119554496%, 0%, 0.92)",
      copy: "hsla(270, 15.797828016000002%, 0%, 0.88)",
      calm: "rgba(0, 0, 0, 0.54)",
    },
    text: {
      primary: "#34495e",
    },
    white: "#fff",
    black: "#000",
  },
  widths: {
    md: 720,
    lg: 960,
    xl: 1140,
  },
  heights: {
    header: 200,
    nav: 50,
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  dimensions: {
    fontSize: {
      regular: 16,
      large: 18,
    },
    radius: {
      input: 8,
    },
    headingSizes: {
      h1: 2.441,
      h2: 1.953,
      h3: 1.563,
      h4: 1.25,
    },
    lineHeight: {
      regular: 1.45,
      heading: 1.2,
    },
    containerPadding: 1.5,
  },
  fonts: {
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
    serif: 'Georgia, "Times New Roman", Times, serif',
    monospace:
      'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace',
  },
};
