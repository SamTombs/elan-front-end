import ElanHomePage2 from "../assets/ElanHomePage2.jpg";
import VaultCover from "../assets/VaultCover.jpg";
import Explorer1 from "../assets/Explorer1.jpg";
import Lift1 from "../assets/Lift1.jpg";

export default function Dashboard() {
  return (
    <>
      <div className="relative w-screen">
        <img src={ElanHomePage2} alt="dashboard" className="w-full h-auto" />
      </div>
      <section className="relative w-screen">
        <img src={Lift1} alt="dashboard" className="w-full h-auto" />
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
          Lift
        </button>
      </section>
      <section className="relative w-screen">
        <img src={Explorer1} alt="dashboard" className="w-full h-auto" />
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
          Explore
        </button>
      </section>
      <section className="relative w-screen">
        <img src={VaultCover} alt="dashboard" className="w-full h-auto" />
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
          The Vault
        </button>
      </section>
    </>
  );
}
