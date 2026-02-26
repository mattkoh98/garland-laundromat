import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import BetterDry from "@/assets/Better Dry - Bilingual  (1).png";
import CleanerCloths from "@/assets/Cleaner Cloths - Bilingual  (1).png";
import Comforter from "@/assets/Comforter - Bilingual  (1).png";
import HowMayWeHelp from "@/assets/How May We Help You - Bilingual  (1).png";
import MoreWashOptions from "@/assets/More Wash Options - Bilingual  (1).png";

const posters = [
  { src: BetterDry, alt: "Better Dry - Bilingual Poster" },
  { src: CleanerCloths, alt: "Cleaner Cloths - Bilingual Poster" },
  { src: Comforter, alt: "Comforter - Bilingual Poster" },
  { src: HowMayWeHelp, alt: "How May We Help You - Bilingual Poster" },
  { src: MoreWashOptions, alt: "More Wash Options - Bilingual Poster" },
];

const NextLevelLaundromat = () => {
  const { getText } = useLanguage();

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">



          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {getText("Next Level Laundromat", "Experiencia Bilingüe en la Tienda")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {getText(
              "Explore our modernized laundromat easier and more welcoming for everyone.",
              "Explore nuestra señalización bilingüe que hace que lavar la ropa sea más fácil y acogedor para todos."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posters.map((poster, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-medium hover:-translate-y-1 transition-all duration-300 bg-fresh-white"
            >
              <div className="aspect-[3/4] bg-muted">
                <img
                  src={poster.src}
                  alt={poster.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextLevelLaundromat;

