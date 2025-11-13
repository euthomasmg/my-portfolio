"use client";

import { Box, Typography, Container } from "@mui/material";

export default function About() {
  return (
    <Box
      id="sobre"
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(10,25,47,0.02) 0%, rgba(14,32,58,0.2) 40%, rgba(17,40,70,0.45) 100%)",
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
            "linear-gradient(180deg, rgba(10,25,47,0) 0%, rgba(10,25,47,0.08) 50%, rgba(10,25,47,0.25) 100%)",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "2rem", md: "2.75rem" },
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* ILUSTRAÇÃO */}
          <Box
            sx={{
              position: "relative",
              width: { xs: 220, md: 260 },
              height: { xs: 220, md: 260 },
              margin: "0 auto",
              borderRadius: "28px",
              background: "linear-gradient(140deg, #0d1a2f, #142b4d)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 18px 35px rgba(4,7,20,0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "4.8rem", md: "5.4rem" },
                lineHeight: 1,
                textShadow: "0 18px 30px rgba(0,0,0,0.5)",
              }}
              aria-hidden
            >
              {"🧑‍💻"}
            </Box>

            {[
              { label: "HTML", color: "#F97316", top: "10%", left: "-55px" },
              { label: "CSS", color: "#3B82F6", top: "40%", left: "-60px" },
              { label: "JS", color: "#EAB308", top: "70%", left: "-48px" },
              { label: "React", color: "#06B6D4", top: "10%", right: "-55px" },
              { label: "Next", color: "#0EA5E9", top: "40%", right: "-60px" },
              { label: "UI", color: "#8B5CF6", top: "70%", right: "-48px" },
            ].map((chip) => (
              <Box
                key={chip.label}
                sx={{
                  position: "absolute",
                  top: chip.top,
                  left: chip.left,
                  right: chip.right,
                  backgroundColor: "rgba(6,12,24,0.9)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "999px",
                  padding: "0.3rem 0.85rem",
                  fontSize: "0.76rem",
                  fontFamily: "Poppins, sans-serif",
                  color: chip.color,
                  letterSpacing: 0.5,
                  boxShadow: "0 8px 16px rgba(0,0,0,0.35)",
                }}
              >
                {chip.label}
              </Box>
            ))}
          </Box>
          {/* TEXTO */}
          <Box
            sx={{
              width: "100%",
              flex: 1,
              maxWidth: { xs: "100%", md: "620px" },
              margin: { xs: "0 auto", md: "0" },
            }}
          >
            <div className="space-y-5 text-center md:text-left">
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: { xs: "1.05rem", md: "1.15rem" },
                  lineHeight: 1.7,
                  color: "#E6F1FF",
                }}
              >
                Sou Thomas Mayer Garcez, um desenvolvedor apaixonado por
                tecnologia e design. Gosto de criar interfaces modernas,
                rápidas e funcionais, transformando ideias em experiências
                reais. 🚀
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.7,
                  color: "#E6F1FF",
                }}
              >
                Acredito que cada linha de código é uma chance de resolver
                problemas e impactar pessoas. Busco sempre aprender novas
                ferramentas e aprimorar minha lógica de desenvolvimento. ⚙️
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.7,
                  color: "#E6F1FF",
                }}
              >
                Estou constantemente explorando tecnologias como Next.js,
                TypeScript e Material UI, buscando criar algo melhor a cada
                projeto. 💻
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.7,
                  color: "#E6F1FF",
                }}
              >
                Fora do código, curto ouvir música, aprender sobre design e
                inovação — sempre buscando novas formas de unir criatividade e
                tecnologia. 💫
              </Typography>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
