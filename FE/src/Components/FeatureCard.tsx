interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  isComingSoon?: boolean;
}

function FeatureCard({ image, title, description, link, isComingSoon = false }: FeatureCardProps) {
  return (
    <div className="w-80 bg-blue-950 rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <a href={link} className="inline-block px-4 py-2 bg-white text-blue-950 rounded hover:bg-blue-500 hover:text-white transition font-bold">
          {isComingSoon ? "Coming Soon" : "Read More"}
        </a>
      </div>
    </div>
  );
}

export default FeatureCard;
