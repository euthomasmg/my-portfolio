"use client";

import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        {/* LOGO / NOME */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, cursor: "pointer", letterSpacing: 1 }}
        >
          Thomas
        </Typography>

        {/* MENU DE NAVEGAÇÃO */}
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Link href="#inicio">
            <Button color="inherit">Início</Button>
          </Link>
          <Link href="#sobre">
            <Button color="inherit">Sobre</Button>
          </Link>
          <Link href="#projetos">
            <Button color="inherit">Projetos</Button>
          </Link>
          <Link href="#contato">
            <Button color="inherit">Contato</Button>
          </Link>
        </Box>

        {/* BOTÃO DE CONTATO / AÇÃO */}
        <Button
          variant="outlined"
          sx={{
            borderRadius: "9999px",
            textTransform: "none",
            fontWeight: 600,
            padding: "0.5rem 1.5rem",
          }}
        >
          Fale comigo
        </Button>
      </Toolbar>
    </AppBar>
  );
}
