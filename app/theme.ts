"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";

// Definição das cores e tipografia do tema azul escuro
const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#0A192F", // fundo principal
      paper: "#112240",   // fundo de cartões/seções
    },
    primary: {
      main: "#FFD600", // cor de destaque (amarelo)
    },
    text: {
      primary: "#E6F1FF",   // texto principal (azul claro)
      secondary: "#8892B0", // texto secundário (cinza azulado)
    },
  },
  typography: {
    fontFamily: "monospace",
    allVariants: {
      color: "#E6F1FF",
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      color: "#E6F1FF",
    },
    body2: {
      color: "#8892B0",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
};

// Criação e exportação do tema
const darkBlueTheme = createTheme(themeOptions);
export default darkBlueTheme;
