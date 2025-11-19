"use client";

import { Box, Typography, Container, Button, Chip, Stack } from "@mui/material";

type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Dashboard Financeiro",
    description:
      "Painel responsivo em Next.js com autenticação, gráficos dinâmicos e filtros em tempo real.",
    stack: ["Next.js", "TypeScript", "Chart.js", "Prisma"],
    link: "https://",
    repo: "https://github.com/",
  },
  {
    title: "Landing Page SaaS",
    description:
      "Página de conversão otimizada com A/B testing, formulários integrados e animações leves.",
    stack: ["React", "Tailwind", "Framer Motion"],
    link: "https://",
    repo: "https://github.com/",
  },
  {
    title: "API de Produtos",
    description:
      "API REST com documentação Swagger, caching e testes automatizados para catálogo de produtos.",
    stack: ["Node.js", "NestJS", "PostgreSQL", "JWT"],
    repo: "https://github.com/",
  },
];

export default function Projects() {
  return (
    <Box
      id="projetos"
      sx={{
        background:
          "linear-gradient(180deg, rgba(13,31,56,1) 0%, rgba(13,31,56,0.92) 35%, rgba(10,25,47,0.55) 100%)",
        backgroundColor: "rgba(13,31,56,1)",
        pt: { xs: "calc(3.5rem + 12px)", md: "calc(5rem + 12px)" },
        pb: { xs: "3.5rem", md: "5rem" },
        px: { xs: "1rem", md: "2rem" },
        position: "relative",
        overflow: "hidden",
        mt: 0,
      }}
    >
      <Container maxWidth="lg" sx={{ color: "#E6F1FF", position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: "1.5rem",
            mb: "2.5rem",
          }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1.8rem", md: "2.1rem" },
                letterSpacing: 1,
              }}
            >
              Meus Projetos
            </Typography>
            <Typography
              sx={{
                mt: 1,
                color: "rgba(230,241,255,0.8)",
                maxWidth: "720px",
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.05rem" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Seleção de trabalhos recentes que misturam performance, UX e código limpo.
            </Typography>
          </Box>
          <Button
            variant="outlined"
            href="https://github.com/"
            target="_blank"
            sx={{
              borderColor: "rgba(230,241,255,0.35)",
              color: "#E6F1FF",
              borderRadius: "999px",
              px: "1.2rem",
              py: "0.6rem",
              fontFamily: "Poppins, sans-serif",
              letterSpacing: 0.6,
              "&:hover": { borderColor: "rgba(14,165,233,0.7)", color: "#0EA5E9" },
            }}
          >
            Ver GitHub
          </Button>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: { xs: "1.5rem", md: "1.75rem" },
          }}
        >
          {projects.map((project) => (
            <Box
              key={project.title}
              sx={{
                background: "rgba(13,22,40,0.75)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "18px",
                padding: "1.4rem",
                boxShadow: "0 14px 32px rgba(0,0,0,0.45)",
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
              }}
            >
              <Typography
                component="h3"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "1.2rem", md: "1.3rem" },
                  letterSpacing: 0.4,
                  color: "#E6F1FF",
                }}
              >
                {project.title}
              </Typography>

              <Typography
                sx={{
                  color: "rgba(230,241,255,0.8)",
                  lineHeight: 1.65,
                  fontSize: { xs: "0.98rem", md: "1rem" },
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {project.description}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {project.stack.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    sx={{
                      backgroundColor: "rgba(14,165,233,0.1)",
                      color: "#E6F1FF",
                      border: "1px solid rgba(14,165,233,0.35)",
                      fontFamily: "Poppins, sans-serif",
                    }}
                    size="small"
                  />
                ))}
              </Stack>

              <Box sx={{ display: "flex", gap: 1, mt: "0.5rem" }}>
                {project.link && (
                  <Button
                    variant="contained"
                    href={project.link}
                    target="_blank"
                    sx={{
                      background:
                        "linear-gradient(120deg, rgba(14,165,233,0.2), rgba(14,165,233,0.65))",
                      border: "1px solid rgba(14,165,233,0.4)",
                      color: "#E6F1FF",
                      px: "1rem",
                      borderRadius: "12px",
                      fontFamily: "Poppins, sans-serif",
                      "&:hover": {
                        background:
                          "linear-gradient(120deg, rgba(14,165,233,0.35), rgba(14,165,233,0.8))",
                      },
                    }}
                  >
                    Demo
                  </Button>
                )}
                {project.repo && (
                  <Button
                    variant="outlined"
                    href={project.repo}
                    target="_blank"
                    sx={{
                      borderColor: "rgba(230,241,255,0.35)",
                      color: "#E6F1FF",
                      px: "1rem",
                      borderRadius: "12px",
                      fontFamily: "Poppins, sans-serif",
                      "&:hover": { borderColor: "rgba(14,165,233,0.7)", color: "#0EA5E9" },
                    }}
                  >
                    Código
                  </Button>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
