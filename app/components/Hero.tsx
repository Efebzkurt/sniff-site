import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-0 flex flex-col md:flex-row items-center gap-12">
        {/* Sol: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8">
            Köpeğin ve Senin İçin <br />
            <span className="text-yellow-500">Sosyalleşme Zamanı</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Sniff, köpek sahiplerini bir araya getiren sosyal bir platformdur.
            Hemen indir, çevrendeki pati dostlarını keşfet.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            id="download"
          >
            <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <span></span> App Store
            </button>
            <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <span>▶</span> Google Play
            </button>
          </div>
        </div>

        {/* Sağ: Görsel Alanı */}
        <div className="flex-1 flex justify-center md:justify-end relative md:-mt-32">
          {/* Resim Wrapper */}
          <div className="relative z-10">
            <Image
              src="/map_image.png"
              alt="Sniff Harita"
              width={600}
              height={1000}
              priority
              // --- YAPILAN GÜNCELLEMELER ---
              // 1. Oran Koruma: h-[850px] w-auto object-contain object-right (Aynen korundu)
              // 2. Mobil Kontrolü: [mask-image:...] kısmının başına 'md:' eklendi.
              //    Bu sayede mobilde maske uygulanmaz, resim tam görünür.
              // 3. Tam Şeffaflık: Maske bitişi 'rgba(...)' yerine 'transparent' yapıldı.
              //    Böylece masaüstünde en sol kısım tamamen beyaza döner.
              className="h-[850px] w-auto object-contain object-right drop-shadow-xl md:[mask-image:linear-gradient(to_left,black_75%,transparent)]"
            />
          </div>

          {/* Dekoratif Sarı Arka Plan */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-300/40 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
