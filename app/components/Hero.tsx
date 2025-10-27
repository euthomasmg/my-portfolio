"use client";

import { Box, Typography, Avatar, IconButton } from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  WhatsApp,
  Person,
  EmojiObjects,
  Build,
  Work,
  Code,
} from "@mui/icons-material";

export default function Hero() {
  return (
    <Box
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white relative overflow-hidden px-4"
      sx={{
        paddingTop: "2rem",   // ↓ menos espaço no topo (~32px)
        paddingBottom: "2.5rem" // ↓ menos espaço no fundo (~40px)
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

      {/* SUBTÍTULO */}
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

      {/* ÍCONES SOCIAIS */}
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

      {/* MENU DE SEÇÕES */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.4rem",       // ↓ espaçamento mais compacto (~22px)
          marginTop: "3rem",   // ↓ antes 4rem (~48px)
          marginBottom: "3rem" // ↓ antes 4rem
        }}
      >
        {[
          { icon: <Person fontSize="small" />, label: "Sobre mim" },
          { icon: <EmojiObjects fontSize="small" />, label: "Minhas Tecnologias" },
          { icon:" </> Meus Projetos" },
        ].map((item, index) => (
          <Typography
            key={index}
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
        ))}
      </Box>

      {/* FUNDO ESTRELADO */}
      <Box
        className="absolute inset-0 -z-10"
        sx={{
          backgroundImage:
            "radial-gradient(1px 1px at 20px 20px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "80px 80px",
          opacity: 0.15,
        }}
      />
    </Box>
  );
}
