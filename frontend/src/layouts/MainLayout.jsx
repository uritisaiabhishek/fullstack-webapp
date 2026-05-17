import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout() {
  return (
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
  );
}

export default MainLayout;