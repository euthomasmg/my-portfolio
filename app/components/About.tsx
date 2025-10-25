"use client";

import { Box, Typography, Container, Avatar } from "@mui/material";

export default function About() {
  return (
    <Box
      id="sobre"
      className="min-h-screen flex items-center bg-gray-50"
      sx={{
        paddingTop: { xs: "6rem", md: "8rem" },
        paddingBottom: { xs: "4rem", md: "6rem" },
      }}
    >
      <Container maxWidth="lg" className="flex flex-col md:flex-row items-center gap-10">
        <Avatar
          src="/perfil.jpg" // substitua pela sua imagem
          alt="Foto de Thomas"
          sx={{
            width: 200,
            height: 200,
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            border: "4px solid #1976d2",
          }}
        />

        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#0d47a1",
              marginBottom: "1rem",
            }}
          >
            Sobre mim
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#333",
              lineHeight: 1.8,
              maxWidth: 600,
            }}
          >
            Olá! Sou <strong>Thomas</strong>, desenvolvedor apaixonado por tecnologia e
            criação de interfaces modernas. Busco transformar ideias em experiências
            digitais fluidas e elegantes, com foco em performance, design limpo e
            usabilidade.
            <br />
            <br />
            Atualmente estou aprimorando meus projetos pessoais e portfólios com
            tecnologias como <strong>Next.js</strong>, <strong>TypeScript</strong>,
            <strong> Material UI</strong> e <strong>TailwindCSS</strong>.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
