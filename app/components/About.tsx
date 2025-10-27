"use client";

import { Box, Typography, Container } from "@mui/material";

export default function About() {
  return (
    <Box
      id="sobre"
      sx={{
        minHeight: "80vh", // ↓ antes 100vh → sobe um pouco a seção
        background: "linear-gradient(180deg, #0A192F 0%, #112240 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1rem", // ↓ antes 4rem → menos espaço interno
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          color: "#E6F1FF",
          marginTop: "-1rem", // ↑ move tudo levemente pra cima
        }}
      >
        {/* TÍTULO */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            marginBottom: "2rem",
            color: "#FFD600",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Sobre mim
        </Typography>

        {/* TEXTO */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.9,
            color: "#E6F1FF",
            fontFamily: "Poppins, sans-serif",
            textAlign: "justify",
          }}
        >
          Olá! Me chamo <strong>Thomas Mayer Garcez</strong>, sou um
          desenvolvedor apaixonado por tecnologia, design e criação de
          experiências digitais intuitivas. Sempre busco unir performance,
          estética e usabilidade em cada projeto, transformando ideias em
          soluções práticas e modernas.
          <br />
          <br />
          Atualmente, estudo novas ferramentas e aprimoro minhas habilidades em{" "}
          <strong>Next.js</strong>, <strong>TypeScript</strong> e{" "}
          <strong>Material UI</strong>, focando em interfaces limpas e
          funcionais. Acredito que cada linha de código é uma oportunidade de
          criar algo melhor — mais bonito, mais rápido e mais inteligente.
          <br />
          <br />
          Meu objetivo é seguir evoluindo como profissional, contribuindo com
          projetos que causem impacto real, tanto visual quanto funcional, e que
          despertem aquele “uau” em quem usa. 🚀
        </Typography>
      </Container>
    </Box>
  );
}
