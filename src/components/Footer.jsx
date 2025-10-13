import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <div className="flex h-10 justify-end bg-white items-center px-4">
      <img src={logo} alt="logo" className="h-15 " />
    </div>
  );
}