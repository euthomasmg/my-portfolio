"use client";

import { Box, Typography, Avatar, IconButton } from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  WhatsApp,
  Person,
  EmojiObjects,
  Code,
} from "@mui/icons-material";
import AnimatedHeroBackground from "./AnimatedHeroBackground";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white relative overflow-hidden px-4"
      sx={{
        paddingTop: "2rem",
        paddingBottom: "2.5rem",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "80px",
          background:
            "linear-gradient(180deg, rgba(10,25,47,0) 0%, rgba(10,25,47,0.65) 55%, #0A192F 100%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* FOTO */}
        <Avatar
        src="/perfil.jpg"
        alt="Foto de perfil"
        sx={{
            width: 160,
            height: 160,
            border: "4px solid #0A192F", // borda preta/azul escuro
            boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)", // sombra escura suave
            marginBottom: "1.25rem",
        }}
        />

      {/* NOME */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontFamily: "monospace",
          letterSpacing: 1,
        }}
      >
        Thomas Mayer Garcez
      </Typography>

      {/* SUBTÃTULO */}
      <Typography
        variant="h6"
        sx={{
          color: "#ccc",
          fontFamily: "monospace",
          marginTop: "0.25rem",
          marginBottom: "1.25rem",
        }}
      >
        {"</Desenvolvedor Fullstack>"}
      </Typography>

      {/* ÃCONES SOCIAIS */}
      <Box className="flex gap-5 mt-1 mb-5">
        <IconButton
          color="inherit"
          href="https://github.com/euthomasmg"
          target="_blank"
          sx={{
            transition: "0.3s",
            "&:hover": { color: "#FFD600", transform: "scale(1.2)" },
          }}
        >
          <GitHub fontSize="large" />
        </IconButton>

        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/thomasmayer03/"
          target="_blank"
          sx={{
            transition: "0.3s",
            "&:hover": { color: "#0A66C2", transform: "scale(1.2)" },
          }}
        >
          <LinkedIn fontSize="large" />
        </IconButton>

        <IconButton
          color="inherit"
          href="mailto:thomas2003.mayer@gmail.com"
          sx={{
            transition: "0.3s",
            "&:hover": { color: "#EA4335", transform: "scale(1.2)" },
          }}
        >
          <Email fontSize="large" />
        </IconButton>

        <IconButton
        color="inherit"
        href="https://wa.me/5551981210696?text=Ol%C3%A1%2C%20Thomas"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
            transition: "0.3s",
            "&:hover": { color: "#25D366", transform: "scale(1.2)" },
        }}
        >
        <WhatsApp fontSize="large" />
        </IconButton>
      </Box>

            {/* MENU DE SECOES */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.4rem",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        {[
          {
            icon: <Person fontSize="small" />,
            label: "Sobre mim",
            href: "#sobre",
          },
          {
            icon: <EmojiObjects fontSize="small" />,
            label: "Minhas Tecnologias",
            href: "#tecnologias",
          },
          {
            icon: <Code fontSize="small" />,
            label: "Meus Projetos",
            href: "#projetos",
          },
        ].map((item, index) => (
          <Link key={index} href={item.href} style={{ textDecoration: "none" }}>
            <Typography
              component="div"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1.5}
              fontFamily="monospace"
              fontWeight={500}
              color="#ccc"
              sx={{
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { color: "#FFD600", transform: "scale(1.05)" },
              }}
            >
              {item.icon}
              {item.label}
            </Typography>
          </Link>
        ))}
      </Box>

      <AnimatedHeroBackground />
    </Box>
  );
}



