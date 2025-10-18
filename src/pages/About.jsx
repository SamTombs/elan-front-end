
export default function About() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-gray-900"
      style={{
        backgroundImage: `url("${import.meta.env.VITE_BACK_END_SERVER_URL}/media/about.jpg")`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
            Élan embodies the essence of refined performance — where sophistication meets strength. 
            Designed for the modern man who demands excellence in every pursuit, our luxury activewear 
            fuses timeless style with advanced functionality. Every piece is crafted from the finest 
            materials, engineered for precision, comfort, and effortless movement. At Élan, we believe 
            performance should never compromise elegance; it should define it. Our collections are a 
            statement of confidence, discipline, and distinction — for those who move with purpose 
            and live with style.
          </p>
        </div>
      </div>
    </div>
  );
}