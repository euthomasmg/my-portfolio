"use client";

import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";

export default function About() {
  return (
    <Box
      id="sobre"
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(10,25,47,0.05) 0%, #0A192F 18%, #0E1F3A 55%, #112240 100%)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: { xs: "2.5rem 1rem 4rem", md: "4rem 2rem 5rem" },
        minHeight: { xs: "auto", md: "75vh" },
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-120px",
          left: 0,
          right: 0,
          height: "200px",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10,25,47,0.2) 35%, rgba(10,25,47,0.8) 100%)",
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          color: "#E6F1FF",
          marginTop: { xs: "-2rem", md: "-4rem" },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* TÍTULO */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            marginBottom: { xs: "3rem", md: "4rem" },
            color: "#FFD600",
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            textAlign: "center",
          }}
        >
          👨‍💻 Sobre mim
        </Typography>

        {/* CONTEÚDO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center text-center md:text-left">
          {/* FOTO DE PERFIL */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg shadow-yellow-900/30">
              <Image
                src="/foto.jpeg" // coloque sua imagem na pasta public
                alt="Foto de Thomas Mayer Garcez"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* TEXTO */}
          <div className="space-y-6">
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: "#E6F1FF",
              }}
            >
              Sou <strong>Thomas Mayer Garcez</strong>, um desenvolvedor{" "}
              apaixonado por tecnologia e design. Gosto de criar interfaces{" "}
              <strong>modernas, rápidas e funcionais</strong>, transformando
              ideias em experiências reais. 🚀
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: "#E6F1FF",
              }}
            >
              Acredito que cada linha de código é uma chance de{" "}
              <strong>resolver problemas</strong> e{" "}
              <strong>impactar pessoas</strong>. Busco sempre aprender novas
              ferramentas e aprimorar minha lógica de desenvolvimento. ⚙️
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: "#E6F1FF",
              }}
            >
              Estou constantemente explorando tecnologias como{" "}
              <strong>Next.js</strong>, <strong>TypeScript</strong> e{" "}
              <strong>Material UI</strong>, buscando criar algo melhor a cada
              projeto. 💻
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: "#E6F1FF",
              }}
            >
              Fora do código, curto ouvir música, aprender sobre design e
              inovação — sempre buscando novas formas de unir{" "}
              <strong>criatividade e tecnologia</strong>. 💫
            </Typography>
          </div>
        </div>
      </Container>
    </Box>
  );
}
