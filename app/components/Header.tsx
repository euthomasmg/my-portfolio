"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(90deg, #0d47a1 0%, #1976d2 100%)",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Toolbar className="max-w-6xl mx-auto flex justify-between w-full px-4">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: 1.2,
          }}
        >
          Thomas<span style={{ color: "#ffeb3b" }}>.</span>
        </Typography>

        <Box className="flex gap-6 items-center">
          <Link href="#inicio">
            <Button color="inherit" sx={{ fontWeight: 500 }}>
              Início
            </Button>
          </Link>
          <Link href="#sobre">
            <Button color="inherit" sx={{ fontWeight: 500 }}>
              Sobre
            </Button>
          </Link>
          <Link href="#projetos">
            <Button color="inherit" sx={{ fontWeight: 500 }}>
              Projetos
            </Button>
          </Link>
          <Link href="#contato">
            <Button color="inherit" sx={{ fontWeight: 500 }}>
              Contato
            </Button>
          </Link>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffeb3b",
              color: "#0d47a1",
              fontWeight: 600,
              borderRadius: "9999px",
              "&:hover": { backgroundColor: "#fdd835" },
            }}
          >
            Fale comigo
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
