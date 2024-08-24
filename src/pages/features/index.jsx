import { useScroll } from "../scrollContext";
import FeaturesCard from "./FeaturesCard";
import featuresJson from "./features.json";

const Features = () => {
  const { featuresRef } = useScroll();
  return (
    <div ref={featuresRef} className="w-full bg-future11 bg-[length:17%]">
      <div className="py-12 lg:max-w-5xl md:max-w-3xl sm:max-w-lg mx-auto">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {featuresJson.map((feature, index) => (
            <FeaturesCard
              key={index}
              image={feature.image}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
