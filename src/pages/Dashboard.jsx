import ElanHomePage2 from "../assets/ElanHomePage2.jpg";
import VaultCover from "../assets/VaultCover.jpg";
import Explorer1 from "../assets/Explorer1.jpg";
import Lift1 from "../assets/Lift1.jpg";
import { Link } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <>
      {!user ? (
        <div>
          <div className="flex justify-center">
            <h1>DO THE NAVIGATE ON NAV BAR NEXT</h1>
          </div>
          <div className="relative w-screen">
            <img
              src={ElanHomePage2}
              alt="dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      ) : (
        <div>
          <section className="relative w-screen">
            <img src={Lift1} alt="dashboard" className="w-full h-auto" />
            <Link to="lift">
              <button className="absolute bottom-4 cursor-pointer left-1/2 -translate-x-1/2 bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Lift
              </button>
            </Link>
          </section>
          <section className="relative w-screen">
            <img src={Explorer1} alt="dashboard" className="w-full h-auto" />
            <Link to="/explore">
              <button className="absolute bottom-4 cursor-pointer left-1/2 -translate-x-1/2 bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Explore
              </button>
            </Link>
          </section>
          <section className="relative w-screen">
            <img src={VaultCover} alt="dashboard" className="w-full h-auto" />
            <Link to="the-vault">
              <button className="absolute bottom-4 cursor-pointer left-1/2 -translate-x-1/2 bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                The Vault
              </button>
            </Link>
          </section>
        </div>
      )}
    </>
  );
}
