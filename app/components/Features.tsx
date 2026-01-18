import React from "react";

// Tip tanımlaması
interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Pati Arkadaşını Bul",
    description:
      "Pati topluluğundan köpeğinin karakterine en uygun profili bul, eşleş. Patili dostunla olan rutin yürüyüşlerini sosyal bir aktiviteye dönüştür.",
    icon: "🐕",
  },
  {
    title: "Köpek Dostu Mekanları Keşfet",
    description:
      "Anlaşmalı kafe, restoran, veteriner ve markaları görüntüle, köpeğinle rahatça sosyalleşebileceğin yerleri keşfet.",
    icon: "📍",
  },
  {
    title: "Yürüyüşlerini Ve Randevularını Takip Et",
    description:
      "Geçmiş yürüyüş verilerini incele, randevularını kolayca takip et ve aktivitelerini düzenle.",
    icon: "📅",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Neden Sniff?</h2>
          <p className="mt-4 text-gray-500">
            Dostunla en iyi deneyimi yaşaman için.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-3xl hover:bg-yellow-50 transition-colors duration-300 border border-transparent hover:border-yellow-200 group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
