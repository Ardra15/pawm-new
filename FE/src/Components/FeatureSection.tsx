import FeatureCard from "./FeatureCard";
import Belajar from "../assets/belajar.png";
import Mainan from "../assets/games.png";
import Quiz from "../assets/quiz.png";

function FeatureSection() {
    return (
        <section id="feature" className="py-12 bg-gradient-to-b from-white to-blue-500  h-fit lg:h-screen flex items-center flex-col">
        <div className="text-5xl font-bold text-blue-500 flex items-center justify-center mt-20 mb-20">
            <h1> Here is Our Feature</h1>
        </div>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
          
          <FeatureCard
            image= {Belajar}
            title="Belajar"
            description="Belajar kosakata bahasa Inggris dengan berbagai metode yang menyenangkan."
            link="https://www.merriam-webster.com/"
          />
          <FeatureCard
            image={Mainan}
            title="Mainan"
            description="Mainkan permainan seru untuk mengasah kemampuan bahasa Inggrismu."
            link="lab.html"
          />
          <FeatureCard
            image={Quiz}
            title="Quiz"
            description="Ini adalah saatnya kamu menantang dirimu dengan berbagai kuis yang tersedia."
            link=""
          />
        </div>
      </section>
    );
}

export default FeatureSection;