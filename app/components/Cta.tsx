import React from "react";
import Image from "next/image"; // Image bileşenini eklemeyi unutma
import Link from "next/link";
import { PawPrint } from "lucide-react";

const Cta = () => {
  return (
    <section className="relative py-32 bg-gradient-to-t from-yellow-50 to-white overflow-hidden">
      {/* Rasgele Dağıtılmış Pati Arka Planı (Değişmedi) */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Sol Üst - Küçük */}
        <div className="absolute top-10 left-10 text-yellow-100 opacity-60 transform -rotate-12">
          <PawPrint size={48} />
        </div>

        {/* Sağ Üst - Büyük */}
        <div className="absolute top-12 right-20 text-yellow-100 opacity-50 transform rotate-45">
          <PawPrint size={80} />
        </div>

        {/* Sol Alt - Orta */}
        <div className="absolute bottom-10 left-1/4 text-yellow-200 opacity-40 transform rotate-12">
          <PawPrint size={64} />
        </div>

        {/* Sağ Alt - Küçük */}
        <div className="absolute bottom-20 right-10 text-yellow-200 opacity-60 transform -rotate-45">
          <PawPrint size={56} />
        </div>

        {/* Orta Sağ - Çok Silik */}
        <div className="absolute top-1/2 right-1/4 text-yellow-100 opacity-40 transform rotate-180">
          <PawPrint size={96} />
        </div>

        {/* Sol Kenar - Yarım */}
        <div className="absolute top-1/3 -left-8 text-yellow-100 opacity-50 transform rotate-90">
          <PawPrint size={72} />
        </div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Sniff&apos;e katılmaya hazır mısın?
        </h2>
        <p className="text-xl md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Binlerce köpek sahibi ve sevimli dostumuz seni bekliyor. Hemen bu
          mutlu köpek topluluğunun bir parçası ol, yeni arkadaşlar edin ve
          sosyalleşmeye başla!
        </p>

        {/* --- DEĞİŞEN KISIM: BUTONLAR YERİNE SVG ROZETLER --- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* App Store Badge */}
          <Link
            href="#"
            className="transition-transform hover:scale-105 hover:opacity-90"
          >
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="h-16 w-auto" // CTA olduğu için biraz büyük (h-16) yaptık
            />
          </Link>

          {/* Google Play Badge */}
          <Link
            href="#"
            className="transition-transform hover:scale-105 hover:opacity-90"
          >
            <Image
              src="/play-store-badge.svg"
              alt="Get it on Google Play"
              width={180}
              height={60}
              className="h-16 w-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
