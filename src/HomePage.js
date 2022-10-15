import "./App.css";

// mui
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

// component
import Header from "./components/Header.js";
import MainFeaturedPost from "./components/MainFeaturedPost";

const mainFeaturedPost = {
  title: "Yuk... Asah Pengetahuan Umum Kamu!!!",
  description: "Mari Ikuti Quiz Sekarang Juga...",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
};

const theme = createTheme();

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default HomePage;
