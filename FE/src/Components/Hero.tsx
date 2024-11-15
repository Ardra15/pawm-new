import LogoBesar from "../assets/besar.png";

function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center h-screen bg-herobg bg-cover text-white px-8">
      <div className="flex-shrink-0">
        <img src={LogoBesar} alt="Logo Hero" className="w-48 md:w-96" />
      </div>
      <div className="text-center md:text-left mt-6 md:mt-0 md:ml-8 space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">LabDuT</h2>
        <h1 className="text-4xl md:text-6xl font-bold">Your Favorite English Games</h1>
        <p className="text-lg">Platform pembelajaran dan permainan untuk mempelajari bahasa Inggris.</p>
      </div>
    </section>
  );
}

export default Hero;