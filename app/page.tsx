import Header from "./components/Header";
import About from "./components/About";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Box id="inicio" className="h-screen flex items-center justify-center bg-blue-100">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 text-center">
          Bem-vindo ao meu portfólio
        </h1>
      </Box>
      <About />
    </main>
  );
}
