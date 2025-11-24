"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box
      id="contato"
      sx={{
        background: "rgba(10,25,47,0.95)",
        px: { xs: "1rem", md: "2rem" },
        py: { xs: "2.5rem", md: "3.5rem" },
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          color: "#E6F1FF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.5rem",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "1.5rem", md: "1.8rem" },
            letterSpacing: 0.6,
          }}
        >
          Obrigado por chegar até aqui
        </Typography>

        <Typography
          sx={{
            maxWidth: "640px",
            lineHeight: 1.7,
            color: "rgba(230,241,255,0.85)",
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "1rem", md: "1.05rem" },
          }}
        >
          Se curtiu o que viu, vamos conversar sobre oportunidades!
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ width: "100%", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            href="mailto:thomas2003.mayer@gmail.com"
            sx={{
              background: "rgba(14,165,233,0.15)",
              border: "1px solid rgba(14,165,233,0.45)",
              color: "#E6F1FF",
              px: "1.35rem",
              py: "0.6rem",
              borderRadius: "12px",
              fontFamily: "Poppins, sans-serif",
              letterSpacing: 0.5,
              "&:hover": {
                background: "rgba(14,165,233,0.3)",
              },
            }}
          >
            Enviar email
          </Button>

          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/thomasmayer03/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderColor: "rgba(230,241,255,0.35)",
              color: "#E6F1FF",
              px: "1.35rem",
              py: "0.6rem",
              borderRadius: "12px",
              fontFamily: "Poppins, sans-serif",
              letterSpacing: 0.5,
              "&:hover": { borderColor: "rgba(14,165,233,0.7)", color: "#0EA5E9" },
            }}
          >
            Conectar no LinkedIn
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
