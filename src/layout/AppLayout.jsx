import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const AppLayout = () => {
  return (
    <div className="app">
      <NavBar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout