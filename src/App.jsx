import { Routes, Route } from "react-router";
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/UserContext"
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Basket from "./pages/Basket";
import Lift from "./pages/Lift";
import Explore from "./pages/Explore";
import TheVault from "./pages/TheVault";
import SignUp from "./pages/SignUpForm";
import SignIn from "./pages/SignInForm";



function App() {
 

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/lift" element={<Lift />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/the-vault" element={<TheVault />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
