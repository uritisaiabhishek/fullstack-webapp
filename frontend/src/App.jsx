import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ServicesPage from "./pages/ServicesPage";
import SingleServicePage from "./pages/SingleServicePage";
import BlogPage from "./pages/BlogPage";
import SingleBlogPage from "./pages/SingleBlogPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<SingleServicePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<SingleBlogPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;