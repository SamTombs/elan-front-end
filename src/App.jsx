import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Basket from "./pages/Basket";
import Lift from "./pages/Lift";
import Explore from "./pages/Explore";
import TheVault from "./pages/TheVault";
import SignUp from "./pages/SignUpForm";
import SignIn from "./pages/SignInForm";
import basketService from "./services/basketService";


function App() {
  const [basketId, setBasketId] = useState(null);
  useEffect(() => {
    const getBasketId = async () => {
      const basket = await basketService.getBasket();
      setBasketId(basket.id || null);
    };
    getBasketId();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/lift" element={<Lift basketId={basketId} />} />
          <Route path="/explore" element={<Explore basketId={basketId} />} />
          <Route path="/vault" element={<TheVault basketId={basketId} />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
