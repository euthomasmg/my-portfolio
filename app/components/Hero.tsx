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
    >
      {/* FOTO */}
      <Avatar
        src="/perfil.jpg" // coloque sua imagem em /public/perfil.jpg
        alt="Foto de perfil"
        sx={{
          width: 160,
          height: 160,
          border: "5px solid #FFD600",
          boxShadow: "0 0 25px rgba(255, 214, 0, 0.4)",
          marginBottom: "2rem",
        }}
      />

      {/* NOME */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          fontFamily: "monospace",
          letterSpacing: 1,
        }}
      >
        Thomas
      </Typography>

      {/* SUBTÍTULO */}
      <Typography
        variant="h6"
        sx={{
          color: "#ccc",
          fontFamily: "monospace",
          marginTop: "0.5rem",
          marginBottom: "2rem",
        }}
      >
        {"</Desenvolvedor Fullstack>"}
      </Typography>

      {/* ÍCONES SOCIAIS */}
      <Box className="flex gap-6 mt-2 mb-8">
        <IconButton
          color="inherit"
          href="https://github.com/"
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
          href="https://linkedin.com/"
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
          href="mailto:email@exemplo.com"
          sx={{
            transition: "0.3s",
            "&:hover": { color: "#EA4335", transform: "scale(1.2)" },
          }}
        >
          <Email fontSize="large" />
        </IconButton>

        <IconButton
          color="inherit"
          href="https://wa.me/seunumerowhatsapp"
          sx={{
            transition: "0.3s",
            "&:hover": { color: "#25D366", transform: "scale(1.2)" },
          }}
        >
          <WhatsApp fontSize="large" />
        </IconButton>
      </Box>

      {/* MENU DE SEÇÕES */}
      <Box className="flex flex-col mt-6 gap-5 text-base">
        {[
          { icon: <Person fontSize="small" />, label: "Sobre mim" },
          { icon: <EmojiObjects fontSize="small" />, label: "Minhas Soft Skills" },
          { icon: <Build fontSize="small" />, label: "Minhas Hard Skills" },
          { icon: <Work fontSize="small" />, label: "Meus serviços contratáveis" },
          { icon: <Code fontSize="small" />, label: "Meus Projetos" },
        ].map((item, index) => (
          <Box
            key={index}
            className="flex items-center gap-3 justify-center cursor-pointer transition-all"
            sx={{
              color: "#ccc",
              "&:hover": {
                color: "#FFD600",
                transform: "scale(1.05)",
              },
            }}
          >
            {item.icon}
            <Typography
              variant="body1"
              sx={{ fontFamily: "monospace", fontWeight: 500 }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* FUNDO ESTRELADO SUTIL */}
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
