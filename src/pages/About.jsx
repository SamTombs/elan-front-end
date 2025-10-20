export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          src={`${import.meta.env.VITE_BACK_END_SERVER_URL}/media/about.jpg`}
          alt="about"
          className="w-1/2 h-1/2 py-8"
        />
        <div className="flex items-center justify-center py-8">
          <div className="max-w-4xl mx-auto text-center px-8">
            <p className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
              Élan embodies the essence of refined performance — where
              sophistication meets strength. Designed for the modern man who
              demands excellence in every pursuit, our luxury activewear fuses
              timeless style with advanced functionality. Every piece is crafted
              from the finest materials, engineered for precision, comfort, and
              effortless movement. At Élan, we believe performance should never
              compromise elegance; it should define it. Our collections are a
              statement of confidence, discipline, and distinction — for those
              who move with purpose and live with style.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
